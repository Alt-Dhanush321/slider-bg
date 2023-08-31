import React,{useState} from 'react'
import {images} from './assets/const'

import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';

function App() {

  const [count, setCount] = useState(0)

  
  return (
    <>
      <div className="body-container w-full h-screen relative slide-left ">
        <video src={images[count].VidSrc} 
        // style={}
        className={'absolute w-full h-full object-cover z-[-10] slide-left '} autoPlay playsInline loop muted>

        </video>
        <div className="container flex w-1/2 justify-between m-auto ">
          
          
             <button disabled={count == 0} className=' p-5 bg-red-600 text-white font-bold text-2xl' onClick={()=>setCount(count-1)}>{count}</button>
          
             <button disabled={count == images.length-1} className=' p-5 bg-red-600 text-white font-bold text-2xl' onClick={()=>setCount(count+1)}>{count+1}</button>
          
        </div>
        <div className="swiper w-full h-72">
        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
       { 
          images.map((img,i)=>(
            <SwiperSlide>
                <img src={img.ImgSrc}  className=' object-contain w-60 h-full' />
            </SwiperSlide>
          ))
       }
        
      </Swiper>
        </div>
        </div>      
        
    </>
  )
}

export default App