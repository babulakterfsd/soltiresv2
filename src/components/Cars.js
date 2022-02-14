// import React from 'react';
// import Slider from 'react-slick';
// import one from '../assets/images/cars/Beatle0001.png';
// import three from '../assets/images/cars/CookieBox1.png';
// import two from '../assets/images/cars/thesleeper.png';
// import '../assets/slick/slick-theme.css';
// import '../assets/slick/slick.css';
// import MainTitle from './Shared/MainTitle';

// const carData = [
//     {
//         id: 1,
//         img: one,
//         title: 'Ford Focus RS 2017 *315 OVR*',
//         name: 'Teenage Madness',
//         stats: '',
//         acceleration: 100,
//         maxSpeed: 125,
//         grip: 90,
//         description:
//             'If you have this in your 20’ you might look cool. Get this later on and people might think that you are going through a strange period',
//     },
//     {
//         id: 2,
//         img: two,
//         title: 'Aston Martin *315 OVR*',
//         name: 'Teenage Madness',
//         stats: '',
//         acceleration: 100,
//         maxSpeed: 125,
//         grip: 90,
//         description:
//             'If you have this in your 20’ you might look cool. Get this later on and people might think that you are going through a strange period',
//     },
//     {
//         id: 3,
//         img: three,
//         title: 'Alfa Romeo. *315 OVR*',
//         name: 'Teenage Madness',
//         stats: '',
//         acceleration: 100,
//         maxSpeed: 125,
//         grip: 90,
//         description:
//             'If you have this in your 20’ you might look cool. Get this later on and people might think that you are going through a strange period',
//     },
// ];

// const Cars = () => {
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 3000,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//     };

//     return (
//         <div className="my-container text-center mt-10 lg:mt-0 overflow-hidden">
//             <div className="mt-0 md:mt-10 mb-8">
//                 <MainTitle title="Our Cars" />
//             </div>

//             <div
//                 className="max-w-[991px] mx-auto pb-20"
//                 data-aos="flip-left"
//                 data-aos-duration="1500"
//             >
//                 <Slider {...settings}>
//                     {carData.map((data) => (
//                         <div
//                             key={data.id}
//                             className="bg-[rgba(0,0,0,.85)] rounded-xl  md:rounded-3xl p-4 md:p-16"
//                         >
//                             <div className="rounded-xl md:rounded-2xl overflow-hidden">
//                                 <img
//                                     className="w-full h-auto md:h-96 md:object-contain"
//                                     src={data.img}
//                                     alt=""
//                                 />
//                             </div>
//                             <div className="space-y-1 rounded-xl md:rounded-2xl">
//                                 <h3 className="text-main-white text-xl md:text-3xl font-montserrat font-bold mt-6 md:mt-10 mb-4 md:mb-10">
//                                     {data.title}
//                                 </h3>
//                                 <p className="text-main-white">
//                                     Name: <span className="text-orange">{data.name}</span>
//                                 </p>
//                                 <p className="text-main-white">
//                                     Stats: <span className="text-orange">{data.stats}</span>
//                                 </p>
//                                 <p className="text-main-white">
//                                     Acceleration:{' '}
//                                     <span className="text-orange">{data.acceleration}</span>
//                                 </p>
//                                 <p className="text-main-white">
//                                     Max Speed: <span className="text-orange">{data.maxSpeed}</span>
//                                 </p>
//                                 <p className="text-main-white">
//                                     Grip: <span className="text-orange">{data.grip}</span>
//                                 </p>
//                                 <p className="text-main-white mb-16 md:mb-32">
//                                     Description:{' '}
//                                     <span className="text-orange">{data.description}</span>
//                                 </p>
//                             </div>
//                         </div>
//                     ))}
//                 </Slider>
//             </div>
//         </div>
//     );
// };

// export default Cars;
