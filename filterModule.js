// Modulo para makeitmodular

var fs = require('fs');
var path = require('path');

module.exports = function filtrar(directory, ext, callback) {
    fs.readdir(directory, function (err, list) {
        if (err){
            callback(err,null);
        }else{
            var result=[];
            list.forEach(function (file) {
                if (path.extname(file)==='.'+ext){
                    result.push(file);
                }
            });
            callback(null, result);
        }
    });
};

/*solución oficial
 var fs = require('fs')  
var path = require('path')  
module.exports = function (dir, filterStr, callback) {  
    fs.readdir(dir, function (err, list) {  
     if (err)  
       return callback(err)  
    
     list = list.filter(function (file) {  
       return path.extname(file) === '.' + filterStr  
     })  
    
     callback(null, list)  
    })  
}  
