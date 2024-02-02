import React, { useRef, useLayoutEffect, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { gsap } from "gsap";
import Header from "../components/Header/Header";
import MenuModal from "../components/ui/MenuModal/MenuModal";
import ShareModal from "../components/ui/ShareModal/ShareModal";
import SideBar from "../components/ui/SideBar/SideBar";

import styles from "./Home.module.scss";

import { fetchBlogPosts } from "../reducers/blogReducer";

export default function Blog() {
  const shareModal = useRef();
  const tween = useRef(null);
  const shareModalCurrent = shareModal.current;
  const { shareOpen } = useSelector((state) => state.myReducer);
  const dispatch = useDispatch();
  let { posts, status, error } = useSelector((state) => state.blogReducer);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchBlogPosts());
    }
  }, [dispatch, status]);

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
    <>
      <div className={styles.modalMask}>
        <MenuModal className={styles.modal} />
        <ShareModal ref={shareModal} animate={shareOpen} />
      </div>

      <Header />
      <SideBar />
      <div>
        {status === "loading" && <p>Loading...</p>}
        {status === "failed" && <p>Error: {error}</p>}
        {status === "succeeded" && (
          <div>
            {posts.map((post) => (
              <div key={post.id}>
                <h2>{post.title}</h2>
                {/* Render other post details as needed */}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
