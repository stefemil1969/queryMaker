import React from 'react';
import HeaderPrimary from './HeaderPrimary';
import HeaderSecondary from './HeaderSecondary';
function HeaderContainer() {
  return (
    <header id="header-container">
        <HeaderSecondary />
        <HeaderPrimary />
    </header>
  );
}

export default HeaderContainer;
