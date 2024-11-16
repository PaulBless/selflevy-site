// components/Features.js
import Link from "next/link";

export default function Features() {
    const features = [
      {
        title: 'Automated 1% Investment',
        description: 'Automatically invest 1% from every transaction into your future.',
        icon: '💰'
      },
      {
        title: 'Multiple Investment Options',
        description: 'Choose from various investment portfolios including bonds and mutual funds.',
        icon: '📈'
      },
      {
        title: 'Free Insurance Coverage',
        description: 'Get free insurance when your balance reaches 1,000 Ghana cedis.',
        icon: '🛡️'
      },
      {
        title: 'Goal-Based Savings',
        description: 'Set purchase goals and track your progress towards achieving them.',
        icon: '🎯'
      }
    ];
  
    return (
      <section className="py-5 bg-light">
        <div className="container py-5">
          <h2 className="display-5 text-sl text-center mb-5 wow fadeUp" data-aos="fade-up">
            Features
          </h2>
          <div className="row">
            {features.map((feature, index) => (
              <div
                key={index}
                className="col-md-6 col-lg-3 mb-4"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="card h-100 shadow-sm">
                  <div className="card-body text-center">
                    <div className="display-4 mb-3">{feature.icon}</div>
                    <h3 className="h5">{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  