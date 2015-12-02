var fs = require('fs');
//al pasarle utf8 como parametro no tengo que convertir el buffer a un string
//lo hace directamente
var file = fs.readFileSync(process.argv[2], 'utf8');
var vec = file.split('\n');
console.log(vec.length-1);


/*solucion oficial
    var fs = require('fs')  
    var contents = fs.readFileSync(process.argv[2])  
    var lines = contents.toString().split('\n').length - 1  
    console.log(lines)
*/    