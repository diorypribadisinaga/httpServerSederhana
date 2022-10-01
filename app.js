const http = require("http")
const fs = require("fs")
const path = require("path")

const server = http.createServer((req, res) => {
    const { url } = req
    if (!url.match(".css") && !url.match(".jpg") && !url.match(".js")) {
        if (url !== "/") {
            const cekAda = fs.existsSync(`pages/${url}.html`)
            if (!cekAda) {
                res.writeHead(200, { "Content-Type": "text/html" })
                res.write("Page Not Found")
                res.end()
                return
            }
            const filePath = path.join(__dirname, "pages" + url + ".html")
            fs.readFile(filePath, (err, data) => {
                if (err) {
                    console.log(err);
                    return
                }
                res.writeHead(200, { "Content-Type": "text/html" })
                res.write(data)
                res.end()
            })
        } else if (url === "/") {
            fs.readFile(`pages/index.html`, (err, data) => {
                if (err) {
                    console.log(err);
                    return
                }
                res.writeHead(200, { "Content-Type": "text/html" })
                res.write(data)
                res.end()
            })
        }
    } else if (url.match(".css")) {
        const filePath = path.join(__dirname, "public/css", url)
        fs.readFile(filePath, (err, data) => {
            if (err) {
                console.log(err)
                return
            }
            res.writeHead(200, { "Content-Type": "text/css" })
            res.write(data)
            res.end()
        })
    } else if (url.match(".png") || url.match(".jpg")) {
        const filePath = path.join(__dirname, "public/image", url)
        fs.readFile(filePath, (err, data) => {
            if (err) {
                console.log(err)
                return
            }
            res.writeHead(200, { "Content-Type": "image/jpg" })
            res.write(data)
            res.end()
        })
    } else if (url.match(".js")) {
        const filePath = path.join(__dirname, "public/script", url)
        fs.readFile(filePath, (err, data) => {
            if (err) {
                console.log(err)
                return
            }
            res.writeHead(200, { "Content-Type": "text/javascript" })
            res.write(data)
            res.end()
        })
    }
})

server.listen(5000, () => {
    console.log("Server Berjalan di Port 5000")
})