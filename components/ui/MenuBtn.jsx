import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import styles from './MenuBtn.module.scss';

const MenuBtn = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const menuBtn = useRef();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={styles.menu}>
      <div className={`${styles.nav_btn} ${menuActive ? styles.active : ''}`}>
        <span className={styles.ncs}></span>
        <span className={styles.nos}></span>
        <span className={styles.nbs}></span>
      </div>
      <div ref={menuBtn} className={`${styles.menu_button_text}  ${isHovered ? styles.active : ''}`}>
        Menu
      </div>
    </div>
  );
};

export default MenuBtn;
