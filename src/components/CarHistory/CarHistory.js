import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './CarHistory.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCar } from '../../redux/slices/carSlice';
import { removeCar } from '../../redux/slices/carSlice';

const CarHistory = (props) => {
  const { cars } = useSelector((state) => state.cars);
  const dispatch = useDispatch();

  const handleRemoveCar = (carId) => {
    dispatch(removeCar(carId));
    dispatch(deleteCar(carId));
  };

  return (
    <div className="d-flex flex-wrap justify-content-center p-3 gap-4 mt-5 w-100">
      {cars &&
        cars?.map((car) => (
          <Card key={car.id} className="history-card">
            <Card.Img variant="top" src={car.photo} />
            <Card.Body className="card-body">
              <Card.Title>{car.name}</Card.Title>
              <Button variant="danger" onClick={() => handleRemoveCar(car.id)}>
                Delete
              </Button>
            </Card.Body>
          </Card>
        ))}
    </div>
  );
};

export default CarHistory;
