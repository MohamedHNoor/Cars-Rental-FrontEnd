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
        <div className="wrapper-my-reservation background-tint overflow-auto">
          <h2 className=" text-center my-3 h1  bg-light bg-opacity-25 p-2">MyReservations</h2>
          <div className="d-flex flex-wrap gap-5 my-4 ms-4 overflow-auto">
            {reservations.map((reservation) => (
              <div
                className="d-flex flex-column flex-wrap border text-white rounded border-white p-3 bg-dark bg-opacity-25"
                key={reservation.id}
              >
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
      </div>
    </>
  );
};

export default MyReservations;
