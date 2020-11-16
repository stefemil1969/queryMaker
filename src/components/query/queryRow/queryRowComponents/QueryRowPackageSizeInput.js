import React from 'react';

const QueryRowPackageSizeInput = ({
  groupIndex,
  rowIndex,
  role,
  changePackageSizeInRow,
}) => {
  const handleChange = (e, groupIndex, rowIndex, role) => {
    changePackageSizeInRow(e.target.value, groupIndex, rowIndex, role);
  };
  return (
    <div className='col-3'>
      <label htmlFor='PackageName'>
        Enter package size {role === 'from' ? 'from' : 'to'}:
      </label>
      <input
        type='packageSize'
        name='packageSize'
        className='form-control form-control-sm'
        onChange={(e) => {
          handleChange(e, groupIndex, rowIndex, role);
        }}
      />
    </div>
  );
};

export default QueryRowPackageSizeInput;
