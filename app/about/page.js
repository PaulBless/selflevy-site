import Image from "next/image";
import Link from "next/link";
import WhySelfLevy from "@/components/Home/WhySelfLevy";
import CTASection from "@/components/CTASection";

export default function About() {
  return (
    <div>
        {/* <!-- Header Start --> */}
         <div className="container-fluid bg-breadcrumb">
            <ul className="breadcrumb-animation">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <div className="container text-center py-5" style={{ maxWidth: '900px' }}>
                <h3 className="display-5 text-sl mb-4 wow fadeInDown" data-wow-delay="0.1s">About </h3>
                <ol className="breadcrumb justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
                    <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                    <li className="breadcrumb-item active text-primary">About Us</li>
                </ol>    
            </div>
        </div>
        {/* <!-- Header End --> */}
        {/* About Intro */}
        <section className="about-intro bg-primary py-5">
        <div className="container py-5 text-white">
            <div className="row">
                <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '900px'}}>
                    <h1 className="display-5 text-sl mb-4">About SelfLevy </h1>
                    <p className="description">
                        At SelfLevy, we believe in empowering individuals to transform their daily transactions into meaningful investments for a brighter future. By automating savings through a simple 1% contribution from your transactions, SelfLevy makes building wealth effortless, convenient, and secure.
                    </p>
                </div>
            </div>
        </div>
        </section>
        {/* Regulated and Licensed */}
        <section className="container-fluid py-0">
            <div className="container py-5">
                <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '900px', visibility: 'visible', animationDelay: '0.1s', animation: 'fadeInUp 0.3s ease-in-out' }}>
                    <h1 className="display-5 text-sl mb-4">Regulated and Licensed</h1>
                    <p className="mb-2">
                        SelfLevy operates with the full confidence of being licensed and regulated by the Bank of Ghana. This ensures that we meet the highest standards of financial integrity, compliance, and reliability.
                    </p>
                </div>
            </div>
        </section>
        {/* Our Commitment to Security */}
        <section className="container-fluid bg-light mb-5">
            <div className="container py-5">
                <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '900px', visibility: 'visible', animationDelay: '0.1s', animation: 'fadeInUp 0.3s ease-in-out' }}>
                    <h1 className="display-5 text-sl mb-4">Our Commitment to Security</h1>
                    <p className="mb-2">
                        Your trust is our top priority. SelfLevy uses the highest levels of internet security to ensure your account and personal data are completely protected. Every transaction and interaction with our platform is safeguarded by advanced encryption and robust security protocols.
                    </p>
                </div>
            </div>
        </section>
        {/* Why Choose Us */}
        <WhySelfLevy />
        {/* Call To Action Section */}
        <CTASection />
    </div>
  );
}
