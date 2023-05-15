import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BigSidebar from "../BigSidebar/BigSidebar";
import SmallSidebar from "../SmallSidebar/SmallSidebar";
import { fetchReservations } from "../../redux/slices/carSlice";
import { deleteReservation } from "../../redux/slices/carSlice";

const MyReservations = () => {
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.cars.reservations);
  useEffect(() => {
    dispatch(fetchReservations());
  }, [dispatch]);
  const handleDelete = (id) => {
    dispatch(deleteReservation(id));
  };
  useEffect(() => {
    dispatch(fetchReservations()); // Fetch reservations again when the state changes
  }, [dispatch, reservations]);
  return (
    <>
      <div className="sliderwrapper">
        <BigSidebar />
        <SmallSidebar />
        <div className="wrapper-my-reservation background-tint">
          <h2>MyReservations</h2>
          {reservations.map((reservation) => (
            <div key={reservation.id}>
              <h2>{reservation.car}</h2>
              <p>City: {reservation.city}</p>
              <p>Pick-up Date: {reservation.pick_up}</p>
              <p>Return Date: {reservation.return_date}</p>
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(reservation.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MyReservations;
