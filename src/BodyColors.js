import React from 'react';
import one from '../assets/images/rarity-chart/color/color-1.png';
import two from '../assets/images/rarity-chart/color/color-2.png';
import three from '../assets/images/rarity-chart/color/color-3.png';
import four from '../assets/images/rarity-chart/color/color-4.png';
import colorA1 from '../assets/images/rarity-chart/color/color-a1.png';
import colorA2 from '../assets/images/rarity-chart/color/color-a2.png';
import colorB1 from '../assets/images/rarity-chart/color/color-b1.png';
import colorB2 from '../assets/images/rarity-chart/color/color-b2.png';
import colorC1 from '../assets/images/rarity-chart/color/color-c1.png';
import colorC2 from '../assets/images/rarity-chart/color/color-c2.png';
import colorD1 from '../assets/images/rarity-chart/color/color-d1.png';
import colorD2 from '../assets/images/rarity-chart/color/color-d2.png';
import MainTitle from '../components/Shared/MainTitle';
import Classes from '../components/styles/BodyColors.module.css';

const Colors = [
    {
        id: 1,
        title: 'RED BODY COLOR IS',
        title2: '25%',
        img: one,
        color1: colorA1,
        color2: colorA2,
        colorText1: '#FF00CC',
        colorText2: '#333399',
    },
    {
        id: 2,
        title: 'RED BODY COLOR IS',
        title2: '25%',
        img: two,
        color1: colorB1,
        color2: colorB2,
        colorText1: '#2D439C',
        colorText2: '#1CFAFC',
    },
    {
        id: 3,
        title: 'RED BODY COLOR IS',
        title2: '25%',
        img: three,
        color1: colorC1,
        color2: colorC2,
        colorText1: '#764BA2',
        colorText2: '#667EEA',
    },
    {
        id: 4,
        title: 'RED BODY COLOR IS',
        title2: '25%',
        img: four,
        color1: colorD1,
        color2: colorD2,
        colorText1: '#FFD4A2',
        colorText2: '#FE0159',
    },
];

const BodyColors = () => (
    <div id="bodyColors">
        <div className={`pb-10 ${Classes.Color} relative`}>
            <div className="my-container p-5">
                <div className="font-montserrat">
                    <div className="mt-24 lg:mt-10">
                        <MainTitle title="Body Colors:" />
                    </div>

                    <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-2 md:gap-x-4 gap-y-16 text-main-white">
                        {Colors.map((color) => (
                            <div
                                key={color.id}
                                className={`${Classes.Card} py-4 md:py-6 relative`}
                                data-aos="zoom-in"
                                data-aos-duration="2000"
                            >
                                <div className="w-full flex items-center justify-center">
                                    <img
                                        className="text-center w-full h-auto sm:w-full px-4 md:px-6"
                                        src={color.img}
                                        alt=""
                                    />
                                </div>
                                <div className="flex items-center justify-between flex-wrap px-4 md:px-6 mt-6 md:mt-8 ">
                                    <div className="flex items-center justify-between">
                                        <img
                                            className="text-center w-full h-auto sm:w-full mr-1.5"
                                            src={color.color1}
                                            alt=""
                                        />
                                        <p className="text-sm">{color.colorText1}</p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <img
                                            className="text-center w-full h-auto sm:w-full mr-1.5"
                                            src={color.color2}
                                            alt=""
                                        />
                                        <p className="text-sm">{color.colorText2}</p>
                                    </div>
                                </div>
                                <h3 className="md:text-left text-center text-base md:text-2xl px-4 md:px-6 mt-6 md:mt-8 font-semibold">
                                    <span className="2xl:text-2xl text-base">{color.title}</span>
                                    <br />
                                    <span className={`${Classes.Color} 2xl:text-2xl text-md`}>
                                        {color.title2}
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

export default BodyColors;
