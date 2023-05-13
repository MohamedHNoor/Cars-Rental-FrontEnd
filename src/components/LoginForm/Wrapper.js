import styled from 'styled-components';

const Wrapper = styled.section`
  display: grid;
  align-items: center;

  .logo {
    display: block;
    margin: 0 auto;
    margin-bottom: 1.38rem;
    width: 100%;
  }

  h3 {
    text-align: center;
  }

  p {
    margin: 0;
    margin-top: 1rem;
    text-align: center;
  }

  .member-btn {
    background: transparent;
    border: transparent;
    color: blue;
    cursor: pointer;
    letter-spacing: 1px;
  }

  .form {
    width: 90vw;
    max-width: 600px;
    border-top: 5px solid #96bf01;
    background: #fff;
    border-radius: 0.25rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    padding: 2rem 2.5rem;
    margin: 3rem auto;
    transition: 0.3s ease-in-out all;
  }

  .form:hover {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }

  .form-label {
    display: block;
    font-size: 0.875rem;
    margin: 0.5rem 0;
    text-transform: capitalize;
    letter-spacing: 1px;
  }

  .form-input {
    width: 100%;
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    background: #f0f4f8;
    border: 1px solid #bcccdc;
  }

  .form-input,
  .btn-block {
    height: 35px;
  }

  .form-row {
    margin-bottom: 1rem;
  }

  .form-alert {
    color: #842029;
    letter-spacing: 1px;
    text-transform: capitalize;
  }

  .btn {
    cursor: pointer;
    color: #fff;
    background: #96bf01;
    border: transparent;
    border-radius: 0.25rem;
    letter-spacing: 1px;
    padding: 0.375rem 0.75rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    text-transform: capitalize;
    display: inline-block;
    font-weight: bold;
    margin-top: 1rem;
  }

  .btn-block {
    width: 100%;
  }
`;

export default Wrapper;