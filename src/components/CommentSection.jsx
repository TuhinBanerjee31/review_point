import React from "react";
import { UserCircleIcon } from "@heroicons/react/24/outline";

const CommentSection = () => {
  return (
    <div>
      <section className="py-10 relative">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div className="w-full flex-col justify-start items-start lg:gap-14 gap-7 inline-flex">
            <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">
              Comments
            </h2>
            <div className="w-full flex-col justify-start items-start gap-8 flex">
              <div className="w-full lg:p-8 p-5 bg-white rounded-3xl border border-gray-200 flex-col justify-start items-start flex">
                <div className="w-full flex-col justify-start items-start gap-3.5 flex">
                  <div className="w-full justify-between items-center inline-flex">
                    <div className="justify-start items-center gap-2.5 flex">
                      <div className="w-10 h-10 bg-stone-300 rounded-full justify-start items-start gap-2.5 flex">
                      <UserCircleIcon class="h-10 w-10 text-gray-500 mx-auto" />
                      </div>
                      <div className="flex-col justify-start items-start gap-1 inline-flex">
                        <h5 className="text-gray-900 text-sm font-semibold leading-snug">
                          John smith
                        </h5>
                        <h6 className="text-gray-500 text-xs font-normal leading-5">
                          5 Day ago
                        </h6>
                      </div>
                    </div>
                    <div className="group justify-end items-center flex">
                      <div className="px-5 py-2.5 rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-400 hover:border-green-600 transition-all duration-700 ease-in-out justify-center items-center flex">
                        <a href="" className="">
                          <svg
                            className="group-hover:text-green-600 text-gray-400 group-hover:fill-green-600 fill-white transition-all duration-700 ease-in-out"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <path
                              d="M2.62629 3.43257C4.64001 1.44869 7.82082 1.31134 9.99614 3.02053C12.1723 1.31134 15.3589 1.44869 17.3726 3.43257L17.3734 3.43334C19.5412 5.57611 19.5412 9.04382 17.3804 11.1867L17.378 11.1891L10.4631 17.9764C10.2035 18.2312 9.78765 18.2309 9.52844 17.9758L2.62629 11.1821C0.457252 9.04516 0.457252 5.56947 2.62629 3.43257Z"
                              stroke="currentColor"
                            />
                          </svg>
                        </a>
                        <div className="px-2 justify-center items-center flex">
                          <h5 className="group-hover:text-green-600 text-gray-400 transition-all duration-700 ease-in-out text-base font-semibold leading-relaxed">
                            34
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-800 text-sm font-normal leading-snug">
                    Mauris luctus habitasse turpis elementum vitae in. Ut
                    habitasse orci sed aliquam bibendum. Sem in nisl vestibulum
                    rhoncus sed diam amet nulla. Netus feugiat nunc vulputate
                    eros pellentesque. A at augue elementum aliquet in aliquet.
                    Vitae amet quisque massa egestas amet. Vitae id ipsum lacus
                    tellus facilisis sit. Nunc ut pellentesque lacus massa arcu
                    neque mi ultrices convallis.
                  </p>
                </div>
              </div>
              <div className="w-full lg:p-8 p-5 bg-white rounded-3xl border border-gray-200 flex-col justify-start items-start gap-2.5 flex">
                <div className="w-full flex-col justify-start items-start gap-3.5 flex">
                  <div className="w-full justify-between items-center inline-flex">
                    <div className="justify-start items-center gap-2.5 flex">
                      <div className="w-10 h-10 bg-stone-300 rounded-full justify-start items-start gap-2.5 flex">
                      <UserCircleIcon class="h-10 w-10 text-gray-500 mx-auto" />
                      </div>
                      <div className="flex-col justify-start items-start gap-1 inline-flex">
                        <h5 className="text-gray-900 text-sm font-semibold leading-snug">
                          Emma Davis
                        </h5>
                        <h6 className="text-gray-500 text-xs font-normal leading-5">
                          4 Day ago
                        </h6>
                      </div>
                    </div>
                    <div className="group justify-end items-center flex">
                      <div className="px-5 py-2.5 rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-400 hover:border-green-600 transition-all duration-700 ease-in-out  justify-center items-center flex">
                        <a href="" className="">
                          <svg
                            className="group-hover:text-green-600 text-gray-400 group-hover:fill-green-600 fill-white transition-all duration-700 ease-in-out"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <path
                              d="M2.62629 3.43257C4.64001 1.44869 7.82082 1.31134 9.99614 3.02053C12.1723 1.31134 15.3589 1.44869 17.3726 3.43257L17.3734 3.43334C19.5412 5.57611 19.5412 9.04382 17.3804 11.1867L17.378 11.1891L10.4631 17.9764C10.2035 18.2312 9.78765 18.2309 9.52844 17.9758L2.62629 11.1821C0.457252 9.04516 0.457252 5.56947 2.62629 3.43257Z"
                              stroke="currentColor"
                            />
                          </svg>
                        </a>
                        <div className="px-2 justify-center items-center flex">
                          <h6 className="group-hover:text-green-600 text-gray-400 transition-all duration-700 ease-in-out text-base font-semibold leading-relaxed">
                            30
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-800 text-sm font-normal leading-snug">
                    Consectetur proin ac ac urna nulla gravida praesent id.
                    Dapibus elementum bibendum non diam vel. Pellentesque ut
                    risus sit pretium. Quis ac interdum at habitant montes
                    molestie. Amet nunc dapibus at molestie amet. Cursus
                    ullamcorper ipsum phasellus id nisl euismod accumsan.
                    Pellentesque fermentum mauris purus commodo enim. Consequat
                    est ipsum viverra curabitur.
                  </p>
                </div>
              </div>
              <div className="w-full lg:p-8 p-5 bg-white rounded-3xl border border-gray-200 flex-col justify-start items-end gap-2.5 flex">
                <div className="w-full flex-col justify-start items-end gap-3.5 flex">
                  <div className="w-full justify-between items-center inline-flex">
                    <div className="w-full justify-start items-center gap-2.5 flex">
                      <div className="w-10 h-10 bg-slate-400 rounded-full justify-start items-start gap-2.5 flex">
                      <UserCircleIcon class="h-10 w-10 text-gray-500 mx-auto" />
                      </div>
                      <div className="flex-col justify-start items-start gap-1 inline-flex">
                        <h5 className="text-gray-900 text-sm font-semibold leading-snug">
                          Danial Harrison
                        </h5>
                        <h6 className="text-gray-500 text-xs font-normal leading-5">
                          5 Hour ago
                        </h6>
                      </div>
                    </div>
                    <div className="group justify-end items-center flex">
                      <div className="px-5 py-2.5 rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-400 hover:border-green-600 transition-all duration-700 ease-in-out  justify-center items-center flex">
                        <a href="" className="">
                          <svg
                            className="group-hover:text-green-600 text-gray-400 group-hover:fill-green-600 fill-white transition-all duration-700 ease-in-out"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <path
                              d="M2.62629 3.43257C4.64001 1.44869 7.82082 1.31134 9.99614 3.02053C12.1723 1.31134 15.3589 1.44869 17.3726 3.43257L17.3734 3.43334C19.5412 5.57611 19.5412 9.04382 17.3804 11.1867L17.378 11.1891L10.4631 17.9764C10.2035 18.2312 9.78765 18.2309 9.52844 17.9758L2.62629 11.1821C0.457252 9.04516 0.457252 5.56947 2.62629 3.43257Z"
                              stroke="currentColor"
                            />
                          </svg>
                        </a>
                        <div className="px-2 justify-center items-center flex">
                          <h6 className="group-hover:text-green-600 text-gray-400 transition-all duration-700 ease-in-out text-base font-semibold leading-relaxed">
                            80
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-800 text-sm font-normal leading-snug">
                    Malesuada rhoncus senectus amet dui tincidunt. Porttitor
                    lectus diam sit sit pellentesque ultrices. Molestie libero
                    ac odio at tristique sapien est venenatis. Egestas vitae
                    velit vestibulum egestas felis euismod. Morbi ac vel
                    scelerisque morbi eu nisi gravida tellus. Pulvinar orci at
                    elementum massa morbi pellentesque non nulla. Elementum
                    faucibus urna est mattis. Non aliquet in molestie id nisl.
                    Bibendum mauris dolor nisl elit ut eu viverra. Ut facilisi
                    turpis neque eu risus etiam senectus vel. Orci pharetra
                    ornare amet massa. Tempus orci vestibulum pulvinar tincidunt
                    amet dictum sit tempor.
                  </p>
                  {/* <div className="w-full justify-end items-start gap-6 inline-flex">
                    <button className="sm:w-fit w-full px-5 py-2.5 rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] hover:bg-gray-200 hover:border-transparent transition-all duration-700 ease-in-out border border-gray-200 justify-center items-center flex">
                      <span className="px-2 text-gray-900 text-base font-semibold leading-relaxed">
                        Delete
                      </span>
                    </button>
                    <button className="sm:w-fit w-full px-5 py-2.5 bg-green-600 hover:bg-green-700 transition-all duration-700 ease-in-out rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                      <span className="px-2 py-px text-white text-base font-semibold leading-relaxed">
                        Edit
                      </span>
                    </button>
                  </div> */}
                </div>
              </div>
              <div className="w-full relative flex justify-between gap-2">
                <input
                  type="text"
                  className="w-full py-3 px-5 rounded-lg border border-gray-300 bg-white shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed"
                  placeholder="Leave a constructive comment..."
                />
                <a href="" className="absolute right-6 top-[18px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_2063_2504)">
                      <path
                        d="M10.0194 1.66699V5.6556C1.69526 5.6556 1.54178 14.4163 1.69573 18.3337C1.69573 16.4818 5.84659 10.0003 10.0194 10.6414V14.63L18.3332 8.14847L10.0194 1.66699Z"
                        stroke="#111827"
                        stroke-width="1.6"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2063_2504">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommentSection;
