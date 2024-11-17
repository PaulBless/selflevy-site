'use client';
import dynamic from 'next/dynamic'

import Image from "next/image";
const Hero = dynamic(() => import('@/components/Home/Hero'), { ssr: false }) // import Hero from "@/components/Home/Hero";
const About = dynamic(() => import('@/components/Home/About'), { ssr: false }) // import About from "@/components/Home/About";
const WhySelfLevy = dynamic(() => import('@/components/Home/WhySelfLevy'), { ssr: false }) // import WhySelfLevy from "@/components/Home/WhySelfLevy";
const HowItWorks = dynamic(() => import('@/components/HowItWorks'), { ssr: false }) // import HowItWorks from '@/components/HowItWorks'
const SLBenefits = dynamic(() => import('@/components/SLBenefits'), { ssr: false }) // import SLBenefits from '@/components/SLBenefits'import SLBenefits from '@/components/SLBenefits'
const Features = dynamic(() => import('@/components/Choose'), { ssr: false }) // import Features from '@/components/Features'
const CTASection = dynamic(() => import('@/components/CTASection'), { ssr: false }) // import CTASection from '@/components/CTASection'
const Main = dynamic(() => import('@/components/Main'), { ssr: false })

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
