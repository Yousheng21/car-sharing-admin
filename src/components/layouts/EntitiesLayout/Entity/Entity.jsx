import React from "react";
import "./entity.scss";
import { useSelector } from "react-redux";
import Preloader from "../../../common/Preloader/Preloader";
import EntityList from "./EntityList";

const Entity = ({
  viewEntities,
  entities,
  children,
  handleDelete,
  linkRefactor,
}) => {
  const isUpdated = useSelector((state) => state.app.isUpdated);

  if (isUpdated) return <Preloader title="Обновление..." />;
  if (!entities.length)
    return <h1 className="title-empty">Данные не найдены</h1>;
  return (
    <section className="list">
      {viewEntities.map((entity) => (
        <EntityList
          linkRefactor={linkRefactor}
          handleDelete={handleDelete}
          key={entity.id}
          entity={entity}
        >
          {children}
        </EntityList>
      ))}
    </section>
  );
};

export default Entity;
