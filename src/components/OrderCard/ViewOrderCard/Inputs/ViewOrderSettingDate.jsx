import React, { useEffect } from "react";
import InputDate from "../../../common/Input/InputDate/InputDate";

const ViewOrderSettingDate = ({ dataForm }) => {
  const { dateFrom, dateTo } = dataForm;

  function handleDateFrom(date) {
    dataForm.dateFrom.setChange(date.getTime());
  }

  useEffect(() => {
    if (dateFrom.value) {
      const nextDate = new Date(dateFrom.value);
      nextDate.setMinutes(nextDate.getMinutes() + 30);
      if (dateTo.value <= dateFrom.value) {
        dataForm.dateTo.setChange(nextDate.getTime());
      }
    }
  }, [dateFrom.value]);

  function handleDateTo(date) {
    dataForm.dateTo.setChange(date.getTime());
  }

  const handleReset = (obj) => {
    obj.setChange(0);
  };

  const filterPassedTimeTo = (time) => {
    const selectedDate = new Date(time);
    return selectedDate.getTime() > new Date(dateFrom.value).getTime();
  };

  return (
    <div className="date-range">
      <div>
        <section className="city-content">
          <h6 className="necess">С</h6>
          <InputDate
            onChange={handleDateFrom}
            onClose={() => handleReset(dateFrom)}
            selected={dateFrom.value}
            popperPlacement="bottom-start"
          />
        </section>
        <section className="city-content">
          <h6 className="necess">По</h6>
          <InputDate
            onChange={handleDateTo}
            onClose={() => handleReset(dateTo)}
            minDate={dateFrom.value}
            selected={dateTo.value}
            filterTime={filterPassedTimeTo}
            popperPlacement="bottom-start"
            disabled={!dateFrom.value}
          />
        </section>
      </div>
      <span className="error">
        {!!dateTo.value &&
          !dateTo.inputValid &&
          "Выберите правильную продолжительность аренды"}
      </span>
    </div>
  );
};

export default ViewOrderSettingDate;
