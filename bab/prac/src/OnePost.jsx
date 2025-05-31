import { useState, useEffect } from "react";
import { API_URL } from './App.jsx'

export function OnePost({ postId }) {
  const [post, setPost] = useState(null);

  useEffect(() => {
    setPost(null)
    fetch(`${API_URL}/${postId}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [postId]);

  return post ? (
    <div>
      <h2>📌 게시글 상세</h2>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  ) : (
    <p>로딩 중...</p>
  );
}
