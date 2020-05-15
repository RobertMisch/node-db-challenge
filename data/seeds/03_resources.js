
exports.seed = function (knex) {

  return knex('resources').insert([
    {name: 'resource1', description:"test1" },
    {name: 'resource2', description:"test2" },
    {name: 'resource3', description:"test3" }
  ]);
}
