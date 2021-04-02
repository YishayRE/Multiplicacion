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
    .option('h', {
        alias: 'hasta',
        demandOption: true,
        describe: 'limite de la multiplicación',
        type: 'number'
    })
    .check((argv, options) => {
			if (isNaN(argv.h)) {
				throw new Error("Hasta debe ser un número")
			} 
			else {
				return true 
			}
		}
	)
   	.argv;

module.exports = argv;