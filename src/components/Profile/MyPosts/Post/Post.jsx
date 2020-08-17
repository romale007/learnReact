import React from "react";
import s from "./Post.module.css";


const Post = (props) => {
  return (
    <div className={s.item}>
      <div>
        <img src="https://exclaim.ca//images/avatar_4.jpg" />
      </div>
      <div className = {s.postTextBlock}>
        <div className = {s.postMessage}>
          {props.message}
        </div>
        <div className = {s.likes}>
          like: {props.likesCount}
        </div>
      </div>
    </div>
  );
};

export default Post;
