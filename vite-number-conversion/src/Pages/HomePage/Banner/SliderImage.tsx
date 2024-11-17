import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "./style.css"
// import required modules
import image1 from "../../../../public/images/1.jpg";
import image2 from "../../../../public/images/2.jpg";
import image3 from "../../../../public/images/3.jpg";
import image4 from "../../../../public/images/4.jpg"
import image5 from "../../../../public/images/5.jpg";
import { Pagination,Autoplay, Navigation } from 'swiper/modules';
function SliderImage() {
  return (
    <div>
      <Swiper 
       pagination={true} 
       spaceBetween={30}
       centeredSlides={true}
        speed={3000}
        grabCursor={true}
        parallax={true}
       preventInteractionOnTransition={true}
       longSwipesRatio={0.35}
       modules={[Pagination,Autoplay]}
       loop={true}
       autoplay={{
           delay: 3500,
           disableOnInteraction: false
       }}
        className="mySwiper">
        <SwiperSlide>
          <img className='w-full h-full absolute object-cover bg-center  ' src={image1}  alt={image1}/>
         
          </SwiperSlide>
        <SwiperSlide>
          <img className='w-full h-full absolute object-cover bg-center  ' src={image2}  alt={image2}/>
          </SwiperSlide>
        <SwiperSlide>
          <img className='w-full h-full absolute object-cover bg-center  '  src={image3}  alt={image3}/>
          </SwiperSlide>
        <SwiperSlide>
          <img  className='w-full h-full absolute object-cover bg-center  ' src={image4}  alt={image4}/>
          </SwiperSlide>
        <SwiperSlide>
          <img className='w-full h-full absolute object-cover bg-center  ' src={image5}  alt={image5}/>
          </SwiperSlide>
        <SwiperSlide>
          
          <img className='w-full h-full absolute object-cover bg-center' src={image1}  alt={image1}/>
          </SwiperSlide>

      </Swiper>
    </div>
  )
}

export default SliderImage