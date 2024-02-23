import React, { useRef, useLayoutEffect, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchBlogPosts } from "../../reducers/blogReducer";

export default function Blog() {
  const shareModal = useRef();

  const dispatch = useDispatch();
  let { posts, status, error } = useSelector((state) => state.blogReducer);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchBlogPosts());
    }
  }, [dispatch, status]);

  return (
    <div>
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Error: {error}</p>}
      {status === "succeeded" && (
        <div>
          {posts.map((post) => (
            <div key={post.id}>
              <img
                src={`${process.env.NEXT_PUBLIC_API_URL}/storage/${post.thumbnail}`}
              />
              <a href={`/blog/${post.id}`}>
                <h2>{post.title}</h2>
              </a>
              {/* Render other post details as needed */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
