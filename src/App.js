import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Surveys from "./pages/Surveys";
import Statistics from "./pages/Statistics";
import Balance from "./pages/Balance";
import SurveysFree from "./pages/SurveysFree";
import Pay from "./pages/Pay";
import Profile from "./pages/Profile";
import Test from "./pages/Test";
import Selectdropdown from "./pages/AddSurvey";
import Publish  from "./pages/Publish";
import Auth from "./pages/Auth/Auth";
import SignUp from "./pages/Auth/SignUp";
import SignUp2 from "./pages/Auth/SignUp2";
import SignUp3 from "./pages/Auth/SignUp3";
import SignUp4 from "./pages/Auth/SignUp4";
import SignUp5 from "./pages/Auth/SignUp5";
import Offer from "./pages/Offer/Offer";
import Offer2 from "./pages/Offer/Offer2";
import Offer3 from "./pages/Offer/Offer3";
import Offer4 from "./pages/Offer/Offer4";
import Offer5 from "./pages/Offer/Offer5";
import Offer6 from "./pages/Offer/Offer6";
import Forms from "./pages/Forms";
import Excel from "./pages/Excel";
function App() {
  return (
    <Router>
    <div className="flex flex-row bg-bgColor mr-5">
      <Navbar/>
      <Routes>
     
        <Route path="/anasayfa" element={<Home />} />
        <Route path="/anketler" element={<Surveys />} />
        <Route path="/ucretsiz-anketler" element={<SurveysFree />} />
        <Route path="/istatistikler" element={<Statistics />} />
        <Route path="/bakiyeyukle" element={<Balance />} />
        <Route path="/odeme" element={<Pay />} />
        <Route path="/profil" element={<Profile />} />
        <Route path="/test" element={<Test/>} />
        <Route path="/anketekle" element={<Selectdropdown/>} />
        <Route path="/yayinla" element={<Publish/>} />
        <Route path="/" element={<Auth/>} />
        <Route path="/kayitol" element={<SignUp/>} />
        <Route path="/kayitol2" element={<SignUp2/>} />
        <Route path="/kayitol3" element={<SignUp3/>} />
        <Route path="/kayitol4" element={<SignUp4/>} />
        <Route path="/kayitol5" element={<SignUp5/>} />
        <Route path="/teklifal" element={<Offer/>} />
        <Route path="/teklifal2" element={<Offer2/>} />
        <Route path="/teklifal3" element={<Offer3/>} />
        <Route path="/teklifal4" element={<Offer4/>} />
        <Route path="/teklifal5" element={<Offer5/>} />
        <Route path="/teklifal6" element={<Offer6/>} />
        <Route path="/form" element={<Forms/>} />
        <Route path="/yanitlar" element={<Excel/>} />
        
       
      </Routes>
    </div>
  </Router>
  );
}

export default App;
