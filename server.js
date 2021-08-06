const express = require('express')
const app = express()
const hostname = "0.0.0.0"
const port = 8080

function col(num, arr) {
    arr.push(num)
    if (num === 1)
        return
    if (num % 2 === 0)
        col(num / 2, arr)
    else {
        col(num * 3 + 1, arr)
    }
}

function computeSequence(seed) {
    let arr = []
    col(seed, arr);
    return arr
}

app.get('/collatz/:seed', (req, res) => {
    res.set("Access-Control-Allow-Origin", "*")
    const seed = parseInt(req.params.seed)
    if (seed < 1) {
        console.log(`Received negative seed value [${seed}`)
        res.statusCode = 400
        res.send("Seed value must be a positive integer (1,2,3...");
        return
    }
    if (isNaN(seed)) {
        console.log(`Error parsing [${seed}`)
        res.statusCode = 400
        res.send("NaN");
        return
    }
    console.log(`Seed: [${seed}]`)
    const sequence = computeSequence(seed)
    console.log(`Computed sequence: ${sequence}`)
    res.send(sequence)
})

app.listen(port, hostname, () => console.log(`Server running at http://${hostname}:${port}/`))
