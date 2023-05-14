import styled from 'styled-components';

const Wrapper = styled.aside`
  display: none;
  @media (min-width: 992px) {
    display: block;
    box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.1);
    .sidebar-container {
      background: #fff;
      min-height: 100vh;
      height: 100%;
      width: 300px;
      transition: 0.3s all ease-in-out;
    }
    .content {
      position: sticky;
      top: 0;
    }
    .show-sidebar {
      margin-left: 0;
    }
    header {
      height: 6rem;
      display: flex;
      align-items: center;
      /* padding-left: 2.5rem; */
    }
    .nav-links {
      padding-top: 2rem;
      display: flex;
      flex-direction: column;
    }
    .nav-link {
      display: flex;
      align-items: center;
      color: #121212;
      padding: 1rem;
      font-size: 1.75rem;
      text-decoration: none;
      text-transform: capitalize;
      transition: 0.3s all ease-in-out;
    }
    .nav-link:hover,
    .logout-btn:hover {
      color: blue;
    }

    .active {
      background-color: green;
      border-radius: 0.5rem;
      color: #fff;
    }

    .logout-btn {
      background: transparent;
      border-color: transparent;
      font-size: 1.75rem;
      color: #121212;
      cursor: pointer;
      display: flex;
      align-items: center;
      padding: 1rem;
    }
  }
`;
export default Wrapper;