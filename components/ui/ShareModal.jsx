import { useEffect, useRef, forwardRef } from 'react';
import { gsap } from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt, faFacebook, faInstagram, faLinkedinIn, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import styles from './ShareModal.module.scss';

const ShareModal = forwardRef((props, ref) => {
  const socialIcon1 = useRef();
  const socialIcon2 = useRef();
  const socialIcon3 = useRef();
  const socialIcon4 = useRef();
  const socialIcon5 = useRef();
  const returnIcon = useRef();
  const getAllIcons = () => [socialIcon1.current, socialIcon2.current, socialIcon3.current, socialIcon4.current, socialIcon5.current, returnIcon.current];

  useEffect(() => {
    const allIcons = getAllIcons();
    if (props.animate) {
      gsap.to(allIcons, { duration: 1, stagger: 0.1, ease: 'inOut', opacity: 1 });
    } else if (!props.animate) {
      gsap.to(allIcons, { duration: 1, stagger: 0.05, ease: 'inOut', opacity: 0 });
    }
  }, [props.animate]);

  return (
    <div ref={ref} className={styles.shareModal}>
      <button ref={socialIcon1} className={styles.socialBtns}>
        <FontAwesomeIcon icon={faGithubAlt} className={styles.socialIcons} />
      </button>

      <button ref={socialIcon2} className={styles.socialBtns}>
        <FontAwesomeIcon icon={faInstagram} className={styles.socialIcons} />
      </button>

      <button ref={socialIcon3} className={styles.socialBtns}>
        <FontAwesomeIcon icon={faLinkedinIn} className={styles.socialIcons} />
      </button>

      <button ref={socialIcon4} className={styles.socialBtns}>
        <FontAwesomeIcon icon={faFacebook} className={styles.socialIcons} />
      </button>

      <button ref={socialIcon5} className={styles.socialBtns}>
        <FontAwesomeIcon icon={faDiscord} className={styles.socialIcons} />
      </button>

      <button ref={returnIcon} className={styles.returnBtn}>
        <FontAwesomeIcon icon={faArrowLeftLong} className={styles.returnIcon} />
      </button>
    </div>
  );
});

export default ShareModal;
