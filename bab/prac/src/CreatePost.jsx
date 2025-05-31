import { useState } from "react";
import { API_URL } from './App.jsx'

export function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content }),
    }).then(() => {
      alert("게시글이 생성되었습니다.");
      setTitle("");
      setContent("");
    });
  };

  return (
    <div>
      <h2>✏️ 게시글 추가</h2>g
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="제목" />
      <br />
      <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="내용" />
      <br />
      <button onClick={handleSubmit}>추가</button>
    </div>
  ); 
}
