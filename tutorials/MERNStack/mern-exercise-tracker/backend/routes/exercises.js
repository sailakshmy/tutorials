const router = require('express').Router();
let Exercise = require('../models/exercise.model');

router.route('/').get((req,res)=>{
    Exercise.find()
    .then(exercises=> res.json(exercises))
    .catch(err => res.status(400).json('Error: '+err));
});

router.route('/add').post((req,res)=>{
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExercise = new Exercise({username,description,duration,date});

    newExercise.save()
    .then(()=>res.json('Exercise added'))
    .catch(err=> res.status(400).json("Error: "+err));
});

//To handle the get Request for a specific ObjectId
router.route('/:id').get((req,res)=>{//:id is a variable.It is an Object ID that is created by MongoDB automatically
    Exercise.findById(req.params.id)//This will find just 1 particular exercise using the id from the URL
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json("Error: "+err));
});

//To handle the DELETE Request for a specific ObjectID
router.route('/:id').delete((req,res)=>{
    Exercise.findByIdAndDelete(req.params.id) // This will find the exercise by the OjectID and deletes it from the DB
    .then(()=> res.json("Exercise Deleted"))
    .catch(err => res.status(400).json("Error: "+err));
});

router.route('/update/:id').post((req,res)=>{
    Exercise.findById(req.params.id)
    .then((exercise)=>{ // Exercise that we just got from the DB
        exercise.username = req.body.username;
        exercise.description = req.body.description;
        exercise.duration =Number(req.body.duration);
        exercise.date = Date.parse(req.body.date);

        exercise.save() // Saving the updated exercise will return a promise
        .then(()=>res.json("Exercise Updated!"))
        .catch(err=> res.status(400).json("Error:" + err));
    })
        .catch(err=> res.status(400).json("Error:" + err));
});


module.exports = router;
