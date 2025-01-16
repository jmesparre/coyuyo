"use client"

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react"
import ParralaxImage from "./ParallaxImage"
import { ReactLenis } from "@studio-freight/react-lenis"


export default function Home() {
  const boxRef = useRef();
  useGSAP(() => {
    gsap.to(boxRef.current, {
      x: 500,
      duration: 1,
    });
  });
  return (
            
    <ReactLenis root>
   <main className="overflow-hidden">
      <div className="nav" ref={boxRef}>
            <p>Home</p>
            <p>Productos</p>
            <p>Servicios</p>
            <a className="view" href="#">Contacto</a>
      </div>
      <section className="hero">
          <div className="ParralaxImage-bg">
            <ParralaxImage src="bg.svg" alt=""/>
          </div>   
          <div className="title col items-center w-full">
             <img src="log1.svg" alt="" className="logo-t w-full justify-center" />
             <h1>Coyuyo</h1>
          </div>
     </section>    

        <section className="producto">
          <div className="ParralaxImage-bg ">
            <ParralaxImage src="botella2.png" alt=""/>
          </div>
          <div className="description">
            <h3>Aceite del copado</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur <s>explicabo </s>deleniti a inventore vel ratione neque est nostrum dolore mollitia! Blanditiis <u> consectetur</u> dolorem fugit quis quo non reprehenderit. Quaerat, non.</p>
          </div>
        </section>  


        <section className="informacion">
  
          <div className="col img-informacion ParralaxImage pt-40">
            <ParralaxImage src="/cañamo.jpg" alt="" />
          </div>
          <div className="intro">
            <h4>introduccion</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, sequi animi unde necessitatibus numquam laboriosam praesentium possimus, excepturi molestias iste doloribus cum dolorum beatae non quae cumque. Quasi, neque maxime.</p>
          </div>
                
        </section>   

       



        <section className="footer bg-green-800">
        
        <div className="col text-black">
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
