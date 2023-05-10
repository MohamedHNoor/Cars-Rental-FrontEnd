import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './CarHistory.css'
import { reservations } from "../../data";
function CarHistory(props) {
  return (
    <div className="cards-grid">
      {reservations.map( reservation => ( <Card key={reservation.id} 
      className="history-card">
      <Card.Img variant="top" src={reservation.image} />
      <Card.Body>
        <Card.Title>{reservation.title}</Card.Title>
        <Card.Text>
          {reservation.description}
        </Card.Text>
        <Button variant="primary">Delete</Button>
      </Card.Body>
    </Card>))}
    </div>
  );
}

export default CarHistory;