const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const bodyParser = require('body-parser');
const cors = require('cors');

// crear el servidor
const app = express();

// Habilitar Cors
const whitelist = ['http://localhost:3000'];
const corsOptions = {
    origin: (origin, callback) => {
        // console.log(origin);
        const existe = whitelist.some(dominio => dominio === origin);
        if (existe) {
            callback(null, true) // si el dominio se encuentra en la whitelist lo permitimos
        } else {
            callback(new Error('No Permitido por CORS')) //caso contrario
        }
    }
}

// habilitar cors
// app.use( cors(corsOptions) );
app.use(cors());

// Conectar a mongodb
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://ale:ale1402@golangfinalproyect.cl5zb.mongodb.net/veterinaria?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

// habilitar el body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// habilitar routing
app.use('/', routes())


// puerto y arrancar el servidor
app.listen(4000, () => {
    console.log('Listening...')
})