import React, { useState, useRef, useEffect, useLayoutEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { gsap } from 'gsap';
import Header from '../components/Header/Header';
import MenuModal from '../components/ui/MenuModal/MenuModal';
import ShareModal from '../components/ui/ShareModal/ShareModal';
import { toggleShareOpen } from '../reducers/myReducer';

import styles from './Home.module.scss';

export default function Index() {
  const shareModal = useRef();
  const tween = useRef(null);
  const shareModalCurrent = shareModal.current;
  const dispatch = useDispatch();
  const { menuOpen, shareOpen, shareAnime } = useSelector((state) => state.myReducer);

  useLayoutEffect(() => {
    if (shareOpen) {
      tween.current = gsap.to(shareModalCurrent, {
        right: '0',
        ease: 'out',
        duration: 0.5,
      });
    } else {
      tween.current = gsap.to(shareModalCurrent, { right: '-240px', ease: 'in', duration: 0.5 });
    }
  }, [shareOpen]);

  return (
    <>
      <div className={styles.modalMask}>
        <MenuModal className={styles.modal} />
        <ShareModal ref={shareModal} animate={shareOpen} />
      </div>
      <Header />
      <div>Index.js Component</div>
    </>
  );
}
