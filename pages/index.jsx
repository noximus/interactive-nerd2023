import React, { useRef, useLayoutEffect } from 'react';
import { useSelector } from 'react-redux';
import { gsap } from 'gsap';

import Header from '../components/Header/Header';
import MenuModal from '../components/ui/MenuModal/MenuModal';
import ShareModal from '../components/ui/ShareModal/ShareModal';
import Aside from '../components/ui/Aside/Aside';
import Content from '../components/ui/Content/Content';

import styles from './Home.module.scss';
import Branding from '../components/ui/Branding/Branding';
import MenuBtn from '../components/ui/MenuBtn/MenuBtn';
import ShareBtn from '../components/ui/ShareBtn/ShareBtn';
import SubTitle from '../components/ui/SubTitle/SubTitle';

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
    <div className={styles.app}>
      <div className={styles.modalMask}>
        <MenuModal className={styles.modal} />
        <ShareModal className={styles.shareModalMobile} ref={shareModal} animate={shareOpen} />
      </div>
      <Branding className={styles.brand} />
      <MenuBtn className={styles.menuBtn} />
      <ShareBtn className={styles.shareBtn} />
      <SubTitle className={styles.subTitle} />
      <Aside className={styles.aside} />
      <Content className={styles.content} />
    </div>
  );
}
