import React, { useState, useRef, useEffect, useLayoutEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleShareOpen } from '../../../reducers/myReducer';
import { gsap } from 'gsap';
import styles from './ShareBtn.module.scss';

const ShareBtn = () => {
  const dispatch = useDispatch();
  const { shareOpen } = useSelector((state) => state.myReducer);
  const shareBtn = useRef();
  const shareBtnOverlay = useRef();
  const shareBtnCurrent = shareBtn.current;
  const shareBtnOverlayCurrent = shareBtnOverlay.current;
  const [shareClicked, setShareClicked] = useState(false);
  const [shareBtnHover, setShareBtnHover] = useState(false);
  const [modalShowing, setModalShowing] = useState(false);

  const handleClick = () => {
    dispatch(toggleShareOpen());
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
    if (shareOpen) {
      gsap.to(shareBtnOverlayCurrent, { backgroundColor: '#9a4c03', duration: 0 });
    } else {
      gsap.to(shareBtnOverlayCurrent, { backgroundColor: '#F57500', duration: 0 });
    }
  }, [shareOpen]);

  return (
    <div className={styles.share}>
      <span ref={shareBtn} className={styles.shareText} onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        share
      </span>
      <div ref={shareBtnOverlay} className={styles.shareBtnOverlay}></div>
    </div>
  );
};

export default ShareBtn;
