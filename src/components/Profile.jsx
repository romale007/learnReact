import React from "react";
import s from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src="https://cf.bstatic.com/images/hotel/max1024x768/219/219924341.jpg" />
      </div>
      <div className={s.content}>
        ava+description
        {/* <img src="https://asquaredcreative.ca/wp-content/uploads/2018/10/transparent-try-11.png" /> */}
      </div>
      <div>
        My Posts
        <div>New post</div>
        <div className="posts">
          <div className={s.item}>post1</div>
          <div className={s.item}>post2</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
