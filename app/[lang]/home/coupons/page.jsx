import { getDictionary } from "@/lib/dictionary";
import BodyCard from "./components/body";

export default async function CouponsPage({ params }) {
  const dict = await getDictionary(params.lang);

  return <BodyCard lang={params.lang} dict={dict} />;
}
