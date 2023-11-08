"use client";
import { Tab } from "@headlessui/react";
import { useEffect, useState } from "react";
import { classNames } from "@/helpers/constants";
import LoginTabPanel from "./login";
import SignupTabPanel from "./signup";
export default function BodyCard({ lang, dict }) {
  const [defaultIndex, setDefaultIndex] = useState(0);
  const { page, navigation } = dict;
  useEffect(() => {
    const type = window.location.hash;
    setDefaultIndex(type === "#signup" ? 1 : 0);
  }, []);

  let typesAuth = [
    {
      key: 1,
      title: navigation.login,
      componentTabPanel: LoginTabPanel,
    },
    {
      key: 2,
      title: navigation.signup,
      componentTabPanel: SignupTabPanel,
    },
  ];
  return (
    <div className="relative z-10 w-full max-w-xl py-8 self-start px-5">
      <Tab.Group selectedIndex={defaultIndex} onChange={setDefaultIndex}>
        <Tab.List className="flex space-x-5 items-start">
          {typesAuth.map((typeAuth) => (
            <Tab
              key={typeAuth.key}
              className={({ selected }) =>
                classNames(
                  "text-3xl font-medium",
                  "focus:outline-none focus:ring-0",
                  selected ? "text-gray-700" : "text-gray-100 "
                )
              }
            >
              {({ selected }) => (
                <div>
                  <span>{typeAuth.title}</span>
                  {selected && (
                    <div className="w-full h-[6px] bg-white rounded-3xl" />
                  )}
                </div>
              )}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-10">
          {typesAuth.map((typeAuth) => (
            <Tab.Panel
              key={typeAuth.key}
              className={classNames("ring-0 ring-offset-0 ocus:outline-none")}
            >
              <typeAuth.componentTabPanel
                lang={lang}
                dict={page}
                setDefaultIndex={setDefaultIndex}
              />
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
