import React from 'react';

const CurrentQuerySize = () => {
  const totalData = 10000000;
  const currentQuerySize = 87423;
  return (
    <div className='col-lg-6' id='current-query-size'>
      <div>
        <strong>Size of current query: {currentQuerySize} Mb</strong>
      </div>
      <div>
        ({((currentQuerySize / totalData) * 100).toFixed(1)}% of your total data
        allowance)
      </div>
    </div>
  );
};

export default CurrentQuerySize;
