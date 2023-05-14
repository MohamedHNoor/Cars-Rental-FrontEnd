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
  const [endDate, setEndDate] = useState(selectedEndDate);

  // useEffect(() => {
  //   if (!selectedStartDate) {
  //     setEndDate(null);
  //     onEndDateChange(null);
  //   }
  // }, [selectedStartDate, onEndDateChange]);

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
      <label className="mb-2 text-white h5" htmlFor="start-date">
        Start Date:
      </label>
      <DatePicker
        className="mb-4 add-input"
        selected={selectedStartDate}
        onChange={handleStartDateChange}
        selectsStart
        startDate={startDate}
        endDate={selectedEndDate}
        placeholderText="Select start date"
        minDate={new Date()} // this is to disable past dates
      />
      <label className="mb-2 text-white h5" htmlFor="start-date">
        End Date:
      </label>
      <DatePicker
        className="mb-4 add-input"
        selected={selectedEndDate}
        onChange={handleEndDateChange}
        selectsEnd
        startDate={startDate}
        endDate={selectedEndDate}
        minDate={selectedStartDate}
        placeholderText="Select end date"
        // disabled={!selectedStartDate} // Disable the end date if no start date is selected
      />
    </>
  );
};

export default DateRange;
