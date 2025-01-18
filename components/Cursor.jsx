"use client"

import React, {useEffect} from 'react'
import gsap from 'gsap'

const Cursor = () => {
    useEffect(()=>{
        const cursor = document.getElementById('custom-cursor')
        const links = document.querySelectorAll('.view')
        const cursorText = document.querySelector('.cursor-text')
        
        const onMouseMove = (event)=>{
            const {clientX,clientY} = event;
            gsap.set(cursor,{x:clientX,y:clientY})
        }

        const onMouseEnterLink =(event)=>{
            const link = event.target;
            if(link.classList.contains('view')){
                gsap.set(cursor,{scale:3})
                cursorText.style.display = 'block'
            }else {
                gsap.set(cursor,{scale:3})
            }
        }  

        const onMouseLeaveLink = ()=>{
            gsap.set(cursor,{scale:1})
            cursorText.style.display = 'none'
        }

        document.addEventListener('mousemove',onMouseMove)
        links.forEach((link)=>{
            link.addEventListener('mouseenter',onMouseEnterLink)
            link.addEventListener('mouseleave',onMouseLeaveLink)
        })
    })
  return (
    <div id='custom-cursor' className='custom-cursor transform'>
        <span className='cursor-text'>+</span>
    </div>
  )
}

export default Cursor