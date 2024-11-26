import React from 'react';

import styles from './modules/about-me-image.module.css';

import "@fontsource/anonymous-pro";
import "@fontsource/ibm-plex-mono";

export const imgPortfolio = {
    src: '../public/ig_img/rias-gremory.jpg', alt: 'Minha foto'
}

export default function AboutMe() {
    return (
        <section className={styles.aboutContainer}>
            <small className={styles.titleContainer}>Sobre mim</small>
        </section>
    );
}
