import React, { useState } from 'react';
import roadMapImg from '../../assets/images/road.png';
import RoadMapCard from './RoadMapCard';

const RoadMapDetailsDesktop = ({ data }) => {
    const [firstColumn, setFirstColumn] = useState([data[1], data[3]]);
    const [secondColumn, setSecondColumn] = useState([data[0], data[2], data[4]]);

    console.log(setFirstColumn, setSecondColumn);

    return (
        <div className="my-container">
            <div className="flex justify-evenly">
                {firstColumn.map((d) => (
                    <RoadMapCard d={d} />
                ))}
            </div>

            <div>
                <img src={roadMapImg} alt="road" />
            </div>

            <div className="flex justify-evenly">
                {secondColumn.map((d) => (
                    <RoadMapCard d={d} />
                ))}
            </div>
        </div>
    );
};

export default RoadMapDetailsDesktop;
