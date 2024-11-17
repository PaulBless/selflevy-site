'use client';

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

const Choose = () => {
    return (
        <div className="container why-selflevy py-5">
            <div className="row">
            <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '700px'}}>
                <h1 className="display-6 mb-4">Features</h1>
                <p className="mb-5">SelfLevy money management is completely free to use. Whether you want to save money, track your expenses, or invest, SelfLevy has got you covered.</p>
            </div>
            </div>
            <div className="row g-4 justify-content-center mb-5">
                <div className="col-lg-4 col-md-4 wow fadeInUp" data-wow-delay="0.1s" >
                    <div className="service-item bg-white text-center h-100 p-4 p-xl-5">
                        <h5 className="mb-3"> Heading Title </h5>    
                        <p className="mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, suscipit itaque quaerat dicta porro illum, autem, molestias ut animi ab aspernatur dolorum officia nam dolore. Voluptatibus aliquam earum labore atque.
                        </p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 wow fadeInUp" data-wow-delay="0.3s" >
                    <div className="service-item bg-white text-center h-100 p-4 p-xl-5">
                        <h5 className="mb-3"> Heading Title </h5>     
                        <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, suscipit itaque quaerat dicta porro illum, autem, molestias ut animi ab aspernatur dolorum officia nam dolore. Voluptatibus aliquam earum labore atque.</p>
                        
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 wow fadeInUp" data-wow-delay="0.5s" >
                    <div className="service-item bg-white text-center h-100 p-4 p-xl-5">
                        <h5 className="mb-3"> Heading Title </h5>     
                        <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, suscipit itaque quaerat dicta porro illum, autem, molestias ut animi ab aspernatur dolorum officia nam dolore. Voluptatibus aliquam earum labore atque.</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Choose;