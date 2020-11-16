import React, { useEffect, useState, useContext } from 'react';
import QueryContext from '../../../../context/query/queryContext';

const QueryRowSelectField = ({
  groupIndex,
  rowIndex,
  changeFieldInRow,
  updateFieldsInGroup,
}) => {
  const queryContext = useContext(QueryContext);
  const { query, selectField } = queryContext;

  const [selectFieldState, setSelectFieldState] = useState('');

  const [fieldsState, setFieldsState] = useState([
    { label: 'Package Name', value: 'packageName' },
    { label: 'User', value: 'user' },
    { label: 'Date', value: 'date' },
    { label: 'Package Type', value: 'packageType' },
    { label: 'Package Size', value: 'packageSize' },
    { label: 'Upload Status', value: 'uploadStatus' },
    { label: 'Creator', value: 'creator' },
    { label: 'Related Units', value: 'relatedUnits' },
  ]);

  const populateSelectField = () => {
    let usedFields = [];
    query.map((item, index) => {
      if (index === groupIndex) {
        item.content.map((obj, objIndex) => {
          usedFields.push(obj.field);
        });
        return usedFields;
      }
    });

    let filteredDropdownFields = fieldsState.filter(
      (f) => !usedFields.includes(f.value)
    );

    let toPopulate = filteredDropdownFields.map((item) => {
      return (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      );
    });
    return toPopulate;
  };

  const handleChange = (e, changeFieldInRow, groupIndex, rowIndex) => {
    let selectedValue = e.currentTarget.value;
    updateFieldsInGroup(groupIndex);
    changeFieldInRow(selectedValue, groupIndex, rowIndex);
    setSelectFieldState(selectedValue);
  };

  return (
    <div className='col-2'>
      <label htmlFor='field'>Select a field:</label>
      <select
        value={selectFieldState}
        name='field'
        onChange={(e) => {
          handleChange(e, changeFieldInRow, groupIndex, rowIndex);
        }}
        className='form-control form-control-sm'
      >
        {populateSelectField()}
      </select>
    </div>
  );
};

export default QueryRowSelectField;
