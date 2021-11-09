import React from "react";

const Error404 = ({ props }) => {
  return (
    <div className="error-500">
      <h1 className="number">404</h1>
      <h1>Страница не найдена</h1>
      <h6>Проверьте введенный адрес</h6>
      <button
        onClick={() => props.history.goBack()}
        type="button"
        className="btn btn-primary"
      >
        Назад
      </button>
    </div>
  );
};

export default Error404;
