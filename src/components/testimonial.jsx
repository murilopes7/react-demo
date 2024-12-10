import React from 'react';
import { TestimonialCard } from './testimonialCard';
import styles from './modules/testimonialCard.module.css';

const testimonialData = [
    {
        text: "Sed at risus vel nulla consequat fermentum. Donec et orci mauris. Nullam tempor velit id mi luctus, a scelerisque libero accumsan. In hac habitasse platea dictumst. Cras ac nunc nec massa tristique fringilla.",
        backgroundImage: "https://cdn.builder.io/api/v1/image/assets/2aff019a0b6541ef916c8852aafe766c/0302c681ea215ebc7f6a34cac9e31478e6394cfd49f0c0c34dd4e2df0f69c091?apiKey=2aff019a0b6541ef916c8852aafe766c&",
        authorName: "FABIANA LOURDES",
        authorImage: "https://cdn.builder.io/api/v1/image/assets/2aff019a0b6541ef916c8852aafe766c/653cbc43059ad56d4f16f35df8a62402004d1b99c29828fd7a06fb371757a77b?apiKey=2aff019a0b6541ef916c8852aafe766c&"
    },
    {
        text: "Sed at risus vel nulla consequat fermentum. Donec et orci mauris. Nullam tempor velit id mi luctus, a scelerisque libero accumsan. In hac habitasse platea dictumst. Cras ac nunc nec massa tristique fringilla.",
        backgroundImage: "https://cdn.builder.io/api/v1/image/assets/2aff019a0b6541ef916c8852aafe766c/0302c681ea215ebc7f6a34cac9e31478e6394cfd49f0c0c34dd4e2df0f69c091?apiKey=2aff019a0b6541ef916c8852aafe766c&",
        authorName: "FABIANA LOURDES",
        authorImage: "https://cdn.builder.io/api/v1/image/assets/2aff019a0b6541ef916c8852aafe766c/653cbc43059ad56d4f16f35df8a62402004d1b99c29828fd7a06fb371757a77b?apiKey=2aff019a0b6541ef916c8852aafe766c&"
    },
    {
        text: "Sed at risus vel nulla consequat fermentum. Donec et orci mauris. Nullam tempor velit id mi luctus, a scelerisque libero accumsan. In hac habitasse platea dictumst. Cras ac nunc nec massa tristique fringilla.",
        backgroundImage: "https://cdn.builder.io/api/v1/image/assets/2aff019a0b6541ef916c8852aafe766c/0302c681ea215ebc7f6a34cac9e31478e6394cfd49f0c0c34dd4e2df0f69c091?apiKey=2aff019a0b6541ef916c8852aafe766c&",
        authorName: "FABIANA LOURDES",
        authorImage: "https://cdn.builder.io/api/v1/image/assets/2aff019a0b6541ef916c8852aafe766c/653cbc43059ad56d4f16f35df8a62402004d1b99c29828fd7a06fb371757a77b?apiKey=2aff019a0b6541ef916c8852aafe766c&"
    }
];

const Testimonials = () => {
    return (
        <section className={styles.testimonialSection}>
            <h2 style={{ marginTop: '6em' }} className={styles.sectionTitle}>DEPOIMENTOS</h2>
            <div style={{ marginTop: '6em' }} className={styles.testimonialGrid}>
               {/*  <div className={styles.testimonialArticle}>
                    <p className={styles.textTestimonial}></p>
                    <small className={styles.authorName}></small>
                    <img src={testimonialData.authorImage} alt="" srcset="" className={styles.authorImage} />
                </div> */}

                {testimonialData.map((testimonial, index) => (
                    <TestimonialCard
                        key={index}
                        text={testimonial.text}
                        backgroundImage={testimonial.backgroundImage}
                        authorName={testimonial.authorName}
                        authorImage={testimonial.authorImage}
                    >
                    </TestimonialCard>
                ))}

                {/* {testimonialData.map((testimonial, index) => (
                    <TestimonialCard
                        key={index}
                        text={testimonial.text}
                        authorName={testimonial.authorName}
                        authorImage={testimonial.authorImage}
                    />
                ))} */}
            </div>
           {/*  <div className={styles.imageGallery}>
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/2aff019a0b6541ef916c8852aafe766c/0302c681ea215ebc7f6a34cac9e31478e6394cfd49f0c0c34dd4e2df0f69c091?apiKey=2aff019a0b6541ef916c8852aafe766c&"
                    className={styles.galleryImage}
                    alt="Gallery image 1"
                />
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/2aff019a0b6541ef916c8852aafe766c/4059452349adc586b5c763fb7c65fe8abf04c6539971485ad76fa13e8b87d544?apiKey=2aff019a0b6541ef916c8852aafe766c&"
                    className={styles.galleryImage}
                    alt="Gallery image 2"
                />
            </div> */}
        </section>
    );
};

export default Testimonials;