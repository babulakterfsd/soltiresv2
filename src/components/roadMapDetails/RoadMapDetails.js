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
        date: 'Nov. 2021',
        title: 'Inception',
        options: [
            {
                name: 'Launch website V1',
                icon: Tick,
            },
            {
                name: 'Demo game development',
                icon: Tick,
            },
            {
                name: 'Design 15 distinct car models',
                icon: Tick,
            },
            {
                name: 'Release white paper',
                icon: Tick,
            },
            {
                name: 'Launch website V2',
                icon: Tick,
            },
        ],
    },
    {
        id: 2,
        date: 'Feb. 2022',
        title: 'Phase 1',
        options: [
            {
                name: 'Community events',
                icon: Minus,
            },
            {
                name: 'Public game beta (for WLs)',
                icon: Minus,
            },
            {
                name: 'Car Mint',
                icon: Minus,
            },
            {
                name: 'Surprise airdrop for holders',
                icon: Minus,
            },
            {
                name: 'Implementation feedback into game',
                icon: Minus,
            },
        ],
    },
    {
        id: 3,
        date: 'Q2. 2022',
        title: 'Phase 2',
        options: [
            {
                name: 'Launch $TIRE',
                icon: Minus,
            },
            {
                name: 'Airdrop $TIRE to holders and WLs',
                icon: Minus,
            },
            {
                name: 'Public game launch',
                icon: Minus,
            },
            {
                name: 'Design components',
                icon: Minus,
            },
            {
                name: 'SolTires Arena development',
                icon: Minus,
            },
        ],
    },
    {
        id: 4,
        date: 'Q3. 2022',
        title: 'Phase 3',
        options: [
            {
                name: 'Implement new components and circuits into game',
                icon: Minus,
            },
            {
                name: 'Components mint (engines, transmissions & tires)',
                icon: Minus,
            },
            {
                name: 'SolTires: Arena expansion ',
                icon: Minus,
            },
        ],
    },
    {
        id: 5,
        date: 'Q4. 2022',
        title: 'Phase 4',
        options: [
            {
                name: 'SolTires Arena Metaverse beta',
                icon: Minus,
            },
        ],
    },
];


const RoadMapDetails = () => (
    <div id="road-map">
        <div className="mt-20 ">
            <MainTitle title="Roadmap" />

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
