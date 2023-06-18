const mongoose = require('mongoose');
require('dotenv').config({path: 'config.env'})

const conectarDB = async() => {
    try {
        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        console.log('la base de datos wasimodo ha sido conectada')
    } catch (error) {
        console.log(error)
        console.log('fallo la base de datos')
        process.exit(1);
    }
};

module.exports = conectarDB
