export const getPaginateNumber = (page, orders) => {
  const arrayNumber = [];

  if (orders.length > 3) {
    arrayNumber.push(1);
    if (page === 1) arrayNumber.push(page + 1, 0);
    else if (page === orders.length) arrayNumber.push(0, page - 1);
    else if (page >= 4 && page <= orders.length - 3) {
      arrayNumber.push(0, page - 1, page, page + 1, 0);
    } else if (page < 4 && page > 1) {
      if (page - 1 !== 1) arrayNumber.push(page - 1);
      arrayNumber.push(page, page + 1, 0);
    } else if (page > orders.length - 3 && page < orders.length) {
      arrayNumber.push(0, page - 1, page);
      if (page + 1 !== orders.length) arrayNumber.push(page + 1);
    }
    arrayNumber.push(orders.length);
  } else if (orders.length >= 1) {
    orders.map((order, index) => {
      return arrayNumber.push(index + 1);
    });
  }

  return arrayNumber;
};
