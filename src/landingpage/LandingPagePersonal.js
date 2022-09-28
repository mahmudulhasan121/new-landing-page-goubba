import "./App.css";
import { Parallax } from "react-scroll-parallax";
import { ParallaxProvider } from "react-scroll-parallax";

import { NavLink } from "react-router-dom";

const cazanimoC =
  "https://adminv2.goubba.com/image?path=react-web/assets/cazanimoC.png";
const camperC =
  "https://adminv2.goubba.com/image?path=react-web/assets/camperC.png";
const technoC =
  "https://adminv2.goubba.com/image?path=react-web/assets/technoC.png";
const footlandC =
  "https://adminv2.goubba.com/image?path=react-web/assets/footlandC.png";
const scechersC =
  "https://adminv2.goubba.com/image?path=react-web/assets/scechersC.png";
const profootC =
  "https://adminv2.goubba.com/image?path=react-web/assets/profootC.png";

const WATCHCENTERC =
  "https://adminv2.goubba.com/image?path=react-web/assets/hero section gift cards/WATCH CENTER.png";
const CLARKSC =
  "https://adminv2.goubba.com/image?path=react-web/assets/hero section gift cards/CLARKS.png";
const DOJUC =
  "https://adminv2.goubba.com/image?path=react-web/assets/hero section gift cards/Dojo.png";
const EDENPARKC =
  "https://adminv2.goubba.com/image?path=react-web/assets/hero section gift cards/EDEN PARK.png";
const CASIOC =
  "https://adminv2.goubba.com/image?path=react-web/assets/hero section gift cards/CASIO.png";
const sneaksaC =
  "https://adminv2.goubba.com/image?path=react-web/assets/hero section gift cards/sneaksa.png";

const xbox =
  "https://adminv2.goubba.com/image?path=react-web/assets/international cards/xbox.png";
const Fornite =
  "https://adminv2.goubba.com/image?path=react-web/assets/hero section gift cards/Fornite.png";
const LeageofLegends =
  "https://adminv2.goubba.com/image?path=react-web/assets/hero section gift cards/Leage of Legends.png";
const Itunes =
  "https://adminv2.goubba.com/image?path=react-web/assets/hero section gift cards/Itunes.png";

