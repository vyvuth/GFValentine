"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

function Valentine() {
  return (
    <div className=" mt-[100px] flex flex-col lg:items-center justify-center bg-pink-50 lg:p-4 p-3 rounded-2xl">
      <div className="lg:text-center">
        <h1 className="lg:text-4xl md:text-5xl  text-4xl text-center font-bold text-pink-700 capitalize DM ">
          Happy Valentine's Day
        </h1>
        <h2 className="lg:mt-2 mt-2 lg:text-xl text-center text-xl md:text-2xl font-medium text-pink-600 hnuman">
          រីករាយថ្ងៃបុណ្យនៃសេចក្ដីស្រលាញ់ 🥰
        </h2>
      </div>

      <div className="mt-8 max-w-md w-full">
        <div className=" aspect-w-16 aspect-h-9">
          <Image
            src="/bubu-dudu-valentine's-day-happy-valentine's-day-bubu.gif"
            alt="Valentine's Day"
            objectFit="cover"
            className="rounded-3xl shadow-lg lg:m-auto m-auto md:mx-[350px]"
            width={100}
            height={100}
          />
        </div>
      </div>

      <div className="mt-8 m-auto">
        <Link
          href={"/nextPage"}
          className="px-8 py-3 bg-pink-500 text-white font-semibold rounded-xl hover:bg-pink-600 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 DM "
        >
          Click Here
        </Link>
      </div>
    </div>
  );
}

export default Valentine;
