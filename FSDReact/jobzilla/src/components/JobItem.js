import React from "react"

const JobItem = ({ job }) => {
  return (
    <div class="job-listing">
      <div className="job-listing">
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
    </div>
    </div>
  )
}

export default JobItem;