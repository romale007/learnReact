import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts.jsx";

//console.log(s)

const Profile = (props) => {
  return (
    <div className={s.content}>
      <div className={s.profileHeadPic}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/2/24/Mainz_Theodor-Heuss-Bruecke_blaue_Stunde_Panorama.jpg" />
      </div>
      <div className={s.profileData}>
        <div className={s.avaBlock}><img src="https://asquaredcreative.ca/wp-content/uploads/2018/10/transparent-try-11.png" /></div>
        <div className = {s.userInfo}>
          <div className={s.item}>
            <b>Name</b>
          </div>
          <div>
            DOB
          </div>
          <div>
            City: {props.city}
          </div>
          <div>
            Education
          </div>
        </div>
      </div>
      <div><MyPosts/></div>
      </div>
  );
};

export default Profile;
