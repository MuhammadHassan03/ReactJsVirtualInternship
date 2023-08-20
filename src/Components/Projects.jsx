import React, { useEffect, useState } from 'react'
import ProductsData from '../Data/Projects.json';
import './Style/Projects.css';
import Aos from 'aos';
export const Projects = () => {

  const [projects, setProjects] = useState(null);
  useEffect(() => {
    Aos.init();
    setProjects(() => {
      const allProducts = ProductsData.map((index) => {
        return (
          <div data-aos="fade-left" className='col-8 m-5 ProjectsBoxShadow p-1 ' style={{ borderTopLeftRadius: '1.4rem', borderTopRightRadius: "1.4rem" }} id={index.id}>
            <img style={{ width: "46.1rem", borderTopLeftRadius: '1rem', borderTopRightRadius: "1rem" }} src={index.image} alt="" />
            <div style={{ padding: "1rem" }}>
              <h1 className='h5 mt-2' style={{ color: 'white', fontSize: "1.8rem" }}>{index.name}</h1>
              <p style={{ color: "white" }}>{index.techStacks}</p>
              <p className='lead' style={{ color: "white" }}>{index.description}</p>
              <button className="buttonView">View</button>
            </div>
          </div>
        );
      });
      return (
        <>
          <div className='container'>
            <div className='row'>
              <h1 data-aos="fade" className='mt-5 mb-5' style={{ color: 'white' }}>projects()</h1>
              <div className='row' style={{ justifyContent: "center" }}>
                {allProducts}
              </div>
            </div>
          </div>
        </>
      )
    })
  }, [projects])

  return (
    <>
      {projects}
    </>
  )
}
