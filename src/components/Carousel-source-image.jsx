import React, { useState } from "react";
import igStyle from "./modules/carousel-images.module.css";
import './modules/carousel-instagram-style.css'

import { CircleDot, Circle } from 'lucide-react';

import {
    BsArrowLeftCircleFill,
    BsArrowRightCircleFill,
} from "react-icons/bs";

import "https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js";

/* Component das imagens a qual é exportada para CarouselData */
const Carousel_image = ({ data }) => {
    const [imgIndex, setImgIndex] = useState(0);

    /* Funções para passar ou voltar as fotos */
    function showNextImage() {
        setImgIndex((index) => {
            if (index === data.length - 1) return 0;
            return index + 1;
        });
    }

    function showPrevImage() {
        setImgIndex((index) => {
            if (index === 0) return data.length - 1;
            return index - 1;
        });
    }

    return (
        <section className={igStyle.carousel} aria-label="Carrossel de imagens do instagram oficial do Salão Vivah">
            <div className={igStyle.carousel__wrapper}>

                {/* Component onde é mapeada de data as imagens e exportada*/}
                <div
                    style={{
                        width: "100%",
                        height: "100%",
                        overflow: "hidden",
                        display: "flex",
                    }}
                >
                    {data.map((url, index) => (
                        <img
                            key={url}
                            src={url}
                            alt="Instagram oficial do Salão Vivah"
                            aria-label={`Imagem nº ${index + 1}`}
                            aria-hidden={imgIndex !== index}
                            className={igStyle.imgSlider}
                            style={{ translate: `${-100 * imgIndex}%` }}
                        />
                    ))}
                </div>
                <img aria-hidden src={data[imgIndex]} className={igStyle.imgSlider}/>

                {/* Botões para alterar a foto */}
                <button onClick={showPrevImage} className={igStyle.imgSliderButton} aria-label="Botão de visualizar a imagem anterior">
                    <BsArrowLeftCircleFill
                        className={igStyle.arrow + ' ' + igStyle.arrowLeft}
                        aria-hidden
                    />
                </button>
                <button onClick={showNextImage} className={igStyle.imgSliderButton} aria-label="Botão de visualizar a próxima imagem">
                    <BsArrowRightCircleFill
                        className={igStyle.arrow + ' ' + igStyle.arrowRight}
                        aria-hidden
                    />
                </button>
                <div
                    style={{
                        position: 'absolute',
                        bottom: '.8rem',
                        justifyContent: 'center',
                        left: '50%',
                        right: '30%',
                        translate: '-50%',
                        display: 'flex',
                        gap: '.4rem'
                    }} className="sliderDotButtonMedia"
                >
                    {data.map((_, index) =>
                        <button tabIndex="0" key={index} className={igStyle.imgSliderDotButton} onClick={() => setImgIndex(index)}>
                            {index === imgIndex ? <CircleDot aria-hidden /> : <Circle aria-hidden />}
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Carousel_image;
