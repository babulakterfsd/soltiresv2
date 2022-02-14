import React from 'react';
import roadMapImg from '../../assets/images/road.png';
import RoadMapCard from './RoadMapCard';

const RoadMapDetailsDesktop = ({ data }) => {
    const firstColumn = [data[0], data[1]];
    const secondColumn = [data[2], data[3], data[4]];

    return (
        <div className="my-container">
            <div className="flex justify-evenly">
                {firstColumn.map((d) => (
                    <RoadMapCard d={d} key={d.id} />
                ))}
            </div>

            <div>
                <img src={roadMapImg} alt="road" />
            </div>

            <div className="flex justify-evenly">
                {secondColumn.map((d) => (
                    <RoadMapCard d={d} key={d.id} />
                ))}
            </div>
        </div>
    );
};

export default RoadMapDetailsDesktop;
