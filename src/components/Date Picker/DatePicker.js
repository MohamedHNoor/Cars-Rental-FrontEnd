import React, { useRef, useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateRange = ({
  selectedStartDate,
  selectedEndDate,
  onStartDateChange,
  onEndDateChange,
}) => {
  const [startDate, setStartDate] = useState(selectedStartDate);
  const [endDate, setEndDate] = useState(null);

  useEffect(() => {
    if (selectedStartDate) {
      const returnDate = new Date(selectedStartDate);
      returnDate.setDate(returnDate.getDate() + 1);
      setEndDate(returnDate);
      onEndDateChange(returnDate);
    }
  }, [selectedStartDate, onEndDateChange]);

  const handleStartDateChange = (date) => {
    setStartDate(date);
    onStartDateChange(date);
    const returnDate = new Date(date);
    returnDate.setDate(returnDate.getDate() + 1);
    setEndDate(returnDate);
    onEndDateChange(returnDate);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
    onEndDateChange(date);
  };

  return (
    <>
      <div className="d-flex flex-md-wrap gap-4">
        <div className="d-flex flex-column">
          <label
            className="mb-2 text-white h5 text-md-center"
            htmlFor="start-date"
          >
            Start Date:
          </label>
          <DatePicker
            className="mb-4 select-car"
            selected={selectedStartDate}
            onChange={handleStartDateChange}
            selectsStart
            startDate={startDate}
            endDate={selectedEndDate}
            placeholderText="Select start date"
            minDate={new Date()} // this is to disable past dates
          />
        </div>

        <div className="d-flex flex-column">
          <label
            className="mb-2 text-white h5 text-md-center"
            htmlFor="start-date"
          >
            End Date:
          </label>
          <DatePicker
            className="mb-4 select-car"
            selected={selectedEndDate}
            onChange={handleEndDateChange}
            selectsEnd
            startDate={startDate}
            endDate={selectedEndDate}
            minDate={selectedStartDate}
            placeholderText="Select end date"
            // disabled={!selectedStartDate} // Disable the end date if no start date is selected
          />
        </div>
      </div>
    </>
  );
};

export default DateRange;
