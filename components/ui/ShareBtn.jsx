import React, { useState, useRef, useLayoutEffect, useEffect } from 'react';
import { gsap } from 'gsap';
import styles from './ShareBtn.module.scss';
import ShareModal from './ShareModal';



const ShareBtn = () => {
	const shareBtn = useRef();
  const shareModal = useRef();
  const shareBtnCurrent = shareBtn.current;
  const shareModalCurrent = shareModal.current;
  const [shareClicked, setShareClicked] = useState(false);
  const [modalShowing, setModalShowing] = useState(false);

  const handleClick = () => {
    setShareClicked(!shareClicked);
  };
  const handleMouseEnter = () => {
    gsap.to(shareBtnCurrent, { color: '#F57500', duration: 0.2 });
  };
  const handleMouseLeave = () => {
    gsap.to(shareBtnCurrent, { color: '#FFFFFF', duration: 0.2 });
  };

  useEffect(() => {
    if (shareClicked) {
      gsap.to(shareBtnCurrent, {
        backgroundColor: '#222222',
        duration: 0.5,
      });
      gsap.to(shareModalCurrent, {
        width: '225px',
        duration: 0.5,
        onComplete: function () {
          setModalShowing(true);
        },
      });
    } else {
      gsap.to(shareBtnCurrent, { backgroundColor: '#F57500', duration: 0.5 });
      gsap.to(shareModalCurrent, { width: '0px', duration: 0.5, delay: 1, onComplete: setModalShowing(false) });
    }
  }, [shareClicked]);

  return (
    <div ref={shareBtn} className={styles.share} onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      Share
      <div className={styles.shareBtnOverLayer}></div>
      <ShareModal ref={shareModal} animate={modalShowing} />
    </div>
  );
};

export default ShareBtn;
