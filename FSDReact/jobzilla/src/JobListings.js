import React, { useEffect, useState } from "react";

const JobListings = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3500/jobs")
      .then((response) => response.json())
      .then((data) => setJobs(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <main>
      <section id="joblistings-section">
      <h2>Job Listings</h2>
        <div className="job-listings">
          <ul>
            {jobs.map((job) => (
              <li key={job.jobid}>
                <h2>{job.title}</h2>
                <p>{job.company}</p>
                <p>{job.location}</p>
                <p>{job.description}</p>
                <p>
                  <a href={job.applyLink} target="_blank" rel="noopener noreferrer">
                    Apply
                  </a>
                  <hr/>
                </p>
              </li>
              
            ))}
          </ul>
        </div>
   </section>
   </main>
  );
};

export default JobListings;