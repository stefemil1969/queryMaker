import React, { useState, useEffect } from 'react';

const QueryRowDateInput = ({ groupIndex, rowIndex, role, changeDateInRow }) => {
  const [selectDateState, setSelectDateState] = useState('');
  useEffect(() => {
    handleChange(selectDateState, groupIndex, rowIndex, role);
  }, [selectDateState]);

  const handleChange = (value, groupIndex, rowIndex, role) => {
    changeDateInRow(value, groupIndex, rowIndex, role);
  };

  return (
    <div className='col-3'>
      <label htmlFor='date'>
        Enter {role === 'from' ? 'from' : 'to'} date:
      </label>
      <input
        type='date'
        name='the date'
        value={selectDateState}
        className='form-control form-control-sm'
        onChange={(e) => setSelectDateState(e.target.value)}
      />
    </div>
  );
};

export default QueryRowDateInput;
