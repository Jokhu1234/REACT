import React from "react";
import JobListItems from "./JobListItems";

const JobContent = ({ jobs }) => {
  return (
    <>
    <JobListItems jobs={jobs} />
    </>
  );
};

export default JobContent;