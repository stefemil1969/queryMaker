import React from 'react';
import QueryContainer from '../../query/QueryContainer';
// import ResultsContainer from './ResultsContainer';
import TopPanelContainer from './TopPanelContainer';

const MainContainer = () => {
  return (
    <main className='container-fluid'>
      <TopPanelContainer />
      <QueryContainer />
    </main>
  );
};

export default MainContainer;
