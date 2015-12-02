var fs = require('fs');

var file = fs.readFile(process.argv[2], function (err,data) {
    if (err){
        console.log(err);
    }else{
        var str = data.toString();
        var lineas = str.split('\n').length-1;
        console.log(lineas);
    }
});


/* Otra solución

var fs = require('fs');
//paso utf como segundo parametro 
var file = fs.readFile(process.argv[2], utf8, function (err,data) {
    if (err){
        console.log(err);
    }else{
        var lineas = data.split('\n').length-1;
        console.log(lineas);
    }
});
*/

/*Solución oficial

 var fs = require('fs')  
 var file = process.argv[2]  
 fs.readFile(file, function (err, contents) {  
   // fs.readFile(file, 'utf8', callback) can also be used  
   var lines = contents.toString().split('\n').length - 1  
   console.log(lines)  
 })  
 
*/