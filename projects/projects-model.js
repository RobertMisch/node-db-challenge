const db = require("../data/db-config")

module.exports = {
    find,
    findById,
    add,
    findTasks,
    findTasksInfo,
    findByResources,
    addTask
}
//GET
function find() {
    return db("projects")
}
function findById(id) {
    return db("projects")
    .where({id})
    .first()
}
function findTasks(id){
    return db("tasks as t")
    .join('projects as p','p.id','t.project_id')
    .select('t.id as task_id','p.name','p.description as project_description','t.description','t.notes')
        .where({'t.project_id':id})
}
function findTasksInfo(id){
    return db("tasks as t")
        .where({'t.project_id':id})
}
function findByResources(id) {
    return db("resources as r")
    .join('project_resources as c','c.resource_id','r.id')
    .join('projects as p','p.id','c.project_id')
    .select('r.id', 'r.name','r.description')
    .where({'c.project_id':id})
}
function add(project) {
    return db("projects")
        .insert(project, "id")
}
function addTask(newTask, pid){
    return db("tasks")
    .insert({project_id: pid, description:newTask.description, notes: newTask.notes})
    
}