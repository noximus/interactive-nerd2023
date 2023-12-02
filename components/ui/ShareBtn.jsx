import React, { useState, useRef, useLayoutEffect, useEffect } from 'react';
import { gsap } from 'gsap';
import styles from './ShareBtn.module.scss';
import ShareModal from './ShareModal';



const ShareBtn = () => {
	const shareModal = useRef();
	const shareCurrent = shareModal.current
	const [shareClicked, setShareClicked] = useState(false)
	const [modalShowing, setModalShowing] = useState(false)

	const handleClick = () => {
		setShareClicked(!shareClicked)
	}
	
	useEffect(() => {
		if(shareClicked){
			gsap.to(shareCurrent, {width:"225px", duration:.5, onComplete:function(){setModalShowing(true)}})
		}else{
			gsap.to(shareCurrent, {width:"0px", duration:.5, delay:1, onComplete:setModalShowing(false)})
		}
	}, [shareClicked])

	return (
		<div className={styles.share} onClick={handleClick}>Share
			<ShareModal ref={shareModal} animate={modalShowing}/>
		</div>
	)
};

export default ShareBtn;
