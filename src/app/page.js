"use client"

import { useState,useEffect } from 'react'
import Home from '../Components/Home'
import gsap from 'gsap';

export default function Page() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
        const tl = gsap.timeline();
        tl.to('.box',1.5, {
          height:0,
          stagger:{
            amount:.5
          },
          ease: 'power1.inOut'
        });
        tl.to('.overlay',{
          display:'none'
        });
        gsap.from('.hero-text',{
          y:window.innerHeight,
          duration:.5,
          delay:.7,
          ease: 'power4.out'
        })
        gsap.from('.nav-items .logo .log-btn',{
          opacity:0,
          y:100,
          delay:1,
          duration:.5,
          ease:'power4.out'
        })
      
    }, 3000); 
    return () => clearTimeout(timeout);
  }, []);
  const items = []
  for(let i = 1;i < 11 ;i++){
    items.push(<div className="box" key={i}></div>)
  }
  return (
    <>
      <div className="overlay">
        {items}
      </div>
      <div className="main">
        <Home />
      </div>
    </>
  );
}
