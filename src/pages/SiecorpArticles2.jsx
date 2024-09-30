import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { EyeIcon } from "@heroicons/react/24/outline";
import articleImage from "../assets/siecorp_article_2.jpg";
import CommentSection from "../components/CommentSection";
import ArticleSlider from "../components/ArticleSlider";
import rvr from "../assets/reviewers/siecorp2rvr.jpg";

const SiecorpArticles2 = () => {
  let commentData= [
    {
      id: 1,
      name: "Rew Jhonson",
      days: "2",
      comment: "Siecorp’s employee-centric approach truly shines in its commitment to personal and professional growth. By prioritizing development opportunities and fostering a supportive environment, they empower their team to reach their full potential." ,
      likes: "7"
    },
    {
      id: 2,
      name: "Mike Ferry",
      days: "8",
      comment: "The emphasis Siecorp places on employee well-being is genuinely refreshing. It’s clear they understand that a happy, healthy workforce leads to greater productivity and job satisfaction, creating a positive ripple effect throughout the company." ,
      likes: "13"
    },
    {
      id: 3,
      name: "Daniel Copper",
      days: "14",
      comment: "Siecorp’s focus on safety not only protects their employees but also cultivates a culture of trust and care. Knowing that the company prioritizes their health and safety makes employees feel valued and respected." ,
      likes: "13"
    },
    {
      id: 4,
      name: "Jacob Henry",
      days: "16",
      comment: "It’s inspiring to see how Siecorp invests in its people, offering resources and programs that enhance both career growth and personal well-being. This commitment reflects a deep understanding that their greatest asset is their workforce." ,
      likes: "8"
    }
  ]
  return (
    <div className="bg-[#E9F1FA] font-Quicksand">
      <Nav />
      <div className="min-h-screen py-10 px-4">
        <h1 className="font-semibold text-4xl tracking-wider max-w-screen-xl mx-auto px-3">
          SIECORP’s Employee-Centric Approach: A Commitment to Growth,
          Well-being, and Safety
        </h1>
        <div className="max-w-screen-xl mx-auto flex justify-between py-2">
          <p className="tracking-wider px-4">
            By <b>Steve Willson</b>
          </p>

          <div className="flex gap-2">
            <EyeIcon className="h-6 w-6 text-gray-500" />
            <p>62203</p>
          </div>
        </div>

        <div className="max-w-screen-lg mx-auto my-7">
          <img src={articleImage} alt="..." className="h-full w-full" />
        </div>

        <h5 className="text-lg tracking-wider max-w-screen-xl mx-auto">
          SIECORP’s success is not just built on its innovative infrastructure
          solutions and global market presence but also on its unwavering
          commitment to its employees. The company has cultivated a workplace
          culture where growth, safety, and well-being are paramount. This
          employee-centric approach is one of the key factors behind SIECORP's
          strong project execution and continued expansion into new markets
          across the world.
        </h5>

        <h3 className="text-2xl font-semibold pt-7 pb-2 max-w-screen-xl mx-auto">
          Training and Professional Development
        </h3>
        <h5 className="text-lg tracking-wider max-w-screen-xl mx-auto">
          At the core of SIECORP’s employee-focused strategy is its investment
          in continuous learning and development. The company regularly provides
          training programs that equip employees with the latest technical
          skills and knowledge needed to stay ahead in the construction and
          engineering industries. Whether it's familiarizing staff with advanced
          project management software like BIM or educating them on
          sustainability practices, SIECORP ensures that its workforce remains
          highly skilled and adaptable. SIECORP believes in nurturing talent
          from within, offering career advancement opportunities that allow
          employees to grow alongside the company. This emphasis on career
          development has led to high levels of employee retention and job
          satisfaction, which in turn ensures the successful delivery of complex
          projects across its global markets, from major hubs like Texas and
          Germany to smaller markets like Sri Lanka and Ethiopia
        </h5>

        <h3 className="text-2xl font-semibold pt-7 pb-2 max-w-screen-xl mx-auto">
          Safety as a Priority
        </h3>
        <h5 className="text-lg tracking-wider max-w-screen-xl mx-auto">
          One of the key aspects of SIECORP’s employee-centric approach is its
          strong focus on safety. In an industry where safety risks can be high,
          especially in construction and infrastructure projects, SIECORP has
          implemented robust safety protocols that go beyond standard
          compliance. The company invests in regular safety training and ensures
          that all employees are well-versed in workplace safety procedures.
          From their large-scale construction sites in Australia and Russia to
          more localized projects in Brazil and Israel, SIECORP maintains strict
          adherence to international safety standards. The company's proactive
          approach to safety has resulted in a commendable track record,
          minimizing workplace incidents and injuries. Employees feel supported
          and secure, knowing that their well-being is a top priority for the
          company
        </h5>

        <h3 className="text-2xl font-semibold pt-7 pb-2 max-w-screen-xl mx-auto">
          Work-Life Balance and Employee Well-being
        </h3>
        <h5 className="text-lg tracking-wider max-w-screen-xl mx-auto">
          SIECORP recognizes that the well-being of its employees extends beyond
          physical safety. The company promotes a healthy work-life balance,
          which is essential in maintaining productivity and reducing burnout.
          In an industry known for high-pressure environments and tight
          deadlines, SIECORP takes steps to ensure that its employees are not
          overburdened by excessive workloads. Employee well-being is also
          supported by various wellness initiatives. SIECORP offers mental
          health resources, flexible working conditions (where applicable), and
          team-building activities that foster a sense of community. This
          holistic approach to employee well-being has created a positive work
          environment that motivates employees to perform at their best while
          maintaining their personal health and happiness.
        </h5>

        <h3 className="text-2xl font-semibold pt-7 pb-2 max-w-screen-xl mx-auto">
          Diversity and Inclusivity
        </h3>
        <h5 className="text-lg tracking-wider max-w-screen-xl mx-auto">
          SIECORP’s global presence means that it operates in diverse markets
          across the world, from India and Indonesia to South Africa and France.
          This diversity is reflected in the company’s workforce, which is made
          up of people from a variety of backgrounds, cultures, and experiences.
          SIECORP is committed to maintaining an inclusive workplace, where
          every employee, regardless of their nationality, gender, or
          background, has an equal opportunity to contribute and succeed. The
          company's emphasis on diversity not only enriches the workplace
          culture but also fosters innovation. By bringing together different
          perspectives and approaches, SIECORP is able to solve complex problems
          more creatively and efficiently. This inclusive approach ensures that
          SIECORP’s teams are well-equipped to handle the unique challenges of
          each market they operate in, whether it’s the highly regulated
          environments of Germany and the United Kingdom or the rapidly
          developing markets of Ethiopia and Egypt.
        </h5>

        <h3 className="text-2xl font-semibold pt-7 pb-2 max-w-screen-xl mx-auto">
          Conclusion
        </h3>
        <h5 className="text-lg tracking-wider max-w-screen-xl mx-auto">
          SIECORP’s employee-centric approach is a cornerstone of its long-term
          success. By prioritizing training, safety, well-being, and
          inclusivity, the company has created a positive and productive work
          environment that not only benefits its employees but also contributes
          to the overall success of its projects. This commitment to its
          workforce ensures that SIECORP will continue to attract and retain top
          talent, further strengthening its position as a leader in the
          construction and infrastructure industries. Whether managing
          large-scale projects in developed markets or expanding into emerging
          regions, SIECORP’s people-first approach remains one of its most
          valuable assets. Employees are not just workers at SIECORP; they are
          integral partners in the company’s mission to deliver world-class
          infrastructure solutions around the globe.
        </h5>

        <div className="flex w-full p-4 max-w-screen-lg mx-auto flex-col rounded-lg bg-white shadow-sm border border-slate-200 my-6">
          <div className="flex items-center gap-4 text-slate-800">
            <img
              src={rvr}
              alt="Steve Willson"
              className="relative inline-block h-[58px] w-[58px] !rounded-full  object-cover object-center"
            />
            <div className="flex w-full flex-col">
              <div className="flex items-center justify-between">
                <h5 className="text-xl font-semibold text-slate-800">
                  Steve Willson
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
              Architect @ AECOM
              </p>
            </div>
          </div>
          <div className="mt-6">
            <p className="text-base text-slate-600 font-light leading-normal">
              Steve Willson is an experienced architect known for his innovative
              designs and sustainable approach to modern architecture. With over
              two decades in the field, he has worked on a wide range of
              projects, from residential homes to large commercial buildings.
              Steve combines his deep technical knowledge with a passion for
              creating environmentally friendly, functional spaces that meet
              both aesthetic and practical needs. His collaborative approach
              ensures close coordination with clients, engineers, and
              contractors to deliver high-quality results. Steve's expertise in
              sustainable materials and energy-efficient design has earned him
              recognition within the architectural community.
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

export default SiecorpArticles2;
