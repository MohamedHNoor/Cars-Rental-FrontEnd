import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import BigSidebar from '../BigSidebar/BigSidebar';
import SmallSidebar from '../SmallSidebar/SmallSidebar';
import { createReservation } from '../../redux/slices/carSlice';
import DateRange from '../Date Picker/DatePicker';
import 'react-datepicker/dist/react-datepicker.css';

const Reservations = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cars } = useSelector((state) => state.cars);
  const [selectedStartDate, setSelectedStartDate] = useState(new Date());
  const [selectedEndDate, setSelectedEndDate] = useState(new Date());
  const [selectedCity, setSelectedCity] = useState('');
  const [fieldError, setFieldError] = useState(false);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialCarId = searchParams.get('carId');
  const pickUpDate = new Date(2023, 5, 13); // Month is 0-based (0: January, 1: February, etc.)
  const returnDate = new Date(2023, 5, 29); // Month is 0-based (0: January, 1: February, etc.)
  const [reservationData, setReservationData] = useState({
    city: 'london',
    pick_up: pickUpDate.toISOString(), // Convert date to string format accepted by the API
    return_date: returnDate.toISOString(), // Convert date to string format accepted by the API
    car_id: initialCarId ? parseInt(initialCarId) : null,
  });

  const handleBookNow = () => {
    // Check if any required field is empty
    if (
      !reservationData.car_id ||
      !selectedStartDate ||
      !selectedEndDate ||
      !selectedCity
    ) {
      setFieldError(true);
      setTimeout(() => {
        setFieldError(false);
      }, 3000);
      return;
    }
    // Find the selected car based on its id
    const selectedCar = cars.find(
      (car) => car.id === parseInt(reservationData.car_id),
    );

    if (selectedCar) {
      // Update the car_id with the actual car_id value
      const carId = selectedCar.id;
      const updatedReservationData = {
        ...reservationData,
        car_id: carId,
        pick_up: selectedStartDate.toISOString(),
        return_date: selectedEndDate.toISOString(),
        city: selectedCity,
      };
      dispatch(createReservation(updatedReservationData));
      navigate('/myreservations');
    }
  };

  return (
    <>
      <div className="sliderwrapper">
        <BigSidebar />
        <SmallSidebar />

        <div className="wrapper-reservation background-tint">
          <div className="container w-50">
            {fieldError && (
              <p className="error-message alert alert-danger mt-2">
                Please fill in the following required fields:
                {!reservationData.car_id && (
                  <>
                    <span className="me-2 text-danger">Car</span>
                  </>
                )}
                {!selectedStartDate && (
                  <>
                    <span className="me-2 text-danger">Start Date</span>
                  </>
                )}
                {!selectedEndDate && (
                  <>
                    <span className="me-2 text-danger">End Date</span>
                  </>
                )}
                {!selectedCity && (
                  <>
                    <span className="me-2 text-danger">City</span>
                  </>
                )}
              </p>
            )}

            <h1 className="header-book">BOOK A CAR RIDE</h1>
            <hr className="horizontal-line" />
            <div className="d-flex flex-column gap-2 justify-content-center align-items-baseline">
              <DateRange
                selectedStartDate={selectedStartDate}
                selectedEndDate={selectedEndDate}
                onStartDateChange={setSelectedStartDate}
                onEndDateChange={setSelectedEndDate}
              />
              <div className="select-container">
                <select
                  className="select-car mb-4"
                  value={reservationData.car_id || initialCarId}
                  onChange={(e) =>
                    setReservationData({
                      ...reservationData,
                      car_id: e.target.value,
                    })
                  }
                >
                  <option value="" selected disabled>
                    Select Car
                  </option>
                  {cars.map((car) => (
                    <option key={car.id} value={car.id}>
                      {car.name}
                    </option>
                  ))}
                </select>

                <select
                  className="mb-4 select-car"
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                >
                  <option disabled selected value="">
                    Select City
                  </option>
                  <option value="London">London</option>
                  <option value="Manchester">Manchester</option>
                  <option value="Glasgow">Glasgow</option>
                  <option value="Bristol">Bristol</option>
                </select>
              </div>
            </div>
            <button
              type="button"
              onClick={handleBookNow}
              className="button-book-now mt-4"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reservations;
