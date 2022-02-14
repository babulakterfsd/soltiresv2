/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import Tick from '../../assets/images/greenTick.png';
import Minus from '../../assets/images/redMinus.png';
import MainTitle from '../Shared/MainTitle';
import '../styles/timeLine.css';
import RoadMapDetailsDesktop from './RoadMapDetailsDesktop';
import RoadMapDetailsMobile from './RoadMapDetailsMobile';
import RoadMapDetailsTablet from './RoadMapDetailsTablet';

const data = [
    {
        id: 1,
        date: 'Dec. 2021',
        title: 'Launch Roadmap',
        options: [
            {
                name: 'Launch  Website V1.',
                icon: Tick,
            },
            {
                name: 'Open Cars Minting',
                icon: Tick,
            },
            {
                name: 'Launch  Website V1.',
                icon: Tick,
            },
            {
                name: 'Open Cars Minting',
                icon: Minus,
            },
            {
                name: 'Launch  Website V1.',
                icon: Minus,
            },
            {
                name: 'Open Cars Minting',
                icon: Minus,
            },
        ],
    },
    {
        id: 2,
        date: 'Dec. 2021',
        title: 'Launch Roadmap',
        options: [
            {
                name: 'Launch  Website V1.',
                icon: Tick,
            },
            {
                name: 'Open Cars Minting',
                icon: Tick,
            },
            {
                name: 'Launch  Website V1.',
                icon: Tick,
            },
            {
                name: 'Open Cars Minting',
                icon: Minus,
            },
            {
                name: 'Launch  Website V1.',
                icon: Minus,
            },
            {
                name: 'Open Cars Minting',
                icon: Minus,
            },
        ],
    },
    {
        id: 3,
        date: 'Dec. 2021',
        title: 'Launch Roadmap',
        options: [
            {
                name: 'Launch  Website V1.',
                icon: Tick,
            },
            {
                name: 'Open Cars Minting',
                icon: Tick,
            },
            {
                name: 'Launch  Website V1.',
                icon: Tick,
            },
            {
                name: 'Open Cars Minting',
                icon: Minus,
            },
            {
                name: 'Launch  Website V1.',
                icon: Minus,
            },
            {
                name: 'Open Cars Minting',
                icon: Minus,
            },
        ],
    },
    {
        id: 4,
        date: 'Dec. 2021',
        title: 'Launch Roadmap',
        options: [
            {
                name: 'Launch  Website V1.',
                icon: Tick,
            },
            {
                name: 'Open Cars Minting',
                icon: Tick,
            },
            {
                name: 'Launch  Website V1.',
                icon: Tick,
            },
            {
                name: 'Open Cars Minting',
                icon: Minus,
            },
            {
                name: 'Launch  Website V1.',
                icon: Minus,
            },
            {
                name: 'Open Cars Minting',
                icon: Minus,
            },
        ],
    },
    {
        id: 5,
        date: 'Dec. 2021',
        title: 'Launch Roadmap',
        options: [
            {
                name: 'Launch  Website V1.',
                icon: Tick,
            },
            {
                name: 'Open Cars Minting',
                icon: Tick,
            },
            {
                name: 'Launch  Website V1.',
                icon: Tick,
            },
            {
                name: 'Open Cars Minting',
                icon: Minus,
            },
            {
                name: 'Launch  Website V1.',
                icon: Minus,
            },
            {
                name: 'Open Cars Minting',
                icon: Minus,
            },
        ],
    },
];

const RoadMapDetails = () => (
    <div id="road-map">
        <div className="mt-20 ">
            <MainTitle title="Soltires Road Map" />

            {window.innerWidth <= 575 ? (
                <RoadMapDetailsMobile data={data} />
            ) : window.innerWidth >= 576 && window.innerWidth <= 991 ? (
                <RoadMapDetailsTablet data={data} />
            ) : (
                <RoadMapDetailsDesktop data={data} />
            )}
        </div>
    </div>
);

export default RoadMapDetails;
