"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import profile from "@/assets/images/profile_image.png";
import marker from "@/assets/images/marker.png";
import { classNames } from "@/helpers/constants";
import SidebarWidget from "./sidebar";
import SlideWithMouse from "./SlideWithMouse";
import Loading from "@/app/[lang]/components/loading";
import InfoModal from "./modals/info";
const MyAwesomeMap = dynamic(() => import("./map/map"), {
  loading: () => <Loading text={"Wait a Second Map is Loading..."} />,
  ssr: false,
});

export default function BodyCard({ lang, dict }) {
  const [position, setPosition] = useState(null);
  const [enabled, setEnabled] = useState(false);
  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState({ open: false });
  const [startEndPoints, setStartEndPoints] = useState([]);
  const [updateLocation, setUpdateLocation] = useState(Date.now());
  const getCoordinate = (position) => [position.lng, position.lat];
  function secondsToMinutes(seconds) {
    return parseInt(seconds / 60000, 10);
  }
  function metersTokilometers(meters) {
    return (meters / 1000).toFixed(1);
  }
  useEffect(() => {
    setUpdateLocation(Date.now());
  }, [enabled]);

  useEffect(() => {
    if (position !== null) {
      if (enabled) {
        setStartEndPoints(getCoordinate(position));
        return;
      }
      if (startEndPoints.length) {
        setInfo((info) => ({ ...info, loading: true, open: true }));
        fetch(
          "https://graphhopper.com/api/1/route?key=API_KEY",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              points: [startEndPoints, getCoordinate(position)],
              snap_preventions: ["motorway", "ferry", "tunnel"],
              details: ["road_class", "surface"],
              profile: "bike",
              locale: "en",
              instructions: true,
              calc_points: true,
              points_encoded: false,
            }),
          }
        )
          .then(async (res) => {
            let data = await res.text();
            data = JSON.parse(data);
            setInfo((info) => ({
              ...info,
              time: secondsToMinutes(data.paths[0].time),
              distance: metersTokilometers(data.paths[0].distance),
              credit: parseInt(data.paths[0].distance, 10),
              loading: false,
              polyline: data.paths[0].points.coordinates.map((subArray) => [
                subArray[1],
                subArray[0],
              ]),
            }));
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {
            setStartEndPoints([]);
          });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [position]);

  return (
    <>
      <SidebarWidget
        lang={lang}
        dict={dict.page.home.menu}
        open={open}
        setOpen={setOpen}
      />
      <div className="relative z-10 w-full h-full flex flex-col">
        <button
          type="button"
          className="absolute h-20 w-20 top-7 left-7 rounded-full overflow-hidden bg-red-300 p-2 border-2 border-green-600 z-[500]"
          onClick={() => setOpen(true)}
        >
          <span className="absolute -inset-0.5" />
          <span className="sr-only">Open menu</span>
          <Image
            src={profile}
            alt="profile"
            className="w-20 h-20 object-cover object-bottom"
          />
        </button>
        <div className="flex-1 overflow-hidden">
          <MyAwesomeMap
            info={info}
            enabled={enabled}
            position={position}
            setPosition={setPosition}
            updateLocation={updateLocation}
          />
          <div
            className={classNames(
              enabled ? "flex" : "hidden",
              "items-center justify-center flex-col space-y-24 h-full"
            )}
          >
            <span className="font-bold text-5xl max-w-xs text-center">
              {dict.page.home.driveCarefully}
            </span>
            <Image
              src={marker}
              alt="marker"
              className="w-36 h-36 object-cover object-bottom"
            />
          </div>
        </div>
        <div className="flex justify-center items-center py-5">
          <SlideWithMouse
            dict={dict.page.home.button}
            enabled={enabled}
            setEnabled={setEnabled}
          />
        </div>
      </div>
      {info.open && (
        <InfoModal dict={dict.page.home.modal} info={info} setInfo={setInfo} />
      )}
    </>
  );
}
