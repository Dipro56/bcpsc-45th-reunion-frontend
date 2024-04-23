import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="flex w-100 justify-between  bg-blue-950 items-center pr-32 pl-20">
      <Image src={"/image/reunion_logo.svg"} height={150} width={150} alt="logo" />
      <h1 className="text-white text-xl font-semibold cursor-pointer">Login</h1>
    </div>
  );
};

export default Header;
