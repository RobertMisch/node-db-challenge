const db = require("../data/db-config")

module.exports = {
    find,
    findById,
    add,
    findTasks,
    findTasksInfo,
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
function add(project) {
    return db("projects")
        .insert(project, "id")
}
function addTask(newTask, pid){
    return db("tasks")
    .insert({project_id: pid, description:newTask.description, notes: newTask.notes})
    
}