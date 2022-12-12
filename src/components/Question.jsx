import React from "react";
import { useState } from "react";

function Question({ id, quest, ans, isOpen, handleChange }) {
  return (
    <div>
      {isOpen ? (
        <div className="tw-transition-all tw-duration-500">
          <input
            className="tw-hidden"
            type="radio"
            id={id}
            name="faq"
            value={id}
            onChange={handleChange}
            checked={isOpen}
          />

          <label htmlFor={id} className="tw-w-full">
            <div className="tw-w-full tw-flex tw-mt-2 tw-bg-[#340927] tw-rounded-t-xl tw-items-center tw-gap-3 tw-text-lg tw-font-medium tw-p-4 tw-cursor-pointer ">
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
          </label>

          <div className="tw-pb-4 tw-pr-4 tw-rounded-b-lg tw-bg-[#340927]">
            <p className="tw-pl-14">{ans}</p>
          </div>
        </div>
      ) : (
        <div className="tw-transition-all tw-duration-500">
          <input
            className="tw-hidden"
            type="radio"
            id={id}
            name="faq"
            value={id}
            onChange={handleChange}
          />
          <label htmlFor={id} className="tw-w-full">
            <div className="tw-flex tw-mt-2 tw-bg-[#13020D] tw-w-full tw-rounded-xl tw-items-center tw-gap-3 tw-text-lg tw-font-medium tw-p-4 tw-cursor-pointer">
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
          </label>
        </div>
      )}
    </div>
  );
}

export default Question;
