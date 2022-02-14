import { AccordionItem, AccordionWrapper } from 'custom-react-accordion';
import 'custom-react-accordion/dist/Accordion.css';
import React from 'react';
import './styles/Faq.css';

const faqs = [
    {
        id: 1,
        question: 'Is Soltires a NFT project?',
        answer: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
        id: 2,
        question: 'What is Soltires all about?',
        answer: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
        id: 3,
        question: 'Do I need an app to play the game?',
        answer: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
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
