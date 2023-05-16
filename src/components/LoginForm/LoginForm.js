import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, registerUser } from '../../redux/slices/userSlice';
import { useNavigate } from 'react-router-dom';
import Wrapper from './Wrapper';
import logo from '../../assets/logo.png';
import { toast } from 'react-toastify';
import './login.css';

const initialState = {
  username: '',
  password: '',
  isMember: true,
};

const LoginForm = (props) => {
  const [values, setValues] = useState(initialState);
  const dispatch = useDispatch();
  const { isLoading, user } = useSelector((store) => store.user);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { username, password } = values;
    if (!username || !password) {
      toast.error('Please fill out all Fields');
      return;
    } else if (values.isMember) {
      dispatch(loginUser({ username: username, password: password }));
    } else {
      dispatch(registerUser({ username: username, password: password }));
    }
  };

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/');
      }, 1000);
    }
  }, [user]);
  return (
    <Wrapper className="full-page">
      <form onSubmit={onSubmit} className="form">
        <img src={logo} className="logo" alt="logo" />
        <h3>{values.isMember ? 'Login' : 'Register'}</h3>
        <div className="form-row">
          <label htmlFor="username" className="form-label">
            Username
          </label>

          <input
            type="text"
            value={values.username}
            name="username"
            onChange={handleChange}
            className="form-input"
          />
          <label htmlFor="password" className="form-label">
            password
          </label>

          <input
            type="password"
            value={values.password}
            name="password"
            onChange={handleChange}
            className="form-input"
          />
        </div>

        <button type="submit" className="btn btn-block" disabled={isLoading}>
          {isLoading ? 'Loading' : 'Submit'}
        </button>

        <p>
          {values.isMember ? 'Not a member yet?' : 'Already a member?'}

          <button type="button" onClick={toggleMember} className="member-btn">
            {values.isMember ? 'Register' : 'Login'}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default LoginForm;
