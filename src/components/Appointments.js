import React, { useState, useMemo } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'
import { useNavigate } from "react-router-dom";

export default function Appointments() {


  const navigate = useNavigate();
  const Home = () => {
    navigate("/");
  }

  const [value, setValue] = useState('')
  const options = useMemo(() => countryList().getData(), [])

  const changeHandler = value => {
    setValue(value)
  }

  const customStyles = {
    container: (provided) => ({
      ...provided,
      width: '10vw',
    }),
    control: (provided) => ({
      ...provided,
      borderRadius: '50px',
      backgroundColor: '#96cf2c',
      padding: '0.1vw',

    }),
    singleValue: (provided) => ({
      ...provided,
      color: '#fff',
    }),
  };


  return (
    <>
      <div className='wrapper background-tint'>
        <div className="container w-50">
          <h1 className='white-text '>BOOK A CAR RIDE</h1>
          <p className='white-text '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat vitae expedita, eaque nisi laudantium aliquam sapiente excepturi dolorem fugiat ipsum reiciendis ex mollitia reprehenderit ipsa fugit tempore iusto blanditiis ratione accusamus esse cupiditate? Expedita optio corporis quaerat doloribus facere possimus cum veniam nihil officia, impedit quibusdam perferendis laudantium sequi odio?</p>
          <div className="d-flex gap-2 justify-content-center align-items-baseline ">

            <Select styles={customStyles} options={options} value={value} onChange={changeHandler} />
            <button type="button" onClick={Home} className="button">Book Now</button>
          </div>
        </div>
      </div>
    </>
  )
}
