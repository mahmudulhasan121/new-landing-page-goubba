import "./App.css";
import Lottie from "lottie-react";
import WelcomeMemeberShip from "./WelcomeMemebership.js";
import { useTranslation, Trans } from "react-i18next";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
function App() {
  const userPack =
    "https://adminv2.goubba.com/image?path=react-web/assets/userpack.webp";
  const numbers = [1];

  return (
    <div className="tw-bg-[#FFF6FC]">
      <div className="tw-h-40"></div>
      <div className="tw-flex tw-flex-col tw-items-center tw-gap-4">
        <h3 className="tw-text-3xl md:tw-text-7xl tw-font-bold tw-text-center">
          <Trans>welcome_membership</Trans> <br /> Membership Program
        </h3>
        <p className="tw-text-center tw-text-xl lg:tw-text-2xl tw-font-light tw-text-center">
          <Trans>optimal_solution</Trans>
        </p>
      </div>
      <div>
        <img className="tw-w-full" src={userPack}></img>
      </div>
      <div className="tw-max-w-7xl tw-mx-auto ">
        <div className=" tw-space-y-6">
          <div className="tw-grid tw-grid-flow-row md:tw-grid-cols-2 tw-pb-12">
            <h1
              className="md:tw-hidden tw-text-black tw-font-bold tw-text-center md:tw-text-left tw-mx-4 md:tw-mx-0
                                    tw-text-3xl md:tw-text-3xl lg:tw-text-5xl tw-mb-6 md:tw-w-1/2"
            >
              <Trans>more_flexibility_mmb</Trans>
            </h1>
            <div className="tw-flex tw-justify-center md:tw-justify-start tw-mx-8 md:tw-mx-0">
              <img
                className=""
                src="https://adminv2.goubba.com/image?path=react-web/assets/membershipUione.png"
                alt=""
              ></img>
            </div>
            <div className="tw-flex tw-items-center tw-justify-center md:tw-w-10/12">
              <div className="">
                <h1
                  className="tw-hidden md:tw-flex tw-text-black tw-font-bold tw-text-center md:tw-text-left tw-mx-4 md:tw-mx-0
                                            tw-text-3xl md:tw-text-3xl lg:tw-text-5xl tw-mb-6 md:tw-w-1/2"
                >
                  <Trans>more_flexibility_mmb</Trans>
                </h1>
                <p className="tw-mx-6 md:tw-mx-0 tw-text-xl tw-text-center md:tw-text-left tw-mt-6 md:tw-mt-0">
                  <Trans>more_flexibility_mmb_txt</Trans>
                </p>
                <div className="tw-mt-6 tw-flex tw-justify-center md:tw-justify-start">
                  <a
                    href="https://corporate.goubba.com/login"
                    className="tw-rounded-lg hover:tw-bg-[#c92093] tw-bg-[#BA1986] tw-text-white tw-text-xl tw-py-2 tw-px-6"
                  >
                    <Trans>unlock_now</Trans>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="tw-grid tw-grid-flow-row md:tw-grid-cols-2 tw-pb-12">
            <h1
              className="md:tw-hidden tw-text-black tw-font-bold tw-text-center md:tw-text-left tw-mx-4 md:tw-mx-0
                                    tw-text-3xl md:tw-text-3xl lg:tw-text-5xl tw-mb-6 md:tw-w-1/2"
            >
              <Trans>exclusive_discounts_mmb</Trans>
            </h1>
            <div className="tw-flex tw-justify-center md:tw-justify-start tw-mx-8 md:tw-mx-0 md:tw-order-2">
              <img
                className=""
                src="https://adminv2.goubba.com/image?path=react-web/assets/membershipUitwo.png"
                alt=""
              ></img>
            </div>
            <div className="tw-flex tw-items-center md:tw-w-10/12">
              <div className="">
                <h1
                  className="tw-hidden md:tw-flex tw-text-black tw-font-bold tw-text-center md:tw-text-left tw-mx-4 md:tw-mx-0
                                            tw-text-3xl md:tw-text-3xl lg:tw-text-5xl tw-mb-6 md:tw-w-1/2"
                >
                  <Trans>exclusive_discounts_mmb</Trans>
                </h1>
                <p className="tw-mx-6 md:tw-mx-0 tw-text-xl tw-text-center md:tw-text-left tw-mt-6 md:tw-mt-0">
                  <Trans>exclusive_discounts_mmb_txt</Trans>
                </p>
                <div className="tw-mt-6 tw-flex tw-justify-center md:tw-justify-start">
                  <a
                    href="https://corporate.goubba.com/login"
                    className="hover:tw-bg-[#c92093] tw-rounded-lg tw-bg-[#BA1986] tw-text-white tw-text-xl tw-py-2 tw-px-6"
                  >
                    <Trans>check_details</Trans>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="tw-grid tw-grid-flow-row md:tw-grid-cols-2 tw-pb-12">
            <h1
              className="md:tw-hidden tw-text-black tw-font-bold tw-text-center md:tw-text-left tw-mx-4 md:tw-mx-0
                                    tw-text-3xl md:tw-text-3xl lg:tw-text-5xl tw-mb-6 md:tw-w-11/12"
            >
              <Trans>pay_seamlessly_mmb</Trans>
            </h1>
            <div className="tw-flex tw-justify-center md:tw-justify-start tw-mx-8 md:tw-mx-0">
              <img
                className=""
                src="https://adminv2.goubba.com/image?path=react-web/assets/membershipUithree.png"
                alt=""
              ></img>
            </div>
            <div className="tw-flex tw-items-center md:tw-w-10/12">
              <div className="">
                <h1
                  className="tw-hidden md:tw-flex tw-text-black tw-font-bold tw-text-center md:tw-text-left tw-mx-4 md:tw-mx-0
                                            tw-text-3xl md:tw-text-3xl lg:tw-text-5xl tw-mb-6 md:tw-w-3/4"
                >
                  <Trans>pay_seamlessly_mmb</Trans>
                </h1>
                <p className="tw-mx-6 md:tw-mx-0 tw-text-xl tw-text-center md:tw-text-left tw-mt-6 md:tw-mt-0">
                  <Trans>pay_seamlessly_mmb_txt</Trans>
                </p>
                <div className="tw-mt-6 tw-flex tw-justify-center md:tw-justify-start">
                  <a
                    href="https://corporate.goubba.com/login"
                    className=" tw-rounded-lg tw-bg-[#BA1986] hover:tw-bg-[#c92093] tw-text-white tw-text-xl tw-py-2 tw-px-6"
                  >
                    <Trans>unlock_now</Trans>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="tw-grid tw-grid-flow-row md:tw-grid-cols-2 tw-pb-12">
            <h1
              className="md:tw-hidden tw-text-black tw-font-bold tw-text-center md:tw-text-left tw-mx-4 md:tw-mx-0
                                    tw-text-3xl md:tw-text-3xl lg:tw-text-5xl tw-mb-6 md:tw-w-1/2"
            >
              <Trans>lower_fees_mmb</Trans>
            </h1>
            <div className="tw-flex tw-justify-center md:tw-justify-start tw-mx-8 md:tw-mx-0 md:tw-order-2">
              <img
                className=""
                src="https://adminv2.goubba.com/image?path=react-web/assets/membershipUifour.png"
                alt=""
              ></img>
            </div>
            <div className="tw-flex tw-items-center md:tw-w-10/12">
              <div className="">
                <h1
                  className="tw-hidden md:tw-flex tw-text-black tw-font-bold tw-text-center md:tw-text-left tw-mx-4 md:tw-mx-0
                                            tw-text-3xl md:tw-text-3xl lg:tw-text-5xl tw-mb-6 md:tw-w-11/12"
                >
                  <Trans>lower_fees_mmb</Trans>
                </h1>
                <p className="tw-mx-6 md:tw-mx-0 tw-text-xl tw-text-center md:tw-text-left tw-mt-6 md:tw-mt-0">
                  <Trans>lower_fees_mmb_txt</Trans>
                </p>
                <div className="tw-mt-6 tw-flex tw-justify-center md:tw-justify-start">
                  <a
                    href="https://corporate.goubba.com/login"
                    className=" tw-rounded-lg hover:tw-bg-[#c92093] tw-bg-[#BA1986] tw-text-white tw-text-xl tw-py-2 tw-px-6"
                  >
                    <Trans>check_details</Trans>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tw-mb-0 tw-relative">
        <img
          className="tw-w-full"
          src="https://adminv2.goubba.com/image?path=react-web/assets/unlockFeatures.webp"
        ></img>
        <div className="tw-w-full tw-mb-[2%] lg:tw-mb-[5%] tw-absolute tw-bottom-0 tw-flex tw-justify-center tw-items-start">
          <a
            href="https://corporate.goubba.com/login"
            className="tw-rounded-lg hover:tw-bg-[#c92093] tw-bg-[#BA1986] tw-text-white tw-text-xl tw-py-2 tw-px-6"
          >
            <Trans>unlock_now</Trans>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
