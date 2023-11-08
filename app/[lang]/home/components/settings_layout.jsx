"use client";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

export default function SettingsLayout({ title, lang, children }) {
  const router = useRouter();
  return (
    <div className="flex w-full h-full flex-col overflow-y-auto bg-white">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-start space-y-2 md:space-x-5 md:space-y-0 px-4 pt-12 pb-20 bg-gradient-to-b from-green-500 to-green-50">
        <button
          type="button"
          className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-900"
          onClick={() => router.replace(`/${lang}/home/`)}
        >
          <span className="sr-only">Go back</span>
          <ArrowLeftIcon className="h-6 w-6" aria-hidden="true" />
        </button>
        <h3 className="font-bold text-2xl">{title}</h3>
      </div>

      <div className="z-10 -mt-10 rounded-tl-[50px] px-8 py-6 bg-white flex-1 flex flex-col justify-between">
        {children}
      </div>
    </div>
  );
}
