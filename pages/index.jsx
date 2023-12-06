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
        ease: 'inOut',
        duration: 0.5,
      });
    } else {
      tween.current = gsap.to(shareModalCurrent, { right: '-240px', ease: 'inOut', duration: 0.5 });
      // if (tween.current) {
      //   console.log('killing tween');
      //   tween.current.kill();
      //   toggleShareOpen(false);
      // } else {
      //   tween.current = gsap.to(shareModalCurrent, { right: '-240px', ease: 'inOut', duration: 0.5, delay: 2, onComplete: () => toggleShareOpen(false) });
      // }
    }
  }, [shareOpen]);

  return (
    <>
      <div className={styles.modalMask}>
        <MenuModal className={styles.modal} />
        <ShareModal ref={shareModal} animate={shareOpen} />
      </div>
      <Header />
      <div>This is where the content will go</div>
    </>
  );
}
