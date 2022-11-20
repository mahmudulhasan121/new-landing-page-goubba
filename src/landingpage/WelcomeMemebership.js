import "./App.css";
import Lottie from "lottie-react";
import WelcomeMemeberShip from "./WelcomeMemebership.js"
import { useTranslation ,Trans } from 'react-i18next';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    NavLink,
}from "react-router-dom";
function App() {
    const numbers = [1]
    
    return (
        <div className="tw-bg-[#FFF6FC]">
            <div className=" tw-max-w-7xl tw-mx-auto ">
                <div className="tw-h-20"></div>
                <div>
                    <img className=" tw-w-full" src="https://adminv2.goubba.com/image?path=react-web/assets/memebership_banenr.webp"></img>
                </div>
                <div className=" tw-space-y-6">
                    <div className="tw-grid tw-grid-flow-row md:tw-grid-cols-2 tw-pb-12">
                        <h1 className="md:tw-hidden tw-text-black tw-font-bold tw-text-center md:tw-text-left tw-mx-4 md:tw-mx-0
                                    tw-text-3xl md:tw-text-3xl lg:tw-text-5xl tw-mb-6 md:tw-w-1/2">
                            More Flexibility
                        </h1>
                        <div className="tw-flex tw-justify-center md:tw-justify-start tw-mx-8 md:tw-mx-0">
                            <img className="" src="https://adminv2.goubba.com/image?path=react-web/assets/membershipUione.png" alt=""></img>
                        </div>
                        <div className="tw-flex tw-items-center md:tw-w-10/12">
                            <div className="">
                                <h1 className="tw-hidden md:tw-flex tw-text-black tw-font-bold tw-text-center md:tw-text-left tw-mx-4 md:tw-mx-0
                                            tw-text-3xl md:tw-text-3xl lg:tw-text-5xl tw-mb-6 md:tw-w-1/2">
                                    More Flexibility
                                </h1>
                                <p className="tw-mx-6 md:tw-mx-0 tw-text-xl tw-text-center md:tw-text-left tw-mt-6 md:tw-mt-0">
                                    With few clicks, transform GC to your employee’ wallet and give them the freedom to pick their favorite gift cards.
                                </p>
                                <div className="tw-mt-6 tw-flex tw-justify-center md:tw-justify-start">
                                    <button className=" tw-rounded-lg tw-bg-[#BA1986] tw-text-white tw-text-xl tw-py-2 tw-px-6">
                                        Unlock now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tw-grid tw-grid-flow-row md:tw-grid-cols-2 tw-pb-12">
                        <h1 className="md:tw-hidden tw-text-black tw-font-bold tw-text-center md:tw-text-left tw-mx-4 md:tw-mx-0
                                    tw-text-3xl md:tw-text-3xl lg:tw-text-5xl tw-mb-6 md:tw-w-1/2">
                            Exclusive Discounts
                        </h1>
                        <div className="tw-flex tw-justify-center md:tw-justify-start tw-mx-8 md:tw-mx-0 md:tw-order-2">
                            <img className="" src="https://adminv2.goubba.com/image?path=react-web/assets/membershipUitwo.png" alt=""></img>
                        </div>
                        <div className="tw-flex tw-items-center md:tw-w-10/12">
                            <div className="">
                                <h1 className="tw-hidden md:tw-flex tw-text-black tw-font-bold tw-text-center md:tw-text-left tw-mx-4 md:tw-mx-0
                                            tw-text-3xl md:tw-text-3xl lg:tw-text-5xl tw-mb-6 md:tw-w-1/2">
                                    Exclusive Discounts
                                </h1>
                                <p className="tw-mx-6 md:tw-mx-0 tw-text-xl tw-text-center md:tw-text-left tw-mt-6 md:tw-mt-0">
                                    Unlock unlimited discounts on all Goubba services. Get different Gift Cards at the cheapest prices.
                                </p>
                                <div className="tw-mt-6 tw-flex tw-justify-center md:tw-justify-start">
                                    <button className=" tw-rounded-lg tw-bg-[#BA1986] tw-text-white tw-text-xl tw-py-2 tw-px-6">
                                        Check details
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tw-grid tw-grid-flow-row md:tw-grid-cols-2 tw-pb-12">
                        <h1 className="md:tw-hidden tw-text-black tw-font-bold tw-text-center md:tw-text-left tw-mx-4 md:tw-mx-0
                                    tw-text-3xl md:tw-text-3xl lg:tw-text-5xl tw-mb-6 md:tw-w-11/12">
                            Seamless way to pay 
                        </h1>
                        <div className="tw-flex tw-justify-center md:tw-justify-start tw-mx-8 md:tw-mx-0">
                            <img className="" src="https://adminv2.goubba.com/image?path=react-web/assets/membershipUithree.png" alt=""></img>
                        </div>
                        <div className="tw-flex tw-items-center md:tw-w-10/12">
                            <div className="">
                                <h1 className="tw-hidden md:tw-flex tw-text-black tw-font-bold tw-text-center md:tw-text-left tw-mx-4 md:tw-mx-0
                                            tw-text-3xl md:tw-text-3xl lg:tw-text-5xl tw-mb-6 md:tw-w-3/4">
                                    Seamless way to pay
                                </h1>
                                <p className="tw-mx-6 md:tw-mx-0 tw-text-xl tw-text-center md:tw-text-left tw-mt-6 md:tw-mt-0">
                                    A reward solution for your employees; let them pay easily on our partners' stores
                                </p>
                                <div className="tw-mt-6 tw-flex tw-justify-center md:tw-justify-start">
                                    <button className=" tw-rounded-lg tw-bg-[#BA1986] tw-text-white tw-text-xl tw-py-2 tw-px-6">
                                        Unlock now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tw-grid tw-grid-flow-row md:tw-grid-cols-2 tw-pb-12">
                        <h1 className="md:tw-hidden tw-text-black tw-font-bold tw-text-center md:tw-text-left tw-mx-4 md:tw-mx-0
                                    tw-text-3xl md:tw-text-3xl lg:tw-text-5xl tw-mb-6 md:tw-w-1/2">
                            Lower Fees, Unlimited Bonuses
                        </h1>
                        <div className="tw-flex tw-justify-center md:tw-justify-start tw-mx-8 md:tw-mx-0 md:tw-order-2">
                            <img className="" src="https://adminv2.goubba.com/image?path=react-web/assets/membershipUifour.png" alt=""></img>
                        </div>
                        <div className="tw-flex tw-items-center md:tw-w-10/12">
                            <div className="">
                                <h1 className="tw-hidden md:tw-flex tw-text-black tw-font-bold tw-text-center md:tw-text-left tw-mx-4 md:tw-mx-0
                                            tw-text-3xl md:tw-text-3xl lg:tw-text-5xl tw-mb-6 md:tw-w-11/12">
                                    Lower Fees, Unlimited Bonuses
                                </h1>
                                <p className="tw-mx-6 md:tw-mx-0 tw-text-xl tw-text-center md:tw-text-left tw-mt-6 md:tw-mt-0">
                                    Lower transaction fee and up to 7% bonus on all wallet depsits! Let your employees enjoy free credits on every single transaction.
                                </p>
                                <div className="tw-mt-6 tw-flex tw-justify-center md:tw-justify-start">
                                    <button className=" tw-rounded-lg tw-bg-[#BA1986] tw-text-white tw-text-xl tw-py-2 tw-px-6">
                                        Check details
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
