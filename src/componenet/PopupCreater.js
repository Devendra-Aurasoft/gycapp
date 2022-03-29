import React from 'react'
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";

const PopupCreater = (props) => {
    const { open, onCloseModel, FormData } = props;
    return (
        <>
            <Modal open={open} onClose={onCloseModel}>
                <FormData />
            </Modal>
        </>
    )
}

export default PopupCreater