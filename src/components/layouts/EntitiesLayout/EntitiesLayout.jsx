import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Filters from "./Filters/Filters";
import Pagination from "./Pagination/Pagination";
import Preloader from "../../common/Preloader/Preloader";
import { setCurrentPage, setFilters } from "../../../reducers/appReducer";
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
  viewEntities,
  handleDelete,
}) => {
  const dispatch = useDispatch();

  const currentPage = useSelector(
    (state) => state.app.currentPage[stateFilters]
  );
  const dataForm = useSelector((state) => state.app[stateFilters]);

  useEffect(() => {
    const indexOfLastOrder = currentPage * perPage;
    const indexOfFirstOrder = indexOfLastOrder - perPage;
    setEntities(entities.slice(indexOfFirstOrder, indexOfLastOrder));
  }, [entities, currentPage]);

  const paginate = (pageNumber) => {
    dispatch(setCurrentPage(stateFilters, pageNumber));
  };

  const next = (pageNumber) => {
    if (currentPage < entities.length / perPage) paginate(pageNumber + 1);
    else paginate(1);
  };

  const prev = (pageNumber) => {
    if (currentPage > 1) paginate(pageNumber - 1);
    else paginate(Math.ceil(entities.length / perPage));
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
      <Entity
        handleDelete={handleDelete}
        viewEntities={viewEntities}
        entities={entities}
      >
        {children}
      </Entity>
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
