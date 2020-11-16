import React, { useState, useContext, useEffect } from 'react';
import QueryContext from '../../../../context/query/queryContext';

const QueryRowMultiSelectUploadStatus = ({
  groupIndex,
  rowIndex,
  changeUploadStatusInRow,
}) => {
  const queryContext = useContext(QueryContext);
  const { selectUploadStatus } = queryContext;
  const [selectUploadStatusState, setselectUploadStatusState] = useState([]);

  const populateMultiSelectField = (selectUploadStatus) => {
    return selectUploadStatus.map((item) => {
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

    let selectedUploadStatusValues = [];
    for (let index = 0, le = numOptions; index < le; index++) {
      if (options[index].selected) {
        selectedUploadStatusValues.push(options[index].value);
      }
    }
    changeUploadStatusInRow(selectedUploadStatusValues, groupIndex, rowIndex);
    return setselectUploadStatusState(selectedUploadStatusValues);
  };

  return (
    <div className='col-3'>
      <label htmlFor='field'>Select upload status:</label>
      <select
        value={selectUploadStatusState}
        multiple={true}
        onChange={(e) => {
          handleChange(e, groupIndex, rowIndex);
        }}
        className='form-control form-control-sm'
      >
        {populateMultiSelectField(selectUploadStatus)}
      </select>
    </div>
  );
};

export default QueryRowMultiSelectUploadStatus;
