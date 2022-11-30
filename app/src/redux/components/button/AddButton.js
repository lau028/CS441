import React, { useState } from "react";
import ModalForm from "../modal/modal";
import "./button.css";

function AddButton() {
  const [openModal, setOpenModal] = useState(false);
  const [input, setInput] = useState("");
  return (
    <div className="action-bar">
      <button
        id="add-btn"
        class="btn"
        onClick={() => {
          setOpenModal(true);
        }}>
        Add
      </button>
      {openModal && <ModalForm closeModal={setOpenModal} />}
    </div>
  );
}

export default AddButton;