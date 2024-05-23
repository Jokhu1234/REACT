import React from "react";
import { useState, useEffect} from "react";
import JobContent from "./JobContent";
import SearchJob from "./SearchJob";


const JobListings = () => {
    const API_URL="http://localhost:3500/jobs";

    const [jobs, setJobs] = useState([]);
    const [search, setSearch] = useState("");
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    


    useEffect (() => {
        const fetchJobs = async () => {

        try {
            const response = await fetch (API_URL);
            if (!response.ok)
              throw Error(
            "Data not available"
          );

            const listJobs = await response.json();
            setJobs(listJobs);
           setFetchError(null);

            //console.log(listJobs);

        } catch (err) {
          setFetchError(err.message);
        } finally {
          setIsLoading(false);
          
        }
      };
    
        setTimeout(() => {
          (async () => await fetchJobs())();
        },2000);

    }, []);

  return (
    <main>
        <section id="job-listings" className="container">
            <h2>Job Listings</h2>
            <SearchJob search={search} setSearch={setSearch} />
            <div id="job-listings-container">
            {isLoading && <p>Please wait while data is being loaded... </p>}     
        {fetchError && (
        <p style={{ color: "red" }}>{`Error: ${fetchError}`}</p>
    )}        

     {!fetchError && !isLoading && (
     
     <JobContent jobs={jobs.filter((job) => job.title.toLowerCase().includes(search.toLowerCase())
      
       )} 
       />
      )}
            </div>
        </section>
        </main>
  );
};

export default JobListings;