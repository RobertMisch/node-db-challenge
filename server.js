const express = require('express');

const ProjectsRouter = require('./projects/projects-router');
const ResourceRouter = require('./resources/resources-router');

const server = express();

server.use(express.json());
server.use('/api/projects', ProjectsRouter);
server.use('/api/resources', ResourceRouter);

server.get("/", (req, res) => {
    res.status(200).json({ api: "up" });
  });

module.exports = server;