"use client"

import ParralaxImage from "./ParallaxImage"
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
  


   useEffect(() => {
    gsap.from(".hero",  { 
      opacity: 0, 
      y: -150, 
      duration: 3,
      ease: "power3.out",
      });
  }, []);

  useEffect(() => {
    gsap.from(".hero-title",  { 
      opacity: 0, 
      y: -150, 
      duration: 3,
      delay: 1,
      ease: "power3.out",
      });
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ".description",
      { x: "-200%", opacity: 0 }, 
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
      ".crema-description",
      { x: "200%", opacity: 0 }, 
      {
        x: "0%",
        opacity: 1,
        duration: 2,
        ease: "power3.out",
       
        scrollTrigger: {
          trigger: ".crema-description",
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
      { opacity: 0.1 }, 
      {
       
        ease: "power3.out",
        opacity: 1,
        duration: 3,
        scrollTrigger: {
          trigger: ".intro",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none", 
        },
      }
    );
  }, []);

  
  useEffect(() => {
    gsap.fromTo(
      ".product-title",
      { opacity: 0.1 }, 
      {
        
        ease: "power3.out",
        opacity: 1,
        duration: 2,
        scrollTrigger: {
          trigger: ".product-title",
          start: "top 50%",
          end: "bottom 20%",
          toggleActions: "play none none none", 
        },
      }
    );
  }, []);

  return (
    <main className="overflow-hidden">
        
        <section className="hero" id="home">

          <h1 className="hero-title absolute h-50 margin-auto pt-20 z-20 text-white ">
            Somos una Fundacion de <br></br>Canabis Medicinal en San Luis
          </h1>

          <div className="ParralaxImage-bg">
            <ParralaxImage src="bg4.svg" alt=""/>
          </div>   
          
         
        </section>

        <section className="product-title">   
          <div className="block text-center">
              <h1>
                Productos
              </h1>
            </div>
        </section>

        <section className="producto" id="productos">
        
        
          <div className="ParralaxImage-bg ">
            <ParralaxImage src="botella2d.png" alt=""/>
          </div>
          <div className="description pt-22 sm:pt-32">
            <h3>Aceite de Cannabis Medicinal</h3>
            <p>Nuestro aceite de cannabis medicinal es de la más alta calidad, extraído de plantas cultivadas orgánicamente en San Luis. Ideal para aliviar dolores crónicos, ansiedad y otros padecimientos.</p>
            <ul className="pt-5 text-right">
              <li>•   Alivio del Dolor Crónico</li>
              <li>•   Reducción de la Ansiedad</li>
              <li>•   Mejora del Sueño</li>
              <li>•   Propiedades Anti-inflamatorias</li>
            </ul>
          </div>
          
          
        </section>  

        <section className="producto-crema " >
        
          <div className="ParralaxImage-bg ">
            <ParralaxImage src="crema.jpg" alt=""/>
          </div>
          <div className="crema-description sm:pt-10">
            <h3>Crema de Cannabis Terapéutica</h3>
            <p>Nuestra crema de cannabis terapéutica es perfecta para aliviar dolores musculares y articulares. Con propiedades antiinflamatorias y analgésicas, es ideal para deportistas y personas con dolencias crónicas.</p>
            <ul className="pt-5">
              <li>•   Medicina Natural y Orgánica</li>
              <li>•   Alivio Terapéutico</li>
              <li>•   Propiedades Anti-Envejecimiento</li>
              <li>•   Hidratación Profunda</li>
            </ul>
          </div>
          
        </section>  


        <section className="informacion pt-20" id="terapias">
  
          <div className="intro">
            <h4 className="pb-6">Terapias con Cannabis Medicinal</h4>
            <p>En Fundación Coyuyo, ofrecemos terapias personalizadas con cannabis medicinal para tratar una amplia variedad de condiciones. Nuestro equipo de profesionales te guiará en el proceso para que encuentres el tratamiento que mejor se adapte a tus necesidades.</p>
          </div>
          <div className="img-informacion ParralaxImage">
            <ParralaxImage src="/hojas.png" alt="" />
          </div>
                
        </section>   

        <section className="faq pt-16" id="faq">

          <div className=" w-10/12 sm:w-6/12  m-auto pt-5">

            <h4 className="pb-14 text-center">Preguntas Frecuentes</h4>

            <Accordion type="single" collapsible className="text-black text-9xl">
              <AccordionItem value="item-1" className="pl-5 pr-5">
                <AccordionTrigger className="view cursor-none text-base cursor-pointer">- ¿Es accesible el tratamiento?</AccordionTrigger>
                <AccordionContent>
                  Sí, en Fundación Coyuyo trabajamos para que nuestros tratamientos sean accesibles para todos. Contáctanos para más información.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="pl-5 pr-5">
                <AccordionTrigger className="view cursor-none  text-base cursor-pointer">- ¿Qué tipo de productos ofrecen?</AccordionTrigger>
                <AccordionContent>
                  Ofrecemos una amplia gama de productos de cannabis medicinal, incluyendo aceites, cremas y otros productos terapéuticos.
                </AccordionContent>
              </AccordionItem>
            <AccordionItem value="item-3" className="pl-5 pr-5">
                <AccordionTrigger className="view cursor-none  text-base cursor-pointer">- ¿Quiénes puede consumir cannabis medicinal?</AccordionTrigger>
                <AccordionContent>
                  El cannabis medicinal puede ser consumido por personas con una amplia variedad de condiciones, siempre bajo la supervisión de un profesional de la salud.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="pl-5 pr-5">
                <AccordionTrigger className="view cursor-none text-base cursor-pointer">- ¿Es legal el cannabis medicinal en San Luis?</AccordionTrigger>
                <AccordionContent>
                  Sí, el cannabis medicinal es legal en San Luis para uso terapéutico. En Fundación Coyuyo te asesoramos sobre la normativa vigente.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        
      </section>

        <section id="contacto" className="footer">
            <div className="w-4/4  sm:w-3/4 md:w-3/4 pl-4 sm:pl-24">
             <h1 className="  pt-6 sm:pt-24 pl-4 " >Contacto.</h1>
             <p className="w-3/4 pl-5 text-white">Si tienes alguna duda o consulta, no dudes en contactarnos. Estamos para ayudarte a mejorar tu calidad de vida a través del cannabis medicinal.</p>
              
        </div>
           
            <div className="col text-amber-100 w-4/4 flex right-0 gap-4 bottom-2 pr-14 pb-4 absolute">
              <p>instagram</p>
              <p>Whatsapp</p>
              <p>telefono:123123-1212</p>
            </div>
          
        </section>

      </main>
  );
}
