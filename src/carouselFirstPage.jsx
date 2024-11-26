/* import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Thumbs, EffectFade, Autoplay, EffectCube, EffectFlip, EffectCreative } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/effect-cube";
import "swiper/css/effect-flip";
import "swiper/css/effect-creative";
import "./SwiperCarousel.css"; // Add your custom styles here

const SwiperCarousel = () => {
    const [thumbsSwiper, setThumbsSwiper] = React.useState(null);

    return (
        <div className="carousel-container"> */
{/* Main Swiper */ }
{/*             <Swiper
                modules={[ Navigation, Pagination, Thumbs, EffectFade, Autoplay]}
                loop={true}
                lazy={true}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                thumbs={{ swiper: thumbsSwiper }}
                effect="fade" // Change this to "fade", "cube", "flip", or "creative"
                creativeEffect={{
                    perspective: true,
                    prev: {
                        shadow: true,
                        translate: [0, 0, -400],
                    },
                    next: {
                        translate: ["100%", 0, 0],
                    },
                }}
                className="main-swiper"
            >
                <SwiperSlide>
                    <img
                        data-src="https://via.placeholder.com/800x400?text=Slide+1"
                        className="swiper-lazy"
                        alt="Slide 1"
                    />
                    <div className="swiper-lazy-preloader"></div>
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        data-src="https://via.placeholder.com/800x400?text=Slide+2"
                        className="swiper-lazy"
                        alt="Slide 2"
                    />
                    <div className="swiper-lazy-preloader"></div>
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        data-src="https://via.placeholder.com/800x400?text=Slide+3"
                        className="swiper-lazy"
                        alt="Slide 3"
                    />
                    <div className="swiper-lazy-preloader"></div>
                </SwiperSlide>
            </Swiper> */}

{/* Thumbnails */ }
{/*  <Swiper
                onSwiper={setThumbsSwiper}
                slidesPerView={3}
                spaceBetween={10}
                watchSlidesProgress
                className="thumbs-swiper"
            >
                <SwiperSlide>
                    <img
                        src="https://via.placeholder.com/150x100?text=Slide+1"
                        alt="Thumb 1"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://via.placeholder.com/150x100?text=Slide+2"
                        alt="Thumb 2"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://via.placeholder.com/150x100?text=Slide+3"
                        alt="Thumb 3"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default SwiperCarousel */};


/* import Carousel from './carouselFirstPageAnimation.jsx'; */
import './carouselFirstPage.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow } from 'swiper/modules';

import kissshot from '../public/ig_img/kiss shot.png';
import akeno from '../public/ig_img/akeno.avif';
import rias from '../public/ig_img/rias-gremory.jpg'
import chika from '../public/ig_img/chika.jpg';
import chika2 from '../public/ig_img/chika 2.jpg';
import hoshino from '../public/ig_img/hoshino.jpg';
import tokisaki from '../public/ig_img/tokisaki.jpg';

const imgs = [kissshot, akeno, rias, chika, chika2, hoshino, tokisaki];

function CarouselFirstPage() {
    return (
        <div>
            {/* Main Carousel */}
            <Swiper
                modules={Navigation}
                lazy='true' // Enable lazy loading
                spaceBetween={10}
                slidesPerView={1}
                className="swiper-container main-carousel"
                loop={true}
                grabCursor={true}
                clickable={{
                    slideThumbs: true,
                }}
                breakpoints={{
                    640: { slidesPerView: 1, spaceBetween: 20 },
                    768: { slidesPerView: 2, spaceBetween: 40 },
                    1024: { slidesPerView: 3, spaceBetween: 50 },
                }}

                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}

                // And if we need scrollbar
                scrollbar={{
                    el: ".swiper-scrollbar",
                }}

                pagination={{
                    el: '.swiper-pagination',
                    clickable: true,
                }}
            >
                <SwiperSlide className='swiper-slide'>
                    <img className="swiper-lazy" datatype='string' src={imgs[0]} alt="Slide 1" />
                    <div className="swiper-lazy-preloader"></div>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide'>
                    <img className="swiper-lazy" datatype='string' src={imgs[1]} alt="Slide 2" />
                    <div className="swiper-lazy-preloader"></div>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide'>
                    <img className="swiper-lazy" datatype='string' src={imgs[2]} alt="Slide 3" />
                    <div className="swiper-lazy-preloader"></div>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide'>
                    <img className="swiper-lazy" datatype='string' src={imgs[3]} alt="Slide 4" />
                    <div className="swiper-lazy-preloader"></div>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide'>
                    <img className="swiper-lazy" datatype='string' src={imgs[4]} alt="Slide 5" />
                    <div className="swiper-lazy-preloader"></div>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide'>
                    <img className="swiper-lazy" datatype='string' src={imgs[5]} alt="Slide 6" />
                    <div className="swiper-lazy-preloader"></div>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide'>
                    <img className="swiper-lazy" datatype='string' src={imgs[6]} alt="Slide 6" />
                    <div className="swiper-lazy-preloader"></div>
                </SwiperSlide>
            </Swiper>

            {/* Navigation buttons */}
            <div className="swiper-button-prev slider-arrow">
                <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
                <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
        </div>
    );
}


export default CarouselFirstPage;