// src/components/Modal.js
import React from 'react';
import '../css/Modal.css';

const Modal = ({ show, message, handleClose }) => {
    return (
        <div className={`modal ${show ? 'show' : ''}`} onClick={handleClose}>
            <div className="modal-cont" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h4 className="modal-title">Login Error</h4>
                </div>
                <div className="modal-body">
                    <p>{message}</p>
                </div>
                <div className="modal-footer">
                    <button onClick={handleClose}>Retry</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
