"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Loading from "./loading";
function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
export default function CheckUserLoged({ lang }) {
  const pathName = usePathname();
  const route = useRouter();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const checkUser = async () => {
      if (localStorage.getItem("userLoged")) {
        if (pathName.split("/")?.[2] !== "home") {
          route.replace(`/${lang}/home`);
          await delay(1000);
        }
        setLoading(false);
        return;
      }
      if (pathName.split("/")?.[2] === "home") {
        route.replace(`/${lang}`);
        await delay(1000);
      }
      setLoading(false);
    };
    checkUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return loading ? (
    <div className="absolute bg-gray-100 inset-0 z-[999]">
      <Loading text={loading} />
    </div>
  ) : (
    <></>
  );
}
