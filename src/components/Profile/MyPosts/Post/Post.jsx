import React from "react";
import s from "./Post.module.css";


const Post = () => {
  return (
    <div className={s.item}>
      <img src="https://exclaim.ca//images/avatar_4.jpg" />
            post1
      <div>
        <span>like</span>
      </div>
    </div>
  );
};

export default Post;
