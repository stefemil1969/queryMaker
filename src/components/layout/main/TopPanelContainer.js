import React from 'react';
import ExportPanel from './topPanelContainer/ExportPanel';
import CurrentQuerySize from './topPanelContainer/CurrentQuerySize';

const TopPanelContainer = () => {
  return (
    <div className='container-fluid' id='top-panel-container'>
      <div className='container'>
        <div className='row'>
          <CurrentQuerySize />
          <ExportPanel />
        </div>
      </div>
    </div>
  );
};

export default TopPanelContainer;
