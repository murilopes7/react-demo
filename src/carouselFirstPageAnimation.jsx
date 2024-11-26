import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Lazy,  Navigation, Thumbs } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/lazy';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const Carousel = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div>
            <Swiper
                breakpoints={{
                    640: { slidesPerView: 1, spaceBetween: 20 },
                    768: { slidesPerView: 2, spaceBetween: 40 },
                    1024: { slidesPerView: 3, spaceBetween: 50 },
                }}
            >
                {/* Add SwiperSlides here if needed */}
            </Swiper>

            {/* Thumbnail Carousel */}
            <Swiper
                modules={[Thumbs]}
                className="thumbs-container"
                onSwiper={setThumbsSwiper}
                slidesPerView={3}
                spaceBetween={10}
                watchSlidesProgress
            >
                <SwiperSlide><img src="/public/ig_img/rias-gremory" alt="Rias Gremory" /></SwiperSlide>
                <SwiperSlide><img src="thumb2.jpg" alt="Thumbnail 2" /></SwiperSlide>
                <SwiperSlide><img src="thumb3.jpg" alt="Thumbnail 3" /></SwiperSlide>
            </Swiper>

            {/* Main Carousel */}
            <Swiper
                modules={[Lazy, Navigation, Thumbs]}
                lazy={true} // Enable lazy loading
                spaceBetween={10}
                slidesPerView={1}
                className="main-carousel"
                loop={true}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                thumbs={{ swiper: thumbsSwiper }}
            >
                <SwiperSlide><img src="image1.jpg" alt="Slide 1" /></SwiperSlide>
                <SwiperSlide><img src="image2.jpg" alt="Slide 2" /></SwiperSlide>
                <SwiperSlide><img src="image3.jpg" alt="Slide 3" /></SwiperSlide>
            </Swiper>

            {/* Navigation buttons */}
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
        </div>
    );
};

export default Carousel;