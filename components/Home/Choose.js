const Choose = () => {
    return (
        <div className="container why-selflevy py-5">
            <div className="row">
            <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '700px'}}>
                <h1 className="display-6 mb-4">How It Works</h1>
                <p className="mb-5">SelfLevy money management is completely free to use. Whether you want to save money, track your expenses, or invest, SelfLevy has got you covered.</p>
            </div>
            </div>
            <div className="row g-4 justify-content-center mb-5">
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" >
                    <div className="service-item bg-white text-center h-100 p-4 p-xl-5">
                        <h5 className="mb-3"> Become a Donor </h5>    
                        <p className="mb-4">
                            Support a cause of your choice. Provide ongoing support with a recurring donation. 
                            Your financial support helps us provide essential resources and services to those in need and/or underprivileged.
                        </p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s" >
                    <div className="service-item bg-white text-center h-100 p-4 p-xl-5">
                        <h5 className="mb-3"> Become a Volunteer </h5>     
                        <p className="mb-4">Join our team of volunteers who are making a difference around the world. Whether you want to volunteer locally or internationally, we have opportunities that match your skills and interests.</p>
                        
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s" >
                    <div className="service-item bg-white text-center h-100 p-4 p-xl-5">
                        <h5 className="mb-3"> Sponsor a Project </h5>     
                        <p className="mb-4">Looking for a way to make a significant impact? Sponsor one of our major projects, such as building a school or drilling a well, and see the difference your contribution makes firsthand.</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Choose;