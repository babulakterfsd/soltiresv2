/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from 'react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import image1 from '../../assets/images/sliderCarImages/Bitmap.png';
import thumbImage1 from '../../assets/images/sliderCarImages/thumb(1).png';
import thumbImage2 from '../../assets/images/sliderCarImages/thumb(2).png';
import thumbImage4 from '../../assets/images/sliderCarImages/thumb(4).png';
import thumbImage5 from '../../assets/images/sliderCarImages/thumb(5).png';
// styles
import Class from './main.module.css';
import './swiper-bundle.css';
// array of images
const sliderImage = [
    {
        image: image1,
        title: 'Ford Focus RS 2017 **315 OVR**',
        Stats: '315 OVR',
        Acceleration: '100',
        MaxSpeed: '125',
        Grip: '90',
        Description:
            'If you have this in your 20’ you might look cool. Get this later on and people might think that you are going through a strange period',
        carName: 'Ford Focus RS',
        carIs: ' 25%',
    },
    {
        image: image1,
        title: 'Ford Focus RS 2017 **315 OVR**',
        Stats: '315 OVR',
        Acceleration: '100',
        MaxSpeed: '125',
        Grip: '90',
        Description:
            'If you have this in your 20’ you might look cool. Get this later on and people might think that you are going through a strange period',
        carName: 'Ford Focus RS',
        carIs: ' 25%',
    },
    {
        image: image1,
        title: 'Ford Focus RS 2017 **315 OVR**',
        Stats: '315 OVR',
        Acceleration: '100',
        MaxSpeed: '125',
        Grip: '90',
        Description:
            'If you have this in your 20’ you might look cool. Get this later on and people might think that you are going through a strange period',
        carName: 'Ford Focus RS',
        carIs: ' 25%',
    },
    {
        image: image1,
        title: 'Ford Focus RS 2017 **315 OVR**',
        Stats: '315 OVR',
        Acceleration: '100',
        MaxSpeed: '125',
        Grip: '90',
        Description:
            'If you have this in your 20’ you might look cool. Get this later on and people might think that you are going through a strange period',
        carName: 'Ford Focus RS',
        carIs: ' 25%',
    },
    {
        image: image1,
        title: 'Ford Focus RS 2017 **315 OVR**',
        Stats: '315 OVR',
        carName: 'Ford Focus RS',
        carIs: '25%',
        Acceleration: '100',
        MaxSpeed: '125',
        Grip: '90',
        Description:
            'If you have this in your 20’ you might look cool. Get this later on and people might think that you are going through a strange period',
    },

    {
        image: thumbImage1,
        title: 'Ford Focus RS 2017 **315 OVR**',
        Stats: '315 OVR',
        carName: 'Ford Focus RS',
        carIs: '25%',
        Acceleration: '100',
        MaxSpeed: '125',
        Grip: '90',
        Description:
            'If you have this in your 20’ you might look cool. Get this later on and people might think that you are going through a strange period',
    },
    {
        image: thumbImage2,
        title: 'Ford Focus RS 2017 **315 OVR**',
        Stats: '315 OVR',
        carName: 'Ford Focus RS',
        carIs: ' 25%',
        Acceleration: '100',
        MaxSpeed: '125',
        Grip: '90',
        Description:
            'If you have this in your 20’ you might look cool. Get this later on and people might think that you are going through a strange period',
    },
    {
        image: thumbImage4,
        title: 'Ford Focus RS 2017 **315 OVR**',
        Stats: '315 OVR',
        Acceleration: '100',
        carName: 'Ford Focus RS',
        carIs: ' 25%',
        MaxSpeed: '125',
        Grip: '90',
        Description:
            'If you have this in your 20’ you might look cool. Get this later on and people might think that you are going through a strange period',
    },
    {
        image: thumbImage5,
        title: 'Ford Focus RS 2017 **315 OVR**',
        Stats: '315 OVR',
        Acceleration: '100',
        carName: 'Ford Focus RS',
        carIs: ' 25%',
        MaxSpeed: '125',
        Grip: '90',
        Description:
            'If you have this in your 20’ you might look cool. Get this later on and people might think that you are going through a strange period',
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
                        className={`${Class.bgImage2} md:h-screen grid md:grid-cols-2 items-center gap-x-30 w-4/5 mx-auto my-8 px-8`}
                    >
                        <div>
                            <img
                                src={sliderImage[index]?.image}
                                alt=""
                                data-aos="zoom-in"
                                data-aos-duration="2000"
                                className="w-full h-full"
                            />
                            <button
                                type="button"
                                className="primary-btn px-16 ml-8 hidden md:block"
                                onClick={(e) => e.preventDefault()}
                            >
                                MORE
                            </button>
                        </div>
                        <div className="md:text-left text-center space-y-4 md:mt-0 mt-10">
                            <div className="text-main-white lg:text-5xl md:text-4xl text-3xl font-bold">{`0${
                                index + 1
                            }`}</div>
                            <div className="text-main-white lg:text-3xl md:text-2xl text-xl font-bold">
                                {sliderImage[index]?.title}
                            </div>
                            <div className="text-main-white lg:text-2xl md:text-xl">
                                Stats:{' '}
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
                        <button
                            type="button"
                            className="primary-btn block md:hidden w-2/4 mx-auto my-5"
                            onClick={(e) => e.preventDefault()}
                        >
                            MORE
                        </button>
                    </div>
                    {/* buttons */}
                    <div className="absolute top-2/4 w-full flex justify-between">
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
                                <div className="text-main-white mt:8 py-5 font-bold border-b border-dashed">
                                    {item.carName}
                                </div>
                                <div className="text-main-white pt-5">
                                    {' '}
                                    Car Is <span style={{ color: '#FF7507' }}>{item.carIs}</span>
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
