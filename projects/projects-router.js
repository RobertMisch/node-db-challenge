const express = require('express');

const Projects = require('./projects-model.js');

const router = express.Router();


router.get('/', (req, res) => {
    Projects.find()
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get projects' });
        });
});

router.get('/:id', (req, res) => {
    Projects.findById(req.params.id)
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get projects' });
        });
});

router.get('/:id/tasks', (req, res) => {
    Projects.findTasks(req.params.id)
        .then(tasks => {
            res.status(200).json(tasks);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get task' });
        });
})

router.post('/', (req, res) => {
    const projectsData = req.body;

    Projects.add(projectsData)
        .then(projects => {
            res.status(201).json(projects);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to create new project' });
        });
});

router.post('/:id/tasks', (req, res) => {
    const tasksData = req.body;

    Projects.findById(req.params.id)
        .then(projects => {
            // const tasksData = 
            Projects.addTask(tasksData, projects.id)
                .then(tasks => {
                    res.status(201).json(tasks);
                })
                .catch(err => {
                    res.status(500).json({ message: 'Failed to create new task' });
                });
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get project' });
        });
});

module.exports = router;