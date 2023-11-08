import BodyCard from "./components/body";
import { getDictionary } from "@/lib/dictionary";
export default async function HomeScreen({ params }) {
  const dict = await getDictionary(params.lang);
  return <BodyCard lang={params.lang} dict={dict} />;
}
