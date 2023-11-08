import { Dialog, Transition } from "@headlessui/react";
import { usePathname } from "next/navigation";
import React, { Fragment, useEffect } from "react";

export default function TermsConditionsModal({ closeModal, modal }) {
  return (
    <Transition appear show={true} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
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
                <div className="mt-2">
                  <h3 className="text-xl font-medium leading-6 text-gray-900">
                    {modal.terms.title}
                  </h3>
                </div>

                <div className="space-x-5 mt-4">
                  <button
                    type="button"
                    className="w-36 inline-flex justify-center rounded-3xl border border-transparent bg-green-100 px-4 py-2 text-xl font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                    onClick={() => {
                      localStorage.setItem("TermsConditions", true);
                      closeModal();
                    }}
                  >
                    {modal.terms.approve}
                  </button>
                  <button
                    type="button"
                    className="w-36 inline-flex justify-center rounded-3xl border border-transparent bg-red-100 px-4 py-2 text-xl font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                    onClick={closeModal}
                  >
                    {modal.terms.denied}
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
