const express = require('express');
const router = express.Router();
const jobsController = require('../../controllers/jobsController');


router.route('/')
    .get(jobsController.getAllJobs)
    .post(jobsController.createJob)
    .put(jobsController.updateJob)
    .delete(jobsController.deleteJob);

router.route('/:jobid')
    .get(jobsController.getJob);

module.exports = router;



/*
const express = require('express');
const router = express.Router();

const data = {};
data.employees = require('../../data/employees.json');


router.route('/')
.get ((res, req)=>{
res.json(data.employees);
})
.post((res, req)=>{
res.json({

    "title" : req.body.title,
    "company":  req.body.company,
    "location":  req.body.location,
    "description":  req.body.description,
    "applyLink":  req.body.applyLink

}

);
})
.put((res, req)=>{
    res.json({

        "firstname" : req.body.firstname,
        "lastname":  req.body.lastname
    }
    
    );
})
.delete((res, req)=>{
res.json({
    "jobid" : req.body.jobid
});
});

//http://localhost:3400/jobs
//http://localhost:3400/jobs/1

router.route('/:jobid')
.get ((res, req)=>{
    res.json({"jobid": req.params.jobid});
    });
    

/*
router.get()
router.put()
*/






/*
module.exports = router;*/