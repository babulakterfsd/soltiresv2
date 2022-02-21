import React, { useState } from 'react';
import GarageMechanic from '../assets/images/icon/noun-garage-1045921-FFFFFF.png';
import Garage from '../assets/images/icon/noun-garage-1076585-FFFFFF.png';
import Pickaxe from '../assets/images/icon/noun-pickaxe-1647587-FFFFFF.png';
import Race from '../assets/images/icon/noun-race-3406562-FFFFFF.png';
import Repair from '../assets/images/icon/noun-repair-3871530-FFFFFF.png';
import Trade from '../assets/images/icon/noun-trade-686718-FFFFFF.png';
import Classes from './styles/GamingFuture.module.css';

const racerData = [
    {
        id: 1,
        title: 'Mint Collection',
        description: 'Jump straight into action with our Car NFT Collection',
        icon: Pickaxe,
    },
    {
        id: 2,
        title: 'Manage Garage',
        description: 'Customize, repair and upgrade your vehicles',
        icon: Garage,
    },
    {
        id: 3,
        title: 'Race & Earn',
        description:
            'Earn $TIRE by competing in tournaments, winning races, and completing daily challenges',
        icon: Race,
    },
    {
        id: 4,
        title: 'Trade Collection',
        description: 'Purhcase a new engine, set of tires or transmission on the secondary market',
        icon: Trade,
    },
];
const mechanicsData = [
    {
        id: 1,
        title: 'Mint Collection',
        description: 'Get your tools and begin fixing or upgrading cars and its components',
        icon: Pickaxe,
    },
    {
        id: 2,
        title: 'Manage Your Shop',
        description: 'Repair cars & components and upgrade your tools',
        icon: GarageMechanic,
    },
    {
        id: 3,
        title: 'Repair & Earn',
        description: 'Put in the effort, become a skilled mechanic, and earn $TIRE',
        icon: Repair,
    },
    {
        id: 4,
        title: 'Trade Collection',
        description:
            'Unused components can be salvaged for $TIRE or exchanged for random parts of the same tier',
        icon: Trade,
    },
];

const GamingFuture = () => {
    const [isRacer, setIsRacer] = useState(true);
    const allData = isRacer ? racerData : mechanicsData;
    return (
        <div className="md:py-0 lg:py-20">
            <div className="my-container mt-16 md:mt-16">
                <h2 className="font-montserrat text-2xl md:text-4xl lg:text-6xl text-center font-bold text-main-white">
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
