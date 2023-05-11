import React from 'react'
import DateRange from '../Date Picker/DatePicker'
import { useNavigate } from "react-router-dom";



const AddReservations = () => {



  const navigate = useNavigate();
  const Home = () => {
    navigate("/");
  }

  return (
    <>
      <div className='wrapper-add-reservation background-tint'>
        <div className="w-50 container">

          <form>
            <h1 className='header-reservation my-5'>Reservation</h1>
            <div className='d-flex flex-column justify-content-center align-items-center'>
              <DateRange />

              <select className='mb-4 add-input'>
                <option disabled selected value="">Select City</option>
                <option value="London">London</option>
                <option value="Manchester">Manchester</option>
                <option value="Glasgow">Glasgow</option>
                <option value="Bristol">Bristol</option>
              </select>

              <button type="button" onClick={Home} className="button-reserve">Reserve</button>

            </div>
          </form>
        </div>
      </div>


    </>
  )
}

export default AddReservations