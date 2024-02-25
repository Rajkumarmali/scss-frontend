import React from 'react';
import './Footer.scss'
const Footer = () => {
    return (
        <div className='footer'>
            <div className='fot-1'>
                <h5>CATEGORIES</h5>
                <li>Web Builder</li>
                <li>Hosting</li>
                <li>Data Center</li>
                <li>Robotic-Automation</li>
            </div>
            <div className='fot-2'>
                <h5>CONTACT</h5>
                <li>Contact</li>
                <li>Privacy Policy</li>
                <li>Terms Of Service</li>
                <li>Categories</li>
                <li>About</li>
            </div>
            <div className='fot-3'>
                <li>United States</li>
            </div>
        </div>
    );
}

export default Footer;
