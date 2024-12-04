import React from 'react';

import styles from './BeautySalonPage.module.css';
import NavigationMenu from './components/NavigationMenu';

import Carousel from './data/CarouselData';
import AboutMeImage from './components/about-me-page';

import FirstPageCarousel from './carouselFirstPage.jsx';

import './beautySalonImageAnimation.js';

const socialIcons = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/d58fbb278806b0d837f45acaf27a975e29a3dc2d0de29e22377b040c0dd4a13d?placeholderIfAbsent=true&apiKey=2aff019a0b6541ef916c8852aafe766c", alt: "Social Media Icon 1" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/95ab4cfd2a4f4968d752f45b906537e07a5fffccda30e6791bcb09e078822b9d?placeholderIfAbsent=true&apiKey=2aff019a0b6541ef916c8852aafe766c", alt: "Social Media Icon 2" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/4e3def12d0cb8417defdab7c061c5b36f7bb0ddae9347915e0cb185bcb639502?placeholderIfAbsent=true&apiKey=2aff019a0b6541ef916c8852aafe766c", alt: "Social Media Icon 3" }
];

import aboutMePopUp from '../public/ig_img/Desktop - 3.png';
import akeno from '../public/ig_img/akeno.avif';
import rias from '../public/ig_img/rias-gremory.jpg'
import logoHeader from '../public/ig_img/ÍCONE VARIAÇÃO SEM FUNDO.png'

const imgs = [aboutMePopUp, akeno, rias, logoHeader];


export function SclMedia() {
    return (
        <div className={styles.socialIconsContainer}>
            {socialIcons.map((icon, index) => (
                <img
                    key={index}
                    loading="lazy"
                    src={icon.src}
                    alt={icon.alt}
                    className={styles.socialIcon}
                />
            ))}
        </div>
    );
}

const BeautySalonPage = () => {
    return (
        <main className={styles.mainContainer}>
            <section className={styles.HeroPageDivisor}>

                {/*cabeçalho do site*/}
                <header className={styles.header}>
                    <div className={styles.logo}>
                        <a href='#Home' className={styles.logoAnchor}>
                            <img className={styles.logoImage} src={imgs[3]} alt="imagem logo" />
                        </a>
                    </div>

                    <div className={styles.headerContent}>
                        <NavigationMenu />
                        {/* <SclMedia className={styles.socialMediaIcons} icons={socialIcons} />*/}
                    </div>

                    <div className={styles.agendamento}></div>
                </header>

                <section className={styles.firstPage}>
                    <FirstPageCarousel />
                </section>

                <section className={styles.aboutMePage}>
                    <AboutMeImage />
                </section>

                {/*  
                    <section>
                        <h2 className={styles.title}>Conheça nosso salão</h2>
                        <p className={styles.description}>
                            Customer relationship management (CRM) systems help businesses manage interactions
                            with current and potential customers. <br />By tracking customer data and communication
                            history, CRM tools enable personalized marketing efforts and improve customer
                            satisfaction. <br />Effective CRM implementation can lead to increased sales and
                            stronger customer loyalty.
                        </p>

                        <a href="#schedule" className={styles.scheduleButton}>
                            <span className={styles.buttonText}>Agende sua visita</span>
                            <img
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d1706d02471283cde877613ffe6a3cea6aedea95428fbf422b6390f9e7171ec?placeholderIfAbsent=true&apiKey=2aff019a0b6541ef916c8852aafe766c"
                                alt="Botão para agendar uma visita e conversar com o salão"
                                className={styles.buttonIcon}
                            />
                        </a>
                    </section> 
                */}

                {/*Introdução do salão e do conteúdo*/}
                <section className={styles.contentSection}>
                    {/*<a href="#after-image" tabIndex='0' className={styles.skipLink}>Pule o carrossel</a>*/}
                    <article className={styles.infoContent}>

                        {/* Blob that moves around in the page */}
                        {/*  <div className={styles.blob}>
                            <svg xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 350">
                                <path d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z" />
                            </svg>
                        </div> */}
                        <h1 className={styles.textBackgroundTitle}>
                            {/* VIVAH - HAIR & THERAPY */}
                            {/*<img src={logo} style={{ width: '100%', height: '200px', }} alt="Logo fundo - opacidade baixa" />*/}
                        </h1>

                        <h2 className={styles.title}>Conheça nosso salão</h2>
                        <p className={styles.description}>
                            Customer relationship management (CRM) systems help businesses manage interactions
                            with current and potential customers. <br />By tracking customer data and communication
                            history, CRM tools enable personalized marketing efforts and improve customer
                            satisfaction. <br />Effective CRM implementation can lead to increased sales and
                            stronger customer loyalty.
                        </p>

                        {/* Botão de chamada pro zaperson*/}
                        <a href="#schedule" className={styles.scheduleButton}>
                            <span className={styles.buttonText}>Agende sua visita</span>
                            <img
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d1706d02471283cde877613ffe6a3cea6aedea95428fbf422b6390f9e7171ec?placeholderIfAbsent=true&apiKey=2aff019a0b6541ef916c8852aafe766c"
                                alt="Botão para agendar uma visita e conversar com o salão"
                                className={styles.buttonIcon}
                            />
                        </a>
                    </article>

                    {/* Carrossel de fotos baseado no instagram */}
                    <div className={styles.imageWrapper}>
                        <Carousel />
                        {/*<a href="/" style={{ fontSize: '4rem' }}>Link olá</a>*/}
                    </div>
                </section>

                {/* <div className={styles.customShapeDivider}>
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className={styles.shapeFill}></path>
                        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className={styles.shapeFill}></path>
                        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className={styles.shapeFill}></path>
                    </svg>
                </div> */}
            </section>
            {/* 

            <div className={styles.imgsPopUp}>
                <img
                    src={imgs[0]}
                    data-img
                    itemID='img-1'
                    className={styles.topSectionImg + ' ' + styles.show}
                />
                <img src={imgs[1]} data-img itemID="img-2" />
                <img src={imgs[2]} data-img itemID="img-3" />
            </div> */}

            {/*  <section className={styles.topSection + ' ' + styles.fullScreenSection}>
                <div className={styles.left}>
                    <h1>Build Better Backends</h1>
                    <p>
                        The only platform that gives AI the ability to autonomously build web
                        services.
                    </p>
                </div>
                <div className={styles.right}></div>
            </section>
            <section className={styles.fullScreenSection + ' ' + styles.firstMainSection}>
                <h1>Completely Visual</h1>
                <p>Never touch the command line, from provision to production.</p>
                <div data-img-to-show="#img-1"></div>
            </section>
            <section className={styles.fullScreenSection}>
                <h1>Full Stack</h1>
                <p>
                    Never manage infrastructure again. One click gets you: a database, APIs,
                    deployments, hosting, etc.
                </p>
                <div data-img-to-show="#img-2"></div>
            </section>
            <section className={styles.fullScreenSection}>
                <h1>Launch Faster</h1>
                <p>Logical can get systems to market in minutes instead of weeks.</p>
                <div data-img-to-show="#img-3"></div>
            </section>
 */}
            {/*  <div id="after-image"/> */}

        </main>
    );
};

export default BeautySalonPage;