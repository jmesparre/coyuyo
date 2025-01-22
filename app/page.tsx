"use client"

import ParralaxImage from "./ParallaxImage"
import { ReactLenis } from 'lenis/react'
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
            
  <ReactLenis root>
    <main className="overflow-hidden">
        
        <section className="hero" id="home">

          <h1 className="hero-title absolute  margin-auto z-20 text-white ">Somos una Fundacion de <br></br>Canabis Medicinal en San Luis</h1>

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
          <div className="description pt-32 sm:pt-52">
            <h3>Aceite del copado</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur <s>explicabo </s>deleniti a inventore vel ratione neque est nostrum dolore mollitia! Blanditiis <u> consectetur</u> dolorem fugit quis quo non reprehenderit. Quaerat, non.</p>
          </div>
          
          
        </section>  

        <section className="producto-crema" >
        
          <div className="ParralaxImage-bg ">
            <ParralaxImage src="crema.jpg" alt=""/>
          </div>
          <div className="crema-description pt-20 sm:pt-20">
            <h3>Cremannabis</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur <s>explicabo </s>deleniti a inventore vel ratione neque est nostrum dolore mollitia! Blanditiis <u> consectetur</u> dolorem fugit quis quo non reprehenderit. Quaerat, non.</p>
            <ul className="pt-5">
              <li>•   Medicina Natural</li>
              <li>•   Terapeutica</li>
              <li>•   Anti Age</li>
              <li>•   Te saca la paspadita</li>
            </ul>
          </div>
          
        </section>  


        <section className="informacion pt-20" id="terapias">
  
          <div className="intro">
            <h4 className="pb-6">Terapias con cannabis</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, sequi animi unde 
              necessitatibus numquam laboriosam praesentium possimus, excepturi molestias iste doloribus 
              cum dolorum beatae non quae cumque. Quasi, neque maxime.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, sequi animi unde 
              necessitatibus numquam laboriosam praesentium possimus, excepturi molestias iste doloribus 
              cum dolorum beatae non quae cumque. Quasi, neque maxime. Quasi, neque maxime.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, sequi animi unde 
              necessitatibus numquam laboriosam praesentium possimus, excepturi molestias iste doloribus 
              cum dolorum beatae non quae cumque. Quasi, neque maxime. Quasi, neque maxime.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, sequi animi unde 
              necessitatibus numquam laboriosam praesentium possimus, excepturi molestias iste doloribus 
              cum dolorum beatae non quae cumque. Quasi, neque maxime.</p>
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
                <AccordionTrigger className="view cursor-none text-base cursor-pointer">- Is it accessible?</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="pl-5 pr-5">
                <AccordionTrigger className="view cursor-none  text-base cursor-pointer">- blah clals blah blah</AccordionTrigger>
                <AccordionContent>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore aut possimus sapiente atque voluptatibus, iste eum modi unde id officia quo animi nostrum molestias perspiciatis suscipit delectus, repellendus rem reprehenderit.
                </AccordionContent>
              </AccordionItem>
            <AccordionItem value="item-3" className="pl-5 pr-5">
                <AccordionTrigger className="view cursor-none  text-base cursor-pointer">- Quienes puede consumirlo</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="pl-5 pr-5">
                <AccordionTrigger className="view cursor-none text-base cursor-pointer">- Quienes puede consumirlo</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        
      </section>

        <section id="contacto" className="footer">
            <div className="col w-3/4 sm:w-3/4 md:w-2/4 pl-24 ">
             <h1 className="  pt-24 pl-4 " >Contacto.</h1>
             <p className="w-3/4 pl-5 text-white">Lorem ipsum dolor sit amet consectetur adipisicing 
             elit. Est porro laudantium eveniet maiores exercitationem, voluptatum qui dicta suscipit
              laborum culpa, iusto minima asperiores modi delectus expedita consequuntur assumenda? 
              Perferendis, temporibus! <br></br><br></br><b>.</b></p>
              
        </div>
           
            <div className="col text-amber-100 w-4/4 flex right-0 gap-4 bottom-2 pr-14 pb-4 absolute">
              <p>instagram</p>
              <p>Whatsapp</p>
              <p>telefono:123123-1212</p>
            </div>
          
        </section>

      </main>
    </ReactLenis>
  );
}
