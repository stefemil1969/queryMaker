import React from 'react'

const ExportPanel = () => {
    return (
      <div className='col-lg-6' id='export-panel'>
        <button className='btn btn-labelled btn-primary btn-sm'>
          <span className='btn-label'>
            <i className='fas fa-file-csv' aria-hidden='true'></i>
          </span>
          Export as CSV
        </button>

        <button className='btn btn-labelled btn-primary btn-sm'>
          <span className='btn-label'>
            <i className='fas fa-file-pdf' aria-hidden='true'></i>
          </span>
          Export as PDF
        </button>

        <button className='btn btn-labelled btn-primary btn-sm'>
          <span className='btn-label'>
            <i className='fas fa-print' aria-hidden='true'></i>
          </span>
          Print Results
        </button>
      </div>
    );
}

export default ExportPanel
