import React from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/not-found.png';
import styled from 'styled-components';

const Error = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={img} alt="not found" />
        <h3>:! Page Not Found</h3>
        <p>
          We apologize, but it seems the page you were looking for cannot be
          found. Please click on the Back Home button to return to our homepage.
          Thank you for your understanding.
        </p>
        <Link to="/">back home</Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  text-align: center;
  img {
    width: 90vw;
    max-width: 600px;
    display: block;
    margin-bottom: 2rem;
    margin: 0 auto;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  h3 {
    margin-bottom: 0.5rem;
  }
  p {
    margin-top: 0;
    margin-bottom: 0.5rem;
    color: #555;
  }
  a {
    color: #96bf01;
    text-decoration: underline;
    text-transform: capitalize;
  }
`;

export default Error;