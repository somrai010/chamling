import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";




// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Slider() {
  return (
    <>
 
 <div className="swipper">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >




<SwiperSlide style={{ 
      backgroundImage: `url("/slide/1.jpg")` ,
      backgroundSize:'cover',
    }}></SwiperSlide>

<SwiperSlide style={{ 
      backgroundImage: `url("/slide/2.jpg")` ,
      backgroundSize:'cover',
    }}></SwiperSlide>

<SwiperSlide style={{ 
      backgroundImage: `url("/slide/3.jpg")` ,
      backgroundSize:'cover',
    }}></SwiperSlide>

<SwiperSlide style={{ 
      backgroundImage: `url("/slide/4.jpg")` ,
      backgroundSize:'cover',
    }}></SwiperSlide>

<SwiperSlide style={{ 
      backgroundImage: `url("/slide/5.jpg")` ,
      backgroundSize:'cover',
    }}></SwiperSlide>


<SwiperSlide style={{ 
      backgroundImage: `url("/slide/6.jpg")` ,
      backgroundSize:'cover',
    }}></SwiperSlide>



{/* 
        <SwiperSlide style={{ 
      backgroundImage: `url("/photo2.jpg")` ,
      backgroundSize:'cover',
    }}><h2>Text-2</h2></SwiperSlide>


        <SwiperSlide style={{ 
      backgroundImage: `url("/photo3.jpg")` ,
      backgroundSize:'cover',
    }}><h2>Text-3</h2></SwiperSlide> */}
 
      </Swiper>

      </div>
    
    </>
  );
}