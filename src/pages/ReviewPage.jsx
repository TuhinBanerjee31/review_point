import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import card2 from "../assets/siecorp_logo.png";
import card1 from "../assets/oc-1.png";
import card3 from "../assets/oc-2.png";
import card6 from "../assets/oc-5.png";
import card8 from "../assets/oc-7.png";
import card9 from "../assets/oc-8.png";
import card4 from "../assets/oc-3.png";
import card5 from "../assets/oc-4.png";
import card7 from "../assets/oc-6.png";
import card10 from "../assets/oc-9.png";
import { UserCircleIcon } from "@heroicons/react/24/outline";

const ReviewPage = () => {
  return (
    <div className="bg-[#E9F1FA] font-Quicksand">
      <Nav />
      <div className="min-h-screen">
        <h1 className="font-semibold text-5xl text-center tracking-wider mx-auto px-3 my-10">
          People's View
        </h1>
        <div className="w-full max-w-screen-xl mx-auto p-4 mb-10 bg-white border border-gray-200 rounded-lg shadow sm:p-8">
          <div className="flow-root">
            <ul
              role="list"
              className="divide-y divide-gray-800 dark:divide-gray-700"
            >
              <li className="py-3 sm:py-4">
                <div className="flex items-center md:flex-row flex-col">
                  <div className="flex-shrink-0">
                    <UserCircleIcon class="h-10 w-10 text-gray-500 mx-auto" />
                    <div className="md:hidden items-center text-base font-semibold text-gray-900 dark:text-white">
                      <img src={card2} alt="..." className="h-10" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0 ms-4">
                    <p className="text-sm font-medium text-black">
                      Neel Sharma
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 max-w-screen-lg">
                      I've been with Siecorp for six years, and it’s been an
                      incredible journey. From the moment I started, I knew this
                      wasn’t just about meeting construction deadlines. It’s
                      about creating something meaningful—whether that’s a new
                      sustainable office building or a wind farm that powers
                      thousands of homes. The best part is the company invests
                      in our growth. I’ve taken multiple training courses, and
                      there’s a real commitment to fostering our careers.
                    </p>
                  </div>
                  <div className="hidden md:inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    <img src={card2} alt="..." className="h-10" />
                  </div>
                </div>
              </li>

              <li className="py-3 sm:py-4">
                <div className="flex items-center md:flex-row flex-col">
                  <div className="flex-shrink-0">
                    <UserCircleIcon class="h-10 w-10 text-gray-500 mx-auto" />
                    <div className="md:hidden items-center text-base font-semibold text-gray-900 dark:text-white">
                      <img src={card1} alt="..." className="h-10" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0 ms-4">
                    <p className="text-sm font-medium text-black">
                      Meera Chauhan
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 max-w-screen-lg">
                      At Keiwit, it feels like we’re truly part of something
                      bigger. The renewable energy projects I work on aren’t
                      just technical tasks; they’re part of the global push
                      toward sustainability. I love the sense of purpose I get
                      from my work. It’s not just about paychecks—it’s about
                      knowing that what I do makes a difference for future
                      generations.
                    </p>
                  </div>
                  <div className="hidden md:inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    <img src={card1} alt="..." className="h-10" />
                  </div>
                </div>
              </li>

              <li className="py-3 sm:py-4">
                <div className="flex items-center md:flex-row flex-col">
                  <div className="flex-shrink-0">
                    <UserCircleIcon class="h-10 w-10 text-gray-500 mx-auto" />
                    <div className="md:hidden items-center text-base font-semibold text-gray-900 dark:text-white">
                      <img src={card6} alt="..." className="h-10" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0 ms-4">
                    <p className="text-sm font-medium text-black">Jenny Paul</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 max-w-screen-lg">
                      I was nervous coming into a male-dominated industry, but
                      ACS’s diversity and inclusion efforts are genuine. There
                      are mentorship programs, and I feel like I belong. We’re
                      more like a family than just coworkers.
                    </p>
                  </div>
                  <div className="hidden md:inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    <img src={card6} alt="..." className="h-10" />
                  </div>
                </div>
              </li>

              <li className="py-3 sm:py-4">
                <div className="flex items-center md:flex-row flex-col">
                  <div className="flex-shrink-0">
                    <UserCircleIcon class="h-10 w-10 text-gray-500" />
                    <div className="md:hidden items-center text-base font-semibold text-gray-900 dark:text-white">
                      <img src={card2} alt="..." className="h-10" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0 ms-4">
                    <p className="text-sm font-medium text-black">Nazim Khan</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 max-w-screen-lg">
                      What really sets Siecorp apart for me is the level of
                      autonomy and trust we’re given. I’m overseeing a $100
                      million highway project, and while there are guidelines,
                      I’m trusted to make crucial decisions on-site. The
                      management here understands that those in the field often
                      have the best view of what’s needed to get the job done.
                      They don’t micromanage. Instead, they empower us to find
                      solutions. The work is intense, but knowing that you’re
                      building something that will last generations—it gives you
                      a real sense of pride.
                    </p>
                  </div>
                  <div className="hidden md:inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    <img src={card2} alt="..." className="h-10" />
                  </div>
                </div>
              </li>

              <li className="py-3 sm:py-4">
                <div className="flex items-center md:flex-row flex-col">
                  <div className="flex-shrink-0">
                    <UserCircleIcon class="h-10 w-10 text-gray-500" />
                    <div className="md:hidden items-center text-base font-semibold text-gray-900 dark:text-white">
                      <img src={card2} alt="..." className="h-10" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0 ms-4">
                    <p className="text-sm font-medium text-black">
                      Andy Hansda
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 max-w-screen-lg">
                      It’s not easy work, but Siecorp treats us well. They pay
                      attention to the equipment and tools we use, always making
                      sure we have what we need to do the job right. I’ve worked
                      for companies that cut corners on safety and maintenance,
                      but here, everything is top-notch.
                    </p>
                  </div>
                  <div className="hidden md:inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    <img src={card2} alt="..." className="h-10" />
                  </div>
                </div>
              </li>

              <li className="py-3 sm:py-4">
                <div className="flex items-center md:flex-row flex-col">
                  <div className="flex-shrink-0">
                    <UserCircleIcon class="h-10 w-10 text-gray-500 mx-auto" />
                    <div className="md:hidden items-center text-base font-semibold text-gray-900 dark:text-white">
                      <img src={card3} alt="..." className="h-10" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0 ms-4">
                    <p className="text-sm font-medium text-black">
                      Chimmoy Ray
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 max-w-screen-lg">
                      I’m not directly involved in the construction or energy
                      projects, but even in the IT department, you feel
                      connected to the larger mission. The company has invested
                      heavily in digital tools, and we’re always upgrading our
                      tech stack to support field teams and engineers. I’ve been
                      able to develop new skills through internal training
                      programs.
                    </p>
                  </div>
                  <div className="hidden md:inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    <img src={card3} alt="..." className="h-10" />
                  </div>
                </div>
              </li>

              <li className="py-3 sm:py-4">
                <div className="flex items-center md:flex-row flex-col">
                  <div className="flex-shrink-0">
                    <UserCircleIcon class="h-10 w-10 text-gray-500 mx-auto" />
                    <div className="md:hidden items-center text-base font-semibold text-gray-900 dark:text-white">
                      <img src={card8} alt="..." className="h-10" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0 ms-4">
                    <p className="text-sm font-medium text-black">
                      Mukul Prasad
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 max-w-screen-lg">
                      I've been working here for over five years, and I can
                      honestly say it's one of the best companies in the
                      construction industry. Management genuinely cares about
                      our well-being and always provides the tools and training
                      we need to grow. Whether it’s professional development or
                      on-site learning, they are committed to helping every
                      employee succeed. The camaraderie among the crew is
                      fantastic, and the company offers great benefits,
                      including healthcare and retirement plans. I’m proud to be
                      part of a company that values its employees and provides
                      real career opportunities.
                    </p>
                  </div>
                  <div className="hidden md:inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    <img src={card8} alt="..." className="h-10" />
                  </div>
                </div>
              </li>

              <li className="py-3 sm:py-4">
                <div className="flex items-center md:flex-row flex-col">
                  <div className="flex-shrink-0">
                    <UserCircleIcon class="h-10 w-10 text-gray-500 mx-auto" />
                    <div className="md:hidden items-center text-base font-semibold text-gray-900 dark:text-white">
                      <img src={card9} alt="..." className="h-10" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0 ms-4">
                    <p className="text-sm font-medium text-black">V Lakshmi</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 max-w-screen-lg">
                      What sets this company apart is its commitment to safety
                      and quality. From day one, they’ve been focused on
                      ensuring every worker feels safe on the job site, which is
                      crucial in this industry. I’ve worked at other
                      construction companies where safety was just an
                      afterthought, but here, it's embedded in the culture. On
                      top of that, they recognize and reward hard work. I’ve
                      received several bonuses and promotions based on my
                      performance, which motivates me to keep giving my best.
                    </p>
                  </div>
                  <div className="hidden md:inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    <img src={card9} alt="..." className="h-10" />
                  </div>
                </div>
              </li>

              <li className="py-3 sm:py-4">
                <div className="flex items-center md:flex-row flex-col">
                  <div className="flex-shrink-0">
                    <UserCircleIcon class="h-10 w-10 text-gray-500 mx-auto" />
                    <div className="md:hidden items-center text-base font-semibold text-gray-900 dark:text-white">
                      <img src={card1} alt="..." className="h-10" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0 ms-4">
                    <p className="text-sm font-medium text-black">
                      Souvik Goyal
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 max-w-screen-lg">
                      The leadership team here is approachable and genuinely
                      listens to employee concerns. They are always open to
                      suggestions and feedback, which makes me feel valued. The
                      culture is very collaborative, and even in challenging
                      projects, there’s a real sense of teamwork. It’s rewarding
                      to work in a company where everyone is aligned and working
                      toward the same goals. It’s not just about building
                      structures; it’s about building a lasting career.
                    </p>
                  </div>
                  <div className="hidden md:inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    <img src={card1} alt="..." className="h-10" />
                  </div>
                </div>
              </li>

              <li className="py-3 sm:py-4">
                <div className="flex items-center md:flex-row flex-col">
                  <div className="flex-shrink-0">
                    <UserCircleIcon class="h-10 w-10 text-gray-500 mx-auto" />
                    <div className="md:hidden items-center text-base font-semibold text-gray-900 dark:text-white">
                      <img src={card2} alt="..." className="h-10" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0 ms-4">
                    <p className="text-sm font-medium text-black">Suzi Murmu</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 max-w-screen-lg">
                      As someone from a diverse background, I appreciate how
                      inclusive this company is. They actively encourage people
                      from all walks of life to join the team, and they provide
                      equal opportunities for everyone to grow. The mentorship
                      program is a great touch, and I’ve learned so much from
                      senior employees who are always willing to share their
                      knowledge. It feels good to work in a place where
                      diversity is celebrated, and you’re judged by the quality
                      of your work, not your background.
                    </p>
                  </div>
                  <div className="hidden md:inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    <img src={card2} alt="..." className="h-10" />
                  </div>
                </div>
              </li>

              <li className="py-3 sm:py-4">
                <div className="flex items-center md:flex-row flex-col">
                  <div className="flex-shrink-0">
                    <UserCircleIcon class="h-10 w-10 text-gray-500 mx-auto" />
                    <div className="md:hidden items-center text-base font-semibold text-gray-900 dark:text-white">
                      <img src={card3} alt="..." className="h-10" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0 ms-4">
                    <p className="text-sm font-medium text-black">Aman Verma</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 max-w-screen-lg">
                      I’ve been with this construction company for three years
                      now, and one of the things that stood out to me is their
                      understanding of work-life balance. In an industry where
                      long hours are the norm, they’ve found a way to be
                      flexible when personal situations arise. Whether it's
                      needing time off for family or adjusting hours to
                      accommodate other commitments, they work with you to find
                      solutions. This has made a huge difference for me, and
                      it’s why I’m so loyal to the company
                    </p>
                  </div>
                  <div className="hidden md:inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    <img src={card3} alt="..." className="h-10" />
                  </div>
                </div>
              </li>

              <li className="py-3 sm:py-4">
                <div className="flex items-center md:flex-row flex-col">
                  <div className="flex-shrink-0">
                    <UserCircleIcon class="h-10 w-10 text-gray-500 mx-auto" />
                    <div className="md:hidden items-center text-base font-semibold text-gray-900 dark:text-white">
                      <img src={card4} alt="..." className="h-10" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0 ms-4">
                    <p className="text-sm font-medium text-black">
                      Ledwin Henry
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 max-w-screen-lg">
                      Working here has given me the chance to grow in ways I
                      never imagined. I started as a laborer and, over time,
                      I’ve worked my way up to a project manager role. The
                      company invests in its employees through ongoing training
                      and certification programs, and I always feel like I’m
                      being pushed to improve, but in a good way. The leadership
                      team is encouraging, and they recognize hard work and
                      commitment. It’s exciting to be part of a company where
                      you can truly build your career.
                    </p>
                  </div>
                  <div className="hidden md:inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    <img src={card4} alt="..." className="h-10" />
                  </div>
                </div>
              </li>

              <li className="py-3 sm:py-4">
                <div className="flex items-center md:flex-row flex-col">
                  <div className="flex-shrink-0">
                    <UserCircleIcon class="h-10 w-10 text-gray-500 mx-auto" />
                    <div className="md:hidden items-center text-base font-semibold text-gray-900 dark:text-white">
                      <img src={card5} alt="..." className="h-10" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0 ms-4">
                    <p className="text-sm font-medium text-black">
                      Dhruv Jaiswal
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 max-w-screen-lg">
                      One of the things I appreciate most about this company is
                      that they listen to us. Whether it's about safety
                      concerns, project issues, or even suggestions for
                      improvement, the management team is always open to
                      feedback. That’s not something you find at every
                      construction company. I’ve seen changes happen because
                      employees spoke up, and that shows they truly care about
                      making the work environment better for everyone. It’s
                      refreshing to feel heard.
                    </p>
                  </div>
                  <div className="hidden md:inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    <img src={card5} alt="..." className="h-10" />
                  </div>
                </div>
              </li>

              <li className="py-3 sm:py-4">
                <div className="flex items-center md:flex-row flex-col">
                  <div className="flex-shrink-0">
                    <UserCircleIcon class="h-10 w-10 text-gray-500 mx-auto" />
                    <div className="md:hidden items-center text-base font-semibold text-gray-900 dark:text-white">
                      <img src={card7} alt="..." className="h-10" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0 ms-4">
                    <p className="text-sm font-medium text-black">
                      Leu Pradhan
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 max-w-screen-lg">
                      I’ve worked here for over seven years, and one of the
                      reasons I’ve stayed is the stability and benefits the
                      company offers. The healthcare plan is comprehensive, the
                      401(k) match is competitive, and there’s even tuition
                      reimbursement if you want to continue your education.
                      Plus, the company is financially stable, which gives me
                      confidence in my future here. I’ve never had to worry
                      about job security, and that’s a huge relief in today’s
                      world.
                    </p>
                  </div>
                  <div className="hidden md:inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    <img src={card7} alt="..." className="h-10" />
                  </div>
                </div>
              </li>

              <li className="py-3 sm:py-4">
                <div className="flex items-center md:flex-row flex-col">
                  <div className="flex-shrink-0">
                    <UserCircleIcon class="h-10 w-10 text-gray-500 mx-auto" />
                    <div className="md:hidden items-center text-base font-semibold text-gray-900 dark:text-white">
                      <img src={card10} alt="..." className="h-10" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0 ms-4">
                    <p className="text-sm font-medium text-black">P.K Saket</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 max-w-screen-lg">
                      In the construction industry, it’s easy to find companies
                      that cut corners or overlook important details to get the
                      job done faster. That’s not the case here. This company
                      takes pride in doing things the right way. From following
                      safety protocols to ensuring high-quality standards, they
                      stay true to their values. It’s a great feeling to work
                      for a company that has integrity and truly cares about the
                      final product. I’m proud to be part of this team.
                    </p>
                  </div>
                  <div className="hidden md:inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    <img src={card10} alt="..." className="h-10" />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ReviewPage;
