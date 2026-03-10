// omportar modulos http nativo node js
//esse modulo permite criar servidores web

const { log } = require("console")
const http = require("http")

//criar um servidor http
//função sera executada toda vez que executarem o server

const server = http.createServer((req, res) => {
    //define o status da resposta e o tipo de conteudo

    //200significa bem sucedida

    res.writeHead(200, {"Content-type":"text/html"}) //informar que estamos enviando um html

    //enviar resposta para o navegador
    res.end(`
        <h1> API de cachorros </h1>
        <p> Servidor Node.js funcionando <p>
        `)

})


//Fazer o servidor começar a escutar uma porta (3000)
//ele ficara aguardando por requisições nessaporta

server.listen(3000, () => {
    console.log("servidor rodando em http://localhost:3000")
})