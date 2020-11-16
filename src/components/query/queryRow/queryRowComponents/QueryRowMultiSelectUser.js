import React, { useState, useContext, useEffect } from 'react';
import QueryContext from '../../../../context/query/queryContext';

const QueryRowMultiSelectUser = ({
  groupIndex,
  rowIndex,
  field,
  changeUsersInRow,
}) => {
  const queryContext = useContext(QueryContext);
  const { selectUser } = queryContext;

  const [selectUserState, setSelectUserState] = useState([]);

  const populateMultiSelectField = (selectUser) => {
    return selectUser.map((item) => {
      return (
        <option key={item.var} value={item.var}>
          {item.label}
        </option>
      );
    });
  };

  const handleChange = (e, groupIndex, rowIndex) => {
    let options = e.target.options;
    let numOptions = e.target.options.length;

    let selectedUserValues = [];
    for (let index = 0, le = numOptions; index < le; index++) {
      if (options[index].selected) {
        selectedUserValues.push(options[index].value);
      }
    }

    changeUsersInRow(selectedUserValues, groupIndex, rowIndex);
    return setSelectUserState(selectedUserValues);
  };

  return (
    <div className='col-3'>
      <label htmlFor='field'>Select user(s):</label>
      <select
        value={selectUserState}
        multiple={true}
        onChange={(e) => {
          handleChange(e, groupIndex, rowIndex);
        }}
        className='form-control form-control-sm'
      >
        {populateMultiSelectField(selectUser)}
      </select>
    </div>
  );
};

export default QueryRowMultiSelectUser;
