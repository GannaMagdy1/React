import React from 'react'

const FooterContactDetails = () => {
    return (<>
        <div className=' FooterContactDetails  p-4'>
            <div className="container p-4 mt-1">
                <div className="row">
                    <div className="col-md-4">
                        <div className="inner">
                            <h3>LOCATION</h3>
                            <p className='fw-normal'>2215 John Daniel Drive</p>
                            <p className='fw-normal'>Clark, MO 65243</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="inner">
                            <h3>AROUND THE WEB</h3>
                            <div className="socialIcons d-flex justify-content-center align-items-center gy-5">
                    
                                   <div className="facebook mx-1">
                                     <i className='socialMedia ' class=" fa-brands fa-facebook" />
                                   </div>
                                    <div className="twitter mx-1">
                                        <i className='socialMedia ' class="fa-brands fa-twitter" />
                                    </div>
                                    <div className="linkedin mx-1">
                                        <i className='socialMedia  ' class="fa-brands fa-linkedin-in" />
                                    </div>
                                    <div className="globe mx-1">
                                        <i className='socialMedia  ' class="fa-solid fa-globe" />
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="inner">
                            <h3>ABOUT FREELANCER</h3>
                            <p className='fw-normal'>Freelance is a free to use, licensed Bootstrap</p>
                            <p className='fw-normal'>theme created by Route</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>

    )
}

export default FooterContactDetails