import React from 'react'

const Upload = ({files, setFiles}) => {

  
  return (
    <>
      <div className='file-card'>
        Upload File
        <div className='file-inputs'>
          <input type='file' />
        </div>
      </div>
    </>
    
  )
}

export default Upload;