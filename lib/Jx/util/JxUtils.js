var driver = require('../../Driver/Driver');

var JxUtils = {
	argsToArray: function(args) {
		return Array.prototype.slice.call(args, 0);
	}
}
exports = module.exports = JxUtils;