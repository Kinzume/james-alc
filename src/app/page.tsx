import Image from "next/image";
import Navigation from "./ui/Navigation";
import HeroBg from "./ui/HeroBg";
import Link from "next/link";
import Reel from "./ui/Reel";

export default function Home() {
  return (
    <main className="">
      <HeroBg />
      <Link
        href="/"
        className="absolute left-0 top-0 m-4 opacity-100 transition-opacity hover:opacity-70"
      >
        <Image
          src="/logo.png"
          alt="james-alc logo"
          width={0}
          height={0}
          className="h-auto w-16"
        />
      </Link>
      <Navigation />
      <Reel />
    </main>
  );
}
