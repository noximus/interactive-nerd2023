import React, { useRef, useLayoutEffect, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { useRouter } from "next/router";

import { fetchBlogPosts, findPostById } from "../../reducers/blogReducer";

export default function PostPage() {
  const router = useRouter();
  const postId = router.query.id;

  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.blogReducer);
  let post = useSelector((state) => findPostById(state, postId));

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchBlogPosts());
    }
  }, [dispatch, status, post]);

  return (
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
        <a href="/blog">Go Back</a>
      </div>
    </div>
  );
}
