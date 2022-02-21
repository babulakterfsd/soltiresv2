import React from 'react';
import Slider from 'react-slick';
import {
    default as partner1,
    default as partner2,
    default as partner3,
    default as partner4,
    default as partner5
} from '../../assets/images/sliderdemo.png';
import '../../assets/slick/slick-theme.css';
import '../../assets/slick/slick.css';
import MainTitle from '../Shared/MainTitle';

const Partners = () => {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      className="my-container my-2 md:my-14"
      data-aos="zoom-in"
      data-aos-duration="1500"
    >
      <div className="mb-8 md:mb-14">
        <MainTitle title="Our Partners" />
      </div>
      <Slider {...settings} className="w-11/12 mx-auto">
        <div className="mx-16 flex justify-center items-center">
          <a href="https://nftsolana.io/" target="_blank">
            <img src={partner1} alt="aacd" />
          </a>
        </div>
        <div className="mx-16 flex justify-center items-center">
          <a href="https://nftsolana.io/" target="_blank">
            <img src={partner2} alt="asda" />
          </a>
        </div>
        <div className="mx-16 flex justify-center items-center">
          <a href="https://nftsolana.io/" target="_blank">
            <img src={partner3} alt="aadad" />
          </a>
        </div>
        <div className="mx-16 flex justify-center items-center">
          <a href="https://nftsolana.io/" target="_blank">
            <img src={partner4} alt="aaasda" />
          </a>
        </div>
        <div className="mx-16 flex justify-center items-center">
          <a href="https://nftsolana.io/" target="_blank">
            <img src={partner5} alt="aaasda" />
          </a>
        </div>
      </Slider>
    </div>
  );
};

export default Partners;
