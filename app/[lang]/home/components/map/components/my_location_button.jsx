import { MapPinIcon } from "@heroicons/react/24/outline";
import { useMapEvents } from "react-leaflet";
import Control from "react-leaflet-custom-control";
const MyLocationButton = ({ setPosition }) => {
  const map = useMapEvents({
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });
  return (
    <Control prepend position="bottomright">
      <button
        className="p-2 bg-white rounded-full flex items-center justify-center"
        title="find my location"
        onClick={() => map.locate()}
      >
        <MapPinIcon className="w-8 h-8 text-black" />
      </button>
    </Control>
  );
};

export default MyLocationButton;
