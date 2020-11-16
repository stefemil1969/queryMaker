import React, { useContext, useEffect } from 'react';
import QueryContext from '../../../../context/query/queryContext';
const QueryGroupAddGroupButton = ({ addGroupToContainer, groupIndex }) => {
  const queryContext = useContext(QueryContext);
  const { query } = queryContext;

  const anyContentInGroup = () => {
    query.map((item) => {
      item.content.map((obj) => {
        return obj.from !== '' || obj.to !== '' ? false : true;
      });
    });
  };

  const handleClick = () => {
    addGroupToContainer();
  };

  return (
    <div>
      <button
        className='btn btn-primary btn-sm'
        onClick={(e) => handleClick()}
        disabled={
          groupIndex !== query.length - 1 ? true : false
        }
        style={{ marginTop: '2.1rem', position: 'relative' }}
      >
        Add New Group
      </button>
    </div>
  );
};

export default QueryGroupAddGroupButton;
