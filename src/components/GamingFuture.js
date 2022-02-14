import React, { useState } from 'react';
import Icon from '../assets/images/gamingIcon.png';
import Classes from './styles/GamingFuture.module.css';

const racerData = [
    {
        id: 1,
        title: 'Mint Collection',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        icon: Icon,
    },
    {
        id: 2,
        title: 'Manage Garage',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        icon: Icon,
    },
    {
        id: 3,
        title: 'Race & Earn',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        icon: Icon,
    },
    {
        id: 4,
        title: 'Trade Collection',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        icon: Icon,
    },
];
const mechanicsData = [
    {
        id: 1,
        title: 'Trade Mechanics',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        icon: Icon,
    },
];

const GamingFuture = () => {
    const [isRacer, setIsRacer] = useState(true);
    const allData = isRacer ? racerData : mechanicsData;
    return (
        <div className="md:py-0 lg:py-20">
            <div className="my-container md:mt-12">
                <h2 className="font-montserrat text-2xl md:text-4xl lg:text-6xl text-center font-bold text-main-white mt-12 md:mt-0">
                    Become a part of the
                    <br />
                    gaming future
                </h2>
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 items-center justify-center w-full space-x-4 mt-8 md:mt-16">
                    <button
                        onClick={() => setIsRacer(true)}
                        type="button"
                        className={`text-main-white text-2xl px-10 py-4 ${
                            isRacer ? Classes.btnFill : Classes.btnOutline
                        }`}
                    >
                        For Racer
                    </button>
                    <button
                        onClick={() => setIsRacer(false)}
                        type="button"
                        className={`text-main-white text-2xl px-10 py-4 ${
                            !isRacer ? Classes.btnFill : Classes.btnOutline
                        }`}
                    >
                        For Mechanics
                    </button>
                </div>

                <div className="px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-20 lg:gap-x-8  mt-32">
                    {allData.map((data) => (
                        <div key={data.id} className={`${Classes.Card} group mt-24 md:mt-0`}>
                            <div className="p-4 text-main-white text-center">
                                <div
                                    className={`flex items-center justify-center w-20 h-20 mx-auto ${Classes.Icon} rounded-full p-6 box-content relative z-10 -mt-20`}
                                >
                                    <img
                                        className="w-full h-full transform group-hover:rotate-[360deg] transition-all duration-300"
                                        src={data.icon}
                                        alt=""
                                    />
                                </div>
                                <h2 className="text-2xl mt-10 mb-4">{data.title}</h2>
                                <p className="text-justify text-base pb-8">{data.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GamingFuture;
