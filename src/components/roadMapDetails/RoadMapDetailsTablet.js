import React from 'react';
import RoadMapCard from './RoadMapCard';

const RoadMapDetailsTablet = ({ data }) => (
    <div className="my-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {data.map((d) => (
                <RoadMapCard d={d} key={d.id} />
            ))}
        </div>
    </div>
);

export default RoadMapDetailsTablet;
