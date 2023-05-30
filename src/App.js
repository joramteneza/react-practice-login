import { NavLink, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <div className="flex justify-center items-center h-screen uppercase">
      <div className="bg-cyan-500 rounded-md pb-14 px-10 pt-2 text-zinc-50">
        <div className="flex">
          <NavLink to={"/"}>Sign In</NavLink>
          <NavLink to={"/signUp"}>Sign Up</NavLink>
        </div>
        <Routes>
          <Route path="/signUp" element={<SignUpPage />} />
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
