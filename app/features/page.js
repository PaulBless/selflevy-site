import Link from "next/link";
import Image from "next/image";

export default function Features() {
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
                <h3 className="display-5 text-sl mb-4 wow fadeInDown" data-wow-delay="0.1s">SelfLevy Features</h3>
                <ol className="breadcrumb justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
                    <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                    <li className="breadcrumb-item active text-primary">Features</li>
                </ol>    
            </div>
        </div>
        {/* <!-- Header End --> */}
        {/* Features */}
        <div className="container-fluid feature overflow-hidden py-5">
            <div className="container py-5">
                <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '900px', visibility: 'visible', animationDelay: '0.1s', animation: 'fadeInUp' }}>
                    <h4 className="text-primary">Our Features</h4>
                    <h1 className="display-5 mb-4">Important Features For Email Marketing</h1>
                    <p className="mb-0">Dolor sit amet consectetur, adipisicing elit. Ipsam, beatae maxime. Vel animi eveniet doloremque reiciendis soluta iste provident non rerum illum perferendis earum est architecto dolores vitae quia vero quod incidunt culpa corporis, porro doloribus. Voluptates nemo doloremque cum.
                    </p>
                </div>
                <div className="row g-4 justify-content-center text-center mb-5">
                    <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '900px', visibility: 'visible', animationDelay: '0.1s', animation: 'fadeInUp' }}>
                        <div className="text-center p-4">
                            <div className="d-inline-block rounded bg-light p-4 mb-4"><i className="fas fa-envelope fa-5x text-secondary"></i></div>
                            <div className="feature-content">
                                <a href="#" className="h4">Email Marketing <i className="fa fa-long-arrow-alt-right"></i></a>
                                <p className="mt-4 mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit.consectetur adipisicing elit
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.3s" style={{ maxWidth: '900px', visibility: 'visible', animationDelay: '0.1s', animation: 'fadeInUp' }}>
                        <div className="text-center p-4">
                            <div className="d-inline-block rounded bg-light p-4 mb-4"><i className="fas fa-mail-bulk fa-5x text-secondary"></i></div>
                            <div className="feature-content">
                                <a href="#" className="h4">Email Builder <i className="fa fa-long-arrow-alt-right"></i></a>
                                <p className="mt-4 mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit.consectetur adipisicing elit
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.5s" style={{ maxWidth: '900px', visibility: 'visible', animationDelay: '0.1s', animation: 'fadeInUp' }}>
                        <div className="text-center rounded p-4">
                            <div className="d-inline-block rounded bg-light p-4 mb-4"><i className="fas fa-sitemap fa-5x text-secondary"></i></div>
                            <div className="feature-content">
                                <a href="#" className="h4">Customer Builder <i className="fa fa-long-arrow-alt-right"></i></a>
                                <p className="mt-4 mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit.consectetur adipisicing elit
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.7s" style={{ maxWidth: '900px', visibility: 'visible', animationDelay: '0.1s', animation: 'fadeInUp' }}>
                        <div className="text-center rounded p-4">
                            <div className="d-inline-block rounded bg-light p-4 mb-4"><i className="fas fa-tasks fa-5x text-secondary"></i></div>
                            <div className="feature-content">
                                <a href="#" className="h4">Campaign Manager <i className="fa fa-long-arrow-alt-right"></i></a>
                                <p className="mt-4 mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit.consectetur adipisicing elit
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '900px', visibility: 'visible', animationDelay: '0.1s', animation: 'fadeInUp' }}>
                        <div className="my-3">
                            <a href="#" className="btn btn-primary d-inline rounded-pill px-5 py-3">More Features</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
  