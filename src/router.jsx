import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import MainPg from "./Pages/MainPg";

const Rotas = () => {
  return (
    <Router basename="biovida.vercel.app">
      <Routes>
        <Route exact path="/biovida/" element={<MainPg />} />
      </Routes>
    </Router>
  );
};

export default Rotas;
