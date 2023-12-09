import { useLayoutEffect, useRef, forwardRef } from "react";
import { gsap } from "gsap";
import styles from "./MenuModal.module.scss";

const MenuModal = forwardRef((props, ref) => {
  return (
    <div ref={ref} className={styles.container}>
      <ul>
        <li>
          <a className={styles.menuLinks} href="#">
            HOME
          </a>
        </li>
        <li>
          <a className={styles.menuLinks} href="#">
            ABOUT
          </a>
        </li>
        <li>
          <a className={styles.menuLinks} href="#">
            PORTFOLIO
          </a>
        </li>
        <li>
          <a className={styles.menuLinks} href="#">
            CONTACTS
          </a>
        </li>
      </ul>
    </div>
  );
});

export default MenuModal;
