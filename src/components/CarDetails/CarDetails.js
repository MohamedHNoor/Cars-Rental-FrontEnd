import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { carOptions } from '../../data';
import { Link } from "react-router-dom";
import {IoIosArrowForward} from 'react-icons/io'
import {FiSettings} from 'react-icons/fi'
import {BsArrowRightCircle} from 'react-icons/bs'
import {BiLeftArrow} from 'react-icons/bi'
import './CarDetails.css'
function CarDetails() {
  const { id } = useParams();
  const [car, setCar] = useState(null);

  useEffect(() => {
    const selectedCar = carOptions.find(car => car.id === parseInt(id));
    setCar(selectedCar);
  }, [id]);

  if (!car) {
    return <div>Loading...</div>;
  }

  return (
    <div className="car-details-container d-flex">
      <div className="d-flex flex-column">
      <img src={car.image} alt={car.title} />
      <button className="back-btn" ><BiLeftArrow  fill="white"/></button>
      </div>
      
      <div className="d-flex flex-column justify-content-start align-items-center gap-4">
      <h2>{car.title}</h2>
      <ul>
        <li className="d-flex">
          <div>Finance fee</div>
          <div>149$</div>
        </li>
        <li className="d-flex">
          <div>Option to purchase fee</div>
          <div>249$</div>
        </li>
        <li className="d-flex">
          <div>Total amount payable</div>
          <div>249$</div>
        </li>
        <li className="d-flex">
          <div>Duration</div>
          <div>48 months</div>
        </li>
      </ul>
      <div>
        <span>5.9% APR </span>
Representative
      </div>
      <Link to="/">DISCOVER MORE MODELS 
      <IoIosArrowForward fill="black" /></Link>
      <button><FiSettings /> Reserve  <BsArrowRightCircle /></button>

      </div>

    </div>
  );
}

export default CarDetails;
