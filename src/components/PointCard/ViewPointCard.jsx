import React from "react";
import Input from "../common/Input/Input";
import InputSelect from "../common/Input/InputSelect";
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
        arrValid={["isEmpty", "isAddress"]}
        objInput={dataForm.name}
        necessarily
        type="text"
      />
      <Input
        title="Адрес"
        id="address"
        arrValid={["isEmpty", "isAddress"]}
        objInput={dataForm.address}
        necessarily
        type="text"
      />
      <InputSelect
        dataForm={dataForm}
        array={cities}
        handleChange={handleSelect}
        placeholder="Выберите город"
        property="cityId"
        isId
        id="cityId"
        text="Город"
      />
    </div>
  );
};

export default ViewPointCard;
