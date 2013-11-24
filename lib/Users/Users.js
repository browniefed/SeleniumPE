var User = function() {

	var users = [];


	function addUser(user) {

	}

	function getUser(id) {

	}

	function getUsers() {
		return users;
	}

	return {
		addUser: addUser,
		getUser: getUser,
		getUsers: getUsers
	}
}

exports = module.exports = User;