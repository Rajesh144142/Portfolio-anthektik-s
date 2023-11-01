import { Routes, Route, Navigate } from "react-router-dom";
import FullWebsite from "./FULLWebsite";
import Login from "./components/Login/Login";
import Admin from "./components/AdminPart/Admin";
import { useSelector } from "react-redux";
const App = () => {
  const { user, loading, error } = useSelector((state) => state.user);
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/anthektikós" />} />
      <Route path="/anthektikós" element={<FullWebsite />} />
      <Route path="/Login" element={<Login />} />
      <Route
        path="/Admin"
        element={user ? <Admin /> : <Navigate to="/Login" />}
      />
    </Routes>
  );
};

export default App;
