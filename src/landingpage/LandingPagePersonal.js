import "./App.css";
import { Parallax } from "react-scroll-parallax";
import { ParallaxProvider } from "react-scroll-parallax";
import Lottie from "lottie-react";

import { NavLink } from "react-router-dom";
import { Trans } from "react-i18next";
import { GoubbaPro } from "./GoubbaPro";

const becomePartner =
  "https://adminv2.goubba.com/image?path=react-web/assets/becomepartner.webm";
const cazanimoC =
  "https://adminv2.goubba.com/image?path=react-web/assets/Cazanimowebp.webp";
const camperC =
  "https://adminv2.goubba.com/image?path=react-web/assets/Camperwebp.webp";
const technoC =
  "https://adminv2.goubba.com/image?path=react-web/assets/Technowebp.webp";
const footlandC =
  "https://adminv2.goubba.com/image?path=react-web/assets/footlandwebp.webp";
const scechersC =
  "https://adminv2.goubba.com/image?path=react-web/assets/sketcherswebp.webp";
const profootC =
  "https://adminv2.goubba.com/image?path=react-web/assets/profootwebp.webp";

const WATCHCENTERC =
  "https://adminv2.goubba.com/image?path=react-web/assets/WATCH CENTER.webp";
const CLARKSC =
  "https://adminv2.goubba.com/image?path=react-web/assets/CLARKS.webp";
const DOJUC =
  "https://adminv2.goubba.com/image?path=react-web/assets/technoWebp.webp";
const EDENPARKC =
  "https://adminv2.goubba.com/image?path=react-web/assets/EDEN PARK-1.webp";
const CASIOC =
  "https://adminv2.goubba.com/image?path=react-web/assets/Group 34486.webp";
const sneaksaC =
  "https://adminv2.goubba.com/image?path=react-web/assets/EDEN PARK.webp";

const xbox =
  "https://adminv2.goubba.com/image?path=react-web/assets/xboxWebp.webp";
const Fornite =
  "https://adminv2.goubba.com/image?path=react-web/assets/Group 6.webp";
const LeageofLegends =
  "https://adminv2.goubba.com/image?path=react-web/assets/Frame 6485.webp";
const Itunes =
  "https://adminv2.goubba.com/image?path=react-web/assets/Itunes.webp";
const Freefire =
  "https://adminv2.goubba.com/image?path=react-web/assets/Freefire.webp";
const Nintendo =
  "https://adminv2.goubba.com/image?path=react-web/assets/Leage of Legends.webp";

const pay =
  "https://adminv2.goubba.com/image?path=react-web/assets/payment accepted.webp";
const googlePlay =
  "https://adminv2.goubba.com/image?path=react-web/assets/Google play.svg";
const ios =
  "https://adminv2.goubba.com/image?path=react-web/assets/app store.svg";
const HUAWEI =
  "https://adminv2.goubba.com/image?path=react-web/assets/app gallery.svg";

