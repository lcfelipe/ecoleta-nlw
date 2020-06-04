import express from 'express';

import knex from './database/connection';

const routes = express.Router();


routes.get('/items', async (request,response) => {
    const items = await knex('items').select('*');

    const serializedItems = items.map(item => {
        return {
            id:item.id,
            titulo: item.titulo,
            image_url: `http://localhost:3333/uploads/${item.imagem}`
        };
    });
    return response.json(serializedItems);
});

routes.post('/points', async (request,response)=>{
    const {
        nome,
        email,
        whatsapp,
        lat,
        lon,
        cidade,
        uf,
        endereço,
        items

    } = request.body;
   const ids =  await knex('points').insert({
        imagem:'image-fake',
        nome,
        email,
        whatsapp,
        lat,
        lon,
        cidade,
        uf ,
        endereço
    });
const pointItems = items.map((items_id:number) => {
    return{
        items_id,
        point_id: ids[0]
    };

});
    await knex('point_items').insert(pointItems);
return response.json('success');

});
export default routes; 
//https://youtu.be/XEswWb5Ail8?t=5555