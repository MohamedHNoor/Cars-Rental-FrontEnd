import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SideBar from "../SideBar/Sidebar";
import { createReservation } from "../../redux/slices/carSlice";

function Reservations(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cars } = useSelector((state) => state.cars);
  console.log("Cars fetched: ", cars);
  const [reservationData, setReservationData] = useState({
    city: "london",
    pick_up: "05/13/2023", // Set to current date
    return_date: "05/14/2023", // Set to current date
    car_id: 0, // initially set to 0
    user_id:1 // Set to current user
  });
  // const [reservationData, setReservationData] = useState({
  // });
  // const handleBookNow = () => {
  //   dispatch(addReservation(reservationData));
  //   navigate("/reservations/add");
  // };
  // const handleBookNow = () => {
  //   if (selectedCar) {
  //     const reservationData = {
  //       car_id: selectedCar,

  //     };
  //     dispatch(createReservation(reservationData));
  //     navigate("/reservations/add");
  //   }
  // };
  // const handleBookNow = () => {
  //   // Find the selected car based on its name
  //   const selectedCar = cars.find((car) => car.name === reservationData.car_id);
  //   if (selectedCar) {
  //     // Update the car_id with the actual car_id value
  //     setReservationData({ ...reservationData, car_id: selectedCar.id });
  //     dispatch(createReservation(reservationData));
  //     navigate("/reservations/add");
  //   }
  // };

  // const handleBookNow = () => {
  //   // Find the selected car based on its name
  //   const selectedCar = cars.find((car) => car.name === reservationData.car_id);
  //   if (selectedCar) {
  //     // Update the car_id with the actual car_id value
  //     const carId = selectedCar.id.toString(); // Ensure the car_id is a string
  //     setReservationData({ ...reservationData, car_id: carId });
  //     dispatch(createReservation(reservationData));
  //     navigate("/reservations/add");
  //   }
  // };
  const handleBookNow = () => {
    // Find the selected car based on its name
    const selectedCar = cars.find((car) => car.name === reservationData.car_id);
    if (selectedCar) {
      // Update the car_id with the actual car_id value
      const carId = selectedCar.id.toString(); // Ensure the car_id is a string
      const updatedReservationData = { ...reservationData, car_id: carId };
      dispatch(createReservation(updatedReservationData));
      navigate("/reservations/add");
    }
  };
  return (
    <>
      <div className="sliderwrapper">
        <SideBar />

        <div className="wrapper-reservation background-tint">
          <div className="container w-50">
            <h1 className="header-book">BOOK A CAR RIDE</h1>
            <hr className="horizontal-line" />
            <p className="description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
              vitae expedita, eaque nisi laudantium aliquam sapiente excepturi
              dolorem fugiat ipsum reiciendis ex mollitia reprehenderit ipsa
              fugit tempore iusto blanditiis ratione accusamus esse cupiditate?
              Expedita optio corporis quaerat doloribus facere possimus cum
              veniam nihil officia, impedit quibusdam perferendis laudantium
              sequi odio?
            </p>
            <div className="d-flex gap-2 justify-content-center align-items-baseline ">
              <select
                className="select-car"
                value={reservationData.car_id}
                onChange={(e) =>
                  setReservationData({
                    ...reservationData,
                    car_id: e.target.value,
                  })
                }
              >
                <option disabled selected value="">
                  Select car
                </option>
                {cars.map((car) => (
                  <option key={car.id} value={car.name}>
                    {car.name}
                  </option>
                ))}
              </select>

              <button type="button" onClick={handleBookNow} className="button">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reservations;
