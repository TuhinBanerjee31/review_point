import React from "react";
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

const Info = () => {
  return (
    <div className="min-h-screen">
      <div className="h-auto max-w-screen-md mx-auto py-10 px-5">
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
          to={"/siecorp-articles"}
          className="max-w-sm p-6 bg-white border border-white-200 rounded-lg shadow dark:bg-white-800 dark:border-white-700"
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
    </div>
  );
};

export default Info;
