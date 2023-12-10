import { useLayoutEffect, useRef, forwardRef } from "react"
import { gsap } from "gsap"
import styles from "./MenuModal.module.scss"

const MenuModal = forwardRef((props, ref) => {
  const menuLinkList = useRef()
  const menuModalFooter = useRef()

  useLayoutEffect(() => {
    if (props.animate) {
      gsap.to(menuLinkList.current, {
        duration: 0.5,
        ease: "inOut",
        left: "20%",
        opacity: 1,
        delay: 1,
      })
      gsap.to(menuModalFooter.current, {
        duration: 0.5,
        ease: "inOut",
        bottom: 0,
        delay: 0.5,
      })
    } else if (!props.animate) {
      gsap.to(menuLinkList.current, {
        duration: 0.5,
        ease: "inOut",
        left: "50%",
        opacity: 0,
      })
      gsap.to(menuModalFooter.current, {
        duration: 0.5,
        ease: "inOut",
        bottom: -70,
      })
    }
  }, [props.animate])

  return (
    <div ref={ref} className={styles.container}>
      <ul ref={menuLinkList} className={styles.menuLinkList}>
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
      <div ref={menuModalFooter} className={styles.menuModalFooter}>
        Interactive Nerd All Rights Reserved
      </div>
    </div>
  )
})

export default MenuModal
