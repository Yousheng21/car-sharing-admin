import {
  orderCloseId,
  orderCompleteId,
  orderNewId,
} from "../reducers/data/api/server";

export const getDropdown = (storeModels, storeCities) => {
  const models = storeModels.map((model) => {
    return { name: model.name, id: model.id };
  });

  const cities = storeCities.map((city) => {
    return { name: city.name, id: city.id };
  });
  const day = new Date();
  day.setHours(0);
  day.setMinutes(0);

  const week = new Date(day);
  week.setDate(week.getDate() - 7);

  const month = new Date(day);
  month.setMonth(month.getMonth() - 1);

  return [
    {
      name: "createdAt[$gt]",
      options: [
        { name: "За все время", id: "" },
        { name: "За месяц", id: month.getTime() },
        { name: "За неделю", id: week.getTime() },
        { name: "За день", id: day.getTime() },
      ],
    },
    { name: "carId", options: [{ name: "Все модели", id: "" }, ...models] },
    {
      name: "cityId",
      options: [{ name: "Все города", id: "" }, ...cities],
    },
    {
      name: "orderStatusId",
      options: [
        { name: "Все", id: "" },
        { name: "В процессе", id: orderNewId },
        { name: "Завершенные", id: orderCompleteId },
        { name: "Отмененные", id: orderCloseId },
      ],
    },
  ];
};
