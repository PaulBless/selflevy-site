// React and Next.js imports
'use client';
import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from 'next/link';

export default function Footer() {
    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
      setCurrentDate(new Date().getFullYear());
    }, []);

    return (
        <footer>
            {/* <!-- Footer Start --> */}
            <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">
                <div className="container my-3">
                    <div className="row g-5">
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="footer-item d-flex flex-column">
                                <h4 className="fw-bold mb-4">Useful Links</h4>
                                <Link href="/about#why">Why SelfLevy?</Link>
                                <Link href="/faqs"> FAQs</Link>
                                <Link href="/partners"> Our Partners </Link>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="footer-item d-flex flex-column">
                                <h4 className="mb-4 fw-bold">Quick Links</h4>
                                <Link href="/about"> About Us</Link>
                                <Link href="contact"> Contact Us</Link>
                                <Link href="/features"> Features</Link>
                                <Link href="/about#team"> Our Team</Link>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="footer-item d-flex flex-column">
                                <h4 className="mb-4 fw-bold">Legal & Support </h4>
                                <Link href=""> Privacy Policy</Link>
                                <Link href=""> Cookie Policy</Link>
                                <Link href=""> Terms & Conditions</Link>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="footer-item d-flex flex-column">
                                <h4 className="mb-4 fw-bold">Contact Info</h4>
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
                        <Link href="/" className="owner text-light me-2">SelfLevy</Link> <span className="text-light" suppressHydrationWarning >&copy; {currentDate}, All rights reserved.</span>
                        </div>
                        <div className="col-md-6 text-center text-md-end text-white">
                            Powered By <Link className="dev border-bottom text-light" href="https://berlintechnologiesafrica.com">Berlin Technologies</Link>
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
