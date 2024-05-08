import React from "react";

const JobSearch = () => {
  return (
    <main>
    <section id="job-search-section" class="container">
      <h2>Find Your Dream Job</h2>

      <div class="find-job-div">
        <form id="search-form" action="#" method="GET">
          <input
            type="text"
            name="keywords"
            id="keywords"
            placeholder="Keywords"
          />
          <input
            type="text"
            name="location"
            id="location"
            placeholder="Location"
          />
          <select name="category" id="category">
            <option value="">All Categories</option>
            <option value="it">IT</option>
            <option value="finance">Finance</option>
            <option value="marketing">Marketing</option>

            <option value="marketing">Marketing</option>
            <option value="marketing">Marketing</option>
            <option value="marketing">Marketing</option>
            <option value="marketing">Marketing</option>
           
          </select>
          <input type="submit" value="Search Jobs" />
        </form>
      </div>
    </section>
  </main>

  );
};

export default JobSearch;