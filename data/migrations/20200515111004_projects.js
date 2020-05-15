
exports.up = function (knex) {
    return knex.schema
        .createTable("projects", projects => {
            projects.increments();

            projects.string("name", 255).notNullable();
            projects.string("description", 255)
            projects.boolean("completed").notNullable().defaultTo(false)
        })
        .createTable("tasks", tasks => {
            tasks.increments();
            tasks
                .integer("project_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("projects")
                .onUpdate("CASCADE")
                .onDelete("RESTRICT");
            tasks.string("description", 255).notNullable();
            tasks.string("notes", 255)
            tasks.boolean("completed").notNullable().defaultTo(false)
        })
        .createTable("resources", resources => {
            resources.increments();
            resources.string("name", 255).notNullable();
            resources.string("description", 255)
            resources.unique("name");
        })
        .createTable("project_resources", projectResources => {
            projectResources.increments();

            projectResources
                .integer("project_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("projects")
                .onUpdate("CASCADE")
                .onDelete("RESTRICT");

            projectResources
                .integer("resource_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("resources")
                .onUpdate("CASCADE")
                .onDelete("RESTRICT");
        })
};

exports.down = function (knex) {
    return knex.schema
    .dropTableIfExists("project_resources")
    .dropTableIfExists("resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("projects")
};
