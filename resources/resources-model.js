const db = require("../data/db-config")

module.exports = {
    find,
    findByProjectId,
    add
}
//GET
function find() {
    return db("resources")
}
function findByProjectId(id) {
    return db("resources")
    .join()
    .where({project_id:id})
}
function add(resource) {
    return db("resources")
      .insert(resource, "id")
  }