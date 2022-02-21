/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from 'react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import littlefury from '../../assets/images/cars/littlefury.webp';
import themercy from '../../assets/images/cars/mercuryv2.webp';
import oldmasterpiece from '../../assets/images/cars/oldmasterpiece.webp';
import theclassic from '../../assets/images/cars/theclassic.webp';
import theCookiebox from '../../assets/images/cars/thecookiebox.webp';
import thedrifter from '../../assets/images/cars/thedrifter.webp';
import theitalian from '../../assets/images/cars/theitalian.webp';
import thejapenesemadness from '../../assets/images/cars/thejapenesemadness.webp';
import thekleine from '../../assets/images/cars/thekleine.webp';
import theMuscle from '../../assets/images/cars/themuscle.webp';
import thesleeper from '../../assets/images/cars/thesleeper.webp';
import theSpeed from '../../assets/images/cars/thespeed_orange.webp';
import thesushi from '../../assets/images/cars/thesushi.webp';
import the_technological_marvel from '../../assets/images/cars/the_technological_marvel.webp';
// styles
import Class from './main.module.css';
import './swiper-bundle.css';

// array of images
const sliderImage = [
    {
        image: theMuscle,
        title: 'The Muscle',
        Stats: '1710',
        Acceleration: '630',
        MaxSpeed: '670',
        Grip: '410',
        Description:
            "A ride in this beast will put a smile on anyone's face, no matter how sad you might be",
        carName: 'The Muscle',
        carIs: '8.25% (550)',
    },
    {
        image: theSpeed,
        title: 'The Speedster',
        Stats: '2660',
        Acceleration: '1000',
        MaxSpeed: '960',
        Grip: '700',
        Description:
            "It ain't for the faint of heart with 2.4s to 100 km/h. With the proper driver it will beat most of the cars out there.",
        carName: 'The Speedster',
        carIs: '1.80% (120)',
    },
    {
        image: theCookiebox,
        title: 'The Cookiebox',
        Stats: '124',
        Acceleration: '40',
        MaxSpeed: '50',
        Grip: '34',
        Description:
            "The bigger the car, the smaller the 'nose'. With this car nobody will be able to doubt your... measurements!",
        carName: 'The Cookiebox',
        carIs: '8.25% (550)',
    },
    {
        image: thesleeper,
        title: 'The Sleeper',
        Stats: '315',
        Acceleration: '100',
        MaxSpeed: '125',
        Grip: '90',
        Description:
            'Your wealthy dad bought you this to make fun of you, but you got a friend with a tuning garage so who is laughing now?',
        carName: 'The Sleeper',
        carIs: '9% (600)',
    },
    {
        image: thesushi,
        title: 'The Sushi',
        Stats: '1222',
        carName: 'The Sushi',
        carIs: '4.71% (314)',
        Acceleration: '520',
        MaxSpeed: '380',
        Grip: '322',
        Description:
            'Despite the friendly name, it stings harder than Wasabi so be careful how you drift the corners... I mean take the corners.',
    },

    {
        image: theclassic,
        title: 'The Classic',
        Stats: '222',
        carName: 'The Classic',
        carIs: '6.75% (450)',
        Acceleration: '80',
        MaxSpeed: '90',
        Grip: '52',
        Description:
            'The happy little car that won the hearts of motorists worldwide with its quirky personality, its unique appearance and a brilliant advertising campaign.',
    },
    {
        image: themercy,
        title: 'The Mercy',
        Stats: '1000',
        carName: 'The Mercy',
        carIs: '850 (12.75%)',
        Acceleration: '420',
        MaxSpeed: '240',
        Grip: '340',
        Description:
            'Everyone who truly loves cars can likely name that special moment when his Car Guy Eye opens. Became super popular in hot rod circles. Totally understandable.',
    },
    {
        image: theitalian,
        title: 'The Italian',
        Stats: '850',
        Acceleration: '360',
        carName: 'The Italian',
        carIs: '9.75% (650)',
        MaxSpeed: '200',
        Grip: '290',
        Description:
            "It’s a classic example of a car you can be vaguely happy exists on the strict proviso that you don’t have to own one.",
    },
    {
        image: thejapenesemadness,
        title: 'The Japanese Madness',
        Stats: '2200',
        Acceleration: '850',
        carName: 'The Japanese Madness',
        carIs: '6.75% (450)',
        MaxSpeed: '780',
        Grip: '570',
        Description:
            'With its ambitious performance and impressive exterior design, the Japanese Madness seems to be a huge hit in our community!',
    },
    {
        image: littlefury,
        title: 'Little Fury',
        Stats: '690',
        Acceleration: '280',
        carName: 'Little Fury',
        carIs: '7.50% (500)',
        MaxSpeed: '140',
        Grip: '270',
        Description:
            'Do you want to be the fastest delivery guy in the world? Say less.',
    },
    {
        image: oldmasterpiece,
        title: 'The Old Masterpiece',
        Stats: '1480',
        Acceleration: '670',
        carName: 'The Old Masterpiece',
        carIs: '3.33% (222)',
        MaxSpeed: '450',
        Grip: '360',
        Description:
            'With this incredible diamond, the JDM industry shattered markets.',
    },
    {
        image: the_technological_marvel,
        title: 'The Technological Marvel',
        Stats: '1600',
        Acceleration: '710',
        carName: 'The Technological Marvel',
        carIs: '3% (200)',
        MaxSpeed: '500',
        Grip: '390',
        Description:
            'And then, many years later, they created this amazing car.',
    },
    {
        image: thekleine,
        title: 'The Kleine',
        Stats: '1750',
        Acceleration: '680',
        carName: 'The Kleine',
        carIs: '3.45% (230)',
        MaxSpeed: '640',
        Grip: '430',
        Description:
            'Well, if you tamper with the tiny one, the brothers could come after you.',
    },
    {
        image: thedrifter,
        title: 'The Drifter',
        Stats: '1333',
        Acceleration: '600',
        carName: 'The Drifter',
        carIs: '6% (400)',
        MaxSpeed: '400',
        Grip: '333',
        Description:
            "You won't need anything else in life if you can discover a long, empty road with lots of turns.",
    },
];

