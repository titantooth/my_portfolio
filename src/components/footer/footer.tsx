import './footer.css'
import React from 'react'
import logo from '../../assets/img/logo.svg'
import navIcon1 from '../../assets/img/nav-icon1.svg'
import navIcon2 from '../../assets/img/nav-icon2.svg'
import navIcon3 from '../../assets/img/nav-icon3.svg'


const footer = () => {
    return (
        <footer className='footer'>


            <div className='footer-whole'>
                <div>
                    <img src={logo} alt="footer logo" />

                </div>

                <div className='social-icon'>
                    <a href=""><img src={navIcon1} alt="social icons" /></a>
                    <a href=""><img src={navIcon2} alt="social icons" /></a>
                    <a href=""><img src={navIcon3} alt="social icons" /></a>

                </div>

            </div>
            <div className='copyright'>
                <p>CopyRight 2023. Rabiee All Rights Reserved</p>

            </div>



        </footer>
    )
}

export default footer