// React and Next.js imports
import Image from "next/image";
import Link from "next/link";

// Asset imports
import PlaceholderImg from "@/public/assets/img/hero-img-1.png";

const About = () => {
  return (
   <div className="container-fluid overflow-hidden py-5" style={{ }}>
    {/* <!-- Section Start --> */}
    <div className="container py-5">
        <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="RotateMoveLeft">
                    <Image src={PlaceholderImg} className="img-fluid w-100" alt="" />
                </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                <h1 className="display-5 mb-4 text-sl">About SelfLevy</h1>
                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, suscipit itaque quaerat dicta porro illum, autem, molestias ut animi ab aspernatur dolorum officia nam dolore. Voluptatibus aliquam earum labore atque.
                </p>
                <Link href="/about" className="btn btn-primary rounded-pill py-3 px-5">Learn More</Link>
            </div>
        </div>
    </div>
    {/* <!-- Section End --> */}
   </div>
  );
};

export default About;
