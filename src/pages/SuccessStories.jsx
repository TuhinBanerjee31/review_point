import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import face1 from "../assets/faces/face1.jpg";
import face2 from "../assets/faces/face2.jpg";
import face3 from "../assets/faces/face3.jpg";
import face4 from "../assets/faces/face4.jpg";

const SuccessStories = () => {
  return (
    <div className="bg-[#E9F1FA] font-Quicksand">
      <Nav />

      <div className="min-h-screen flex flex-col items-center gap-4 py-10 mx-3">
        <h1 className="font-semibold text-5xl text-center tracking-wider mx-auto px-3 my-5">
          Success Stories
        </h1>
        <div className="flex flex-col items-center cursor-pointer bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-screen-xl hover:bg-gray-100">
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            src={face1}
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              Krishna Trivedi
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Krishna grew up in a working-class family and went straight into a
              factory job after high school to help support his family. For
              years, he worked long hours in physically demanding conditions
              with no clear path to advancement. His dream was to move into
              management, but without a college degree, he thought it was
              impossible. Through a community job fair, Krishna learned about
              Siecorp Company’s upskilling program for employees in
              manufacturing. He applied and was accepted into their operations
              management training course. The program provided the skills and
              leadership training he needed to move up in his career. After
              completing the program, Krishna was promoted to Operations
              Supervisor at Siecorp Company, where he now manages a team of
              workers. He is proud of how far he’s come and continues to mentor
              younger employees who are looking to advance.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center cursor-pointer bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-screen-xl hover:bg-gray-100">
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            src={face2}
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              Mathur Annand
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Mathur was incarcerated for five years due to mistakes he made in
              his youth. After serving his time, he found it nearly impossible
              to get a job with his criminal record. Every application he
              submitted was rejected, and he began to feel hopeless about his
              future. A reentry program introduced him to Siecorp Company, which
              has a second-chance employment initiative. Mathur enrolled in
              their project management certification course, which was designed
              to give formerly incarcerated individuals a fresh start. With the
              help of a mentor, he completed the course and was offered an
              entry-level position at Siecorp Company. Over time, Mathur's
              leadership skills shone through, and he was promoted to Project
              Manager. Today, he oversees large projects and is a passionate
              advocate for criminal justice reform, speaking at events and
              helping others with similar backgrounds find meaningful
              employment.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center cursor-pointer bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-screen-xl hover:bg-gray-100">
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            src={face3}
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              Neha Roy
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Neha grew up in foster care and aged out of the system with
              nowhere to go. She spent years drifting between shelters and
              temporary jobs, struggling to find stable employment. Despite her
              tough circumstances, she always had a passion for technology and
              would often teach herself coding at public libraries. One day,
              Neha heard about a coding bootcamp sponsored by Siecorp Company
              that specifically focused on training people from disadvantaged
              backgrounds. She applied and was accepted into the program, which
              provided her not only with technical skills but also career
              guidance and emotional support. After completing the bootcamp,
              Siecorp Company offered Neha a job as a junior software developer.
              She now works on complex projects, has a stable income, and
              recently moved into her own apartment. She also volunteers with
              organizations that help homeless youth learn tech skills, inspired
              to give back after her own experience.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center cursor-pointer bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-screen-xl hover:bg-gray-100">
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            src={face4}
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              Arpan Hembram
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Arpan immigrated to the U.S. with his family in search of a better
              life, but language barriers and a lack of formal education forced
              him to work in low-paying, labor-intensive jobs. He worked in
              agriculture for years, often under poor conditions, to support his
              family back home. Arpan’s break came when he found an
              advertisement for L&T Company’s Supply Chain Management training
              program for underrepresented communities. He applied, was
              accepted, and the company helped him improve his English while
              teaching him essential logistics and supply chain skills. After
              completing the program, Arpan was hired as a supply chain
              coordinator at L&T. He climbed the ranks quickly and is now a
              Supply Chain Manager, responsible for overseeing international
              logistics operations. His success has allowed him to provide a
              better life for his family and support other migrant workers by
              sharing his story.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SuccessStories;