const pay =
  "https://adminv2.goubba.com/image?path=react-web/assets/paymentAccepted.png";
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
      <div className="flex relative justify-center background-paralax-mobile ">
        <div className="gap-4 h-[500px] over">
          <div className="mt-28 overflow-y-hidden ">
            <Parallax className="" translateY={[60, -60]} speed={15}>
              <div className="flex gap-4">
                <img src={ "https://adminv2.goubba.com/image?path=react-web/assets/international cards/Freefire.png" } 
                className="w-24 h-32 rounded-lg" alt="" />
                <img src={ "https://adminv2.goubba.com/image?path=react-web/assets/international%20cards/Amazon-1.png" } 
                className="w-24 h-32 rounded-lg" alt="" />
              </div>
            </Parallax>
            <Parallax className="" translateY={[60, -60]} speed={15}>
              <div className="flex gap-4">
                <img src={Itunes} className="w-24 h-32 rounded-lg " alt="" />
                <img src={LeageofLegends} className="w-24 h-32 rounded-lg " alt="" />
              </div>
            </Parallax>
            <Parallax className="" translateY={[60, -60]} speed={15}>
              <div className="flex gap-4">
                <img src={Fornite} className="w-24 h-32 rounded-lg " alt="" />
                <img src={xbox} className="w-24 h-32 rounded-lg " alt="" />
              </div>
            </Parallax>
          </div>
        </div>

        <div className="flex w-full justify-between z-40 absolute bottom-0 ">
          <Parallax
            translateY={[300, -800]}
            translateX={[30, -100]}
            scale={[0.7, 2]}
            speed={12} >
            <img
              src={CLARKSC}
              className="w-36 h-48 rounded-lg"
              id="bigLeft"
              alt="" />
          </Parallax>
          <Parallax
            translateY={[300, -800]}
            translateX={[-30, 100]}
            scale={[0.7, 2]}
            speed={12}
          >
            <img src={CASIOC} className="w-36 h-48 rounded-lg " alt="" />
          </Parallax>
        </div>

        <div className="flex w-full justify-between z-30 absolute bottom-0">
          <Parallax
            translateY={[350, -800]}
            translateX={[80, -100]}
            scale={[0.7, 2]}
            speed={10}
          >
            <img
              src={EDENPARKC}
              className="flex w-32 h-40 rounded-lg "
              alt=""
            />
          </Parallax>
          <Parallax
            translateY={[350, -800]}
            translateX={[-80, 100]}
            scale={[0.7, 2]}
            speed={10}
          >
            <img src={WATCHCENTERC} className="w-32 h-40 rounded-lg  " alt="" />
          </Parallax>
        </div>

        <div className="flex w-full justify-between z-20 absolute bottom-0">
          <Parallax
            translateY={[400, -800]}
            translateX={[140, -20]}
            scale={[0.7, 2]}
            speed={5}
          >
            <img src={DOJUC} className="flex w-24 h-32 rounded-lg b" alt="" />
          </Parallax>
          <Parallax
            translateY={[400, -800]}
            translateX={[-140, 20]}
            scale={[0.7, 2]}
            speed={5}
          >
            <img src={sneaksaC} className="w-24 h-32 rounded-lg b " alt="" />
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
      <div className="flex relative justify-center background-paralax-mobile no-scrollbar  overflow-x-hidden overflow-y-hidden">
        <div className="gap-4 h-[600px] over">
          <div className="mt-32 overflow-y-hidden ">
            <Parallax className="" translateY={[60, -60]} speed={15}>
              <div className="flex gap-4">
                <img src={ "https://adminv2.goubba.com/image?path=react-web/assets/international cards/Freefire.png" } 
                  className="w-28 rounded-lg" alt="" />
                <img
                  src={
                    "https://adminv2.goubba.com/image?path=react-web/assets/international%20cards/Amazon-1.png"
                  }
                  className="w-28  rounded-lg"
                  alt=""
                />
              </div>
            </Parallax>
            <Parallax className="" translateY={[60, -60]} speed={15}>
              <div className="flex gap-4">
                <img src={Itunes} className="w-28  rounded-lg " alt="" />
                <img
                  src={LeageofLegends}
                  className="w-28  rounded-lg "
                  alt=""
                />
              </div>
            </Parallax>
            <Parallax className="" translateY={[60, -60]} speed={15}>
              <div className="flex gap-4">
                <img src={Fornite} className="w-28  rounded-lg " alt="" />
                <img src={xbox} className="w-28  rounded-lg " alt="" />
              </div>
            </Parallax>
          </div>
        </div>

        <div className="flex w-full justify-between z-40 absolute bottom-0 ">
          <Parallax
            translateY={[300, -800]}
            translateX={[100, -50]}
            scale={[0.7, 2]}
            speed={12}
          >
            <img src={CLARKSC} className="w-[185px] rounded-lg " alt="" />
          </Parallax>
          <Parallax
            translateY={[300, -800]}
            translateX={[-100, 50]}
            scale={[0.7, 2]}
            speed={12} >
            <img src={CASIOC} className="w-[185px] rounded-lg " alt="" />
          </Parallax>
        </div>

        <div className="flex w-full justify-between z-30 absolute bottom-0">
          <Parallax
            translateY={[300, -600]}
            translateX={[150, -0]}
            scale={[0.7, 2]}
            speed={10} >
            <img src={EDENPARKC} className="flex w-40 h-48 rounded-lg " alt="" />
          </Parallax>
          <Parallax
            translateY={[300, -600]}
            translateX={[-150, 0]}
            scale={[0.7, 2]}
            speed={10} >
            <img src={WATCHCENTERC} className="w-40 h-48 rounded-lg " alt="" />
          </Parallax>
        </div>

        <div className="flex w-full justify-between z-20 absolute bottom-0">
          <Parallax
            translateY={[300, -400]}
            translateX={[300, 0]}
            scale={[0.7, 2]}
            speed={5} >
            <img src={DOJUC} className="flex w-32 h-40 rounded-lg " alt="" />
          </Parallax>
          <Parallax
            translateY={[300, -400]}
            translateX={[-300, 0]}
            scale={[0.7, 2]}
            speed={5} >
            <img src={sneaksaC} className="w-32 h-40 rounded-lg  " alt="" />
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
      <div className="flex relative justify-center background-paralax-mobile no-scrollbar ">
        <div className="gap-4 h-[700px] over">
          <div className="mt-36 overflow-hidden no-scrollbar ">
            <Parallax className="" translateY={[30, -50]} speed={15}>
              <div className="flex gap-4">
                <img src={ "https://adminv2.goubba.com/image?path=react-web/assets/international cards/Freefire.png" } 
                  className="w-[135px]  rounded-lg" alt="" />
                <img src={ "https://adminv2.goubba.com/image?path=react-web/assets/international%20cards/Amazon-1.png" } 
                className="w-[135px]  rounded-lg " alt="" />
              </div>
            </Parallax>
            <Parallax className="" translateY={[30, -50]} speed={15}>
              <div className="flex gap-4">
                <img src={Itunes} className="w-[135px]  rounded-lg " alt="" />
                <img
                  src={LeageofLegends}
                  className="w-[135px]  rounded-lg "
                  alt=""
                />
              </div>
            </Parallax>
            <Parallax className="" translateY={[30, -50]} speed={15}>
              <div className="flex gap-4">
                <img src={Fornite} className="w-[135px]  rounded-lg " alt="" />
                <img src={xbox} className="w-[135px]  rounded-lg " alt="" />
              </div>
            </Parallax>
          </div>
        </div>

        <div className="flex w-full justify-between z-40 absolute bottom-0 ">
          <Parallax
            translateY={[0, -800]}
            translateX={[20, -200]}
            scale={[0.9, 2]}
            speed={12} >
            <img src={CLARKSC} className="w-52  rounded-lg " id="bigLeft" alt="" />
          </Parallax>
          <Parallax
            translateY={[0, -800]}
            translateX={[-20, 200]}
            scale={[0.9, 2]}
            speed={12} >
            <img src={CASIOC} className="w-52  rounded-lg " alt="" />
          </Parallax>
        </div>

        <div className="flex w-full justify-between z-30 absolute bottom-0">
          <Parallax
            translateY={[0, -800]}
            translateX={[100, -150]}
            scale={[0.9, 2]}
            speed={10} >
            <img src={EDENPARKC} className="flex w-40  rounded-lg " alt="" />
          </Parallax>
          <Parallax
            translateY={[0, -800]}
            translateX={[-100, 150]}
            scale={[0.9, 2]}
            speed={10} >
            <img src={WATCHCENTERC} className="w-40  rounded-lg  " alt="" />
          </Parallax>
        </div>

        <div className="flex w-full justify-between z-20 absolute bottom-0">
          <Parallax
            translateY={[0, -700]}
            translateX={[150, 50]}
            scale={[1.1, 2]}
            speed={5} >
            <img src={DOJUC} className="flex w-32  rounded-lg " alt="" />
          </Parallax>
          <Parallax
            translateY={[0, -800]}
            translateX={[-220, 75]}
            scale={[1.1, 2]}
            speed={5} >
            <img src={sneaksaC} className="w-32  rounded-lg " alt="" />
          </Parallax>
        </div>
      </div>
    </ParallaxProvider>
  );
}
function ParallaxCards() {
  return (
    <ParallaxProvider>
      <div className="flex relative justify-center pt-2 background-paralax  ">
        <div className="gap-4 h-[800px]">
          <div className="mt-28  no-scrollbar overflow-y-hidden">
            <Parallax className="" translateY={[40, -50]} speed={15}>
              <div className="flex gap-3">
                <img
                  src={
                    "https://adminv2.goubba.com/image?path=react-web/assets/international cards/Freefire.png"
                  }
                  className="w-[185px] rounded-lg"
                  alt=""
                />
                <img
                  src={
                    "https://adminv2.goubba.com/image?path=react-web/assets/international%20cards/Amazon-1.png"
                  }
                  className="w-[185px] rounded-lg "
                  alt=""
                />
              </div>
            </Parallax>
            <Parallax className="" translateY={[30, -50]} speed={15}>
              <div className="flex gap-4">
                <img src={Itunes} className="w-[185px] rounded-lg" alt="" />
                <img
                  src={LeageofLegends}
                  className="w-[185px] rounded-lg"
                  alt=""
                />
              </div>
            </Parallax>
            <Parallax className="" translateY={[30, -50]} speed={15}>
              <div className="flex gap-4">
                <img src={Fornite} className="w-[185px] rounded-lg " alt="" />
                <img src={xbox} className="w-[185px] rounded-lg " alt="" />
              </div>
            </Parallax>
          </div>
        </div>

        <div className="flex w-full justify-between z-40 absolute bottom-0">
          <Parallax
            translateY={[50, -600]}
            translateX={[150, -800]}
            scale={[1, 1.4]}
            speed={12}
          >
            <img
              src={CLARKSC}
              className="w-72 h-96 rounded-lg"
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
            <img src={CASIOC} className="w-72 h-96 rounded-lg " alt="" />
          </Parallax>
        </div>

        <div className="flex w-full justify-between z-30 absolute  bottom-0">
          <Parallax
            translateY={[0, -400]}
            translateX={[150, -500]}
            scale={[1, 1.4]}
            speed={10}
          >
            <img src={EDENPARKC} className="flex w-64 h-80 rounded-lg" alt="" />
          </Parallax>
          <Parallax
            translateY={[0, -400]}
            translateX={[-150, 500]}
            scale={[1, 1.4]}
            speed={10}
          >
            <img src={WATCHCENTERC} className="w-64 h-80 rounded-lg " alt="" />
          </Parallax>
        </div>

        <div className="flex w-full justify-between z-10 absolute  bottom-0">
          <Parallax
            translateY={[0, -200]}
            translateX={[220, -300]}
            scale={[1, 2]}
            speed={8}
          >
            <img src={DOJUC} className="flex w-52 h-64 rounded-lg " alt="" />
          </Parallax>
          <Parallax
            translateY={[0, -200]}
            translateX={[-220, 300]}
            scale={[1, 2]}
            speed={8}
          >
            <img src={sneaksaC} className="w-52 h-64 rounded-lg " alt="" />
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
    <div className="flex gap-4 justify-center items-center my-4">
      {navigator.userAgent.indexOf("HUAWEI") !== -1 ? (
        <a href="https://appgallery.huawei.com/app/C105229305" 
        className="flex justify-center items-center text-left px-2 " >
          <img src={HUAWEI} alt=""></img>
        </a>
      ) : navigator.userAgent.indexOf("like Mac") !== -1 ? (
        <a href="https://apps.apple.com/us/app/goubba-cashback-codes-promo/id1519941116" 
        className="flex justify-center items-center  " >
          <img src={ios} alt=""></img>
        </a>
      ) : navigator.userAgent.indexOf("Android") !== -1 ? (
        <a href="https://goubba.app.link/Goubba_App" 
        className="flex justify-center" >
          <img src={googlePlay} alt=""></img>
        </a>
      ) : (
        <div className="flex gap-4 justify-center items-center">
          <a href="https://goubba.app.link/Goubba_App" 
          className="flex justify-center" >
            <img src={googlePlay} alt=""></img>
          </a>
          <a href="https://apps.apple.com/us/app/goubba-cashback-codes-promo/id1519941116" 
          className="flex justify-center items-center  " >
            <img src={ios} alt=""></img>
          </a>
          <a href="https://appgallery.huawei.com/app/C105229305" 
          className="flex justify-center items-center text-left px-2 " >
            <img src={HUAWEI} alt=""></img>
          </a>
        </div>
      )}
    </div>
  );
}
function App() {
  return (
    <div>
      <main className="">
        <div className="lg:mx-10 bg-[#FFF6FC] rounded-xl pt-12 lg:pt-20 no-scrollbar no-scrollbar overflow-x-auto overflow-y-hidden">
          <div className="text-center text-[#021E27] lg:w-3/4 mx-auto">
            <h1 className="mx-8 lg:mx-0 text-4xl lg:text-[64px] 3xl:text-[72px] font-bold lg:leading-[80px]">
              Save money and pay seamlessly with Goubba super wallet
            </h1>
            <DownloadButtons></DownloadButtons>
            <div>
              <div className="hidden 2xl:block">
                <ParallaxCards />
              </div>
              <div className="hidden lg:block 2xl:hidden">
                <ParallaxCardsLg />
              </div>
              <div className="hidden md:block lg:hidden">
                <ParallaxCardsMd />
              </div>
              <div className="md:hidden">
                <ParallaxCardsMobile />
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-9/12 mx-4 lg:mx-auto mt-12">
          <div className="flex justify-center text-left">
            <div className="mb-12">
              <h2 className="text-[#021E27] text-4xl lg:text-[48px] lg:mb-8 font-semibold">
                Join over 5 millions Goubists
                saving and winning rewards
              </h2>
            </div>
          </div>
          <div className="gap-4 lg:gap-8 
                          grid grid-cols-1 lg:grid-cols-2 ">
            <div className="rounded-xl topLeft p-8 lg:p-12 ">
              <h1 className="text-5xl lg:text-[50px] xl:text-[62px] 2xl:text-[72px] font-bold mb-4 lg:mb-8">
                +200M DA
              </h1>
              <p className="text-[20px] 2xl:text-[24px] font-light">
                in savings through Goubba
              </p>
              <div className="w-80 lg:w-0"></div>
            </div>
            <div className=" rounded-xl topRight p-8 lg:p-12 ">
              <h1 className="text-5xl 2xl:text-[72px] font-bold mb-4 lg:mb-8">
                +22M DA
              </h1>
              <p className="text-[24px] font-light ">
                in rewards and prizes won
              </p>
              <div className="w-80 lg:w-0"></div>
            </div>
            <div className=" rounded-xl bottomLeft p-8 lg:p-12">
              <h1 className="text-5xl 2xl:text-[72px] font-bold mb-4 lg:mb-8">
                +300
              </h1>
              <p className="text-[24px] font-light ">
                exclusive gift cards, promo codes, deals and offers
              </p>
              <div className="w-80 lg:w-0"></div>
            </div>
            <div className=" rounded-xl topRight p-8 lg:p-12">
              <h1 className="text-5xl 2xl:text-[72px] font-bold mb-4 lg:mb-8">
                +10,000
              </h1>
              <p className="text-[24px] font-light ">
                international gift cards to choose from
              </p>
              <div className="w-80 lg:w-0"></div>
            </div>
          </div>
        </div>

        <div className="mt-12 w-11/12 lg:w-9/12 mx-auto">
          <h2 className="text-[#021E27] text-4xl lg:text-[48px] lg:mb-8 font-semibold mb-12">
            Our Partners
          </h2>
          <div className="hidden xl:flex items-center justify-center my-12 gap-2 ">
            <img src={technoC} className="w-52 rounded-lg" alt=""></img>
            <img src={scechersC} className="w-52 rounded-lg" alt=""></img>
            <img src={cazanimoC} className="w-52 rounded-lg" alt=""></img>
            <img src={footlandC} className="w-52 rounded-lg" alt=""></img>
            <img src={profootC} className="w-52 rounded-lg" alt=""></img>
            <img src={camperC} className="w-52  rounded-lg" alt=""></img>
          </div>
          <div className="flex xl:hidden items-center gap-2 overflow-x-auto no-scrollbar my-12">
            <img src={technoC} className="w-52 rounded-lg" alt=""></img>
            <img src={scechersC} className="w-52 rounded-lg" alt=""></img>
            <img src={cazanimoC} className="w-52 rounded-lg" alt=""></img>
            <img src={footlandC} className="w-52 rounded-lg" alt=""></img>
            <img src={profootC} className="w-52 rounded-lg" alt=""></img>
            <img src={camperC} className="w-52  rounded-lg" alt=""></img>
          </div>
          <div className="flex justify-center ">
            <a
              href="https://stage.goubba.com/cards"
              className="bg-[#FFF6FC]  flex justify-center items-center px-6 py-2 gap-4 rounded-lg text-pink-600 group" >
              <p className="font-semibold">Explore Gift Card Partners</p>
              <svg className="w-8 group-hover:translate-x-2 duration-800 transition" viewBox="0 0 30 31" fill="#BA1986" xmlns="http://www.w3.org/2000/svg" > <rect opacity="0.3" x="6.25" y="16.75" width="2.5" height="17.5" rx="1" transform="rotate(-90 6.25 16.75)" fill="#BA1986" /> <path d="M14.1161 22.1161C13.628 22.6043 13.628 23.3957 14.1161 23.8839C14.6043 24.372 15.3957 24.372 15.8839 23.8839L23.3839 16.3839C23.8571 15.9107 23.8737 15.1487 23.4214 14.6553L16.5464 7.15534C16.08 6.64644 15.2892 6.61207 14.7803 7.07856C14.2714 7.54505 14.2371 8.33576 14.7036 8.84466L20.7698 15.4624L14.1161 22.1161Z" fill="#BA1986" /> </svg>
            </a>
          </div>
        </div>

        <div className="bg-[#FFFBFC]">
          <div className="grid lg:grid-cols-2 mt-28 pb-12 w-10/12 mx-auto">
            <div className="lg:overflow-auto no-scrollbar">
              <ParallaxProvider>
                <div className="relative pt-12">
                  <div className="absolute top-0 mr-52 lg:mr-0">
                    <Parallax translateY={[500, 0]} speed={15}>
                      <div>
                        <img src={ "https://adminv2.goubba.com/image?path=react-web/assets/redArrow.png" } alt="" ></img>
                      </div>
                    </Parallax>
                  </div>
                  <div>
                    <img src={ "https://adminv2.goubba.com/image?path=react-web/assets/mobileWithQr.png" } alt="" ></img>
                  </div>
                  <div className="absolute top-0 right-0 ml-36 lg:ml-0 mr-0 lg:mr-16">
                    <Parallax translateY={[200, 50]} speed={2}>
                      <div>
                        <img src={ "https://adminv2.goubba.com/image?path=react-web/assets/codePromoSlide.png" } alt="" ></img>
                      </div>
                    </Parallax>
                  </div>
                </div>
              </ParallaxProvider>
            </div>
            <div className="flex items-center">
              <div>
                <p className="text-xl text-center lg:text-left lg:text-5xl lg:leading-[52px] font-medium mb-10 lg:w-2/3">
                  Share our exclusive gift cards, offers and deals with your
                  friends and family
                </p>
                <div className="flex justify-center lg:justify-start">
                  <a href="https://goubba.app.link/Goubba_App" 
                      className="group bg-[#FFF6FC] flex justify-center items-center px-6 py-2 gap-4 rounded-lg text-pink-600" >
                    <p className="font-semibold">Start now</p>
                    <svg className="w-8 group-hover:translate-x-2 duration-800 transition" viewBox="0 0 30 31" fill="#BA1986" xmlns="http://www.w3.org/2000/svg" > <rect opacity="0.3" x="6.25" y="16.75" width="2.5" height="17.5" rx="1" transform="rotate(-90 6.25 16.75)" fill="#BA1986" /> <path d="M14.1161 22.1161C13.628 22.6043 13.628 23.3957 14.1161 23.8839C14.6043 24.372 15.3957 24.372 15.8839 23.8839L23.3839 16.3839C23.8571 15.9107 23.8737 15.1487 23.4214 14.6553L16.5464 7.15534C16.08 6.64644 15.2892 6.61207 14.7803 7.07856C14.2714 7.54505 14.2371 8.33576 14.7036 8.84466L20.7698 15.4624L14.1161 22.1161Z" fill="#BA1986" /> </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-[]">
          <div className="grid grid-flow-row lg:grid-cols-2 mt-28 w-10/12 mx-auto">
            <div className="flex items-center order-3 lg:order-1 ">
              <div>
                <p className="text-xl text-center lg:text-left lg:text-5xl lg:leading-[52px] font-medium mb-10 lg:w-2/3">
                  Pay seamlessly with Goubba Gift card checkout
                </p>
                <div className="flex justify-center lg:justify-start">
                  <a href="https://partner.goubba.com" 
                    className="group bg-[#FFF6FC] flex justify-center items-center px-6 py-2 gap-4 rounded-lg text-pink-600" >
                    <p className="font-semibold">Try it</p>
                    <svg className="w-8 group-hover:translate-x-2 duration-800 transition" viewBox="0 0 30 31" fill="#BA1986" xmlns="http://www.w3.org/2000/svg" > <rect opacity="0.3" x="6.25" y="16.75" width="2.5" height="17.5" rx="1" transform="rotate(-90 6.25 16.75)" fill="#BA1986" /> <path d="M14.1161 22.1161C13.628 22.6043 13.628 23.3957 14.1161 23.8839C14.6043 24.372 15.3957 24.372 15.8839 23.8839L23.3839 16.3839C23.8571 15.9107 23.8737 15.1487 23.4214 14.6553L16.5464 7.15534C16.08 6.64644 15.2892 6.61207 14.7803 7.07856C14.2714 7.54505 14.2371 8.33576 14.7036 8.84466L20.7698 15.4624L14.1161 22.1161Z" fill="#BA1986" /> </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="overflow-auto no-scrollbar order-2">
              <div className="relative py-12">
                <div>
                  <img src={ "https://adminv2.goubba.com/image?path=react-web/assets/zolizola.png" } alt="" ></img>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#FFFBFC]">
          <div className="grid grid-flow-row lg:grid-cols-2 mt-28 w-10/12 mx-auto">
            <div className="lg:overflow-auto no-scrollbar">
              <ParallaxProvider>
                <div className="relative py-12">
                  <div className="absolute top-0 mr-52 lg:mr-0">
                    <Parallax translateY={[1050, 0]} speed={15}>
                      <div>
                        <img src={ "https://adminv2.goubba.com/image?path=react-web/assets/arrows.png" } alt="" ></img>
                      </div>
                    </Parallax>
                  </div>
                  <div>
                    <img src={ "https://adminv2.goubba.com/image?path=react-web/assets/phoneList.png" } alt="" ></img>
                  </div>
                  <div className="absolute top-0 right-0 ml-36 lg:ml-0 mr-0 lg:mr-16">
                    <Parallax translateY={[200, 50]} speed={2}>
                      <div>
                        <img src={ "https://adminv2.goubba.com/image?path=react-web/assets/promo.png" } alt="" ></img>
                      </div>
                    </Parallax>
                  </div>
                </div>
              </ParallaxProvider>
            </div>
            <div className="flex items-center">
              <div>
                <p className="text-xl text-center lg:text-left lg:text-5xl lg:leading-[52px] font-medium mb-10 lg:w-2/3">
                  Top up & transfer Goubba credits instantly & securely to earn
                  rewards and win prizes.
                </p>
                <div className="flex justify-center lg:justify-start">
                  <a href="https://stage.goubba.com/topup" 
                      className="group bg-[#FFF6FC] flex justify-center items-center px-6 py-2 gap-4 rounded-lg text-pink-600" >
                    <p className="font-semibold">Top up</p>
                    <svg className="w-8 group-hover:translate-x-2 duration-800 transition" viewBox="0 0 30 31" fill="#BA1986" xmlns="http://www.w3.org/2000/svg" > <rect opacity="0.3" x="6.25" y="16.75" width="2.5" height="17.5" rx="1" transform="rotate(-90 6.25 16.75)" fill="#BA1986" /> <path d="M14.1161 22.1161C13.628 22.6043 13.628 23.3957 14.1161 23.8839C14.6043 24.372 15.3957 24.372 15.8839 23.8839L23.3839 16.3839C23.8571 15.9107 23.8737 15.1487 23.4214 14.6553L16.5464 7.15534C16.08 6.64644 15.2892 6.61207 14.7803 7.07856C14.2714 7.54505 14.2371 8.33576 14.7036 8.84466L20.7698 15.4624L14.1161 22.1161Z" fill="#BA1986" /> </svg>
                  </a>
                </div>
                <div className="py-12">
                  <p className="text-sm text-gray-500">We accept:</p>
                  <img src={pay} alt=""></img>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="retropurple-background lg:mx-12 lg:mb-12 lg:rounded-xl py-20 lg:py-44">
          <div>
            <h1 className=" text-center text-[#700F50] font-bold lg:leading-[80px] text-4xl lg:text-[96px] ">
              Join us as a Partner!
            </h1>
            <div className="flex justify-center mt-12 lg:mt-24">
              <NavLink
                to="./business"
                className="group bg-white bg-opacity-20 backdrop-blur-lg    
                      flex justify-center items-center px-16 py-2 gap-4 rounded-lg text-[#700F50]" >
                <p className="font-semibold">Try it</p>
                <svg className="w-8 group-hover:translate-x-2 duration-800 transition" viewBox="0 0 30 31" fill="#700F50" xmlns="http://www.w3.org/2000/svg" > <rect opacity="0.3" x="6.25" y="16.75" width="2.5" height="17.5" rx="1" transform="rotate(-90 6.25 16.75)" fill="#700F50" /> <path d="M14.1161 22.1161C13.628 22.6043 13.628 23.3957 14.1161 23.8839C14.6043 24.372 15.3957 24.372 15.8839 23.8839L23.3839 16.3839C23.8571 15.9107 23.8737 15.1487 23.4214 14.6553L16.5464 7.15534C16.08 6.64644 15.2892 6.61207 14.7803 7.07856C14.2714 7.54505 14.2371 8.33576 14.7036 8.84466L20.7698 15.4624L14.1161 22.1161Z" fill="#700F50" /> </svg>
              </NavLink>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
