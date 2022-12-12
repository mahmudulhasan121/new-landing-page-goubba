import React, { useState } from "react";
import { Trans } from "react-i18next";
import { faq } from "../../data/faq";
import Question from "../Question";

function Faq() {
  const [current, setCurrent] = useState(1);

  const handleChange = (event) => {
    setCurrent(event.target.value);
  };
  return (
    <div className="tw-pt-10 tw-pb-12 tw-mx-2 md:tw-mx-10 tw-px-2 md:tw-px-0 md:tw-p-24">
      <div className="tw-grid tw-grid-flow-row md:tw-grid-cols-3 tw-px-0 md:tw-px-8 tw-mx-auto">
        <div className="tw-flex tw-items-center md:tw-items-start md:tw-flex-col tw-items-start">
          <p
            className="tw-text-white tw-font-medium tw-text-center md:tw-text-left tw-mx-4 md:tw-mx-0
                                    tw-text-3xl md:tw-text-3xl lg:tw-text-5xl tw-mb-8 lg:tw-pr-12 tw-z-20 lg:tw-leading-[60px] tw-mt-4 md:tw-mt-0"
          >
            <Trans>questions_answers</Trans>
          </p>
        </div>
        <div className="tw-text-white md:tw-col-span-2">
          {faq.map((item, key) => {
            return (
              <Question
                id={item.id}
                quest={item.qst}
                ans={item.ans}
                isOpen={item.id == current}
                handleChange={handleChange}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Faq;
