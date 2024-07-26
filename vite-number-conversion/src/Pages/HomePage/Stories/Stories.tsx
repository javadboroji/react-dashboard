import React from 'react'
import StrorieCard from './StrorieCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "./style.css"
import { storiesData, storieType } from './StoriesData';


function Stories() {
    return (
        <div className='container mx-auto flex my-8 px-4'>
            <Swiper
                spaceBetween={5}
               // slidesPerView={10}
                breakpoints={{
                    990: {
                        slidesPerView: 10 // Adjust slidesPerView for screens <= 760px
                    }
                }}
                centeredSlides={true}
                modules={[Pagination, Navigation]}
                navigation={true}
                loop={true}
                autoplay={{
                    delay: 100,
                    disableOnInteraction: false
                }} className="swiperStorie">
                {storiesData?.map((strorie) => {
                    return <SwiperSlide>
                        <StrorieCard data={strorie} />
                    </SwiperSlide>
                })}


            </Swiper>

        </div>
    )
}

export default Stories