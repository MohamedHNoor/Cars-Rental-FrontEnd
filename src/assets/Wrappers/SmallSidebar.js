import styled from 'styled-components';

const Wrapper = styled.aside`
  @media (min-width: 992px) {
    display: none;
  }
  .sidebar-container {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;
    opacity: 0;
    /* transition: var(--transition); */
  }
  .show-sidebar {
    z-index: 99;
    opacity: 1;
  }
  .content {
    background: #fff;
    width: 90vw;
    height: 95vh;
    border-radius: 0.25rem;
    /* padding: 1rem; */
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .close-btn,
  .toggle-btn {
    position: absolute;
    top: 5px;
    left: 5px;
    background: transparent;
    border-color: transparent;
    font-size: 1.75rem;
    color: red;
    cursor: pointer;
  }

  .toggle-btn {
    color: #000;
  }

  .logo {
    margin-top: 2rem;
  }
  .nav-links,
  .logout-btn {
    /* padding-top: 2rem; */
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .nav-link {
    text-decoration: none;
    color: #121212;
    font-size: 2rem;
    padding: 1rem;
    text-transform: capitalize;
  }

  .nav-link:hover,
  .active {
    color: #96bf01;
  }

  .logout-btn:active {
    color: blue;
  }

  .footer {
    position: absolute;
    bottom: 0;
    margin: 0 auto;
    cursor: pointer;
    padding-left: 1rem;
    font-size: 1.75rem;
  }
`;
export default Wrapper;
