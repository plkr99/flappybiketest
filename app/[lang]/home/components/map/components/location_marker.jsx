import { useEffect, useState } from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet";
import L, { Icon } from "leaflet";
export const customMarker = new Icon({
  iconUrl: "/marker.png",
  iconSize: [38, 38],
});
export default function LocationMarker({
  position,
  setPosition,
  updateLocation,
}) {
  const map = useMapEvents({
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  useEffect(() => {
    map.locate();
  }, [map, updateLocation]);

  return position === null ? null : (
    <Marker position={position} icon={customMarker}>
      <Popup>You are here</Popup>
    </Marker>
  );
}
