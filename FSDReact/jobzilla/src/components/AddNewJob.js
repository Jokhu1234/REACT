import React from "react";
import { FaPlus } from "react-icons/fa";

const AddNewJob = ({ newJob, setNewJob, handleSubmit }) => {
  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label>Add New Job</label>
      <input
        autoFocus
        id="addJob"
        placeholder="Add New Job"
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