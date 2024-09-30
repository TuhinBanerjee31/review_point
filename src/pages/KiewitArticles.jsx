import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { EyeIcon } from "@heroicons/react/24/outline";
import articleImage from "../assets/kiewit_article_1.jpg";
import CommentSection from "../components/CommentSection";
import ArticleSlider from "../components/ArticleSlider";
import rvr from "../assets/reviewers/kiewitrvr.jpg";

const KiewitArticles = () => {
  let commentData= [
    {
      id: 1,
      name: "Mark Stiener",
      days: "7",
      comment: "Kiewit Construction Company consistently demonstrates exceptional project execution and innovative solutions, making them a leader in the construction industry. Their commitment to safety and sustainability is commendable and sets a benchmark for others." ,
      likes: "13"
    },
    {
      id: 2,
      name: "Bron Fatu",
      days: "11",
      comment: "With a proven track record of delivering high-quality infrastructure projects, Kiewit Construction Company exemplifies professionalism and expertise. Their ability to adapt to challenges while maintaining strong client relationships is truly impressive." ,
      likes: "6"
    },
    {
      id: 3,
      name: "Paul Selina",
      days: "14",
      comment: "Known for their innovative approaches and cutting-edge technology, Kiewit Construction Company is at the forefront of transforming the construction landscape. Their focus on collaboration and communication fosters a positive working environment for all stakeholders." ,
      likes: "19"
    },
    {
      id: 4,
      name: "Nitesh Kedia",
      days: "23",
      comment: "Kiewit Construction Company exemplifies excellence in project management, consistently delivering results on time and within budget. Their commitment to safety and employee well-being reflects their core values and sets them apart in the industry." ,
      likes: "21"
    }
  ]

  return (
    <div className="bg-[#E9F1FA] font-Quicksand">
      <Nav />
      <div className="min-h-screen py-10 px-4">
        <h1 className="font-semibold text-4xl tracking-wider max-w-screen-xl mx-auto px-3">
          Kiewit Construction Company: A Comprehensive Overview
        </h1>
        <div className="max-w-screen-xl mx-auto flex justify-between py-2">
          <p className="tracking-wider px-4">
            By <b>Xander Anderson</b>
          </p>

          <div className="flex gap-2">
            <EyeIcon className="h-6 w-6 text-gray-500" />
            <p>62351</p>
          </div>
        </div>

        <div className="max-w-screen-lg mx-auto my-7">
          <img src={articleImage} alt="..." className="h-full w-full" />
        </div>

        <h5 className="text-lg tracking-wider max-w-screen-xl mx-auto">
          Kiewit Corporation, one of North America's largest and most renowned
          construction and engineering companies, has been at the forefront of
          infrastructure development for over a century. Headquartered in Omaha,
          Nebraska, Kiewit operates across a wide range of sectors, including
          transportation, power, oil, gas, chemical, water, and wastewater,
          among others. Their reputation for excellence, safety, and innovation
          has made them a leader in the construction industry.
        </h5>

        <h3 className="text-2xl font-semibold pt-7 pb-2 max-w-screen-xl mx-auto">
          History and Evolution
        </h3>
        <h5 className="text-lg tracking-wider max-w-screen-xl mx-auto">
          Kiewit was founded in 1884 by Peter Kiewit as a small masonry
          contracting business. Over the years, the company expanded from its
          local roots into a major player in national and international
          construction. The firm took a pivotal role in large-scale
          infrastructure projects, particularly during the mid-20th century,
          when it became a key contractor for the U.S. government during World
          War II and in the post-war economic boom. Peter Kiewit's leadership,
          particularly from the 1920s until his death in 1979, was instrumental
          in the company's rise. He instilled a culture of quality,
          accountability, and innovation, which continues to guide the firm
          today.
        </h5>

        <h3 className="text-2xl font-semibold pt-7 pb-2 max-w-screen-xl mx-auto">
          Business Segments and Expertise
        </h3>
        <h5 className="text-lg tracking-wider max-w-screen-xl mx-auto">
          <b>Transportation</b> Kiewit is a leader in building and modernizing
          North America's transportation infrastructure. This includes the
          construction of roads, bridges, tunnels, and rail systems. Projects
          like the Denver International Airport and major freeway interchanges
          highlight Kiewit's expertise in delivering complex transportation
          solutions.<br></br>
          <b>Power</b> Kiewit has a long history of building power plants and
          energy infrastructure, from coal and natural gas facilities to
          renewable energy sources like wind and solar farms. As the world
          transitions toward sustainable energy, Kiewit plays a crucial role in
          developing next-generation power plants that emphasize efficiency and
          environmental responsibility.<br></br>
          <b>Oil, Gas, and Chemicals</b> Kiewit is a significant player in the
          oil and gas sector, focusing on infrastructure such as pipelines,
          refineries, and chemical processing plants. Their capabilities extend
          from engineering and procurement to construction, maintenance, and
          commissioning.<br></br>
          <b>Water and Wastewater</b> In response to growing environmental
          concerns and the need for sustainable water management, Kiewit has
          become a major force in designing and building water treatment plants,
          wastewater systems, and other critical infrastructure.<br></br>
          <b>Mining</b> Kiewit has a presence in mining, offering construction
          and operational support for mines across North America. This includes
          infrastructure projects related to surface and underground mining
          operations.
        </h5>

        <h3 className="text-2xl font-semibold pt-7 pb-2 max-w-screen-xl mx-auto">
          Notable Projects
        </h3>
        <h5 className="text-lg tracking-wider max-w-screen-xl mx-auto">
          Kiewit has been involved in some of the most significant construction
          projects in North American history, including:<br></br>
          <br></br>
          <b>San Francisco-Oakland Bay Bridge (Eastern Span):</b> Kiewit was a
          key contractor in rebuilding the Bay Bridge following the 1989 Loma
          Prieta earthquake.<br></br>
          <b>Big Dig, Boston:</b> Kiewit played a critical role in the massive
          Boston Central Artery/Tunnel Project, one of the most complex and
          expensive highway projects in U.S. history.<br></br>
          <b>Tilikum Crossing, Portland:</b> Kiewit was the prime contractor for
          the construction of this bridge, the first major multi-modal bridge in
          the U.S. that is open only to public transit, cyclists, and
          pedestrians.
        </h5>

        <h3 className="text-2xl font-semibold pt-7 pb-2 max-w-screen-xl mx-auto">
          Innovation and Technology
        </h3>
        <h5 className="text-lg tracking-wider max-w-screen-xl mx-auto">
          Kiewit is known for leveraging cutting-edge technology in
          construction. They employ advanced project management tools, Building
          Information Modeling (BIM), and other digital platforms to enhance
          efficiency, accuracy, and safety on job sites. Additionally, Kiewit
          has embraced sustainable construction practices, seeking to minimize
          their projects' environmental impact through energy-efficient designs
          and green building certifications.
        </h5>

        <h3 className="text-2xl font-semibold pt-7 pb-2 max-w-screen-xl mx-auto">
          Commitment to Safety
        </h3>
        <h5 className="text-lg tracking-wider max-w-screen-xl mx-auto">
          Safety is one of Kiewit's core values. The company has received
          numerous safety awards and consistently ranks among the safest
          construction companies in North America. Kiewit has implemented
          comprehensive safety programs that go beyond regulatory requirements,
          emphasizing proactive measures, training, and employee engagement to
          ensure accident-free workplaces.
        </h5>

        <h3 className="text-2xl font-semibold pt-7 pb-2 max-w-screen-xl mx-auto">
          Workforce and Culture
        </h3>
        <h5 className="text-lg tracking-wider max-w-screen-xl mx-auto">
          Kiewit is employee-owned, which fosters a strong sense of
          accountability and pride among its workforce. The company emphasizes
          professional development and offers extensive training opportunities
          to its employees. With over 30,000 employees across North America,
          Kiewit’s culture is built on teamwork, respect, and a commitment to
          excellence.
        </h5>

        <h3 className="text-2xl font-semibold pt-7 pb-2 max-w-screen-xl mx-auto">
          Sustainability and Social Responsibility
        </h3>
        <h5 className="text-lg tracking-wider max-w-screen-xl mx-auto">
          Kiewit is deeply committed to environmental stewardship and corporate
          responsibility. The company takes a holistic approach to
          sustainability, focusing on reducing the environmental impact of its
          operations and projects, supporting local communities, and promoting
          diversity and inclusion within its workforce. Through philanthropic
          efforts, Kiewit Foundation also contributes to educational and
          community initiatives.
        </h5>

        <h3 className="text-2xl font-semibold pt-7 pb-2 max-w-screen-xl mx-auto">
          Conclusion
        </h3>
        <h5 className="text-lg tracking-wider max-w-screen-xl mx-auto">
          Kiewit Construction Company has built an extraordinary legacy over the
          past 140 years, evolving from a small masonry business into one of the
          most respected construction and engineering firms in the world. With
          its broad expertise, innovative approach, and commitment to safety and
          sustainability, Kiewit continues to shape the future of infrastructure
          development across North America and beyond. Their role in building
          essential infrastructure ensures that they will remain a cornerstone
          of the construction industry for years to come.
        </h5>

        <div className="flex w-full p-4 max-w-screen-lg mx-auto flex-col rounded-lg bg-white shadow-sm border border-slate-200 my-6">
          <div className="flex items-center gap-4 text-slate-800">
            <img
              src={rvr}
              alt="Xander Andreson"
              className="relative inline-block h-[58px] w-[58px] !rounded-full  object-cover object-center"
            />
            <div className="flex w-full flex-col">
              <div className="flex items-center justify-between">
                <h5 className="text-xl font-semibold text-slate-800">
                  Xander Andreson
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
                Quality Inspector @ GIS
              </p>
            </div>
          </div>
          <div className="mt-6">
            <p className="text-base text-slate-600 font-light leading-normal">
              Xander Andreson is a highly experienced quality inspector with
              over 15 years in the infrastructure, construction, energy, and
              maritime sectors. Known for his precision and commitment to
              safety, he has worked on a range of large-scale projects, ensuring
              they meet industry standards and exceed expectations. Xander's
              expertise spans from renewable energy installations to complex
              maritime infrastructure, where he plays a critical role in quality
              assurance, project management, and regulatory compliance, making
              him a trusted professional in his field.
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

export default KiewitArticles;
