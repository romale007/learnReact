import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";


const Dialogs = (props) => {

    const DialogItem = (props) => {
        let path = "/dialogs/" + props.id;
        return (
            <div className={s.dialog}>
                <NavLink to={path}>{props.name}</NavLink>
            </div>
        )
    }

    const Message = (props) => {
        return (
            <div className={s.message}>{props.message}</div>
        )
    }


    let dialogElements =
        props.state.dialogsData.map(dialog => <DialogItem key={dialog.id.toString()} name={dialog.name} id={dialog.id} />);

    let messageElements =
        props.state.messagesData.map(m => <Message key={m.id.toString()} message={m.message} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>

                {dialogElements}

            </div>
            <div className={s.messages}>

                {messageElements}

            </div>
        </div>
    )
}

export default Dialogs