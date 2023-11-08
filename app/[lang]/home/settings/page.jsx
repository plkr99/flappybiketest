import { getDictionary } from "@/lib/dictionary";
import BodyCard from "./components/body";

export default async function SettingsPage({ params }) {
  const dict = await getDictionary(params.lang);

  return <BodyCard dict={dict} lang={params.lang} />;
}
