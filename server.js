/*
Importer les composants serveur
*/
//
    require(`dotenv`).config();
    const express = require('express');
    const path = require('path');

    //inner

    const frontRouter = require('./routes/front.router');
    const frontRouter = require('./routes/front.router');
/*
Configuration du serveur
*/
    //définir les variables serveurs
    const server = express();
    const port =  process.env.PORT;

    // configuration du moteur de rendu
      server.set('view engine', 'ejs');

    //Définition du dossier static du client 
    server.set( 'views', __dirname + '/www' );
    server.use( express.static(path.join(__dirname, 'www')) );

    // utilisation des routers
    server.use('/api', apiRouter);
    server.use('/', frontRouter);
//

/*
Lancer le serveur
*/
    server.listen( port, () => console.log(`Server listening on port ${port}`) )
//