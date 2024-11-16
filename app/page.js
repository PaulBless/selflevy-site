import Image from "next/image";
import Hero from "@/components/Home/Hero";
import About from "@/components/Home/About";
import WhySelfLevy from "@/components/Home/WhySelfLevy";
import HowItWorks from '@/components/HowItWorks'
import Benefits from '@/components/Benefits'
import Features from '@/components/Features'
import CTASection from '@/components/CTASection'
import Main from '@/components/Main'

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Hero />
      {/* <Main /> */}
      <About />
      <HowItWorks />
      <Features />
      <WhySelfLevy />
      <Benefits />
      <CTASection />
    </div>
  );
}
