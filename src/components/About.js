import React from 'react';
import ReactPlayer from 'react-player';
import Classes from './styles/About.module.css';

const About = () => (
    <div
        id="about"
        className={`text-main-white overflow-x-hidden md:pt-[250px] lg:pt-[200px] ${Classes.About}`}
    >
        <div className="max-w-[1277px] mx-auto md:px-10">
            <div
                className={`grid grid-cols-1 sm:grid-cols-2 py-14 gap-16 px-5 md:px-16 md:rounded-[30px] ${Classes.Content}`}
            >
                <div
                    className="flex items-center justify-end"
                    data-aos="fade-right"
                    data-aos-duration="1500"
                >
                    <ReactPlayer width="100%" height="100%" url="https://youtu.be/ZMC5QHKnJrU" />
                </div>
                <div
                    className="h-full flex flex-col justify-center"
                    data-aos="fade-left"
                    data-aos-duration="1500"
                >
                    <h4 className="text-orange text-xl md:text-2xl mb-1 sm:mb-2 md:mb-3 capitalize">
                        {/* About Us */}
                    </h4>
                    <h2
                        className={`capitalize text-orange text-2xl md:text-4xl mb-9 sm:mb-10 md:mb-12 relative ${Classes.Title}`}
                    >
                        About SolTires
                    </h2>
                    <p className="text-justify text-base md:text-lg">
                        Join us on a journey to the SolTires Arena, a legendary realm only the
                        greatest drivers, most knowledgeable technicians, and high stakes gamblers
                        can enter. Race friends and foes in PvP races, tournaments, death matches,
                        and daily challenges to earn $TIRE, our tradable in-game token.
                    </p>
                    <p>Proudly built on Solana.</p>
                </div>
            </div>
        </div>
    </div>
);

export default About;
