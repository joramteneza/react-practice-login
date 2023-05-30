import React, { useState } from "react";
import LoginForm from "./pages/LoginPage";
import SignupForm from "./pages/SignUpPage";

const App = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const handleFormToggle = () => {
    setIsLoginForm(!isLoginForm);
  };

  return (
    <div>
      {isLoginForm ? (
        <LoginForm onToggleForm={handleFormToggle} />
      ) : (
        <SignupForm onToggleForm={handleFormToggle} />
      )}
    </div>
  );
};

export default App;
