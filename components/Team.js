'use client';
import Image from "next/image";

export default function Team () {
    return (
      <div>
        <div className="container-fluid blog bg-light py-5" id="team">
            <div className="container py-5">
                <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '900px', visibility: 'visible', animationDelay: '0.1s', animation: 'fadeInUp 0.3s ease-in-out' }}>
                    <h1 className="display-5 text-sl mb-4">Our Team</h1>
                    <p className="mb-0">Dolor sit amet consectetur, adipisicing elit. Ipsam, beatae maxime. Vel animi eveniet doloremque reiciendis soluta iste provident non rerum illum perferendis earum est architecto dolores vitae quia vero quod incidunt culpa corporis, porro doloribus. Voluptates nemo doloremque cum.
                    </p>
                </div>
                <div className="row g-4 justify-content-center">
                    <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.1s" style={{ visibility: 'visible', animationDelay: '0.1s', animation: 'fadeInUp 0.3s ease-in-out' }}>
                        <div className="blog-item">
                            <div className="blog-img">
                                <img src="assets/img/blog-1.png" className="img-fluid w-100" alt=""/>
                            </div>
                            <div className="blog-content border p-4 ">
                                <h5 className="mb-2 text-dark fw-bold">Bernard Annoh</h5>
                                <p className="mb-1">&#8594; Job Title</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.3s" style={{ visibility: 'visible', animationDelay: '0.1s', animation: 'fadeInUp 0.3s ease-in-out' }}>
                        <div className="blog-item">
                            <div className="blog-img">
                                <img src="assets/img/blog-2.png" className="img-fluid w-100" alt=""/>
                            </div>
                            <div className="blog-content border p-4 ">
                                <h5 className="mb-2 text-dark fw-bold">PaulBless</h5>
                                <p className="mb-1">&#8594; Job Title</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.5s" style={{ visibility: 'visible', animationDelay: '0.1s', animation: 'fadeInUp 0.3s ease-in-out' }}>
                        <div className="blog-item">
                            <div className="blog-img">
                                <img src="assets/img/blog-3.png" className="img-fluid w-100" alt=""/>
                            </div>
                            <div className="blog-content border p-4 ">
                                <h5 className="mb-2 text-dark fw-bold">John Smith</h5>
                                <p className="mb-1">&#8594; Job Title</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.7s" style={{ visibility: 'visible', animationDelay: '0.1s', animation: 'fadeInUp 0.3s ease-in-out' }}>
                        <div className="blog-item">
                            <div className="blog-img">
                                <img src="assets/img/blog-4.png" className="img-fluid w-100" alt=""/>
                            </div>
                            <div className="blog-content border p-4 ">
                                <h5 className="mb-2 text-dark fw-bold">Suzzy Sharks</h5>
                                <p className="mb-1">&#8594; Job Title</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
  