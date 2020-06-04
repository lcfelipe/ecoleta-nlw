import Knex from 'knex';

export async function up(knex:Knex){
    return knex.schema.createTable('points',table =>{
        table.increments('id').primary();
        table.string('imagem').notNullable();
        table.string('nome').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('endereço').notNullable();
        table.decimal('lat').notNullable();
        table.decimal('lon').notNullable();
        table.string('cidade').notNullable();
        table.string('uf',2).notNullable();
    });
}

export async function down(knex:Knex){
    return knex.schema.dropTable('point');
}
