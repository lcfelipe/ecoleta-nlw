import path from 'path';

module.exports = {//nao usar path.resolve
    client:'sqlite3',
    connection:{
        filename: './scr/database/database.sqlite'
    },
    migrations: {
        directory: './scr/database/migrations'
    },
    seeds: {
        directory: './scr/database/seeds'
    },
    useNullAsDefault:true,
}; 