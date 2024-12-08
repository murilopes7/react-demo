import React from 'react'

import './modules/design.css'

const img_wrapper = {
    src: '/ig_img/Scathach_scarlett.webp', alt: 'Interior da Vivah'
};

export default function InteriorDesign() {
    return (
        <div style={{
            marginTop: '-4vh',
            backgroundImage: 'linear-gradient(180deg, #f5efda, #f5efd9)'
        }}

            className='container-image-design'>
            <div className="wrapperDesign">
                <h1 className="number">02</h1>
                <h2 className="design">Exterior Design</h2>

                <div className="image-container">
                    <img src={img_wrapper.src} alt={img_wrapper.alt} className='imageDesign' style={{
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
