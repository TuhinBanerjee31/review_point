import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="bg-[#E9F1FA] font-Quicksand">
      <Nav />
      <div className="min-h-screen pt-6 pb-10 px-5 flex flex-col justify-center gap-2">
        <h3 className="text-4xl font-semibold pt-7 pb-10 max-w-screen-xl mx-auto">
          About OnSite Review
        </h3>
        <h5 className="text-xl tracking-wider max-w-screen-xl mx-auto">
          Welcome to OnSite Review, your premier destination for comprehensive
          reviews and insights on construction companies around the globe. In an
          industry where trust and reliability are paramount, we recognize the
          challenges faced by clients when selecting the right construction
          partner. Our platform is designed to bridge that gap by providing
          transparent, unbiased feedback from clients, industry professionals,
          and partners who have firsthand experience with these companies.
        </h5>

        <h5 className="text-xl tracking-wider max-w-screen-xl mx-auto">
          At OnSite Review, we believe that informed decisions lead to
          successful projects. Our mission is to empower homeowners, developers,
          and project managers with the information they need to navigate the
          construction landscape confidently. Our platform features detailed
          reviews, ratings, and testimonials that highlight each company's
          strengths, weaknesses, and unique offerings.
        </h5>

        <h5 className="text-xl tracking-wider max-w-screen-xl mx-auto">
          We cover a diverse range of construction sectors, from large-scale
          infrastructure projects to specialized residential contractors. Our
          team is dedicated to ensuring that you have access to the latest
          information, trends, and insights, helping you compare companies based
          on criteria such as project quality, timeliness, budget adherence, and
          customer service. What sets us apart is our commitment to fostering a
          community of transparency and accountability within the construction
          industry. We encourage users to share their experiences, allowing for
          a diverse range of perspectives that can guide others in their
          decision-making process. Whether you're a homeowner looking to build
          your dream house, a business seeking to expand your facilities, or a
          developer planning a major project, our platform provides the
          resources you need to choose the right partner.
        </h5>

        <h5 className="text-xl tracking-wider max-w-screen-xl mx-auto">
          In addition to reviews, OnSite Review offers valuable resources,
          including articles, guides, and industry news to keep you informed
          about the latest developments in construction practices and
          technologies. We strive to be more than just a review platform; we aim
          to be a comprehensive resource for all your construction needs.
        </h5>

        <h5 className="text-xl tracking-wider max-w-screen-xl mx-auto">
          Join our community today and discover why OnSite Review is the trusted
          source for construction company evaluations. Together, let's build a
          foundation of trust and excellence in the construction
          industry—because every project deserves the best.
        </h5>
      </div>
      <Footer />
    </div>
  );
};

export default About;
