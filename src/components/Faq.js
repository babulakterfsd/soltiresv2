import { AccordionItem, AccordionWrapper } from 'custom-react-accordion';
import 'custom-react-accordion/dist/Accordion.css';
import React from 'react';
import './styles/Faq.css';

const faqs = [
    {
        id: 1,
        question: 'How many cars will be released?',
        answer: 'There will only be 6,666 cars available to be minted. These will be derived from 18 distinct car models.',
    },
    {
        id: 2,
        question: 'Will there be duplicates of each car NFT like most other projects?',
        answer: 'There will be no duplicates within our collection. Each car comes with a variety of attributes to make them 100% unique and rare.',
    },
    {
        id: 3,
        question: 'What platforms will the SolTires game be available on?',
        answer: 'Initially the game will be playable exclusively on PC. However, as soon as the game is stable and bug-free we will also release it on iOS & Android. There are currently no plans to add any other platforms.',
    },
    {
        id: 4,
        question: 'How to play the game?',
        answer: 'You must own a  car to start playing. You can obtain one through a giveaway or buying it from a secondary market. In the second phase we will allow car owners to rent out their cars. This is the stage where early investors will start to earn passive rental income.',
    },
    {
        id: 5,
        question: 'What wallets can I use?',
        answer: 'We recommend using either the Phantom wallet or SolFlare wallet.',
    },
    {
        id: 6,
        question: 'Whitelisting and its benefits?',
        answer: 'In order to get whitelisted you need to obtain rank level 7 in our Discord server along with inviting 3 friends. Getting whitelisted holds a few perks such as a reduced mint price, play the SolTires’ alpha version early and getting access to exclusive giveaways.',
    },
    {
        id: 7,
        question: 'When can I mint a car?',
        answer: 'The exact mint date has not been determined yet. It will take place either at the end of February or the beginning of March 2022.',
    },
    {
        id: 8,
        question: 'What will the mint price be?',
        answer: 'If you are whitelisted you will be able to mint a car for 0.50 SOL in the presale. The public mint price will be 1.00 SOL.',
    },
    {
        id: 8,
        question: 'How many cars can I mint?',
        answer: 'We have decided to cap the number of cars each person can mint to a maximum of 5.',
    },
];
const Faq = () => (
    <div
        id="faqContainer"
        className="pt-12 md:pt-20 my-container faq-bg"
        data-aos="zoom-in"
        data-aos-duration="1500"
    >
        <h2 className="text-main-white font-montserrat font-bold uppercase text-2xl md:text-6xl text-center mb-12">
            Faq
        </h2>
        <AccordionWrapper>
            {faqs.map((item, index) => (
                <AccordionItem
                    key={item.id}
                    index={index}
                    title={item.question}
                    description={item.answer}
                />
            ))}
        </AccordionWrapper>
    </div>
);
export default Faq;
