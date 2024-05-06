import React from 'react'

const Header = () => {
  return (
    <header>
      <h1>Job Zila</h1>

      <nav class="navbar navbar-expand-lg bg-warning navbar-light">
        <div class="container-fluid">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" href="/job-zila/index.html">Home</a></li>
              <li class="nav-item">  
          <a class="nav-link">Job Search</a></li>
          <li class="nav-item">
          <a class ="nav-link" >Job Listing</a></li>
          <li class="nav-item"></li>
            <a class="nav-link">Terms of Service</a>
            <li class="nav-item">
          <a class="nav-link" href="/job-zila/privacy-policy.html">Privacy Policy</a></li>
          <li class="nav-item">
            <a class="nav-link" href="/job-zila/contact-us.html">Contact Us</a></li>
        </ul>
        <form class="d-flex">
          <input class="form-control me-2 bg-waring navbar-light border border-secondary" type="text" placeholder="Search"></input>
          <button class="btn btn-light btn-outline-dark" type="button">Search</button>
        </form>
        </div>
      </nav>
    </header>

  )
}

export default Header