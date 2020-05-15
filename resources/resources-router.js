const express = require('express');

const Resources = require('./resources-model.js');

const router = express.Router();


router.get('/', (req, res) => {
    Resources.find()
        .then(resources => {
            res.json(resources);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get resources' });
        });
});

router.post('/', (req, res) => {
    const resourcesData = req.body;
  
    Resources.add(resourcesData)
    .then(resources => {
      res.status(201).json(resources);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new resources' });
    });
  });

module.exports = router;