import React from 'react';
import SideBar from "../components/SideBar/Sidebar";
import SignupForm from "../components/SignupForm/SignupForm";
function SignupPage(props) {
  return (
    <div>
        <SideBar />
        <SignupForm />
    </div>
  );
}

export default SignupPage; 