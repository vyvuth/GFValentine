"use client";
import React from "react";
import Valentine from "./valentine/Valentine";
function page() {
  return (
    <div className=" py-2">
      <header className=" lg:w-[700px] lg:h-[650px]  lg:m-auto lg:mt-[20px] lg:rounded-3xl">
        <Valentine />
      </header>
    </div>
  );
}

export default page;
