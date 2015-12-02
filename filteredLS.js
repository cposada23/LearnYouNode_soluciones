var fs = require('fs');
var path = require('path');
var directory = process.argv[2];
var ext = process.argv[3];

fs.readdir(directory, function (err, list) {
    
    if (err){
        console.log(err);
    }else{
        list.forEach( function (file) {
            if (path.extname(file) === '.'+ext){
                console.log(file);
            }
        });
    }
});



/* otra solución 
var fs = require('fs');
var directorio = process.argv[2];
var ext = process.argv[3];
var str;
fs.readdir(directorio, function (err,list) {
    for (var l in list) {
        //busco la ext de l
        str = list[l].split('.');
        if (str[str.length-1]===ext && str.length>1){
            console.log( list[l]);    
        }
    }
});
*/