export const progress = (event) => {
  event.preventDefault();
  const thumb = document.querySelector(".thumb");
  return event.clientX - thumb.getBoundingClientRect().left;
};

export const onMouseMove = (e, shiftX) => {
  const slider = document.getElementById("slider");
  const thumbBefore = document.querySelector(".thumb-before");
  const thumb = slider.querySelector(".thumb");

  let newLeft = e.clientX - shiftX - slider.getBoundingClientRect().left;

  // курсор вышел из слайдера => оставить бегунок в его границах.
  if (newLeft < 0) {
    newLeft = 0;
  }
  const rightEdge = slider.offsetWidth - thumb.offsetWidth;
  if (newLeft > rightEdge) {
    newLeft = rightEdge;
  }

  thumb.style.left = `${newLeft}px`;
  thumbBefore.style.width = `${newLeft}px`;
  return Math.floor(newLeft / 3);
};
