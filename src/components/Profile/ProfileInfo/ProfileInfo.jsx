import React from "react";
import s from "./ProfileInfo.module.css";



const ProfileInfo = (props) => {
  return (
    <div className={s.profileData}>
      <div className={s.avaBlock}><img src="https://asquaredcreative.ca/wp-content/uploads/2018/10/transparent-try-11.png" /></div>
      <div className={s.userInfo}>
        <div className={s.item}>
          <b>Name</b>
        </div>
        <div>
          DOB
          </div>
        <div>
          City
          </div>
        <div>
          Education
          </div>
      </div>
    </div>

  );
};

export default ProfileInfo;
