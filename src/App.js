import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import AddRestaurant from "./Pages/Add Resturent/AddRestaurant";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/partner-with-us" element={<AddRestaurant />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="signup" element={<SignUp />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
