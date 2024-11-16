// components/CTASection.js
import Link from "next/link";

export default function CTASection() {
    return (
      <section className="py-5 bg-light">
        <div className="container py-5 text-center wow fadeUp" data-aos="fade-up">
          <h2 className="display-5 text-sl mb-4">Start Investing Today</h2>
          <p className="lead mb-4">Join thousands of Ghanaians building their future with SelfLevy</p>
          <div className="d-flex justify-content-center">
          <Link href="https://personal.selflevy.com" target="_blank" className="btn btn-light border border-primary rounded-pill text-primary py-2 px-4 me-4">Learn More</Link>
          <Link href="https://personal.selflevy.com" target="_blank" className="btn btn-primary rounded-pill text-white py-2 px-4">Get Started </Link>
          </div>
        </div>
      </section>
    );
  }
  