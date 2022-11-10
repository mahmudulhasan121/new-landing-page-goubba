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
      <div className="tw-py-32 tw-px-20 tw-gap-16 tw-flex tw-flex-col tw-text-white tw-bg-gradient-to-b tw-from-[#292526] tw-to-[#750665]">
        {/* -------------------------------------------------------- 1. Our mission ---------------------------------------------------*/}

        <div className="tw-text-left tw-flex tw-flex-col tw-gap-4">
          <H1 text={data.mission.title} />
          <Text text={data.mission.description} />
          <div className="tw-flex tw-gap-2">
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

        <div className="tw-text-left tw-flex tw-flex-col tw-gap-3">
          <H1 text={data.value.title} />
          <Text text={data.value.description} />
        </div>

        <div
          className="tw-grid tw-grid-cols-3"
          style={{ gridTemplateColumns: "repeat(3, 1fr)" }}
        >
          {data.value.values.map((value) => (
            <ValueCard
              className=""
              title={value.title}
              description={value.description}
              icon={value.icon}
              // style={{ width: "321px" }}
            />
          ))}
        </div>
      </div>

      {/************************************************************* Second part ***********************************************************/}

      <div className="tw-py-20 md:tw-px-20 tw-px-5 tw-gap-16 tw-flex tw-flex-col tw-text-[#531A5B] tw-bg-[#FFFBFC]">
        {/* -------------------------------------------------------- 3. Who are We ? (question) ---------------------------------------------------*/}

        <div className="tw-text-left tw-flex tw-flex-col tw-gap-4">
          <H1 text={data.question.title} />
          <Text text={data.question.answer} />
        </div>

        {/* -------------------------------------------------------- 4. Our team ---------------------------------------------------*/}

        <div className="tw-text-left tw-flex tw-flex-col tw-gap-4">
          <H1 text={data.team.title} />
          <div>
            <a href={data.team.image_members} target="_tab">
              <img
                src={data.team.image_members}
                alt="Team Member"
                className="tw-w-full tw-h-auto tw-mb-4 tw-rounded-2xl tw-cursor-pointer"
              />
            </a>

            <div className="tw-gap-4 tw-grid tw-grid-cols-3 tw-w-full">
              {data.team.images_events.map((image) => (
                <a href={image} target="_tab">
                  <img
                    src={image}
                    alt=""
                    className="tw-rounded-2xl tw-cursor-pointer"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/************************************************************* Third part ***********************************************************/}

      <div className="tw-py-12 tw-px-40 tw-flex tw-flex-col tw-gap-3 tw-text-[#531A5B] tw-bg-[#FFF3FE]">
        <div>
          <Text className={"tw-text-2xl"} text={data.Join.check} />
          <H1 text={data.Join.title} />
        </div>

        <Text className={"tw-mb-4"} text={data.Join.description} />

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
      className={`tw-grid tw-grid-rows-2 tw-justify-items-center tw-text-center tw-px-4 tw-py-4 tw-gap-8 ${className}`}
      style={{ gridTemplateRows: "auto 1fr" }}
      {...props}
    >
      <Icon icon={icon} />
      <div className="tw-grid tw-gap-4" style={{ gridTemplateRows: "1fr 2fr" }}>
        <H2 text={title} className="" />
        <Text className="" text={description} />
      </div>
    </div>
  );
}

function Icon({ icon, className, ...props }) {
  return (
    <div
      className={`tw-h-44 tw-w-44 tw-bg-red-800 tw-rounded-full tw-flex tw-justify-center tw-items-center ${className}`}
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
    <div className={`tw-flex tw-items-center tw-gap-5 ${className}`} {...props}>
      <img
        src={img}
        alt="Team Member"
        className="tw-h-24 tw-w-24 tw-rounded-full"
      />
      <div className="tw-flex tw-flex-col tw-justify-center tw-gap-3">
        <p className="tw-font-normal tw-text-base tw-leading-6">{quote}</p>
        <p className="tw-font-bold tw-text-base tw-leading-6">{name}</p>
      </div>
    </div>
  );
}
