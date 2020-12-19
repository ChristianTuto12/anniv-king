const http = require('http');
const fs = require("fs")
const path = require("path")

const PORT = process.env.PORT || 3000
const server = http.createServer((req, res)=>{

	let path_file = path.join(__dirname,"statics", req.url == "/" ? "index.html": req.url )

	//recuperatin des l'extention du fichier

	let extention = path.extname(path_file)

	//initialistaion de lu content-type
	ContentType = "text/html";

	switch(extention){
		case ".js":
			ContentType = "text/javascript";
			break;

		case ".css":
			ContentType = "text/css";
			break;

		case ".jpg":
			ContentType = "image/jpg";
			break;
	}

	const read = fs.readFile(path_file, (err, content)=>{
		res.writeHead(200, {"Content-Type":ContentType})
		res.end(content, "utf8")
	})

}).listen(PORT, ()=>{console.log(" le server est bien demarer sur le port")})