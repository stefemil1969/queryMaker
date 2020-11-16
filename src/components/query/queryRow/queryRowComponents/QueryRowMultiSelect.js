import React, { useState, useContext, useEffect } from 'react';
import QueryContext from '../../../../context/query/queryContext';

const QueryRowMultiSelect = ({ groupId, rowId, field }) => {
  const queryContext = useContext(QueryContext);
  const {
    multiSelect,
    selectPackageType,
    selectUser,
    selectUploadStatus,
  } = queryContext;

  const [selectPackageTypeState, setSelectPackageTypeState] = useState({
    selectedPackageTypeValues: [],
  });

  const [selectUserState, setSelectUserState] = useState({
    selectedUserValues: [],
  });

  const [selectUploadStatusState, setSelectUploadStatusState] = useState({
    selectedUploadStatusValues: [],
  });

  useEffect(() => {
    // console.log('selectUserState: ', selectUserState);
    // console.log('selectPackageTypeState: ', selectPackageTypeState);
    // console.log('selectUploadStatusState: ', selectUploadStatusState);
  }, [selectUserState, selectPackageTypeState, selectUploadStatusState]);

  const populateMultiSelectField = (
    field,
    selectUser,
    selectPackageType,
    selectUploadStatus
  ) => {
    switch (field) {
      case 'PackageType':
        return selectPackageType.map((item) => {
          return (
            <option key={item.var} value={item.var}>
              {item.label}
            </option>
          );
        });

      case 'User':
        return selectUser.map((item) => {
          return (
            <option key={item.var} value={item.var}>
              {item.label}
            </option>
          );
        });

      case 'UploadStatus':
        return selectUploadStatus.map((item) => {
          return (
            <option key={item.var} value={item.var}>
              {item.label}
            </option>
          );
        });
    }
  };

  const handleChange = (e, field) => {
    console.log('field: ', field);
    let options = e.target.options;
    let numOptions = e.target.options.length;

    let selectedPackageTypeValues = [];
    let selectedUserValues = [];
    let selectedUploadStatusValues = [];

    if (field === 'PackageType') {
      for (let index = 0, le = numOptions; index < le; index++) {
        if (options[index].selected) {
          selectedPackageTypeValues.push(options[index].value);
        }
      }
      let selected = 'selected';
      let values = 'Values';
      console.log('var: ', eval(selected + field + values));
      return setSelectPackageTypeState(selectedPackageTypeValues);
    } else if (field === 'User') {
      for (let index = 0, le = numOptions; index < le; index++) {
        if (options[index].selected) {
          selectedUserValues.push(options[index].value);
        }
      }

      return setSelectUserState(selectedUserValues);
    } else if (field === 'UploadStatus') {
      for (let index = 0, le = numOptions; index < le; index++) {
        if (options[index].selected) {
          selectedUploadStatusValues.push(options[index].value);
        }
      }
      return setSelectUploadStatusState(selectedUploadStatusValues);
    }

    // 1. assigns options property of the event target to let options and deduces the number of available options by its length.
    // 2. Primes an empty array called selectedValues.
    // 3. Loops through options to see if they're selected.
    // 4. If they are pushes them to the selectedValues array.
  };

  // console.log('selectedUserValues: ', eval(selected + field + values ));

  return (
    <div className='col-2'>
      <label htmlFor='field'>Select:</label>
      <select
        value={['test']}
        multiple={true}
        onChange={(e) => {
          handleChange(e, field);
        }}
        className='form-control form-control-sm'
      >
        {populateMultiSelectField(
          field,
          selectUser,
          selectPackageType,
          selectUploadStatus
        )}
      </select>
    </div>
  );
};

export default QueryRowMultiSelect;
