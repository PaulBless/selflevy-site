'use client'

// React and Next.js imports
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Asset imports
import Logo from "@/public/assets/img/logo.jpg";

export default function Navbar() {
    const pathname = usePathname();
    const [isMobile, setIsMobile] = useState(false);

    // Check if the current path matches the link's href
    const isActive = (path) => pathname === path;

    useEffect(() => {
        const handleResize = () => {
          const width = window.innerWidth;
          setIsMobile(width <= 768); // Adjust breakpoint as needed
        };
    
        window.addEventListener('resize', handleResize);
    
        // Cleanup function to prevent memory leaks
        return () => window.removeEventListener('resize', handleResize);
      }, []);

    return (
        <header className="container-fluid header position-relative overflow-hiddenn p-0">
            {/* <nav className="navbar navbar-expand-lg navbar-light bg-transparent px-4 px-lg-5 py-3 py-lg-0"> */}
            <nav className={`navbar navbar-expand-lg navbar-light ${isMobile ? 'bg-primary text-white' : 'bg-transparent'} px-4 px-lg-5 py-3 py-lg-0`} >
            <Link href="/" className="navbar-brand">
            <Image
                src={Logo}
                alt="Logo"
                width={120}
                height={90}
                className="transition-all hover:opacity-75 dark:invert"
                ></Image>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="fa fa-bars"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto py-0">
                <Link href="/" className={`nav-item nav-link ${isActive('/') ? 'active' : ''}`}>Home</Link>
                <Link href="/about" className={`nav-item nav-link ${isActive('/about') ? 'active' : ''}`}>About</Link>
                <Link href="/features" className={`nav-item nav-link ${isActive('/features') ? 'active' : ''}`}>Features</Link>
                <Link href="/contact" className={`nav-item nav-link ${isActive('/contact') ? 'active' : ''}`}>Contact Us</Link>
                </div>
                <Link href="https://personal.selflevy.com" target="_blank" className="btn btn-light border border-primary rounded-pill text-primary py-2 px-4 me-4">Log In</Link>
                <Link href="https://personal.selflevy.com" target="_blank" className="btn btn-primary rounded-pill text-white py-2 px-4">Start Investing Now</Link>
            </div>
            </nav>
        </header>
    );
}
