import React, { useState } from "react";

import "../styles/index.css";

export const Modal: React.FC = () => {
  var subtitle: any;

  const [modalIsOpen, setIsOpen] = useState(false);

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

  return <h1>Teste</h1>;
};
