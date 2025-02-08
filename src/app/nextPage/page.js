"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

function page() {
  return (
    <div
      className="lg:w-[700px] lg:mt-[100px] lg:m-auto  lg:rounded-3xl
     lg:mt-[100px] flex flex-col lg:items-center justify-center bg-pink-50 lg:p-4 p-3 rounded-2xl"
    >
      <div className="lg:text-center">
        <h1 className="lg:text-4xl md:text-5xl  text-4xl text-center font-bold text-pink-700 capitalize DM ">
          Happy Valentine's Day
        </h1>
        <h2 className="lg:mt-2 mt-2 lg:text-xl text-center text-xl md:text-2xl font-medium text-pink-600 hnuman">
          រីករាយថ្ងៃបុណ្យនៃសេចក្ដីស្រលាញ់ 🥰
        </h2>
      </div>
      <div className=" mt-[20px] p-[15px]">
        <p className=" p-0 hanuman">
          បងពិតជាសំណាងណាស់ដែលបានជួបនឹងអូន។
          ថ្ងៃនេះជាថ្ងៃពិសេសសម្រាប់អូន បងមានពាក្យខ្លះចង់ប្រាប់អូនថា
          អូនគឺជាអ្នកដែលធ្វើឲ្យបងញញឹម និងមានកម្លាំងចិត្តរាល់ថ្ងៃ។ សង្ឃឹមថាថ្ងៃ
          Valentine’s Day នេះនឹងធ្វើឲ្យអូនដឹងថា
          អូនពិតជាសំខាន់ខ្លាំងណាស់សម្រាប់ខ្ញុំ។ ស្រលាញ់អូនជានិច្ច! 💖🥰
        </p>
        <span>
          បងខំធ្វើវាដោយដៃបងផ្ទាល់ សង្ឃឹមថាអូននឹងពេញចិត្ត​ I LOVE YOU BEBE 🥰❤🌹
        </span>
      </div>
      <div className=" mt-15">
        <Image
          className=" w-[250px] m-auto"
          src="/cheek-kisses-bubu.gif"
          alt=""
          width={100}
          height={100}
          objectFit="cover"
        />
      </div>
      <div className="mt-8 m-auto">
        <Link
          href={"/"}
          className="px-8 py-3 bg-pink-500 text-white font-semibold rounded-xl hover:bg-pink-600 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 DM​​ hanuman "
        >
          ត្រឡប់ក្រោយ
        </Link>
      </div>
    </div>
  );
}

export default page;
