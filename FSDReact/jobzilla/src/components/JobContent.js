import React from "react";
import JobListItems from "./JobListItems";
import { Link } from "react-router-dom";



const JobContent = ({ jobs }) => {
  return (
    <>
    <JobListItems jobs={jobs} />
    
    </>
  );
};

<form className="addForm">
<button> <Link to="/NewJob">Add a Job</Link></button>



  

</form>

export default JobContent;