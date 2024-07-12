const express = require('express');
const app = express();
app.use(express.json());

const data = {
    jobs: require('../model/joblist.json'),
setJobs : function(data) {this.jobs = data }

};

const getAllJobs = (req, res) => {

    res.json(data.jobs);
}

const updateJob = (req, res) => {
    const job = data.jobs.find(job => job.jobid === parseInt(req.body.jobid));
    
    if (!job) {
        return res.status(400).json({ "message": `Job ID ${req.body.jobid} not found` });
    }
    if (req.body.title) job.title = req.body.title;
    if (req.body.company) job.company = req.body.company;
    if (req.body.location) job.location = req.body.location;
    if (req.body.description) job.description = req.body.description;
    if (req.body.applyLink) job.applyLink = req.body.applyLink;

    const filteredArray = data.jobs.filter(job => job.jobid !== parseInt(req.body.jobid));
    const unsortedArray = [...filteredArray, job];
    data.setJobs(unsortedArray.sort((a, b) => a.jobid > b.jobid ? 1 : a.jobid < b.jobid ? -1 : 0));
    res.json(data.jobs);
}


const createJob = (req, res) => {
   /* res.json({
        "title": req.body.title,
        "company": req.body.company,
        "location": req.body.location,
        "description": req.body.description,
        "applyLink": req.body.applyLink
    });
    */

    const newJob = {
        jobid: data.jobs?.length ? data.jobs[data.jobs.length - 1].jobid + 1 : 1,
        title: req.body.title,
        company: req.body.company,
        location: req.body.location,
        description: req.body.description,
        applyLink: req.body.applyLink
    }

    if (!newJob.title || !newJob.company || !newJob.location || !newJob.description || !newJob.applyLink) {
        return res.status(400).json({ 'message': 'Title, Company, Location, Description and ApplyLink are required.' });
    }

    data.setJobs([...data.jobs, newJob]);
    res.status(201).json(data.jobs);
}

const deleteJob = (req, res) => {
    const job = data.jobs.find(job => job.jobid === parseInt(req.body.jobid));
    if (!job) {
        return res.status(400).json({ "message": `Job ID ${req.body.jobid} not found` });
    }
    const filteredArray = data.jobs.filter(job => job.jobid !== parseInt(req.body.jobid));
    data.setJobs([...filteredArray]);
    res.json(data.jobs);
}

const getJob = (req, res) => {

    //const job = data.jobs.find(job => job.jobid === parseInt(req.params.jobid));
    /*
    if (!job) {
        return res.status(400).json({ "message": `Job ID ${req.params.jobid} not found` });
    }
        */

    //line 13 : res.json(data.jobs);




    const job = data.jobs.find(job => job.jobid === parseInt(req.params.jobid));
    
    if (!job) {
        return res.status(400).json({ "message": `Job ID ${req.params.jobid} not found` });
    }
    


    res.json(job);


}


module.exports = {getAllJobs,  updateJob , createJob, deleteJob, getJob};