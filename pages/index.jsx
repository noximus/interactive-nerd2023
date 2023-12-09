import React, { useRef, useLayoutEffect } from 'react';
import { useSelector } from 'react-redux';
import { gsap } from 'gsap';
import Header from '../components/Header/Header';
import MenuModal from '../components/ui/MenuModal/MenuModal';
import ShareModal from '../components/ui/ShareModal/ShareModal';

import styles from './Home.module.scss';

export default function Index() {
  const shareModal = useRef();
  const tween = useRef(null);
  const shareModalCurrent = shareModal.current;
  const { shareOpen } = useSelector((state) => state.myReducer);

  useLayoutEffect(() => {
    if (shareOpen) {
      tween.current = gsap.to(shareModalCurrent, {
        right: '0',
        ease: 'inOut',
        duration: 0.5,
      });
    } else {
      tween.current = gsap.to(shareModalCurrent, { right: '-240px', ease: 'inOut', duration: 0.5 });
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
