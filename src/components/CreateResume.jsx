import React from 'react'
import ResumePreview from './ResumePreview'

const CreateResume = () => {
  return (
   <div className="container-fluid p-4">
       <div className="row">
           <div className="col-5">
               <ResumePreview/>
           </div>
           <div className="col-4">
           <h3>Create Resume</h3> 
           </div>
       </div>
   </div>
  )
}

export default CreateResume