// React and Next.js imports
import Image from "next/image";
import Link from 'next/link';

// Asset imports
import Logo from "@/public/assets/img/logo.jpg";

export default function Footer() {
  return (
    <footer>
        {/* <!-- Footer Start --> */}
        <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">
            <div className="container py-0">
                <div className="row g-5">
                    <div className="col-md-6 col-lg-6 col-xl-3">
                        <div className="footer-item d-flex flex-column">
                            <h4 className="text-dark fw-bold mb-4">Company</h4>
                            <Link href="/">Why SelfLevy?</Link>
                            <Link href="/"> FAQs</Link>
                            <Link href="/"> Our Partners </Link>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3">
                        <div className="footer-item d-flex flex-column">
                            <h4 className="mb-4 text-dark fw-bold">Quick Links</h4>
                            <Link href=""> About Us</Link>
                            <Link href=""> Contact Us</Link>
                            <Link href=""> Privacy Policy</Link>
                            <Link href=""> Terms & Conditions</Link>
                            <Link href=""> Our Blog & News</Link>
                            <Link href=""> Our Team</Link>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3">
                        <div className="footer-item d-flex flex-column">
                            <h4 className="mb-4 text-dark fw-bold">Features </h4>
                            <Link href=""> All Services</Link>
                            <Link href=""> Promotional Emails</Link>
                            <Link href=""> Product Updates</Link>
                            <Link href=""> Email Marketing</Link>
                            <Link href=""> Acquistion Emails</Link>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3">
                        <div className="footer-item d-flex flex-column">
                            <h4 className="mb-4 text-dark fw-bold">Contact Info</h4>
                            <Link href=""><i className="fa fa-map-marker-alt me-2"></i> 7th Floor Regus, Accra</Link>
                            <Link href="mailto:info@selflevy.com?subject=SelfLevy Inquiry"><i className="fas fa-envelope me-2"></i> info@selflevy.com</Link>
                            <Link href=""><i className="fas fa-phone me-2"></i> +012 345 67890</Link>
                            <Link href="" className="mb-3"><i className="fas fa-phone me-2"></i> +012 345 67890</Link>
                            <div className="d-flex align-items-center">
                                <Link className="btn-square btn btn-primary rounded-circle mx-1" href=""><i className="fab fa-facebook-f"></i></Link>
                                <Link className="btn-square btn btn-primary rounded-circle mx-1" href=""><i className="fab fa-twitter"></i></Link>
                                <Link className="btn-square btn btn-primary rounded-circle mx-1" href=""><i className="fab fa-instagram"></i></Link>
                                <Link className="btn-square btn btn-primary rounded-circle mx-1" href=""><i className="fab fa-linkedin-in"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Footer End --> */}
        
        {/* <!-- Copyright Start --> */}
        <div className="container-fluid copyright py-4">
            <div className="container">
                <div className="row g-4 align-items-center">
                    <div className="col-md-6 text-center text-md-start mb-md-0">
                        <span className="text-white">&copy; {new Date().getFullYear()} <Link href="/"><i className="fas fa-copyright text-light me-2"></i>SelfLevy</Link>, All rights reserved.</span>
                    </div>
                    <div className="col-md-6 text-center text-md-end text-white">
                        Powered By <Link className="border-bottom" href="https://berlintechnologiesafrica.com">Berlin Technologies</Link>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Copyright End --> */}


        {/* <!-- Back to Top --> */}
        <a href="#" className="btn btn-primary btn-lg-square back-to-top"><i className="fa fa-arrow-up"></i></a>   
    </footer>
  );
}
