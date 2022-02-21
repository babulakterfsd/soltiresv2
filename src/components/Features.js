import React from 'react';
import one from '../assets/images/features/1.png';
import two from '../assets/images/features/2.png';
import three from '../assets/images/features/3.png';
import four from '../assets/images/features/4.png';
import Ball from '../assets/images/Vector.png';
import Car from '../assets/images/yellowCar.png';
import MainTitle from './Shared/MainTitle';
import Classes from './styles/Features.module.css';

const features = [
    {
        id: 1,
        title: 'Own Rare',
        title2: 'Racing Cars & Kits',
        img: one,
    },
    {
        id: 2,
        title: 'Unlock / Mint New',
        title2: 'Racing Collections',
        img: two,
    },
    {
        id: 3,
        title: 'Trade / Lease',
        title2: 'Cars',
        img: three,
    },
    {
        id: 4,
        title: 'Earn $TIRE in',
        title2: ' Every Race',
        img: four,
    },
];

const Features = () => (
    <div className="">
        <div className={`pb-10 ${Classes.Features} relative`}>
            {/* <img className="w-full block" src={Wave} alt="" /> */}
            <div className="hidden md:block">
                <img className="absolute -top-16 right-0 w-[250px] h-[200px]" src={Car} alt="" />
                <img className="absolute -top-10 left-0 w-[150px] h-[150px]" src={Ball} alt="" />
            </div>
            <div className="my-container p-5">
                <div className="font-montserrat">
                    <div className="mt-24 lg:mt-10">
                        <MainTitle title="Features" />
                    </div>

                    <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-2 md:gap-x-4 gap-y-16 text-main-white">
                        {features.map((feature) => (
                            <div
                                key={feature.id}
                                className={`${Classes.Card} py-4 md:py-6 relative`}
                                data-aos="zoom-in"
                                data-aos-duration="2000"
                            >
                                <div className="w-full flex items-center justify-center -mt-16">
                                    <img
                                        className="text-center w-4/5 h-auto sm:w-full px-6 md:px-8"
                                        src={feature.img}
                                        alt=""
                                    />
                                </div>
                                <h3 className="text-center text-base md:text-2xl p-2 mt-2 md:mt-8 font-semibold">
                                    <span>{feature.title}</span>
                                    <br />
                                    <span>{feature.title2}</span>
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Features;
