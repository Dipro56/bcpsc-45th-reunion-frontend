import Image from "next/image";
import React from "react";

const TimerSection = () => {
  return (
    <div className="bg-white  p-5 rounded-lg shadow-2xl w-6/12 flex flex-col justify-center items-center">
      <Image height={150} width={150} src={"/image/reunion_logo.jpeg"} alt="logo" className="my-8" />

      <h1 className="text-xl my-1 font-semibold">Regestration going on!</h1>
      <div className="flex justify-center my-5">
        <div className="flex justify-center items-center flex-col mx-4">
          <h1 className="text-5xl font-bold font-3xl text-blue-900">42</h1>
          <div className="flex justify-center bg-blue-900 text-md font-md text-white p-4 rounded-xl w-28">
            Days
          </div>
        </div>

        <div className="flex justify-center items-center flex-col mx-4">
          <h1 className="text-5xl font-bold font-3xl text-blue-900">18</h1>
          <div className="flex justify-center bg-blue-900 text-md font-md text-white p-4 rounded-xl w-28">
            Hours
          </div>
        </div>

        <div className="flex justify-center items-center flex-col mx-4">
          <h1 className="text-5xl font-bold font-3xl text-blue-900">21</h1>
          <div className="flex justify-center bg-blue-900 text-md font-md text-white p-4 rounded-xl w-28">
            Minutes
          </div>
        </div>

        <div className="flex justify-center items-center flex-col mx-4">
          <h1 className="text-5xl font-bold font-3xl text-blue-900">07</h1>
          <div className="flex justify-center bg-blue-900 text-md font-md text-white p-4 rounded-xl w-28">
            Seconds
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimerSection;
