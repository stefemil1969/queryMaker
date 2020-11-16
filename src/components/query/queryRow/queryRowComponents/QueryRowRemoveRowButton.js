import React from 'react';

const QueryRowRemoveRowButton = ({
  groupId,
  rowId,
  field,
  removeRowFromGroup,
  rowIndex,
  groupIndex,
  updateFieldsInGroup,
}) => {
  const handleClick = (groupId, rowId) => {
    updateFieldsInGroup(groupIndex);
    removeRowFromGroup(groupId, rowId);
  };
  return (
    <div>
      <button
        className='btn btn-danger btn-sm'
        onClick={(e) => handleClick(groupId, rowId)}
        disabled={rowIndex === 0 ? true : false}
        style={{
          marginTop: '2.1rem',
          marginLeft: '1rem',
          position: 'relative',
        }}
      >
        Remove Row
      </button>
    </div>
  );
};

export default QueryRowRemoveRowButton;
