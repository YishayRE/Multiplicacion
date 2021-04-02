const {crearArchivo} = require('./Helpers/multiplicar');

console.clear();

const base = 4;

//sin promesa
//crearArchivo(base);

crearArchivo(base)
	.then(nombreArchivo => console.log('El archivo', nombreArchivo, 'fue creado'))
	.catch(err => console.log(err));