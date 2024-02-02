import React, { useRef, useLayoutEffect, useEffect } from "react";
import Header from "../Header/Header";
import styles from "./layout.module.scss";
import { useSelector } from "react-redux";
import { gsap } from "gsap";

import MenuModal from "../ui/MenuModal/MenuModal";
import ShareModal from "../ui/ShareModal/ShareModal";
import SideBar from "../ui/SideBar/SideBar";

const Layout = ({ children }) => {
  const shareModal = useRef();
  const tween = useRef(null);
  const shareModalCurrent = shareModal.current;
  const { shareOpen } = useSelector((state) => state.myReducer);

  useLayoutEffect(() => {
    if (shareOpen) {
      tween.current = gsap.to(shareModalCurrent, {
        right: "0",
        ease: "inOut",
        duration: 0.5,
      });
    } else {
      tween.current = gsap.to(shareModalCurrent, {
        right: "-240px",
        ease: "inOut",
        duration: 0.5,
      });
    }
  }, [shareOpen]);
  return (
    // <div className={styles.container}>
    //   <Header />
    //   <div>Share</div>
    // </div>
    <>
      <div className={styles.modalMask}>
        <MenuModal className={styles.modal} />
        <ShareModal ref={shareModal} animate={shareOpen} />
      </div>

      <Header />
      <SideBar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
