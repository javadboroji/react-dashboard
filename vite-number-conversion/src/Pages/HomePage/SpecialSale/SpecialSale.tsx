import React, { useLayoutEffect, useRef } from 'react'
import icon from "../../../assets/discount-shape.svg";
import "./style.css"
import img1 from "../../../../public/images/1.jpg";
import img2 from "../../../../public/images/2.jpg";
import img3 from "../../../../public/images/3.jpg";
import img4 from "../../../../public/images/4.jpg";
import img5 from "../../../../public/images/5.jpg";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function SpecialSale() {
    const itemRef = useRef(null);
    useLayoutEffect(() => {
        const item = itemRef.current;

        // Basic GSAP animation example
        gsap.fromTo(".off-badg", {
          opacity: 0,
          y: 200,
          rotate:"180deg",
          x:50
        }, {
          opacity: 1,
          y: 0,
          x:0,
          rotate:"0deg",
          duration: 1.5,
          scrollTrigger: {
            trigger: ".affter-title",
            start: 'bootom 50%',
            end: 'top 10%',   
            scrub: true,
          },
        });
    }, [])
    return (
        <div className='container mx-auto'>
            {/**     Title */}
            <div className='flex items-center affter-title'>
                <img src={icon} alt='icon' />
                <h5 className='pr-2 text-xl'> فروش ویژه</h5>
            </div>
            {/*/*================================ ImageS ==============================*/}
            <div className=' flex flex-col lg:flex-row ghallery-box'>
                <div className='img-larg ghallery-homePage m-2'>
                    <div className='off-badg'>
                        <span className='font-semibold text-center block text-white'> OFF</span>

                        <span className='font-semibold text-center block text-white'> 20%</span>
                    </div>
                    <img className='w-full h-full object-cover' src={img1} alt='image' />
                </div>
                <div className='flex flex-grow-box'>
                    <div className='img-small m-2 ghallery-homePage'>
                        <div className='off-badg'>
                            <span className='font-semibold text-center block text-white'> OFF</span>

                            <span className='font-semibold text-center block text-white'> 20%</span>
                        </div>
                        <img className='w-full h-full object-cover' src={img2} alt='image' />
                    </div>
                    <div className='img-small m-2 ghallery-homePage'>
                        <div className='off-badg'>
                            <span className='font-semibold text-center block text-white'> OFF</span>

                            <span className='font-semibold text-center block text-white'> 50%</span>
                        </div>
                        <img className='w-full h-full object-cover' src={img3} alt='image' />
                    </div>
                    <div className='img-small m-2 ghallery-homePage'>
                        <div className='off-badg'>
                            <span className='font-semibold text-center block text-white'> OFF</span>

                            <span className='font-semibold text-center block text-white'> 40%</span>
                        </div>
                        <img className='w-full h-full object-cover' src={img4} alt='image' />
                    </div>
                    <div className='img-small m-2 ghallery-homePage'>
                        <div className='off-badg'>
                            <span className='font-semibold text-center block text-white'> OFF</span>

                            <span className='font-semibold text-center block text-white'> 25%</span>
                        </div>
                        <img className='w-full h-full object-cover end' src={img5} alt='image' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpecialSale