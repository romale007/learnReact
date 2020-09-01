import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts.jsx";
import ProfileInfo from "./ProfileInfo/ProfileInfo";



const Profile = (props) => {

  return (
    <div>
      <div className={s.profileHeadPic}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/2/24/Mainz_Theodor-Heuss-Bruecke_blaue_Stunde_Panorama.jpg" />
      </div>
      <ProfileInfo />
      <MyPosts postsData={props.state.postsData} />
    </div>
  );
};

export default Profile;
