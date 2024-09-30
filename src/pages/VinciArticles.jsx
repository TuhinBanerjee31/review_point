import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { EyeIcon } from "@heroicons/react/24/outline";
import articleImage from "../assets/vinci_article_1.jpg";
import CommentSection from "../components/CommentSection";
import ArticleSlider from "../components/ArticleSlider";
import rvr from "../assets/reviewers/vincirvr.jpg";

const VinciArticles = () => {
  let commentData= [
    {
      id: 1,
      name: "Zee wyatt",
      days: "5",
      comment: "Vinci's infrastructure projects are a blend of innovation and sustainability, creating lasting benefits for communities while ensuring future-ready development." ,
      likes: "7"
    },
    {
      id: 2,
      name: "Alex Boult",
      days: "7",
      comment: "By focusing on both quality and environmental impact, Vinci continues to set benchmarks in infrastructure development that improve daily life and enhance regional growth." ,
      likes: "3"
    },
    {
      id: 3,
      name: "Piyush Narayan",
      days: "10",
      comment: "Vinci’s commitment to modern infrastructure ensures not only efficient transport and energy solutions but also contributes to the long-term well-being of local communities." ,
      likes: "13"
    }
  ]
  return (
    <div className="bg-[#E9F1FA] font-Quicksand">
      <Nav />
      <div className="min-h-screen py-10 px-4">
        <h1 className="font-semibold text-4xl tracking-wider max-w-screen-xl mx-auto px-3">
          Vinci: Infrastructure Development
        </h1>
        <div className="max-w-screen-xl mx-auto flex justify-between py-2">
          <p className="tracking-wider px-4">
            By <b>Dom Levesque</b>
          </p>

          <div className="flex gap-2">
            <EyeIcon className="h-6 w-6 text-gray-500" />
            <p>57305</p>
          </div>
        </div>

        <div className="max-w-screen-lg mx-auto my-7">
          <img src={articleImage} alt="..." className="h-full w-full" />
        </div>

        <h5 className="text-lg tracking-wider max-w-screen-xl mx-auto">
          Vinci Construction, a subsidiary of the Vinci Group, is one of the
          largest and most prominent construction firms in the world.
          Headquartered in Rueil-Malmaison, France, Vinci Construction operates
          across all continents, delivering a wide range of services in
          building, civil engineering, and infrastructure development. With a
          legacy rooted in innovation and sustainability, Vinci Construction
          plays a key role in shaping modern cities, transportation networks,
          and essential infrastructure worldwide.
        </h5>

        <h3 className="text-2xl font-semibold pt-7 pb-2 max-w-screen-xl mx-auto">
          History and Growth
        </h3>
        <h5 className="text-lg tracking-wider max-w-screen-xl mx-auto">
          Founded in 1899 by French engineers Alexandre Giros and Louis Loucheur
          under the name Société Générale d’Entreprises (SGE), Vinci
          Construction has grown into a global powerhouse. The company underwent
          significant expansion in the late 20th and early 21st centuries,
          acquiring numerous construction firms and diversifying its expertise
          across multiple sectors. In 2000, the company rebranded as Vinci,
          reflecting its vision of achieving mastery in engineering and
          construction, similar to the Renaissance polymath Leonardo da Vinci.
          This period marked its evolution from a French construction firm into
          a multinational corporation operating in over 100 countries.
        </h5>

        <h3 className="text-2xl font-semibold pt-7 pb-2 max-w-screen-xl mx-auto">
          Key Sectors and Expertise
        </h3>
        <h5 className="text-lg tracking-wider max-w-screen-xl mx-auto">
          <b>Building Construction</b> Vinci is involved in the construction of
          various types of buildings, including commercial offices, residential
          complexes, hospitals, educational facilities, and cultural
          institutions. They have developed landmark projects such as the Stade
          de France in Paris and The Shard in London. Their expertise extends
          from design and planning to execution, ensuring the highest standards
          of quality and sustainability.<br></br>
          <b>Civil Engineering</b> A significant portion of Vinci Construction’s
          work is in civil engineering, where they specialize in large-scale
          infrastructure projects like tunnels, dams, highways, and bridges. The
          company's civil engineering division has earned a reputation for
          tackling complex, high-risk projects, often involving cutting-edge
          technology and engineering solutions.<br></br>
          <b>Transportation Infrastructure</b> Vinci Construction has played a
          crucial role in developing major transportation networks, including
          airports, railways, highways, and ports. Some notable projects include
          the expansion of the Cairo Metro, the construction of the SEA HSR line
          in France, and the development of the Doha Metro in Qatar. Vinci's
          contributions to transportation infrastructure enable smoother, safer,
          and more efficient mobility in urban and rural areas.<br></br>
          <b>Energy and Environmental Projects</b> As part of its commitment to
          sustainability, Vinci Construction also focuses on renewable energy
          projects, including the construction of wind farms, solar power
          plants, and hydroelectric dams. Additionally, the company is involved
          in the design and construction of water treatment plants and waste
          management facilities, further enhancing its role in sustainable urban
          development.<br></br>
          <b>Real Estate Development</b> Vinci Construction also ventures into
          real estate development through its Vinci Immobilier division. The
          company is involved in large-scale urban regeneration projects, where
          it helps transform underused or derelict urban areas into vibrant
          residential and commercial hubs.
        </h5>

        <h3 className="text-2xl font-semibold pt-7 pb-2 max-w-screen-xl mx-auto">
          Impacts
        </h3>
        <h5 className="text-lg tracking-wider max-w-screen-xl mx-auto">
          <b>The Channel Tunnel:</b> Vinci played a critical role in the
          construction of the Channel Tunnel, a marvel of modern engineering
          connecting the UK and France under the English Channel.<br></br>
          <b>T3 Airport, Beijing:</b> Vinci helped construct one of the world’s
          largest airport terminals, Terminal 3 at Beijing Capital International
          Airport.<br></br>
          <b>Confederation Bridge, Canada:</b> This remarkable bridge connects
          Prince Edward Island to mainland Canada, underscoring Vinci's capacity
          for large-scale infrastructure development in challenging
          environments.
        </h5>

        <h3 className="text-2xl font-semibold pt-7 pb-2 max-w-screen-xl mx-auto">
          Sustainability and Innovation
        </h3>
        <h5 className="text-lg tracking-wider max-w-screen-xl mx-auto">
          Vinci Construction places sustainability at the heart of its
          operations. Through its environmental strategy, the company strives to
          reduce its carbon footprint and promote energy-efficient buildings. It
          focuses on green building practices, including low-energy and passive
          buildings, as well as the use of renewable materials. One of Vinci's
          most notable sustainability initiatives is its partnership with La
          Fabrique de la Cité, a think tank that promotes sustainable urban
          planning and smart cities. The company also leads innovation in
          construction through its Leonard program, which explores the future of
          cities, infrastructure, and mobility in the face of climate change and
          digital transformation. Health and Safety Commitment Vinci
          Construction has implemented rigorous health and safety protocols
          across its global operations. Their Zero Accidents goal drives a
          culture of continuous safety improvement, focusing on preventive
          measures, risk assessment, and ongoing training. The company's efforts
          in occupational health and safety have earned them numerous industry
          accolades, further solidifying their leadership in the construction
          sector.
        </h5>

        <h3 className="text-2xl font-semibold pt-7 pb-2 max-w-screen-xl mx-auto">
          Corporate Social Responsibility
        </h3>
        <h5 className="text-lg tracking-wider max-w-screen-xl mx-auto">
          Vinci Construction is deeply committed to corporate social
          responsibility (CSR), guided by the principles of inclusion, community
          engagement, and ethical business practices. The company actively
          supports local communities where it operates through job creation,
          training programs, and educational initiatives. Furthermore, Vinci’s
          Solidarity Foundations help fund projects that combat social exclusion
          and promote access to employment, housing, and education. The
          company's CSR approach integrates respect for human rights,
          environmental conservation, and social cohesion into all aspects of
          its work.With operations in over 100 countries and a workforce of more
          than 200,000 employees, Vinci Construction is truly a global leader.
          Its decentralized model allows subsidiaries to operate autonomously
          while benefiting from the resources and expertise of the Vinci Group.
          This structure enhances the company’s adaptability, enabling it to
          respond swiftly to local market needs while maintaining global
          standards of excellence.
        </h5>

        <h3 className="text-2xl font-semibold pt-7 pb-2 max-w-screen-xl mx-auto">
          Conclusion
        </h3>
        <h5 className="text-lg tracking-wider max-w-screen-xl mx-auto">
          Vinci Construction's impressive portfolio and commitment to
          innovation, sustainability, and corporate responsibility position it
          as a leader in the global construction industry. Whether it’s building
          world-class infrastructure, promoting renewable energy, or shaping the
          future of urban development, Vinci remains at the forefront of modern
          construction. The company’s global reach, commitment to environmental
          stewardship, and focus on delivering complex projects with precision
          ensure its continued success in shaping the world’s cities and
          infrastructure.
        </h5>

        <div className="flex w-full p-4 max-w-screen-lg mx-auto flex-col rounded-lg bg-white shadow-sm border border-slate-200 my-6">
          <div className="flex items-center gap-4 text-slate-800">
            <img
              src={rvr}
              alt="Dom Levesque"
              className="relative inline-block h-[58px] w-[58px] !rounded-full  object-cover object-center"
            />
            <div className="flex w-full flex-col">
              <div className="flex items-center justify-between">
                <h5 className="text-xl font-semibold text-slate-800">
                  Dom Levesque
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
                Mechanical Engineer @ GIS
              </p>
            </div>
          </div>
          <div className="mt-6">
            <p className="text-base text-slate-600 font-light leading-normal">
              Dom Levesque is an experienced Mechanical Engineer with over 15
              years of expertise in designing and optimizing mechanical systems
              across various industries, including automotive, aerospace, and
              manufacturing. He specializes in fluid dynamics, thermodynamics,
              and mechanical design, ensuring systems are efficient, reliable,
              and meet stringent performance standards. Dom is known for his
              ability to solve complex engineering challenges and implement
              innovative solutions that improve product functionality and reduce
              costs. His collaborative approach allows him to work seamlessly
              with multidisciplinary teams, from concept design to production.
              Dom’s passion for cutting-edge technology and sustainability
              drives his pursuit of engineering excellence.
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

export default VinciArticles;
