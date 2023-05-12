import React from 'react';
import SideBar from "../components/SideBar/Sidebar";
import LoginForm from "../components/LoginForm/LoginForm";
function LoginPage(props) {
  return (
    <div>
      <SideBar />
      <LoginForm />
    </div>
  );
}

export default LoginPage;