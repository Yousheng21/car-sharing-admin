import React, { useEffect } from "react";
import "./refactorEntitiesLayout.scss";
import Preloader from "../../common/Preloader/Preloader";
import RefactorEntitiesButtons from "./RefactorEntitiesButtons";

const RefactorEntitiesLayout = ({
  children,
  dataForm,
  handleRequest,
  load,
  stateDataForm,
  entity,
  id,
  link,
}) => {
  useEffect(() => {
    if (id && entity.length) {
      const currEntity = entity.filter((item) => item.id === id)[0];
      Object.keys(currEntity).forEach((key) => {
        if (dataForm[key])
          dataForm[key].setChange(currEntity[key] ?? stateDataForm[key]);
      });
    }
  }, [id]);

  const handleDisable = () => {
    return Object.keys(dataForm).some((item) => {
      return !dataForm[item].inputValid;
    });
  };

  const handleReset = () => {
    Object.keys(dataForm).forEach((key) => {
      dataForm[key].setChange(stateDataForm[key]);
    });
  };

  if (load) return <Preloader title="Загрузка..." />;
  return (
    <section className="refactor-entities">
      {children}
      <RefactorEntitiesButtons
        handleDisable={handleDisable}
        id={id}
        handleRequest={handleRequest}
        handleReset={handleReset}
        link={link}
      />
    </section>
  );
};

export default RefactorEntitiesLayout;
