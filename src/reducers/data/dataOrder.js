import { orderCloseId, orderCompleteId, orderNewId } from "./api/server";

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
    value: { id: "", name: "" },
    inputValid: false,
  },
  cityId: {
    value: { name: "", id: "" },
    inputValid: false,
  },
  pointId: {
    value: { name: "", id: "" },
    inputValid: false,
  },
  carId: {
    value: { thumbnail: null, name: "", id: "", colors: "" },
    inputValid: false,
  },
  color: { value: "", inputValid: true },
  dateFrom: { value: 0, inputValid: false },
  dateTo: { value: 0, inputValid: false },
  rateId: {
    value: { price: 0, id: "" },
    inputValid: false,
  },
  price: { value: 0, inputValid: false },
  isFullTank: { value: false, inputValid: true },
  isNeedChildChair: { value: false, inputValid: true },
  isRightWheel: { value: false, inputValid: true },
};
