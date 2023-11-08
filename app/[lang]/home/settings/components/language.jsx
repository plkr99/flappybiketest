"use client";
import { classNames } from "@/helpers/constants";
import { Disclosure, RadioGroup } from "@headlessui/react";
import { CheckIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { usePathname, useRouter } from "next/navigation";
const languges = [
  {
    name: "Deutsch",
    key: "de",
  },
  {
    name: "English",
    key: "en",
  },
];
export default function LanguageCard({ dict, lang }) {
  const pathName = usePathname();
  const route = useRouter();
  const selectedLanguge = languges.find((item) => item.key === lang);
  const redirectedPathName = (locale) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    route.replace(segments.join("/"));
  };
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex w-full items-center justify-between text-left text-lg outline-none ring-0">
            <div className="space-y-2 flex flex-col ">
              <span className="text-black ">{dict.language}</span>
              <span className="text-gray-400 font-bold">
                {selectedLanguge.name}
              </span>
            </div>
            <ChevronUpIcon
              className={`${
                open ? "rotate-180 transform" : "rotate-90"
              } h-5 w-5 text-black`}
            />
          </Disclosure.Button>
          <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm !m-0 text-gray-500">
            <RadioGroup value={lang} onChange={redirectedPathName}>
              <div className="space-y-2">
                {languges.map((languge) => (
                  <RadioGroup.Option
                    key={languge.key}
                    value={languge.key}
                    className={({ active, checked }) =>
                      classNames(
                        "relative flex cursor-pointer rounded-lg focus:outline-none px-4 py-2",
                        checked ? "bg-gray-200" : "hover:bg-gray-100"
                      )
                    }
                  >
                    {({ active, checked }) => (
                      <>
                        <div className="flex w-full items-center justify-between">
                          <RadioGroup.Label
                            as="p"
                            className={`text-lg font-medium  ${
                              checked ? "text-black" : "text-gray-400"
                            }`}
                          >
                            {languge.name}
                          </RadioGroup.Label>

                          {checked && (
                            <div className="shrink-0 text-white bg-black p-1 rounded-full ">
                              <CheckIcon className="h-5 w-5" />
                            </div>
                          )}
                        </div>
                      </>
                    )}
                  </RadioGroup.Option>
                ))}
              </div>
            </RadioGroup>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
