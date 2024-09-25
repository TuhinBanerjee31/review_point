import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import card2 from "../assets/siecorp_logo.png";
import card1 from "../assets/oc-1.png";
import card3 from "../assets/oc-2.png";
import card6 from "../assets/oc-5.png";


const ReviewPage = () => {
  return (
    <div className='bg-[#E9F1FA] font-Quicksand'>
      <Nav />
      <div className='min-h-screen'>
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
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="w-8 h-8 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                    alt="Neil image"
                  />
                </div>
                <div className="flex-1 min-w-0 ms-4">
                  <p className="text-sm font-medium text-black">Neel Sharma</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 max-w-screen-lg">
                    I've been with Siecorp for six years, and it’s been an
                    incredible journey. From the moment I started, I knew this
                    wasn’t just about meeting construction deadlines. It’s about
                    creating something meaningful—whether that’s a new
                    sustainable office building or a wind farm that powers
                    thousands of homes. The best part is the company invests in
                    our growth. I’ve taken multiple training courses, and
                    there’s a real commitment to fostering our careers.
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  <img src={card2} alt="..." className="h-10" />
                </div>
              </div>
            </li>

            <li className="py-3 sm:py-4">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="w-8 h-8 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                    alt="Neil image"
                  />
                </div>
                <div className="flex-1 min-w-0 ms-4">
                  <p className="text-sm font-medium text-black">
                    Meera Chauhan
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 max-w-screen-lg">
                    At Keiwit, it feels like we’re truly part of something
                    bigger. The renewable energy projects I work on aren’t just
                    technical tasks; they’re part of the global push toward
                    sustainability. I love the sense of purpose I get from my
                    work. It’s not just about paychecks—it’s about knowing that
                    what I do makes a difference for future generations.
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  <img src={card1} alt="..." className="h-10" />
                </div>
              </div>
            </li>

            <li className="py-3 sm:py-4">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="w-8 h-8 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                    alt="Neil image"
                  />
                </div>
                <div className="flex-1 min-w-0 ms-4">
                  <p className="text-sm font-medium text-black">Jenny Paul</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 max-w-screen-lg">
                    I was nervous coming into a male-dominated industry, but
                    ACS’s diversity and inclusion efforts are genuine. There are
                    mentorship programs, and I feel like I belong. We’re more
                    like a family than just coworkers.
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  <img src={card6} alt="..." className="h-10" />
                </div>
              </div>
            </li>

            <li className="py-3 sm:py-4">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="w-8 h-8 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                    alt="Neil image"
                  />
                </div>
                <div className="flex-1 min-w-0 ms-4">
                  <p className="text-sm font-medium text-black">Nazim Khan</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 max-w-screen-lg">
                    What really sets Siecorp apart for me is the level of
                    autonomy and trust we’re given. I’m overseeing a $100
                    million highway project, and while there are guidelines, I’m
                    trusted to make crucial decisions on-site. The management
                    here understands that those in the field often have the best
                    view of what’s needed to get the job done. They don’t
                    micromanage. Instead, they empower us to find solutions. The
                    work is intense, but knowing that you’re building something
                    that will last generations—it gives you a real sense of
                    pride.
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  <img src={card2} alt="..." className="h-10" />
                </div>
              </div>
            </li>

            <li className="py-3 sm:py-4">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="w-8 h-8 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                    alt="Neil image"
                  />
                </div>
                <div className="flex-1 min-w-0 ms-4">
                  <p className="text-sm font-medium text-black">Andy Hansda</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 max-w-screen-lg">
                    It’s not easy work, but Siecorp treats us well. They pay
                    attention to the equipment and tools we use, always making
                    sure we have what we need to do the job right. I’ve worked
                    for companies that cut corners on safety and maintenance,
                    but here, everything is top-notch.
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  <img src={card2} alt="..." className="h-10" />
                </div>
              </div>
            </li>

            <li className="py-3 sm:py-4">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="w-8 h-8 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                    alt="Neil image"
                  />
                </div>
                <div className="flex-1 min-w-0 ms-4">
                  <p className="text-sm font-medium text-black">Chimmoy Ray</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 max-w-screen-lg">
                    I’m not directly involved in the construction or energy
                    projects, but even in the IT department, you feel connected
                    to the larger mission. The company has invested heavily in
                    digital tools, and we’re always upgrading our tech stack to
                    support field teams and engineers. I’ve been able to develop
                    new skills through internal training programs.
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  <img src={card3} alt="..." className="h-10" />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  )
}

export default ReviewPage
