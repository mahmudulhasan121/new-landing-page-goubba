import React from "react";
import { useState } from "react";

function Question({ quest, ans }) {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      {toggle ? (
        <div className="tw-min-h-60 lg:tw-h-36 tw-transition-all tw-duration-500">
          <div
            className="tw-w-full tw-flex tw-mt-2 tw-bg-[#340927] tw-rounded-t-lg tw-items-center tw-gap-3 tw-text-lg tw-font-medium tw-p-4 tw-cursor-pointer "
            onClick={() => setToggle(false)}
          >
            <div className="tw-relative tw-bg-red-500">
              <svg
                width="28"
                height="5"
                viewBox="0 0 28 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.5 2.65137L2.5 2.65137"
                  stroke="white"
                  stroke-width="4"
                  stroke-linecap="round"
                />
              </svg>
              <svg
                className="tw-absolute tw-top-[0px] tw-rotate-0 tw-duration-500"
                width="28"
                height="5"
                viewBox="0 0 28 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.5 2.65137L2.5 2.65137"
                  stroke="white"
                  stroke-width="4"
                  stroke-linecap="round"
                />
              </svg>
            </div>

            <p>{quest}</p>
          </div>

          <div className="tw-pb-4 tw-pr-4 tw-rounded-b-lg tw-bg-[#340927]">
            <p className="tw-pl-14">{ans}</p>
          </div>
        </div>
      ) : (
        <div className="tw-h-20 tw-transition-all tw-duration-500">
          <div
            className="tw-flex tw-mt-2 tw-bg-[#13020D] tw-w-full tw-rounded-t-lg tw-items-center tw-gap-3 tw-text-lg tw-font-medium tw-p-4 tw-cursor-pointer"
            onClick={() => setToggle(true)}
          >
            <div className="tw-relative">
              <svg
                width="28"
                height="5"
                viewBox="0 0 28 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.5 2.65137L2.5 2.65137"
                  stroke="white"
                  stroke-width="4"
                  stroke-linecap="round"
                />
              </svg>
              <svg
                className="tw-absolute tw-top-[0px] tw-rotate-90 tw-duration-500"
                width="28"
                height="5"
                viewBox="0 0 28 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.5 2.65137L2.5 2.65137"
                  stroke="white"
                  stroke-width="4"
                  stroke-linecap="round"
                />
              </svg>
            </div>

            <p>{quest}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Question;
