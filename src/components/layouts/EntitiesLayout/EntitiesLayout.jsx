import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Filters from "./Filters/Filters";
import Pagination from "./Pagination/Pagination";
import Preloader from "../../common/Preloader/Preloader";
import { setCurrentPage, setFilters } from "../../../reducers/appReducer";
import Entity from "./Entity/Entity";
import { getPaginateNumber } from "../../../actions/pagination";

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
  linkRefactor,
}) => {
  const dispatch = useDispatch();

  const [text, setText] = useState([]);

  const currentPage = useSelector(
    (state) => state.app.currentPage[stateFilters]
  );
  const dataForm = useSelector((state) => state.app[stateFilters]);

  useEffect(() => {
    const indexOfLastOrder = currentPage * perPage;
    const indexOfFirstOrder = indexOfLastOrder - perPage;
    setEntities(entities.slice(indexOfFirstOrder, indexOfLastOrder));
  }, [entities, currentPage]);

  useEffect(() => {
    setText(
      getPaginateNumber(currentPage, Math.ceil(entities.length / perPage))
    );
  }, [entities.length, currentPage]);

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
        linkRefactor={linkRefactor}
        handleDelete={handleDelete}
        viewEntities={viewEntities}
        entities={entities}
      >
        {children}
      </Entity>
      {!!text.length && (
        <Pagination
          page={currentPage}
          next={next}
          prev={prev}
          text={text}
          paginate={paginate}
        />
      )}
    </main>
  );
};

export default EntitiesLayout;
