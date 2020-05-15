const db = require("../data/db-config")

module.exports = {
    find,
    add
}
//GET
function find() {
    return db("resources")
}
function add(resource) {
    return db("resources")
      .insert(resource, "id")
  }