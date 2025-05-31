import { useState, useEffect } from "react";
import { API_URL } from './App.jsx'

export function AllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <h1>📋 모든 게시글</h1>
      {posts.map((post) => (
        <div key={post.id} style={{ border: "3px solid #ccc", marginBottom: "1rem" }}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}
