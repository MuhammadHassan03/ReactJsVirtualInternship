import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Picture from '../Assests/MuhammadHassan.png'
import './Style/Main.css'
import { useEffect, useState } from 'react';
import Aos from 'aos';

export const Main = () => {
  const [main, setMain] = useState(null);
  useEffect(() => {
    Aos.init();
    setMain(() => {
      return (
        <>
          <div className='MainPageDiv'>
            <div data-aos="fade-right" className='LeftDivMainPage'>
              <h1 className='GreetingsH1'>Hello, i am</h1>
              <h1 className='NameH1'><KeyboardArrowLeftIcon style={{ fontSize: '5rem' }}></KeyboardArrowLeftIcon>Muhammad <br />Hassan{'\u002F'}<KeyboardArrowRightIcon style={{ fontSize: '5rem' }}></KeyboardArrowRightIcon></h1>
              <h1 className='RoleH1'>Front-End Developer</h1>
            </div>
            <div data-aos="fade-left">
              <div className='PicDiv'>
                <img className='picture' src={Picture} alt="" />
              </div>
            </div>
          </div>
        </>
      );
    })
  }, [])

  return (
    <>
      {main}
    </>
  )
}
