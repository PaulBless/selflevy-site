'use client'

// React and Next.js imports
import { useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Asset imports

export default function Navbar() {
    const pathname = usePathname();
    const [isExpanded, setIsExpanded] = useState(false);

    // Check if the current path matches the link's href
    const isActive = (path) => pathname === path;

    const toggleNavbar = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <header className="container-fluid header position-relative overflow-hiddenn p-0">
            {/* <nav className="navbar navbar-expand-lg navbar-light bg-transparent px-4 px-lg-5 py-3 py-lg-0"> */}
            <nav 
                className={`navbar navbar-expand-lg navbar-light ${
                isExpanded ? 'bg-primary' : 'bg-transparent'
                } px-4 px-lg-5 py-3 py-lg-0`}>
                <Link href="/" className="navbar-brand">
                <Image
                    src="/assets/img/logo.jpg"
                    alt="Logo"
                    width={120}
                    height={90}
                    className="transition-all hover:opacity-75 dark:invert"
                ></Image>
                </Link>
                <button className="navbar-toggler" onClick={toggleNavbar} aria-expanded={isExpanded} type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="fa fa-bars"></span>
                </button>
                <div className={`collapse navbar-collapse ${isExpanded ? 'show' : ''}`} id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0">
                    <Link href="/" className={`nav-item nav-link ${isActive('/') ? 'active' : ''}`}>Home</Link>
                    <Link href="/about" className={`nav-item nav-link ${isActive('/about') ? 'active' : ''}`}>About</Link>
                    <Link href="/features" className={`nav-item nav-link ${isActive('/features') ? 'active' : ''}`}>Features</Link>
                    <Link href="/contact" className={`nav-item nav-link ${isActive('/contact') ? 'active' : ''}`}>Contact Us</Link>
                    </div>
                    <Link href="https://personal.selflevy.com" target="_blank" className="btn btn-light border border-primary rounded-pill text-primary py-2 px-4 me-4">Log In</Link>
                    <Link href="https://personal.selflevy.com" target="_blank" className="btn btn-primary rounded-pill text-white py-2 px-4">Get Started </Link>
                </div>
            </nav>
        </header>
    );
}
