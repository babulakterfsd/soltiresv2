import React from 'react';

function MainTitle({ title, sx }) {
    return (
        <div
            style={sx}
            className="text-main-white capitalize font-bold text-center font-montserrat"
        >
            <span className="hidden lg:block w-full text-center text-8xl opacity-5 relative top-14">
                {title}
            </span>
            <h2 className="block text-2xl sm:text-3xl md:text-5xl lg:text-7xl">{title}</h2>
        </div>
    );
}

export default MainTitle;
