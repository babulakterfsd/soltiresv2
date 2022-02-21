import React from 'react';
import one from '../assets/images/collections/1.png';
import two from '../assets/images/collections/2.png';
import three from '../assets/images/collections/3.png';
import MainTitle from './Shared/MainTitle';
import Classes from './styles/Collections.module.css';

const collectionsData = [
    {
        id: 1,
        title: 'Automatic',
        title2: 'Gearbox',
        btn: 'Super Rare',
        img: one,
    },
    {
        id: 2,
        title: 'Engine with Blower',
        title2: 'The "Big V" Engine',
        btn: 'Rare',
        img: two,
    },
    {
        id: 3,
        title: 'Formula One Car',
        title2: 'Style Tire ',
        btn: 'Legendary',
        img: three,
    },
];

const collections = (
    <div className="my-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-2 md:gap-x-4 gap-y-16 text-main-white  px-4 md:px-0 ">
        {collectionsData.map((collection) => (
            <div
                key={collection.id}
                className={`${Classes.Card} py-4 md:py-6 relative lg:-mt-28`}
                data-aos="zoom-in"
                data-aos-duration="2000"
            >
                <div className="w-full flex items-center justify-center -mt-16">
                    <img
                        className="text-center w-auto h-32 px-6 md:px-8 object-contain"
                        src={collection.img}
                        alt=""
                    />
                </div>
                <div className="flex items-center justify-center mt-1 md:mt-6">
                    <h3 className="w-1/2 py-2 mt-2 md:mt-0 text-center text-xl text-orange">
                        {collection.btn}
                    </h3>
                </div>
                <h3 className="text-center text-base md:text-2xl p-2 mt-1 md:mt-4 font-semibold">
                    <span>{collection.title}</span>
                    <br />
                    <span>{collection.title2}</span>
                </h3>
            </div>
        ))}
    </div>
);

const Collections = () => (
    <div id="collections" className={`${Classes.Collection} py-10 md:py-0`}>
        <div className="md:pt-10 lg:pt-0 lg:mb-5">
            <MainTitle title="Future Collections" />
        </div>
        <div className="block lg:hidden mt-20 lg:mt-40">{collections}</div>
        <div className={`${Classes.Bottom} hidden lg:block lg:mt-52`}>{collections}</div>
    </div>
);

export default Collections;