//mobile
function ParallaxCardsMobile() {
  return (
    <ParallaxProvider>
      <div className="tw-flex tw-relative tw-justify-center background-paralax-mobile ">
        <div className="tw-gap-4 tw-h-[500px] over">
          <div className="tw-mt-28 tw-overflow-y-hidden ">
            <Parallax className="" translateY={[60, -60]} speed={15}>
              <div className="tw-flex tw-gap-4">
                <img
                  src={Freefire}
                  className="tw-w-24 tw-h-32 tw-rounded-lg"
                  alt=""
                />
                <img
                  src={Nintendo}
                  className="tw-w-24 tw-h-32 tw-rounded-lg"
                  alt=""
                />
              </div>
            </Parallax>
            <Parallax className="" translateY={[60, -60]} speed={15}>
              <div className="tw-flex tw-gap-4">
                <img
                  src={Itunes}
                  className="tw-w-24 tw-h-32 tw-rounded-lg "
                  alt=""
                />
                <img
                  src={LeageofLegends}
                  className="tw-w-24 tw-h-32 tw-rounded-lg "
                  alt=""
                />
              </div>
            </Parallax>
            <Parallax className="" translateY={[60, -60]} speed={15}>
              <div className="tw-flex tw-gap-4">
                <img
                  src={Fornite}
                  className="tw-w-24 tw-h-32 tw-rounded-lg "
                  alt=""
                />
                <img
                  src={xbox}
                  className="tw-w-24 tw-h-32 tw-rounded-lg "
                  alt=""
                />
              </div>
            </Parallax>
          </div>
        </div>

        <div className="tw-flex tw-w-full tw-justify-between tw-z-40 tw-absolute tw-bottom-0 ">
          <Parallax
            translateY={[300, -800]}
            translateX={[30, -100]}
            scale={[0.7, 2]}
            speed={12}
          >
            <img
              src={CLARKSC}
              className="tw-w-36 tw-h-48 tw-rounded-lg"
              id="bigLeft"
              alt=""
            />
          </Parallax>
          <Parallax
            translateY={[300, -800]}
            translateX={[-30, 100]}
            scale={[0.7, 2]}
            speed={12}
          >
            <img
              src={CASIOC}
              className="tw-w-36 tw-h-48 tw-rounded-[15.1px] tw-shadow-md"
              alt=""
            />
          </Parallax>
        </div>

        <div className="tw-flex tw-w-full tw-justify-between tw-z-30 tw-absolute tw-bottom-0">
          <Parallax
            translateY={[350, -800]}
            translateX={[80, -100]}
            scale={[0.7, 2]}
            speed={10}
          >
            <img
              src={EDENPARKC}
              className="tw-flex tw-w-32 tw-h-40 tw-rounded-[15.1px] tw-shadow-md "
              alt=""
            />
          </Parallax>
          <Parallax
            translateY={[350, -800]}
            translateX={[-80, 100]}
            scale={[0.7, 2]}
            speed={10}
          >
            <img
              src={WATCHCENTERC}
              className="tw-w-32 tw-h-40 tw-rounded-[15.1px] tw-shadow-md  "
              alt=""
            />
          </Parallax>
        </div>

        <div className="tw-flex tw-w-full tw-justify-between tw-z-20 tw-absolute tw-bottom-0">
          <Parallax
            translateY={[400, -800]}
            translateX={[140, -20]}
            scale={[0.7, 2]}
            speed={5}
          >
            <img
              src={DOJUC}
              className="tw-flex tw-w-24 tw-h-32 tw-rounded-lg b"
              alt=""
            />
          </Parallax>
          <Parallax
            translateY={[400, -800]}
            translateX={[-140, 20]}
            scale={[0.7, 2]}
            speed={5}
          >
            <img
              src={sneaksaC}
              className="tw-w-24 tw-h-32 tw-rounded-[13.1px] tw-shadow-md "
              alt=""
            />
          </Parallax>
        </div>
      </div>
    </ParallaxProvider>
  );
}
//md
function ParallaxCardsMd() {
  return (
    <ParallaxProvider>
      <div className="tw-flex tw-relative tw-justify-center background-paralax-mobile no-scrollbar  tw-overflow-x-hidden tw-overflow-y-hidden">
        <div className="tw-gap-4 tw-h-[600px] over">
          <div className="tw-mt-32 tw-overflow-y-hidden ">
            <Parallax className="" translateY={[60, -60]} speed={15}>
              <div className="tw-flex tw-gap-4">
                <img src={Freefire} className="tw-w-28 tw-rounded-lg" alt="" />
                <img src={Nintendo} className="tw-w-28  tw-rounded-lg" alt="" />
              </div>
            </Parallax>
            <Parallax className="" translateY={[60, -60]} speed={15}>
              <div className="tw-flex tw-gap-4">
                <img src={Itunes} className="tw-w-28  tw-rounded-lg " alt="" />
                <img
                  src={LeageofLegends}
                  className="tw-w-28  tw-rounded-lg "
                  alt=""
                />
              </div>
            </Parallax>
            <Parallax className="" translateY={[60, -60]} speed={15}>
              <div className="tw-flex tw-gap-4">
                <img src={Fornite} className="tw-w-28  tw-rounded-lg " alt="" />
                <img src={xbox} className="tw-w-28  tw-rounded-lg " alt="" />
              </div>
            </Parallax>
          </div>
        </div>

        <div className="tw-flex tw-w-full tw-justify-between tw-z-40 tw-absolute tw-bottom-0 ">
          <Parallax
            translateY={[300, -800]}
            translateX={[100, -50]}
            scale={[0.7, 2]}
            speed={12}
          >
            <img src={CLARKSC} className="tw-w-[185px] tw-rounded-lg " alt="" />
          </Parallax>
          <Parallax
            translateY={[300, -800]}
            translateX={[-100, 50]}
            scale={[0.7, 2]}
            speed={12}
          >
            <img
              src={CASIOC}
              className="tw-w-[185px] tw-rounded-[15.1px] tw-shadow-md "
              alt=""
            />
          </Parallax>
        </div>

        <div className="tw-flex tw-w-full tw-justify-between tw-z-30 tw-absolute tw-bottom-0">
          <Parallax
            translateY={[300, -600]}
            translateX={[150, -0]}
            scale={[0.7, 2]}
            speed={10}
          >
            <img
              src={EDENPARKC}
              className="tw-flex tw-w-40 tw-h-48 tw-rounded-[13.1px] tw-shadow-md "
              alt=""
            />
          </Parallax>
          <Parallax
            translateY={[300, -600]}
            translateX={[-150, 0]}
            scale={[0.7, 2]}
            speed={10}
          >
            <img
              src={WATCHCENTERC}
              className="tw-w-40 tw-h-48 tw-rounded-[15.1px] tw-shadow-md "
              alt=""
            />
          </Parallax>
        </div>

        <div className="tw-flex tw-w-full tw-justify-between tw-z-20 tw-absolute tw-bottom-0">
          <Parallax
            translateY={[300, -400]}
            translateX={[300, 0]}
            scale={[0.7, 2]}
            speed={5}
          >
            <img
              src={DOJUC}
              className="tw-flex tw-w-32 tw-h-40 tw-rounded-lg "
              alt=""
            />
          </Parallax>
          <Parallax
            translateY={[300, -400]}
            translateX={[-300, 0]}
            scale={[0.7, 2]}
            speed={5}
          >
            <img
              src={sneaksaC}
              className="tw-w-32 tw-h-40 tw-rounded-[13.1px] tw-shadow-md  "
              alt=""
            />
          </Parallax>
        </div>
      </div>
    </ParallaxProvider>
  );
}
//lg
function ParallaxCardsLg() {
  return (
    <ParallaxProvider>
      <div className="tw-flex tw-relative tw-justify-center background-paralax-mobile no-scrollbar ">
        <div className="tw-gap-4 tw-h-[700px] over">
          <div className="tw-mt-36 tw-overflow-hidden no-scrollbar ">
            <Parallax className="" translateY={[30, -50]} speed={15}>
              <div className="tw-flex tw-gap-4">
                <img
                  src={Freefire}
                  className="tw-w-[135px]  tw-rounded-lg"
                  alt=""
                />
                <img
                  src={Nintendo}
                  className="tw-w-[135px]  tw-rounded-lg "
                  alt=""
                />
              </div>
            </Parallax>
            <Parallax className="" translateY={[30, -50]} speed={15}>
              <div className="tw-flex tw-gap-4">
                <img
                  src={Itunes}
                  className="tw-w-[135px]  tw-rounded-lg "
                  alt=""
                />
                <img
                  src={LeageofLegends}
                  className="tw-w-[135px]  tw-rounded-lg "
                  alt=""
                />
              </div>
            </Parallax>
            <Parallax className="" translateY={[30, -50]} speed={15}>
              <div className="tw-flex tw-gap-4">
                <img
                  src={Fornite}
                  className="tw-w-[135px]  tw-rounded-lg "
                  alt=""
                />
                <img
                  src={xbox}
                  className="tw-w-[135px]  tw-rounded-lg "
                  alt=""
                />
              </div>
            </Parallax>
          </div>
        </div>

        <div className="tw-flex tw-w-full tw-justify-between tw-z-40 tw-absolute tw-bottom-0 ">
          <Parallax
            translateY={[0, -800]}
            translateX={[20, -200]}
            scale={[0.9, 2]}
            speed={12}
          >
            <img
              src={CLARKSC}
              className="tw-w-52  tw-rounded-lg "
              id="bigLeft"
              alt=""
            />
          </Parallax>
          <Parallax
            translateY={[0, -800]}
            translateX={[-20, 200]}
            scale={[0.9, 2]}
            speed={12}
          >
            <img
              src={CASIOC}
              className="tw-w-52  tw-rounded-[15.1px] tw-shadow-md "
              alt=""
            />
          </Parallax>
        </div>

        <div className="tw-flex tw-w-full tw-justify-between tw-z-30 tw-absolute tw-bottom-0">
          <Parallax
            translateY={[0, -800]}
            translateX={[100, -150]}
            scale={[0.9, 2]}
            speed={10}
          >
            <img
              src={EDENPARKC}
              className="tw-flex tw-w-40  tw-rounded-[12.1px] tw-shadow-md "
              alt=""
            />
          </Parallax>
          <Parallax
            translateY={[0, -800]}
            translateX={[-100, 150]}
            scale={[0.9, 2]}
            speed={10}
          >
            <img
              src={WATCHCENTERC}
              className="tw-w-40  tw-rounded-[15.1px] tw-shadow-md  "
              alt=""
            />
          </Parallax>
        </div>

        <div className="tw-flex tw-w-full tw-justify-between tw-z-20 tw-absolute tw-bottom-0">
          <Parallax
            translateY={[0, -700]}
            translateX={[150, -50]}
            scale={[1.1, 2]}
            speed={5}
          >
            <img
              src={DOJUC}
              className="tw-flex tw-w-32  tw-rounded-lg "
              alt=""
            />
          </Parallax>
          <Parallax
            translateY={[0, -700]}
            translateX={[-150, 50]}
            scale={[1.1, 2]}
            speed={5}
          >
            <img
              src={sneaksaC}
              className="tw-w-32  tw-rounded-[14.1px] tw-shadow-md "
              alt=""
            />
          </Parallax>
        </div>
      </div>
    </ParallaxProvider>
  );
}
function ParallaxCards() {
  return (
    <ParallaxProvider>
      <div className="tw-flex tw-relative tw-justify-center tw-pt-2 background-paralax  ">
        <div className="tw-gap-4 tw-h-[800px]">
          <div className="tw-mt-28  no-scrollbar tw-overflow-y-hidden">
            <Parallax className="" translateY={[40, -50]} speed={15}>
              <div className="tw-flex tw-gap-3">
                <img
                  src={Freefire}
                  className="tw-w-[185px] tw-rounded-lg"
                  alt=""
                />
                <img
                  src={Nintendo}
                  className="tw-w-[185px] tw-rounded-lg "
                  alt=""
                />
              </div>
            </Parallax>
            <Parallax className="" translateY={[30, -50]} speed={15}>
              <div className="tw-flex tw-gap-4">
                <img
                  src={Itunes}
                  className="tw-w-[185px] tw-rounded-lg"
                  alt=""
                />
                <img
                  src={LeageofLegends}
                  className="tw-w-[185px] tw-rounded-lg"
                  alt=""
                />
              </div>
            </Parallax>
            <Parallax className="" translateY={[30, -50]} speed={15}>
              <div className="tw-flex tw-gap-4">
                <img
                  src={Fornite}
                  className="tw-w-[185px] tw-rounded-lg "
                  alt=""
                />
                <img
                  src={xbox}
                  className="tw-w-[185px] tw-rounded-lg "
                  alt=""
                />
              </div>
            </Parallax>
          </div>
        </div>

        <div className="tw-flex tw-w-full tw-justify-between tw-z-40 tw-absolute tw-bottom-0">
          <Parallax
            translateY={[50, -600]}
            translateX={[150, -800]}
            scale={[1, 1.4]}
            speed={12}
          >
            <img
              src={CLARKSC}
              className="tw-w-72 tw-h-96 tw-rounded-lg"
              id="bigLeft"
              alt=""
            />
          </Parallax>
          <Parallax
            translateY={[50, -600]}
            translateX={[-150, 800]}
            scale={[1, 1.4]}
            speed={12}
          >
            <img
              src={CASIOC}
              className="tw-w-72 tw-h-96 tw-rounded-[27.1px] tw-shadow-md "
              alt=""
            />
          </Parallax>
        </div>

        <div className="tw-flex tw-w-full tw-justify-between tw-z-30 tw-absolute  tw-bottom-0">
          <Parallax
            translateY={[0, -400]}
            translateX={[150, -500]}
            scale={[1, 1.4]}
            speed={10}
          >
            <img
              src={EDENPARKC}
              className="tw-flex tw-w-64 tw-h-80 tw-rounded-[27.1px] tw-shadow-md"
              alt=""
            />
          </Parallax>
          <Parallax
            translateY={[0, -400]}
            translateX={[-150, 500]}
            scale={[1, 1.4]}
            speed={10}
          >
            <img
              src={WATCHCENTERC}
              className="tw-w-64 tw-h-80 tw-rounded-[27.1px] tw-shadow-md "
              alt=""
            />
          </Parallax>
        </div>

        <div className="tw-flex tw-w-full tw-justify-between tw-z-10 tw-absolute  tw-bottom-0">
          <Parallax
            translateY={[0, -200]}
            translateX={[220, -300]}
            scale={[1, 2]}
            speed={8}
          >
            <img
              src={DOJUC}
              className="tw-flex tw-w-52 tw-h-64 tw-rounded-lg "
              alt=""
            />
          </Parallax>
          <Parallax
            translateY={[0, -200]}
            translateX={[-220, 300]}
            scale={[1, 2]}
            speed={8}
          >
            <img
              src={sneaksaC}
              className="tw-w-52 tw-h-64 tw-rounded-[15.1px] tw-shadow-md "
              alt=""
            />
          </Parallax>
        </div>
      </div>
    </ParallaxProvider>
  );
}

