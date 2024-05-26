import React from "react";


const Apply = () => {
  return (
    <main>
    <section id="apply-form-section">
      <h2>Apply Now</h2>
      <div class="form-div">
        <form id="apply-form" action="submit_form.php" method="post">
          <label for="name">Name</label>
          <input type="text" id="name" name="name" required />
          <label for="email">Email</label>
          <input type="email" id="email" name="email" required />
          <label for="message">Message</label>
          <textarea id="message" name="message" rows="4" required></textarea>
          <input type="upload" value="Upload Resume" />
        </form>
      </div>
    </section>
  </main>
);
};

export default Apply;