'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = void 0;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
	//checking if its running on browser or server
	// We are in browser
	web3 = new _web2.default(window.web3.currentProvider); //scraping the older version of web3 injected by metamask and replacing it with a newer version
} else {
	// We are on the server or the user is not running metamask
	var provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/v3/c245a5e06f724bb8b3149c2f73d21a87');

	web3 = new _web2.default(provider);
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFx3ZWIzLmpzIl0sIm5hbWVzIjpbIldlYjMiLCJ3ZWIzIiwid2luZG93IiwiY3VycmVudFByb3ZpZGVyIiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJIdHRwUHJvdmlkZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU87Ozs7OztBQUVQLElBQUksWUFBSjs7QUFFQSxJQUFJLE9BQUEsQUFBTyxXQUFQLEFBQWtCLGVBQWUsT0FBTyxPQUFQLEFBQWMsU0FBbkQsQUFBNEQ7QUFDNUQ7QUFDQTtRQUFPLEFBQUksa0JBQUssT0FBQSxBQUFPLEtBRmtELEFBRXpFLEFBQU8sQUFBcUIsaUJBRjZDLEFBQUUsQ0FFN0IsQUFDN0M7QUFIRCxPQUlLLEFBQ0w7QUFDQTtLQUFNLFdBQVcsSUFBSSxjQUFBLEFBQUssVUFBVCxBQUFtQixhQUFwQyxBQUFpQixBQUNoQixBQUdEOztRQUFPLEFBQUksa0JBQVgsQUFBTyxBQUFTLEFBQ2Y7QUFFRDs7a0JBQUEsQUFBZSIsImZpbGUiOiJ3ZWIzLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL0FETUlOL0Rlc2t0b3AvdGVtcC9CbG9jayBDaGFpbi9Qcm9qZWN0cy9raWNrc3RhcnQifQ==