import React from "react";
import {
  orderCloseId,
  orderCompleteId,
} from "../../../reducers/data/api/server";
import Check from "../../../images/Check Icon.svg";
import Reject from "../../../images/Reject Icon.svg";
import Edit from "../../../images/Edit Icon.svg";

const Buttons = ({ order }) => {
  return (
    <div className="buttons">
      {order.orderStatusId && orderCompleteId === order.orderStatusId.id ? (
        ""
      ) : (
        <button type="button">
          <Check /> Готово
        </button>
      )}
      {order.orderStatusId && orderCloseId === order.orderStatusId.id ? (
        ""
      ) : (
        <button type="button">
          <Reject /> Отмена
        </button>
      )}
      <button type="button">
        <Edit /> Изменить
      </button>
    </div>
  );
};

export default Buttons;
