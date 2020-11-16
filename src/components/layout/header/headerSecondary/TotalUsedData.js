import React from 'react';
const TotalUsedData = () => {
    const totalData = 10000000;
    let usedData = 6780000; 
  return (
    <div className='col' id='total-used-data'>
      <span><strong>Total Data: </strong>
      {totalData} Mb</span>
      <span><strong>Used Data: </strong>
      {usedData} Mb - ({((usedData / totalData) * 100).toFixed(1)}% of total)</span>
    </div>
  );
};

export default TotalUsedData;
