import React, { Fragment } from "react";
import { FiPlus } from "react-icons/fi";

import logo from "../../../assets/logo.svg";
import fakeData from "../../../mock/fake-data.mock.json";
import { Card } from "../../../components/card/core/card.component";

import "../styles/index.css";

export const DashboardCore: React.FC = () => {
  return (
    <Fragment>
      <div className="header">
        <div className="container-header">
          <img className="logo-image" src={logo} alt="logo" />
          <button className="btn-new-plate">
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
