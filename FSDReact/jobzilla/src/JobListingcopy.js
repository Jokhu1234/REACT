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
      {jobs.map((job) => (
        <div className="job-listing" key={job.id}>
          <h3>{job.Title}</h3>
          <p>{job.Company}</p>
          <p>{job.Country}</p>
        </div>
      ))}
    </main>
  );
};

export default JobListing;