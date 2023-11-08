import { MapContainer, Polyline, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./map.css";
import LocationMarker from "./components/location_marker";
import MyLocationButton from "./components/my_location_button";
import { classNames } from "@/helpers/constants";

export default function MapWidget({
  info,
  enabled,
  position,
  setPosition,
  updateLocation,
}) {
  return (
    <div className={classNames(!enabled ? "block" : "hidden", "w-full h-full")}>
      <MapContainer center={[51.505, -0.09]} zoom={13} zoomControl={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker
          position={position}
          setPosition={setPosition}
          updateLocation={updateLocation}
        />
        {info.polyline && (
          <Polyline
            pathOptions={{ fillColor: "blue" }}
            positions={info.polyline}
          />
        )}
        <MyLocationButton setPosition={setPosition} />
      </MapContainer>
    </div>
  );
}
