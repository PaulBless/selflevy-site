// components/Features.js
'use client';

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
      <div className="container-fluid py-5 bg-light">
        <div className="container py-5">
          <h2 className="display-5 text-sl text-center mb-3 wow fadeUp" data-wow-delay="0.1s">
            Features
          </h2>
          <p className="text-center mb-5 wow fadeUp" data-wow-delay="0.2s">Explore the innovative tools and options that make saving and investing effortless.</p>
          <div className="row g-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="col-md-6 col-lg-6 col-xl-3 mb-4 wow fadeInUp"
                data-wow-delay={index * 100}
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
      </div>
    );
  }
  