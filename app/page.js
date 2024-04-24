import Image from 'next/image';
import Banner from './components/banner/Banner';
import WelcomeSection from './components/section/welcome-section/WelcomeSection';
import EventDetailsSection from './components/section/event-details-section/EventDetailsSection';
import RepresentativeSection from './components/section/representative-section/RepresentativeSection';
import FaqSection from './components/section/faq-section/FaqSection';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Banner />
      <WelcomeSection />
      <EventDetailsSection />
      <FaqSection/>
      <RepresentativeSection />
    </main>
  );
}
