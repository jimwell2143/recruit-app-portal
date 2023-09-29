import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navigation = () => {
  return (
    <div className="bg-white fixed z-50 top-0 left-0 right-0 shadow">
      <div className="container mx-auto px-5">
        <div className="flex py-6 justify-between items-center space-x-2">
          <div className="w-96 h-14 flex-col justify-center items-start gap-2.5 inline-flex z-40">
            <div className="justify-start items-center gap-2 inline-flex">
              <Link
                href="/"
                className="justify-start items-center gap-2 inline-flex"
              >
                <Image
                  // className="w-60 h-14"
                  src="/seal.png"
                  alt="seal"
                  width={123}
                  height={56}
                />
                <Image
                  // className="w-40 h-14"
                  src="/seal2.png"
                  alt="seal2"
                  width={165}
                  height={56}
                />
              </Link>
            </div>
          </div>
          <div className="justify-start items-center gap-2 flex">
            <div className="px-1 py-0.5 rounded justify-center items-center gap-2 flex">
              <Link
                href="/"
                className="text-gray-500 text-sm font-semibold leading-none"
              >
                Home
              </Link>
            </div>
            <div className="px-1 py-0.5 rounded justify-center items-center gap-2 flex">
              <Link
                href="/employers"
                className="text-gray-500 text-sm font-semibold leading-none"
              >
                Employers
              </Link>
            </div>
            <div className="px-1 py-0.5 rounded justify-center items-center gap-2 flex">
              <Link
                href="/job-seekers"
                className="text-gray-500 text-sm font-semibold leading-none"
              >
                Job Seekers
              </Link>
            </div>
            <div className="px-1 py-0.5 rounded justify-center items-center gap-2 flex">
              <Link
                href="/job-openings"
                className="text-gray-500 text-sm font-semibold leading-none"
              >
                Job Openings
              </Link>
            </div>
            <div className="px-1 py-0.5 rounded justify-center items-center gap-2 flex">
              <Link
                href="/about"
                className="text-gray-500 text-sm font-semibold leading-none"
              >
                About Us
              </Link>
            </div>
            <div className="px-1 py-0.5 rounded justify-center items-center gap-2 flex">
              <Link
                href="/#testimonials"
                className="text-gray-500 text-sm font-semibold leading-none"
              >
                Testimonials
              </Link>
            </div>
            <div className="px-1 py-0.5 rounded justify-center items-center gap-2 flex">
              <Link
                href="/#branches"
                className="text-gray-500 text-sm font-semibold leading-none"
              >
                Branches
              </Link>
            </div>
            <div className="px-1 py-0.5 rounded justify-center items-center gap-2 flex">
              <Link
                href="/#contacts"
                className="text-gray-500 text-sm font-semibold leading-none"
              >
                Contact Us
              </Link>
            </div>
            <div className="justify-start items-start gap-2 flex">
              <div className="bg-stone-400 rounded justify-center items-center flex">
                <div className="self-stretch px-4 py-3 bg-stone-400 justify-center items-center gap-2 flex">
                  <button
                    type="button"
                    className="text-white text-xs font-semibold leading-none"
                  >
                    LOG IN
                  </button>
                </div>
              </div>
              <div className="rounded border border-stone-400 justify-center items-center flex">
                <div className="px-4 py-3 justify-start items-center gap-2 flex">
                  <button
                    type="button"
                    className="text-stone-400 text-xs font-semibold leading-none"
                  >
                    SIGN UP
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
