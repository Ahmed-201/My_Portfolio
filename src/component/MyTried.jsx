import React from 'react'

function MyTried() {
    return (
        <div className='bg_dark text-light'>
 <div className='container w-full '>
            <div className='my_tried_heading w-50'>

                <h2 className='text-red-500'>My Proven Web Development Process</h2>
            </div>

            <div className="container my_tried_procedure d-grid gap-3">

                <div className="row">
                    <div className="col-12 col-lg-4 col-md-4 col-sm-12">
                        <p>(01)</p>
                        <h2>Discovery</h2>
                        <p>I start by understanding your business goals, target users, and technical requirements to ensure the right solution from day one.</p>
                    </div>
                    <div className="col-12 col-lg-4 col-md-4 col-sm-12">
                        <p>(02)</p>
                        <h2> Strategy</h2>
                        <p>Next, I define the application architecture, tech stack, and development roadmap aligned with your business objectives.</p>
                    </div>
                    <div className="col-12 col-lg-4 col-md-4 col-sm-12">
                        <p>(03)</p>
                        <h2> System Design</h2>
                        <p>Based on project complexity, I create wireframes and system flows to align on functionality, user journeys, and data structure.</p>
                    </div>

                </div>
                <div className="row ">
                    <div className="col-12 col-lg-4 col-md-4 col-sm-12">
                        <p>(04)</p>
                        <h2>Development</h2>
                        <p>I build scalable, secure, and high-performance web applications using modern technologies and clean coding practices.</p>
                    </div>
                    <div className="col-12 col-lg-4 col-md-4 col-sm-12">
                        <p>(05)</p>
                        <h2>Testing</h2>
                        <p>I test for performance, responsiveness, and edge cases, optimizing the application for speed, usability, and reliability.</p>
                    </div>
                    <div className="col-12 col-lg-4 col-md-4 col-sm-12">
                        <p>(06)</p>
                        <h2>Deployment</h2>
                        <p>Finally, I deploy the application, ensure smooth handover, and provide post-launch support when needed.</p>
                    </div>

                </div>
            </div>



        </div>

        </div>
       
    )
}

export default MyTried
