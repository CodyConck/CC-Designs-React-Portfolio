import React from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { BsEnvelope } from 'react-icons/bs'

const Footer = () => {
    return (
        <div id='footer'>
            <p>
                <a href='https://github.com/codyconck' target='_blank' rel='noopener noreferrer' alt='GitHub profile link'>
                    <FaGithub/>
                </a>
                <a href='https://www.linkedin.com/in/cody-concklin-01a67b93/' target='_blank' rel='noopener noreferrer' alt='LinkedIn profile link'>
                    <FaLinkedinIn/>
                </a>
                <a href='mailto:codyconck@gmail.com' target='_blank' rel='noopener noreferrer' alt='email link'>
                    <BsEnvelope/>
                    'codyconck.com'
                </a>
                
            </p>
        </div>
    )
}

export default Footer
