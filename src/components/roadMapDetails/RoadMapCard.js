/* eslint-disable react/no-array-index-key */
/* eslint-disable prettier/prettier */
import React from 'react';

const RoadMapCard = ({ d }) => (
    <div key={d.id} className="font-montserrat">
        <div className="container">
            <div className="content text-main-white bg-[rgba(23,16,31,1)]">
                <div className="flex justify-between items-end">
                    <h2 className="text-xl font-semibold">{d.date}</h2>
                    <h2 className="text-5xl opacity-25">0{d.id}</h2>
                </div>
                <h2 className="text-xl text-orange font-semibold">{d.title}</h2>

                {d.options.map((op,i) => (
                    <h4 key={i} className="flex items-center space-x-2 space-y-2 ">
                        <span>
                            <img src={op.icon} alt="" />
                        </span>
                        <span>{op.name}</span>
                    </h4>
                ))}
            </div>
        </div>
    </div>
);

export default RoadMapCard;
