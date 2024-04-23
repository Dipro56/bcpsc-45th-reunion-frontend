import Link from "next/link";
import React from "react";

const SubHeader = () => {
  return (
    <div className="flex w-100 justify-center py-4 px-24 items-center shadow-2xl ">
      <Link
        href={"/"}
        className="hover:bg-blue-900 hover:text-white px-3 rounded-md text-blue-900 font-semibold"
      >
        <h1 className="text-md my-3">Registration</h1>
      </Link>
      <Link
        href={"/"}
        className="hover:bg-blue-900 hover:text-white px-3 rounded-md text-blue-900 font-semibold"
      >
        <h1 className="text-md my-3">Sponsors</h1>
      </Link>
      <Link
        href={"/"}
        className="hover:bg-blue-900 hover:text-white px-3 rounded-md text-blue-900 font-semibold"
      >
        <h1 className="text-md my-3">Event Details</h1>
      </Link>
      <Link
        href={"/"}
        className="hover:bg-blue-900 hover:text-white px-3 rounded-md text-blue-900 font-semibold"
      >
        <h1 className="text-md my-3">Representative</h1>
      </Link>
      <Link
        href={"/"}
        className="hover:bg-blue-900 hover:text-white px-3 rounded-md text-blue-900 font-semibold"
      >
        <h1 className="text-md my-3">FAQ</h1>
      </Link>
    </div>
  );
};

export default SubHeader;
