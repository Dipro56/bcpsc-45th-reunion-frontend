import Image from "next/image";
import React from "react";
import TimerSection from "../section/timer-section/TimerSection";
import WelcomeSection from "../section/welcome-section/WelcomeSection";

const Banner = () => {
  return (
    <div className="w-full">
      <div class="cover-image-container ">
        <Image
          src={"/image/banner_1.jpeg"}
          alt="Cover Image"
          class="cover-image"
          height={500}
          width={1000}
        />
        <div class="dark-overlay"></div>
      </div>
      <div className="flex flex-col justify-center items-center relative -translate-y-52">
        <h1 className="text-9xl text-white font-bold ">উৎসবের ৪৫</h1>
        <h1 className="text-4xl text-white font-bold mb-4">
          BCPSC Reunion 2024
        </h1>
        <TimerSection />
      </div>
    </div>

    // <div
    //   className="w-full h-[300px] md:h-[500px] lg:h-[800px] bg-no-repeat bg-cover shadow-2xl bg-transparent opacity-95  bg-opacity-35"
    //   style={{ backgroundImage: `url(/image/banner_1.jpeg)` }}
    // >
    //     <div className="bg-black">czxczxc</div>
    // </div>
  );
};

export default Banner;
