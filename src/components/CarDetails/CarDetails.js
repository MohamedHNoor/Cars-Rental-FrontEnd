import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { carOptions } from '../../data';
import { Link } from "react-router-dom";
import {IoIosArrowForward} from 'react-icons/io'
import {FiSettings} from 'react-icons/fi'
import {BsArrowRightCircle} from 'react-icons/bs'
import {BiLeftArrow} from 'react-icons/bi'
import './CarDetails.css';
import { useDispatch,useSelector } from "react-redux";
import { fetchCar } from "../../redux/slices/carSlice";
function CarDetails() {
  const dispatch = useDispatch()
  const {singleCar} = useSelector(state => state.cars)
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchCar(id))
  }, [id]);

 

  return (
    <div className="car-details-container d-flex">
      <div className="d-flex flex-column">
      <img src={singleCar.photo} alt={singleCar.name} style={{width: '100%'}} />
      <button className="back-btn" ><BiLeftArrow  fill="white"/></button>
      </div>
      
      <div className="d-flex flex-column justify-content-start align-items-center gap-4">
      <h2>{singleCar.name}</h2>
      <ul>
        <li className="d-flex">
          <div>Finance fee</div>
          <div>{singleCar.price} $</div>
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
