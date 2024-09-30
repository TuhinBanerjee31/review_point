import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { EyeIcon } from "@heroicons/react/24/outline";
import articleImage from "../assets/lt_article_1.jpg";
import CommentSection from "../components/CommentSection";
import ArticleSlider from "../components/ArticleSlider";
import rvr from "../assets/reviewers/ltrvr.jpg";

const LtArticles = () => {
  let commentData= [
    {
      id: 1,
      name: "Parthib Kaur",
      days: "6",
      comment: "Larsen & Toubro (L&T) is India’s engineering giant, renowned for delivering world-class infrastructure projects that drive the nation’s growth and global standing." ,
      likes: "15"
    },
    {
      id: 2,
      name: "Prashant Lal",
      days: "11",
      comment: "With a legacy of excellence, L&T continues to shape India's skyline and infrastructure, combining innovation with a commitment to sustainability and community development." ,
      likes: "3"
    }
  ]

  return (
    <div className="bg-[#E9F1FA] font-Quicksand">
      <Nav />
      <div className="min-h-screen py-10 px-4">
        <h1 className="font-semibold text-4xl tracking-wider max-w-screen-xl mx-auto px-3">
          Larsen & Toubro (L&T): India's Engineering Giant
        </h1>
        <div className="max-w-screen-xl mx-auto flex justify-between py-2">
          <p className="tracking-wider px-4">
            By <b>Mayank Goyal</b>
          </p>

          <div className="flex gap-2">
            <EyeIcon className="h-6 w-6 text-gray-500" />
            <p>49956</p>
          </div>
        </div>

        <div className="max-w-screen-lg mx-auto my-7">
          <img src={articleImage} alt="..." className="h-full w-full" />
        </div>

        <h5 className="text-lg tracking-wider max-w-screen-xl mx-auto">
          Larsen & Toubro (L&T) is one of India’s most respected and diversified
          engineering, construction, and technology conglomerates. Established
          in 1938, L&T has grown into a global leader, known for its expertise
          in delivering large, complex infrastructure and industrial projects.
          With a strong presence across various sectors including construction,
          engineering, electrical, manufacturing, and technology, L&T plays a
          pivotal role in shaping India’s infrastructure landscape while
          maintaining a growing international presence.
        </h5>

        <h3 className="text-2xl font-semibold pt-7 pb-2 max-w-screen-xl mx-auto">
          History and Growth
        </h3>
        <h5 className="text-lg tracking-wider max-w-screen-xl mx-auto">
          L&T was founded by two Danish engineers, Henning Holck-Larsen and
          Søren Kristian Toubro, in Mumbai. Originally set up to supply
          engineering equipment, the company quickly expanded its scope to
          include construction and industrial manufacturing. After India’s
          independence in 1947, L&T became a key player in supporting the
          nation’s infrastructure development, participating in projects that
          spanned power plants, oil refineries, and transportation systems. Over
          the years, L&T has diversified its operations and now operates in more
          than 50 countries, with a workforce of over 400,000 employees. It has
          earned a reputation for reliability, precision, and innovation,
          becoming one of the largest engineering and construction companies in
          India and beyond.
        </h5>

        <h3 className="text-2xl font-semibold pt-7 pb-2 max-w-screen-xl mx-auto">
          Core Business Areas
        </h3>
        <h5 className="text-lg tracking-wider max-w-screen-xl mx-auto">
          <b>Infrastructure and Construction</b> L&T is a leader in
          infrastructure development, delivering large-scale projects in
          transportation, water systems, smart cities, and urban planning. It
          has been instrumental in constructing roads, bridges, airports, and
          metro systems across India and abroad. Projects like the construction
          of the Hyderabad Metro and Mumbai Trans-Harbour Link highlight L&T's
          expertise in infrastructure. The company is also heavily involved in
          urban infrastructure development, with a focus on creating smart
          cities, integrating modern technology into urban planning, and
          supporting sustainable development.
          <b>Power and Electrical Systems</b> L&T’s power segment is involved in
          building power plants, substations, and renewable energy facilities.
          The company is known for its work in constructing both thermal and
          nuclear power plants, as well as wind and solar energy projects.
          Through L&T Power, the company provides end-to-end solutions, from
          design and construction to operation and maintenance of power plants.
          <br></br>
          <b>Heavy Engineering</b> L&T Heavy Engineering focuses on
          manufacturing critical equipment for sectors such as oil and gas,
          defense, nuclear power, and space exploration. The company is known
          for its expertise in producing complex and high-precision equipment,
          including reactors, turbines, and offshore platforms. L&T's
          contribution to India’s space program and defense projects has
          bolstered its reputation in this high-tech domain.<br></br>
          <b>Defense and Aerospace</b> L&T has emerged as a significant player
          in the defense and aerospace sectors, producing military equipment and
          systems such as artillery, armored vehicles, and missile systems. The
          company’s defense manufacturing capabilities align with the Indian
          government’s “Make in India” initiative, promoting domestic production
          of advanced defense technology.<br></br>
          <b>Hydrocarbon Engineering</b> L&T Hydrocarbon Engineering provides
          integrated solutions for the oil and gas sector, covering upstream,
          midstream, and downstream operations. The company has executed
          projects involving oil refineries, petrochemical complexes, and
          offshore platforms. Its services range from engineering and
          procurement to construction and maintenance, catering to the energy
          demands of both India and global clients.<br></br>
          <b>Information Technology and Engineering Services</b> Through its
          subsidiaries L&T Infotech and L&T Technology Services, the company
          offers IT solutions, digital transformation services, and engineering
          consulting. L&T Infotech is a leading IT services provider that
          focuses on digital solutions, including cloud computing, analytics,
          and cybersecurity, while L&T Technology Services specializes in
          engineering R&D and innovation in sectors like automotive, aerospace,
          and healthcare.<br></br>
        </h5>

        <h3 className="text-2xl font-semibold pt-7 pb-2 max-w-screen-xl mx-auto">
          Notable Projects
        </h3>
        <h5 className="text-lg tracking-wider max-w-screen-xl mx-auto">
          <b>Statue of Unity, Gujarat:</b> L&T was responsible for the design,
          engineering, and construction of the Statue of Unity, the tallest
          statue in the world, standing at 182 meters. This iconic project
          showcases L&T’s ability to deliver monumental structures with
          precision and excellence.
          <b>Hyderabad Metro:</b> As one of the largest metro rail projects in
          the world, L&T was responsible for the construction and operation of
          the Hyderabad Metro, which has significantly improved public
          transportation in the city.
          <b>Mumbai Coastal Road Project:</b> L&T is involved in the
          construction of the Mumbai Coastal Road, a significant infrastructure
          project aimed at reducing traffic congestion and improving
          connectivity in Mumbai.
          <b>Nuclear Power Corporation of India Projects:</b> L&T has been a key
          partner in the development of nuclear power plants across India,
          contributing to the country's energy security through its engineering
          and manufacturing expertise.
        </h5>

        <h3 className="text-2xl font-semibold pt-7 pb-2 max-w-screen-xl mx-auto">
          Innovation and Technology
        </h3>
        <h5 className="text-lg tracking-wider max-w-screen-xl mx-auto">
          Innovation lies at the heart of L&T’s operations. The company
          continuously invests in new technologies, including digitalization,
          automation, and artificial intelligence, to enhance project efficiency
          and execution. L&T uses advanced tools such as Building Information
          Modeling (BIM), drones for site inspections, and data analytics to
          improve project management and optimize construction workflows. L&T is
          also exploring emerging technologies like 3D printing and modular
          construction to drive innovation in the construction industry. These
          technologies enable faster project completion times, cost savings, and
          increased precision.
        </h5>

        <h3 className="text-2xl font-semibold pt-7 pb-2 max-w-screen-xl mx-auto">
          Sustainability and Environmental Initiatives
        </h3>
        <h5 className="text-lg tracking-wider max-w-screen-xl mx-auto">
          L&T is committed to sustainable development and integrates
          environmentally responsible practices into its operations. The company
          is involved in multiple renewable energy projects, including wind,
          solar, and hydropower. Additionally, L&T focuses on reducing its
          carbon footprint through energy-efficient construction methods and
          waste reduction strategies. L&T also emphasizes water management, with
          projects that promote water conservation, rainwater harvesting, and
          wastewater treatment, contributing to India’s environmental
          sustainability goals.
        </h5>

        <h3 className="text-2xl font-semibold pt-7 pb-2 max-w-screen-xl mx-auto">
          Safety and Quality
        </h3>
        <h5 className="text-lg tracking-wider max-w-screen-xl mx-auto">
          Safety is a top priority for L&T, and the company maintains strict
          safety protocols across all its sites. L&T’s commitment to safety is
          reflected in its implementation of global best practices and regular
          safety audits, ensuring a safe working environment for its employees
          and contractors. L&T is also known for its commitment to delivering
          high-quality projects, adhering to international standards and
          certifications. The company’s quality management systems ensure that
          all projects are completed on time, within budget, and to the highest
          specifications.
        </h5>

        <h3 className="text-2xl font-semibold pt-7 pb-2 max-w-screen-xl mx-auto">
          Challenges and Future Outlook
        </h3>
        <h5 className="text-lg tracking-wider max-w-screen-xl mx-auto">
          Like many large construction companies, L&T faces challenges such as
          economic fluctuations, regulatory changes, and increasing competition.
          Additionally, the global shift towards sustainability requires the
          company to continuously innovate and adapt to new environmental
          standards. Looking ahead, L&T aims to strengthen its global footprint
          by expanding into new markets and sectors. The company will continue
          to focus on innovation, sustainability, and digital transformation to
          maintain its leadership position in the industry.Larsen & Toubro (L&T)
          is a powerhouse in the construction, engineering, and technology
          sectors, with a rich history and a global reputation for excellence.
          Its diverse portfolio, commitment to innovation, and focus on
          sustainable development make it a key player in shaping India’s
          infrastructure and industrial landscape. As demand for large-scale
          infrastructure and advanced engineering solutions grows, L&T is poised
          to play a pivotal role in both domestic and international markets.
        </h5>

        <div className="flex w-full p-4 max-w-screen-lg mx-auto flex-col rounded-lg bg-white shadow-sm border border-slate-200 my-6">
          <div className="flex items-center gap-4 text-slate-800">
            <img
              src={rvr}
              alt="Mayank Goyal"
              className="relative inline-block h-[58px] w-[58px] !rounded-full  object-cover object-center"
            />
            <div className="flex w-full flex-col">
              <div className="flex items-center justify-between">
                <h5 className="text-xl font-semibold text-slate-800">
                  Mayank Goyal
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
                Journalist
              </p>
            </div>
          </div>
          <div className="mt-6">
            <p className="text-base text-slate-600 font-light leading-normal">
              Mayank Goyal is an accomplished journalist with over a decade of
              experience in investigative reporting and feature writing across
              various media platforms. He specializes in political and
              socio-economic issues, providing in-depth analysis and compelling
              narratives that engage readers and provoke thought. Mayank's keen
              eye for detail and commitment to uncovering the truth have earned
              him recognition for his impactful storytelling and integrity in
              journalism. He is adept at leveraging digital media tools to reach
              a wider audience and enhance the storytelling experience.
              Passionate about amplifying underrepresented voices, Mayank
              strives to inform and inspire through his work.
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

export default LtArticles;
