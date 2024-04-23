import Image from "next/image";
import Banner from "./components/banner/Banner";
import WelcomeSection from "./components/section/welcome-section/WelcomeSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Banner />
      <WelcomeSection />
    </main>
  );
}
