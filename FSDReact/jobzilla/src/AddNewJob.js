import React from "react";
import { FaPlus } from "react-icons/fa";

const AddNewJob = ({ newJob, setNewJob, handleSubmit }) => {
  return (
    <form className="addJob" onSubmit={handleSubmit}>
      <label>Add Job</label>
      <input
        autoFocus
        id="addJob"
        placeholder="Add Job"
        required
        type="text"
        value={newJob}
        onChange={(e) => setNewJob(e.target.value)}
      />
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
};

export default AddNewJob;