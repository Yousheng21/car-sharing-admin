import { orderCloseId, orderCompleteId, orderNewId } from "./api/server";

export const additional = [
  { name: "Полный бак", key: "isFullTank" },
  { name: "Детское кресло", key: "isNeedChildChair" },
  { name: "Правый руль", key: "isRightWheel" },
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
  pointId: {
    name: "",
    id: "",
  },
  carId: {
    thumbnail: null,
    name: "",
    id: "",
    colors: "",
  },
  color: "",
  dateFrom: 0,
  dateTo: 0,
  rateId: {
    price: 0,
    id: "",
  },
  price: 0,
  isFullTank: false,
  isNeedChildChair: false,
  isRightWheel: false,
};
