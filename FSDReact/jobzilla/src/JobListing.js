import React, { useState } from "react";

const JobListing = () => {
  const [jobs, setJobs] = useState([
    {
      id:1,
      Title: "Software Developer",
      Company: "ABC",
      Country: "New York, NY",
    },
    {
      id:2,
      Title: "Data Scientist",
      Company: "XYZ Corp.",
      Country: "San Francisco, CA",
    },
    {
      id:3,
      Title: "Cybersecurity Analyst",
      Company: "RBC",
      Country: "Toronto, ON",
    },
  ]);

  return (
    <main>
      <h3>Job Listings</h3>
      {jobs.map((jobs) => (
        <div className="job-listings" key={jobs.id}>
          <h3>{jobs.Title}</h3>
          <p>{jobs.Company}</p>
          <p>{jobs.Country}</p>
        </div>
      ))}
    </main>
  );
};

export default JobListing;