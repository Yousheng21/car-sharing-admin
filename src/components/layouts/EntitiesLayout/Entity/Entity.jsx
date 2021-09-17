import React from "react";
// import { useSelector } from "react-redux";
// import Preloader from "../../../common/Preloader/Preloader";
import "./entity.scss";
import { useSelector } from "react-redux";
import Preloader from "../../../common/Preloader/Preloader";
import EntityList from "./EntityList";

const Entity = ({ viewEntities, entities, children }) => {
  const isUpdated = useSelector((state) => state.app.isUpdated);
  // const [modalIsActive, setModalIsActive] = useState(false);

  if (isUpdated) return <Preloader title="Обновление..." />;
  if (!entities.length)
    return <h1 className="title-empty">Данные не найдены</h1>;
  return (
    <section className="list">
      {viewEntities.map((entity) => (
        <EntityList entity={entity}>{children}</EntityList>
      ))}
    </section>
  );
};

export default Entity;
