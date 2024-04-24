import React from "react";
import Image from "next/image";
// import AOS from 'aos';
// import 'aos/dist/aos.css'


const FaqSection = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 800,
//     });
//     //   AOS.refresh();
//   }, []);
//data-aos="fade-up"
  return (
    <div  className="smaller-screen-padding  lg:pt-36">
      <h1 className="font-color-white font-semibold text-2xl font-weight-bold text-center my-4">
        Frequently Asked Questions
      </h1>
      <div className="container mx-auto px:24 md:px-16 lg:px-28 py-8 grid gap-6 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-24">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-lg p-4 card-div">
          <div className="course-learning-icon-div">
            <div className="rounded-div">
              <Image height={40} width={40} src={"/image/Idea.svg"} alt='image' />
            </div>
          </div>
          <h2 className="text-xl font-bold mb-2 font-color-black text-center p-4">
            Complete ISSB Journery
          </h2>
          <p className="font-color-black text-center">
            একদম জিরো থেকে, কোন প্রকার পূর্ব অভিজ্ঞতা ছাড়াই একজন স্টুডেন্ট থেকে
            অফিসার হওয়ার জন্য যা যা লাগবে তার সবকিছুই সহজ করে গিলিয়ে খাওয়ানো হবে
            এই কোর্সে।
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-4 card-div">
          <div className="course-learning-icon-div">
            <div className="rounded-div">
              <Image height={40} width={40} src={"/image/Idea.svg"} alt='image' />
            </div>
          </div>
          <h2 className="text-xl font-bold mb-2 font-color-black text-center p-4">
            How to handle PPDT?
          </h2>
          <p className="font-color-black text-center">
            PPDT-তে বাদ যাওয়ার পরিমাণ তুলনামূলক বেশি।তাই এই PPDT নামক পুলসিরাতকে
            -কিভাবে হ্যান্ডেল করবা-সেটা তোমাকে পয়েন্ট টু পয়েন্ট ধরে ধরে শিখিয়ে
            দেয়া হবে। কারণ PPDT(পুলসিরাত) পার করতে পারলেই ISSB তে ৪দিন থাকার
            টিকেট পেয়ে যাবা ।
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-4 card-div">
          <div className="course-learning-icon-div">
            <div className="rounded-div">
              <Image height={40} width={40} src={"/image/Idea.svg"} alt='image' />
            </div>
          </div>
          <h2 className="text-xl font-bold mb-2 font-color-black text-center p-4">
            Psychological & Psychometric Test
          </h2>
          <p className="font-color-black text-center">
            সাইকোমেট্রিক্স ও সাইকোলজিক্যাল টেস্ট নিয়ে সবচেয়ে বেশি ভুল ও মনগড়া
            তথ্য মার্কেটে চলমান আছে। তাই আমরা আইএসএসবি যেভাবে বলেছে সেই বিষয়গুলো
            পয়েন্ট ধরে ধরে বুঝিয়ে দিবো । পাশাপাশি এই কোর্সে তুমি রিয়েল টেস্ট এর মতো করে সাইকোলজিক্যাল টেস্ট নিজে করবে।  আমরা দেখিয়ে দিবো কিভাবে সাইকোলজিক্যাল টেস্ট দিতে হবে । যেগুলো করতে করতে তুমি নিজের অজান্তেই পরিপূর্ণভাবে তোমার সাইকোলজি নিজেই বুঝতে পারবে।
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-4 card-div">
          <div className="course-learning-icon-div">
            <div className="rounded-div">
              <Image height={40} width={40} src={"/image/Idea.svg"} alt='image' />
            </div>
          </div>
          <h2 className="text-xl font-bold mb-2 font-color-black text-center p-4">
            Public Speaking Test
          </h2>
          <p className="font-color-black text-center">
            Extempore Speech- Group Discussion- Group planning- সহজ কথায় পাবলিক
            স্পিকিং এর স্টেস্টগুলোতে স্টুডেন্টের দুর্বলতা প্রকাশ পায়। তাই এই
            স্টেস্টগুলোতে ভালো করতে অল্প সময়ে কিভাবে কি করতে হবে,সবকিছুই থাকছে
            এই কোর্সে ।
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-4 card-div">
          <div className="course-learning-icon-div">
            <div className="rounded-div">
              <Image height={40} width={40} src={"/image/Idea.svg"} alt='image' />
            </div>
          </div>
          <h2 className="text-xl font-bold mb-2 font-color-black text-center p-4">
            Physical Ability Test
          </h2>
          <p className="font-color-black text-center">
            Ground Task(PGT-HGT-CT-PAT) এই টেস্টগুলোতে শারীরিক সামর্থ্যের
            পাশাপাশি সাইকোলজি ও আচরণগত পরীক্ষাও যে হয় ,সেটা অনেকেই বুঝতে পারে
            নাহ। তাই এই কোর্সে কোন পরীক্ষা কিভাবে দেয়া উচিত - সবকিছুই আলাদাভাবে
            আলোচনা করা হবে ।
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-4 card-div">
          <div className="course-learning-icon-div">
            <div className="rounded-div">
              <Image height={40} width={40} src={"/image/Idea.svg"} alt='image' />
            </div>
          </div>
          <h2 className="text-xl font-bold mb-2 font-color-black text-center p-4">
            DP VIVA Analysis
          </h2>
          <p className="font-color-black text-center">
            কোর্সের সবচেয়ে গুরুত্বপূর্ণ দিক হচ্ছে DP VIVA Analysis, সেটা দিয়ে
            পরিপূৰ্ণভাবে বুঝতে পারবে একদম শুরু থেকে শেষ পর্যন্ত কিভাবে তোমাকে
            যাচাই করা হবে ।
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-4 card-div">
          <div className="course-learning-icon-div">
            <div className="rounded-div">
              <Image height={40} width={40} src={"/image/Idea.svg"} alt='image' />
            </div>
          </div>
          <h2 className="text-xl font-bold mb-2 font-color-black text-center p-4">
            Tips & Tricks
          </h2>
          <p className="font-color-black text-center">
            ISSB তে ১ম দিন থেকে ৪র্থ দিন পর্যন্ত যত ধরনের টেস্ট আছে ,সবকিছু
            আলাদা ভাবে শিখানো হবে এই কোর্সে।  পোশাক-আশাক - আচরণগত পরামর্শের
            পাশাপাশি আরো অসংখ্য প্রয়োজনীয় টিপস ও ট্রিকস এর সাথে পরিচয় করিয়ে দেয়া
            হবে ।
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-4 card-div">
          <div className="course-learning-icon-div">
            <div className="rounded-div">
              <Image height={40} width={40} src={"/image/Idea.svg"} alt='image' />
            </div>
          </div>
          <h2 className="text-xl font-bold mb-2 font-color-black text-center p-4">
            Real Training Story
          </h2>
          <p className="font-color-black text-center">
            সর্বশেষে ট্রেনিং লাইফ ও আনুষাঙ্গিক গল্প শেয়ার করা হবে। পাশাপাশি
            নিজেদের মধ্যে বন্ধুত্ব ও কমিউনিটি Build Up করার জন্য -কোর্স শেষে
            একটি পিকনিক বা গেট টুগেদার আয়োজন করা হতেই পারে। তাহলে?... চলো শুরু
            করি...।
          </p>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
