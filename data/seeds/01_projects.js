
exports.seed = function (knex) {

  return knex('projects').insert([
    { name: 'project1', description: 'just a test1' },
    { name: 'project2', description: 'just a test2' },
    { name: 'project3', description: 'just a test3' }
  ]);
}