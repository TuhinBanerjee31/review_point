import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import card2 from "../assets/siecorp_logo.png";
import ArticleCard from "../components/ArticleCard";

const SiecorpArticlesList = () => {
  const cardData = [
    {
      title:
        "SIECORP’s Role in Shaping India’s Infrastructure: Contributions to the Delhi-Mumbai Expressway",
      desc: "SIECORP has established itself as a key player in India’s burgeoning infrastructure sector, and its involvement in the Delhi-Mumbai Expressway has further cemented its reputation as a leader in delivering large-scale.....",
      link: "/siecorp-role-in-shaping-india-infra",
    },
    {
      title:
        "SIECORP’s Role in Revolutionizing Connectivity: Contributions to the Mumbai-Pune Sea Link",
      desc: "The Mumbai-Pune Sea Link stands as one of the most ambitious infrastructure projects in India, aiming to bridge the connectivity between two of the country’s largest economic hubs.SIECORP, a global infrastructure solutions.....",
      link: "/siecorp-role-in-revolutionizing-connectivity",
    },
    {
      title: "SIECORP: A Global Leader in Integrated Infrastructure Solutions",
      desc: "SIECORP, a dynamic and innovative company, has firmly established itself as a trusted partner in the construction and infrastructure sectors across the globe. Over the years, SIECORP has evolved from a small business.....",
      link: "/siecorp-global-leader-in-integrated-infra-sol",
    },
    {
      title: "SIECORP: An Emerging Organization in the Indian Market",
      desc: "SIECORP, a global leader in infrastructure solutions, has steadily gained prominence in the Indian market, positioning itself as a key player in the country’s rapidly growing construction and infrastructure sectors.....",
      link: "/siecorp-an-emerging-org-in-india",
    },
    {
      title:
        "SIECORP’s Core Services and Specializations: Excellence in Infrastructure Solutions",
      desc: "SIECORP has earned a reputation as a leader in delivering high-quality, innovative infrastructure and construction solutions worldwide. By combining technical expertise, sustainable practices, and cutting-edge.....",
      link: "/siecorp-core-services-specializations",
    },
    {
      title:
        "SIECORP’s Employee-Centric Approach: A Commitment to Growth, Well-being, and Safety",
      desc: "SIECORP’s success is not just built on its innovative infrastructure solutions and global market presence but also on its unwavering commitment to its employees. The company has cultivated a workplace culture.....",
      link: "/siecorp-employee-centric-approach",
    },
    {
      title:
        "SIECORP’s Partnership with the Indian Government: A Catalyst for Progress and Development",
      desc: "SIECORP, a leader in construction and project management, is proud to be in partnership with the Government of India, working on various state and central-level initiatives. This collaboration has opened avenues for infrastructure......",
      link: "/siecorp-partnership-with-indian-government",
    },
  ];
  return (
    <div className="bg-[#E9F1FA] font-Quicksand">
      <Nav />
      <div className="min-h-screen">
        <h2 className="font-semibold text-5xl text-center pt-6">
          <img src={card2} alt="..." className="h-12 mx-auto" />
          Siecorp Articles List
        </h2>

        <div className="flex flex-wrap gap-6 justify-center py-14">
          <ArticleCard data={cardData[0]} />
          <ArticleCard data={cardData[1]} />
          <ArticleCard data={cardData[2]} />
          <ArticleCard data={cardData[3]} />
          <ArticleCard data={cardData[4]} />
          <ArticleCard data={cardData[5]} />
          <ArticleCard data={cardData[6]} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SiecorpArticlesList;
