import React from "react";
import { FiPlus } from "react-icons/fi";

import { useForm } from "react-hook-form";
import { Modal } from "../../../components/modal/core/modal.component";

export const ManagerPlate: React.FC = () => {
  const onSubmit = (data: any) => console.log(data);

  const { register, handleSubmit } = useForm();

  return (
    <Modal>
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
    </Modal>
  );
};
