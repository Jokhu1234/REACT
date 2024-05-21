import "./styles.css";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import Contact from "./Contact";
import TermsofService from "./TermsofService";
import { Route, Routes } from "react-router-dom";
import Privacy from "./Privacy";
import JobSearch from "./JobSearch";
import JobListings from "./JobListings";



function App() {
  const API_URL = "http://localhost:3500/jobs";

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="jobListings" element={<JobListings />}></Route>
        <Route path="jobSearch" element={<JobSearch />}></Route>
        <Route path="privacy" element={<Privacy />}></Route>
        <Route path="contact" element={<Contact />}></Route>
        <Route path="termsofService" element={<TermsofService />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
