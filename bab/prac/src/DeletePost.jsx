import { API_URL } from './App.jsx'

export function DeletePost({ postId }) {
  const handleDelete = () => {
    fetch(`${API_URL}/${postId}`, {
      method: "DELETE",
    }).then(() => alert("삭제 완료"));
  };

  return (
    <div>
      <h2>🗑 게시글 삭제</h2>
      <button onClick={handleDelete}>ID {postId} 삭제</button>
    </div>
  );
}
