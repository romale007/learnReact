import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";






                                                                        // Check the render method of `MyPosts`. See https://fb.me/react-warning-keys for more information.

const MyPosts = (props) => {
  let postsElements =
    props.postsData.map( p => <Post key={p.id.toString()} message={p.message} likesCount={p.likesCount} />);

  return (
    <div>
      <b>My Posts</b>
      <div>
        <textarea></textarea>
        <button>Add post</button>
        <button>Remove</button>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;
