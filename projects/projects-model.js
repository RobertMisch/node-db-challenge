const db = require("../data/db-config")

module.exports = {
    find,
    findById,
    add,
    findTasks,
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
    return db("tasks")
        .where({project_id:id})
}
function add(project) {
    return db("projects")
        .insert(project, "id")
}
function addTask(newTask, pid){
    return db("tasks")
    .insert({project_id: pid, description:newTask.description, notes: newTask.notes})
    
}