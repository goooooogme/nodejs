const http = require('http');
const fs = require('fs');
const path = require('path');


const server = http.createServer((req,res) => {
    if (req.method === "GET") {

        switch (req.url) {
            case '/': {
                res.writeHead(200, {
                    'Content-Type': 'text/html'
                })
                fs.readFile(
                    path.join(__dirname, 'views', 'index.html'),
                    'utf-8',
                    (err, content) => {
                        if (err) throw new Error(err);
                        res.end(content)
                    }           
                );
            }
            break;
            case '/about' : {
                res.writeHead(200, {
                    'Content-Type': 'text/html'
                })
                fs.readFile(
                    path.join(__dirname, 'views', 'about.html'),
                    'utf-8',
                    (err, content) => {
                        if (err) throw new Error(err);
                        res.end(content)
                    }           
                )
            } break;
            case '/api/user': {
                res.writeHead(200, {
                    'Content-Type': 'text/json'
                })
                const users = [
                    {name: 'loh', age: 23},
                    {name: 'pidor', age: 27}
                ];
                res.end(JSON.stringify(users))
            }
            break;
        }
    } else if (req.method === "POST") {
        const body = [];
        
        res.writeHead(200,{
            'Content-Type': 'text/html; charset=utf-8'
        })

        req.on("data", data => {
            body.push(Buffer.from(data))
        })

        req.on("end", () => {
            const message = body.toString().split('=')[1];

            res.end(`
                <h1>Your message: ${message} </h1>
            `)
        })
    }
})

server.listen(3000, () => {
    console.log('Server is run...')
})