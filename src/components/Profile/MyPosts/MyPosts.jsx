import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";


let postsData = [
  { id: '1', message: 'Hi, how are you?', likesCount: 1 },
  { id: '2', message: 'It\'s my first post........!', likesCount: 3 },
];



const MyPosts = () => {

  let postElements = postsData
    .map(p => <Post message={p.message} {p.likesCount} />)

  return (
    <div>
      <b>My Posts</b>
      <div>
        <textarea></textarea>
        <button>Add post</button>
        <button>Remove</button>
      </div>
      <div className={s.posts}>
        {postElements}

        {/* <Post message={postsData[0].message} likesCount={postsData[0].likesCount} />
      <Post message={postsData[1].message} likesCount={postsData[1].likesCount} /> */}


      </div>
    </div>
  );
};

export default MyPosts;
