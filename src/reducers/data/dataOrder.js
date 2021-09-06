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

export const arrCarColors = [
  { name: "голубой", id: "голубой" },
  { name: "красный", id: "красный" },
  { name: "черный", id: "черный" },
];

export const objColors = {
  Синий: "blue",
  Красный: "red",
  красный: "red",
  Чёрный: "black",
  черный: "black",
  Белый: "white",
  белый: "white",
  Фиолетовый: "pink",
  Зеленый: "green",
  Серый: "gray",
  Бордовый: "brown",
  Оранжевый: "orange",
  Желтый: "yellow",
};
