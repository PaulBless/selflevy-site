// components/CTASection.js
'use client';

import Link from "next/link";
// --bs-theme: #05472A;
// --bs-sl: #043927;
// --bs-thm: #013220;

export default function CTASection() {
    return (
      <section className="sl-onboard text-white py-5" style={{ backgroundImage: 'linear-gradient(to right, #043927, #05472A)' }}>
        <div className="container py-5 text-center wow fadeUp" data-aos="fade-up">
          <h2 className="display-5 text-sl mb-4">Start Investing Today</h2>
          <p className="lead mb-4">Join thousands of Ghanaians building their future with SelfLevy</p>
          <div className="d-flex justify-content-center">
          <Link href="/about" className="btn btn-light border border-primary rounded-pill text-primary py-2 px-4 me-4">Learn More</Link>
          <Link href="https://personal.selflevy.com" target="_blank" className="btn btn-secondary rounded-pill text-white py-2 px-4">Start Investing Now </Link>
          </div>
        </div>
      </section>
    );
  }
  