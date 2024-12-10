import React from 'react'

import design from './modules/design.module.css'

const img_wrapper = {
    src: '/ig_img/Scathach_scarlett.webp', alt: 'Interior da Vivah'
};

export default function InteriorDesign() {
    return (
        <div style={{
            marginTop: '-4vh',
            backgroundImage: 'linear-gradient(180deg, #f5efda, #f5efd9)'
        }}

            className={design.containerimagedesign}>
            <div className={design.wrapperDesign}>
                <h1 className={design.number}>02</h1>
                <h2 className={design.design}>Exterior Design</h2>

                <div className={design.imageContainer}>
                    <img src={img_wrapper.src} alt={img_wrapper.alt} className={design.imageDesign} style={{
                        width: '62em',
                        height: '40em', 
                        objectFit: 'cover',
                        objectPosition: '0% 15%'
                    }} />
                </div>
            </div>

        </div >
    );
}
