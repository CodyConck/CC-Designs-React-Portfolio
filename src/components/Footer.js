import React from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { BsEnvelope } from 'react-icons/bs'

const Footer = () => {
    return (
        <div id='footer' className= 'text-center'style={{ padding: 20 }}>
            <h4>
                
                <a href='https://github.com/codyconck' style={{ padding: 10 }} target='_blank' rel='noopener noreferrer' alt='GitHub profile link' >
                    <FaGithub/>
                </a>
                
                
                <a href='https://www.linkedin.com/in/cody-concklin-01a67b93/' style={{ padding: 10 }} target='_blank' rel='noopener noreferrer' alt='LinkedIn profile link'>
                    <FaLinkedinIn/>
                </a>
               
                <a href='mailto:codyconck@gmail.com' style={{ padding: 10 }} target='_blank' rel='noopener noreferrer' alt='email link'>
                    <BsEnvelope/>
                    
                </a>
                
            </h4>
        </div>
    )
}

export default Footer
