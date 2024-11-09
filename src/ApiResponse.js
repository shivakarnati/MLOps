import React from "react";
import Modal from  "react-modal"


const ApiResponseDialogue = ({isOpen, onClose,successMessage}) =>{
    return (
        <Modal
        isOpen ={isOpen}
        onRequestClose={onClose}
        contentLabel="successfully registered!!"
        >
            <h2>{successMessage}</h2>
            <button onClick={onClose}>Close</button>
        </Modal>
    );
};

const ApiResponse = ({message,status,payload})=>{
    return(
        <div>
            <p>Message:{message}</p>
            <p>{status ? 'success':'Error'}</p>
            {payload && <p>Payload:{JSON.stringify(payload)}</p>}
        </div>
    );
}

export {ApiResponseDialogue, ApiResponse};