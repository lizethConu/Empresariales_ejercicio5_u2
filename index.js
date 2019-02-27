var fs = require('fs');
var parse = require('csv-parse');

var datos=[];

fs.createReadStream('Alumnos.csv')
	.pipe(parse({delimiter:','}))
	.on('data', function(csvrow){
		datos.push(csvrow);}).on('end', 
		function(){
			for (var i = 0; i < datos.length; i++) {
				console.log("No.: "+datos[i][0] + "\n");
				console.log("Numero control: "+datos[i][1] + "\n");
				console.log("Nombre: "+datos[i][2] + "\n");
				console.log("Calificación: "+datos[i][3] + "\n");
			}
	});