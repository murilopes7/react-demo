import React from 'react';
import styles from './modules/testimonialCard.module.css';

export const TestimonialCard = ({ text, backgroundImage, authorName, authorImage }) => {
    return (
        <div className={styles.testimonialCard}>
            <div className={styles.testimonialContent}>
                <img
                    loading="lazy"
                    src={backgroundImage}
                    className={styles.backgroundImage}
                    alt=""
                /> 
                <div className={styles.testimonialText} style={{marginTop: '1.5em'}}>
                    {text}
                </div>
                <div className={styles.authorInfo}>
                    <img
                        loading="lazy"
                        src={authorImage}
                        className={styles.authorImage}
                        alt={`${authorName}'s profile`}
                    />
                    <div className={styles.authorName}>
                        {authorName}
                    </div>
                </div>
            </div>
        </div>
    );
};