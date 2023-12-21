"use client";

import Image from "next/image";
import { useState } from "react";

export default function Reel() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="absolute left-[10%] top-[45%]">
        <button
          className="flex items-center space-x-6 text-4xl uppercase text-white opacity-80 transition-opacity hover:opacity-60"
          onClick={() => setIsOpen(true)}
        >
          <Image
            src="/circle-play.svg"
            alt="Open highlight reel"
            width={0}
            height={0}
            className="h-auto w-14"
          />
          <p>Reel</p>
        </button>
      </div>
      {isOpen ? (
        <div className="absolute left-0 top-0 z-10 flex h-screen w-screen flex-col bg-zinc-900">
          <button
            className="ml-auto flex px-6 py-4"
            onClick={() => setIsOpen(false)}
          >
            <Image
              src="/xmark-white.svg"
              alt="Close navigation menu"
              width={0}
              height={0}
              className="h-auto w-8 opacity-80 transition-opacity hover:opacity-60"
            />
          </button>
          <iframe
            className="mx-auto my-auto aspect-video w-11/12 xl:w-9/12"
            src="https://www.youtube.com/embed/2PKhVpucn1U?si=VFrtCCY4S5ThXmBN?controls=1"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
