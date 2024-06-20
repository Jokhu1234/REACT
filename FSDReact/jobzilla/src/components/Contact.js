import React from "react";


const Contact = () => {
  return (
    <main>
      <section id="contact-form-section">
        <h2>Contact Form</h2>
        <div class="form-div">
          <form action="https://formsubmit.co/sjokhu25@gmail.com" method="POST">
            <label for="name">Name</label>
            <input type="text" name="name" required />
            <label for="email">Email</label>
            <input type="email" name="email" required />
            <label for="message">Message</label>
            <textarea id="message" name="message" rows="4" required></textarea>
            <button type="submit">Submit</button>
          </form>
          
        </div>
      </section>
    </main>
  );
};

export default Contact;