var lib = require('./lib')
var config = require('./config')

lib.send('Hello World!', '/')
lib.listen()