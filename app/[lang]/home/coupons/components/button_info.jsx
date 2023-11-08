import { classNames } from "@/helpers/constants";
import { useState } from "react";
import ScanBarCodeModal from "./modals/scan_bar_code";

const ButtonInfo = ({ dict, info, focusedElement, setFocusedElement }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        onClick={() => setFocusedElement(info.id)}
        className="relative w-full h-36 bg-green-200 flex items-center justify-center p-2 overflow-hidden cursor-pointer"
      >
        <span className="text-black text-lg text-center">{info.title}</span>
        <div
          className={classNames(
            "absolute inset-0 w-full h-full bg-gray-600/80 flex flex-col items-center justify-center space-y-2",
            "transform transition-transform duration-500",
            focusedElement === info.id ? "translate-y-0" : "translate-y-36"
          )}
        >
          <span className="text-sm text-center">{info.credit} Credits</span>
          <button
            onClick={() => setOpen(true)}
            className="px-4 py-2 rounded-3xl bg-green-400"
          >
            {dict.button}
          </button>
        </div>
      </div>
      {open && (
        <ScanBarCodeModal
          dict={dict}
          setOpen={setOpen}
          barCode={info.barcode}
        />
      )}
    </>
  );
};

export default ButtonInfo;
