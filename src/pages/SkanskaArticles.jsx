import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { EyeIcon } from "@heroicons/react/24/outline";
import articleImage from "../assets/skanska_article_1.jpg";
import CommentSection from "../components/CommentSection";
import ArticleSlider from "../components/ArticleSlider";
import rvr from "../assets/reviewers/skanskarvr.jpg";

const SkanskaArticles = () => {
  let commentData= [
    {
      id: 1,
      name: "Lawrence Neo",
      days: "16",
      comment: "From green buildings to large-scale infrastructure, Skanska leads the way in sustainable construction, shaping a better and more resilient future for cities around the world." ,
      likes: "5"
    }
  ]

  return (
    <div className="bg-[#E9F1FA] font-Quicksand">
      <Nav />
      <div className="min-h-screen py-10 px-4">
        <h1 className="font-semibold text-4xl tracking-wider max-w-screen-xl mx-auto px-3">
          Skanska: Construction and Development
        </h1>
        <div className="max-w-screen-xl mx-auto flex justify-between py-2">
          <p className="tracking-wider px-4">
            By <b>Phil Bonzo</b>
          </p>

          <div className="flex gap-2">
            <EyeIcon className="h-6 w-6 text-gray-500" />
            <p>47020</p>
          </div>
        </div>

        <div className="max-w-screen-lg mx-auto my-7">
          <img src={articleImage} alt="..." className="h-full w-full" />
        </div>

        <h5 className="text-lg tracking-wider max-w-screen-xl mx-auto">
          Skanska AB is a Sweden-based multinational construction and
          development company, renowned for delivering some of the most complex
          infrastructure and building projects around the world. Founded in
          1887, Skanska is one of the world’s largest construction firms, known
          for its sustainable practices, innovative solutions, and commitment to
          quality. With a strong presence in Europe, North America, and Latin
          America, Skanska’s portfolio spans a wide array of projects including
          commercial buildings, infrastructure, healthcare facilities, and
          residential developments.
        </h5>

        <h3 className="text-2xl font-semibold pt-7 pb-2 max-w-screen-xl mx-auto">
          History and Growth
        </h3>
        <h5 className="text-lg tracking-wider max-w-screen-xl mx-auto">
          Skanska was originally founded as Aktiebolaget Skånska Cementgjuteriet
          in Malmö, Sweden, primarily focusing on producing concrete products.
          Over time, the company diversified into construction, and by the
          mid-20th century, it had become one of the leading contractors in
          Sweden. Skanska expanded its operations internationally during the
          1970s, moving into markets like the United States, the United Kingdom,
          and the Nordic countries. Today, Skanska operates in 10 countries and
          employs over 30,000 people. It is listed on the Stockholm Stock
          Exchange and has developed a strong reputation for its sustainable
          approach to construction, playing a key role in promoting green
          building standards worldwide.
        </h5>

        <h3 className="text-2xl font-semibold pt-7 pb-2 max-w-screen-xl mx-auto">
          Core Business Areas
        </h3>
        <h5 className="text-lg tracking-wider max-w-screen-xl mx-auto">
          <b>Construction</b> Skanska is a leader in both civil and commercial
          construction, delivering projects across a range of sectors including
          transportation, healthcare, education, and public infrastructure. The
          company specializes in complex and large-scale projects, including
          highways, bridges, railways, tunnels, and airports. Skanska is known
          for its innovative construction techniques, using advanced
          technologies like BIM (Building Information Modeling) to enhance
          efficiency and project delivery.<br></br>
          <b>Residential Development</b> Skanska's residential development
          division focuses on building high-quality housing projects,
          particularly in urban areas. The company emphasizes sustainability and
          energy efficiency in its residential developments, ensuring that homes
          are environmentally friendly and economically viable. Skanska’s
          residential projects are particularly prominent in Scandinavia and
          Central Europe.<br></br>
          <b>Commercial Property Development</b> Skanska is also deeply involved
          in commercial property development, designing and constructing office
          buildings, retail centers, and mixed-use developments. The company has
          a strong focus on creating sustainable, energy-efficient buildings
          that meet international environmental standards. Skanska’s commercial
          projects are particularly known for their innovative designs and smart
          building technologies.<br></br>
          <b>Infrastructure Development</b> One of Skanska’s core strengths is
          its involvement in major infrastructure projects, particularly through
          Public-Private Partnerships (PPPs). The company collaborates with
          governments and private entities to design, finance, and build
          critical infrastructure such as highways, bridges, and transportation
          systems. Skanska is a leading player in PPPs, providing integrated
          solutions that include design, construction, and long-term
          maintenance.<br></br>
          <b>Sustainability and Green Building</b> Sustainability is a central
          component of Skanska’s business strategy. The company has been at the
          forefront of the green building movement, with many of its projects
          receiving certifications such as LEED (Leadership in Energy and
          Environmental Design) and BREEAM (Building Research Establishment
          Environmental Assessment Method). Skanska is committed to reducing its
          carbon footprint and has set ambitious goals to achieve net-zero
          emissions by 2045.<br></br>
        </h5>

        <h3 className="text-2xl font-semibold pt-7 pb-2 max-w-screen-xl mx-auto">
          Notable Projects
        </h3>
        <h5 className="text-lg tracking-wider max-w-screen-xl mx-auto">
          <b>MetLife Stadium, New Jersey, USA:</b> Skanska was one of the
          principal contractors responsible for the construction of this
          state-of-the-art sports facility, home to both the New York Giants and
          the New York Jets NFL teams. The project exemplifies Skanska's ability
          to deliver complex, large-scale infrastructure.<br></br>
          <b>Elizabeth Line (Crossrail), London, UK:</b> Skanska was involved in
          the design and construction of key sections of the Elizabeth Line, one
          of Europe’s largest infrastructure projects, enhancing transportation
          capacity across London.<br></br>
          <b>Karolinska University Hospital, Stockholm, Sweden:</b> One of the
          most advanced hospitals in the world, the Karolinska University
          Hospital was developed by Skanska, featuring cutting-edge medical
          facilities and sustainable building practices.<br></br>
          <b>LaGuardia Airport Redevelopment, New York, USA:</b> Skanska played
          a significant role in the redevelopment of LaGuardia Airport,
          modernizing the aging terminal and improving passenger experience.
          This is part of a broader infrastructure improvement effort to enhance
          transportation hubs in the United States.
        </h5>

        <h3 className="text-2xl font-semibold pt-7 pb-2 max-w-screen-xl mx-auto">
          Innovation and Technology
        </h3>
        <h5 className="text-lg tracking-wider max-w-screen-xl mx-auto">
          Skanska is at the forefront of incorporating new technologies into the
          construction process. The company utilizes Building Information
          Modeling (BIM) to improve project management, collaboration, and
          accuracy in both the design and construction phases. BIM allows
          Skanska to optimize resources, reduce waste, and minimize project
          risks. Additionally, Skanska has been exploring the use of modular
          construction, 3D printing, and drones to improve efficiency and safety
          on construction sites. The company's focus on smart buildings includes
          integrating advanced sensors, automation, and data-driven technologies
          to enhance building performance and energy efficiency.
        </h5>

        <h3 className="text-2xl font-semibold pt-7 pb-2 max-w-screen-xl mx-auto">
          Safety and Quality
        </h3>
        <h5 className="text-lg tracking-wider max-w-screen-xl mx-auto">
          Safety is a top priority at Skanska, and the company has implemented
          rigorous safety management systems across its global operations.
          Skanska’s “Injury-Free Environment” initiative is aimed at creating a
          zero-accident workplace, emphasizing the importance of training,
          hazard prevention, and a safety-first culture. The company also
          maintains high-quality standards, ensuring that all projects meet
          international specifications and client expectations. Skanska’s
          quality management system emphasizes continuous improvement, allowing
          the company to deliver projects on time, within budget, and to the
          highest levels of quality.
        </h5>

        <h3 className="text-2xl font-semibold pt-7 pb-2 max-w-screen-xl mx-auto">
          Corporate Social Responsibility
        </h3>
        <h5 className="text-lg tracking-wider max-w-screen-xl mx-auto">
          Skanska is actively involved in corporate social responsibility (CSR)
          initiatives that aim to improve the well-being of communities. The
          company supports educational programs, local employment, and
          charitable activities in the regions where it operates. Skanska’s CSR
          programs focus on sustainability, inclusion, and ethical business
          practices, ensuring that its projects contribute positively to
          society.
        </h5>

        <h3 className="text-2xl font-semibold pt-7 pb-2 max-w-screen-xl mx-auto">
          Challenges and Future Outlook
        </h3>
        <h5 className="text-lg tracking-wider max-w-screen-xl mx-auto">
          Skanska faces various challenges, including economic volatility,
          increasing regulatory demands, and the need to stay competitive in a
          rapidly evolving construction industry. Additionally, the global shift
          towards sustainable construction means that Skanska must continue to
          innovate and adapt to meet stricter environmental regulations. Looking
          forward, Skanska aims to continue expanding its operations in key
          markets like the U.S. and Europe, with a focus on sustainable
          construction and infrastructure development. The company is also
          exploring digital transformation, using technology to improve
          construction processes, enhance safety, and increase efficiency.
        </h5>

        <div className="flex w-full p-4 max-w-screen-lg mx-auto flex-col rounded-lg bg-white shadow-sm border border-slate-200 my-6">
          <div className="flex items-center gap-4 text-slate-800">
            <img
              src={rvr}
              alt="Phil Bonzo"
              className="relative inline-block h-[58px] w-[58px] !rounded-full  object-cover object-center"
            />
            <div className="flex w-full flex-col">
              <div className="flex items-center justify-between">
                <h5 className="text-xl font-semibold text-slate-800">
                  Phil Bonzo
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
                Civil Engineer @ GIS
              </p>
            </div>
          </div>
          <div className="mt-6">
            <p className="text-base text-slate-600 font-light leading-normal">
              Phil Bonzo is a seasoned Civil Engineer with over 15 years of
              experience in designing and managing infrastructure projects,
              including roads, bridges, and water systems. He specializes in
              structural analysis, project planning, and environmental
              sustainability, ensuring that all designs meet safety and
              regulatory standards. Phil is known for his innovative approach to
              solving complex engineering challenges and optimizing resources
              for maximum efficiency. His strong leadership and communication
              skills enable effective collaboration with multidisciplinary
              teams, stakeholders, and clients throughout the project lifecycle.
              Committed to enhancing community infrastructure, Phil is dedicated
              to delivering high-quality, impactful engineering solutions.
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

export default SkanskaArticles;
