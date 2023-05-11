import React from 'react';
import {Card , Button} from 'react-bootstrap';
import './CarHistory.css';
import { reservations } from "../../data";
import { useDispatch } from "react-redux";
import { removeCar } from "../../redux/slices/carSlice"; 

function CarHistory(props) {

  const dispatch = useDispatch();

  const handleRemoveCar = (carId) => {
    dispatch(removeCar(carId));
  };

  return (
    <div className="cards-grid">
      {reservations.map(reservation => (
        <Card key={reservation.id} className="history-card">
          <Card.Img variant="top" src={reservation.image} />
          <Card.Body>
            <Card.Title>{reservation.title}</Card.Title>
            <Card.Text>
              <div>20/02/2022</div>
              <div>city</div>
            </Card.Text>
            <Button variant="primary" onClick={() => handleRemoveCar(reservation.id)}>Delete</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default CarHistory;
