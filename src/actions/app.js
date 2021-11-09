import { arrOrderStatus } from "../reducers/data/dataOrder";

export const getDropdownOrder = (storeModels, storeCities) => {
  const models = storeModels.map((model) => ({
    name: model.name,
    id: model.id,
  }));
  const cities = storeCities.map((city) => ({ name: city.name, id: city.id }));

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
      type: "select",
      options: [
        { name: "За все время", id: "" },
        { name: "За месяц", id: month.getTime() },
        { name: "За неделю", id: week.getTime() },
        { name: "За день", id: day.getTime() },
      ],
    },
    {
      name: "carId",
      type: "select",
      options: [{ name: "Все модели", id: "" }, ...models],
    },
    {
      name: "cityId",
      type: "select",
      options: [{ name: "Все города", id: "" }, ...cities],
    },
    {
      name: "orderStatusId",
      type: "select",
      options: [{ name: "Все", id: "" }, ...arrOrderStatus],
    },
  ];
};

export const getDropdownCar = (storeModels, storeCategories) => {
  const models = storeModels.map((model) => ({
    name: model.name,
    id: model.id,
  }));

  const categories = storeCategories.map((category) => ({
    name: category.name,
    id: category.id,
  }));

  return [
    {
      name: "id",
      type: "select",
      options: [{ name: "Все модели", id: "" }, ...models],
    },
    {
      name: "categoryId",
      type: "select",
      options: [{ name: "Все категории", id: "" }, ...categories],
    },
    {
      name: "priceMin[$gt]",
      type: "number",
      text: "Цена от",
    },
    {
      name: "priceMax[$lt]",
      type: "number",
      text: "Цена до",
    },
  ];
};

export const getDropdownPoint = (storePoints, storeCities) => {
  const points = storePoints.map((point) => ({
    name: point.address,
    id: point.id,
  }));

  const cities = storeCities.map((city) => ({ name: city.name, id: city.id }));

  return [
    {
      name: "id",
      type: "select",
      options: [{ name: "Все пункты", id: "" }, ...points],
    },
    {
      name: "cityId",
      type: "select",
      options: [{ name: "Все города", id: "" }, ...cities],
    },
  ];
};

export const getBase64 = (file) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      resolve(reader.result);
    };
    return reader.readAsDataURL(file);
  });
};

export const getRequestObj = (obj) => {
  let result = { ...obj };
  const handleObjCar = (key) => {
    result = {
      ...result,
      [key]: obj[key].value,
    };
  };
  Object.keys(obj).forEach((item) => {
    return handleObjCar(item);
  });
  return result;
};

export const getUrl = (params) => {
  let requestUrl = "?";
  Object.keys(params).map((param) => {
    if (params[param]) requestUrl += `${param}=${params[param]}&`;
    return requestUrl;
  });
  return requestUrl.substring(0, requestUrl.length - 1);
};
