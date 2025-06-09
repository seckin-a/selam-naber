const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.end('Selam naber! - HTTP');
});

server.listen(3001, () => {
    console.log(`HTTP sunucusu http:localhost:3001 adresinde çalışıyor`);
});




