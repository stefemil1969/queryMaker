import React, { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import QueryGroup from './queryGroup/QueryGroup';
import QueryContext from '../../context/query/queryContext';

const QueryContainer = () => {
  const queryContext = useContext(QueryContext);
  const { query } = queryContext;

  const addGroupToContainer = () => {
    query.push({
      groupId: uuidv4(),
      content: [
        {
          rowId: uuidv4(),
          field: '',
          from: '',
          to: '',
        },
      ],
    });
    return queryContext.addGroup(query);
  };

  const addRowToGroup = (groupId) => {
    query.map((item) => {
      if (item.groupId === groupId) {
        item.content.push({
          rowId: uuidv4(),
          field: '',
          from: '',
          to: '',
        });
      }
    });
    return queryContext.addRow(query);
  };

  const removeGroupFromContainer = (groupId) => {
    let newQuery = query;
    let filteredContent = newQuery.filter((item) => {
      return item.groupId !== groupId;
    });
    newQuery = filteredContent;
    queryContext.removeGroup(newQuery);
  };

  const removeRowFromGroup = (groupId, rowId) => {
    // 1 get instance of query from context and label it
    let newQuery = query;

    // 2. Map through this until we have the group which we need to update
    newQuery.map((item) => {
      if (item.groupId === groupId) {
        // 3. remove the row we don't want anymore and label the remaining content as 'filteredContent'
        let filteredContent = item.content.filter((obj) => {
          return obj.rowId !== rowId;
        });

        // 4. Overwrite existing content with filteredContent
        item.content = filteredContent;
      }

      // 5. add to context
      queryContext.removeRow(newQuery);
    });
  };

  const changeFieldInRow = (selectedValue, groupIndex, rowIndex) => {
    // if(selectedValue === '') {selectedValue = 'packageName'}

    console.log('selectedValue');
    let updatedQuery = query;
    query.map((item, index) => {
      if (index === groupIndex) {
        return item.content.map((obj, objIndex) => {
          if (objIndex === rowIndex) {
            updatedQuery[groupIndex].content[rowIndex].field = selectedValue;
            return queryContext.changeRowField(query);
          }
        });
      }
    });
  };

  const changeUsersInRow = (selectedUserValues, groupIndex, rowIndex) => {
    let updatedQuery = query;
    query.map((item, index) => {
      if (index === groupIndex) {
        item.content.map((obj, objIndex) => {
          if (objIndex === rowIndex) {
            updatedQuery[groupIndex].content[
              rowIndex
            ].from = selectedUserValues;
            return queryContext.changeRowUser(query);
          }
        });
      }
    });
  };

  const changePackageTypeInRow = (
    selectedPackageTypeValues,
    groupIndex,
    rowIndex
  ) => {
    let updatedQuery = query;
    query.map((item, index) => {
      if (index === groupIndex) {
        item.content.map((obj, objIndex) => {
          if (objIndex === rowIndex) {
            updatedQuery[groupIndex].content[
              rowIndex
            ].from = selectedPackageTypeValues;
            return queryContext.changeRowPackageType(query);
          }
        });
      }
    });
  };

  const changeUploadStatusInRow = (
    selectedPackageTypeValues,
    groupIndex,
    rowIndex
  ) => {
    let updatedQuery = query;
    query.map((item, index) => {
      if (index === groupIndex) {
        item.content.map((obj, objIndex) => {
          if (objIndex === rowIndex) {
            updatedQuery[groupIndex].content[
              rowIndex
            ].from = selectedPackageTypeValues;
            return queryContext.changeRowPackageType(query);
          }
        });
      }
    });
  };

  const changePackageNameInRow = (value, groupIndex, rowIndex) => {
    let updatedQuery = query;
    query.map((item, index) => {
      if (index === groupIndex) {
        item.content.map((obj, objIndex) => {
          if (objIndex === rowIndex) {
            updatedQuery[groupIndex].content[rowIndex].from = value;
            return queryContext.changeRowPackageName(query);
          }
        });
      }
    });
  };

  const changePackageSizeInRow = (value, groupIndex, rowIndex, role) => {
    let updatedQuery = query;
    query.map((item, index) => {
      if (index === groupIndex) {
        item.content.map((obj, objIndex) => {
          if (objIndex === rowIndex) {
            role === 'from'
              ? (updatedQuery[groupIndex].content[rowIndex].from = value)
              : (updatedQuery[groupIndex].content[rowIndex].to = value);
            return queryContext.changeRowPackageSize(query);
          }
        });
      }
    });
  };

  const changeDateInRow = (value, groupIndex, rowIndex, role) => {
    let updatedQuery = query;
    query.map((item, index) => {
      if (index === groupIndex) {
        item.content.map((obj, objIndex) => {
          if (objIndex === rowIndex) {
            role === 'from'
              ? (updatedQuery[groupIndex].content[rowIndex].from = value)
              : (updatedQuery[groupIndex].content[rowIndex].to = value);
            return queryContext.changeRowDate(query);
          }
        });
      }
    });
  };

  const updateFieldsInGroup = (groupIndex) => {
    let usedFields = [];
    query.map((item, index) => {
      if (index === groupIndex) {
        item.content.map((obj, objIndex) => {
          usedFields.push(obj.field);
        });
        return usedFields;
      }
    });
    console.log('query in container: ', query);
  };

  return (
    <div className='container-fluid' id='query-container'>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <button className='btn btn-labelled btn-success btn-sm'>
              <span className='btn-label'>
                <i className='fas fa-search' aria-hidden='true'></i>
              </span>
              Search
            </button>
            {query.map((item, index) => {
              return (
                <QueryGroup
                  key={item.groupId}
                  groupId={item.groupId}
                  addRowToGroup={addRowToGroup}
                  removeRowFromGroup={removeRowFromGroup}
                  addGroupToContainer={addGroupToContainer}
                  removeGroupFromContainer={removeGroupFromContainer}
                  changeFieldInRow={changeFieldInRow}
                  changeUsersInRow={changeUsersInRow}
                  changePackageTypeInRow={changePackageTypeInRow}
                  changeUploadStatusInRow={changeUploadStatusInRow}
                  changeDateInRow={changeDateInRow}
                  changePackageNameInRow={changePackageNameInRow}
                  changePackageSizeInRow={changePackageSizeInRow}
                  updateFieldsInGroup={updateFieldsInGroup}
                  groupIndex={index}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QueryContainer;
