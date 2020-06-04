import Knex from 'knex';

export async function seed(Knex: Knex){
    await Knex('items').insert([
        {titulo: 'Lâmpadas', imagem: 'Lâmpadas.svg'},
        {titulo: 'Pilhas e baterias', imagem: 'baterias.svg'},
        {titulo: 'Papéis e papelão', imagem: 'papeis-papelao.svg'},
        {titulo: 'Resíduos Eletrônicos', imagem: 'eletronicos.svg'},
        {titulo: 'Resíduos Orgânicos', imagem: 'organicos.svg'},
        {titulo: 'Óleo de Cozinha', imagem: 'oleo.svg'},
    ]);
}