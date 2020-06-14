const http = require('http')
const app = http.createServer(
    (req, resp) => {
        resp.writeHead(200,{'Content-Type': 'text/plain'})
        resp.end('Hellow server')
    }
)
const port = 3001
app.listen(port)
console.log(`server running on port ${port}`);
