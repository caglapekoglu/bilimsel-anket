import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Surveys from "./pages/Surveys";
import Statistics from "./pages/Statistics";
import Balance from "./pages/Balance";
import SurveysFree from "./pages/SurveysFree";
import Pay from "./pages/Pay";

function App() {
  return (
    <Router>
    <div className="flex flex-row bg-bgColor mr-5">
      <Navbar/>
      <Routes>
     
        <Route path="/" element={<Home />} />
        <Route path="/anketler" element={<Surveys />} />
        <Route path="/ucretsiz-anketler" element={<SurveysFree />} />
        <Route path="/istatistikler" element={<Statistics />} />
        <Route path="/bakiyeyukle" element={<Balance />} />
        <Route path="/odeme" element={<Pay />} />




        
       
      </Routes>
    </div>
  </Router>
  );
}

export default App;
