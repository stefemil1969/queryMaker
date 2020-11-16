import React, { useContext } from 'react';
import QueryContext from '../../../../context/query/queryContext';
const QueryGroupRemoveGroupButton = ({
  groupId,
  groupIndex,
  removeGroupFromContainer,
}) => {
  const queryContext = useContext(QueryContext);
  const { query } = queryContext;

  const handleClick = (groupId) => {
    removeGroupFromContainer(groupId);
  };

  return (
    <div>
      <button
        className='btn btn-danger btn-sm'
        onClick={(e) => handleClick(groupId)}
        // disabled={
        //   groupIndex === 0 || groupIndex !== query.length - 1 ? true : false
        // }
        disabled={groupIndex === 0 ? true : false}
        style={{
          marginTop: '2.1rem',
          marginLeft: '1rem',
          position: 'relative',
        }}
      >
        Remove Group
      </button>
    </div>
  );
};

export default QueryGroupRemoveGroupButton;
