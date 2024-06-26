import React from "react";

const WelcomeSection = () => {
  return (
    <div className="flex flex-col text-md font-semibold lg:w-9/12 shadow-xl p-7 rounded-lg bg-green-200">
      <h1>Dear BCPSC Alumni,</h1>
      <br />
      <q className="text-sm">
        Join us for a heartwarming journey down memory lane! It's time to
        reconnect with cherished friends and relive the unforgettable moments of
        our school days. Come, be a part of our 45th Year School Reunion—an
        occasion filled with joy, laughter, and endless reminiscing. This
        special day at Momo Inn Parks & Resorts promises to be a delightful
        reunion, where we'll celebrate the bonds we've forged and the milestones
        we've achieved together. Let's make new memories and strengthen old
        friendships. Kindly confirm your attendance by submitting your details
        via the provided Google link before May 31st. Payment options include
        The City Bank, Bkash, Nagad, and Cash. We eagerly await the pleasure of
        your company!
      </q>
      <br />
      <h1 className="text-md">Warm regards, </h1>
      <h1 className="text-md">BCPSC Family</h1>
    </div>
  );
};

export default WelcomeSection;
