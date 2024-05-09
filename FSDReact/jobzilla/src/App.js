
import "./styles.css";
import Header from "./Header";
import Main from "./Main";
import JobSearch from "./JobSearch";
import JobListing from "./JobListing";
import Terms from "./Terms";
import Privacy from "./Privacy";
import Contact from "./Contact";
import Footer from "./Footer";
;


function App() {
  return (
    <div className="App">
     <Header />
     <Main />
     <JobSearch />
     <JobListing />
     <Terms />
     <Privacy />
     <Contact />
     <Footer />
    
    </div>
  );
}

export default App;
