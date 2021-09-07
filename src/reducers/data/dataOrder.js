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
