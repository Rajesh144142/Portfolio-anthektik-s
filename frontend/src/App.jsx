import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import FullWebsite from "./FULLWebsite";
import Login from "./components/Login/Login";
import Admin from "./components/AdminPart/Admin";
import { getCookie } from "./components/utils/auth";

const App = () => {
  // const isLoggedIn = async () => {
  //   const result = await 

  //   return result;
  // };

  console.log(getCookie());

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/anthektikós" />} />
        <Route path="/anthektikós" element={<FullWebsite />} />
        <Route path="/Login" element={<Login />} />
        <Route
          path="/Admin"
          element={getCookie()?<Admin/> :<FullWebsite />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
