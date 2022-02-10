import "./App.css";
import Home from "./Components/Home";
import Header from ".//Components/Header";
import { Routes, Route } from "react-router-dom";
import Programs from "./Components/Programs";
import programsData from "./Utils/programs";
import Contact from "./Components/Contact";
import Moderate from "./Components/ProgramPages/Moderate";
import BeastMode from "./Components/ProgramPages/BeastMode";
import Beginner from "./Components/ProgramPages/Beginner";
import SignUp from "./Components/SIgnUp/SignUp";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Home />}>
          <Route index element={<Header />} />
          <Route
            path="programs"
            element={<Programs programsData={programsData} />}
          />
          <Route path="beginner" element={<Beginner />} />
          <Route path="moderate" element={<Moderate />} />
          <Route path="beast-mode" element={<BeastMode />} />
          <Route path="contact" element={<Contact />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
