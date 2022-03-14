import React from 'react'
import '../assets/css/resume-preview.scss'

const ResumePreview = (props) => {

  return (
    <div className='resume-container border'>
        <div className="resume-header">
            <div className="basic-info d-flex justify-content-between p-2">
                <div className='d-flex align-items-center avatar-info'>
                <p>CC</p>
                </div>
                <div className='d-flex flex-column'>
                    <h3>Chris Candidate</h3>
                    <p className='fw-bold'>Human Resource Manager</p>
                </div>
                <div className='d-flex flex-column'>
                    <span>email id</span>
                    <span>Bengaluru,Karnataka,560045</span>
                    <span>0860064694</span>
                </div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa error laboriosam modi a corporis ducimus necessitatibus assumenda! Quos, magni nihil?</p>
        </div>
        <div className="resume-main-section px-2">
        <div className="experience-section">
            <h4 className='resume-title'>Professional Experience</h4>
            <div className="experience-details row">
                <div className="text-muted col-3">
                    <small>January 2016 - Present</small>
                </div>
                <div className='col-9'>
                    <div className='d-flex gap-2'>
                        <b>Human Resource Manager</b>
                        <b>-</b>
                        <span className='text-muted'>Jim's Factory</span>
                    </div>
                    <ul className='text-muted position-details m-0 p-0'>
                        <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, dignissimos.</li>
                        <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, dignissimos.</li>
                        <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, dignissimos.</li>
                    </ul>
                </div>
            </div>
            <div className="experience-details row mt-2">
                <div className="text-muted col-3">
                    <small>January 2016 - Present</small>
                </div>
                <div className='col-9'>
                    <div className='d-flex gap-2'>
                        <b>Human Resource Manager</b>
                        <b>-</b>
                        <span className='text-muted'>Jim's Factory</span>
                    </div>
                    <ul className='text-muted position-details m-0 p-0'>
                        <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, dignissimos.</li>
                        <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, dignissimos.</li>
                        <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, dignissimos.</li>
                    </ul>
                </div>
            </div>

            {/* Education */}
            <div className="education-section">
            <h4 className='resume-title mt-2'>Education</h4>
            <div className="experience-details row mt-2">
                <div className="text-muted col-3">
                    <small>January 2016 - Present</small>
                </div>
                <div className='col-9'>
                    <div className='d-flex gap-2'>
                        <b>in Human Resources</b>
                        <b>-</b>
                        <span className='text-muted'>The university of texas</span>
                    </div>
                    <ul className='text-muted position-details m-0 p-0'>
                        <li>Academic awards</li>
                    </ul>
                </div>
            </div>
            </div>
            {/* Key Skills */}
            <div className="keys-skills-section">
            <h4 className='resume-title mt-2'>Education</h4>
            <div className="experience-details mt-2">
            <ul className='text-muted position-details m-0 p-0'>
                        <li>Leadership Skills</li>
                        <li>Well Versed</li>
                    </ul>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default ResumePreview