const MainSlider = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        setIndex(0);
    }, []);
    // next prev buttons
    const next = () => {
        if (index === sliderImage.length - 1) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    };
    const prev = () => {
        if (index === 0) {
            setIndex(sliderImage.length - 1);
        } else {
            setIndex(index - 1);
        }
    };

    return (
        <>
            <div className="my-container md:pb-8">
                <section className="relative">
                    <div
                        className={`${Class.bgImage2} ${Class.cardHeight} pt-0 pb-4 md:py-6 grid md:grid-cols-2 items-center gap-x-30 w-4/5 mx-auto my-8 px-8`}
                    >
                        <div>
                            <img
                                src={sliderImage[index]?.image}
                                alt=""
                                data-aos="zoom-in"
                                data-aos-duration="2000"
                                className="w-full h-full"
                            />
                        </div>
                        <div className="md:text-left text-center md:mt-0 mt-10">
                            <div className="text-main-white lg:text-5xl md:text-4xl text-3xl font-bold">{`0${
                                index + 1
                            }`}</div>
                            <div className="text-main-white lg:text-3xl md:text-2xl text-xl font-bold">
                                {sliderImage[index]?.title}
                            </div>
                            <div className="text-main-white lg:text-2xl md:text-xl">
                                OVR:{' '}
                                <span style={{ color: '#FF7507' }}>
                                    {sliderImage[index]?.Stats}
                                </span>{' '}
                            </div>
                            <div className="text-main-white lg:text-2xl md:text-xl">
                                Acceleration:{' '}
                                <span style={{ color: '#FF7507' }}>
                                    {sliderImage[index]?.Acceleration}
                                </span>
                            </div>
                            <div className="text-main-white lg:text-2xl md:text-xl">
                                Max Speed:{' '}
                                <span style={{ color: '#FF7507' }}>
                                    {sliderImage[index]?.MaxSpeed}
                                </span>
                            </div>
                            <div className="text-main-white lg:text-2xl md:text-xl">
                                Grip:{' '}
                                <span style={{ color: '#FF7507' }}>{sliderImage[index]?.Grip}</span>{' '}
                            </div>
                            <div className="text-main-white lg:text-2xl md:text-xl">
                                Description:{' '}
                                <span style={{ color: '#A9A9A9' }} className="md:text-xl text-sm">
                                    {sliderImage[index]?.Description}
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* buttons */}
                    <div className="absolute top-[300px] w-full flex justify-between">
                        <button type="button" onClick={prev} className="ml-4 swiper-button-prev" />
                        <button type="button" onClick={next} className=" mr-4 swiper-button-next" />
                    </div>
                </section>
            </div>
            {/* looping slider */}
            <section className="bg-main-dark md:mt-0">
                <Swiper
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    slidesPerView={5}
                    spaceBetween={30}
                    className="mt-10 my-container pt-5"
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    modules={[Pagination, Navigation]}
                    breakpoints={{
                        320: {
                            slidesPerView: 2,
                            // spaceBetween: 20,
                        },
                        375: {
                            slidesPerView: 2,
                            // spaceBetween: 20,
                        },
                        425: {
                            slidesPerView: 2,
                            // spaceBetween: 20,
                        },
                        640: {
                            slidesPerView: 2,
                            // spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            // spaceBetween: 40,
                        },
                        1050: {
                            slidesPerView: 5,
                            // spaceBetween: 10,
                        },
                        1440: {
                            slidesPerView: 5,
                            // spaceBetween: 40,
                        },
                    }}
                >
                    {sliderImage.map((item, i) => (
                        <SwiperSlide key={i}>
                            <div className="text-center md:text-left">
                                <img
                                    src={item?.image}
                                    alt=""
                                    onClick={() => setIndex(i)}
                                    className={index === i ? `${Class.active}` : ''}
                                />
                                <div className="text-main-white mt:8 py-5 font-bold border-b border-dashed overflow-hidden whitespace-nowrap text-ellipsis">
                                    {item.carName}
                                </div>
                                <div className="text-main-white pt-5">
                                    {' '}
                                    Rarity: <span style={{ color: '#FF7507' }}>{item.carIs}</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
        </>
    );
};

export default MainSlider;
