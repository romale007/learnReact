import React from "react";
import s from "./Dialogs.module.css";



const Dialogs = () => {
    return (
        <div className={s.dialogs}>
           <div className={s.dialogItems}>         
                <div className={s.dialog}>
                    Roman
                </div>
                <div className={s.dialog + ' ' + s.active}>
                    Pavel
                </div>
                <div className={s.dialog}>
                    Victor
                </div>
                <div className={s.dialog}>
                    Anna
                </div>
           </div>
           <div className={s.messages}>
               <div className={s.message}>Hi</div>
               <div className={s.message}>How are u?</div>
               <div className={s.message}>A?</div>
               <div className={s.message}>A?</div>
           </div>
        </div>
    )
}

export default Dialogs