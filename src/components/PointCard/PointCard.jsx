import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import RefactorEntitiesLayout from "../layouts/RefactorEntitiesLayout/RefactorEntitiesLayout";
import AppLayout from "../layouts/AppLayout/AppLayout";
import ListSelector from "../../utils/listSelector";
import "./pointCard.scss";
import { useInput } from "../../utils/Validator/useInput";
import { dataFormPoint } from "../../reducers/data/dataPoint";
import { getRequestObj } from "../../actions/app";
import { requestPoint } from "../../actions/point";
import getCities from "../../actions/city";
import ViewPointCard from "./ViewPointCard";

const PointCard = ({ page, match }) => {
  const dispatch = useDispatch();
  const { id } = match.params;
  const { pointId, cities, points } = ListSelector();

  const dataForm = {
    name: useInput(dataFormPoint.name, {
      isEmpty: { value: false, text: "Пустое поле" },
      isAddress: {
        value: false,
        text: "кириллица,цифры и запятая от 3-х символов",
      },
    }),
    cityId: useInput(dataFormPoint.cityId, {
      isEmptySelect: { value: false, text: "" },
    }),
    address: useInput(dataFormPoint.address, {
      isEmpty: { value: false, text: "Пустое поле" },
      isAddress: {
        value: false,
        text: "кириллица,цифры и запятая от 3-х символов",
      },
    }),
  };

  useEffect(() => {
    if (!cities.length) dispatch(getCities());
  }, [cities.length]);

  const handleRequest = (method, requestId) => {
    return dispatch(requestPoint(method, getRequestObj(dataForm), requestId));
  };

  return (
    <AppLayout
      kind
      entityId={pointId}
      id={id}
      entity="Пункт"
      title="Карточка пункта выдачи"
      page={page}
    >
      <RefactorEntitiesLayout
        load={!cities.length}
        dataForm={dataForm}
        handleRequest={handleRequest}
        stateDataForm={dataFormPoint}
        entity={points}
        link="pointList"
        id={id}
      >
        <section className="point-card">
          <ViewPointCard dataForm={dataForm} cities={cities} />
        </section>
      </RefactorEntitiesLayout>
    </AppLayout>
  );
};

export default PointCard;
