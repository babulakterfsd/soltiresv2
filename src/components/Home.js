import React, { useEffect, useState } from 'react';
import ReactGA from 'react-ga';
import MainSlider from '../pages/slider/MainSlider';
import About from './About';
import Collections from './Collections';
import Community from './Community';
import Faq from './Faq';
import Features from './Features';
import GameModes from './GameModes';
import GamingFuture from './GamingFuture';
import Hero from './Hero';
import RoadMapDetails from './roadMapDetails/RoadMapDetails';
import Footer from './Shared/Footer';
import MainTitle from './Shared/MainTitle';
import Nav from './Shared/Nav';
import Team from './Team';
import WhiteListing from './Whitelisting';

const Home = () => {
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
        <div className="w-full mx-auto ">
            <Nav />
            <Hero />
            <About />
            <WhiteListing />
            <GameModes />
            <Features />
            <Collections />
            <div id="cars">
                <MainTitle title="Our Cars" />
                <MainSlider />
            </div>
            <GamingFuture />
            <RoadMapDetails />
            <Faq />
            <Community />
            <Team />
            <Footer />

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
        </div>
    );
};

export default Home;
