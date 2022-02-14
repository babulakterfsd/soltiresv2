import React from 'react';
import Contest from '../assets/images/icon/contest.png';
import Multiplayer from '../assets/images/icon/multiplayer.png';
import Training from '../assets/images/icon/training.png';
import MainTitle from './Shared/MainTitle';
import Classes from './styles/CarModes.module.css';

const carModes = [
    {
        id: 1,
        title: 'Training',
        icon: Training,
    },
    {
        id: 2,
        title: 'Multiplayer',
        icon: Multiplayer,
    },
    {
        id: 3,
        title: 'Contest',
        icon: Contest,
    },
];

const GameModes = () => (
    <div id="works" className="mt-28 md:mt-10 bg-main-dark font-montserrat text-main-white">
        <div className="my-container">
            <MainTitle title="Game Modes" />
            <div className="py-8 md:py-20 text-center">
                {/* <div className="grid grid-cols-2 md:grid-cols-3 justify-items-center gap-y-8 md:gap-y-0"> */}
                <div className="flex justify-around flex-wrap gap-y-8 md:gap-y-0">
                    {carModes.map((mode) => (
                        <div key={mode.id} className="">
                            <div
                                className={`flex w-full items-center justify-center ${Classes.underline}`}
                            >
                                <img
                                    className="w-[123px] h-[123px] md:w-[195px] md:h-[195px] transition duration-500 transform hover:rotate-[360deg]"
                                    src={mode.icon}
                                    alt={mode.title}
                                />
                            </div>
                            <h2 className="mt-10 md:mt-20 text-2xl lg:text-5xl font-semibold">
                                {mode.title}
                            </h2>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

export default GameModes;
