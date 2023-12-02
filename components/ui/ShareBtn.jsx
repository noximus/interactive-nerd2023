import React, { useState, useRef, useLayoutEffect, useEffect } from 'react';
import { gsap } from 'gsap';
import styles from './ShareBtn.module.scss';
// import styles2 from './ShareCluster.module.scss';
import ShareCluster from './ShareCluster';



const ShareBtn = () => {
	const shareCluster = useRef();
	const shareCurrent = shareCluster.current
	const [shareClicked, setShareClicked] = useState(false)

	const handleClick = () => {
		setShareClicked(!shareClicked)
	}

	useEffect(() => {
		if(shareClicked){
			gsap.to(shareCurrent, {width:"200px", duration:.5})
		}else{
			gsap.to(shareCurrent, {width:"0px", duration:.5})
		}
	}, [shareClicked])

	return (
		<div className={styles.share} onClick={handleClick}>Share
			<ShareCluster ref={shareCluster}/>
		</div>
	)
};

export default ShareBtn;
