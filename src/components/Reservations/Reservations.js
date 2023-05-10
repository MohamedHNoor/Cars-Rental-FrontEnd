import React, { useState, useMemo } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'
import { useNavigate } from "react-router-dom";

export default function Reservations() {


  const navigate = useNavigate();
  const Home = () => {
    navigate("/reservations/add");
  }





  return (
    <>
      <div className='wrapper background-tint'>
        <div className="container w-50">
          <h1 className='header-book'>BOOK A CAR RIDE</h1>
          <hr className="horizontal-line" />
          <p className='description'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat vitae expedita, eaque nisi laudantium aliquam sapiente excepturi dolorem fugiat ipsum reiciendis ex mollitia reprehenderit ipsa fugit tempore iusto blanditiis ratione accusamus esse cupiditate? Expedita optio corporis quaerat doloribus facere possimus cum veniam nihil officia, impedit quibusdam perferendis laudantium sequi odio?</p>
          <div className="d-flex gap-2 justify-content-center align-items-baseline ">
            <select className="select-car" >
              <option disabled selected value="">Select car</option>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>

            <button type="button" onClick={Home} className="button">Book Now</button>
          </div>
        </div>
      </div>
    </>
  )
}
