import React, { useCallback, useState } from "react";

import ReactModal from "react-modal";

import "../styles/index.css";

export const Modal: React.FC = ({ children }) => {
  var subtitle: any;

  const [modalIsOpen, setIsOpen] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = useCallback((status) => {
    setShowModal(status);
  }, []);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <ReactModal
      isOpen={showModal}
      // onAfterOpen={afterOpenModal}
      onRequestClose={() => handleShowModal(false)}
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          borderRadius: "8px",
          opacity: 1,
          width: "50%",
          height: "50%",
          background: "#F0F0F5",
        },
        overlay: {
          // background: "#121214",
          // opacity: 0.9,
        },
      }}
      contentLabel="Example Modal"
    >
      {children}
    </ReactModal>
  );
};
