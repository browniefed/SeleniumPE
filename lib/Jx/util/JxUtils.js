var driver = require('../../Driver/Driver');

var JxUtils = {
	argsToArray: function(args, from) {
		from = from || 0;
		args = args || [];
		return Array.prototype.slice.call(args, from);
	}
}
exports = module.exports = JxUtils;