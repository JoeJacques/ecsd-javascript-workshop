const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('<h1>My App!</h1><p>Hello World!</p>')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
