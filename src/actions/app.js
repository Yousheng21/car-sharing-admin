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

  return [
    {
      name: "dateFrom",
      options: [
        { name: "За все время", id: "" },
        { name: "За неделю", id: "" },
        { name: "За месяц", id: "" },
        { name: "За день", id: "" },
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
