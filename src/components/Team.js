import React from 'react';
import firstPerson from '../assets/images/firstPerson.svg';
import fourthPerson from '../assets/images/fourthPerson.svg';
import secondPerson from '../assets/images/secondPerson.svg';
import thirdPerson from '../assets/images/thirdPerson.svg';
import MainTitle from './Shared/MainTitle';
import Classes from './styles/RoadMap.module.css';

const roadMapData = [
    {
        id: 1,
        name: 'Ned Modin',
        title: 'King',
        description:
            'Mi habitant et commodo, nisi. Vitae tortor sed felis commodo. Vitae fames odio ut ut purus, amet porttitor. Fames consequat ut massa ut consectetur mi.',
        image: firstPerson,
    },
    {
        id: 2,
        name: 'Ned Modin',
        title: 'King',
        description:
            'Mi habitant et commodo, nisi. Vitae tortor sed felis commodo. Vitae fames odio ut ut purus, amet porttitor. Fames consequat ut massa ut consectetur mi.',
        image: secondPerson,
    },
    {
        id: 3,
        name: 'Ned Modin',
        title: 'King',
        description:
            'Mi habitant et commodo, nisi. Vitae tortor sed felis commodo. Vitae fames odio ut ut purus, amet porttitor. Fames consequat ut massa ut consectetur mi.',
        image: thirdPerson,
    },
    {
        id: 4,
        name: 'Ned Modin',
        title: 'King',
        description:
            'Mi habitant et commodo, nisi. Vitae tortor sed felis commodo. Vitae fames odio ut ut purus, amet porttitor. Fames consequat ut massa ut consectetur mi.',
        image: fourthPerson,
    },
];

const Team = () => (
    <>
        <div className="mt-10 lg:mt-0">
            <MainTitle title="Soltires Team" />
        </div>
        <div className="pt-10 lg:pt-20">
            <div
                className="my-container px-5 grid grid-cols-1 md:grid-cols-2 gap-8"
                data-aos="zoom-in"
                data-aos-duration="1500"
            >
                {roadMapData.map((data) => (
                    <div
                        key={data.id}
                        className={`${Classes.Card} group transition-all duration-500`}
                    >
                        <div className="p-4 grid grid-cols-1 lg:grid-cols-2 gap-x-8">
                            <div className="rounded-xl overflow-hidden sm:w-3/4 lg:w-full lg:h-64 mx-auto">
                                <img
                                    className="w-full h-full object-cover transition-all duration-300 transform group-hover:scale-105"
                                    src={data.image}
                                    alt=""
                                />
                            </div>
                            <div className="flex flex-col text-main-white font-montserrat mt-4 lg:mt-0 sm:text-center lg:text-left space-y-2">
                                <h2 className="text-base sm:text-3xl font-bold">{data.name}</h2>
                                <h3 className="text-base sm:text-3xl font-semibold text-orange">
                                    {data.title}
                                </h3>
                                <p className="text-justify">{data.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>
);

export default Team;
