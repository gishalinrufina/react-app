import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UsersettingCreate from "./pages/UsersettingCreate";
import UsersettingEdit from "./pages/UsersettingEdit";
import UsersettingView from "./pages/UsersettingView";
import UsersettingRetrive from "./pages/UsersettingRetrive";
import Home from "./pages/home";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          exact
          path="/usersettingretrive"
          element={<UsersettingRetrive />}
        />
        <Route path="/usersettingcreate" element={<UsersettingCreate />} />
        <Route path="/usersettingedit/:id" element={<UsersettingEdit />} />
        <Route path="/usersettingview/:id" element={<UsersettingView />} />
      </Routes>
    </Router>
  );
}

export default App;
