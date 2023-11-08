"use client";
import { useState } from "react";
import SettingsLayout from "../../components/settings_layout";
import ButtonInfo from "./button_info";

const options = [
  {
    id: 1,
    title: "10 % Restaurant",
    credit: "1000",
    barcode: "barcode123",
  },
  {
    id: 2,
    title: "20 % Laden",
    credit: "2000",
    barcode: "barcode123",
  },
  {
    id: 3,
    title: "10 % Laden",
    credit: "1000",
    barcode: "barcode123",
  },
  {
    id: 4,
    title: "10 % auf nächtsten Einkauf",
    credit: "1000",
    barcode: "barcode123",
  },
  {
    id: 5,
    title: "10 % auf nächtsten Einkauf",
    credit: "1000",
    barcode: "barcode123",
  },
  {
    id: 6,
    title: "Gratis Popcorn Kinobesuch",
    credit: "2000",
    barcode: "barcode123",
  },
];
export default function BodyCard({ lang, dict }) {
  const [focusedElement, setFocusedElement] = useState();

  return (
    <SettingsLayout lang={lang} title={dict.page.coupons.title}>
      <div className="grid grid-cols-2 mx-auto w-full max-w-xl gap-5">
        {options.map((info) => (
          <ButtonInfo
            dict={dict.page.coupons}
            key={info.id}
            info={info}
            focusedElement={focusedElement}
            setFocusedElement={setFocusedElement}
          />
        ))}
      </div>
    </SettingsLayout>
  );
}
