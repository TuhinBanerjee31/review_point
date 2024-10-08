import React, {useEffect} from "react";
import headerImage from "../assets/header-1.jpg";
import card1 from "../assets/oc-1.png";
import card2 from "../assets/siecorp_logo.png";
import card3 from "../assets/oc-2.png";
import card4 from "../assets/oc-3.png";
import card5 from "../assets/oc-4.png";
import card6 from "../assets/oc-5.png";
import card7 from "../assets/oc-6.png";
import card8 from "../assets/oc-7.png";
import card9 from "../assets/oc-8.png";
import card10 from "../assets/oc-9.png";
import { Link } from "react-router-dom";
import Glide from "@glidejs/glide";
import article4 from "../assets/siecorp_article_4.jpg";
import article5 from "../assets/siecorp_article_5.png";
import article6 from "../assets/siecorp_article_6.jpg";

const Info = () => {
  const cardData = [
    {
      title:
        "SIECORP’s Role in Shaping India’s Infrastructure: Contributions to the Delhi-Mumbai Expressway",
      desc: "SIECORP has established itself as a key player in India’s burgeoning infrastructure sector, and its involvement in the Delhi-Mumbai Expressway has further cemented its reputation as a leader in delivering large-scale.....",
      link: "/siecorp-articles-5",
    },
    {
      title:
        "SIECORP’s Role in Revolutionizing Connectivity: Contributions to the Mumbai-Pune Sea Link",
      desc: "The Mumbai-Pune Sea Link stands as one of the most ambitious infrastructure projects in India, aiming to bridge the connectivity between two of the country’s largest economic hubs.SIECORP, a global infrastructure solutions.....",
      link: "/siecorp-articles-6",
    },
    {
      title: "SIECORP: An Emerging Organization in the Indian Market",
      desc: "SIECORP, a global leader in infrastructure solutions, has steadily gained prominence in the Indian market, positioning itself as a key player in the country’s rapidly growing construction and infrastructure sectors. Known for its innovative approach, strong project management.....",
      link: "/siecorp-articles-4",
    },
  ];

  useEffect(() => {
    const slider = new Glide(".glide-04", {
      type: "carousel",
      focusAt: "center",
      perView: 3,
      autoplay: 19500,
      animationDuration: 700,
      gap: 24,
      classNames: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 2,
        },
        640: {
          perView: 1,
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen">
      <div className="h-auto max-w-screen-md mx-auto py-12 px-5">
        <img src={headerImage} alt="..." className="h-full w-full rounded-lg" />
      </div>

      <h1 className="font-semibold text-5xl max-w-screen-lg tracking-wider mx-auto px-3">
        Leading Western Companies Shaping Tomorrow's Landscape
      </h1>
      <p className="p-5 text-xl max-w-screen-lg mx-auto">
        Welcome to an exclusive glimpse into the powerhouse companies that are
        shaping the future of industries and driving innovation, growth, and
        transformation on a global scale. Our carefully curated list highlights
        the most influential enterprises from across the region, showcasing a
        diverse spectrum of industries and sectors. Each company on this list
        has left an indelible mark on the global stage, not only through their
        groundbreaking products and services but also by setting new standards
        for excellence in their respective fields. From cutting-edge technology
        firms revolutionizing how we live and work, to pioneering energy
        conglomerates leading the charge toward a sustainable future, these
        organizations embody the relentless spirit of progress and adaptability
        that define the modern business landscape. They are the trailblazers,
        innovators, and visionaries who continue to redefine industry boundaries
        and propel the global economy forward. Through their leadership, these
        companies have become synonymous with innovation and success,
        representing the true essence of what it means to excel in today’s
        fast-paced and ever-changing world. Whether through advancements in
        artificial intelligence, clean energy solutions, or transformative
        healthcare technologies, these businesses are not just participating in
        the global marketplace—they are shaping its future.
      </p>

      <h2 className="font-semibold text-5xl text-center pt-6">
        Here, the list of Top Companies
      </h2>

      <div className="flex flex-wrap items-center gap-4 px-10 py-10 justify-center">
        <Link
          to={"/kiewit-articles"}
          className="max-w-sm p-6 bg-white border border-white-200 rounded-lg shadow dark:bg-white-800 dark:border-white-700"
        >
          <img src={card1} alt="..." className="h-20 mx-auto" />
          <h5 className="text-xl font-semibold tracking-tight text-black text-center">
            Kiewit Corporation
          </h5>

          {/* <p className="mb-3 font-normal text-white-500 dark:text-white-400">
            Know more about our Rank 1 company of the year.
          </p> */}
        </Link>

        <Link
          to={"/siecorp-global-leader-in-integrated-infra-sol"}
          className="max-w-sm py-6 px-20 bg-white border border-white-200 rounded-lg shadow dark:bg-white-800 dark:border-white-700"
        >
          <img src={card2} alt="..." className="h-20 mx-auto" />

          <h5 className="text-xl font-semibold tracking-tight text-black text-center">
            Siecorp
          </h5>
          {/* <h5 className="mb-2 text-2xl font-semibold tracking-tight text-black">
            Rank 2
          </h5>

          <p className="mb-3 font-normal text-white-500 dark:text-white-400">
            Know more about our Rank 2 company of the year.
          </p> */}
        </Link>

        <Link
          to={"/vinci-articles"}
          className="max-w-sm p-6 bg-white border border-white-200 rounded-lg shadow dark:bg-white-800 dark:border-white-700"
        >
          <img src={card3} alt="..." className="h-20 mx-auto" />

          <h5 className="text-xl font-semibold tracking-tight text-black text-center">
            Vinci SA
          </h5>
          {/* <h5 className="mb-2 text-2xl font-semibold tracking-tight text-black">
            Rank 3
          </h5>

          <p className="mb-3 font-normal text-white-500 dark:text-white-400">
            Know more about our Rank 3 company of the year.
          </p> */}
        </Link>

        <Link
          to={"/bechtel-articles"}
          className="max-w-sm p-6 bg-white border border-white-200 rounded-lg shadow dark:bg-white-800 dark:border-white-700"
        >
          <img src={card4} alt="..." className="h-20 mx-auto" />
          <h5 className="text-xl font-semibold tracking-tight text-black text-center">
            Bechtel Corporation
          </h5>
          {/* <h5 className="mb-2 text-2xl font-semibold tracking-tight text-black">
            Rank 4
          </h5>

          <p className="mb-3 font-normal text-white-500 dark:text-white-400">
            Know more about our Rank 4 company of the year.
          </p> */}
        </Link>

        <Link
          to={"/csc-articles"}
          className="max-w-sm p-6 bg-white border border-white-200 rounded-lg shadow dark:bg-white-800 dark:border-white-700"
        >
          <img src={card5} alt="..." className="h-20 mx-auto" />
          <h5 className="text-xl font-semibold tracking-tight text-black text-center">
            CSCE
          </h5>

          {/* <h5 className="mb-2 text-2xl font-semibold tracking-tight text-black">
            Rank 5
          </h5>

          <p className="mb-3 font-normal text-white-500 dark:text-white-400">
            Know more about our Rank 5 company of the year.
          </p> */}
        </Link>

        <Link
          to={"/acs-articles"}
          className="max-w-sm p-6 bg-white border border-white-200 rounded-lg shadow dark:bg-white-800 dark:border-white-700"
        >
          <img src={card6} alt="..." className="h-20 mx-auto" />
          <h5 className="text-xl font-semibold tracking-tight text-black text-center">
            ACS Groups
          </h5>
          {/* <h5 className="mb-2 text-2xl font-semibold tracking-tight text-black">
            Rank 6
          </h5>

          <p className="mb-3 font-normal text-white-500 dark:text-white-400">
            Know more about our Rank 6 company of the year.
          </p> */}
        </Link>

        <Link
          to={"/hochtief-articles"}
          className="max-w-sm p-6 bg-white border border-white-200 rounded-lg shadow dark:bg-white-800 dark:border-white-700"
        >
          <img src={card7} alt="..." className="h-20 mx-auto" />
          <h5 className="text-xl font-semibold tracking-tight text-black text-center">
            Hochtief
          </h5>
          {/* <h5 className="mb-2 text-2xl font-semibold tracking-tight text-black">
            Rank 7
          </h5>

          <p className="mb-3 font-normal text-white-500 dark:text-white-400">
            Know more about our Rank 7 company of the year.
          </p> */}
        </Link>

        <Link
          to={"/bouygues-articles"}
          className="max-w-sm p-6 bg-white border border-white-200 rounded-lg shadow dark:bg-white-800 dark:border-white-700"
        >
          <img src={card8} alt="..." className="h-20 mx-auto" />
          <h5 className="text-xl font-semibold tracking-tight text-black text-center">
            Bouygues Group
          </h5>

          {/* <h5 className="mb-2 text-2xl font-semibold tracking-tight text-black">
            Rank 8
          </h5>

          <p className="mb-3 font-normal text-white-500 dark:text-white-400">
            Know more about our Rank 8 company of the year.
          </p> */}
        </Link>

        <Link
          to={"/lt-articles"}
          className="max-w-sm p-6 bg-white border border-white-200 rounded-lg shadow dark:bg-white-800 dark:border-white-700"
        >
          <img src={card9} alt="..." className="h-20 mx-auto" />
          <h5 className="text-xl font-semibold tracking-tight text-black text-center">
            Larsen & Toubro Limited
          </h5>
          {/* <h5 className="mb-2 text-2xl font-semibold tracking-tight text-black">
            Rank 9
          </h5>

          <p className="mb-3 font-normal text-white-500 dark:text-white-400">
            Know more about our Rank 9 company of the year.
          </p> */}
        </Link>

        <Link
          to={"/skanska-articles"}
          className="max-w-sm p-6 bg-white border border-white-200 rounded-lg shadow dark:bg-white-800 dark:border-white-700"
        >
          <img src={card10} alt="..." className="h-20 mx-auto" />
          <h5 className="text-xl font-semibold tracking-tight text-black text-center">
            Skanska AB
          </h5>
          {/* <h5 className="mb-2 text-2xl font-semibold tracking-tight text-black">
            Rank 10
          </h5>

          <p className="mb-3 font-normal text-white-500 dark:text-white-400">
            Know more about our Rank 10 company of the year.
          </p> */}
        </Link>
      </div>

      <Link
        to={"/siecorp-articles-list"}
        className="relative flex overflow-x-hidden"
      >
        <div className="py-12 animate-marquee whitespace-nowrap">
          <span className="text-4xl font-bold mx-4 uppercase tracking-wider">
            Trending Organisation: SIECORP
          </span>
          <span className="text-4xl mx-4">⚫</span>
          <span className="text-4xl mx-4 uppercase tracking-wider">
            Click To Know More
          </span>
          <span className="text-4xl mx-4">⚫</span>
        </div>

        <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
          <span className="text-4xl font-bold mx-4 uppercase tracking-wider">
            Trending Organisation: SIECORP
          </span>
          <span className="text-4xl mx-4">⚫</span>
          <span className="text-4xl mx-4 uppercase tracking-wider">
            Click To Know More
          </span>
          <span className="text-4xl mx-4">⚫</span>
        </div>
      </Link>

      <h2 className="font-semibold text-5xl text-center pt-10">
        Arictle you might be interested in
      </h2>

      <div className="glide-04 relative max-w-screen-2xl mx-auto py-12 px-3">
        {/*    <!-- Slides --> */}
        <div className="overflow-hidden" data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            <Link to={"/siecorp-an-emerging-org-in-india"}>
              <img
                src={article4}
                className="m-auto max-h-full w-full max-w-full"
              />
              <p className="py-2">
                SIECORP: An Emerging Organization in the Indian Market
              </p>
            </Link>
            <Link to={"/siecorp-role-in-shaping-india-infra"}>
              <img
                src={article5}
                className="m-auto max-h-full w-full max-w-full"
              />
              <p className="py-2">
                SIECORP’s Role in Shaping India’s Infrastructure: Contributions
                to the Delhi-Mumbai Expressway
              </p>
            </Link>
            <Link to={"/siecorp-role-in-revolutionizing-connectivity"}>
              <img
                src={article6}
                className="m-auto max-h-full w-full max-w-full"
              />
              <p className="py-2">
                SIECORP’s Role in Revolutionizing Connectivity: Contributions to
                the Mumbai-Pune Sea Link
              </p>
            </Link>
          </ul>
        </div>
        {/*    <!-- Controls --> */}
        <div
          className="sm:hidden flex w-full items-center justify-center gap-2 p-4"
          data-glide-el="controls"
        >
          <button
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir="<"
            aria-label="prev slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <title>prev slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
          </button>
          <button
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir=">"
            aria-label="next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <title>next slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default Info;
