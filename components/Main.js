// components/Main.js
export default function Main() {
    return (
      <section className="position-relative vh-100 d-flex align-items-center text-white" style={{ backgroundImage: 'linear-gradient(to right, #2C6f34, #70bc4f)' }}>
        <div className="container text-center" data-aos="fade-up">
          <h1 className="display-3 mb-4">Transform Your 1% into Wealth</h1>
          <p className="lead mb-4">Continue the 1% contribution, but invest in your future instead</p>
          <button className="btn btn-light btn-lg px-5">
            Start Investing Now
          </button>
        </div>
      </section>
    );
  }
  