// components/HowItWorks.js
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
      <div className="container py-5">
        <div className="row text-center py-0">
          <h2 className="display-5 text-sl mb-3 wow fadeInUp" data-aos="fade-up">
            How It Works
          </h2>
          <p className="wow fadeInUp" style={{}}>SelfLevy money management is completely free to use. Whether you want to save money, track your expenses, or invest, SelfLevy has got you covered.</p>
          <div className="row g-4 text-center mb-5 pb-5">
            {steps.map((step, index) => (
              <div
                key={index}
                className="col-md-3 mb-4 h-100 p-4 border-left rounded wow fadeInUp"
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
  