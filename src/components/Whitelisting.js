import React from 'react';
import tick from '../assets/images/tickShape.png';
import Classes from './styles/WhiteListing.module.css';

const listItem = [
    {
        id: 1,
        title: 'Discounted Mint Price',
    },
    {
        id: 2,
        title: 'Access to Game Beta Version',
    },
    {
        id: 3,
        title: 'Unlock Mystery Vault',
    },
    {
        id: 4,
        title: 'Only 500 WL spots available',
    },
];

const WhiteListing = () => (
    <div className={`mt-[50px] lg:mt-[100px] md:py-12 ${Classes.Whitelisting}`}>
        <div className="my-container">
            <div className="grid grid-cols-1 md:grid-cols-2 px-5 space-y-10 md:space-y-0 md:space-x-12">
                <div
                    className={`text-main-white relative py-10 md:py-16 rounded-xl md:rounded-3xl ${Classes.card}`}
                    data-aos="flip-left"
                    data-aos-duration="1500"
                >
                    <h2 className="text-3xl lg:text-5xl text-center">
                        Whitelisting <br /> Benefits
                    </h2>
                    <div className="flex flex-col items-center justify-center">
                        <ul className="list-none space-y-1.5 md:space-y-2.5 mt-6 md:mt-10">
                            {listItem.map((item) => (
                                <li key={item.id} className="flex space-x-2 items-center">
                                    <img className="w-4 md:w-6 h-4 md:h-6" src={tick} alt="" />
                                    <h5 className="text-base sm:text-lg lg:text-2xl">
                                        {item.title}
                                    </h5>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <button
                        type="button"
                        className="primary-btn absolute -bottom-5 left-1/2 transform -translate-x-1/2"
                    >
                        <a
                            target="_blank"
                            href="https://soltires.gitbook.io/whitepaper/P3gFECjlazFqAt1xSsVQ/"
                            rel="noreferrer"
                            title="Discord"
                        >
                            Learn More
                        </a>
                    </button>
                </div>
                <div
                    className={`text-main-white relative py-10 md:py-16 rounded-xl md:rounded-3xl ${Classes.card}`}
                    data-aos="flip-left"
                    data-aos-duration="1500"
                >
                    <h2 className="text-3xl lg:text-5xl text-center">
                        Whitelisting <br /> Benefits
                    </h2>
                    <div className="flex flex-col items-center justify-center">
                        <ul className="list-none space-y-1.5 md:space-y-2.5 mt-6 md:mt-10">
                            {listItem.map((item) => (
                                <li key={item.id} className="flex space-x-2 items-center">
                                    <img className="w-4 md:w-6 h-4 md:h-6" src={tick} alt="" />
                                    <h5 className="text-base sm:text-lg lg:text-2xl">
                                        {item.title}
                                    </h5>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <button
                        type="button"
                        className="primary-btn absolute -bottom-5 left-1/2 transform -translate-x-1/2"
                    >
                        <a
                            target="_blank"
                            href="https://www.discord.gg/soltires"
                            rel="noreferrer"
                            title="Discord"
                        >
                            Whitelist Edition
                        </a>
                    </button>
                </div>
            </div>
        </div>
    </div>
);

export default WhiteListing;
