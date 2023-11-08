"use client";
import { Dialog, Transition } from "@headlessui/react";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React, { Fragment } from "react";
import profile from "@/assets/images/profile_image.png";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SidebarWidget({ lang, dict, open, setOpen }) {
  const router = useRouter();
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-[500]" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 z-40 flex">
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
              <div className="relative flex items-center justify-center px-4 pt-12 pb-20 bg-gradient-to-b from-green-500 to-green-50">
                <button
                  type="button"
                  className="absolute top-12 left-5 -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-900"
                  onClick={() => setOpen(false)}
                >
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Close menu</span>
                  <ArrowLeftIcon className="h-6 w-6" aria-hidden="true" />
                </button>
                <div className="flex flex-col items-center">
                  <div className="h-20 w-20 rounded-full overflow-hidden bg-red-300 p-2 border-2 border-green-600">
                    <Image
                      src={profile}
                      alt="profile"
                      className="w-20 h-20 object-cover object-bottom"
                    />
                  </div>
                  <span className="text-lg text-black">Pascali Mustari</span>
                </div>
              </div>

              <div className="relative z-10 -mt-10 rounded-tl-[50px] px-8 py-6 bg-white flex-1 flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="-m-2 block p-2 font-medium text-gray-900">
                      {dict.credit}
                    </span>
                    <span className="-m-2 block p-2 font-medium text-gray-900">
                      1450
                    </span>
                  </div>
                  <hr />
                  <div className="flow-root">
                    <Link
                      href={`/${lang}/home/coupons`}
                      className="-m-2 block p-2 font-medium text-gray-900"
                    >
                      {dict.coupons}
                    </Link>
                  </div>
                  <hr />
                  <div className="flow-root">
                    <Link
                      href={`/${lang}/home/settings`}
                      className="-m-2 block p-2 font-medium text-gray-900"
                    >
                      {dict.settings}
                    </Link>
                  </div>
                  <hr />
                  <div className="flow-root">
                    <Link
                      href={`/${lang}/home/support`}
                      className="-m-2 block p-2 font-medium text-gray-900"
                    >
                      {dict.support}
                    </Link>
                  </div>
                </div>
                <button
                  onClick={() => {
                    localStorage.removeItem("userLoged");
                    router.replace(`/${lang}/`);
                  }}
                  className="bg-red-100 text-red-700 rounded-3xl px-2 py-4"
                >
                  {dict.logout}
                </button>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
