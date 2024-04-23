import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="flex w-100 justify-between py-5 px-24 bg-blue-950 items-center">
      <Image src={"/image/reunion_logo.jpeg"} height={100} width={100} alt="logo" />
      <h1 className="text-white text-xl font-semibold cursor-pointer">Login</h1>
    </div>
  );
};

export default Header;
