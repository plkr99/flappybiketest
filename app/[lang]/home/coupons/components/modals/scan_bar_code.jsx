import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import React, { Fragment } from "react";
import Barcode from "react-jsbarcode";

export default function ScanBarCodeModal({ dict, setOpen, barCode }) {
  return (
    <Transition appear show={true} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden bg-white p-6 rounded-3xl text-left align-middle shadow-xl transition-all">
                <>
                  <Dialog.Title
                    as="div"
                    className="flex items-start justify-between"
                  >
                    <h3 className="text-lg text-gray-900">
                      {dict.modal.title}
                    </h3>
                    <XMarkIcon
                      onClick={() => setOpen(false)}
                      className="h-6 w-6 cursor-pointer"
                    />
                  </Dialog.Title>
                  <div className="mt-2 flex justify-center">
                    <Barcode value={barCode} />
                  </div>
                </>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
