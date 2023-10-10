const http = require('http')

const app = http.createServer((req, res) => res.end('Página Inicial'))
const PORT = 8080
app.listen(PORT, () => console.log("Servidor iniciado na porta " + PORT))