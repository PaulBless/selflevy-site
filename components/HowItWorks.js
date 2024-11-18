// components/HowItWorks.js
'use client';

export default function HowItWorks() {
    const steps = [
      {
        title: 'Register',
        description: 'Download the app and register with your mobile number or email',
      },
      {
        title: 'Link Accounts',
        description: 'Connect your mobile money or bank accounts for automatic deductions',
      },
      {
        title: 'Start Saving',
        description: '1% is automatically invested from each transaction',
      },
      {
        title: 'Watch It Grow',
        description: 'Track your investments and watch your wealth grow over time',
      }
    ];
  
    return (
      <div className="container-fluid sl-howitworks py-5">
        <div className="container mt-5">
            <div className="row text-center">
            <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '700px'}}>
                <h2 className="display-5 text-sl wow fadeInUp" data-aos="fade-up">How It Works</h2>
                <p className="mb-5">Learn the simple steps to transform 1% of your transaction taxes into investments.</p>
            </div>
            </div>
            <div className="row g-4 text-center">
                {steps.map((step, index) => (
                <div
                    key={index}
                    className="col-md-3 mb-2 p-0 wow fadeInUp"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                >
                    <div className="bg-primary text-white rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center" style={{ width: '4rem', height: '4rem', fontSize: '1.5rem' }}>
                    {index + 1}
                    </div>
                    <h3 className="h5">{step.title}</h3>
                    <p>{step.description}</p>
                </div>
                ))}
            </div>
            
        </div>
      </div>
    );
  }
  