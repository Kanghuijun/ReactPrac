import { useState } from "react";
import { API_URL } from './App.jsx'

export function EditPost({ postId }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleUpdate = () => {
    fetch(`${API_URL}/${postId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content }),
    }).then(() => alert("게시글이 수정되었습니다."));
  };
  
  return (
    <div>
      <h2>🛠 게시글 수정</h2>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="새 제목" />
      <br />
      <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="새 내용" />
      <br />
      <button onClick={handleUpdate}>수정</button>
    </div>
  );
}