import React from 'react';
import Logo from './headerPrimary/Logo';
import Title from './headerPrimary/Title';
import ButtonPanel from './headerPrimary/ButtonPanel';

const HeaderPrimary = () => {
  return (
    <div className='container-fluid' id='header-primary'>
      <div className='container'>
        <div className='row'>
          <Logo />
          <Title />
          <ButtonPanel />
        </div>
      </div>
    </div>
  );
}

export default HeaderPrimary;
