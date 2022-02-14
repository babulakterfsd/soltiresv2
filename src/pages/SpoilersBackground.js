import React from 'react';
import one from '../assets/images/rarity-chart/spoilers/bg-1.png';
import two from '../assets/images/rarity-chart/spoilers/bg-2.png';
import three from '../assets/images/rarity-chart/spoilers/bg-3.png';
import four from '../assets/images/rarity-chart/spoilers/bg-4.png';
import MainTitle from '../components/Shared/MainTitle';
import Classes from '../components/styles/SpoilersBackground.module.css';

const backgrounds = [
    {
        id: 1,
        title: 'Background',
        title2: '10%',
        img: one,
    },
    {
        id: 2,
        title: 'Background',
        title2: '20%',
        img: two,
    },
    {
        id: 3,
        title: 'Background',
        title2: '30%',
        img: three,
    },
    {
        id: 4,
        title: 'Background',
        title2: '40%',
        img: four,
    },
];

const SpoilersBackground = () => (
    <div id="spoilers">
        <div className={`pb-10 ${Classes.Background} relative`}>
            <div className="my-container p-5">
                <div className="font-montserrat">
                    <div className="mt-24 lg:mt-10">
                        <MainTitle title="Spoilers:" />
                    </div>

                    <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-2 md:gap-x-4 gap-y-16 text-main-white">
                        {backgrounds.map((background) => (
                            <div
                                key={background.id}
                                className={`${Classes.Card} py-4 md:py-6 relative`}
                                data-aos="zoom-in"
                                data-aos-duration="2000"
                            >
                                <div className="w-full flex items-center justify-center">
                                    <img
                                        className="text-center sm:w-full px-4 md:px-3"
                                        src={background.img}
                                        style={{ borderRadius: '30px' }}
                                        alt=""
                                    />
                                </div>
                                <h3 className="md:text-left text-center text-base md:text-2xl px-4 md:px-6 mt-4 md:mt-8 font-semibold">
                                    <span className="2xl:text-2xl text-lg">{background.title}</span>
                                    <br />
                                    <span className={`${Classes.Color} 2xl:text-2xl text-md`}>
                                        {background.title2}
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

export default SpoilersBackground;
