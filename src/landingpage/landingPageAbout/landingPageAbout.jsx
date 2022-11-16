import React from "react";

import data from "./data";
import "./landingPageAbout.css";

import AppButton from "../../components/AppButton";
import H1 from "../../components/H1";
import H2 from "../../components/H2";
import Text from "../../components/Text";

// import { ReactComponent as IconMenu } from "../../assets/About_us_icons/boost_icon.svg";

function landingPageAbout() {
  return (
    <>
      {/************************************************************* First part ***********************************************************/}

      <Container className="tw-py-28 lg:tw-pt-40 tw-gap-12 lg:tw-gap-14 tw-flex tw-flex-col tw-text-white tw-bg-gradient-to-b tw-from-[#292526] tw-to-[#750665]">
        {/* -------------------------------------------------------- 1. Our mission ---------------------------------------------------*/}

        <div className="tw-flex tw-flex-col tw-gap-2 lg:tw-gap-6">
          <H1 text={data.mission.title} />
          <Text
            text={data.mission.description}
            className="tw-text-justify tw-mb-6 lg:tw-mb-4"
          />
          <div className="tw-flex-col tw-flex tw-gap-2 lg:tw-gap-4 2xl:tw-flex-row 2xl:tw-gap-10">
            {data.mission.persons.map((person) => (
              <PersonCard
                quote={person.quote}
                name={person.name}
                img={person.img}
                className
              />
            ))}
          </div>
        </div>

        {/* -------------------------------------------------------- 2. Our values ---------------------------------------------------*/}

        <div className="tw-flex tw-flex-col -tw-mr-4 lg:-tw-mr-0 tw-gap-2 lg:tw-gap-6">
          <H1 text={data.value.title} />
          <Text
            text={data.value.description}
            className="lg:tw-text-justify tw-mb-8 lg:tw-mb-10 tw-pr-0.5"
          />

          {/* grid for web */}
          <div className="tw-hidden lg:tw-grid lg:tw-grid-cols-2 2xl:tw-grid-cols-3 tw-gap-x-[67px] tw-gap-y-14">
            {data.value.values.map((value) => (
              <ValueCard
                className=""
                title={value.title}
                description={value.description}
                icon={value.icon}
              />
            ))}
          </div>

          {/* ScrollBar for mobile & tablet */}
          <div className="tw-flex lg:tw-hidden tw-overflow-x-scroll no-scrollbar tw-gap-4">
            {data.value.values.map((value) => (
              <ValueCard
                className=""
                title={value.title}
                description={value.description}
                icon={value.icon}
              />
            ))}
          </div>
        </div>
      </Container>

      {/************************************************************* Second part ***********************************************************/}

      <Container className="tw-pt-6 tw-pb-10 lg:tw-py-14 2xl:tw-py-20 tw-gap-10  tw-flex tw-flex-col tw-text-[#531A5B] tw-bg-[#FFFBFC]">
        {/* -------------------------------------------------------- 3. Who are We ? (question) ---------------------------------------------------*/}

        <div className="tw-flex tw-flex-col tw-gap-6">
          <H1 text={data.question.title} />
          <Text text={data.question.answer} className="tw-text-justify" />
        </div>

        {/* -------------------------------------------------------- 4. Our team ---------------------------------------------------*/}

        <div className="tw-text-left tw-flex tw-flex-col tw-gap-4 lg:tw-gap-6">
          <H1 text={data.team.title} />
          <div>
            <img
              src={data.team.image_members}
              alt="Team Member"
              className="tw-w-full tw-h-auto tw-mb-3 lg:tw-mb-4 tw-rounded-lg lg:tw-rounded-xl 2xl:tw-rounded-[20px]"
            />

            {/* image album for Web */}
            <div className="tw-hidden tw-gap-4 2xl:tw-gap-8 2xl:tw-grid 2xl:tw-grid-cols-3 tw-w-full">
              {data.team.images_events.map((image) => (
                <img
                  src={image}
                  alt=""
                  className="tw-w-full tw-h-auto tw-rounded-lg lg:tw-rounded-2xl"
                />
              ))}
            </div>

            {/* image scroll bar for mobile & tablet */}
            <div
              id="scrollbar"
              className="tw-flex 2xl:tw-hidden tw-overflow-x-scroll no-scrollbar tw-gap-3 lg:tw-gap-10"
            >
              {data.team.images_events.map((image) => (
                <img
                  src={image}
                  alt=""
                  className="tw-w-2/3 lg:tw-w-1/2 tw-h-auto tw-rounded-lg lg:tw-rounded-2xl"
                />
              ))}
            </div>
          </div>
        </div>
      </Container>

      {/************************************************************* Third part ***********************************************************/}

      <Container className="tw-py-7 tw-pb-14 lg:tw-py-14 2xl:tw-py-20 lg:tw-px-36 xl:tw-px-44 tw-flex tw-flex-col tw-gap-6 lg:tw-gap-8 tw-text-[#531A5B] tw-bg-[#FFF3FE]">
        <div>
          <Text className={"lg:tw-text-2xl"} text={data.Join.check} />
          <H1 text={data.Join.title} className={"tw-mb-[5px] lg:tw-mb-3"} />
          <Text text={data.Join.description} />
        </div>

        <AppButton title={data.Join.btn} className="join-btn" />
      </Container>
    </>
  );
}

