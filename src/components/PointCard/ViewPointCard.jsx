import React from "react";
import Input from "../common/Input/Input";
import OrderCardInput from "../OrderCard/ViewOrderCard/Inputs/OrderCardInput";
import { dataFormPoint } from "../../reducers/data/dataPoint";

const ViewPointCard = ({ dataForm, cities }) => {
  const handleSelect = (event, array) => {
    const { value, name } = event.currentTarget;
    const element = array.find((item) => {
      return item.id === value;
    });
    dataForm[name].setChange(element ?? dataFormPoint[name]);
  };
  return (
    <div className="vew-point-card">
      <Input
        title="Название"
        id="name"
        type="text"
        arrValid={["isEmpty", "isAddress"]}
        objInput={dataForm.name}
        necessarily
      />
      <Input
        title="Адрес"
        id="address"
        type="text"
        arrValid={["isEmpty", "isAddress"]}
        objInput={dataForm.address}
        necessarily
      />
      <OrderCardInput
        dataForm={dataForm}
        array={cities}
        handleChange={handleSelect}
        typeInput="select"
        property="cityId"
        isId
        id="cityId"
        text="Город"
      />
    </div>
  );
};

export default ViewPointCard;
