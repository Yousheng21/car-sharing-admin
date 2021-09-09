import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Filters from "./Filters/Filters";
import Pagination from "./Pagination/Pagination";
import Preloader from "../../common/Preloader/Preloader";
import { setFilters } from "../../../reducers/appReducer";
import Entity from "./Entity/Entity";

const EntitiesLayout = ({
  children,
  stateFilters,
  entities,
  storeEntities,
  setEntities,
  dropdown,
  className,
  perPage,
  handleClick,
  reset,
  titleLoader,
}) => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);

  const dataForm = useSelector((state) => state.app[stateFilters]);

  useEffect(() => {
    const indexOfLastOrder = currentPage * perPage;
    const indexOfFirstOrder = indexOfLastOrder - perPage;
    setEntities(entities.slice(indexOfFirstOrder, indexOfLastOrder));
  }, [entities, currentPage]);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const next = (pageNumber) => {
    if (currentPage < entities.length / perPage) setCurrentPage(pageNumber + 1);
    else setCurrentPage(1);
  };

  const prev = (pageNumber) => {
    if (currentPage > 1) setCurrentPage(pageNumber - 1);
    else setCurrentPage(Math.ceil(entities.length / perPage));
  };

  const handleChange = (event) => {
    const { value, name } = event.currentTarget;
    dispatch(
      setFilters(stateFilters, {
        ...dataForm,
        [name]: value,
      })
    );
  };

  const resetFilters = () => {
    dispatch(
      setFilters(
        stateFilters,
        Object.fromEntries(Object.entries(dataForm).map(([key]) => [key, ""]))
      )
    );
    reset();
  };
  if (!storeEntities.length) return <Preloader title={titleLoader} />;
  return (
    <main className={className}>
      <Filters
        handleChange={handleChange}
        handleClick={handleClick}
        resetFilters={resetFilters}
        dataForm={dataForm}
        dropdown={dropdown}
        paginate={paginate}
      />
      <Entity entities={entities}>{children}</Entity>
      <Pagination
        page={currentPage}
        orders={entities}
        perPage={perPage}
        next={next}
        prev={prev}
        paginate={paginate}
      />
    </main>
  );
};

export default EntitiesLayout;
