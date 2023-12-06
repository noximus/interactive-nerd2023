import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenuOpen } from '../../../reducers/myReducer';
import { gsap } from 'gsap';
import styles from './MenuBtn.module.scss';

const MenuBtn = () => {
  const dispatch = useDispatch();
  const { menuOpen } = useSelector((state) => state.myReducer);
  const [isHovered, setIsHovered] = useState(false);
  const menuBtn = useRef();
  const ncs = useRef();
  const nos = useRef();
  const nbs = useRef();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleClick = () => {
    dispatch(toggleMenuOpen());
    console.log('handleClick , menuOpen: ', menuOpen);
  };

  useEffect(() => {
    const durationVal = 0.5;
    if (isHovered) {
      gsap.to(menuBtn.current, { duration: durationVal, color: '#F57500' });
    } else {
      gsap.to(menuBtn.current, { duration: durationVal, color: '#FFF' });
    }
  }, [isHovered]);

  useEffect(() => {
    const durationVal = 0.5;
    if (menuOpen) {
      gsap.to(ncs.current, {
        duration: durationVal,
        rotation: -45,
        transformOrigin: 'right top',
        top: '-3px',
        left: '-6px',
      });
      gsap.to(nos.current, {
        duration: durationVal,
        rotation: 45,
        transformOrigin: 'center center',
        top: '0',
        left: '0',
      });
      gsap.to(nbs.current, {
        duration: durationVal,
        rotation: -45,
        transformOrigin: 'left bottom',
        top: '3px',
        left: '6px',
      });
    } else {
      gsap.to(ncs.current, {
        duration: durationVal,
        rotation: 0,
        transformOrigin: 'right top',
        top: '0',
        left: '0',
      });
      gsap.to(nos.current, {
        duration: durationVal,
        rotation: 0,
        transformOrigin: 'center center',
        top: '0',
        left: '0',
      });
      gsap.to(nbs.current, {
        duration: durationVal,
        rotation: 0,
        transformOrigin: 'left bottom',
        top: '0',
        left: '0',
      });
    }
  }, [menuOpen]);

  return (
    <div onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={styles.menu}>
      <div className={`${styles.nav_btn} ${menuOpen ? styles.active : ''}`}>
        <span ref={ncs} className={styles.ncs}></span>
        <span ref={nos} className={styles.nos}></span>
        <span ref={nbs} className={styles.nbs}></span>
      </div>
      <div ref={menuBtn} className={`${styles.menu_button_text}  ${isHovered ? styles.active : ''}`}>
        Menu
      </div>
    </div>
  );
};

export default MenuBtn;
