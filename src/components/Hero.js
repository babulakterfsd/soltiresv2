import React from 'react';
import { useNavigate } from 'react-router-dom';
import Cars from '../assets/images/hero-cars.svg';
import Topbar from './Shared/Topbar';
import Classes from './styles/Hero.module.css';

function Hero() {
    const navigate = useNavigate();
    return (
        <div
            id="home"
            className={`${Classes.Hero} h-[420px] sm:h-[480px] md:h-screen mt-16 lg:mt-0 lg:mb-28`}
        >
            <Topbar/>
            <div className="my-container px-5 flex flex-col items-center h-full text-main-white">
                <div
                    className="mt-24 sm:mt-40 md:mt-44 lg:mt-48 text-center"
                    data-aos="flip-left"
                    data-aos-duration="1500"
                >
                    <h3 className="font-semibold text-[18px] md:text-3xl mb-2 md:mb-4 uppercase">
                        DISCOVER. PLAY. EARN
                    </h3>
                    <h2 className="font-semibold text-[25px] md:text-6xl mb-3  md:mb-7 capitalize">
                        Drag Race Evolution
                    </h2>
                    <button type="button" className="secondary-btn capitalize">
                        <a
                            target="_blank"
                            href="https://www.discord.gg/soltires"
                            rel="noreferrer"
                            title="Discord"
                        >
                            Get Whitelisted
                        </a>
                    </button>
                    <button
                        onClick={() => navigate('/rarityChart')}
                        type="button"
                        className="secondary-btn capitalize mx-3"
                    >
                        Rarity Chart
                    </button>
                </div>
                <div
                    className="w-full mt-10"
                    data-aos="zoom-in"
                    data-aos-duration="1500"
                    data-aos-delay="700"
                >
                    <img className="w-full" src={Cars} alt="Three cars" />
                </div>
            </div>
        </div>
    );
}

export default Hero;
