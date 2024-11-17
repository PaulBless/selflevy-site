'use client';

// import dynamic from 'next/dynamic'
// const Hero = dynamic(() => import('@/components/Home/Hero'), { ssr: false }) 

import Hero from "@/components/Home/Hero";
import About from "@/components/Home/About";
import WhySelfLevy from "@/components/Home/WhySelfLevy";
import HowItWorks from '@/components/HowItWorks';
import SLBenefits from '@/components/SLBenefits';
import Features from '@/components/Features';
import CTASection from '@/components/CTASection'; 

export default function Home() {
  return (
    <div className="selflevy">
      <Hero />
      <About />
      <Features />
      <HowItWorks />
      <WhySelfLevy />
      <SLBenefits />
      <CTASection />
    </div>
  );
}
