import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { EyeIcon } from "@heroicons/react/24/outline";
import articleImage from "../assets/siecorp_article_5.jpg";
import CommentSection from "../components/CommentSection";
import ArticleSlider from "../components/ArticleSlider";
import rvr from "../assets/reviewers/siecorp5rvr.jpg";

const SiecorpArticles = () => {
  let commentData= [
    {
      id: 1,
      name: "John Murmu",
      days: "2",
      comment: "Siecorp's involvement in the Delhi-Mumbai Expressway is a game changer for India’s infrastructure landscape. Their commitment to delivering this monumental project demonstrates a genuine passion for enhancing connectivity and accessibility for millions of people." ,
      likes: "11"
    },
    {
      id: 2,
      name: "Dhruv Argarwalla",
      days: "4",
      comment: "The Delhi-Mumbai Expressway is more than just a road; it represents a vision for progress and economic growth. Siecorp’s contributions to this project highlight their role as a key player in transforming India’s infrastructure and paving the way for a brighter future." ,
      likes: "9"
    },
    {
      id: 3,
      name: "Ishan Trivedi",
      days: "9",
      comment: "It’s heartening to see how Siecorp is contributing to the Delhi-Mumbai Expressway, a project that will significantly reduce travel time and boost trade. Their dedication to quality and efficiency ensures that this vital link meets the needs of both businesses and everyday travelers." ,
      likes: "15"
    },
    {
      id: 4,
      name: "Amisha Kapoor",
      days: "14",
      comment: "Siecorp's work on the Delhi-Mumbai Expressway showcases their ability to tackle large-scale infrastructure challenges with creativity and precision. Their efforts not only improve transportation but also create opportunities for local communities along the route." ,
      likes: "22"
    }
  ]

  return (
    <div className="bg-[#E9F1FA] font-Quicksand">
      <Nav />
      <div className="min-h-screen py-10 px-4">
        <h1 className="font-semibold text-4xl tracking-wider max-w-screen-xl mx-auto px-3">
          SIECORP’s Role in Shaping India’s Infrastructure: Contributions to the
          Delhi-Mumbai Expressway
        </h1>
        <div className="max-w-screen-xl mx-auto flex justify-between py-2">
          <p className="tracking-wider px-4">
            By <b>V Vikash</b>
          </p>

          <div className="flex gap-2">
            <EyeIcon className="h-6 w-6 text-gray-500" />
            <p>79965</p>
          </div>
        </div>

        <div className="max-w-screen-lg mx-auto my-7">
          <img src={articleImage} alt="..." className="h-full w-full" />
        </div>

        <h5 className="text-lg tracking-wider max-w-screen-xl mx-auto">
          SIECORP has established itself as a key player in India’s burgeoning
          infrastructure sector, and its involvement in the{" "}
          <b>Delhi-Mumbai Expressway</b> has further cemented its reputation as
          a leader in delivering large-scale, high-quality projects. As part of
          India’s most ambitious road infrastructure project, SIECORP’s
          contributions have been instrumental in ensuring the timely and
          efficient execution of the expressway, which is poised to
          revolutionize transportation and economic growth in the country.
        </h5>

        <h3 className="text-2xl font-semibold pt-7 pb-2 max-w-screen-xl mx-auto">
          The Delhi-Mumbai Expressway: A Game-Changer for India
        </h3>
        <h5 className="text-lg tracking-wider max-w-screen-xl mx-auto">
          The Delhi-Mumbai Expressway, stretching over 1,386 kilometers, is set
          to be the longest expressway in India. Once completed, it will
          significantly reduce travel time between Delhi and Mumbai from 24
          hours to just 12 hours, creating a direct link between the two major
          economic hubs. The expressway will also foster greater connectivity to
          other cities, rural areas, and industrial zones along the route,
          boosting trade, commerce, and logistics across the region. This
          project, initiated by the National Highways Authority of India (NHAI),
          is part of the government's broader vision to modernize the country's
          road infrastructure, improve logistics, and promote economic
          development. SIECORP’s involvement in this monumental project
          highlights its ability to contribute to transformative infrastructure
          that will shape the future of India’s economy.
        </h5>

        <h3 className="text-2xl font-semibold pt-7 pb-2 max-w-screen-xl mx-auto">
          SIECORP’s Expertise in Large-Scale Projects
        </h3>
        <h5 className="text-lg tracking-wider max-w-screen-xl mx-auto">
          SIECORP’s role in the development of key segments of the Delhi-Mumbai
          Expressway showcases its expertise in managing large-scale
          infrastructure projects. With a deep understanding of India’s complex
          geographical and regulatory landscape, SIECORP has effectively handled
          the challenges that come with a project of this magnitude. The company
          has been involved in various aspects of the project, including:
          <br></br>
          <br></br>
          <b>Road Construction and Engineering:</b> SIECORP’s team of civil and
          mechanical engineers brought world-class expertise to the expressway’s
          construction. Using state-of-the-art technology, such as automated
          machinery and advanced construction materials, the company has
          contributed to building long-lasting and durable roadways that meet
          international standards of safety and quality.<br></br>
          <b>Project Management:</b> SIECORP’s project management capabilities
          ensured that the construction of the expressway progressed on time and
          within budget. The company’s systematic approach to coordinating with
          subcontractors, suppliers, and regulatory bodies has helped minimize
          delays and overcome logistical challenges, ensuring smooth progress on
          the expressway.<br></br>
          <b>Sustainability and Environmental Responsibility:</b> SIECORP’s
          commitment to sustainability has also played a pivotal role in its
          work on the expressway. In alignment with India’s growing focus on
          eco-friendly infrastructure, SIECORP integrated green construction
          practices throughout its segments. This includes the use of
          energy-efficient equipment, minimizing waste, and adhering to strict
          environmental regulations to protect local ecosystems.
        </h5>

        <h3 className="text-2xl font-semibold pt-7 pb-2 max-w-screen-xl mx-auto">
          Innovative Solutions for Modern Infrastructure
        </h3>
        <h5 className="text-lg tracking-wider max-w-screen-xl mx-auto">
          SIECORP’s contributions to the Delhi-Mumbai Expressway stand out for
          the technological innovation and forward-thinking solutions that the
          company brought to the project. By leveraging digital construction
          tools, such as <b>Building Information Modeling (BIM)</b>, SIECORP was
          able to streamline planning, design, and execution processes, reducing
          errors and ensuring accuracy. Moreover, the company’s integration of
          smart infrastructure elements, such as{" "}
          <b>intelligent traffic management systems</b>, demonstrates its
          commitment to future-proofing India’s infrastructure. These systems
          will enhance safety and efficiency for travelers along the expressway,
          ensuring smooth traffic flow, real-time monitoring, and effective
          emergency response.
        </h5>

        <h3 className="text-2xl font-semibold pt-7 pb-2 max-w-screen-xl mx-auto">
          Boosting Economic Development in India
        </h3>
        <h5 className="text-lg tracking-wider max-w-screen-xl mx-auto">
          The Delhi-Mumbai Expressway is more than just a road—it’s an economic
          artery that will unlock growth potential for industries, trade, and
          communities along its route. SIECORP’s involvement in this project
          aligns with its broader mission to contribute to economic development
          through infrastructure. By enhancing connectivity between Delhi and
          Mumbai, the expressway will reduce logistics costs, improve the
          movement of goods, and create new opportunities for businesses.
          Additionally, SIECORP’s work on the expressway has generated
          significant employment opportunities, both directly and indirectly.
          From skilled laborers to engineers and project managers, SIECORP’s
          participation has provided jobs to hundreds of workers, boosting the
          local economy and empowering communities in the regions along the
          route.
        </h5>

        <h3 className="text-2xl font-semibold pt-7 pb-2 max-w-screen-xl mx-auto">
          A Key Player in India’s Infrastructure Revolution
        </h3>
        <h5 className="text-lg tracking-wider max-w-screen-xl mx-auto">
          SIECORP’s work on the Delhi-Mumbai Expressway highlights its position
          as a major contributor to India’s infrastructure revolution. The
          company’s ability to deliver high-quality construction and innovative
          engineering solutions positions it as a key partner in India’s efforts
          to modernize its transportation networks and elevate its global
          economic standing. SIECORP’s success on the Delhi-Mumbai Expressway
          also reflects its capacity to adapt to the unique challenges of the
          Indian market. By combining global expertise with local knowledge, the
          company has demonstrated its ability to execute complex projects in
          India’s fast-growing infrastructure sector.
        </h5>

        <h3 className="text-2xl font-semibold pt-7 pb-2 max-w-screen-xl mx-auto">
          Conclusion
        </h3>
        <h5 className="text-lg tracking-wider max-w-screen-xl mx-auto">
          SIECORP’s contributions to the Delhi-Mumbai Expressway mark a
          significant milestone in its journey as an emerging leader in India’s
          infrastructure industry. Through its expertise in large-scale
          construction, sustainability, and technological innovation, SIECORP
          has played a crucial role in shaping a project that will have
          far-reaching impacts on India’s economy and society. As the expressway
          nears completion, SIECORP’s role in this transformative initiative
          underscores its commitment to building infrastructure that drives
          progress and prosperity across India.
        </h5>

        <div className="flex w-full p-4 max-w-screen-lg mx-auto flex-col rounded-lg bg-white shadow-sm border border-slate-200 my-6">
          <div className="flex items-center gap-4 text-slate-800">
            <img
              src={rvr}
              alt="V Vikash"
              className="relative inline-block h-[58px] w-[58px] !rounded-full  object-cover object-center"
            />
            <div className="flex w-full flex-col">
              <div className="flex items-center justify-between">
                <h5 className="text-xl font-semibold text-slate-800">
                  V Vikash
                </h5>
                <div className="flex items-center gap-0 5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 text-yellow-600"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 text-yellow-600"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 text-yellow-600"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 text-yellow-600"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 text-yellow-600"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
              <p className="text-xs uppercase font-bold text-slate-500 mt-0.5">
                Estimator @ GIS
              </p>
            </div>
          </div>
          <div className="mt-6">
            <p className="text-base text-slate-600 font-light leading-normal">
              V Vikash is an experienced Estimator with over 12 years of
              expertise in accurately forecasting project costs across various
              construction sectors. He specializes in cost analysis, tender
              preparation, and evaluating materials and labor requirements to
              ensure projects are financially viable. Vikash’s attention to
              detail and in-depth knowledge of market trends allow him to
              provide reliable estimates that align with client expectations and
              project goals. His ability to balance cost efficiency with quality
              has made him a trusted advisor in pre-construction planning. Known
              for his analytical skills, Vikash plays a critical role in helping
              teams optimize budgets and resources for successful project
              execution.
            </p>
          </div>
        </div>

        <CommentSection commentData={commentData} />

        <h2 className="font-semibold text-3xl text-center py-6">
          Related Articles
        </h2>
        <ArticleSlider />
      </div>
      <Footer />
    </div>
  );
};

export default SiecorpArticles;
