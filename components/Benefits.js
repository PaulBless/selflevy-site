// components/Benefits.js
'use client';

export default function Benefits() {
    return (
      <section className="py-5 bg-primary text-white">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="display-5 text-sl">SelfLevy Benefits</h2>
          </div>
          <div className="row">
            <div className="col-md-4 mb-4 h-100 wow fadeUp" data-aos="fade-up">
              <div className="p-4 bg-white text-dark rounded">
                <h3 className="h5">Build Wealth Automatically</h3>
                <p>Convert your former 1% tax into personal wealth through automated micro-investments</p>
              </div>
            </div>
            <div className="col-md-4 mb-4 h-100 wow fadeUp" data-aos="fade-up" data-aos-delay="100">
              <div className="p-4 bg-white text-dark rounded">
                <h3 className="h5">Secure Your Future</h3>
                <p>Prepare for retirement and end-of-life comfort with consistent savings</p>
              </div>
            </div>
            <div className="col-md-4 mb-4 h-100 wow fadeUp" data-aos="fade-up" data-aos-delay="200">
              <div className="p-4 bg-white text-dark rounded">
                <h3 className="h5">Free Insurance Coverage</h3>
                <p>Get travel insurance coverage when your balance reaches 1,000 Ghana cedis</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  