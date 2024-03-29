var cookieParser = require('cookie-parser');
var session = require('express-session');

//подключение модуля connect-mssql
var MSSQLStore = require('connect-mssql')(session);
var mssql = require('mssql');

module.exports = {
	createStore: function(){

		var config = {
			user: 'test', //пользователь базы данных
			password: '12345', //пароль пользователя
			server:'localhost',//хост
			database:'testdb', //имя бд
			port: 1433, //порт на котором запущен sql server
			pool: {
				max: 10, //максимально допустимое количество соединенй пула
				min: 0,//минимально допустимое количество соединений пула
				idleTimeoutMillis: 30000//время ожидания перед завершением используемого соединениия
			}
		}
		return new MSSQLStore(config);
	}
}