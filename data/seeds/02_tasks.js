
exports.seed = function (knex) {

  return knex('tasks').insert([
    { project_id: 1, description: 'task1', notes: 'small note 1' },
    { project_id: 1, description: 'task2', notes: 'small note 2' },
    { project_id: 2, description: 'task3', notes: 'small note 3' },
    { project_id: 2, description: 'task4', notes: 'small note 4' },
    { project_id: 3, description: 'task5', notes: 'small note 5' },
    { project_id: 3, description: 'task6', notes: 'small note 6' }
  ]);
}