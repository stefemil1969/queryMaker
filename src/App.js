import React, { Fragment } from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Navbar from './components/layout/header/HeaderContainer';
import QueryState from './context/query/QueryState';
// import AuthState from './context/auth/AuthState';

import './App.css';
import HeaderContainer from './components/layout/header/HeaderContainer';
import MainContainer from './components/layout/main/MainContainer';
import FooterContainer from './components/layout/footer/FooterContainer';

// if (localStorage.token) {
//   setAuthToken(localStorage.token);
// }

const App = () => {
  return (
    // <AuthState>
    <QueryState>
      <Fragment>
        <HeaderContainer />
        <MainContainer />
        <FooterContainer />
      </Fragment>
    </QueryState>
    // </AuthState>
  );
};

export default App;
