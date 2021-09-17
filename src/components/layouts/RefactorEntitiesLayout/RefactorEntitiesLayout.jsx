import React from "react";
import "./refactorEntitiesLayout.scss";
import Preloader from "../../common/Preloader/Preloader";
import RefactorEntitiesButtons from "./RefactorEntitiesButtons";

const RefactorEntitiesLayout = ({
  children,
  dataForm,
  handleRequest,
  load,
  handleReset,
  id,
  link,
}) => {
  const handleDisable = () => {
    return Object.keys(dataForm).some((item) => {
      return !dataForm[item].inputValid;
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
