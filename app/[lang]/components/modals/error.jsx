import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
export default function ErrorModal({ modal, errorMessage, closeModal }) {
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
                <Dialog.Title
                  as="h3"
                  className="flex space-x-2 text-xl text-red-700 "
                >
                  <ExclamationCircleIcon className="w-8 h-8" />{" "}
                  <span>{modal.error}</span>
                </Dialog.Title>
                <div className="mt-2">
                  <h3 className="text-base font-medium leading-6 text-gray-900">
                    {errorMessage}
                  </h3>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="w-36 inline-flex float-right justify-center rounded-3xl border border-transparent bg-blue-100 px-4 py-2 text-xl font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={closeModal}
                  >
                    {modal.close}
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
