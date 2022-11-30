import React from "react";
import "./modal.css";

function DeleteModal({ closeModal }) {
  return (
    <div className="modal-background">
      <div className="modal-container">
        <div className="modal-header">
          <button className="title-close-btn" onClick={() => closeModal(false)}>
            {" "}
            X{" "}
          </button>
        </div>
        <div className="title">
          <h1>Are you sure you want to delete this product?</h1>
        </div>
        <div className="confirmation-btn">
          <button
            className="modal-btn"
            id="cancel-btn"
            onClick={() => closeModal(false)}>
            Cancel
          </button>
          <button className="modal-btn">Confirm</button>
        </div>
      </div>
    </div>
  );
  ``;
}

export default DeleteModal;