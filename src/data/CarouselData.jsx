import React from "react";
import Carousel_image from '../components/Carousel-source-image';
import "../components/modules/carousel-images.module.css";
import '../components/modules/carousel-instagram-style.css';

/* import {slides} from './carouselData.json'*/

/* Arquivo das fotos */
import chika from '../../public/ig_img/chika.jpg';
import kiss_shot from '../../public/ig_img/kiss shot.png';
import ai from '../../public/ig_img/hoshino.jpg'

const imgs = [chika, kiss_shot, ai];

/* Função onde é de fato colocado o post no site principal */
function Carousel(){
    return (
        <div className="container-of-instagram">
            <article className="instagram-post">
                {/* Cabeçalho do post */}
                <header className="instagram__header">
                    <figure><img src="https://assets.codepen.io/108082/jake-dog.png" alt="Jake Dog" width="42" height="42" />
                        <figcaption>
                            <h4 className='profile_name'>Jake the Dog</h4>
                        </figcaption>
                    </figure>
                </header>

                {/* Aonde está realmente as fotos */}
                <section className="instagram__media">
                    <div className="img-instagram-media"></div>
                    <Carousel_image data={imgs}/>
                </section>

                {/* Rodapé do post, onde está os ícones */}
                <footer className="instagram__buttons">
                    <div className="left">
                        <svg className="instagram__icon instagram__icon--heart" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none">
                            <path className="heart" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                        <svg className="instagram__icon instagram__icon--comment" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M20.656 17.008C21.8711 14.9061 22.2795 12.4337 21.8048 10.0527C21.3301 7.67172 20.0048 5.54497 18.0765 4.06978C16.1482 2.59458 13.7488 1.87186 11.3266 2.0366C8.9043 2.20135 6.62486 3.24231 4.91408 4.96501C3.20329 6.68772 2.17817 8.97432 2.03024 11.3977C1.8823 13.821 2.62166 16.2153 4.1102 18.1334C5.59874 20.0514 7.73463 21.3619 10.1189 21.82C12.5031 22.2782 14.9726 21.8527 17.066 20.623L22 22L20.656 17.008Z"></path>
                        </svg>
                        <svg className="instagram__icon instagram__icon--message" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M22 3 9.218 10.083M11.698 20.334 22 3.001H2L9.218 10.084 11.698 20.334Z"></path>
                        </svg>
                    </div>
                    <div className="right">
                        <svg className="instagram__icon instagram__icon--saved" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M20 21L12 13.44L4 21V3H20V21Z"></path>
                        </svg>
                    </div>
                </footer>
            </article>
        </div>
    );
}

export default Carousel;