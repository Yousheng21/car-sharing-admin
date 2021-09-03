export const getPaginateNumber = (currPage, total) => {
  const perPageCenter = 1;
  const borderLeft = currPage - perPageCenter;
  const borderRight = currPage + perPageCenter;
  const range = [];
  const rangeWithDots = [];
  let prevItem = 0;

  // Получение основных страниц
  for (let i = 1; i <= total; i += 1) {
    if (i === 1 || i === total || (i >= borderLeft && i <= borderRight)) {
      range.push(i);
    }
  }

  // Сравнение по парам
  range.forEach((item) => {
    if (prevItem) {
      // Если между страницами промежуток в одну добавляем недостающую страницу
      if (item - prevItem === 2) {
        rangeWithDots.push(prevItem + 1);
      }
      // Если страницы не соседние добавляем троеточие
      else if (item - prevItem !== 1) {
        rangeWithDots.push("...");
      }
    }
    rangeWithDots.push(item);
    prevItem = item;
  });
  return rangeWithDots;
};
