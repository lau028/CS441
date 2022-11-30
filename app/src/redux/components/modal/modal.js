import React from "react";
import "./modal.css";

function ModalForm({ closeModal }) {
  return (
    <div className="modal-background">
      <div className="modal-container">
        <form className="modal-form" action="" method="">
          <div className="modal-header">
            <button
              className="title-close-btn"
              onClick={() => closeModal(false)}>
              {" "}
              X{" "}
            </button>
          </div>
          <div className="title">
            <h1>Fill in the information for your product.</h1>
          </div>
          <div className="modal-content">
            <label>
              Product Name
              <input type="text" name="productName" />
            </label>
            <label>
              Product ID
              <input type="text" name="productID" />
            </label>
            <label>
              Product Amount
              <input type="text" name="productAmount" />
            </label>
            <label>
              Product Price
              <input type="text" name="productPrice" />
            </label>
          </div>
          <div>
            <button
              className="modal-btn"
              id="cancel-btn"
              onClick={() => closeModal(false)}>
              Cancel
            </button>
            <input type="submit" className="modal-btn" id="submit-btn"></input>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalForm;