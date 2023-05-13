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
    <div>
      <form onSubmit={handleCreateNewCar}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={carData.name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={carData.description}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Photo:
          <input
            type="text"
            name="photo"
            value={carData.photo}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Price:
          <input
            type="text"
            name="price"
            value={carData.price}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Model:
          <input
            type="text"
            name="model"
            value={carData.model}
            onChange={handleInputChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
}

export default BookingForm;
