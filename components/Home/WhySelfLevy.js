'use client';

import Image from "next/image";

const WhySelfLevy = () => {
    return (
      <div className="container why-selflevy pb-5">
        <div className="row">
            <div className="col-lg-8 offset-lg-2">
                <h1 className="display-5 text-sl text-center">Why SelfLevy?</h1>
                <p className="description text-gray text-center ">
                    Discover how SelfLevy empowers you to turn everyday transactions into long-term wealth.
                </p>
            </div>
        </div>
        <div className="row row-eq-height g-4 justify-content-center text-center">
            <div className="col-lg-4 col-md-6 mb-3">
                <div className="base-panel h-100 pb-0">
                    <div className="card-body">
                      <img className="mb-3" src="assets/img/easy.svg" alt="secure icon" />
                      <h4 className="text-black fw-bold">It’s Secure</h4>
                      <p className="text-gray">
                        Your funds and data are protected with top-notch security measures.
                      </p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-3">
                <div className="base-panel h-100 pb-0">
                    <div className="card-body">
                        <img className="mb-3" src="assets/img/easy.svg" alt="rapid account icon" />
                        <h4 className="text-black fw-bold">It’s Easy</h4>
                        <p className="text-gray">
                            Sign up effortlessly and start saving in just a few simple steps.
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-3">
                <div className="base-panel h-100 pb-0">
                    <div className="card-body">
                        <img className="mb-3" src="assets/img/growth.svg"  alt="free icon" />
                        <h4 className="text-black fw-bold">It’s Convenient</h4>
                        <p className="text-gray">
                            Enjoy 24/7 access to your secure account anytime, anywhere.
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
};

export default  WhySelfLevy;
