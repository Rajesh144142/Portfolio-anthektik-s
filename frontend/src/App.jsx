import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import FullWebsite from "./FULLWebsite";
import Login from "./components/Login/Login";
import Admin from "./components/AdminPart/Admin";
import { isLogin } from "./components/utils/auth";

const App = () => {
  const [login, setLogin] = useState(false);

  useEffect(() => {
    isLogin()
      .then((result) => {
        // Handle the fulfilled result (in this case, `result` is `true` or `false`)
        setLogin(result);
      })
      .catch((error) => {
        // Handle any errors that occurred during the Promise execution
        setLogin(false);
      });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/anthektikós" />} />
        <Route path="/anthektikós" element={<FullWebsite />} />
        <Route path="/Login" element={<Login />} />
        <Route path={login ? "/Admin" : "/anthektikós"} element={<Admin />} />

        <Route
          path="/*"
          element={<h1 className="text-center mt-9 text-5xl">404 Error</h1>}
        />
      </Routes>

    </BrowserRouter>
  );
};

export default App;
