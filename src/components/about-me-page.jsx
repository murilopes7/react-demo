import React from 'react';

import aboutMeStyles from './modules/about-me-image.module.css';

export const imgPortfolio = {
    src: '../public/ig_img/rias-gremory.jpg', alt: 'Minha foto'
}

const qualities = [
    { title: "Brabissima", content: "em coach quântico" },
    { title: "Top 10", content: "fãs do menino Neyma" },
    { title: "Top 10", content: "fãs do serisete" },
    { title: "Top 10", content: "fãs do Mesi careca" }

]

export default function AboutMe() {
    return (
        <div className={aboutMeStyles.content}>
            <div className={aboutMeStyles.information}>
                <small className={aboutMeStyles.sobre}>Sobre mim</small>
                <h1 className={aboutMeStyles.conhecaEu}>Fabiana Carvalho</h1>
                <p className={aboutMeStyles.informationContent}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.

                    <br />
                    Eum saepe, quae atipsum commodi in, deleniti molestias
                    eos repellendus placeat perferendis animi velit?

                    <br />

                    Commodi, nisi dolore? Ad, atque beatae. Ex?
                </p>
            </div>
            <ul className={aboutMeStyles.qualities}>
                {qualities.map((content, index) => (
                    <li
                        key={index}
                        value={index}
                        style={{
                            height: "8.4em",
                            flexDirection: "column",
                            position: "relative",
                            alignContent: "space-evenly",
                            boxShadow: "0 3.2px 3px rgba(0, 0, 0, 0.15)",
                            borderRadius: "6px",

                        }}

                        className={aboutMeStyles.containerQuality}>

                        <hr id={"index-" + index}
                            style={{
                                width: "100%",
                                position: "absolute",
                                border: "2px double #3e684a",
                                top: 0
                            }} />
                        <h1 style={{
                                position: "absolute",
                                fontFamily: "Anonymous Pro serif",
                                fontWeight: "100",
                                fontStyle: "normal",
                                fontSize: "40px",
                                color: "#000435",
                                left: "0.6em",
                                marginTop: "0.6em"
                            }}

                            className={aboutMeStyles.titleQuality}>

                            {content.title}

                        </h1>
                        <br />
                        <p style={{
                            position: "absolute",
                            marginTop: "5rem",
                            left: "1.5em",
                            fontWeight: "200",
                            fontFamily: "Raleway",
                            fontOpticalSizing: "auto"
                        }}
                            className={aboutMeStyles.paragraphQuality}>
                            {content.content}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
