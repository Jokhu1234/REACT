import "./styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Contact from "./components/Contact";
import TermsofService from "./components/TermsofService";
import { Route, Routes } from "react-router-dom";
import Privacy from "./components/Privacy";
import JobSearch from "./components/JobSearch";
import JobListings from "./components/JobListings";
import AddJob from "./components/AddJob";




function App() {
  const API_URL = "http://localhost:3500/jobs";

  return (
    <div className="App">
      <Header />
     
      
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/JobListings" element={<JobListings />}></Route>
        <Route path="/JobSearch" element={<JobSearch />}></Route>
        <Route path="/Privacy" element={<Privacy />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/Addjob" element={<AddJob/>}></Route>
        <Route path="/TermsofService" element={<TermsofService />}></Route>
        </Routes>
        
      <Footer />
    </div>
  );
}

export default App;
