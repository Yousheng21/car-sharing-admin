import React from "react";
import "./modal.scss";
import classNames from "classnames";

const Modal = ({ active, children, total }) => {
  const classModalContent = classNames({
    "modal-content": true,
    active,
  });

  const classModal = classNames({
    modal: true,
    total,
    active,
  });

  return (
    <div className={classModal}>
      <div className={classModalContent}>{children}</div>
    </div>
  );
};

export default Modal;
