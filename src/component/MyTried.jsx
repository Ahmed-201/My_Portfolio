import React from 'react'

function MyTried() {
    return (
        <div className='bg_dark text-light'>
 <div className='container w-full '>
            <div className='my_tried_heading w-full lg:w-1/2  pt-12 pb-12 md:pt-24 md:pb-24 lg:pt-30 lg:pb-30 font-[Inter\ Tight] font-semibold tracking-tight
               text-2xl md:text-4xl lg:text-6xl
               leading-snug md:leading-normal lg:leading-[73px]'>

                <h2 className='text-2xl md:text-4xl lg:text-5xl'>My Proven Web Development Process</h2>
            </div>

            <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-4 px-4">

              
                    <div className="">
                        <p>(01)</p>
                        <h2 className='text-md md:text-4xl lg:text-6xl' >Discovery</h2>
                        <p className='text-[#929292] text-sm md:text-lg lg:text4xl fw-bold' >I start by understanding your business goals, target users, and technical requirements to ensure the right solution from day one.</p>
                    </div>
                    <div className="">
                        <p>(02)</p>
                        <h2 className='text-md md:text-4xl lg:text-6xl'> Strategy</h2>
                        <p className='text-[#929292] text-sm md:text-lg lg:text4xl fw-bold' >Next, I define the application architecture, tech stack, and development roadmap aligned with your business objectives.</p>
                    </div>
                    <div className="">
                        <p>(03)</p>
                        <h2 className='text-md md:text-4xl lg:text-6xl'> System Design</h2>
                        <p className='text-[#929292] text-sm md:text-lg lg:text4xl fw-bold' >Based on project complexity, I create wireframes and system flows to align on functionality, user journeys, and data structure.</p>
                    </div>

            
                    <div className="">
                        <p>(04)</p>
                        <h2 className='text-md md:text-4xl lg:text-6xl'>Development</h2>
                        <p className='text-[#929292] text-sm md:text-lg lg:text4xl fw-bold' >I build scalable, secure, and high-performance web applications using modern technologies and clean coding practices.</p>
                    </div>
                    <div className="">
                        <p>(05)</p>
                        <h2 className='text-md md:text-4xl lg:text-6xl'>Testing</h2>
                        <p className='text-[#929292] text-sm md:text-lg lg:text4xl fw-bold' >I test for performance, responsiveness, and edge cases, optimizing the application for speed, usability, and reliability.</p>
                    </div>
                    <div className="">
                        <p>(06)</p>
                        <h2 className='text-md md:text-4xl lg:text-6xl'>Deployment</h2>
                        <p className='text-[#929292] text-sm md:text-lg lg:text4xl fw-bold' >Finally, I deploy the application, ensure smooth handover, and provide post-launch support when needed.</p>
                    </div>
               
            </div>

        </div>

        </div>
       
    )
}

export default MyTried
