var http = require("http"),
    url1 = process.argv[2],
    url2 = process.argv[3],
    url3 = process.argv[4];
var resultados = [];


/**/
var resultado = "";
http.get(url1,function (response1) {
    response1.setEncoding("utf8");
    response1.on("data",function (data) {
        resultado += data;
        //console.log(resultado);
        //resultado.push(resultado);
    });
    response1.on("end",function() {
        //console.log(resultado);
        resultados.push(resultado);
        resultado = "";
        http.get(url2,function (response) {
            response.setEncoding("utf8");
            response.on("data", function (data) {
                resultado += data;
            });
            response.on("end", function () {
                resultados.push(resultado);
                resultado = "";
                http.get(url3, function (response) {
                    response.setEncoding("utf8");
                    response.on("data",function (data) {
                        resultado += data;
                    });
                    response.on("end",function () {
                        resultados.push(resultado);
                        imprimirResultados();
                    })
                });
                
            });
                        
        });
    });
    
});


function imprimirResultados() {
    for (var i =0; i<resultados.length; i++ ) {
        console.log(resultados[i]);
    }
}
/**/

/* Solucion oficial
var http = require('http')
var bl = require('bl')
var results = []
var count = 0

function printResults () {
  for (var i = 0; i < 3; i++)
    console.log(results[i])
}

function httpGet (index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
      if (err)
        return console.error(err)

      results[index] = data.toString()
      count++

      if (count == 3)
        printResults()
    }))
  })
}

for (var i = 0; i < 3; i++)
  httpGet(i)
  
  
*/
