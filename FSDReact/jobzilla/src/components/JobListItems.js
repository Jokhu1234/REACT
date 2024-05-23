import React from "react";
import JobItem from "./JobItem";

const JobListItems = ({ jobs }) => {
  return (
   <>
    {jobs.map((job) => (
    
    <JobItem key={job.jobid} job={job} />
    ))}
    </>

);
};


export default JobListItems;