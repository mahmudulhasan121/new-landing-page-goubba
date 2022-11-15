import React from "react";

import data from "./data";

import AppButton from "../../components/AppButton";
import H1 from "../../components/H1";
import H2 from "../../components/H2";
import Text from "../../components/Text";

// import { ReactComponent as IconMenu } from "../../assets/About_us_icons/boost_icon.svg";

function landingPageAbout() {
  return (
    <>
      {/************************************************************* First part ***********************************************************/}

      <div className="tw-py-28 lg:tw-py-32 lg:tw-px-16 2xl:tw-px-32 tw-gap-16 tw-flex tw-flex-col tw-text-white tw-bg-gradient-to-b tw-from-[#292526] tw-to-[#750665]">
        {/* -------------------------------------------------------- 1. Our mission ---------------------------------------------------*/}

        <div className="tw-text-left tw-flex tw-flex-col tw-gap-4 lg:tw-gap-8 tw-px-4">
          <H1 text={data.mission.title} />
          <Text text={data.mission.description} />
          <div className="tw-flex-col tw-flex tw-gap-4 tw-justify-between md:tw-flex-row">
            {data.mission.persons.map((person) => (
              <PersonCard
                quote={person.quote}
                name={person.name}
                img={person.img}
              />
            ))}
          </div>
        </div>

        {/* -------------------------------------------------------- 2. Our values ---------------------------------------------------*/}

        <div className="tw-text-left tw-flex tw-flex-col tw-gap-3 lg:tw-gap-8 tw-px-3">
          <H1 text={data.value.title} />
          <Text text={data.value.description} />
        </div>

        {/* grid for web */}
        <div
          className="tw-hidden lg:tw-grid lg:tw-grid-cols-3 tw-gap-2"
          style={{ gridTemplateColumns: "repeat(3, 1fr)" }}
        >
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
        <div className="tw-flex lg:tw-hidden tw-overflow-x-scroll no-scrollbar tw-gap-2">
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

      {/************************************************************* Second part ***********************************************************/}

      <div className="tw-py-10 lg:tw-py-20 lg:tw-px-16 2xl:tw-px-32 tw-gap-10 lg:tw-gap-16 tw-flex tw-flex-col tw-text-[#531A5B] tw-bg-[#FFFBFC]">
        {/* -------------------------------------------------------- 3. Who are We ? (question) ---------------------------------------------------*/}

        <div className="tw-text-left tw-flex tw-flex-col tw-px-4 tw-gap-4 lg:tw-gap-8">
          <H1 text={data.question.title} />
          <Text text={data.question.answer} />
        </div>

        {/* -------------------------------------------------------- 4. Our team ---------------------------------------------------*/}

        <div className="tw-text-left tw-flex tw-flex-col tw-px-4 tw-gap-4 lg:tw-gap-8">
          <H1 text={data.team.title} />
          <div>
            <img
              src={data.team.image_members}
              alt="Team Member"
              className="tw-w-full tw-h-auto tw-mb-4 lg:tw-mb-8 tw-rounded-md lg:tw-rounded-2xl"
            />

            {/* image album for Web & tablet */}
            <div className="tw-hidden tw-gap-4 lg:tw-gap-8 md:tw-grid md:tw-grid-cols-3 tw-w-full">
              {data.team.images_events.map((image) => (
                <img
                  src={image}
                  alt=""
                  className="tw-w-full tw-h-auto tw-rounded-lg lg:tw-rounded-2xl"
                />
              ))}
            </div>

            {/* image scroll bar for mobile */}
            <div className="tw-flex md:tw-hidden tw-overflow-x-scroll no-scrollbar tw-gap-2 -tw-mx-4 tw-px-4">
              {data.team.images_events.map((image) => (
                <img
                  src={image}
                  alt=""
                  className="tw-w-2/3 tw-h-auto tw-rounded-lg lg:tw-rounded-2xl"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/************************************************************* Third part ***********************************************************/}

      <div className="tw-py-7 tw-pb-10 tw-px-4 lg:tw-py-12 lg:tw-px-40 2xl:tw-px-60 tw-flex tw-flex-col tw-gap-1 lg:tw-gap-3 tw-text-[#531A5B] tw-bg-[#FFF3FE]">
        <div>
          <Text className={"lg:tw-text-2xl"} text={data.Join.check} />
          <H1 text={data.Join.title} />
        </div>

        <Text className={"tw-mb-6 lg:tw-mb-8"} text={data.Join.description} />

        <AppButton
          title={data.Join.btn}
          style={{
            background:
              "linear-gradient(92.86deg, #9F3D9A 29.09%, #BA1986 97.62%)",
            boxShadow: "0px 4px 20px rgba(111, 26, 83, 0.5)",
            borderRadius: "50px",
          }}
        />
      </div>
    </>
  );
}

export default landingPageAbout;

function ValueCard({ title, description, className, icon, ...props }) {
  return (
    <div
      className={`tw-grid tw-grid-rows-2 tw-justify-items-center tw-text-center tw-px-4 tw-py-4 tw-gap-6 md:tw-gap-8 tw-min-w-[264px] ${className}`}
      style={{
        gridTemplateRows: "auto 1fr",
      }}
      {...props}
    >
      <Icon icon={icon} />
      <div
        className="tw-grid tw-gap-2 lg:tw-gap-4"
        style={{ gridTemplateRows: "1fr 2fr" }}
      >
        <H2 text={title} />
        <Text className="tw-text-sm" text={description} />
      </div>
    </div>
  );
}

function Icon({ icon, className, ...props }) {
  return (
    <div
      className={`tw-h-32 tw-w-32 lg:tw-h-44 lg:tw-w-44 tw-rounded-full tw-flex tw-justify-center tw-items-center ${className}`}
      style={{
        backgroundColor: "rgba(94, 17, 83, 1)",
        boxShadow: " 0px 4px 20px 20px rgba(0, 0, 0, 0.05)",
      }}
      {...props}
    >
      {icon}
    </div>
  );
}

function PersonCard({ img, quote, name, className, ...props }) {
  return (
    <div
      className={`tw-flex tw-items-center tw-gap-6 lg:tw-gap-8 ${className}`}
      {...props}
    >
      <img
        src={img}
        alt="Team Member"
        className="tw-h-20 tw-w-20 lg:tw-h-28 lg:tw-w-28 tw-rounded-full"
      />
      <div className="tw-flex tw-flex-col tw-justify-center tw-gap-1 md:tw-gap-2">
        <p className="tw-font-normal tw-text-sm lg:tw-text-base">{quote}</p>
        <p className="tw-font-bold tw-text-sm lg:tw-text-base">{name}</p>
      </div>
    </div>
  );
}
