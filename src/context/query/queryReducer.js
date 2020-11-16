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

export default (state, action) => {
  switch (action.type) {
    case GET_QUERY:
      return {
        ...state,
        query: action.payload,
      };
    case ADD_GROUP:
      return {
        ...state,
        query: action.payload,
      };
    case REMOVE_GROUP:
      return {
        ...state,
        query: action.payload,
      };
    case ADD_ROW:
      return {
        ...state,
        query: action.payload,
      };

    case REMOVE_ROW:
      return {
        ...state,
        query: action.payload,
      };

    case CHANGE_ROW_FIELD:
      return {
        ...state,
        query: action.payload,
      };
    case CHANGE_ROW_PACKAGE_NAME:
      return {
        ...state,
        query: action.payload,
      };
    case CHANGE_ROW_USER:
      return {
        ...state,
        query: action.payload,
      };

    case CHANGE_ROW_PACKAGE_TYPE:
      return {
        ...state,
        query: action.payload,
      };

    case CHANGE_ROW_UPLOAD_STATUS:
      return {
        ...state,
        query: action.payload,
      };

    case CHANGE_ROW_PACKAGE_SIZE:
      return {
        ...state,
        query: action.payload,
      };

    case CHANGE_ROW_DATE:
      return {
        ...state,
        query: action.payload,
      };

    case UPDATE_FIELDS_IN_GROUP:
      return {
        ...state,
        query: action.payload,
      };
      

    default:
      return state;
  }
};
