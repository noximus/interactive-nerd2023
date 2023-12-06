import React, { useState, useRef, useEffect, useLayoutEffect, useContext } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { gsap } from 'gsap';
import styles from './ShareBtn.module.scss';
import ShareModal from '../ShareModal/ShareModal';
import { set } from 'date-fns';

const ShareBtn = () => {
  // const dispatch = useDispatch();
  // const count = useSelector((state) => state.myReducer.value);
  const shareBtn = useRef();
  const shareBtnOverlay = useRef();
  const shareModal = useRef();
  const tween = useRef(null);
  const shareBtnCurrent = shareBtn.current;
  const shareBtnOverlayCurrent = shareBtnOverlay.current;
  const shareModalCurrent = shareModal.current;
  const [shareClicked, setShareClicked] = useState(false);
  const [shareBtnHover, setShareBtnHover] = useState(false);
  const [modalShowing, setModalShowing] = useState(false);

  const handleClick = () => {
    setShareClicked(!shareClicked);
  };
  const handleMouseEnter = () => {
    setShareBtnHover(true);
  };
  const handleMouseLeave = () => {
    setShareBtnHover(false);
  };

  useLayoutEffect(() => {
    if (shareBtnHover) {
      gsap.to(shareBtnCurrent, { color: '#F57500', duration: 0.2 });
      gsap.to(shareBtnOverlayCurrent, { top: '-80px', ease: 'inOut', duration: 0.2 });
    } else {
      gsap.to(shareBtnCurrent, { color: '#FFFFFF', duration: 0.2 });
      gsap.to(shareBtnOverlayCurrent, { top: '0', ease: 'inOut', duration: 0.2 });
    }
  }, [shareBtnHover]);
  useLayoutEffect(() => {
    if (shareClicked) {
      tween.current = gsap.to(shareModalCurrent, {
        right: '0',
        ease: 'inOut',
        duration: 0.5,
        onComplete: () => setModalShowing(true),
      });
      gsap.to(shareBtnOverlayCurrent, { backgroundColor: '#9a4c03', duration: 0 });
    } else {
      if (tween.current) {
        console.log('killing tween');
        tween.current.kill();
        setModalShowing(false);
        tween.current = gsap.to(shareModalCurrent, { right: '-240px', ease: 'inOut', duration: 0.5 });
        gsap.to(shareBtnOverlayCurrent, { backgroundColor: '#F57500', duration: 0 });
      } else {
        tween.current = gsap.to(shareModalCurrent, { right: '-240px', ease: 'inOut', duration: 0.5, delay: 2, onComplete: () => setModalShowing(false) });
        gsap.to(shareBtnOverlayCurrent, { backgroundColor: '#F57500', duration: 0 });
      }
    }
  }, [shareClicked]);

  return (
    <div className={styles.share}>
      <span ref={shareBtn} className={styles.shareText} onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        share
      </span>
      <div ref={shareBtnOverlay} className={styles.shareBtnOverlay}></div>
      <ShareModal ref={shareModal} animate={modalShowing} />
    </div>
  );
};

export default ShareBtn;