export default landingPageAbout;

function ValueCard({ title, description, className, icon, ...props }) {
  return (
    <div
      className={`tw-grid tw-grid-rows-2 tw-justify-items-center tw-text-center tw-gap-6 tw-min-w-[264px] ${className}`}
      style={{
        gridTemplateRows: "auto 1fr",
      }}
      {...props}
    >
      <Icon icon={icon} />
      <div className="tw-flex tw-flex-col tw-gap-2 lg:tw-gap-4">
        <H2 text={title} />
        <Text className="tw-text-sm" text={description} />
      </div>
    </div>
  );
}

function Icon({ icon, className, ...props }) {
  return (
    <div
      className={`value-icon tw-h-32 tw-w-32 lg:tw-h-[200px] lg:tw-w-[200px] tw-rounded-full tw-flex tw-justify-center tw-items-center ${className}`}
      {...props}
    >
      {icon}
    </div>
  );
}

function PersonCard({ img, quote, name, className, ...props }) {
  const break_line_index = quote.indexOf("\n");
  const firstLine = quote.slice(0, break_line_index);
  const secondLine = quote.slice(break_line_index + 1);
  return (
    <div
      className={`tw-flex tw-items-center tw-bg-[#4A2643] tw-rounded-[10px] tw-w-full tw-py-3 lg:tw-py-4 tw-px-2 lg:tw-px-10 tw-gap-4 lg:tw-gap-6 ${className}`}
      {...props}
    >
      <img
        src={img}
        alt="Team Member"
        className="tw-h-12 tw-w-12 lg:tw-h-16 lg:tw-w-16 tw-rounded-full"
      />
      <div className="tw-flex tw-flex-col tw-justify-center tw-gap-1 md:tw-gap-2">
        {/* ------------------------------ to display quote in two lines for large screen ---------------------------------------------------*/}
        <p className="tw-hidden lg:tw-flex tw-font-normal tw-text-sm tw-leading-[22px]">
          {firstLine}
          <br />
          {secondLine}
        </p>

        {/* ------------------------------ to display quote in small screen ---------------------------------------------------*/}
        <p className="tw-flex lg:tw-hidden tw-font-normal tw-text-xs">
          {quote}
        </p>

        <p className="tw-font-bold tw-text-xs tw-leading-[22px] lg:tw-text-sm lg:tw-leading-[22px]">
          {name}
        </p>
      </div>
    </div>
  );
}

function Container({ className, children, ...props }) {
  return (
    <div
      className={`tw-px-4 lg:tw-px-[158px] xl:tw-px-[286px] 2xl:tw-px-[218px] 3xl:tw-px-[411px] ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
