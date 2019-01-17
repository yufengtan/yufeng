'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _desc, _value, _class2;

var _yufengDecorates = require('yufeng-decorates');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	var desc = {};
	Object['ke' + 'ys'](descriptor).forEach(function (key) {
		desc[key] = descriptor[key];
	});
	desc.enumerable = !!desc.enumerable;
	desc.configurable = !!desc.configurable;

	if ('value' in desc || desc.initializer) {
		desc.writable = true;
	}

	desc = decorators.slice().reverse().reduce(function (desc, decorator) {
		return decorator(target, property, desc) || desc;
	}, desc);

	if (context && desc.initializer !== void 0) {
		desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
		desc.initializer = undefined;
	}

	if (desc.initializer === void 0) {
		Object['define' + 'Property'](target, property, desc);
		desc = null;
	}

	return desc;
}

var AdminController = (_dec = (0, _yufengDecorates.GetMapping)('/login'), (0, _yufengDecorates.RestController)(_class = (_class2 = function () {
	function AdminController() {
		_classCallCheck(this, AdminController);
	}

	_createClass(AdminController, [{
		key: 'login',
		value: function login() {
			return '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8" /><title>login</title></head><body>\n\t\t\t\u767B\u5F55\u9875\n\t\t</body></html>';
		}
	}]);

	return AdminController;
}(), (_applyDecoratedDescriptor(_class2.prototype, 'login', [_dec], Object.getOwnPropertyDescriptor(_class2.prototype, 'login'), _class2.prototype)), _class2)) || _class);