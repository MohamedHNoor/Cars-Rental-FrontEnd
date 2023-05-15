import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNewCar } from "../../redux/slices/carSlice";
import { fetchCars } from "../../redux/slices/carSlice";

function BookingForm(props) {
  const dispatch = useDispatch();
  const { cars } = useSelector((state) => state.cars);
  const [carData, setCarData] = useState({
    name: "",
    description: "",
    photo: "",
    price: "",
    model: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const handleCreateNewCar = async (e) => {
    e.preventDefault();
    await dispatch(createNewCar(carData));
    dispatch(fetchCars()); // Fetch cars after new car creation
    setCarData({
      name: "",
      description: "",
      photo: "",
      price: "",
      model: "",
    });
    setSuccessMessage("Car created successfully");
    // Clear success message after a delay (e.g., 3 seconds)
    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  };
  const handleInputChange = (e) => {
    setCarData({
      ...carData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="w-50 container">
      <form onSubmit={handleCreateNewCar}>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <label className="mb-4 h5 d-flex flex-column">
            Name:
            <input
              className="mt-2 add-input"
              type="text"
              name="name"
              value={carData.name}
              onChange={handleInputChange}
            />
          </label>
          <label className="mb-4  h5 d-flex flex-column">
            Description:
            <input
              className="mt-2 add-input"
              type="text"
              name="description"
              value={carData.description}
              onChange={handleInputChange}
            />
          </label>
          <label className="mb-4 h5 d-flex flex-column">
            Photo:
            <input
              className="mt-2 add-input"
              type="text"
              name="photo"
              value={carData.photo}
              onChange={handleInputChange}
            />
          </label>
          <label className="mb-2 h5 d-flex flex-column">
            Price:
            <input
              className="mt-2 add-input"
              type="text"
              name="price"
              value={carData.price}
              onChange={handleInputChange}
            />
          </label>
          <label className="mb-2 h5 d-flex flex-column">
            Model:
            <input
              className="mt-2 add-input"
              type="text"
              name="model"
              value={carData.model}
              onChange={handleInputChange}
            />
          </label>
          <input className="mt-4 button-b-form" type="submit" value="Submit" />
        </div>
      </form>
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
}

export default BookingForm;
