"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav
      className={`absolute right-0 top-0 z-10 ${isOpen ? "bg-slate-300" : ""}`}
    >
      {isOpen ? (
        <button
          className="ml-auto flex px-6 py-4"
          onClick={() => setIsOpen(false)}
        >
          <Image
            src="/xmark.svg"
            alt="Close navigation menu"
            width={0}
            height={0}
            className="h-auto w-8"
          />
        </button>
      ) : (
        <button
          className="ml-auto flex px-6 py-4 opacity-80 xl:hidden"
          onClick={() => setIsOpen(true)}
        >
          <Image
            src="/bars.svg"
            alt="Open navigation menu"
            width={0}
            height={0}
            className="h-auto w-8"
          />
        </button>
      )}
      <div
        className={
          isOpen
            ? "flex h-screen w-screen flex-col items-center "
            : "sr-only xl:not-sr-only"
        }
      >
        <div className="xl:m-4 xl:flex xl:items-center xl:justify-end xl:space-x-8 xl:text-white">
          <ul className="flex flex-col gap-y-4 text-4xl uppercase xl:flex-row xl:space-x-8 xl:space-y-0">
            <li>
              <Link
                href="/"
                className="hover:opacity-100 xl:opacity-70 xl:transition-opacity"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="hover:opacity-100 xl:opacity-70 xl:transition-opacity"
              >
                Works
              </Link>
            </li>
            <li className="mt-6 xl:mt-0">
              <Link
                href="/"
                className="bg-black p-2 text-white hover:bg-gray-600 hover:text-white hover:opacity-100 xl:bg-gray-300 xl:text-black xl:opacity-70 xl:transition"
              >
                Contact
              </Link>
            </li>
          </ul>
          <ul className="flex items-center justify-between space-x-4 pt-8 xl:pt-0">
            <li>
              <Link
                href="/"
                className="hover:opacity-100 xl:opacity-70 xl:transition-opacity"
              >
                <Image
                  src="/artstation.svg"
                  alt="Artstation"
                  width={0}
                  height={0}
                  className="h-auto w-10 xl:hidden"
                />
                <Image
                  src="/artstation-white.svg"
                  alt="Artstation"
                  width={0}
                  height={0}
                  className="hidden h-auto w-10 xl:block"
                />
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="hover:opacity-100 xl:opacity-70 xl:transition-opacity"
              >
                <Image
                  src="/behance.svg"
                  alt="Behance"
                  width={0}
                  height={0}
                  className="h-auto w-10 xl:hidden"
                />
                <Image
                  src="/behance-white.svg"
                  alt="Artstation"
                  width={0}
                  height={0}
                  className="hidden h-auto w-10 xl:block"
                />
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="hover:opacity-100 xl:opacity-70 xl:transition-opacity"
              >
                <Image
                  src="/linkedin-in.svg"
                  alt="LinkedIn"
                  width={0}
                  height={0}
                  className="h-auto w-10 xl:hidden"
                />
                <Image
                  src="/linkedin-in-white.svg"
                  alt="Artstation"
                  width={0}
                  height={0}
                  className="hidden h-auto w-10 xl:block"
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
