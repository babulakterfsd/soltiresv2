import React from 'react';

const Topbar = () => {
  return (
    <div className="hidden lg:block text-center w-full bg-[#43a748] text-main-white py-.5 text-xl">
      Mega $25,000 giveway ongoing!{' '}
      <a
        href="https://twitter.com/SolTires_"
        target="_blank"
        rel="noreferrer"
        className="underline hover:text-orange"
      >
        Click
      </a>{' '}
      to join
    </div>
  );
};

export default Topbar;
