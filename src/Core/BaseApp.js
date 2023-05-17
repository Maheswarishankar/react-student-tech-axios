import React, { useState } from 'react'
import { Link } from 'react-router-dom'


function BaseApp({ title, children }) {
    const [isMobile, setIsMobile] = useState(false)

    return (
        <div>
            <nav className='navbar'>
                <h3 className='logo'>Students-Teachers</h3>
                <ul className={isMobile ? "nav-links-mobile" : "nav-links"}
                    onClick={() => setIsMobile(false)}>

                    <Link to="/home" className='home'>
                        <li>Home</li>
                    </Link>
                    <Link to="/students" className='students'>
                        <li>Students</li>
                    </Link>
                    <Link to="/teachers" className='teachers'>
                        <li>Teachers</li>
                    </Link>
                </ul>
                <button className='mobile-menu-icon'
                    onClick={() => setIsMobile(!isMobile)}>
                    {isMobile ? (
                        <i className='fas fa-times'></i>
                    ) : (
                        <i className='fas fa-bars'></i>
                    )}

                </button>

                <footer >
                    <p>Copyright © Your Website 2023</p>
                </footer>
            </nav>

            <div className='title'>
                <div className={title}>{title}</div>
            </div>

            <div className='children'>
                {children}
            </div>


        </div>

    )
}

export default BaseApp