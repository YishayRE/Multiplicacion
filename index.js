const fs = require('fs');//libreria FileSystem

console.clear();

const base = 7;
let salida = '';

for(let i = 1;  i < 11; i++)
	salida += `${base} x ${i} = ${base*i}\n`;

fs.writeFile('tabla.txt', salida, (err) =>{
		if(err) throw err;
		console.log('Tabla del', base, 'creada correctamente');
	}
)

//otra forma
//fs.writeFileSync(`tabla-${base}.txt`, salida);

console.log(`El arcchivo tabla-${base}.txt fue creado`);