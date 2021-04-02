const {crearArchivo} = require('./Helpers/multiplicar');
const argv = require('./Config/yargs');
const color = require('colors');

console.clear();

//console.log(process.argv);
//console.log(argv);
//console.log(argv.b, argv.l);

crearArchivo(argv.b, argv.l, argv.h)
	.then(nombreArchivo => console.log('El archivo'.blue.italic, nombreArchivo.underline.red.italic, 'fue creado'.blue.italic))
	.catch(err => console.log(err.green));

//forma complicada sin validacion
/*
console.log(process.argv);

const[ , , arg3 = 'base=5'] = process.argv;

const[ , base = 5] = arg3.split('=');

console.log(arg3);

console.log(base);
*/

//Yarg directamente en este archivo
/*
	const argv = require('yargs')
	.option('b', {
        alias: 'base',
        demandOption: true,
        describe: 'Base de la multiplicación',
        type: 'number'
    })
    .check((argv, options) => {
			if (isNaN(argv.b)) {
				throw new Error("La base debe ser un número")
			} 
			else {
				return true 
			}
		}
	)
    .option('l', {
        alias: 'listar',
        default: false,
        describe: 'Mostrar la tabla de multiplicar',
        type: 'boolean'
    })
   .argv;
*/