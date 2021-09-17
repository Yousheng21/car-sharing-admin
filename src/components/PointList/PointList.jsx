import React, { useEffect, useState } from "react";
import "./pointList.scss";
import { useDispatch, useSelector } from "react-redux";
import getCities from "../../actions/city";
import { getDropdownPoint } from "../../actions/app";
import AppLayout from "../layouts/AppLayout/AppLayout";
import EntitiesLayout from "../layouts/EntitiesLayout/EntitiesLayout";
import getPoints from "../../actions/point";
import Point from "./Point";

const PointList = ({ page }) => {
  const dispatch = useDispatch();

  const [pointPerPage] = useState(5);
  const [dropdown, setDropdown] = useState([]);

  const cities = useSelector((state) => state.app.cities);

  const points = useSelector((state) => state.app.points);
  const newPoints = useSelector((state) => state.app.newPoints);

  const [currentPoints, setCurrentPoints] = useState([]);

  useEffect(() => {
    if (!points.length) {
      dispatch(getPoints());
      setCurrentPoints(points.slice(0, pointPerPage));
    }
  }, [points.length]);

  useEffect(() => {
    if (!cities.length) dispatch(getCities());
    else setDropdown(getDropdownPoint(points, cities));
  }, [cities.length]);

  const handleClick = (filters) => {
    dispatch(getPoints(filters));
  };

  const reset = () => {
    dispatch(getPoints());
  };

  return (
    <AppLayout title="Пункты выдачи" page={page}>
      <EntitiesLayout
        className="point-list"
        dropdown={dropdown}
        entities={newPoints}
        storeEntities={points}
        setEntities={setCurrentPoints}
        handleClick={handleClick}
        stateFilters="filtersPoint"
        perPage={pointPerPage}
        reset={reset}
        titleLoader="Загрузка пунктов..."
        viewEntities={currentPoints}
      >
        <Point points={currentPoints} />
      </EntitiesLayout>
    </AppLayout>
  );
};

export default PointList;
