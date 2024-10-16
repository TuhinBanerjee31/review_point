import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import { Link } from "react-router-dom";
import article1 from "../assets/siecorp_article_1.jpg";
import article2 from "../assets/siecorp_article_2.jpg";
import article3 from "../assets/siecorp_article_3.jpg";
import article4 from "../assets/siecorp_article_4.jpg";
import article5 from "../assets/siecorp_article_5.png";
import article6 from "../assets/siecorp_article_6.jpg";
import article7 from "../assets/siecorp_article_7.jpg";

const ArticleSlider = () => {
  useEffect(() => {
    const slider = new Glide(".glide-04", {
      type: "carousel",
      focusAt: "center",
      perView: 3,
      autoplay: 3500,
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
    <>
      {/*<!-- Component: Carousel with controls outside --> */}
      <div className="glide-04 relative max-w-screen-xl mx-auto">
        {/*    <!-- Slides --> */}
        <div className="overflow-hidden" data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            <Link to={"/siecorp-global-leader-in-integrated-infra-sol"}>
              <img
                src={article1}
                className="m-auto max-h-full w-full max-w-full"
              />
              <p className="py-2">
                SIECORP: A Global Leader in Integrated Infrastructure Solutions.
              </p>
            </Link>
            <Link to={"/siecorp-employee-centric-approach"}>
              <img
                src={article2}
                className="m-auto max-h-full w-full max-w-full"
              />
              <p className="py-2">
                SIECORP’s Employee-Centric Approach: A Commitment to Growth,
                Well-being, and Safety
              </p>
            </Link>
            <Link to={"/siecorp-core-services-specializations"}>
              <img
                src={article3}
                className="m-auto max-h-full w-full max-w-full"
              />
              <p className="py-2">
                SIECORP’s Core Services and Specializations: Excellence in
                Infrastructure Solutions
              </p>
            </Link>
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
            <Link to={"/siecorp-partnership-with-indian-government"}>
              <img
                src={article7}
                className="m-auto max-h-full w-full max-w-full"
              />
              <p className="py-2">
              SIECORP’s Partnership with the Indian Government: A Catalyst for
              Progress and Development
              </p>
            </Link>
          </ul>
        </div>
        {/*    <!-- Controls --> */}
        <div
          className="flex w-full items-center justify-center gap-2 p-4"
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
      {/*<!-- End Carousel with controls outside --> */}
    </>
  );
};

export default ArticleSlider;
