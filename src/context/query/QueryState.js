import React, { useReducer } from 'react';
// import axios from 'axios';
import QueryContext from './queryContext';
import queryReducer from './queryReducer';

import {
  GET_QUERY,
  ADD_GROUP,
  REMOVE_GROUP,
  ADD_ROW,
  REMOVE_ROW,
  CHANGE_ROW_FIELD,
  CHANGE_ROW_PACKAGE_NAME,
  CHANGE_ROW_USER,
  CHANGE_ROW_PACKAGE_TYPE,
  CHANGE_ROW_UPLOAD_STATUS,
  CHANGE_ROW_PACKAGE_SIZE,
  CHANGE_ROW_DATE,
  UPDATE_FIELDS_IN_GROUP,
} from '../types';

const QueryState = (props) => {
  const initialState = {
    query: [
      {
        groupId: '0',

        content: [
          {
            rowId: '0',
            field: '',
            from: '',
            to: '',
            selectedOption: '',
          },
        ],
      },
    ],

    selectField: [
      { label: 'Package Name', variable: 'packageName' },
      { label: 'User', variable: 'user' },
      { label: 'Date', variable: 'date' },
      { label: 'Package Type', variable: 'packageType' },
      { label: 'Package Size', variable: 'packageSize' },
      { label: 'Upload Status', variable: 'uploadStatus' },
      { label: 'Creator', variable: 'creator' },
      { label: 'Related Units', variable: 'relatedUnits' },
    ],
    selectUser: [
      { label: 'Stef', var: 'stef' },
      { label: 'Lucy', var: 'lucy' },
      { label: 'Tim', var: 'tim' },
    ],
    selectPackageType: [
      { label: 'AIP', var: 'AIP' },
      { label: 'DIP', var: 'DIP' },
    ],
    selectUploadStatus: [
      { label: 'Uploaded', var: 'UPLOADED' },
      { label: 'Failed', var: 'FAILED' },
    ],
    loading: false,
  };

  const [state, dispatch] = useReducer(queryReducer, initialState);

  const addGroup = (data) => {
    dispatch({
      type: ADD_GROUP,
      payload: data,
    });
  };

  const removeGroup = (data) => {
    dispatch({
      type: REMOVE_GROUP,
      payload: data,
    });
  };

  const addRow = (data) => {
    dispatch({
      type: ADD_ROW,
      payload: data,
    });
  };

  const removeRow = (data) => {
    dispatch({
      type: REMOVE_ROW,
      payload: data,
    });
  };

  const changeRowField = (data) => {
    dispatch({
      type: CHANGE_ROW_FIELD,
      payload: data,
    });
  };

  const changeRowPackageName = (data) => {
    dispatch({
      type: CHANGE_ROW_PACKAGE_NAME,
      payload: data,
    });
  };

  const changeRowUser = (data) => {
    dispatch({
      type: CHANGE_ROW_USER,
      payload: data,
    });
  };

  const changeRowPackageType = (data) => {
    dispatch({
      type: CHANGE_ROW_PACKAGE_TYPE,
      payload: data,
    });
  };

  const changeRowUploadStatus = (data) => {
    dispatch({
      type: CHANGE_ROW_UPLOAD_STATUS,
      payload: data,
    });
  };

  const changeRowPackageSize = (data) => {
    dispatch({
      type: CHANGE_ROW_PACKAGE_SIZE,
      payload: data,
    });
  };

  const changeRowDate = (data) => {
    dispatch({
      type: CHANGE_ROW_DATE,
      payload: data,
    });
  };

  const updateFieldsInGroup = (data) => {
    dispatch({
      type: UPDATE_FIELDS_IN_GROUP,
      payload: data,
    });
  };

  return (
    <QueryContext.Provider
      value={{
        query: state.query,
        selectField: state.selectField,
        selectUser: state.selectUser,
        selectPackageType: state.selectPackageType,
        selectUploadStatus: state.selectUploadStatus,
        addGroup,
        removeGroup,
        addRow,
        removeRow,
        changeRowField,
        changeRowPackageName,
        changeRowUser,
        changeRowPackageType,
        changeRowUploadStatus,
        changeRowPackageSize,
        changeRowDate,
        updateFieldsInGroup,
      }}
    >
      {props.children}
    </QueryContext.Provider>
  );
};

export default QueryState;
