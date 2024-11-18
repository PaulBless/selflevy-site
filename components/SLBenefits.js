
const SLBenefits = () => {
    return (
        <section className="sl-benefits bg-light">
        <div className="container py-5 ">
            <div className="row">
                <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '700px'}}>
                    <h1 className="display-5 text-sl mb-4">Benefits </h1>
                    <p className="mb-5">See how SelfLevy helps you build wealth, secure your future, and achieve your goals.</p>
                </div>
            </div>
            <div className="row g-4 justify-content-center mb-5">
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" >
                    <div className="service-item bg-white text-center h-100 p-4 p-xl-5">
                        <h5 className="mb-4 fw-bold"> Build Wealth Automatically </h5>    
                        <p className="mb-3">
                        Convert your former <b className="text-sl">1% tax</b> into personal wealth through automated micro-investments.
                        </p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s" >
                    <div className="service-item bg-white text-center h-100 p-4 p-xl-5">
                        <h5 className="mb-4 fw-bold"> Secure Your Future </h5>     
                        <p className="mb-3">Prepare for family emergencies, retirement and end-of-life comfort with consistent savings</p>
                        
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s" >
                    <div className="service-item bg-white text-center h-100 p-4 p-xl-5">
                        <h5 className="mb-4 fw-bold"> Free Insurance Coverage </h5>     
                        <p className="mb-3">Get travel insurance coverage when your balance reaches <b className="text-secondary">1,000</b> Ghana cedis.</p>
                        
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
};

export default SLBenefits;