var http = require('http');

var server = http.createServer(function(req,resp){

	var categoria = req.url;

	if(categoria == '/tecnologia'){
		resp.end("<html><header><meta charset='utf-8'></header><body>Portal de notícias-Tecnologia</body></html>");

	} else if(categoria == '/bigdata'){
		resp.end("<html><header><meta charset='utf-8'></header><body>Portal de notícias-bigdata</body></html>");

	}else if(categoria == '/mysql'){
		resp.end("<html><header><meta charset='utf-8'></header><body>Portal de notícias-mysql</body></html>");

	} else{

	resp.end("<html><header><meta charset='utf-8'></header><body>Portal de notícias-home</body></html>");
	}

});

server.listen(3000);
