exports.up = function (knex) {
    return knex.schema
        .alterTable("monitor", function (table) {
            table.string("conditions", 255).notNullable().defaultTo("[]");
        });
};

exports.down = function (knex) {
    return knex.schema.alterTable("monitor", function (table) {
        table.dropColumn("conditions");
    });
};
