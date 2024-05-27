import React from "react";
import apiRequest from "./apiRequest";
import { useState } from "react";
import jobs from "./JobListings";




const AddJob = () => {

  const [newTitle , setNewTitle] = useState("");
  const [newCompany , setNewCompany] = useState("");
  const [newLocation , setNewLocation] = useState("");
  const [newDescription , setNewDescription] = useState("");

const addJob = async (title, company, location, description) => {

console.log(jobs);

};

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTitle && !newCompany && !newLocation && !newDescription) return;
    console.log(`${newTitle} - ${newCompany} - ${newLocation} - ${newDescription}`
  );

  addJob(newTitle, newCompany, newLocation, newDescription);


  };
  
  return (
    <main>

      <section id="add-form-section">
        <h2>Add Job</h2>
        <div className="add-form-div">
        <form id="add-form" onSubmit={handleSubmit}>

            <div>
            <label for="title">Title</label>
            <input type="text" name="Title" id="title" placeholder="Job Title"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}/>

            <span class="text-danger"></span>
            </div>

            <div>
            <label for="company">Company</label>
            <input type="text" name="Company" id="company" placeholder="Company"  
            value={newCompany}
            onChange={(e) => setNewCompany(e.target.value)}/>

             <span class="text-danger"></span>
             </div>

            <div>
            <label for="location">Location</label>
            <input type="text" name="Location" id="location" placeholder="Location" 
            value={newLocation}
            onChange={(e) => setNewLocation(e.target.value)}/>

            <span class="text-danger"></span>
            </div>
           
            <div>
            <label for="description">Description</label>
            <input type="text" name="Description" id="description" placeholder="Description" 
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}/>

            <span class="text-danger"></span>
            </div>
            
            <input type="submit" value="Add Job" />
          </form>
        </div>
      </section>
    </main>
  );
};

export default AddJob;