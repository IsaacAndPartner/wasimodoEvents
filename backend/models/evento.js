const mongoose = require('mongoose');

const eventosSchema = mongoose.Schema({
    categoria: {
        type: String,
        required: true
    },
    nombre:{
        type: String,
        required: true
    },
    fecha:{
        type: String,
        required: true 
    },
    hora:{
        type: String,
        required: true
    },
    lugar:{
        type: String,
        required: true
    },
    descripcion:{
        type: String,
        required: true
    },
    imagen:{
        type: String,
        required: true
    },
    estado:{
        type: String,
        required: true
    }

});

module.exports = mongoose.model('evento', eventosSchema);