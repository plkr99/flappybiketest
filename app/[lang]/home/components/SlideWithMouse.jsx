"use client";
import { Switch } from "@headlessui/react";
import flappyBike from "/assets/images/FlappyBike_Red.png";
import Image from "next/image";
import { classNames } from "@/helpers/constants";
const SlideWithMouse = ({ dict, enabled, setEnabled }) => {
  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${
        enabled ? "bg-green-100" : "bg-white"
      } shadow-inner-2xl relative inline-flex h-24 w-72 items-center rounded-full transition-colors outline-none ring-0`}
    >
      <span
        className={`${
          enabled
            ? "translate-x-[197px] bg-green-400"
            : "translate-x-1 bg-gray-400"
        } duration-500 p-2 flex items-center justify-center h-[85px] w-[85px] transform rounded-full transition-transform`}
      >
        <Image
          src={flappyBike}
          alt="FlappyBike_Red"
          className="w-full h-auto object-cover"
        />
      </span>
      <div
        className={classNames(
          "flex-1 flex justify-center items-center transform transition-transform duration-500",
          enabled ? "-translate-x-24" : "translate-x-1"
        )}
      >
        <span
          className={classNames(
            enabled ? "text-blue-400" : "text-black",
            "w-36"
          )}
        >
          {enabled ? dict.stop : dict.start}
        </span>
      </div>
    </Switch>
  );
};

export default SlideWithMouse;
