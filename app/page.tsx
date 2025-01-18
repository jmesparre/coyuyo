"use client"

import ParralaxImage from "./ParallaxImage"
import { ReactLenis, useLenis } from 'lenis/react'
import { useEffect } from 'react';
import { gsap } from 'gsap';

export default function Home() {
  const lenis = useLenis();

  const handleScroll = (targetId: string) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement && lenis) {
      lenis.scrollTo(targetElement, {
        duration: 2.5, // Duración en segundos
        easing: (t) => t * t, // Easing cuadrático
      });
    }
  };

  useEffect(() => {
    gsap.from(".title",  { 
      opacity: 0, 
      y: -50, 
      duration: 3,
      ease: "power3.out",
      delay: 0.3 
      });
  }, []);

  useEffect(() => {
    gsap.from(".nav",  { 
      opacity: 0, 
      y: -50, 
      duration: 2,
      ease: "power3.out",
      delay: 0.1 
      });
  }, []);
  return (
            
    <ReactLenis root>
   <main className="overflow-hidden">
   <div className="nav">
          <a onClick={() => handleScroll('home')} className="view">Home</a>
          <a onClick={() => handleScroll('productos')} className="view">Productos</a>
          <a onClick={() => handleScroll('servicios')} className="view">Servicios</a>
          <a onClick={() => handleScroll('contacto')} className="view">Contacto</a>
        </div>
        <section className="hero" id="home">
          <div className="ParralaxImage-bg">
            <ParralaxImage src="bg.svg" alt=""/>
          </div>   
          <div className="title col items-center w-full">
             <img src="log1.svg" alt="" className="logo-t w-full justify-center" />
             <h1>Coyuyo</h1>
          </div>
        </section>

    

        <section className="producto" id="productos">
          <div className="ParralaxImage-bg">
            <ParralaxImage src="botella2.png" alt=""/>
          </div>
          <div className="description">
            <h3>Aceite del copado</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur <s>explicabo </s>deleniti a inventore vel ratione neque est nostrum dolore mollitia! Blanditiis <u> consectetur</u> dolorem fugit quis quo non reprehenderit. Quaerat, non.</p>
          </div>
        </section>  


        <section className="informacion pb-10" id="servicios">
  
          <div className="col img-informacion ParralaxImage pt-40">
            <ParralaxImage src="/cañamo.jpg" alt="" />
          </div>
          <div className="intro pb-20 mt-10">
            <h4>Introduccion</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, sequi animi unde necessitatibus numquam laboriosam praesentium possimus, excepturi molestias iste doloribus cum dolorum beatae non quae cumque. Quasi, neque maxime.</p>
          </div>
                
        </section>   

        <section id="contacto" className="footer bg-green-800">
        
            <div className="col text-amber-100 w-full flex justify-center gap-4 bottom-2 absolute">
              <p>instagram</p>
              <p>instagram</p>
              <p>instagram</p>
            </div>
            <div className="col"></div>
          
        </section>

      </main>
    </ReactLenis>
  );
}