function DownloadButtons() {
  // var el_up = document.getElementById("GFG_UP");
  // var el_down = document.getElementById("GFG_DOWN");
  // var Name = "Unknown OS";
  // if (navigator.userAgent.indexOf("Win") !== -1) Name = "Windows OS";
  // if (navigator.userAgent.indexOf("HUAWEI") !== -1) Name = "HUAWEI";
  // if (navigator.userAgent.indexOf("Mac") !== -1) Name = "Macintosh";
  // if (navigator.userAgent.indexOf("Linux") !== -1) Name = "Linux OS";
  // if (navigator.userAgent.indexOf("Android") !== -1) Name = "Android OS";
  // if (navigator.userAgent.indexOf("like Mac") !== -1) Name = "iOS";
  return (
    <div className="tw-flex tw-gap-4 tw-justify-center tw-items-center tw-my-4">
      {navigator.userAgent.indexOf("HUAWEI") !== -1 ? (
        <a
          href="https://appgallery.huawei.com/app/C105229305"
          className="tw-flex tw-justify-center tw-items-center tw-text-left"
        >
          <img src={HUAWEI} alt=""></img>
        </a>
      ) : navigator.userAgent.indexOf("like Mac") !== -1 ? (
        <a
          href="https://apps.apple.com/us/app/goubba-cashback-codes-promo/id1519941116"
          className="tw-flex tw-justify-center tw-items-center  "
        >
          <img src={ios} alt=""></img>
        </a>
      ) : navigator.userAgent.indexOf("Android") !== -1 ? (
        <a
          href="https://goubba.app.link/Goubba_App"
          className="tw-flex tw-justify-center"
        >
          <img src={googlePlay} alt=""></img>
        </a>
      ) : (
        <div className="tw-flex tw-gap-4 tw-justify-center tw-items-center">
          <a
            href="https://goubba.app.link/Goubba_App"
            className="tw-flex tw-justify-center"
          >
            <img src={googlePlay} alt=""></img>
          </a>
          <a
            href="https://apps.apple.com/us/app/goubba-cashback-codes-promo/id1519941116"
            className="tw-flex tw-justify-center tw-items-center  "
          >
            <img src={ios} alt=""></img>
          </a>
          <a
            href="https://appgallery.huawei.com/app/C105229305"
            className="tw-flex tw-justify-center tw-items-center tw-text-left"
          >
            <img src={HUAWEI} alt=""></img>
          </a>
        </div>
      )}
    </div>
  );
}
function App() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };
  return (
    <div>
      <main className="">
        <div className="lg:tw-flex tw-h-20 "></div>
        <div
          className="lg:tw-mx-10 tw-bg-[#FFF6FC] tw-rounded-xl 
                    tw-pt-12 lg:tw-pt-20 no-scrollbar no-scrollbar tw-overflow-x-auto tw-overflow-y-hidden"
        >
          <div className="tw-text-center tw-text-[#021E27] lg:tw-w-3/4 tw-mx-auto">
            <h1 className="tw-mx-8 lg:tw-mx-0 tw-text-4xl lg:tw-text-[64px] 3xl:tw-text-[72px] tw-font-bold lg:tw-leading-[80px]">
              <Trans>save_money</Trans>
            </h1>
            <DownloadButtons></DownloadButtons>
            <div>
              <div className="tw-hidden 2xl:tw-block">
                <ParallaxCards />
              </div>
              <div className="tw-hidden lg:tw-block 2xl:tw-hidden">
                <ParallaxCardsLg />
              </div>
              <div className="tw-hidden md:tw-block lg:tw-hidden">
                <ParallaxCardsMd />
              </div>
              <div className="md:tw-hidden">
                <ParallaxCardsMobile />
              </div>
            </div>
          </div>
        </div>

        <div className="lg:tw-w-9/12 tw-mx-4 lg:tw-mx-auto tw-mt-12">
          <div className="tw-flex tw-justify-center tw-text-left">
            <div className="tw-mb-10 lg:tw-my-12">
              <h2 className="tw-text-[#021E27] tw-text-center tw-text-4xl lg:tw-text-[48px] lg:tw-leading-[50px] lg:tw-mb-8 tw-font-semibold">
                <Trans>join_over_5</Trans>
              </h2>
            </div>
          </div>
          <div
            className="tw-gap-4 lg:tw-gap-8 
                          tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 "
          >
            <div className="tw-rounded-xl topLeft tw-p-8 lg:tw-p-12 ">
              <h1 className="tw-text-5xl lg:tw-text-[50px] xl:tw-text-[62px] 2xl:tw-text-[72px] tw-font-bold tw-mb-4 lg:tw-mb-8">
                +200M DA
              </h1>
              <p className="tw-text-[20px] 2xl:tw-text-[24px] tw-font-light">
                <Trans>in_saving</Trans>
              </p>
              <div className="tw-w-80 lg:tw-w-0"></div>
            </div>
            <div className=" tw-rounded-xl topRight tw-p-8 lg:tw-p-12 ">
              <h1 className="tw-text-5xl 2xl:tw-text-[72px] tw-font-bold tw-mb-4 lg:tw-mb-8">
                +22M DA
              </h1>
              <p className="tw-text-[24px] tw-font-light ">
                <Trans>in_rewards</Trans>
              </p>
              <div className="tw-w-80 lg:tw-w-0"></div>
            </div>
            <div className=" tw-rounded-xl bottomLeft tw-p-8 lg:tw-p-12">
              <h1 className="tw-text-5xl 2xl:tw-text-[72px] tw-font-bold tw-mb-4 lg:tw-mb-8">
                +300
              </h1>
              <p className="tw-text-[24px] tw-font-light ">
                <Trans>exclusive_promo_cards</Trans>
              </p>
              <div className="tw-w-80 lg:tw-w-0"></div>
            </div>
            <div className=" tw-rounded-xl bottomRight tw-p-8 lg:tw-p-12">
              <h1 className="tw-text-5xl 2xl:tw-text-[72px] tw-font-bold tw-mb-4 lg:tw-mb-8">
                +10,000
              </h1>
              <p className="tw-text-[24px] tw-font-light ">
                <Trans>international_gitf</Trans>
              </p>
              <div className="tw-w-80 lg:tw-w-0"></div>
            </div>
          </div>
        </div>

        <div className="tw-my-12 lg:tw-mt-28 lg:tw-mb-0 tw-w-11/12 lg:tw-w-9/12 tw-mx-auto tw-flex tw-items-center tw-flex-col">
          <h2 className="tw-text-[#021E27] tw-text-2xl tw-text-center tw-w-2/3 lg:tw-w-full lg:tw-text-[48px] tw-font-medium tw-mb-6">
            <Trans>list_of</Trans>
          </h2>
          <div className="tw-hidden xl:tw-flex tw-items-center tw-justify-center tw-my-12 lg:tw-mb-6 tw-gap-2 ">
            <img
              src={technoC}
              className="tw-w-52 tw-rounded-lg tw-drop-shadow-lg"
              alt=""
            ></img>
            <img
              src={scechersC}
              className="tw-w-52 tw-rounded-lg tw-drop-shadow-lg"
              alt=""
            ></img>
            <img
              src={cazanimoC}
              className="tw-w-52 tw-rounded-lg tw-drop-shadow-lg"
              alt=""
            ></img>
            <img
              src={footlandC}
              className="tw-w-52 tw-rounded-lg tw-drop-shadow-lg"
              alt=""
            ></img>
            <img
              src={camperC}
              className="tw-w-52  tw-rounded-lg tw-drop-shadow-lg"
              alt=""
            ></img>

            <a
              href="https://crm.goubba.com/forms/f/2f660211-216a-4249-902f-e3f6b8182c34"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="tw-w-[184px]">
                <video muted autoPlay loop width="184">
                  <source src={becomePartner} type="video/webm" />
                </video>
              </div>
            </a>
          </div>
          <div className="tw-flex xl:tw-hidden tw-items-center tw-gap-2 tw-overflow-x-auto no-scrollbar tw-my-12">
            <img
              src={technoC}
              className="tw-w-52 tw-rounded-lg tw-drop-shadow-lg"
              alt=""
            ></img>
            <a
              href="https://crm.goubba.com/forms/f/2f660211-216a-4249-902f-e3f6b8182c34"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="tw-w-[184px]">
                <video muted autoPlay loop width="184">
                  <source src={becomePartner} type="video/webm" />
                </video>
              </div>
            </a>
            <img
              src={scechersC}
              className="tw-w-52 tw-rounded-lg tw-drop-shadow-lg"
              alt=""
            ></img>
            <img
              src={cazanimoC}
              className="tw-w-52 tw-rounded-lg tw-drop-shadow-lg"
              alt=""
            ></img>
            <img
              src={footlandC}
              className="tw-w-52 tw-rounded-lg tw-drop-shadow-lg"
              alt=""
            ></img>
            <img
              src={camperC}
              className="tw-w-52  tw-rounded-lg tw-drop-shadow-lg"
              alt=""
            ></img>
          </div>
          <div className="tw-flex tw-justify-center ">
            <a
              href="/login"
              className="tw-bg-[#FFF6FC]  tw-flex tw-justify-center tw-items-center tw-px-6 tw-py-2 tw-gap-4 tw-rounded-lg  tw-group"
            >
              <p className="tw-font-semibold tw-text-[#BA1986]">
                <Trans>explore_partner</Trans>
              </p>
              <svg
                className="tw-w-8 group-hover:tw-translate-x-2 duration-800 tw-transition"
                viewBox="0 0 30 31"
                fill="#BA1986"
                xmlns="http://www.w3.org/2000/svg"
              >
                {" "}
                <rect
                  opacity="0.3"
                  x="6.25"
                  y="16.75"
                  width="2.5"
                  height="17.5"
                  rx="1"
                  transform="rotate(-90 6.25 16.75)"
                  fill="#BA1986"
                />{" "}
                <path
                  d="M14.1161 22.1161C13.628 22.6043 13.628 23.3957 14.1161 23.8839C14.6043 24.372 15.3957 24.372 15.8839 23.8839L23.3839 16.3839C23.8571 15.9107 23.8737 15.1487 23.4214 14.6553L16.5464 7.15534C16.08 6.64644 15.2892 6.61207 14.7803 7.07856C14.2714 7.54505 14.2371 8.33576 14.7036 8.84466L20.7698 15.4624L14.1161 22.1161Z"
                  fill="#BA1986"
                />{" "}
              </svg>
            </a>
          </div>
        </div>

        <div className="tw-bg-[#FFFBFC] tw-pb-10 lg:tw-pb-0">
          <p
            className="tw-text-2xl -tw-mb-8 tw-text-center tw-font-semibold tw-pt-10 lg:tw-w-2/3
                        lg:tw-hidden tw-mx-6"
          >
            <Trans>share_our_exclusive_gift</Trans>
          </p>
          <div className="tw-grid lg:tw-grid-cols-2 tw-mt-0 lg:tw-mt-28  tw-w-10/12 tw-mx-auto">
            <div className="lg:tw-overflow-y-hidden no-scrollbar">
              <ParallaxProvider>
                <div className="tw-relative tw-pt-12">
                  <div className="tw-absolute tw-top-0 tw-mr-52 lg:tw-mr-0">
                    <Parallax translateY={[500, 0]} speed={15}>
                      <div>
                        <img
                          src={
                            "https://adminv2.goubba.com/image?path=react-web/assets/Frame 6505.webp"
                          }
                          alt=""
                        ></img>
                      </div>
                    </Parallax>
                  </div>
                  <div>
                    <img
                      src={
                        "https://adminv2.goubba.com/image?path=react-web/assets/Group 34456.webp"
                      }
                      alt=""
                    ></img>
                  </div>
                  <div className="tw-absolute tw-top-0 tw-right-0 tw-ml-36 lg:tw-ml-0 tw-mr-0 lg:tw-mr-16">
                    <Parallax translateY={[200, 50]} speed={2}>
                      <div>
                        <img
                          src={
                            "https://adminv2.goubba.com/image?path=react-web/assets/Promo code section.webp"
                          }
                          alt=""
                        ></img>
                      </div>
                    </Parallax>
                  </div>
                </div>
              </ParallaxProvider>
            </div>
            <div className="tw-flex tw-justify-center tw-items-center">
              <div>
                <p className="tw-hidden lg:tw-block tw-text-xl tw-text-center lg:tw-text-left lg:tw-text-5xl lg:tw-leading-[52px] tw-font-medium tw-mb-10 lg:tw-w-2/3">
                  <Trans>share_our_exclusive_gift</Trans>
                </p>
                <div className="tw-flex tw-justify-center lg:tw-justify-start">
                  <a
                    href="https://goubba.app.link/Goubba_App"
                    className="tw-group tw-bg-[#FFF6FC] tw-flex tw-justify-center tw-items-center tw-px-6 tw-py-2 tw-gap-4 tw-rounded-lg "
                  >
                    <p className="tw-font-semibold tw-text-[#BA1986]">
                      <Trans>start_now</Trans>
                    </p>
                    <svg
                      className="tw-w-8 group-hover:tw-translate-x-2 duration-800 tw-transition"
                      viewBox="0 0 30 31"
                      fill="#BA1986"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {" "}
                      <rect
                        opacity="0.3"
                        x="6.25"
                        y="16.75"
                        width="2.5"
                        height="17.5"
                        rx="1"
                        transform="rotate(-90 6.25 16.75)"
                        fill="#BA1986"
                      />{" "}
                      <path
                        d="M14.1161 22.1161C13.628 22.6043 13.628 23.3957 14.1161 23.8839C14.6043 24.372 15.3957 24.372 15.8839 23.8839L23.3839 16.3839C23.8571 15.9107 23.8737 15.1487 23.4214 14.6553L16.5464 7.15534C16.08 6.64644 15.2892 6.61207 14.7803 7.07856C14.2714 7.54505 14.2371 8.33576 14.7036 8.84466L20.7698 15.4624L14.1161 22.1161Z"
                        fill="#BA1986"
                      />{" "}
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="tw-bg-[] tw-pb-10 lg:tw-pb-0">
          <p
            className="tw-text-2xl -tw-mb-8 tw-text-center tw-font-semibold tw-pt-10 lg:tw-w-2/3
                        lg:tw-hidden tw-mx-6"
          >
            <Trans>pay_seamlessly</Trans>
          </p>
          <div className="tw-grid tw-grid-flow-row lg:tw-grid-cols-2  tw-w-10/12 tw-mx-auto">
            <div className="tw-flex tw-justify-center tw-items-center tw-order-3 lg:tw-order-1 ">
              <div>
                <p className="tw-hidden lg:tw-block tw-text-xl tw-text-center lg:tw-text-left lg:tw-text-5xl lg:tw-leading-[52px] tw-font-medium tw-mb-10 lg:tw-w-2/3">
                  <Trans>pay_seamlessly</Trans>
                </p>
                <div className="tw-flex tw-justify-center lg:tw-justify-start">
                  <a
                    href="https://partner.goubba.com"
                    className="tw-group tw-bg-[#FFF6FC] tw-flex tw-justify-center tw-items-center tw-px-6 tw-py-2 tw-gap-4 tw-rounded-lg "
                  >
                    <p className="tw-font-semibold tw-text-[#BA1986]">
                      <Trans>try_it</Trans>
                    </p>
                    <svg
                      className="tw-w-8 group-hover:tw-translate-x-2 tw-duration-800 tw-transition"
                      viewBox="0 0 30 31"
                      fill="#BA1986"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {" "}
                      <rect
                        opacity="0.3"
                        x="6.25"
                        y="16.75"
                        width="2.5"
                        height="17.5"
                        rx="1"
                        transform="rotate(-90 6.25 16.75)"
                        fill="#BA1986"
                      />{" "}
                      <path
                        d="M14.1161 22.1161C13.628 22.6043 13.628 23.3957 14.1161 23.8839C14.6043 24.372 15.3957 24.372 15.8839 23.8839L23.3839 16.3839C23.8571 15.9107 23.8737 15.1487 23.4214 14.6553L16.5464 7.15534C16.08 6.64644 15.2892 6.61207 14.7803 7.07856C14.2714 7.54505 14.2371 8.33576 14.7036 8.84466L20.7698 15.4624L14.1161 22.1161Z"
                        fill="#BA1986"
                      />{" "}
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="tw-overflow-auto no-scrollbar tw-order-2">
              <div className="tw-relative tw-py-12">
                <div>
                  <img
                    src={
                      "https://adminv2.goubba.com/image?path=react-web/assets/Group 34546webp.webp"
                    }
                    alt=""
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="tw-bg-[#FFFBFC]">
          <p
            className="tw-text-2xl -tw-mb-8 tw-text-center tw-font-semibold tw-pt-10 lg:tw-w-2/3
                        lg:tw-hidden tw-mx-6"
          >
            <Trans>top-up_and_transfer</Trans>
          </p>
          <div className="tw-grid tw-grid-flow-row lg:tw-grid-cols-2  tw-w-10/12 tw-mx-auto">
            <div className="lg:tw-overflow-y-hidden no-scrollbar">
              <ParallaxProvider>
                <div className="tw-relative ">
                  <div className="tw-absolute tw-top-0 tw-mr-52 lg:tw-mr-0">
                    <Parallax translateY={[500, 0]} speed={15}>
                      <div>
                        <img
                          src={
                            "https://adminv2.goubba.com/image?path=react-web/assets/Frame 36993.webp"
                          }
                          alt=""
                        ></img>
                      </div>
                    </Parallax>
                  </div>
                  <div>
                    <img
                      src={
                        "https://adminv2.goubba.com/image?path=react-web/assets/Group 34487.webp"
                      }
                      alt=""
                    ></img>
                  </div>
                  <div className="tw-absolute tw-top-0 tw-right-0 tw-ml-36 lg:tw-ml-0 tw-mr-0 lg:tw-mr-16">
                    <Parallax translateY={[200, 50]} speed={2}>
                      <div>
                        <img
                          src={
                            "https://adminv2.goubba.com/image?path=react-web/assets/gift promo - horizontal.webp"
                          }
                          alt=""
                        ></img>
                      </div>
                    </Parallax>
                  </div>
                </div>
              </ParallaxProvider>
            </div>
            <div className="tw-flex tw-items-center">
              <div>
                <p className="tw-hidden lg:tw-block tw-text-xl tw-text-center lg:tw-text-left lg:tw-text-5xl lg:tw-leading-[52px] tw-font-medium tw-mb-10 lg:tw-w-2/3">
                  <Trans>top-up_and_transfer</Trans>
                </p>
                <div className="tw-flex tw-justify-center lg:tw-justify-start">
                  <a
                    href="/login"
                    className="tw-group tw-bg-[#FFF6FC] tw-flex tw-justify-center tw-items-center tw-px-6 tw-py-2 tw-gap-4 tw-rounded-lg "
                  >
                    <p className="tw-font-semibold tw-text-[#BA1986]">
                      <Trans>topup</Trans>
                    </p>
                    <svg
                      className="tw-w-8 group-hover:tw-translate-x-2 duration-800 tw-transition"
                      viewBox="0 0 30 31"
                      fill="#BA1986"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {" "}
                      <rect
                        opacity="0.3"
                        x="6.25"
                        y="16.75"
                        width="2.5"
                        height="17.5"
                        rx="1"
                        transform="rotate(-90 6.25 16.75)"
                        fill="#BA1986"
                      />{" "}
                      <path
                        d="M14.1161 22.1161C13.628 22.6043 13.628 23.3957 14.1161 23.8839C14.6043 24.372 15.3957 24.372 15.8839 23.8839L23.3839 16.3839C23.8571 15.9107 23.8737 15.1487 23.4214 14.6553L16.5464 7.15534C16.08 6.64644 15.2892 6.61207 14.7803 7.07856C14.2714 7.54505 14.2371 8.33576 14.7036 8.84466L20.7698 15.4624L14.1161 22.1161Z"
                        fill="#BA1986"
                      />{" "}
                    </svg>
                  </a>
                </div>
                <div className="tw-py-12">
                  <p className="tw-text-sm tw-text-gray-500">
                    <Trans>we_accept</Trans>:
                  </p>
                  <img src={pay} alt=""></img>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="tw-bg-[] tw-pb-10 lg:tw-pb-0">
          <div className="tw-grid tw-grid-flow-row lg:tw-grid-cols-2  sm:tw-w-10/12 sm:tw-mx-auto">
            <div className="tw-flex tw-order-first tw-mt-8 lg:tw-mt-0 tw-justify-center tw-items-center tw-order-3 lg:tw-order-1 ">
              <div>
                <p className="lg:tw-block tw-text-2xl lg:tw-text-5xl tw-text-center lg:tw-text-left tw-text-3x4 tw-font-medium tw-mb-10 lg:tw-w-2/3">
                  <Trans>huge_flexibility</Trans>
                </p>
                <div className="tw-flex tw-justify-center lg:tw-justify-start">
                  <a href="https://goubba.com/login" className="">
                    {/* GIF here */}
                    <Lottie
                      animationData={GoubbaPro}
                      loop={true}
                      className=""
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="tw-overflow-auto lg:tw-order-2">
              <div className="tw-relative tw-py-0 tw-py-12">
                <div className="tw-bg-white tw-drop-shadow-lg tw-rounded-xl tw-p-2 sm:tw-px-12 sm:tw-py-8 tw-m-4 tw-h-[700px] scroll tw-overflow-x-hidden tw-overflow-scroll tw-scroll-smooth">
                  <div className="tw-mt-20 ">
                    <h3 className="tw-font-bold sm:tw-text-3xl tw-text-sm tw-text-center tw-mt-8">
                      <Trans>features_pro</Trans>
                    </h3>
                    <div className="tw-grid tw-grid-cols-3 tw-gap-x-2 tw-mt-6 sm:tw-text-base tw-text-xs">
                      <div className="tw-col-start-2 tw-col-end-3 tw-bg-[#FFD949] tw-flex tw-justify-center tw-items-center tw-rounded-t-lg">
                        <p className=" tw-font-bold">
                          <Trans>pro</Trans>
                        </p>
                      </div>
                      <div className="tw-bg-gray-200 tw-flex tw-justify-center tw-items-center tw-p-2 tw-rounded-t-lg">
                        <p className="tw-text-gray-500 tw-font-bold	">
                          <Trans>free</Trans>
                        </p>
                      </div>

                      <div>
                        <p className="tw-py-2">
                          <Trans>unlock_partner_discounts</Trans>
                        </p>
                      </div>
                      <div className="tw-flex tw-items-center tw-justify-center tw-bg-[#FFF5CD] tw-py-2">
                        <p>
                          <Trans>yes</Trans>
                        </p>
                      </div>
                      <div className="tw-flex tw-items-center tw-justify-center tw-bg-gray-100 tw-py-2">
                        <p>
                          <Trans>no</Trans>
                        </p>
                      </div>

                      <div>
                        <p className="tw-py-2">
                          <Trans>deposit_bonus</Trans>
                        </p>
                      </div>
                      <div className="tw-flex tw-items-center tw-justify-center tw-bg-[#FFF5CD] tw-py-2">
                        <p>5%</p>
                      </div>
                      <div className="tw-flex tw-items-center tw-justify-center tw-bg-gray-100 tw-py-2">
                        <p>0%</p>
                      </div>

                      <div>
                        <p className="tw-py-2">
                          <Trans>exchange_rate</Trans>
                        </p>
                      </div>
                      <div className="tw-flex tw-items-center tw-justify-center tw-bg-[#FFF5CD] tw-py-2">
                        <p>30%</p>
                      </div>
                      <div className="tw-flex tw-items-center tw-justify-center tw-bg-gray-100 tw-py-2">
                        <p>0%</p>
                      </div>
                    </div>
                  </div>

                  <div className=" tw-mt-20">
                    <h3 className="tw-font-bold sm:tw-text-3xl tw-text-sm tw-text-center">
                      <Trans>payment_fees</Trans>
                    </h3>
                    <p className="tw-font-medium sm:tw-text-lg tw-text-xs tw-mt-8">
                      <Trans>deposit_fees</Trans>
                    </p>
                    <div className="tw-grid tw-grid-cols-3 tw-gap-x-2 tw-mt-4 sm:tw-text-base tw-text-xs">
                      <div className="tw-col-start-2 tw-col-end-3 tw-bg-[#FFD949] tw-flex tw-justify-center tw-items-center tw-rounded-t-lg">
                        <p className=" tw-font-bold	">
                          <Trans>pro</Trans>
                        </p>
                      </div>
                      <div className="tw-bg-gray-200 tw-flex tw-justify-center tw-items-center tw-p-2 tw-rounded-t-lg">
                        <p className="tw-text-gray-500 tw-font-bold	">
                          <Trans>free</Trans>
                        </p>
                      </div>

                      <div>
                        <p className="tw-py-2">
                          <Trans>cib_edahabia</Trans>
                        </p>
                      </div>
                      <div className="tw-flex tw-items-center tw-justify-center tw-bg-[#FFF5CD] tw-py-2">
                        <p>3%</p>
                      </div>
                      <div className="tw-flex tw-items-center tw-justify-center tw-bg-gray-100 tw-py-2">
                        <p>10%</p>
                      </div>

                      <div>
                        <p className="tw-py-2">
                          <Trans>credit_debit_card</Trans>
                        </p>
                      </div>
                      <div className="tw-flex tw-items-center tw-justify-center tw-bg-[#FFF5CD] tw-py-2">
                        <p>4%</p>
                      </div>
                      <div className="tw-flex tw-items-center tw-justify-center tw-bg-gray-100 tw-py-2">
                        <p>10%</p>
                      </div>

                      <div>
                        <p className="tw-py-2">
                          <Trans>bank_transfer</Trans>
                        </p>
                      </div>
                      <div className="tw-flex tw-items-center tw-justify-center tw-bg-[#FFF5CD] tw-py-2">
                        <p>100DA</p>
                      </div>
                      <div className="tw-flex tw-items-center tw-justify-center tw-bg-gray-100 tw-py-2">
                        <p>250DA</p>
                      </div>
                    </div>
                  </div>

                  <div className=" tw-mt-20">
                    <p className="tw-font-medium sm:tw-text-3xl tw-text-sm tw-mt-8">
                      <Trans>purchasing_fees_using</Trans>
                    </p>
                    <div className="tw-grid tw-grid-cols-3 tw-gap-x-2 tw-mt-4 sm:tw-text-base tw-text-xs">
                      <div className="tw-col-start-2 tw-col-end-3 tw-bg-[#FFD949] tw-flex tw-justify-center tw-items-center tw-rounded-t-lg">
                        <p className=" tw-font-bold	">
                          <Trans>pro</Trans>
                        </p>
                      </div>
                      <div className="tw-bg-gray-200 tw-flex tw-justify-center tw-items-center tw-p-2 tw-rounded-t-lg">
                        <p className="tw-text-gray-500 tw-font-bold	">
                          <Trans>free</Trans>
                        </p>
                      </div>

                      <div>
                        <p className="tw-py-2">
                          <Trans>cib_edahabia</Trans>
                        </p>
                      </div>
                      <div className="tw-flex tw-items-center tw-justify-center tw-bg-[#FFF5CD] tw-py-2">
                        <p>0%</p>
                      </div>
                      <div className="tw-flex tw-items-center tw-justify-center tw-bg-gray-100 tw-py-2">
                        <p>6%</p>
                      </div>

                      <div>
                        <p className="tw-py-2">
                          <Trans>credit_debit_card</Trans>
                        </p>
                      </div>
                      <div className="tw-flex tw-items-center tw-justify-center tw-bg-[#FFF5CD] tw-py-2">
                        <p>3%</p>
                      </div>
                      <div className="tw-flex tw-items-center tw-justify-center tw-bg-gray-100 tw-py-2">
                        <p>10%</p>
                      </div>

                      <div>
                        <p className="tw-py-2">
                          <Trans>bank_transfer</Trans>
                        </p>
                      </div>
                      <div className="tw-flex tw-items-center tw-justify-center tw-bg-[#FFF5CD] tw-py-2">
                        <p>4%</p>
                      </div>
                      <div className="tw-flex tw-items-center tw-justify-center tw-bg-gray-100 tw-py-2">
                        <p>10%</p>
                      </div>
                    </div>
                  </div>

                  <div className=" tw-mt-20">
                    <h3 className="tw-font-bold sm:tw-text-3xl tw-text-sm tw-text-center">
                      <Trans>transaction_limit</Trans>
                    </h3>
                    <div className="tw-grid tw-grid-cols-3 tw-gap-x-2 tw-mt-12 sm:tw-text-base tw-text-xs">
                      <div className="tw-col-start-2 tw-col-end-3 tw-bg-[#FFD949] tw-flex tw-justify-center tw-items-center tw-rounded-t-lg">
                        <p className=" tw-font-bold	">
                          <Trans>pro</Trans>
                        </p>
                      </div>
                      <div className="tw-bg-gray-200 tw-flex tw-justify-center tw-items-center tw-p-2 tw-rounded-t-lg">
                        <p className="tw-text-gray-500 tw-font-bold	">
                          <Trans>free</Trans>
                        </p>
                      </div>

                      <div>
                        <p className="tw-py-2">
                          <Trans>deposit_transaction_limit</Trans>
                        </p>
                      </div>
                      <div className="tw-flex tw-items-center tw-justify-center tw-bg-[#FFF5CD] tw-py-2">
                        <p>100,000DA</p>
                      </div>
                      <div className="tw-flex tw-items-center tw-justify-center tw-bg-gray-100 tw-py-2">
                        <p>10,000DA</p>
                      </div>

                      <div>
                        <p className="tw-py-2">
                          <Trans>deposit_limit_month</Trans>
                        </p>
                      </div>
                      <div className="tw-flex tw-items-center tw-justify-center tw-bg-[#FFF5CD] tw-py-2">
                        <p>500,000DA</p>
                      </div>
                      <div className="tw-flex tw-items-center tw-justify-center tw-bg-gray-100 tw-py-2">
                        <p>50,000DA</p>
                      </div>

                      <div>
                        <p className="tw-py-2">
                          <Trans>deposit_limit_day</Trans>
                        </p>
                      </div>
                      <div className="tw-flex tw-items-center tw-justify-center tw-bg-[#FFF5CD] tw-py-2">
                        <p>
                          <Trans>unlimited</Trans>
                        </p>
                      </div>
                      <div className="tw-flex tw-items-center tw-justify-center tw-bg-gray-100 tw-py-2">
                        <p>10,000DA</p>
                      </div>

                      <div>
                        <p className="tw-py-2">
                          <Trans>daily_spending_limit</Trans>
                        </p>
                      </div>
                      <div className="tw-flex tw-items-center tw-justify-center tw-bg-[#FFF5CD] tw-py-2">
                        <p>
                          <Trans>unlimited</Trans>
                        </p>
                      </div>
                      <div className="tw-flex tw-items-center tw-justify-center tw-bg-gray-100 tw-py-2">
                        <p>10,000DA</p>
                      </div>

                      <div>
                        <p className="tw-py-2">
                          <Trans>monthly_spending_limit</Trans>
                        </p>
                      </div>
                      <div className="tw-flex tw-items-center tw-justify-center tw-bg-[#FFF5CD] tw-py-2">
                        <p>300,000DA</p>
                      </div>
                      <div className="tw-flex tw-items-center tw-justify-center tw-bg-gray-100 tw-py-2">
                        <p>100,000DA</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="retropurple-background tw-h-[80vh] tw-flex tw-justify-center tw-items-center lg:tw-mx-12 lg:tw-mb-12 lg:tw-rounded-xl tw-py-20 lg:tw-py-44">
          <div>
            <h1 className=" tw-text-center tw-text-[#700F50] tw-font-bold lg:tw-leading-[80px] tw-text-4xl lg:tw-text-[96px] ">
              <Trans>join_as_partner</Trans>
            </h1>
            <div className="tw-flex tw-justify-center tw-mt-12 lg:tw-mt-24">
              <NavLink
                to="./business"
                onClick={scrollToTop}
                className="tw-group tw-bg-white tw-bg-opacity-20 backdrop-blur-lg    
                      tw-flex tw-justify-center tw-items-center tw-px-16 tw-py-2 tw-gap-4 tw-rounded-lg"
              >
                <p className="tw-font-semibold tw-text-[#700F50]">
                  <Trans>try_it</Trans>
                </p>
                <svg
                  className="tw-w-8 group-hover:tw-translate-x-2 tw-duration-800 tw-transition"
                  viewBox="0 0 30 31"
                  fill="#700F50"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {" "}
                  <rect
                    opacity="0.3"
                    x="6.25"
                    y="16.75"
                    width="2.5"
                    height="17.5"
                    rx="1"
                    transform="rotate(-90 6.25 16.75)"
                    fill="#700F50"
                  />{" "}
                  <path
                    d="M14.1161 22.1161C13.628 22.6043 13.628 23.3957 14.1161 23.8839C14.6043 24.372 15.3957 24.372 15.8839 23.8839L23.3839 16.3839C23.8571 15.9107 23.8737 15.1487 23.4214 14.6553L16.5464 7.15534C16.08 6.64644 15.2892 6.61207 14.7803 7.07856C14.2714 7.54505 14.2371 8.33576 14.7036 8.84466L20.7698 15.4624L14.1161 22.1161Z"
                    fill="#700F50"
                  />{" "}
                </svg>
              </NavLink>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
