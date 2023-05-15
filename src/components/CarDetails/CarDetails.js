import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { FiSettings } from "react-icons/fi";
import { BsArrowRightCircle } from "react-icons/bs";
import { BiLeftArrow } from "react-icons/bi";
import "./CarDetails.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCar } from "../../redux/slices/carSlice";
import { useNavigate } from "react-router-dom";
function CarDetails(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { singleCar } = useSelector((state) => state.cars);
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchCar(id));
  }, [id]);

  const handleReserve = () => {
    navigate(`/bookride?carId=${singleCar.id}`);
  };

  return (
    <div className="car-details-container d-flex w-100">
      <div className="d-flex flex-column w-100 justify-content-start align-items-center">
        <div className="img-container">
          <img
            src={singleCar.photo}
            alt={singleCar.name}
            style={{ width: "100%" }}
          />
        </div>
      </div>

      <div className="d-flex flex-column justify-content-start align-items-center gap-4">
        <h2>
          {" "}
          <Link to="/">
            <button className="back-btn">
              <BiLeftArrow fill="white" />
            </button>
          </Link>
          {singleCar.name}
        </h2>
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
        <Link to="/">
          DISCOVER MORE MODELS
          <IoIosArrowForward fill="black" />
        </Link>
        <button type="button" onClick={handleReserve}>
          <FiSettings /> Reserve <BsArrowRightCircle />
        </button>
      </div>
    </div>
  );
}

export default CarDetails;
