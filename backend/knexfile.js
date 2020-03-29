// Update with your config settings.
const pg = require('pg')
pg.defaults.ssl = true;
module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://xjkasvhhesciwn:57105b7d00ae8d9fed16815d043d98203a3868a3f37d89835f7202dd503923e3@ec2-35-174-88-65.compute-1.amazonaws.com:5432/d40160tek9f7o8',
    ialectOptions: {
        ssl: {
            rejectUnauthorized: true
        }
    },

    migrations: {
        directory: './src/database/migrations'
    },
    useNullAsDefault: true,
},

};
