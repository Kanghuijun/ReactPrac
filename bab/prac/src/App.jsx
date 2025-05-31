import './App.css'
import { AllPosts } from './AllPosts'
import { OnePost } from './OnePost'
import { CreatePost } from './CreatePost';
import { EditPost } from './EditPost';
import { DeletePost } from './DeletePost';
import { useState } from 'react';
export const API_URL = "http://voicevocab.store/post";


export default function App() {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <input placeholder='게시물ID'   value={number} onChange={(e)=>setNumber(e.target.value)}/>
      <AllPosts />
      <hr />
      <OnePost postId={number} />
      <hr />
      <CreatePost />
      <hr />
      <EditPost postId={number} />
      <hr />
      <DeletePost postId={number}/>
    </div>
  );
}