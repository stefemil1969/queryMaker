import React from 'react';
const ButtonPanel = () => {
  return (
    <div className='col-lg-7' id='button-panel'>
      <button className='btn btn-outline-light'>Help</button>
      <button className='btn btn-outline-light'>Settings</button>
      <button className='btn btn-info'>Sync</button>
    </div>
  );
};

export default ButtonPanel;
