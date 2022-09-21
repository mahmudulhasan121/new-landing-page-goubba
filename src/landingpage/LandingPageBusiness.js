//import LandingPagePersonal from './landingpage/LandingPagePersonal'
import footland from "../assets/footland.png";
import cazanimo from "../assets/cazanimo.png";
import camper from "../assets/camper.png";
import techno from "../assets/techno.png";
import sketchers from "../assets/sketchers.png";

import publishB from "../assets/publishB.png";
import checkB from "../assets/checkB.png";
import newCardB from "../assets/newCardB.png";

import "./App.css";

import Lottie from "lottie-react";
import textEn from "../assets/textEn.json";

function App() {
  return (
    <div className="bg-[#4A0A36] lg:px-8 lg:py-8 w-full">
      <div className=" md:pt-0 md:p-0 w-full md:mx-auto rounded-xl ">
        <div className="retropurple-background  flex justify-center  lg:rounded-t-xl py-12">
          <div>
            <Lottie animationData={textEn} loop={true} className="mx-4" />
            <div className="flex justify-center mt-12 md:mt-24">
              <a
                href="https://partner.goubba.com"
                className="group bg-white bg-opacity-30 backdrop-blur-lg  
                            flex justify-center items-center px-16 py-2 gap-4 rounded-lg text-[#700F50]"
              >
                <p className="font-semibold">Try it</p>
                <svg
                  className="w-8 group-hover:translate-x-2 duration-800 transition"
                  viewBox="0 0 30 31"
                  fill="#700F50"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    opacity="0.3"
                    x="6.25"
                    y="16.75"
                    width="2.5"
                    height="17.5"
                    rx="1"
                    transform="rotate(-90 6.25 16.75)"
                    fill="#700F50"
                  />
                  <path
                    d="M14.1161 22.1161C13.628 22.6043 13.628 23.3957 14.1161 23.8839C14.6043 24.372 15.3957 24.372 15.8839 23.8839L23.3839 16.3839C23.8571 15.9107 23.8737 15.1487 23.4214 14.6553L16.5464 7.15534C16.08 6.64644 15.2892 6.61207 14.7803 7.07856C14.2714 7.54505 14.2371 8.33576 14.7036 8.84466L20.7698 15.4624L14.1161 22.1161Z"
                    fill="#700F50"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="bg-white py-12 lg:py-24 px-2">
          <h2 className="text-center text-4xl w-10/12 mx-auto md:text-5xl font-medium text-[#4A0A36]">
            Brands that trust Goubba
          </h2>
          <div className="flex lg:hidden w-full lg:w-11/12 mx-auto overflow-auto no-scrollbar">
            <img className="w-52 " src={cazanimo}></img>
            <img className="w-52" src={techno}></img>
            <img className="w-52" src={footland}></img>
            <img className="w-52" src={sketchers}></img>
            <img className="w-52" src={camper}></img>
          </div>
          <div className="hidden lg:flex justify-center">
            <img className="w-52 " src={cazanimo}></img>
            <img className="w-52" src={techno}></img>
            <img className="w-52" src={footland}></img>
            <img className="w-52" src={sketchers}></img>
            <img className="w-52" src={camper}></img>
          </div>
        </div>
        <div className="bg-[#FFEBDD] rounded-b-xl pt-16 pb-4 lg:pb-12">
          <h2 className="text-center w-4/5 mx-auto text-4xl md:text-5xl font-medium text-[#4A0A36]">
            Join now and boost your brand visibility & sales
          </h2>
          <div className="retroB-background mx-4 md:mx-12 mt-12 rounded-xl">
            <div
              className="grid grid-rows-5 md:grid-rows-none 
                                    lg:grid-cols-3 xl:grid-cols-5  
                                    gap-8 py-16 px-16 md:px-8"
            >
              <div className="">
                <h1 className="font-bold text-5xl md:text-6xl text-[#380828] mb-4">
                  +5M
                </h1>
                <p className="font-light text-2xl md:text-3xl text-[#700F50] md:w-2/3 lg:w-10/12">
                  Total active users
                </p>
              </div>
              <div className="">
                <h1 className="font-bold text-5xl md:text-6xl text-[#380828] mb-4">
                  +7M
                </h1>
                <p className="font-light text-2xl md:text-3xl text-[#700F50] md:w-2/3 lg:w-10/12 ">
                  Total codes and Gift cards used
                </p>
              </div>
              <div className="">
                <h1 className="font-bold text-5xl md:text-6xl text-[#380828] mb-4">
                  +120k
                </h1>
                <p className="font-light text-2xl md:text-3xl text-[#700F50] md:w-2/3 lg:w-10/12">
                  Daily active users
                </p>
              </div>
              <div className="">
                <h1 className="font-bold text-5xl md:text-6xl text-[#380828] mb-4">
                  25%
                </h1>
                <p className="font-light text-2xl md:text-3xl text-[#700F50] md:w-2/3 lg:w-10/12">
                  Higher conversion rate
                </p>
              </div>
              <div className="">
                <h1 className="font-bold text-5xl md:text-6xl text-[#380828] mb-4">
                  28Min
                </h1>
                <p className="font-light text-2xl md:text-3xl text-[#700F50] md:w-2/3 lg:w-10/12">
                  average time spent
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-flow-row md:grid-cols-3 mt-24 md:mt-0 px-6 mb-12 ">
        <div className="flex items-center justify-center md:pl-24 w-11/12 mb-6 mx-auto">
          <p className="text-white font-medium text-center md:text-left text-3xl md:text-4xl lg:text-7xl z-20">
            Create Gift Cards
          </p>
        </div>
        <div className="flex justify-center md:col-span-2">
          <img src={newCardB}></img>
        </div>
      </div>
      <div className="grid grid-flow-row md:grid-cols-3 mt-16 md:mt-0 px-6 mb-12">
        <div className="flex items-center justify-center  order-1 sm:order-3 w-11/12 mb-6 mx-auto">
          <p className="text-white font-medium text-center md:mr-16 md:text-right md:text-4xl lg:text-7xl z-20">
            Publish deals and offers
          </p>
        </div>
        <div className="flex justify-center md:col-span-2 order-2">
          <img src={publishB}></img>
        </div>
      </div>
      <div className="grid grid-flow-row md:grid-cols-3 mt-16 md:mt-0 px-6 mb-12">
        <div className="flex items-center justify-center md:pl-24 w-11/12 mb-6 mx-auto">
          <p className="text-white font-medium text-center md:text-left md:text-4xl lg:text-7xl z-20">
            Integrate Goubba Checkout
          </p>
        </div>
        <div className="flex justify-center md:col-span-2">
          <img src={checkB}></img>
        </div>
      </div>
      <div className="retropurple-background  flex justify-center lg:my-16 py-24 md:py-44 mx-auto lg:rounded-xl ">
        <div>
          <h1 className="text-[#700F50] font-bold md:leading-[80px] leading-10 text-4xl md:text-[96px] text-center">
            Join as a Partner!
          </h1>
          <div>
            <div className="flex justify-center mt-24">
              <a
                href="https://partner.goubba.com"
                className="group bg-white bg-opacity-20 backdrop-blur-lg    
                      flex justify-center items-center px-16 py-2 gap-4 rounded-lg text-[#700F50]"
              >
                <p className="font-semibold">Join now</p>
                <svg
                  className="w-8 group-hover:translate-x-2 duration-800 transition"
                  viewBox="0 0 30 31"
                  fill="#700F50"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    opacity="0.3"
                    x="6.25"
                    y="16.75"
                    width="2.5"
                    height="17.5"
                    rx="1"
                    transform="rotate(-90 6.25 16.75)"
                    fill="#700F50"
                  />
                  <path
                    d="M14.1161 22.1161C13.628 22.6043 13.628 23.3957 14.1161 23.8839C14.6043 24.372 15.3957 24.372 15.8839 23.8839L23.3839 16.3839C23.8571 15.9107 23.8737 15.1487 23.4214 14.6553L16.5464 7.15534C16.08 6.64644 15.2892 6.61207 14.7803 7.07856C14.2714 7.54505 14.2371 8.33576 14.7036 8.84466L20.7698 15.4624L14.1161 22.1161Z"
                    fill="#700F50"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
