import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import Footer from '../../components/Shared/Footer';
import Classes from '../../components/styles/WhiteListCheck.module.css';
import WhiteListNavbar from './WhiteListNavbar';

const WhiteListCheck = () => {
  const [windowHeight, setWindowHeight] = useState(false);
  let [address, setAddress] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setWindowHeight(window.scrollY > 150);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const submitHandler = () => {
    fetch(
      'https://att42xev0l.execute-api.eu-central-1.amazonaws.com/dev/is_whitelisted',
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          "sol_address": `${address}`
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.is_whitelisted === true) {
          Swal.fire(`You are whitelisted`);
          setAddress('');
        } else {
          Swal.fire(`Invalid Solana Address`);
          setAddress('')
        }
      });
  };

  return (
    <div className={`${Classes.whitelistbg}`}>
      <WhiteListNavbar />
      <div className={`my-container text-main-white flex justify-center `}>
        <div className="py-2 md:py-4">
          <div
            className={` ${Classes.mainContent} mt-24 md:mt-52 bg-[#080808d3] w-4/5 mx-auto px-3 sm:px-6 py-6 md:py-16 rounded-lg shadow-md`}
          >
            <div className="flex flex-wrap flex-col px-4">
              <h2 className="text-main-white text-center text-xl md:text-2xl font-montserrat font-bold mx-auto">
                Are You Whitelisted?
              </h2>
              <p className="mx-auto text-center mt-3">
                You can check if you are whitelisted or not by clicking the find
                button bellow after putting your solana address in the box.
              </p>
              <input
                type="text"
                className="w-full md:w-4/6 mt-8 mx-auto h-10 md:h-12 rounded-full text-center outline-none text-main-dark"
                placeholder="Your solana address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />

              <button
                type="button"
                className="primary-btn mt-4 md:mt-6 mx-auto px-5 md:px-8 lg:px-10"
                onClick={() => submitHandler()}
              >
                Find Now
              </button>
            </div>
          </div>
        </div>
      </div>
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

export default WhiteListCheck;
