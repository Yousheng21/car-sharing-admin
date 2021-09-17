import React from "react";
import "./entity.scss";
import Buttons from "../../../common/Buttons/Buttons";

const EntityList = ({ entity, children }) => {
  // const [modalIsActive, setModalIsActive] = useState(false);
  const childrenWithExtraProp = React.Children.map(children, (child) => {
    return React.cloneElement(child, { entity });
  });
  return (
    <section className="list-entity">
      {childrenWithExtraProp}
      <Buttons link={`cardCar/${entity.id}`} />
    </section>
  );
};

export default EntityList;
