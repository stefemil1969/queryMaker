import React from 'react';
const Logo = () => {
  return (
    <div className='col-lg-2' id='header-logo'>
      <img src={process.env.PUBLIC_URL + '/img/soteria-logo.png'} alt='logo' />
    </div>
  );
};

export default Logo;
