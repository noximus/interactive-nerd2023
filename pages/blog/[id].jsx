import React, { useRef, useLayoutEffect, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { gsap } from "gsap";
import Header from "../../components/Header/Header";
import MenuModal from "../../components/ui/MenuModal/MenuModal";
import ShareModal from "../../components/ui/ShareModal/ShareModal";
import SideBar from "../../components/ui/SideBar/SideBar";
import { useRouter } from "next/router";
import styles from "../Home.module.scss";

import { fetchBlogPosts, findPostById } from "../../reducers/blogReducer";

export default function PostPage() {
  const router = useRouter();
  const postId = router.query.id;

  const shareModal = useRef();
  const tween = useRef(null);
  const shareModalCurrent = shareModal.current;
  const { shareOpen } = useSelector((state) => state.myReducer);
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.blogReducer);
  let post = useSelector((state) => findPostById(state, postId));

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchBlogPosts());
    }
  }, [dispatch, status, post]);

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
        <div>
          {post ? (
            <div key={post.id}>
              <div>
                <h2>{post.title}</h2>
              </div>
              <div>
                <div>
                  <img
                    src={`${process.env.NEXT_PUBLIC_API_URL}/storage/${post.thumbnail}`}
                    alt={post.title}
                  />
                </div>
                <div>
                  <p>{post.body}</p>
                </div>
              </div>
            </div>
          ) : (
            <h2>Loading...</h2>
          )}
          <a href="/blogs">Go Back</a>
        </div>
      </div>
    </>
  );
}
