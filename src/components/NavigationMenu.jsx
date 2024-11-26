import React from 'react';
import styles from './modules/NavigationMenu.module.css';

const NavigationMenu = () => {
  const menuItems = [
    { text: 'Home', className: styles.homeLink },
    { text: 'Serviços', className: styles.servicesLink },
    { text: 'Sobre', className: styles.aboutLink }
  ];

  return (
    <nav className={styles.navigation}>
      {menuItems.map((item, index) => (
        <a
          key={index}
          href={`#${item.text.toLowerCase()}`}
          className={item.className}
          tabIndex="0"
        >
          {item.text}
        </a>
      ))}
    </nav>
  );
};

export default NavigationMenu;