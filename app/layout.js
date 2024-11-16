import { Inter } from "next/font/google";
import localFont from "next/font/local";
import Script from 'next/script';


// Customized Bootstrap & Theme Styles
// import "@/public/assets/css/bootstrap.min.css";
// import "@/public/assets/css/style.css";

//  Libraries Stylesheet 
// import "@/public/assets/lib/animate/animate.min.css";
// import "@/public/assets/lib/owlcarousel/assets/owl.carousel.min.css";
// import "@/public/assets/lib/lightbox/css/lightbox.min.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


// Asset imports
// import Logo from "@/public/next.svg";

export const metadata = {
  title: 'SelfLevy - Transform Your 1% into Investment',
  description: 'Turn your 1% tax into a personal investment for your future',
};

export default function RootLayout({ children }) {
  // initialize WOW.js

  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" type="image/png" href="assets/img/favicon/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="assets/img/favicon/favicon.svg" />
        <link rel="shortcut icon" href="assets/img/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="assets/img/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="assets/img/favicon/site.webmanifest" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700&family=Rubik:wght@400;500&display=swap" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
        
        {/* <!-- Icon Font Stylesheet --> */}
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v6.6.0/css/all.css"/>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet" />

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/hamburgers/1.1.3/hamburgers.min.css" />

        {/* <!-- Libraries Stylesheet --> */}
        <link href="assets/lib/animate/animate.min.css" rel="stylesheet" />
        <link href="assets/lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
        <link href="assets/lib/lightbox/css/lightbox.min.css" rel="stylesheet" />

        {/* <!-- Customized Bootstrap Stylesheet --> */}
        <link href="assets/css/bootstrap.min.css" rel="stylesheet" />

        {/* <!-- Template Stylesheet --> */}
        <link href="assets/css/style.css" rel="stylesheet" />
      </head>
      <body
        className=""
      >
        <Navbar />
        {children}
        <Footer />

        {/* Load External Scripts */}
        <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js" strategy="beforeInteractive" />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js" strategy="beforeInteractive" />
        <Script src="assets/lib/wow/wow.min.js" strategy="lazyOnload" />
        <Script src="assets/lib/easing/easing.min.js" strategy="lazyOnload" />
        <Script src="assets/lib/waypoints/waypoints.min.js" strategy="lazyOnload" />
        <Script src="assets/lib/counterup/counterup.min.js" strategy="lazyOnload" />
        <Script src="assets/lib/owlcarousel/owl.carousel.min.js" strategy="lazyOnload" />
        <Script src="assets/lib/lightbox/js/lightbox.min.js" strategy="lazyOnload" />
        <Script src="assets/js/main.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
