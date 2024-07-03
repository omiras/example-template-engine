const express = require('express');



let visitCount = 0;

// Array de productos de nuestra empresa
const products = ['Cactus', 'Abono Premium', 'Semillas de tomates', 'Arena gato'];

const app = express();

// Le vamos a decira  express que queremos usar el motor de plantillas EJS (que acabamos de instalar)
// Por defecto todas las vistas se encuentran en la carpeta 'views'
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    // Ponemos el nombre del fichero EJS que se encuentra dentro de la carpeta 'views'

    // Cada vez que alguien mi visita mi Web actualizamos la variable global visitCount
    visitCount++;

    // el método render acepta un segundo parámetro de tipo object. Te permite pasarle a la vista un conjunto de datos
    res.render('index', {
        visitas: visitCount,
        titulo: 'Flor Natura 🐱‍🐉',
        productos: products
    });
});

app.listen(3000, () => {
    console.log('Servidor escuchando correctamente');
});