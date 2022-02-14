import React from 'react';
import { FaDiscord, FaInstagram, FaMediumM, FaTiktok, FaTwitter } from 'react-icons/fa';
import communityImg from '../assets/images/community.png';
import Classes from './styles/Community.module.css';

const Community = () => (
    <div className="py-20" id="community">
        <div
            className={`my-container py-6 lg:pt-32 lg:pb-0 md:pt-24 ${Classes.Community}`}
            data-aos="flip-left"
            data-aos-duration="1500"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center md:text-left p-8 font-montserrat font-semibold">
                    <button
                        type="button"
                        className={`${Classes.CommunityBtn} px-8 py-2 font-body font-semibold tracking-wide`}
                    >
                        Soltires community!
                    </button>
                    <h3 className="mt-4 mb-4 text-2xl lg:text-5xl text-main-white">
                        Be a part of our <br />
                        ever-growing
                    </h3>
                    <h3 className="text-orange text-2xl lg:text-5xl">Soltires community!</h3>
                    <div className="flex justify-center md:justify-start  space-x-4 mt-8">
                        <a
                            href="https://twitter.com/SolTires_"
                            target="_blank"
                            rel="noreferrer"
                            className="block p-4 h-2.5 w-2.5 rounded-full bg-[#242121] relative group"
                        >
                            <FaTwitter className=" transition duration-200 text-[#31A8FF]  absolute top-2 left-2 group-hover:text-red" />
                        </a>
                        <a
                            href="https://www.discord.gg/soltires"
                            target="_blank"
                            rel="noreferrer"
                            className="block p-4 h-2.5 w-2.5 rounded-full bg-[#242121] relative group"
                        >
                            <FaDiscord className="hover:text-red transition duration-200 text-[#7E62EF] absolute top-2 left-2 group-hover:text-red" />
                        </a>
                        <a
                            href="https://www.instagram.com/soltires__/"
                            target="_blank"
                            rel="noreferrer"
                            className="block p-4 h-2.5 w-2.5 rounded-full bg-[#242121] relative group"
                        >
                            <FaInstagram className="hover:text-red transition duration-200 text-[#FF4869]  absolute top-2 left-2 group-hover:text-red" />
                        </a>
                        <a
                            href="https://www.tiktok.com/@soltires"
                            target="_blank"
                            rel="noreferrer"
                            className="block p-4 h-2.5 w-2.5 rounded-full bg-[#242121] relative group"
                        >
                            <FaTiktok className="hover:text-red transition duration-200 text-[#FFFFFF]  absolute top-2 left-2 group-hover:text-red" />
                        </a>
                        <a
                            href="https://medium.com/@SolTires"
                            target="_blank"
                            rel="noreferrer"
                            className="block p-4 h-2.5 w-2.5 rounded-full bg-[#242121] relative group"
                        >
                            <FaMediumM className=" transition duration-200 text-[#BFBFBF]  absolute top-2 left-2 hover:text-red group-hover:text-red" />
                        </a>
                    </div>
                </div>
                <div className="h-full px-6">
                    <img className="h-full" src={communityImg} alt="" />
                </div>
            </div>
        </div>
    </div>
);

export default Community;
