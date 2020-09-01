import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";


let dialogsData = [
    { id: '1', name: 'Roman' },
    { id: '2', name: 'Pavel' },
    { id: '3', name: 'Victor' },
    { id: '4', name: 'Anna' },
];

let messagesData = [
    { id: '1', message: 'Hi' },
    { id: '2', message: 'How are u?' },
    { id: '3', message: 'Mm?' },
    { id: '4', message: 'A?' },
];


const Dialogs = () => {

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


    let dialogElements = dialogsData
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

    let messageElements = messagesData
        .map(m => <Message message={m.message} />);

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