"use client"

import ParralaxImage from "./ParallaxImage"
import { ReactLenis, useLenis } from 'lenis/react'
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion"

gsap.registerPlugin(ScrollTrigger);

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

   useEffect(() => {
    gsap.from(".hero",  { 
      opacity: 0, 
      y: -150, 
      duration: 3,
      ease: "power3.out",
      });
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ".description",
      { x: "-100%", opacity: 0 }, 
      {
        x: "0%",
        opacity: 1,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".description",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none", 
        },
      }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ".intro",
      { x: "100%", opacity: 0 }, 
      {
        x: "0%",
        ease: "power3.out",
        opacity: 1,
        duration: 2,
        scrollTrigger: {
          trigger: ".intro",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none", 
        },
      }
    );
  }, []);

  return (
            
  <ReactLenis root>
    <main className="overflow-hidden">
         <div className="nav">
          <a onClick={() => handleScroll('productos')} className="view">Productos</a>
          <a onClick={() => handleScroll('servicios')} className="view">Terapias</a>
          <a onClick={() => handleScroll('contacto')} className="view">Quienes somos</a>
          <a onClick={() => handleScroll('faq')} className="view">Preguntas frecuentes</a>
          <a onClick={() => handleScroll('contacto')} className="view">Contacto</a>
        </div>
        <section className="hero" id="home">
          <div className="ParralaxImage-bg product-1">
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

        <section id="faq" className="bg-green-800">

          <div className=" w-6/12 m-auto pt-32">
            <h3 className="pb-14 text-center">Preguntas Frecuentes</h3>

            <Accordion type="single" collapsible className="text-white text-9xl">
              <AccordionItem value="item-1" className="pl-5 pr-5">
                <AccordionTrigger className="view cursor-none text-white text-base">- Is it accessible?</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="pl-5 pr-5">
                <AccordionTrigger className="view cursor-none text-white text-base">- blah clals blah blah</AccordionTrigger>
                <AccordionContent>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore aut possimus sapiente atque voluptatibus, iste eum modi unde id officia quo animi nostrum molestias perspiciatis suscipit delectus, repellendus rem reprehenderit.
                </AccordionContent>
              </AccordionItem>
            <AccordionItem value="item-3" className="pl-5 pr-5">
                <AccordionTrigger className="view cursor-none text-white text-base">- Quienes puede consumirlo</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="pl-5 pr-5">
                <AccordionTrigger className="view cursor-none text-white text-base">- Quienes puede consumirlo</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        
      </section>

        <section id="contacto" className="footer bg-green-800">
        
            <div className="col text-amber-100 w-full flex justify-center gap-4 bottom-2 absolute">
              <p>instagram</p>
              <p>instagram</p>
              <p>instagram</p>
            </div>
          
        </section>

      </main>
    </ReactLenis>
  );
}
