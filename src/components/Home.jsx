import React, { useEffect, useRef } from 'react';
import pdf from '../pdf/ishika.pdf';
import profile from './data/profile.json';
import Typed from "typed.js";

const Home = () => {
  const typedRef = useRef(null)
  useEffect(() => {
    const options ={
      strings: ["Welcome To My Profile", "My Name Is Ishika Verma", "I'm Full Stack Developer"],
      typedSpeed:50,
      backSpeed:50,
      loop: true
    }

    const typed = new Typed(typedRef.current, options)
    
    return () => {
      typed.destroy() 
    }
  }, [])
  return (
    <>
        <div className='container home' id='home'>
            <div className="left" data-aos="fade-up-right"
        data-aos-duration="1000">
                <h1 ref={typedRef}></h1>
                <a href={pdf} download="ishu.pdf" className='btn btn-outline-warning my-3'>Download Resume</a>
            </div>
            <div className='right'>
            <div className='img'
             data-aos="fade-up-left"
        data-aos-duration="1000">
                <img src={`/assets/${profile.imgSrc}`} alt='profile' />
                </div>
            </div>
        </div>
    </>
  )
}

export default Home