import { orderCloseId, orderCompleteId, orderNewId } from "./api/server";
import { useInput } from "../../utils/Validator/useInput";

export const additional = [
  { name: "Полный бак", price: 500, key: "isFullTank" },
  { name: "Детское кресло", price: 200, key: "isNeedChildChair" },
  { name: "Правый руль", price: 1600, key: "isRightWheel" },
];

export const arrOrderStatus = [
  { name: "В процессе", id: orderNewId },
  { name: "Завершенные", id: orderCompleteId },
  { name: "Отмененные", id: orderCloseId },
];

export const dataFormOrder = {
  orderStatusId: {
    id: "",
    name: "",
  },
  cityId: {
    name: "",
    id: "",
  },
  pointId: { name: "", id: "" },
  carId: { thumbnail: null, name: "", id: "", colors: "" },
  color: "",
  dateFrom: 0,
  dateTo: 0,
  rateId: { price: 0, id: "" },
  price: 0,
  isFullTank: false,
  isNeedChildChair: false,
  isRightWheel: false,
};

export const dataFormOrderWithHook = () => {
  return {
    orderStatusId: useInput(dataFormOrder.orderStatusId, {
      isEmptySelect: { value: false, text: "" },
    }),
    cityId: useInput(dataFormOrder.cityId, {}),
    pointId: useInput(dataFormOrder.pointId, {
      isEmptySelect: { value: false, text: "" },
    }),
    carId: useInput(dataFormOrder.carId, {
      isEmptySelect: { value: false, text: "" },
    }),
    color: useInput(dataFormOrder.color, {
      isEmpty: { value: false, text: "" },
    }),
    dateFrom: useInput(dataFormOrder.dateFrom, {}),
    rateId: useInput(dataFormOrder.rateId, {
      isEmptySelect: { value: false, text: "" },
    }),
    isFullTank: useInput(dataFormOrder.isFullTank, {}),
    isNeedChildChair: useInput(dataFormOrder.isNeedChildChair, {}),
    isRightWheel: useInput(dataFormOrder.isRightWheel, {}),
  };
};
