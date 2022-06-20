import React from 'react'
import { Link } from 'react-router-dom'

import './Navbar.css'

export default function Navbar() {

    return (
        <div className='home-container'>
            <div className='home-header'>
                <h1 className='home-heading'>Yoga Studio</h1>
                <Link to='/about'>
                    <button 
                        className="btn btn-secondary" 
                        id="about-btn"
                    >
                        About
                    </button>
                </Link>
            </div>

            

        </div>
            
    )
}
