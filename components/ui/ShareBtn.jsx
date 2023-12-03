import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import styles from './ShareBtn.module.scss';
import ShareModal from './ShareModal';
import { set } from 'date-fns';

const ShareBtn = () => {
  const shareBtn = useRef();
  const shareBtnOverlay = useRef();
  const shareModal = useRef();
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

  useEffect(() => {
    if (shareBtnHover) {
      gsap.to(shareBtnCurrent, { color: '#F57500', duration: 0.2 });
      gsap.to(shareBtnOverlayCurrent, { top: '-80px', ease: 'inOut', duration: 0.2 });
    } else {
      gsap.to(shareBtnCurrent, { color: '#FFFFFF', duration: 0.2 });
      gsap.to(shareBtnOverlayCurrent, { top: '0', ease: 'inOut', duration: 0.2 });
    }
  }, [shareBtnHover]);
  useEffect(() => {
    if (shareClicked) {
      gsap.to(shareModalCurrent, {
        width: '240px',
        duration: 0.5,
        onComplete: () => setModalShowing(true),
      });
    } else {
      setModalShowing(false);
      gsap.to(shareModalCurrent, { width: '0px', duration: 0.5, delay: 1 });
    }
  }, [shareClicked]);

  return (
    <div className={styles.share} onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <span ref={shareBtn} className={styles.shareText}>
        Share
      </span>
      <div ref={shareBtnOverlay} className={styles.shareBtnOverlay}></div>
      <ShareModal ref={shareModal} animate={modalShowing} />
    </div>
  );
};

export default ShareBtn;
