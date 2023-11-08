import Loading from "@/app/[lang]/components/loading";
import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";

export default function InfoModal({ dict, info, setInfo }) {
  return (
    <Transition appear show={true} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => {
          setInfo({ open: false });
        }}
      >
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
                {info.loading ? (
                  <Loading text={dict.loading} />
                ) : (
                  <>
                    <Dialog.Title
                      as="h3"
                      className="text-2xl text-center text-green-500"
                    >
                      {dict.title}
                    </Dialog.Title>
                    <div className="mt-2">
                      <ul className="space-y-2">
                        <li className="flex items-center justify-between">
                          <span>{dict.time}</span>
                          <span>{info.time} min</span>
                        </li>
                        <li className="flex items-center justify-between">
                          <span>{dict.distance}</span>
                          <span>{info.distance} km</span>
                        </li>
                        <li className="flex items-center justify-between">
                          <span>{dict.credits}</span>
                          <span>{info.credit}</span>
                        </li>
                      </ul>
                    </div>
                  </>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
