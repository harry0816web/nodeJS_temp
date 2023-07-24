const port = 5000
const ip = "127.0.0.1" //本地端ip

const http = require('http')

const server = http.createServer((req, res) => {
    res.write("welcome to homepage")
    res.end()
})

server.listen(port, ip, () => {
    console.log('server open');
})
