/* importar mongoDB */
var mongo = require('mongodb');

var connMongoDB = function(){
	console.log('Entrou na função de conexão');
	/* instanciando o mongodb*/
	var db = new mongo.Db(
		'got',
		new mongo.Server(
			'localhost',//stringo contendo o endereço do servidor
			27017,//porta de conexão
			{}
		),
		{}
	);
	return db;
}

module.exports = function(){
	return connMongoDB;
}