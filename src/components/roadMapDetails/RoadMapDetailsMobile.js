import React from 'react';

const roadMapDetailsMobile = ({ data }) =>
    data.map((d) => (
        <div key={d.id} className="block timeline font-montserrat">
            <div className="container right">
                <div className="content text-main-white bg-[rgba(0,0,0,.85)]">
                    <h2 className="text-xl font-semibold">{d.date}</h2>
                    <h2 className="text-xl text-orange font-semibold">{d.title}</h2>

                    {d.options.map((op) => (
                        <h4 key={d.id} className="flex items-center space-x-2 space-y-2 ">
                            <span>
                                <img src={op.icon} alt="" />
                            </span>
                            <span>{op.name}</span>
                        </h4>
                    ))}
                </div>
            </div>
        </div>
    ));

export default roadMapDetailsMobile;
