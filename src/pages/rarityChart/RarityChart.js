import React, { useEffect, useState } from 'react';
import ReactGA from 'react-ga';
import MainTitle from '../../components/Shared/MainTitle';
import Topbar from '../../components/Shared/Topbar';
import BodyColors from '../BodyColors';
import Headlights from '../Headlights';
import Class from '../slider/main.module.css';
import MainSlider from '../slider/MainSlider';
import SpoilersBackground from '../SpoilersBackground';
import SpoilersRedBody from '../SpoilersRedBody';
import Wheel from '../Wheel';
import RarityNavbar from './RarityNavbar';

const RarityChart = () => {
    const [windowHeight, setWindowHeight] = useState(false);

    useEffect(() => {
        ReactGA.initialize('UA-216011186-1');
        ReactGA.pageview(window.location.pathname);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setWindowHeight(window.scrollY > 500);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <>
            <div className={`${Class.bgImage}`}>
                <Topbar/>
                <RarityNavbar />
                <div>
                    <MainTitle title="RARITY CHART" sx={{ paddingTop: '150px' }} />
                    <h1 className="text-center md:text-4xl text-main-white mt-8 font-bold">
                        click on trait to navigate
                    </h1>
                    <MainSlider />
                </div>
            </div>
            <SpoilersBackground />
            <div className={`${Class.bg2Image}`}>
                <BodyColors />
                <SpoilersRedBody />
            </div>
            <Wheel />
            <Headlights />

            {/* scroll to top */}
            {windowHeight && (
                <button
                    type="button"
                    onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="scrollToTop"
                />
            )}
        </>
    );
};

export default RarityChart;
