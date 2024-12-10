import React from 'react';
import styles from './footer-design.module.css';

export const SocialIcons = () => {
    const socialLinks = [
        { src: "https://cdn.builder.io/api/v1/image/assets/2aff019a0b6541ef916c8852aafe766c/1874f2f0715caba0facc7f26eea783ccb60904ecdb9baa53acefcb47308f9c20?apiKey=2aff019a0b6541ef916c8852aafe766c&", alt: "Social media icon 1" },
        { src: "https://cdn.builder.io/api/v1/image/assets/2aff019a0b6541ef916c8852aafe766c/55ac23767f32a8594a0afe384d217581b4b4ebd4a4725a0b998aadcab9944c86?apiKey=2aff019a0b6541ef916c8852aafe766c&", alt: "Social media icon 2", className: styles.socialIconAlt },
        { src: "https://cdn.builder.io/api/v1/image/assets/2aff019a0b6541ef916c8852aafe766c/9de573d4a6af049c9e96c3fb86021729d16dfe6211a9367a5b19f701811a1cbc?apiKey=2aff019a0b6541ef916c8852aafe766c&", alt: "Social media icon 3", className: styles.socialIconLarge }
    ];

    return (
        <div className={styles.socialIcons}>
            {socialLinks.map((link, index) => (
                <img
                    key={index}
                    loading="lazy"
                    src={link.src}
                    alt={link.alt}
                    className={link.className || styles.socialIcon}
                />
            ))}
        </div>
    );
};

export const SiteMapLinks = () => {
    const links = ['Home', 'Sobre', 'Jeferson', 'Cleiton', 'Douglas', 'Gibson'];

    return (
        <ul className={styles.siteMap}>
            {links.map((item, index) => (
                <li key={index} className={styles.linkFooter}>
                    <a className={styles.paragraphFooter} href={`#${item.toLowerCase()}`} tabIndex="0">{item}</a>
                </li>
            ))}
        </ul>
    );
};

export const ServicesList = () => {
    const services = ['Cabelowsky', 'da Silva', 'Santos', 'Pereira', 'Matos'];

    return (
        /*  <div className={styles.servicesSection}>
             <div className={styles.sectionTitle}>Serviços</div>
             <div className={styles.servicesList}>
                 {services.map((service, index) => (
                     <React.Fragment key={index}>
                         {service}
                         <br />
                         <br />
                     </React.Fragment>
                 ))}
             </div>
         </div> */
        <nav className={styles.navigationSection}>
            <div className={styles.servicesContainer}>
                <h2 className={styles.sectionTitle}>Serviços</h2>
                <ul className={styles.siteMap}>
                    {services.map((item, index) => (
                        <li key={index} className={styles.listFooter}>
                            <a className={styles.paragraphFooter} href={`#${item.toLowerCase()}`} tabIndex="0">{item}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};