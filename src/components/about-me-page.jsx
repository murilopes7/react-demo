import React from 'react';

import aboutMeStyles from './modules/about-me-image.module.css';

export const imgPortfolio = {
    src: '../public/ig_img/rias-gremory.jpg', alt: 'Minha foto'
}

const qualities = [
    { title: "Brabissima", content: "em coach quântico" },
    { title: "Top 10", content: "fãs do menino Neyma" }
]

export default function AboutMe() {
    return (
        <div className={aboutMeStyles.content}>
            <div className={aboutMeStyles.information}>
                <small className={aboutMeStyles.sobre}>Sobre mim</small>
                <h1 className={aboutMeStyles.conhecaEu}>Fabiana Carvalho</h1>
                <p className={aboutMeStyles.informationContent}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum saepe, quae at
                    ipsum commodi in, deleniti molestias eos repellendus placeat perferendis animi
                    velit? Commodi, nisi dolore? Ad, atque beatae. Ex?
                </p>
            </div>
            <ul className={aboutMeStyles.qualities}>
                {qualities.map((content, index) => (
                    <li
                        key={index}
                        value={index}
                        style={{
                            height: "60px",
                            border: "1px solid purple",
                            flexDirection: "column-reverse",
                            position: "relative",
                            alignContent: "space-evenly"
                        }}

                        className={aboutMeStyles.containerQuality}>

                        <hr id={"index-" + index}
                            style={{
                                width: "12vw",
                                position: "absolute",
                                border: "2px solid #D6BBAA",
                                top: 0
                            }} />
                        {content.title} <br /> {content.content}
                    </li>
                ))}
            </ul>
        </div>
    );
}
