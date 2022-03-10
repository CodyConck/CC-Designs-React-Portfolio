import React from 'react'

const Resume = () => {
    return (
        <div className='container-fluid' id='resume'>
                <h2> Resume </h2>
                <div className='container' id='resume'>
                    <h3> Cody Concklin </h3>
                    <section id='resume-info'>
                        <p>Aspiring Web Developer with a life-long passion for learning new tools to better myself. My professional duties have afforded me a wide array of skills which I apply on a daily basis to work with others on collaborative projects. 
                        </p>
                    </section>
                    <h4> Technical Skills</h4>
                    <section id='resume-info'>
                        <h4>Front End</h4>
                        <ul>
                            <li>Javascript</li>
                            <li>HTML5</li>
                            <li>CSS</li>
                            <li>Bootstrap</li>
                            <li>React</li>
                        </ul>
                        <h4>Back End</h4>
                        <ul>
                            <li>NodeJS</li>
                            <li>Express</li>
                            <li>MongoDB</li>
                            <li>Mongoos</li>
                            <li>GraphQL</li>
                        </ul>
                    </section>
                    <h4>Education</h4>
                    <section id='resume-info'>
                        <p>Vanderbilt University Bootcamp Certificate</p>
                        <p>A 24-week intensive program focused on gaining technical programming skills in HTML5, CSS3, JavaScript, jQuery, Bootstrap, Firebase, Node Js, MySQL, MongoDB, Express, Handelbars.js, GraphQL & ReactJS.
                        </p>
                        <p>BA Political Science with concentrations in Lit and History - University of Tennessee, Knoxville</p>
                    </section>
                </div>
        </div>
    )
}

export default Resume
