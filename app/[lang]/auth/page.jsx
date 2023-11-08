import { getDictionary } from "@/lib/dictionary";
import BodyCard from "./components/body";
export default async function AuthentificationPage({ params }) {
  const dict = await getDictionary(params.lang);
  return <BodyCard lang={params.lang} dict={dict} />;
}
