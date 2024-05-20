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
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/JobListings" element={<JobListings />}></Route>
        <Route path="/JobSearch" element={<JobSearch />}></Route>
        <Route path="/Privacy" element={<Privacy />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/TermsofService" element={<TermsofService />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
