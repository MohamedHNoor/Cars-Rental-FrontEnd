import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SideBar from "../SideBar/Sidebar";
import { fetchReservations } from "../../redux/slices/carSlice";

const MyReservations = () => {
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.cars.reservations);
  console.log("res: ", reservations);
  useEffect(() => {
    dispatch(fetchReservations());
  }, [dispatch]);
  return (
    <>
      <div className="sliderwrapper">
        <SideBar />
        <div className="wrapper-my-reservation background-tint">
          <h2>MyReservations</h2>
          {reservations.map((reservation) => (
            <div key={reservation.id}>
              <h2>{reservation.car}</h2>
              <p>City: {reservation.city}</p>
              <p>Pick-up Date: {reservation.pick_up}</p>
              <p>Return Date: {reservation.return_date}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MyReservations;
