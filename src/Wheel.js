import React from 'react';
import image from '../assets/images/rarity-chart/color/wheel.png';
import MainTitle from '../components/Shared/MainTitle';
import Classes from '../components/styles/Wheel.module.css';

const Wheels = [
    {
        id: 1,
        title: 'RED BODY COLOR IS',
        title2: '25%',
        img: image,
    },
    {
        id: 2,
        title: 'RED BODY COLOR IS',
        title2: '25%',
        img: image,
    },
    {
        id: 3,
        title: 'RED BODY COLOR IS',
        title2: '25%',
        img: image,
    },
    {
        id: 4,
        title: 'RED BODY COLOR IS',
        title2: '25%',
        img: image,
    },
];

const Wheel = () => (
    <div className="bgwheel" id="wheel">
        <div className={`pb-10 ${Classes.Background} relative`}>
            <div className="my-container p-5">
                <div className="font-montserrat">
                    <div className="mt-24 lg:mt-10">
                        <MainTitle title="Wheel:" />
                    </div>

                    <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-2 md:gap-x-4 gap-y-16 text-main-white">
                        {Wheels.map((wheel) => (
                            <div
                                key={wheel.id}
                                className={`${Classes.Card} py-4 md:py-6 relative`}
                                data-aos="zoom-in"
                                data-aos-duration="2000"
                            >
                                <div className="w-full flex items-center justify-center">
                                    <img
                                        className="text-center w-full h-auto sm:w-full px-4 md:px-6"
                                        src={wheel.img}
                                        alt=""
                                    />
                                </div>
                                <h3 className="text-center md:text-left text-base md:text-2xl px-4 md:px-6 mt-4 md:mt-8 font-semibold">
                                    <span className="2xl:text-2xl text-base">{wheel.title}</span>
                                    <br />
                                    <span className={`${Classes.Color} 2xl:text-2xl text-md `}>
                                        {wheel.title2}
                                    </span>
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Wheel;
