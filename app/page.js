import Image from "next/image";
import Hero from "@/components/Home/Hero";
import About from "@/components/Home/About";
import WhySelfLevy from "@/components/Home/WhySelfLevy";
import HowItWorks from '@/components/HowItWorks'
import SLBenefits from '@/components/SLBenefits'
import Features from '@/components/Features'
import CTASection from '@/components/CTASection'
import Main from '@/components/Main'

export default function Home() {
  return (
    <div className="selflevy">
      <Hero />
      {/* <Main /> */}
      <About />
      <Features />
      <HowItWorks />
      <WhySelfLevy />
      <SLBenefits />
      <CTASection />
    </div>
  );
}
