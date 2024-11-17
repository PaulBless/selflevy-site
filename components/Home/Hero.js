// React and Next.js imports
'use client';

import Image from "next/image";
import Link from "next/link";


// Asset imports
import Img1 from "@/public/assets/img/sty-1.png";
import HeroImg from "@/public/assets/img/hero-img-1.png";

const Hero = () => {
  return (
   <div>
    {/* <!-- Hero Header Start --> */}
    <div className="hero-header overflow-hidden px-5 bg-warning">
        <div className="rotate-img">
            <Image 
                src={Img1} 
                className="img-fluid w-100" 
                alt=""
                width={58}
                height={50}
            ></Image>
            <div className="rotate-sty-2"></div>
        </div>
        <div className="row gy-5 align-items-center">
            <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
                <h1 className="display-5 text-dark mb-4 wow fadeInUp" data-wow-delay="0.3s">Transform Your 1% ELevy into Wealth</h1>
                <p className="fs-4 text-gray mb-4 wow fadeInUp" data-wow-delay="0.5s">Continue the 1% contribution, but invest in your future instead. <b>SelfLevy</b> is an easy and personalized money management solution for you to transform your transaction taxes into future revenue and investments.</p>
                <Link href="https://personal.selflevy.com" target="_blank" className="btn btn-primary rounded-pill py-3 px-5 wow fadeInUp" data-wow-delay="0.7s">Start Investing Now</Link>
            </div>
            <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.2s">
                <Image src={HeroImg} className="img-fluid w-100 h-100" alt="" ></Image>
            </div>
        </div>
    </div>
    {/* <!-- Hero Header End --> */}
   </div>
  );
};

export default Hero;
