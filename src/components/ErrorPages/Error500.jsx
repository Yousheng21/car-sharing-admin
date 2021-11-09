import React from "react";

const Error500 = ({ props }) => {
  return (
    <div className="error-500">
      <h1 className="number">500</h1>
      <h1>Что-то пошло не так</h1>
      <h6>Попробуйте перезагрузить страницу</h6>
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

export default Error500;
