import Image from "next/image";

const WhySelfLevy = () => {
    return (
      <div className="container why-selflevy pb-5">
        <div className="row">
            <div className="col-lg-8 offset-lg-2">
                <h1 className="display-5 text-sl text-center">Why SelfLevy?</h1>
                <p className="description text-gray text-center ">
                  Our products are designed with you in mind. If you’re looking for convenient day-to-day banking, to save for a rainy day or to put away money for that big purchase, we’re here to help you.
                </p>
            </div>
        </div>
        <div className="row row-eq-height g-4 justify-content-center text-center">
            <div className="col-lg-4 col-md-6 mb-3">
                <div className="base-panel h-100 pb-0">
                    <div className="card-body">
                      <img className="mb-3" src="assets/img/easy.svg" alt="secure icon" />
                      <h4 className="text-black">It’s Secure</h4>
                      <p className="text-gray">
                          No monthly fees, earn interest
                      </p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-3">
                <div className="base-panel h-100 pb-0">
                    <div className="card-body">
                        <img className="mb-3" src="assets/img/easy.svg" alt="rapid account icon" />
                        <h4 className="text-black">It’s Easy</h4>
                        <p className="text-gray">
                            Get an account in a few simple steps
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-3">
                <div className="base-panel h-100 pb-0">
                    <div className="card-body">
                        <img className="mb-3" src="assets/img/growth.svg"  alt="free icon" />
                        <h4 className="text-black">It’s Convenient</h4>
                        <p className="text-gray">
                            Access your secure account 24/7
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
};

export default  WhySelfLevy;
