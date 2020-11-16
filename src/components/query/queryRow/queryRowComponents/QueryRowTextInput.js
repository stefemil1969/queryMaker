import React from 'react';
import QueryContext from '../../../../context/query/queryContext';
const QueryRowTextInput = ({
  groupIndex,
  rowIndex,
  changePackageNameInRow,
}) => {
  const handleChange = (e, groupIndex, rowIndex) => {
    changePackageNameInRow(e.target.value, groupIndex, rowIndex);
  };

  return (
    <div className='col-3'>
      <label htmlFor='PackageName'>Type a package name:</label>
      <input
        type='text'
        name='PackageName'
        className='form-control form-control-sm'
        onChange={(e) => {
          handleChange(e, groupIndex, rowIndex);
        }}
      />
    </div>
  );
};

export default QueryRowTextInput;
