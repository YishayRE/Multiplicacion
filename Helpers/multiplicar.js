const fs = require('fs');//libreria FileSystem
const color = require('colors');

const crearArchivo = async(base = 5, listar = false, hasta = 10) => {
	try{
		let salida = '';

		for(let i = 1;  i <= hasta; i++)
			salida += `${base} x ${i} = ${base*i}\n`;

		fs.writeFileSync(`./Salida/tabla-${base}.txt`, salida);

		if(listar){
			console.log('==============================='.green.bgBrightWhite);
			console.log('\tTabla del'.magenta, base);
			console.log('==============================='.green.bgWhite);
			
			console.log(salida.cyan);
		}
		else{}

		return `tabla-${base}.txt`;
	}
	catch(err){
		throw err;
	}
	
}

//sin promesa
/*
const crearArchivo = (base = 5) => {
	console.log('===============================');
	console.log('\tTabla del', base);
	console.log('===============================');

	let salida = '';

	for(let i = 1;  i < 11; i++)
		salida += `${base} x ${i} = ${base*i}\n`;

	fs.writeFileSync(`tabla-${base}.txt`, salida);

	console.log(`El arcchivo tabla-${base}.txt fue creado`);
}
*/

//Promesa
/*
const crearArchivo = (base = 5) => {
	const promesa = new Promise((resolve, reject) =>{
		console.log('===============================');
		console.log('\tTabla del', base);
		console.log('===============================');

			let salida = '';

			for(let i = 1;  i < 11; i++)
				salida += `${base} x ${i} = ${base*i}\n`;

			(!fs.writeFileSync(`tabla-${base}.txt`, salida))
				? resolve(`tabla-${base}.txt`)
				: reject('No se creo el archivo');
		}
	);

	return promesa;
}
*/

module.exports = {
	crearArchivo
}