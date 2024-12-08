import React from 'react'

import './modules/design.css'

const img_wrapper = {
    src: '/ig_img/Aphrodite.webp', alt: 'Interior da Vivah'
};

export default function InteriorDesign() {
    return (
        <div style={{
            marginTop: 200,
            backgroundImage: 'linear-gradient(180deg, #E6E7E6, #f5efda)'
        }}
            className='container-image-design' >
            <div className="wrapperDesign">
                <h1 className="number">01</h1>
                <h2 className="design">Interior Design</h2>

                <div className="image-container" style={{
                    backgroundColor: 'rgb(248, 196, 204)'
                }}>
                    <img src={img_wrapper.src} alt={img_wrapper.alt} className='imageDesign' />
                </div>
            </div>
        </div >
    );
}
