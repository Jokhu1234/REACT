import React from "react";



const NewJob = ({ newJob, setNewJob, handleSubmit }) => {
  return (
        <main>
          <section id="newjob-form-section">
            <h2>Post a Job</h2>
            <div class="form-div">
              <form id="newjob-form" action="submit_form.php" method="post">
                <label for="name">Title of Job:</label>
                <input type="text" id="title" name="title" required />
                <label for="company">Company</label>
                <input type="company" id="company" name="company" required />
                <label for="location">Location</label>
                <textarea id="location" name="location" required></textarea>
                <label for="description">Description</label>
                <textarea id="description" name="description" required></textarea>
                <input type="upload" value="upload" />
                <button type="upload">Upload Resume</button>
              </form>
            </div>
          </section>
        </main>
    
   
  );
};

export default NewJob;