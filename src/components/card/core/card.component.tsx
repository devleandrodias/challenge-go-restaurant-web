import { FiEdit3, FiTrash } from "react-icons/fi";

import { ICardProps } from "../interfaces/card.interfaces";

import "../styles/index.css";

export const Card: React.FC<ICardProps> = ({
  name,
  price,
  image,
  available,
  description,
}) => {
  return (
    <div className="card">
      <div className="card-header">
        <img className="food-image" src={image} alt="food" />
      </div>
      <div className="card-body">
        <span className="food-label">{name}</span>
        <span className="description">{description}</span>
        <span className="price">
          <div className="price-currency">R$</div>
          <div className="price-money">{price.toLocaleString()}</div>
        </span>
      </div>
      <div className="card-footer">
        <div className="group-button-action">
          <button className="button-action" style={{ marginRight: 10 }}>
            <FiEdit3 size={20} color="#3D3D4D" />
          </button>
          <button className="button-action">
            <FiTrash size={20} color="#3D3D4D" />
          </button>
          <div className="switch-action">
            <label htmlFor="available" className="switch-action-available">
              Disponível
            </label>
            <label className="switch">
              <input name="available" type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
