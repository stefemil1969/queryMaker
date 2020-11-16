import React, { Fragment, useContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import QueryGroupAddGroupButton from './queryGroupComponents/QueryGroupAddGroupButton';
import QueryGroupRemoveGroupButton from './queryGroupComponents/QueryGroupRemoveGroupButton';
import QueryRow from '../queryRow/QueryRow';
import QueryContext from '../../../context/query/queryContext';

const QueryGroup = ({
  groupId,
  addRowToGroup,
  removeRowFromGroup,
  addGroupToContainer,
  removeGroupFromContainer,
  changeFieldInRow,
  changeUsersInRow,
  changePackageTypeInRow,
  changeUploadStatusInRow,
  changeDateInRow,
  changePackageNameInRow,
  changePackageSizeInRow,
  updateFieldsInGroup,
  groupIndex,
}) => {
  const queryContext = useContext(QueryContext);
  const { query } = queryContext;

  const [groupState, setGroupState] = useState([]); // only created the first time the component renders

  useEffect(() => {

  }, [groupState]);

  return (
    <Fragment>
      <div className='row' id='query-group'>
        <div className='col'>
          <div
            className='col'
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}
          >
            <QueryGroupAddGroupButton
              addGroupToContainer={addGroupToContainer}
              groupIndex={groupIndex}
            />
            <QueryGroupRemoveGroupButton
              groupId={groupId}
              groupIndex={groupIndex}
              removeGroupFromContainer={removeGroupFromContainer}
            />
          </div>
          {query.map((item, index) => {
            if (item.groupId === groupId) {
              return item.content.map((obj, objIndex) => {
                return (
                  <QueryRow
                    key={obj.rowId}
                    groupId={groupId}
                    rowId={obj.rowId}
                    field={obj.field}
                    addRowToGroup={addRowToGroup}
                    removeRowFromGroup={removeRowFromGroup}
                    rowIndex={objIndex}
                    groupIndex={groupIndex}
                    changeFieldInRow={changeFieldInRow}
                    changeUsersInRow={changeUsersInRow}
                    changePackageTypeInRow={changePackageTypeInRow}
                    changeUploadStatusInRow={changeUploadStatusInRow}
                    changeDateInRow={changeDateInRow}
                    changePackageNameInRow={changePackageNameInRow}
                    changePackageSizeInRow={changePackageSizeInRow}
                    updateFieldsInGroup={updateFieldsInGroup}
                    
                  />
                );
              });
            }
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default QueryGroup;
