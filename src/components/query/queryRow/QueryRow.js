import React, { Fragment } from 'react';
import QueryRowSelectField from './queryRowComponents/QueryRowSelectField';
import QueryRowMultiSelectUser from './queryRowComponents/QueryRowMultiSelectUser';
import QueryRowMultiSelectPackageType from './queryRowComponents/QueryRowMultiSelectPackageType';
import QueryRowMultiSelectUploadStatus from './queryRowComponents/QueryRowMultiSelectUploadStatus';
import QueryRowTextInput from './queryRowComponents/QueryRowTextInput';
import QueryRowDateInput from './queryRowComponents/QueryRowDateInput';
import QueryRowPackageSizeInput from './queryRowComponents/QueryRowPackageSizeInput';
import QueryRowAddRowButton from './queryRowComponents/QueryRowAddRowButton';
import QueryRowRemoveRowButton from './queryRowComponents/QueryRowRemoveRowButton';

const QueryRow = ({
  groupId,
  rowId,
  field,
  addRowToGroup,
  removeRowFromGroup,
  rowIndex,
  groupIndex,
  changeFieldInRow,
  changeUsersInRow,
  changePackageTypeInRow,
  changeUploadStatusInRow,
  changeDateInRow,
  changePackageNameInRow,
  changePackageSizeInRow,
  updateFieldsInGroup,
}) => {
  const populateRow = (groupId, rowId, field) => {
    switch (field) {
      case 'packageName':
        return (
          <Fragment>
            <QueryRowSelectField
              groupIndex={groupIndex}
              rowIndex={rowIndex}
              changeFieldInRow={changeFieldInRow}
              updateFieldsInGroup={updateFieldsInGroup}
            />
            <QueryRowTextInput
              groupIndex={groupIndex}
              rowIndex={rowIndex}
              changePackageNameInRow={changePackageNameInRow}
            />
            <QueryRowAddRowButton
              groupId={groupId}
              rowId={rowId}
              addRowToGroup={addRowToGroup}
              rowIndex={rowIndex}
              groupIndex={groupIndex}
              updateFieldsInGroup={updateFieldsInGroup}
            />
            <QueryRowRemoveRowButton
              groupId={groupId}
              rowId={rowId}
              field={field}
              removeRowFromGroup={removeRowFromGroup}
              rowIndex={rowIndex}
              groupIndex={groupIndex}
              updateFieldsInGroup={updateFieldsInGroup}
            />
          </Fragment>
        );

      case 'user':
        return (
          <Fragment>
            <QueryRowSelectField
              groupIndex={groupIndex}
              rowIndex={rowIndex}
              changeFieldInRow={changeFieldInRow}
              updateFieldsInGroup={updateFieldsInGroup}
            />
            <QueryRowMultiSelectUser
              groupIndex={groupIndex}
              rowIndex={rowIndex}
              field={field}
              changeUsersInRow={changeUsersInRow}
            />
            <QueryRowAddRowButton
              groupId={groupId}
              rowId={rowId}
              addRowToGroup={addRowToGroup}
              rowIndex={rowIndex}
              groupIndex={groupIndex}
              updateFieldsInGroup={updateFieldsInGroup}
            />
            <QueryRowRemoveRowButton
              groupId={groupId}
              rowId={rowId}
              field={field}
              removeRowFromGroup={removeRowFromGroup}
              rowIndex={rowIndex}
              groupIndex={groupIndex}
              updateFieldsInGroup={updateFieldsInGroup}
            />
          </Fragment>
        );

      case 'date':
        return (
          <Fragment>
            <QueryRowSelectField
              groupIndex={groupIndex}
              rowIndex={rowIndex}
              changeFieldInRow={changeFieldInRow}
              updateFieldsInGroup={updateFieldsInGroup}
            />
            <QueryRowDateInput
              groupIndex={groupIndex}
              rowIndex={rowIndex}
              role={'from'}
              changeDateInRow={changeDateInRow}
            />
            <QueryRowDateInput
              groupIndex={groupIndex}
              rowIndex={rowIndex}
              role={'to'}
              changeDateInRow={changeDateInRow}
            />
            <QueryRowAddRowButton
              groupId={groupId}
              rowId={rowId}
              addRowToGroup={addRowToGroup}
              rowIndex={rowIndex}
              groupIndex={groupIndex}
              updateFieldsInGroup={updateFieldsInGroup}
            />
            <QueryRowRemoveRowButton
              groupId={groupId}
              rowId={rowId}
              field={field}
              removeRowFromGroup={removeRowFromGroup}
              rowIndex={rowIndex}
              groupIndex={groupIndex}
              updateFieldsInGroup={updateFieldsInGroup}
            />
          </Fragment>
        );

      case 'packageSize':
        return (
          <Fragment>
            <QueryRowSelectField
              groupIndex={groupIndex}
              rowIndex={rowIndex}
              changeFieldInRow={changeFieldInRow}
              updateFieldsInGroup={updateFieldsInGroup}
            />
            <QueryRowPackageSizeInput
              groupIndex={groupIndex}
              rowIndex={rowIndex}
              role={'from'}
              changePackageSizeInRow={changePackageSizeInRow}
            />
            <QueryRowPackageSizeInput
              groupIndex={groupIndex}
              rowIndex={rowIndex}
              role={'to'}
              changePackageSizeInRow={changePackageSizeInRow}
            />
            <QueryRowAddRowButton
              groupId={groupId}
              rowId={rowId}
              addRowToGroup={addRowToGroup}
              rowIndex={rowIndex}
              groupIndex={groupIndex}
              updateFieldsInGroup={updateFieldsInGroup}
            />
            <QueryRowRemoveRowButton
              groupId={groupId}
              rowId={rowId}
              field={field}
              removeRowFromGroup={removeRowFromGroup}
              rowIndex={rowIndex}
              groupIndex={groupIndex}
              updateFieldsInGroup={updateFieldsInGroup}
            />
          </Fragment>
        );

      case 'packageType':
        return (
          <Fragment>
            <QueryRowSelectField
              groupIndex={groupIndex}
              rowIndex={rowIndex}
              changeFieldInRow={changeFieldInRow}
              updateFieldsInGroup={updateFieldsInGroup}
            />
            <QueryRowMultiSelectPackageType
              groupIndex={groupIndex}
              rowIndex={rowIndex}
              changePackageTypeInRow={changePackageTypeInRow}
            />
            <QueryRowAddRowButton
              groupId={groupId}
              rowId={rowId}
              addRowToGroup={addRowToGroup}
              rowIndex={rowIndex}
              groupIndex={groupIndex}
              updateFieldsInGroup={updateFieldsInGroup}
            />
            <QueryRowRemoveRowButton
              groupId={groupId}
              rowId={rowId}
              field={field}
              removeRowFromGroup={removeRowFromGroup}
              rowIndex={rowIndex}
              groupIndex={groupIndex}
              updateFieldsInGroup={updateFieldsInGroup}
            />
          </Fragment>
        );

      case 'uploadStatus':
        return (
          <Fragment>
            <QueryRowSelectField
              groupIndex={groupIndex}
              rowIndex={rowIndex}
              changeFieldInRow={changeFieldInRow}
              updateFieldsInGroup={updateFieldsInGroup}
            />
            <QueryRowMultiSelectUploadStatus
              groupIndex={groupIndex}
              rowIndex={rowIndex}
              field={field}
              changeUploadStatusInRow={changeUploadStatusInRow}
            />
            <QueryRowAddRowButton
              groupId={groupId}
              rowId={rowId}
              addRowToGroup={addRowToGroup}
              rowIndex={rowIndex}
              groupIndex={groupIndex}
              updateFieldsInGroup={updateFieldsInGroup}
            />
            <QueryRowRemoveRowButton
              groupId={groupId}
              rowId={rowId}
              field={field}
              removeRowFromGroup={removeRowFromGroup}
              rowIndex={rowIndex}
              groupIndex={groupIndex}
              updateFieldsInGroup={updateFieldsInGroup}
            />
          </Fragment>
        );
      case 'creator':
        return (
          <Fragment>
            <QueryRowSelectField
              groupIndex={groupIndex}
              rowIndex={rowIndex}
              changeFieldInRow={changeFieldInRow}
              updateFieldsInGroup={updateFieldsInGroup}
            />
            <QueryRowAddRowButton
              groupId={groupId}
              rowId={rowId}
              addRowToGroup={addRowToGroup}
              rowIndex={rowIndex}
              groupIndex={groupIndex}
              updateFieldsInGroup={updateFieldsInGroup}
            />
            <QueryRowRemoveRowButton
              groupId={groupId}
              rowId={rowId}
              field={field}
              removeRowFromGroup={removeRowFromGroup}
              rowIndex={rowIndex}
              groupIndex={groupIndex}
              updateFieldsInGroup={updateFieldsInGroup}
            />
          </Fragment>
        );
      case 'relatedUnits':
        return (
          <Fragment>
            <QueryRowSelectField
              groupIndex={groupIndex}
              rowIndex={rowIndex}
              changeFieldInRow={changeFieldInRow}
              updateFieldsInGroup={updateFieldsInGroup}
            />
            <QueryRowAddRowButton
              groupId={groupId}
              rowId={rowId}
              addRowToGroup={addRowToGroup}
              rowIndex={rowIndex}
              groupIndex={groupIndex}
              updateFieldsInGroup={updateFieldsInGroup}
            />
            <QueryRowRemoveRowButton
              groupId={groupId}
              rowId={rowId}
              field={field}
              removeRowFromGroup={removeRowFromGroup}
              rowIndex={rowIndex}
              groupIndex={groupIndex}
              updateFieldsInGroup={updateFieldsInGroup}
            />
          </Fragment>
        );

      default:
        return (
          <Fragment>
            <QueryRowSelectField
              groupIndex={groupIndex}
              rowIndex={rowIndex}
              changeFieldInRow={changeFieldInRow}
              updateFieldsInGroup={updateFieldsInGroup}
            />
            <QueryRowTextInput
              groupIndex={groupIndex}
              rowIndex={rowIndex}
              changePackageNameInRow={changePackageNameInRow}
            />
            <QueryRowAddRowButton
              groupId={groupId}
              rowId={rowId}
              addRowToGroup={addRowToGroup}
              rowIndex={rowIndex}
              groupIndex={groupIndex}
              updateFieldsInGroup={updateFieldsInGroup}
            />
            <QueryRowRemoveRowButton
              groupId={groupId}
              rowId={rowId}
              field={field}
              removeRowFromGroup={removeRowFromGroup}
              rowIndex={rowIndex}
              groupIndex={groupIndex}
              updateFieldsInGroup={updateFieldsInGroup}
            />
          </Fragment>
        );
    }
  };

  return (
    <div className='row' id='query-row'>
      {populateRow(groupId, rowId, field)}
    </div>
  );
};

export default QueryRow;
