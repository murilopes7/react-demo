import React from 'react';

import styles from './BeautySalonPage.module.css';
import NavigationMenu from './components/NavigationMenu';
import Carousel from './data/CarouselData';
import AboutMeImage from './components/about-me-page';
import FirstPageCarousel from './components/carouselFirstPage.jsx';
import Interior from './components/interior-design.jsx'
import Exterior from './components/exterior-design.jsx'
import Testimonials from './components/testimonial.jsx'
import Footer from './footer/footer.jsx'

import './beautySalonImageAnimation.js';

import aboutMePopUp from '/ig_img/Desktop - 3.png';
import akeno from '/ig_img/akeno.avif';
import rias from '/ig_img/rias-gremory.jpg'
import logoHeader from '/ig_img/ÍCONE VARIAÇÃO SEM FUNDO.png'

const imgs = [aboutMePopUp, akeno, rias, logoHeader];

const BeautySalonPage = () => {
    return (
        <>
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
                        </div>

                        <div className={styles.agendamento}></div>
                    </header>

                    <section className={styles.firstPage}>
                        <FirstPageCarousel />
                    </section>

                    <section className={styles.aboutMePage}>
                        <AboutMeImage />
                    </section>

                    {/*Introdução do salão e do conteúdo*/}
                    <section className={styles.contentSection}>
                        {/*<a href="#after-image" tabIndex='0' className={styles.skipLink}>Pule o carrossel</a>*/}
                        <article className={styles.infoContent}>
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
                        </div>
                    </section>

                    <section className={styles.interiorPage}>
                        <Interior />
                    </section>

                    <section className={styles.exteriorPage}>
                        <Exterior />
                    </section>

                    <section className={styles.testimonialsCard}>
                        <Testimonials />
                    </section>
                </section>

                {/* <div className={styles.imgsPopUp}>
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
            </section> */}

                {/*  <div id="after-image"/> */}
            </main>

            <footer style={{ backgroundColor: '#1B1B1B', marginTop: '-2vh' }}>
                <Footer/>
            </footer>

        </>
    );
};

export default BeautySalonPage;