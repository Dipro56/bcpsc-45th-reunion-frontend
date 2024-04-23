import Image from 'next/image';
import React from 'react';

const RepresentativeSection = () => {
  return (
    <div className="my-20 flex flex-col justify-start w-9/12">
      <h1 className="text-2xl font-semibold">Representative List</h1>

      <div className="grid grid-cols-1 col-span-12 gap-6 my-3">
        {/* <div className="w-full bg-red-100 border-red-400 rounded-xl p-5">
          <h1 className="font-semibold text-xl">Location</h1>
          <h1 className="my-1 font-semibold">Momo inn</h1>
        </div> */}

        <div className="flex justify-start items-center py-5 px-5 shadow-lg rounded-lg mb-4">
          <div className=" rounded-full">
            <div className="flex justify-center">
              <div className="rounded-full overflow-hidden w-28 h-28">
                <Image
                  src={'/image/pamir.jpg'}
                  alt="img-url"
                  width={100}
                  height={100}
                  className="object-cover object-center w-full h-full"
                />
              </div>
            </div>
          </div>

          <div className="ml-3">
            <p className="text-xl font-semibold">Zubaer Rahman Pamir </p>
            <p className=" text-black-500 text-md font-semibold">
              Batch 2012-14
            </p>
            <p className=" text-black-500 text-md font-semibold">01913141626</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepresentativeSection;
