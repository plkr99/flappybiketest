import Image from "next/image";
import flappyBike from "/assets/images/FlappyBike_Red.png";
import Link from "next/link";
import { getDictionary } from "@/lib/dictionary";
import supabase from "../config/supabaseclient";
export default async function Home({ params }) {
  const { page, navigation } = await getDictionary(params.lang);
  const { data } = await supabase.from("profiles").select();
  console.log(data);
  return (
    <div className="relative z-10 flex w-full max-w-xl flex-col items-center justify-center px-5">
      <h3 className="text-5xl text-black font-bold mb-8">FlappyBike</h3>
      <Image
        src={flappyBike}
        alt="FlappyBike_Red"
        className="w-full max-w-[380px] h-auto object-cover mb-6"
      />
      <Link
        className="text-xl text-center py-5 w-full bg-white text-black rounded-full mb-16"
        href={`${params.lang}/auth#login`}
      >
        {page.start.startButton}
      </Link>
      <span>
        <span>{page.start.dontHaveAccount}</span>{" "}
        <Link className="underline" href={`/${params.lang}/auth#signup`}>
          {navigation.signup}
        </Link>
      </span>
      {/* <pre>{JSON.stringify(notes, null, 2)}</pre>; */}
    </div>
  );
}
