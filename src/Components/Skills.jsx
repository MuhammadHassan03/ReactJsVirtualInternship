import JavaScript from '../Assests/JavaScript.svg';
import Html from '../Assests/Html.svg';
import Css from '../Assests/Css.svg';
import React from '../Assests/React.svg';
import Redux from '../Assests/Redux.svg';
import './Style/Skills.css';
import { useEffect, useState } from 'react';
import Aos from 'aos';

export const Skills = () => {
    const [skills, setSkills] = useState(null);

    useEffect(() => {
        Aos.init();
        setSkills(() => {
            return (
                <>
                    <div className="container mt-5 mb-5">
                        <div className="row">
                            <div className="col" data-aos="fade">
                                <h1 style={{ color: 'white' }}>skills()</h1>
                            </div>
                        </div>
                        <div className="row mt-5 mb-5" data-aos="fade" style={{ alignItems: "center", justifyItems: 'center' }}>
                            <div className="col">
                                <img className='mt-5 mb-5' style={{ width: '5rem' }} src={JavaScript} alt="" />
                            </div>
                            <div className="col">
                                <img className='mt-5 mb-5' style={{ width: '5rem' }} src={Html} alt="" />
                            </div>
                            <div className="col">
                                <img className='mt-5 mb-5' style={{ width: '5rem' }} src={Css} alt="" />
                            </div>
                            <div className="col">
                                <img className='mt-5 mb-5' style={{ width: '5rem' }} src={React} alt="" />
                            </div>
                            <div className="col">
                                <img className='mt-5 mb-5' style={{ width: '5rem' }} src={Redux} alt="" />
                            </div>
                        </div>
                        
                    </div></>
            );
        })
    }, [])
    return (
        <>
            {skills}
        </>
    )
}
