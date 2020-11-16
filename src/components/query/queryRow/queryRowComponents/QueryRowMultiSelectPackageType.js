import React, { useState, useContext, useEffect } from 'react';
import QueryContext from '../../../../context/query/queryContext';

const QueryRowMultiSelectPackageType = ({
  groupIndex,
  rowIndex,
  changePackageTypeInRow,
}) => {
  const queryContext = useContext(QueryContext);
  const { selectPackageType } = queryContext;

  const [selectPackageTypeState, setSelectPackageTypeState] = useState([]);

  const populateMultiSelectField = (selectPackageType) => {
    return selectPackageType.map((item) => {
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

    let selectedPackageTypeValues = [];
    for (let index = 0, le = numOptions; index < le; index++) {
      if (options[index].selected) {
        selectedPackageTypeValues.push(options[index].value);
      }
    }
    changePackageTypeInRow(selectedPackageTypeValues, groupIndex, rowIndex);
    return setSelectPackageTypeState(selectedPackageTypeValues);
  };

  return (
    <div className='col-3'>
      <label htmlFor='field'>Select package type(s):</label>
      <select
        value={selectPackageTypeState}
        multiple={true}
        onChange={(e) => {
          handleChange(e, groupIndex, rowIndex);
        }}
        className='form-control form-control-sm'
      >
        {populateMultiSelectField(selectPackageType)}
      </select>
    </div>
  );
};

export default QueryRowMultiSelectPackageType;
