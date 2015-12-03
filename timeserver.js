var net = require("net");
var port = process.argv[2];


var server = net.createServer(function (socket) {
    var date = new Date();
    //var date = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
   //var a = date.getFullYear().toString();
    var fecha = date.getFullYear().toString() + "-" + zeroFill(date.getMonth()+1)+"-"+ zeroFill(date.getDay()-1)+" "+zeroFill(date.getHours())+":"+zeroFill(date.getMinutes());
    socket.end(fecha);
    //socket.end(now()+"\n");
});
server.listen(port);

function zeroFill(i) {
  return (i < 10 ? '0' : '') + i
}

function now () {
  var d = new Date()
  return d.getFullYear() + '-'
    + zeroFill(d.getMonth() + 1) + '-'
    + zeroFill(d.getDate()) + ' '
    + zeroFill(d.getHours()) + ':'
    + zeroFill(d.getMinutes())
}