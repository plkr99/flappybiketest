import { Pixelify_Sans } from "next/font/google";
import bg from "/assets/images/background.jpg";
import "./globals.css";
import CheckPermissionsSection from "./components/checkpermissions";
import { classNames } from "@/helpers/constants";
import Image from "next/image";
import { i18n } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import CheckUserLoged from "./components/checkUserLoged";

const pixelify = Pixelify_Sans({
  subsets: ["cyrillic"],
  display: "swap",
  adjustFontFallback: false,
});
export const metadata = {
  title: "FlappyBike",
  description: "FlappyBike app",
};
export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({ children, params }) {
  const { modal } = await getDictionary(params.lang);
  return (
    <html lang={params.lang} className="bg-white ">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
      </head>
      <body className={classNames(pixelify.className)}>
        <main className="relative flex items-center justify-center h-[100dvh]">
          <Image
            src={bg}
            alt="background"
            className="fixed inset-0 w-full h-full object-cover object-bottom -z-[1]"
          />
          {children}
          <CheckUserLoged lang={params.lang} />
        </main>
        <CheckPermissionsSection modal={modal} />
      </body>
    </html>
  );
}
