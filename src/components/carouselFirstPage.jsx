import './modules/carouselFirstPage.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import 'ionicons';

import React from 'react'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import frontIMGS from '/ig_img/1.png';
import backIMGS from '/ig_img/11.png';
const img = [frontIMGS, backIMGS];

function CarouselFirstPage() {
    return (
        <div className='first-page-container'>
            {/* Main Carousel */}
            <Swiper
                modules={[Pagination, Navigation]}
                lazy='true' // Enable lazy loading
                spaceBetween={10}
                slidesPerView={1}
                className="swiper-container main-carousel"
                loop={true}
                grabCursor={true}

                autoplay={{ delay: 3000, disableOnInteraction: false }}

                /* breakpoints={{
                    640: { spaceBetween: 20 },
                    768: { spaceBetween: 40 },
                    1024: { spaceBetween: 50 },
                }}*/

                breakpoints={{
                    640: { pagination: { clickable: false } },
                    1024: { pagination: { clickable: true, type: 'bullets' } },
                }}

                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}

                pagination={{
                    el: '.swiper-pagination',
                    clickable: true,
                }}
            >
                <div className="container-button-whatsapp">
                    <h1 className="title-first-page">EXPERIMENTE VIVAH</h1>
                    <a href="https://www.google.com/search?client=opera-gx&q=how+to+style+a+button+in+css&sourceid=opera&ie=UTF-8&oe=UTF-8" target='_blank' >
                        <button className='button-text'>Agende sua visita</button>
                    </a>
                </div>

                <SwiperSlide className='swiper-slide'>
                    <img className="swiper-lazy" datatype='string' src={img[0]} alt="Slide 1" />
                    <div className="swiper-lazy-preloader"></div>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide'>
                    <img className="swiper-lazy" datatype='string' src={img[1]} alt="Slide 2" />
                    <div className="swiper-lazy-preloader"></div>
                </SwiperSlide>

                <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow">
                        <ion-icon name="arrow-back-outline"></ion-icon>
                    </div>
                    <div className="swiper-button-next slider-arrow">
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>

                {/* Navigation buttons */}
                {/* <div className="swiper-button-prev slider-arrow">
                    <ion-icon name="arrow-back-outline"></ion-icon>
                </div>
                <div className="swiper-button-next slider-arrow">
                    <ion-icon name="arrow-forward-outline"></ion-icon>
                </div> */}
            </Swiper>
        </div>
    );
}


export default CarouselFirstPage;