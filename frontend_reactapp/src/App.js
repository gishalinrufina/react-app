import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UsersettingCreate from "./pages/UsersettingCreate";
import UsersettingEdit from "./pages/UsersettingEdit";
import UsersettingView from "./pages/UsersettingView";
import UsersettingRetrive from "./pages/UsersettingRetrive";
import MenusettingRetrive from "./pages/MenusettingRetrive";
import MenusettingCreate from "./pages/MenusettingCreate";
import MenusettingEdit from "./pages/MenusettingEdit";
import MenusettingView from "./pages/MenusettingView";
import Prs_coresprofobjRetrive from "./pages/Prs_coresprofobjRetrive";
import Prs_coresprofobjCreate from "./pages/Prs_coresprofobjCreate";
import Prs_coresprofobjEdit from "./pages/Prs_coresprofobjEdit";
import Prs_coresprofobjView from "./pages/Prs_coresprofobjView";
import Prs_educationRetrive from "./pages/Prs_educationRetrive";
import Prs_educationCreate from "./pages/Prs_educationCreate";
import Prs_educationEdit from "./pages/Prs_educationEdit";
import Prs_educationView from "./pages/Prs_educationView";
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
        <Route
          exact
          path="/menusettingretrive"
          element={<MenusettingRetrive />}
        />
        <Route path="/menusettingcreate" element={<MenusettingCreate />} />
        <Route path="/menusettingedit/:id" element={<MenusettingEdit />} />
        <Route path="/menusettingview/:id" element={<MenusettingView />} />
        <Route
          exact
          path="/prs_coresprofobjretrive"
          element={<Prs_coresprofobjRetrive />}
        />
        <Route
          path="/prs_coresprofobjcreate"
          element={<Prs_coresprofobjCreate />}
        />
        <Route
          path="/prs_coresprofobjedit/:id"
          element={<Prs_coresprofobjEdit />}
        />
        <Route
          path="/prs_coresprofobjview/:id"
          element={<Prs_coresprofobjView />}
        />
        <Route
          exact
          path="/prs_educationretrive"
          element={<Prs_educationRetrive />}
        />
        <Route path="/prs_educationcreate" element={<Prs_educationCreate />} />
        <Route path="/prs_educationedit" element={<Prs_educationEdit />} />
        <Route path="/prs_educationview" element={<Prs_educationView />} />
      </Routes>
    </Router>
  );
}

export default App;
