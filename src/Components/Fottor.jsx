import React, { useEffect } from 'react'
import Aos from 'aos';
import './Style/Footor.css';
export const Fottor = () => {
    useEffect(() => {
        Aos.init();
    })
    return (
        <div className='footor'>
            <h1 style={{ color: "white" }} className='h6'>Copyright Ⓒ 2023, Developed by Muhammad Hassan ❤, Software Engineer</h1>
        </div>
    )
}
