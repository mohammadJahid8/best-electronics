import React from 'react';
import './Creative.css'

const CreativeTeam = () => {
    return (
        <div className='creative-body '>
            
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-12 col-sm-8 col-lg-6'>

                        <div className='section_heading text-center wow fadeInUp' data-wow-delay='0.2s' style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp' }}>
                            <h3 className='all-titles mb-4 mt-5'>Our Creative<span>Team</span></h3>

                            <div className='line'></div>
                        </div>
                    </div>
                </div>
                <div className='row'>

                    <div className='col-12 col-sm-6 col-lg-3'>
                        <div className='single_advisor_profile wow fadeInUp' data-wow-delay='0.2s' style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp' }}>

                            <div className='advisor_thumb'><img src='https://bootdey.com/img/Content/avatar/avatar1.png' alt='' />

                                <div className='social-info'><a href='#'><i className='fab fa-facebook-f'></i></a><a href='#'><i className='fab fa-twitter'></i></a><a href='#'><i className='fab fa-linkedin-in'></i></a></div>
                            </div>

                            <div className='single_advisor_details_info'>
                                <h6>Mohammad</h6>
                                <p className='designation'>Founder &amp; CEO</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-sm-6 col-lg-3'>
                        <div className='single_advisor_profile wow fadeInUp' data-wow-delay='0.3s' style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp' }}>

                            <div className='advisor_thumb'><img src='https://bootdey.com/img/Content/avatar/avatar7.png' alt='' />

                                <div className='social-info'><a href='#'><i className='fab fa-facebook-f'></i></a><a href='#'><i className='fab fa-twitter'></i></a><a href='#'><i className='fab fa-linkedin'></i></a></div>
                            </div>

                            <div className='single_advisor_details_info'>
                                <h6>Jahid</h6>
                                <p className='designation'>UI Designer</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-sm-6 col-lg-3'>
                        <div className='single_advisor_profile wow fadeInUp' data-wow-delay='0.4s' style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp' }}>

                            <div className='advisor_thumb'><img src='https://bootdey.com/img/Content/avatar/avatar6.png' alt='' />

                                <div className='social-info'><a href='#'><i className='fab fa-facebook-f'></i></a><a href='#'><i className='fab fa-twitter'></i></a><a href='#'><i className='fab fa-linkedin-in'></i></a></div>
                            </div>

                            <div className='single_advisor_details_info'>
                                <h6>Zidan</h6>
                                <p className='designation'>Developer</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-sm-6 col-lg-3'>
                        <div className='single_advisor_profile wow fadeInUp' data-wow-delay='0.5s' style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp' }}>

                            <div className='advisor_thumb'><img src='https://bootdey.com/img/Content/avatar/avatar2.png' alt='' />

                                <div className='social-info'><a href='#'><i className='fab fa-facebook'></i></a><a href='#'><i className='fab fa-twitter'></i></a><a href='#'><i className='fab fa-linkedin'></i></a></div>
                            </div>

                            <div className='single_advisor_details_info'>
                                <h6>Zifat</h6>
                                <p className='designation'>Marketing Manager</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default CreativeTeam;