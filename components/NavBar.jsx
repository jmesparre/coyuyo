"use client"
import { useState } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  gsap.registerPlugin(ScrollToPlugin);

const scrollToSection = (id) => {
  gsap.to(window, { duration: 2 , scrollTo: `#${id}`, ease: "power1.out",  });
};

  return (
    <nav className="fixed top-0 left-0 w-full shadow-md z-50 nav-bar">
      <div className="container mx-auto flex justify-between items-center pt-5 pb-5 pl-5">
      
        <div className="">
             <img src="log-black.svg" alt="" className="top-3.5  w-[7%] md:w-[4%] sm:w-[4%] lg:w-[3.2%] xl:w-[2.5%] absolute" />
             <img src="coyuyo-logo-black.svg" alt="" className=" w-[24%] md:w-[11%] sm:w-[19%] lg:w-[9%] top-5 ml-12 absolute" />
        </div>
        
        <div className="nav-web">
            <ul>
                <li>
                <a href="#home" onClick={() => scrollToSection('home')}>Home</a>
                </li>
                <li>
                <a href="#productos" onClick={() => scrollToSection('productos')}>Productos</a>
                </li>
                <li>
                <a href="#terapias" onClick={() => scrollToSection('terapias')}>Terapias</a>
                </li>
                <li>
                <a href="#faq" onClick={() => scrollToSection('faq')}>Preguntas frecuentes</a>
                </li>
                <li>
                <a href="#contacto" onClick={() => scrollToSection('contacto')}>Contacto</a>
                </li>
            </ul>
         </div>

        {/* Botón "hamburger" (visible solo en pantallas pequeñas) */}
        <button
          onClick={toggleMenu}
          className="block md:hidden focus:outline-none pr-2"
        >
          <span className="hamburger-icon text-2xl">☰</span>
        </button>

        {/* Menú de navegación */}
        <ul
          className={`absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent flex flex-col md:flex-row items-center md:space-x-6 space-y-4 md:space-y-0 transition-all duration-300 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <li>
            <a
              href="#productos"
              className="text-black hover:text-gray-700 transition duration-200"
            >
              Productos
            </a>
          </li>
          <li>
            <a
              href="#servicios"
              className="text-black hover:text-gray-700 transition duration-200"
            >
              Servicios
            </a>
          </li>
          <li>
            <a
              href="#faq"
              className="text-black hover:text-gray-700 transition duration-200"
            >
              FAQ
            </a>
          </li>
          <li>
            <a
              href="#contacto"
              className="text-black hover:text-gray-700 transition duration-200"
            >
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
