
var http = require("http");

var url = process.argv[2];
var resultado = "";
http.get(url, function (response) {
    
    response.setEncoding("utf8");
    
    response.on("data", function (data) {
        resultado += data;
    });

    response.on("end", function() {
        console.log(resultado.length);
        console.log(resultado);
    });
    
    response.on("error", console.error);
});


/* otra solucion 
var http = require("http");
var url = process.argv[2];
var bl = require('bl');
http.get(url,function (response) {
    response.setEncoding("utf8")
    response.pipe(bl(function(err,data) {
        if (err){
            console.error(err);
        }else{
            
            data = data.toString();
            console.log(data.length);
            console.log(data);
        }
    }));
});
*/
