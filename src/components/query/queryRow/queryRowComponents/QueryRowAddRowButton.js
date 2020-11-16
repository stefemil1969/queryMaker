import React, { useContext } from 'react';
import QueryContext from '../../../../context/query/queryContext';
const QueryRowAddRowButton = ({
  groupId,
  rowId,
  addRowToGroup,
  rowIndex,
  groupIndex,
  updateFieldsInGroup,
}) => {
  const queryContext = useContext(QueryContext);
  const { query } = queryContext;
  const fromField = query[groupIndex].content[rowIndex].from;
  const toField = query[groupIndex].content[rowIndex].to;

  const handleClick = (groupId) => {
    updateFieldsInGroup(groupIndex);
    addRowToGroup(groupId);
  };

  return (
    <div>
      <button
        className='btn btn-primary btn-sm'
        onClick={(e) => handleClick(groupId)}
        disabled={
          rowIndex !== query[groupIndex].content.length - 1 ||
          (fromField === '' && toField === '')
            ? true
            : false
        }
        style={{ marginTop: '2.1rem', position: 'relative' }}
      >
        Add New Row
      </button>
    </div>
  );
};

export default QueryRowAddRowButton;
