import Link from "next/link";

export default function Contact() {
    return (
      <div>
        
        {/* <!-- Header Start --> */}
        <div className="container-fluid bg-breadcrumb">
            <ul className="breadcrumb-animation">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <div className="container text-center py-5" style={{ maxWidth: '900px' }}>
                <h3 className="display-5 text-sl mb-4 wow fadeInDown" data-wow-delay="0.1s">Contact SelfLevy</h3>
                <ol className="breadcrumb justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
                    <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                    <li className="breadcrumb-item active text-primary">Contact Us</li>
                </ol>    
            </div>
        </div>
        {/* <!-- Header End --> */}
      </div>
    );
  }
  