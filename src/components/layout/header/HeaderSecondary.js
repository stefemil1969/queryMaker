import React from 'react';
import TotalUsedData from './headerSecondary/TotalUsedData';
function HeaderSecondary() {
  return (
    <div className='container-fluid' id='header-secondary'>
      <div className='container'>
        <div className='row'>
          <TotalUsedData />
        </div>
      </div>
    </div>
  );
}

export default HeaderSecondary;
