import React, { Fragment, useCallback, useState } from "react";
import { FiPlus } from "react-icons/fi";

import logo from "../../../assets/logo.svg";
import fakeData from "../../../mock/fake-data.mock.json";
import { Card } from "../../../components/card/core/card.component";

import "../styles/index.css";

import ModalReact from "react-modal";

import { useForm } from "react-hook-form";

export const DashboardCore: React.FC = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => console.log(data);

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = useCallback((status) => {
    setShowModal(status);
  }, []);

  return (
    <Fragment>
      <ModalReact
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
        <div className="form-container">
          <div className="title">Novo Prato</div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="group-input">
              <label htmlFor="imageUrl">URL da imagem</label>
              <input
                type="text"
                name="imageUrl"
                placeholder="Cole o link aqui"
                ref={register}
              />
            </div>
            <div className="group-input">
              <label htmlFor="namePlate">Nome do prato</label>
              <input
                type="text"
                name="namePlate"
                placeholder="Ex. Moda Italiana"
                ref={register}
              />
            </div>
            <div className="group-input">
              <label htmlFor="price">Preço</label>
              <input name="price" ref={register} />
            </div>
            <div className="group-input">
              <label htmlFor="description">Descrição do prato</label>
              <input type="text" name="description" ref={register} />
            </div>
            <button className="btn-new-plate" type="submit">
              <div className="btn-new-plate-label">Adicionar prato</div>
              <div className="btn-new-plate-icon">
                <FiPlus size={22} />
              </div>
            </button>
          </form>
        </div>
      </ModalReact>
      <div className="header">
        <div className="container-header">
          <img className="logo-image" src={logo} alt="logo" />
          <button
            className="btn-new-plate"
            onClick={() => handleShowModal(true)}
          >
            <div className="btn-new-plate-label">Novo Prato</div>
            <div className="btn-new-plate-icon">
              <FiPlus size={22} />
            </div>
          </button>
        </div>
      </div>
      <div className="container-body">
        <div className="food-grid">
          {fakeData.foods.map((x) => (
            <Card
              key={x.id}
              name={x.name}
              price={x.price}
              image={x.image}
              available={x.available}
              description={x.description}
            />
          ))}
        </div>
      </div>
    </Fragment>
  );
};
