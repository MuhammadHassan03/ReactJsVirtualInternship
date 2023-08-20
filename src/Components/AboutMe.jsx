import './Style/AboutMe.css'
import CodeSvg from '../Assests/Code.svg';
import CodeBrackets from '../Assests/CodeBrackets.svg';
import { useEffect, useState } from 'react';
import Aos from 'aos';

export const AboutMe = () => {
    const [aboutme, setAboutMe] = useState(null);

    useEffect(() => {
        Aos.init();
        setAboutMe(() => {
            return (
                <>
                    <div className='container'>
                        <div className='row'>
                            <div data-aos="fade-right" className='col'>
                                <h1 style={{ color: 'yellow' }}>aboutme()</h1>
                                <p style={{ color: 'white' }}>I'm currently a Front End Developer and student of Software Engineering seeking many ways to improve my skills through coding, problem-solving and creating various applications!. Current Initiative is Software Engineer. Scroll Down or head to navbar to learn more about me</p>
                            </div>
                            <div className='col' data-aos="fade-left">
                                <div className='row WorkDivs m-3 p-2'>
                                    <div className='col-10'>
                                        <div>
                                            <h1 style={{ color: 'white' }}>Front-End Developer</h1>
                                            <a href='' style={{ color: 'yellow', fontSize: '1.1rem' }}>Projects</a>
                                        </div>
                                    </div>
                                    <div className='col'>
                                        <img src={CodeSvg} alt="" />
                                    </div>
                                </div>
                                <div className='row WorkDivs m-3 p-2'>
                                    <div className='col-10 '>
                                        <div >
                                            <h1 style={{ color: 'white' }}>Freelancer</h1>
                                            <a href='https://www.upwork.com/freelancers/~012de8f7e218ece2ad' target='_blank' style={{ color: 'yellow', fontSize: '1.1rem' }}>Hire Me!</a>
                                        </div>
                                    </div>
                                    <div className='col'>
                                        <img src={CodeBrackets} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )
        })
    }, [])


    return (
        <>
            {aboutme}
        </>
    )
}
