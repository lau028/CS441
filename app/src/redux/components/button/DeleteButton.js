import React, { useState } from "react";
import DeleteModal from "../modal/deleteModal";
import "./button.css";

function DeleteButton() {
  const [openModal, setOpenModal] = useState(false);
  const [input, setInput] = useState("");
  return (
    <div className="action-bar">
      <button
        id="delete-btn"
        class="btn"
        onClick={() => {
          setOpenModal(true);
        }}>
        Delete
      </button>
      {openModal && <DeleteModal closeModal={setOpenModal} />}
    </div>
  );
}
export default DeleteButton;