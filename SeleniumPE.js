var Driver = require('./lib/Driver/Driver'),
	AbstractPageElement = require('./lib/Elements/AbstractPageElement'),
	AbstractPage = require('./Pages/AbstractPage'),
	PageCallback = require('./Pages/PageCallback'),
	PageElement = require('./Pages/PageElement'),
	PageHelper = require('./Pages/PageHelper'),
	ToggleableElement = require('./Pages/ToggleableElement'),
	Page = require('./lib/Pages/Page'),
	Users = require('./lib/Users/User');

var JxActions = require('./lib/Jx/JxActions'),
	JxAlert = require('./lib/Jx/JxAllert'),
	JxInspector = require('./lib/Jx/JxInspector'),
	JxNavigate = require('./lib/Jx/JxNavigate'),
	JxTimeouts = require('./lib/Jx/JxTimeouts'),
	JxWaitUntil = require('./lib/Jx/JxWaitUntil');

var By = require('./lib/Jx/util/By'),
	ByJavascript = require('./lib/Jx/util/ByJavascript'),
	JxUtils = require('./lib/Jx/util/JxUtils');

var JxApi = require('./lib/Jx/api/JxApi');

var JxAction = require('./lib/Jx/action/JxAction'),
	AbstractJxAction = require('./lib/Jx/action/AbstractJxAction'),
	ClickAction = require('./lib/Jx/action/ClickAction'),
	DragAndDropAction = require('./lib/Jx/action/DragAndDropAction'),
	FocusAction = require('./lib/Jx/action/FocusAction'),
	HoverAction = require('./lib/Jx/action/HoverAction'),
	TypeAction = require('./lib/Jx/action/TypeAction');


var SPE = {
	Page: Page,
	Users: Users
}

exports.SPE = SPE;