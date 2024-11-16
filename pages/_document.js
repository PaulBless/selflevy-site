import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700&family=Rubik:wght@400;500&display=swap" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
        {/* <!-- Icon Font Stylesheet --> */}
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet" />
        
        {/* <!-- Libraries Stylesheet --> */}
        <link href="./assets/lib/animate/animate.min.css" rel="stylesheet" />
        <link href="./assets/lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
        <link href="./assets/lib/lightbox/css/lightbox.min.css" rel="stylesheet" />

        {/* <!-- Customized Bootstrap Stylesheet --> */}
        <link href="./assets/css/bootstrap.min.css" rel="stylesheet" />

        {/* <!-- Template Stylesheet --> */}
        <link href="./assets/css/style.css" rel="stylesheet" />

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
