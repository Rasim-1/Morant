import React from "react";
import PropTypes from "prop-types";
import s from "./Modal.module.scss";

const Modal = ({ isOpen, image, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={s.modal} onClick={onClose}>
      <div className={s.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={s.closeButton} onClick={onClose}>
          &times;
        </button>
        <img src={image} alt="Car preview" className={s.modalImage} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  image: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
