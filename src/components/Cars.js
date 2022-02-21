import React from 'react';
import Slider from 'react-slick';
import littlefury from '../assets/images/cars/littlefury.webp';
import themercy from '../assets/images/cars/mercuryv2.webp';
import oldmasterpiece from '../assets/images/cars/oldmasterpiece.webp';
import theclassic from '../assets/images/cars/theclassic.webp';
import theCookiebox from '../assets/images/cars/thecookiebox.webp';
import theitalian from '../assets/images/cars/theitalian.webp';
import thejapenesemadness from '../assets/images/cars/thejapenesemadness.webp';
import theMuscle from '../assets/images/cars/themuscle2.webp';
import thesleeper from '../assets/images/cars/thesleeper.webp';
import theSpeed from '../assets/images/cars/thespeed_orange.webp';
import thesushi from '../assets/images/cars/thesushi.webp';
import technological_marvel from '../assets/images/cars/the_technological_marvel.webp';
import '../assets/slick/slick-theme.css';
import '../assets/slick/slick.css';
import MainTitle from './Shared/MainTitle';

const carData = [
    {
        id: 1,
        img: theMuscle,
        title: 'The Muscle',
        name: '',
        stats: '',
        acceleration: 630,
        maxSpeed: 670,
        grip: 410,
        description:
            "A ride in this beast will put a smile on anyone's face, no matter how sad you might be",
    },
    {
        id: 2,
        img: theSpeed,
        title: 'The Speedster',
        name: '',
        stats: '',
        acceleration: 1000,
        maxSpeed: 960,
        grip: 700,
        description:
            "It ain't for the faint of heart with 2.4s to 100 km/h. With the proper driver it will beat most of the cars out there.",
    },
    {
        id: 3,
        img: theCookiebox,
        title: 'The Cookiebox',
        name: '',
        stats: '',
        acceleration: 40,
        maxSpeed: 50,
        grip: 34,
        description:
            "The bigger the car, the smaller the 'nose'. With this car nobody will be able to doubt your... measurements!",
    },
    {
        id: 4,
        img: thesleeper,
        title: 'The Sleeper',
        name: '',
        stats: '',
        acceleration: 100,
        maxSpeed: 125,
        grip: 90,
        description:
            'Your wealthy dad bought you this to make fun of you, but you got a friend with a tuning garage so who is laughing now?',
    },
    {
        id: 5,
        img: thesushi,
        title: 'The Sushi',
        name: '',
        stats: '',
        acceleration: 520,
        maxSpeed: 380,
        grip: 322,
        description:
            'Despite the friendly name, it stings harder than Wasabi so be careful how you drift the corners... I mean take the corners.',
    },
    {
        id: 6,
        img: theclassic,
        title: 'The Classic',
        name: '',
        stats: '',
        acceleration: 80,
        maxSpeed: 90,
        grip: 52,
        description:
            'The happy little car that won the hearts of motorists worldwide with its quirky personality, its unique appearance and a brilliant advertising campaign.',
    },
    {
        id: 7,
        img: themercy,
        title: 'The Mercy',
        name: '',
        stats: '',
        acceleration: 420,
        maxSpeed: 240,
        grip: 340,
        description:
            'Everyone who truly loves cars can likely name that special moment when his Car Guy Eye opens. Became super popular in hot rod circles. Totally understandable.',
    },
    {
        id: 8,
        img: theitalian,
        title: 'The Italian',
        name: '',
        stats: '',
        acceleration: 360,
        maxSpeed: 200,
        grip: 290,
        description:
            'It’s a classic example of a car you can be vaguely happy exists on the strict proviso that you don’t have to own one.',
    },
    {
        id: 9,
        img: thejapenesemadness,
        title: 'The Japanese Madness',
        name: '',
        stats: '',
        acceleration: 850,
        maxSpeed: 780,
        grip: 570,
        description:
            'Flaunting itself with its ambitious performance and impressive exterior design, the Japanese Madness seems to be a huge hit in our community!',
    },
    {
        id: 10,
        img: littlefury,
        title: 'Little Fury',
        name: '',
        stats: '',
        acceleration: 280,
        maxSpeed: 140,
        grip: 270,
        description: 'Do you want to be the fastest delivery guy in the world? Say no more.',
    },
    {
        id: 11,
        img: oldmasterpiece,
        title: 'The Old Masterpiece',
        name: '',
        stats: '',
        acceleration: 670,
        maxSpeed: 450,
        grip: 360,
        description: 'With this incredible diamond, the JDM industry shattered markets.',
    },
    {
        id: 12,
        img: technological_marvel,
        title: 'The Technological Marvel',
        name: '',
        stats: '',
        acceleration: 710,
        maxSpeed: 500,
        grip: 390,
        description: 'And then, many years later, they created this amazing car.',
    },
];

const Cars = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
    };

    return (
        <div id="cars" className="my-container text-center mt-10 lg:mt-0 overflow-hidden">
            <div className="mt-0 md:mt-10 mb-8">
                <MainTitle title="Our Cars" />
            </div>

            <div
                className="max-w-[991px] mx-auto pb-20"
                data-aos="flip-left"
                data-aos-duration="1500"
            >
                <Slider {...settings}>
                    {carData.map((data) => (
                        <div
                            key={data.id}
                            className="bg-[rgba(0,0,0,.85)] rounded-xl  md:rounded-3xl p-4 md:p-16"
                        >
                            <div className="rounded-xl md:rounded-2xl overflow-hidden">
                                <img
                                    className="w-full h-auto md:h-96 md:object-contain"
                                    src={data.img}
                                    alt=""
                                />
                            </div>
                            <div className="space-y-1 rounded-xl md:rounded-2xl">
                                <h3 className="text-main-white text-xl md:text-3xl font-montserrat font-bold mt-6 md:mt-10 mb-4 md:mb-10">
                                    {data.title}
                                </h3>
                                {/* <p className="text-main-white">
                                    Name: <span className="text-orange">{data.name}</span>
                                </p> */}
                                <p className="text-main-white">
                                    Stats: <span className="text-orange">{data.stats}</span>
                                </p>
                                <p className="text-main-white">
                                    Acceleration:{' '}
                                    <span className="text-orange">{data.acceleration}</span>
                                </p>
                                <p className="text-main-white">
                                    Max Speed: <span className="text-orange">{data.maxSpeed}</span>
                                </p>
                                <p className="text-main-white">
                                    Grip: <span className="text-orange">{data.grip}</span>
                                </p>
                                <p className="text-main-white mb-16 md:mb-32">
                                    Description:{' '}
                                    <span className="text-orange">{data.description}</span>
                                </p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Cars;
