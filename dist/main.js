/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/calculator.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/calculator.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	data: function () {
		return {
			identity: 2,
			careLevel: 0,
			transportLevel: 0,
			remoteArea: false,
			customPrice: 0,
			isRent: 0,
			mainCategory: 0,
			subCategory: 0,
			selectService: 0,
			itemInfo: "",
			serviceCount: 1,
			price: {
				"A": { "total": 0, "gov": 0, "own": 0 },
				"B": { "total": 0, "gov": 0, "own": 0 },
				"C": { "total": 0, "gov": 0, "own": 0 },
				"D": { "total": 0, "gov": 0, "own": 0 },
				"E-Rent": { "total": 0, "gov": 0, "own": 0 },
				"E-Buy": { "total": 0, "gov": 0, "own": 0 },
				"F-Rent": { "total": 0, "gov": 0, "own": 0 },
				"F-Buy": { "total": 0, "gov": 0, "own": 0 },
				"G": { "total": 0, "gov": 0, "own": 0 }
			},
			rentMonth: 36,
			totalPrice: {
				"service": { "total": 0, "gov": 0, "own": 0 },
				"equipRent": { "total": 0, "gov": 0, "own": 0 },
				"equipBuy": { "total": 0, "gov": 0, "own": 0 },
				"rest": { "total": 0, "gov": 0, "own": 0 }
			},
			header: {},
			items: {
				"A": [], "B": [], "C": [], "D": [], "E": [], "F": [], "G": []
			}
		};
	},
	created: function () {
		$.get("/static/service-code.json", function (data) {
			this.header = data;
			this.UpdateItemInfo();
		}.bind(this));
	},
	methods: {
		UpdatePrice: function () {
			var priceKey = this.remoteArea ? "priceRemote" : "price";
			var payment, price, cat, maxPay, rate;
			var priceRent, priceBuy;

			//A code
			cat = this.items["A"];
			price = { "total": 0, "gov": 0, "own": 0 };
			for (var i = 0; i < cat.length; i++) {
				var item = cat[i];
				var p = item[priceKey];
				var t = p * item.num;
				price.total += t;
				price.gov += t;
			}
			this.price["A"] = price;

			//B code
			payment = this.header.payment[0];
			rate = payment.rate[this.identity] * 0.01;
			cat = this.items["B"];
			price = { "total": 0, "gov": 0, "own": 0 };
			for (var i = 0; i < cat.length; i++) {
				var item = cat[i];
				var p = item[priceKey];
				var t = p * item.num;
				var o = parseInt(p * rate) * item.num;
				var g = t - o;
				price.total += t;
				price.own += o;
				price.gov += g;
			}
			this.price["B"] = price;

			//C code
			rate = payment.rate[this.identity] * 0.01;
			cat = this.items["C"];
			price = { "total": 0, "gov": 0, "own": 0 };
			for (var i = 0; i < cat.length; i++) {
				var item = cat[i];
				var p = item[priceKey];
				var t = p * item.num;
				var o = parseInt(p * rate) * item.num;
				var g = t - o;
				price.total += t;
				price.own += o;
				price.gov += g;
			}
			this.price["C"] = price;

			//check payment limit for B,C code
			maxPay = payment.pay[this.careLevel];
			var bcPay = this.price["B"].gov + this.price["C"].gov;
			if (bcPay > maxPay) {
				var exceed = bcPay - maxPay;
				if (exceed > this.price["C"].gov) {
					this.price["C"].own += this.price["C"].gov;
					exceed -= this.price["C"].gov;
					this.price["C"].gov = 0;
				} else {
					this.price["C"].own += exceed;
					this.price["C"].gov -= exceed;
					exceed = 0;
				}

				this.price["B"].own += exceed;
				this.price["B"].gov -= exceed;
			}

			//D code
			payment = this.header.payment[parseInt(this.transportLevel) + 1];
			rate = payment.rate[this.identity] * 0.01;
			cat = this.items["D"];
			price = { "total": 0, "gov": 0, "own": 0 };
			for (var i = 0; i < cat.length; i++) {
				var item = cat[i];
				var p = item[priceKey];
				var t = p * item.num;
				var o = parseInt(p * rate) * item.num;
				var g = t - o;
				price.total += t;
				price.own += o;
				price.gov += g;
			}

			maxPay = payment.pay[this.careLevel];
			if (price.gov > maxPay) {
				var exceed = price.gov - maxPay;
				price.gov -= exceed;
				price.own += exceed;
			}
			this.price["D"] = price;

			//E code
			payment = this.header.payment[5];
			rate = payment.rate[this.identity] * 0.01;
			cat = this.items["E"];
			priceRent = { "total": 0, "gov": 0, "own": 0 };
			priceBuy = { "total": 0, "gov": 0, "own": 0 };
			for (var i = 0; i < cat.length; i++) {
				var item = cat[i];
				var p = item[priceKey];
				var t = p * item.num;
				var o = parseInt(p * rate) * item.num;
				var g = t - o;
				if (item.isRent) {
					var exceed = g - item.payForRent;
					if (exceed > 0) {
						o += exceed;
						g -= exceed;
					}
					priceRent.total += t;
					priceRent.own += o;
					priceRent.gov += g;
				} else {
					var exceed = g - item.payForBuy;
					if (exceed > 0) {
						o += exceed;
						g -= exceed;
					}
					priceBuy.total += t;
					priceBuy.own += o;
					priceBuy.gov += g;
				}
			}
			this.price["E-Rent"] = priceRent;
			this.price["E-Buy"] = priceBuy;

			//F code
			rate = payment.rate[this.identity] * 0.01;
			cat = this.items["F"];
			priceRent = { "total": 0, "gov": 0, "own": 0 };
			priceBuy = { "total": 0, "gov": 0, "own": 0 };
			for (var i = 0; i < cat.length; i++) {
				var item = cat[i];
				var p = item[priceKey];
				var t = p * item.num;
				var o = parseInt(p * rate) * item.num;
				var g = t - o;
				if (item.isRent) {
					var exceed = g - item.payForRent;
					if (exceed > 0) {
						o += exceed;
						g -= exceed;
					}
					priceRent.total += t;
					priceRent.own += o;
					priceRent.gov += g;
				} else {
					var exceed = g - item.payForBuy;
					if (exceed > 0) {
						o += exceed;
						g -= exceed;
					}
					priceBuy.total += t;
					priceBuy.own += o;
					priceBuy.gov += g;
				}
			}
			this.price["F-Rent"] = priceRent;
			this.price["F-Buy"] = priceBuy;

			//check payment limit for E,F code
			maxPay = payment.pay[this.careLevel];
			var efBuy = this.price["E-Buy"].gov + this.price["F-Buy"].gov;
			var efRent = this.price["E-Rent"].gov + this.price["F-Rent"].gov;
			var exceed = efBuy - maxPay;
			if (exceed > 0) {
				if (exceed > this.price["F-Buy"].gov) {
					this.price["F-Buy"].own += this.price["F-Buy"].gov;
					exceed -= this.price["F-Buy"].gov;
					this.price["F-Buy"].gov = 0;
				} else {
					this.price["F-Buy"].own += exceed;
					this.price["F-Buy"].gov -= exceed;
					exceed = 0;
				}

				if (exceed > this.price["E-Buy"].gov) {
					this.price["E-Buy"].own += this.price["E-Buy"].gov;
					exceed -= this.price["E-Buy"].gov;
					this.price["E-Buy"].gov = 0;
				} else {
					this.price["E-Buy"].own += exceed;
					this.price["E-Buy"].gov -= exceed;
					exceed = 0;
				}
			}
			var remainPay = maxPay - efBuy;
			if (efRent == 0) this.rentMonth = 36;else if (remainPay < 0) this.rentMonth = 0;else this.rentMonth = (remainPay / efRent).toFixed(2);

			//G code
			payment = this.header.payment[6];
			rate = payment.rate[this.identity] * 0.01;
			cat = this.items["G"];
			price = { "total": 0, "gov": 0, "own": 0 };
			for (var i = 0; i < cat.length; i++) {
				var item = cat[i];
				var p = item[priceKey];
				var t = p * item.num;
				var o = parseInt(p * rate) * item.num;
				var g = t - o;
				price.total += t;
				price.own += o;
				price.gov += g;
			}

			maxPay = payment.pay[this.careLevel];
			if (price.gov > maxPay) {
				var exceed = price.gov - maxPay;
				price.gov -= exceed;
				price.own += exceed;
			}
			this.price["G"] = price;

			//total price summary
			var ts = { "total": 0, "gov": 0, "own": 0 };
			var teb = { "total": 0, "gov": 0, "own": 0 };
			var ter = { "total": 0, "gov": 0, "own": 0 };
			var tr = { "total": 0, "gov": 0, "own": 0 };
			ts.total = this.price["A"].total + this.price["B"].total + this.price["C"].total + this.price["D"].total;
			ts.gov = this.price["A"].gov + this.price["B"].gov + this.price["C"].gov + this.price["D"].gov;
			ts.own = this.price["A"].own + this.price["B"].own + this.price["C"].own + this.price["D"].own;

			teb.total = this.price["E-Buy"].total + this.price["F-Buy"].total;
			teb.gov = this.price["E-Buy"].gov + this.price["F-Buy"].gov;
			teb.own = this.price["E-Buy"].own + this.price["F-Buy"].own;

			ter.total = this.price["E-Rent"].total + this.price["F-Rent"].total;
			ter.gov = this.price["E-Rent"].gov + this.price["F-Rent"].gov;
			ter.own = this.price["E-Rent"].own + this.price["F-Rent"].own;

			tr.total = this.price["G"].total;
			tr.gov = this.price["G"].gov;
			tr.own = this.price["G"].own;

			this.totalPrice.service = ts;
			this.totalPrice.equipBuy = teb;
			this.totalPrice.equipRent = ter;
			this.totalPrice.rest = tr;
		},
		AddService: function () {
			var category = this.header.service[this.mainCategory].code;
			var item = {};
			item.mainCategory = this.mainCategory;
			item.subCategory = this.subCategory;
			item.selectService = this.selectService;
			item.code = this.itemInfo.code;
			item.name = this.itemInfo.name;
			item.num = this.serviceCount;
			switch (category) {
				case "A":case "B":case "C":case "G":
					item.price = this.itemInfo.price;
					item.priceRemote = this.itemInfo.priceRemote;
					break;
				case "D":
					item.price = this.customPrice;
					item.priceRemote = this.customPrice;
					break;
				case "E":case "F":
					item.isRent = this.isRent;
					item.price = this.customPrice;
					item.priceRemote = this.customPrice;
					item.payForRent = this.itemInfo.payForRent;
					item.payForBuy = this.itemInfo.payForBuy;
					break;
			}
			this.items[category].push(item);
			this.items[category].sort(function (a, b) {
				if (a.code < b.code) {
					return -1;
				} else if (a.code > b.code) {
					return 1;
				} else return 0;
			});
			this.UpdatePrice();
		},
		DeleteItem: function (code, index) {
			if (confirm("確定刪除?")) {
				var arr = this.items[code];
				if (!arr || index < 0 || index >= arr.length) return;
				arr.splice(index, 1);
				this.UpdatePrice();
			}
		},
		ClearService: function () {
			this.items = {
				"A": [], "B": [], "C": [], "D": [], "E": [], "F": [], "G": []
			};
			this.UpdatePrice();
		},
		UpdateMainCategory: function () {
			this.subCategory = 0;
			this.selectService = 0;
			this.UpdateItemInfo();
		},
		UpdateSubCategory: function () {
			this.selectService = 0;
			this.UpdateItemInfo();
		},
		UpdateItemInfo: function () {
			this.customPrice = 0;
			this.serviceCount = 1;
			this.itemInfo = this.header.service[this.mainCategory].items[this.subCategory].items[this.selectService];
			var category = this.header.service[this.mainCategory].code;
			if (category == "E" || category == "F") {
				if (this.itemInfo.payForRent == "不適用" && this.isRent == 1) {
					this.isRent = 0;
				} else if (this.itemInfo.payForBuy == "不適用" && this.isRent == 0) {
					this.isRent = 1;
				}
			}
		}
	}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/topbar.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/topbar.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	data: function () {
		return {
			logoImg: "/static/image/logo-text.png",
			menuImg: "/static/image/menu-button.png",
			version: "1.0.0",
			isOpen: false,
			isLogin: false,
			itemInBar: 2,
			itemList: [{ name: "照服計算機", link: "/calculator", login: 0 }, { name: "關於本站", link: "/about", login: 0 }, { name: "新增案例", link: "/create", login: 0 }, { name: "專業連結", link: "/link", login: 0 }, { name: "帳號設定", link: "/setting", login: 1 }, { name: "登入帳號", link: "/login", login: -1 }],
			activeItem: []
		};
	},
	created: function () {
		window.addEventListener('resize', this.OnWinResize);
		this.isLogin = false;
		this.UpdateMenu();
	},
	methods: {
		ToggleMenu: function () {
			this.isOpen = !this.isOpen;
		},
		OnWinResize: function () {
			this.isOpen = false;
		},
		UpdateMenu: function () {
			this.activeItem = [];
			for (var i = 0; i < this.itemList.length; i++) {
				var item = this.itemList[i];
				if (item.login == 1 && !this.isLogin) continue;
				if (item.login == -1 && this.isLogin) continue;
				this.activeItem.push(item);
			}
		}
	}
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/calculator.vue?vue&type=style&index=0&id=34f6f61e&lang=scss&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/calculator.vue?vue&type=style&index=0&id=34f6f61e&lang=scss&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n@charset \"UTF-8\";\n.half-w[data-v-34f6f61e] {\n  display: inline-block;\n  vertical-align: middle;\n  margin: 10px 0px;\n  width: 100%;\n}\n@media only screen and (min-width: 640px) {\n.half-w[data-v-34f6f61e] {\n      width: calc(50% - 20px);\n      margin: 10px;\n}\n}\n.full-w[data-v-34f6f61e] {\n  display: block;\n  margin: 10px 0px;\n  width: 100%;\n}\nhtml[data-v-34f6f61e], body[data-v-34f6f61e] {\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  overflow: visible;\n}\n*[data-v-34f6f61e] {\n  box-sizing: border-box;\n  font-family: \"\\5FAE\\8EDF\\6B63\\9ED1\\9AD4\", \"Microsoft JhengHei\";\n}\n.center[data-v-34f6f61e] {\n  display: block;\n  margin: auto;\n  clear: both;\n  text-align: center;\n}\n.hide[data-v-34f6f61e] {\n  display: none;\n}\n.warning[data-v-34f6f61e] {\n  color: red;\n}\n.bold[data-v-34f6f61e] {\n  font-weight: bold;\n}\n.main-container[data-v-34f6f61e] {\n  width: 100%;\n  margin: 80px auto 20px auto;\n  padding: 10px 10px 50px 10px;\n  color: #333333;\n}\n.main-container .title[data-v-34f6f61e] {\n    font-size: 1.5em;\n    text-align: center;\n    color: red;\n}\n.care-calculator[data-v-34f6f61e] {\n  width: 100%;\n  height: 100%;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.care-calculator a[data-v-34f6f61e] {\n    text-decoration: none;\n    color: #FF6666;\n}\n.care-calculator a[data-v-34f6f61e]:hover {\n      color: #FF3333;\n}\n.care-calculator .cat-A[data-v-34f6f61e] {\n    background-color: #FFA5A4;\n}\n.care-calculator .cat-B[data-v-34f6f61e] {\n    background-color: #FFDE9C;\n}\n.care-calculator .cat-C[data-v-34f6f61e] {\n    background-color: #DEE885;\n}\n.care-calculator .cat-D[data-v-34f6f61e] {\n    background-color: #9FFFBC;\n}\n.care-calculator .cat-E[data-v-34f6f61e] {\n    background-color: #85CAE8;\n}\n.care-calculator .cat-F[data-v-34f6f61e] {\n    background-color: #AF93FF;\n}\n.care-calculator .cat-G[data-v-34f6f61e] {\n    background-color: #C089E8;\n}\n.care-calculator .separator[data-v-34f6f61e] {\n    margin: 30px;\n    border-bottom: 1px solid #999999;\n}\n.care-calculator .comp-header[data-v-34f6f61e] {\n    margin: 10px auto;\n    font-size: 1.6em;\n    text-align: center;\n    padding: 10px;\n    color: #ffffff;\n    background-color: #6A8A82;\n}\n.care-calculator .input-bt[data-v-34f6f61e] {\n    display: inline-block;\n    color: #ffffff;\n    padding: 10px 20px;\n    margin: 10px;\n    background-color: #666666;\n    cursor: pointer;\n    border-radius: 3px;\n}\n.care-calculator .price-panel[data-v-34f6f61e] {\n    max-width: 100%;\n    margin: auto;\n}\n.care-calculator .price-panel .option-container[data-v-34f6f61e] {\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: center;\n      align-items: center;\n}\n.care-calculator .price-panel .price-option[data-v-34f6f61e] {\n      display: inline-block;\n      margin: 10px;\n      padding: 10px;\n      height: 50px;\n      width: 230px;\n      max-width: 100%;\n      text-align: center;\n      background-color: #dddddd;\n}\n.care-calculator .price-panel .price-option select[data-v-34f6f61e] {\n        margin: 0px 10px;\n        padding: 5px;\n}\n.care-calculator .price-panel .price-option input[type=\"checkbox\"][data-v-34f6f61e] {\n        width: 20px;\n        height: 20px;\n        position: relative;\n        top: 3px;\n}\n.care-calculator .price-panel .price-summary[data-v-34f6f61e] {\n      margin: 10px;\n      background-color: #eeeeee;\n      padding: 0px 0px 10px 0px;\n}\n.care-calculator .price-panel .price-summary .sub-header[data-v-34f6f61e] {\n        margin: 10px auto;\n        font-size: 1.2em;\n        text-align: left;\n        padding: 10px;\n        color: #ffffff;\n        background-color: #A4A4BF;\n}\n.care-calculator .price-panel .price-summary .price-category[data-v-34f6f61e] {\n        display: inline-block;\n        margin: 10px;\n        padding: 10px;\n        border-radius: 3px;\n}\n.care-calculator .price-panel .price-summary .price-limit[data-v-34f6f61e] {\n        display: inline-block;\n        margin: 10px;\n}\n.care-calculator .price-panel .price-final[data-v-34f6f61e] {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      flex-wrap: wrap;\n      font-size: 1.5em;\n}\n.care-calculator .price-panel .price-final .price-type[data-v-34f6f61e] {\n        padding: 10px;\n        border-bottom: 1px solid #BE9063;\n}\n.care-calculator .price-panel .price-final .final-item[data-v-34f6f61e] {\n        color: #333333;\n        padding: 10px;\n}\n.care-calculator .price-panel .remark[data-v-34f6f61e] {\n      margin: 10px;\n      text-align: center;\n      font-size: 1em;\n      color: red;\n}\n.care-calculator .service-list[data-v-34f6f61e] {\n    background-color: #eeeeee;\n    padding-bottom: 100px;\n    margin-bottom: 10px;\n}\n.care-calculator .service-list .remark[data-v-34f6f61e] {\n      font-size: 1em;\n      text-align: center;\n      margin: 10px;\n}\n.care-calculator .service-list .service-item[data-v-34f6f61e] {\n      border-radius: 3px;\n}\n.care-calculator .service-list .service-item .item-title[data-v-34f6f61e] {\n        padding: 10px;\n        font-size: 1.2em;\n        font-weight: bold;\n        border-bottom: 1px solid #eeeeee;\n}\n.care-calculator .service-list .service-item .item-attr[data-v-34f6f61e] {\n        display: inline-block;\n        margin: 10px;\n        font-size: 1.2em;\n}\n.care-calculator .service-list .service-item .item-bt-container[data-v-34f6f61e] {\n        padding: 10px;\n        display: flex;\n        justify-content: flex-end;\n        align-items: center;\n        flex-wrap: wrap;\n}\n.care-calculator .service-list .service-item .item-bt[data-v-34f6f61e] {\n        display: inline-block;\n        margin: 0px 0px 0px 10px;\n        padding: 5px 10px;\n        cursor: pointer;\n        background-color: #eeeeee;\n        color: #333333;\n        border-radius: 3px;\n}\n.care-calculator .service-list .service-item .item-bt[data-v-34f6f61e]:hover {\n          background-color: #dddddd;\n}\n.care-calculator .input-panel[data-v-34f6f61e] {\n    position: fixed;\n    bottom: 0px;\n    left: 0px;\n    width: 100%;\n    padding: 10px;\n    border-radius: 3px 3px 0px 0px;\n    border-top: 1px solid #cccccc;\n    background-color: rgba(150, 150, 180, 0.9);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-wrap: wrap;\n    overflow-x: auto;\n}\n.care-calculator .input-panel .category-option[data-v-34f6f61e] {\n      text-align: center;\n}\n.care-calculator .input-panel .category-option .cat-title[data-v-34f6f61e] {\n        display: inline-block;\n        color: white;\n}\n.care-calculator .input-panel .category-option select[data-v-34f6f61e] {\n        padding: 5px;\n        margin: 5px;\n        border-radius: 3px;\n}\n.care-calculator .input-panel .category-option input[type=\"number\"][data-v-34f6f61e] {\n        padding: 5px;\n        border-radius: 3px;\n        max-width: 80px;\n}\n.care-calculator .input-panel .action-bt[data-v-34f6f61e] {\n      display: inline-block;\n      cursor: pointer;\n      padding: 5px 10px;\n      margin: 10px;\n      background-color: #eeeeee;\n      color: #333333;\n      border-radius: 3px;\n}\n.care-calculator .input-panel .action-bt[data-v-34f6f61e]:hover {\n        background-color: #dddddd;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/topbar.vue?vue&type=style&index=0&id=45447dba&lang=scss&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/topbar.vue?vue&type=style&index=0&id=45447dba&lang=scss&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n@charset \"UTF-8\";\n.half-w[data-v-45447dba] {\n  display: inline-block;\n  vertical-align: middle;\n  margin: 10px 0px;\n  width: 100%;\n}\n@media only screen and (min-width: 640px) {\n.half-w[data-v-45447dba] {\n      width: calc(50% - 20px);\n      margin: 10px;\n}\n}\n.full-w[data-v-45447dba] {\n  display: block;\n  margin: 10px 0px;\n  width: 100%;\n}\nhtml[data-v-45447dba], body[data-v-45447dba] {\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  overflow: visible;\n}\n*[data-v-45447dba] {\n  box-sizing: border-box;\n  font-family: \"\\5FAE\\8EDF\\6B63\\9ED1\\9AD4\", \"Microsoft JhengHei\";\n}\n.center[data-v-45447dba] {\n  display: block;\n  margin: auto;\n  clear: both;\n  text-align: center;\n}\n.hide[data-v-45447dba] {\n  display: none;\n}\n.warning[data-v-45447dba] {\n  color: red;\n}\n.bold[data-v-45447dba] {\n  font-weight: bold;\n}\n.main-container[data-v-45447dba] {\n  width: 100%;\n  margin: 80px auto 20px auto;\n  padding: 10px 10px 50px 10px;\n  color: #333333;\n}\n.main-container .title[data-v-45447dba] {\n    font-size: 1.5em;\n    text-align: center;\n    color: red;\n}\n.topbar[data-v-45447dba] {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 70px;\n  padding: 10px;\n  box-shadow: 0px 2px 5px #888;\n  background-color: #eeeeee;\n  z-index: 10;\n}\n.topbar .logo[data-v-45447dba] {\n    position: absolute;\n    top: 10px;\n    left: 20px;\n    width: 200px;\n    height: 50px;\n}\n.topbar .logo img[data-v-45447dba] {\n      width: 100%;\n      cursor: pointer;\n}\n.topbar .menu-bt[data-v-45447dba] {\n    display: block;\n    position: absolute;\n    top: 10px;\n    right: 20px;\n    height: 50px;\n    cursor: pointer;\n}\n.topbar .menu-bt[data-v-45447dba]:hover {\n      -webkit-filter: brightness(50%);\n      filter: brightness(50%);\n}\n.topbar .bt-container[data-v-45447dba] {\n    height: 100%;\n    position: absolute;\n    top: 0px;\n    right: 80px;\n    display: none;\n}\n@media only screen and (min-width: 640px) {\n.topbar .bt-container[data-v-45447dba] {\n        display: flex;\n        justify-content: flex-end;\n        align-items: center;\n}\n}\n.topbar .bt-container .bt[data-v-45447dba] {\n      font-size: 1.2em;\n      display: inline-block;\n      padding: 5px 10px;\n      margin: 5px 10px;\n      text-align: center;\n      color: #333333;\n      cursor: pointer;\n}\n.topbar .bt-container .bt[data-v-45447dba]:hover {\n        color: #BE9063;\n        border-bottom: 2px solid #BE9063;\n}\n.menu-container[data-v-45447dba] {\n  position: fixed;\n  left: 0px;\n  top: 70px;\n  display: none;\n  width: 100%;\n  padding: 10px 20px;\n  margin: 0px;\n  list-style-type: none;\n  box-shadow: 0px 2px 4px 0px #888;\n  background-color: #f8f8f8;\n  font-size: 1.25em;\n  color: #333333;\n  z-index: 9;\n}\n.menu-container.open[data-v-45447dba] {\n    display: block;\n}\n.menu-container li[data-v-45447dba] {\n    padding: 10px 0px;\n    border-bottom: 1px solid #BE9063;\n}\n.menu-container li a[data-v-45447dba] {\n      display: block;\n      color: #333333;\n      text-decoration: none;\n}\n.menu-container li[data-v-45447dba]:last-of-type {\n      border: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/calculator.vue?vue&type=style&index=0&id=34f6f61e&lang=scss&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/calculator.vue?vue&type=style&index=0&id=34f6f61e&lang=scss&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib??vue-loader-options!./calculator.vue?vue&type=style&index=0&id=34f6f61e&lang=scss&scoped=true */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/calculator.vue?vue&type=style&index=0&id=34f6f61e&lang=scss&scoped=true");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/topbar.vue?vue&type=style&index=0&id=45447dba&lang=scss&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/topbar.vue?vue&type=style&index=0&id=45447dba&lang=scss&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib??vue-loader-options!./topbar.vue?vue&type=style&index=0&id=45447dba&lang=scss&scoped=true */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/topbar.vue?vue&type=style&index=0&id=45447dba&lang=scss&scoped=true");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/calculator.vue?vue&type=template&id=34f6f61e&scoped=true&lang=html":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/calculator.vue?vue&type=template&id=34f6f61e&scoped=true&lang=html ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "care-calculator" }, [
    _c("div", { staticClass: "price-panel" }, [
      _c("div", { staticClass: "comp-header" }, [_vm._v("照服計算機")]),
      _vm._v(" "),
      _c("div", { staticClass: "option-container" }, [
        _c("div", { staticClass: "price-option" }, [
          _vm._v("\r\n\t\t\t\t補助身份\r\n\t\t\t\t"),
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.identity,
                  expression: "identity"
                }
              ],
              on: {
                change: [
                  function($event) {
                    var $$selectedVal = Array.prototype.filter
                      .call($event.target.options, function(o) {
                        return o.selected
                      })
                      .map(function(o) {
                        var val = "_value" in o ? o._value : o.value
                        return val
                      })
                    _vm.identity = $event.target.multiple
                      ? $$selectedVal
                      : $$selectedVal[0]
                  },
                  function($event) {
                    _vm.UpdatePrice()
                  }
                ]
              }
            },
            [
              _c("option", { attrs: { value: "0" } }, [_vm._v("低收入戶")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "1" } }, [_vm._v("中低收入戶")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "2" } }, [_vm._v("一般戶")])
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "price-option" }, [
          _vm._v("\r\n\t\t\t\t長照需要等級\r\n\t\t\t\t"),
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.careLevel,
                  expression: "careLevel"
                }
              ],
              on: {
                change: [
                  function($event) {
                    var $$selectedVal = Array.prototype.filter
                      .call($event.target.options, function(o) {
                        return o.selected
                      })
                      .map(function(o) {
                        var val = "_value" in o ? o._value : o.value
                        return val
                      })
                    _vm.careLevel = $event.target.multiple
                      ? $$selectedVal
                      : $$selectedVal[0]
                  },
                  function($event) {
                    _vm.UpdatePrice()
                  }
                ]
              }
            },
            [
              _c("option", { attrs: { value: "0" } }, [_vm._v("第一級")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "1" } }, [_vm._v("第二級")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "2" } }, [_vm._v("第三級")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "3" } }, [_vm._v("第四級")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "4" } }, [_vm._v("第五級")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "5" } }, [_vm._v("第六級")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "6" } }, [_vm._v("第七級")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "7" } }, [_vm._v("第八級")])
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "price-option" }, [
          _vm._v("\r\n\t\t\t\t交通接送分類\r\n\t\t\t\t"),
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.transportLevel,
                  expression: "transportLevel"
                }
              ],
              on: {
                change: [
                  function($event) {
                    var $$selectedVal = Array.prototype.filter
                      .call($event.target.options, function(o) {
                        return o.selected
                      })
                      .map(function(o) {
                        var val = "_value" in o ? o._value : o.value
                        return val
                      })
                    _vm.transportLevel = $event.target.multiple
                      ? $$selectedVal
                      : $$selectedVal[0]
                  },
                  function($event) {
                    _vm.UpdatePrice()
                  }
                ]
              }
            },
            [
              _c("option", { attrs: { value: "0" } }, [_vm._v("第一類")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "1" } }, [_vm._v("第二類")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "2" } }, [_vm._v("第三類")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "3" } }, [_vm._v("第四類")])
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "price-option" }, [
          _vm._v("\r\n\t\t\t\t原民區或離島\r\n\t\t\t\t"),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.remoteArea,
                expression: "remoteArea"
              }
            ],
            attrs: { type: "checkbox" },
            domProps: {
              checked: Array.isArray(_vm.remoteArea)
                ? _vm._i(_vm.remoteArea, null) > -1
                : _vm.remoteArea
            },
            on: {
              change: [
                function($event) {
                  var $$a = _vm.remoteArea,
                    $$el = $event.target,
                    $$c = $$el.checked ? true : false
                  if (Array.isArray($$a)) {
                    var $$v = null,
                      $$i = _vm._i($$a, $$v)
                    if ($$el.checked) {
                      $$i < 0 && (_vm.remoteArea = $$a.concat([$$v]))
                    } else {
                      $$i > -1 &&
                        (_vm.remoteArea = $$a
                          .slice(0, $$i)
                          .concat($$a.slice($$i + 1)))
                    }
                  } else {
                    _vm.remoteArea = $$c
                  }
                },
                function($event) {
                  _vm.UpdatePrice()
                }
              ]
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "separator" }),
      _vm._v(" "),
      _c("div", { staticClass: "price-final" }, [
        _c("div", { staticClass: "price-type" }, [_vm._v("服務費用(月)")]),
        _vm._v(" "),
        _c("div", { staticClass: "final-item" }, [
          _vm._v("總額: " + _vm._s(_vm.totalPrice.service.total) + " 元")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "final-item" }, [
          _vm._v("補助: " + _vm._s(_vm.totalPrice.service.gov) + " 元")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "final-item" }, [
          _vm._v("自費: " + _vm._s(_vm.totalPrice.service.own) + " 元")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "price-final" }, [
        _c("div", { staticClass: "price-type" }, [_vm._v("輔具/設施購買")]),
        _vm._v(" "),
        _c("div", { staticClass: "final-item" }, [
          _vm._v("總額: " + _vm._s(_vm.totalPrice.equipBuy.total) + " 元")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "final-item" }, [
          _vm._v("補助: " + _vm._s(_vm.totalPrice.equipBuy.gov) + " 元")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "final-item" }, [
          _vm._v("自費: " + _vm._s(_vm.totalPrice.equipBuy.own) + " 元")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "price-final" }, [
        _c("div", { staticClass: "price-type" }, [_vm._v("輔具/設施租賃(月)")]),
        _vm._v(" "),
        _c("div", { staticClass: "final-item" }, [
          _vm._v("總額: " + _vm._s(_vm.totalPrice.equipRent.total) + " 元")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "final-item" }, [
          _vm._v("補助: " + _vm._s(_vm.totalPrice.equipRent.gov) + " 元")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "final-item" }, [
          _vm._v("自費: " + _vm._s(_vm.totalPrice.equipRent.own) + " 元")
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.rentMonth < 36,
              expression: "rentMonth < 36"
            }
          ],
          staticClass: "remark"
        },
        [_vm._v("剩餘額度僅可支持租賃補助 " + _vm._s(_vm.rentMonth) + " 個月")]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "price-final" }, [
        _c("div", { staticClass: "price-type" }, [_vm._v("喘息服務(年)")]),
        _vm._v(" "),
        _c("div", { staticClass: "final-item" }, [
          _vm._v("總額: " + _vm._s(_vm.totalPrice.rest.total) + " 元")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "final-item" }, [
          _vm._v("補助: " + _vm._s(_vm.totalPrice.rest.gov) + " 元")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "final-item" }, [
          _vm._v("自費: " + _vm._s(_vm.totalPrice.rest.own) + " 元")
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "input-bt",
          on: {
            click: function($event) {
              _vm.ClearService()
            }
          }
        },
        [_vm._v("全部重設")]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "price-summary" }, [
        _c("div", { staticClass: "sub-header" }, [_vm._v("服務金額")]),
        _vm._v(" "),
        _c("div", { staticClass: "price-category cat-A" }, [
          _vm._v(
            "\r\n\t\t\t\tA碼: " + _vm._s(_vm.price["A"].total) + " 元\r\n\t\t\t"
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "price-category cat-B" }, [
          _vm._v(
            "\r\n\t\t\t\tB碼: " + _vm._s(_vm.price["B"].total) + " 元\r\n\t\t\t"
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "price-category cat-C" }, [
          _vm._v(
            "\r\n\t\t\t\tC碼: " + _vm._s(_vm.price["C"].total) + " 元\r\n\t\t\t"
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "price-category cat-D" }, [
          _vm._v(
            "\r\n\t\t\t\tD碼: " + _vm._s(_vm.price["D"].total) + " 元\r\n\t\t\t"
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "price-category cat-E" }, [
          _vm._v(
            "\r\n\t\t\t\tE碼(租賃): " +
              _vm._s(_vm.price["E-Rent"].total) +
              " 元\r\n\t\t\t"
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "price-category cat-E" }, [
          _vm._v(
            "\r\n\t\t\t\tE碼(購買): " +
              _vm._s(_vm.price["E-Buy"].total) +
              " 元\r\n\t\t\t"
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "price-category cat-F" }, [
          _vm._v(
            "\r\n\t\t\t\tF碼(租賃): " +
              _vm._s(_vm.price["F-Rent"].total) +
              " 元\r\n\t\t\t"
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "price-category cat-F" }, [
          _vm._v(
            "\r\n\t\t\t\tF碼(購買): " +
              _vm._s(_vm.price["F-Buy"].total) +
              " 元\r\n\t\t\t"
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "price-category cat-G" }, [
          _vm._v(
            "\r\n\t\t\t\tG碼: " + _vm._s(_vm.price["G"].total) + " 元\r\n\t\t\t"
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "price-summary" }, [
        _c("div", { staticClass: "sub-header" }, [_vm._v("補助金額")]),
        _vm._v(" "),
        _vm.header.payment
          ? _c("div", [
              _c("div", { staticClass: "price-limit" }, [
                _vm._v(
                  "B+C碼額度: " +
                    _vm._s(_vm.header.payment[0].pay[_vm.careLevel]) +
                    " 元/月"
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "price-limit" }, [
                _vm._v(
                  "D碼額度: " +
                    _vm._s(
                      _vm.header.payment[parseInt(_vm.transportLevel) + 1].pay[
                        _vm.careLevel
                      ]
                    ) +
                    " 元/月"
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "price-limit" }, [
                _vm._v(
                  "E+F碼額度: " +
                    _vm._s(_vm.header.payment[5].pay[_vm.careLevel]) +
                    " 元/3年"
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "price-limit" }, [
                _vm._v(
                  "G碼額度: " +
                    _vm._s(_vm.header.payment[6].pay[_vm.careLevel]) +
                    " 元/年"
                )
              ])
            ])
          : _vm._e(),
        _vm._v(" "),
        _c("div", { staticClass: "price-category cat-A" }, [
          _vm._v(
            "\r\n\t\t\t\tA碼: " + _vm._s(_vm.price["A"].gov) + " 元\r\n\t\t\t"
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "price-category cat-B" }, [
          _vm._v(
            "\r\n\t\t\t\tB碼: " + _vm._s(_vm.price["B"].gov) + " 元\r\n\t\t\t"
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "price-category cat-C" }, [
          _vm._v(
            "\r\n\t\t\t\tC碼: " + _vm._s(_vm.price["C"].gov) + " 元\r\n\t\t\t"
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "price-category cat-D" }, [
          _vm._v(
            "\r\n\t\t\t\tD碼: " + _vm._s(_vm.price["D"].gov) + " 元\r\n\t\t\t"
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "price-category cat-E" }, [
          _vm._v(
            "\r\n\t\t\t\tE碼(租賃): " +
              _vm._s(_vm.price["E-Rent"].gov) +
              " 元\r\n\t\t\t"
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "price-category cat-E" }, [
          _vm._v(
            "\r\n\t\t\t\tE碼(購買): " +
              _vm._s(_vm.price["E-Buy"].gov) +
              " 元\r\n\t\t\t"
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "price-category cat-F" }, [
          _vm._v(
            "\r\n\t\t\t\tF碼(租賃): " +
              _vm._s(_vm.price["F-Rent"].gov) +
              " 元\r\n\t\t\t"
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "price-category cat-F" }, [
          _vm._v(
            "\r\n\t\t\t\tF碼(購買): " +
              _vm._s(_vm.price["F-Buy"].gov) +
              " 元\r\n\t\t\t"
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "price-category cat-G" }, [
          _vm._v(
            "\r\n\t\t\t\tG碼: " + _vm._s(_vm.price["G"].gov) + " 元\r\n\t\t\t"
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "price-summary" }, [
        _c("div", { staticClass: "sub-header" }, [_vm._v("自費金額")]),
        _vm._v(" "),
        _vm.header.payment
          ? _c("div", [
              _c("div", { staticClass: "price-limit" }, [
                _vm._v(
                  "B+C碼自費比例: " +
                    _vm._s(_vm.header.payment[0].rate[_vm.identity]) +
                    " %"
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "price-limit" }, [
                _vm._v(
                  "D碼自費比例: " +
                    _vm._s(
                      _vm.header.payment[parseInt(_vm.transportLevel) + 1].rate[
                        _vm.identity
                      ]
                    ) +
                    " %"
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "price-limit" }, [
                _vm._v(
                  "E+F碼自費比例: " +
                    _vm._s(_vm.header.payment[5].rate[_vm.identity]) +
                    " %"
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "price-limit" }, [
                _vm._v(
                  "G碼自費比例: " +
                    _vm._s(_vm.header.payment[6].rate[_vm.identity]) +
                    " %"
                )
              ])
            ])
          : _vm._e(),
        _vm._v(" "),
        _c("div", { staticClass: "price-category cat-A" }, [
          _vm._v(
            "\r\n\t\t\t\tA碼: " + _vm._s(_vm.price["A"].own) + " 元\r\n\t\t\t"
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "price-category cat-B" }, [
          _vm._v(
            "\r\n\t\t\t\tB碼: " + _vm._s(_vm.price["B"].own) + " 元\r\n\t\t\t"
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "price-category cat-C" }, [
          _vm._v(
            "\r\n\t\t\t\tC碼: " + _vm._s(_vm.price["C"].own) + " 元\r\n\t\t\t"
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "price-category cat-D" }, [
          _vm._v(
            "\r\n\t\t\t\tD碼: " + _vm._s(_vm.price["D"].own) + " 元\r\n\t\t\t"
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "price-category cat-E" }, [
          _vm._v(
            "\r\n\t\t\t\tE碼(租賃): " +
              _vm._s(_vm.price["E-Rent"].own) +
              " 元\r\n\t\t\t"
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "price-category cat-E" }, [
          _vm._v(
            "\r\n\t\t\t\tE碼(購買): " +
              _vm._s(_vm.price["E-Buy"].own) +
              " 元\r\n\t\t\t"
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "price-category cat-F" }, [
          _vm._v(
            "\r\n\t\t\t\tF碼(租賃): " +
              _vm._s(_vm.price["F-Rent"].own) +
              " 元\r\n\t\t\t"
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "price-category cat-F" }, [
          _vm._v(
            "\r\n\t\t\t\tF碼(購買): " +
              _vm._s(_vm.price["F-Buy"].own) +
              " 元\r\n\t\t\t"
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "price-category cat-G" }, [
          _vm._v(
            "\r\n\t\t\t\tG碼: " + _vm._s(_vm.price["G"].own) + " 元\r\n\t\t\t"
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "service-list" },
      [
        _c("div", { staticClass: "comp-header" }, [_vm._v("服務套餐")]),
        _vm._v(" "),
        _vm._m(0),
        _vm._v(" "),
        _vm._l(_vm.items["A"], function(item, i) {
          return _c("div", { staticClass: "service-item cat-A half-w" }, [
            _c("div", { staticClass: "item-title" }, [
              _vm._v(_vm._s(item.code) + " " + _vm._s(item.name))
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.remoteArea == false,
                    expression: "remoteArea == false"
                  }
                ],
                staticClass: "item-attr"
              },
              [_vm._v("一般價格: " + _vm._s(item.price) + " 元")]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.remoteArea == true,
                    expression: "remoteArea == true"
                  }
                ],
                staticClass: "item-attr"
              },
              [_vm._v("原民區或離島價格: " + _vm._s(item.priceRemote) + " 元")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "item-attr" }, [
              _vm._v("數量: " + _vm._s(item.num))
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "item-attr" }, [
              _vm._v("總價: " + _vm._s(item.price * item.num) + " 元")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "item-bt-container" }, [
              _c(
                "div",
                {
                  staticClass: "item-bt",
                  on: {
                    click: function($event) {
                      _vm.DeleteItem("A", i)
                    }
                  }
                },
                [_vm._v("刪除")]
              )
            ])
          ])
        }),
        _vm._v(" "),
        _vm._l(_vm.items["B"], function(item, i) {
          return _c("div", { staticClass: "service-item cat-B half-w" }, [
            _c("div", { staticClass: "item-title" }, [
              _vm._v(_vm._s(item.code) + " " + _vm._s(item.name))
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.remoteArea == false,
                    expression: "remoteArea == false"
                  }
                ],
                staticClass: "item-attr"
              },
              [_vm._v("一般價格: " + _vm._s(item.price) + " 元")]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.remoteArea == true,
                    expression: "remoteArea == true"
                  }
                ],
                staticClass: "item-attr"
              },
              [_vm._v("原民區或離島價格: " + _vm._s(item.priceRemote) + " 元")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "item-attr" }, [
              _vm._v("數量: " + _vm._s(item.num))
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "item-attr" }, [
              _vm._v("總價: " + _vm._s(item.price * item.num) + " 元")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "item-bt-container" }, [
              _c(
                "div",
                {
                  staticClass: "item-bt",
                  on: {
                    click: function($event) {
                      _vm.DeleteItem("B", i)
                    }
                  }
                },
                [_vm._v("刪除")]
              )
            ])
          ])
        }),
        _vm._v(" "),
        _vm._l(_vm.items["C"], function(item, i) {
          return _c("div", { staticClass: "service-item cat-C half-w" }, [
            _c("div", { staticClass: "item-title" }, [
              _vm._v(_vm._s(item.code) + " " + _vm._s(item.name))
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.remoteArea == false,
                    expression: "remoteArea == false"
                  }
                ],
                staticClass: "item-attr"
              },
              [_vm._v("一般價格: " + _vm._s(item.price) + " 元")]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.remoteArea == true,
                    expression: "remoteArea == true"
                  }
                ],
                staticClass: "item-attr"
              },
              [_vm._v("原民區或離島價格: " + _vm._s(item.priceRemote) + " 元")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "item-attr" }, [
              _vm._v("數量: " + _vm._s(item.num))
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "item-attr" }, [
              _vm._v("總價: " + _vm._s(item.price * item.num) + " 元")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "item-bt-container" }, [
              _c(
                "div",
                {
                  staticClass: "item-bt",
                  on: {
                    click: function($event) {
                      _vm.DeleteItem("C", i)
                    }
                  }
                },
                [_vm._v("刪除")]
              )
            ])
          ])
        }),
        _vm._v(" "),
        _vm._l(_vm.items["D"], function(item, i) {
          return _c("div", { staticClass: "service-item cat-D half-w" }, [
            _c("div", { staticClass: "item-title" }, [
              _vm._v(_vm._s(item.code) + " " + _vm._s(item.name))
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "item-attr" }, [
              _vm._v("縣市核定價格: " + _vm._s(item.price) + " 元")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "item-attr" }, [
              _vm._v("數量: " + _vm._s(item.num))
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "item-attr" }, [
              _vm._v("總價: " + _vm._s(item.price * item.num) + " 元")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "item-bt-container" }, [
              _c(
                "div",
                {
                  staticClass: "item-bt",
                  on: {
                    click: function($event) {
                      _vm.DeleteItem("D", i)
                    }
                  }
                },
                [_vm._v("刪除")]
              )
            ])
          ])
        }),
        _vm._v(" "),
        _vm._l(_vm.items["E"], function(item, i) {
          return _c("div", { staticClass: "service-item cat-E half-w" }, [
            _c("div", { staticClass: "item-title" }, [
              _vm._v(_vm._s(item.code) + " " + _vm._s(item.name))
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: item.isRent == 0,
                    expression: "item.isRent == 0"
                  }
                ],
                staticClass: "item-attr"
              },
              [_vm._v("購買價格: " + _vm._s(item.price) + " 元")]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: item.isRent == 0,
                    expression: "item.isRent == 0"
                  }
                ],
                staticClass: "item-attr"
              },
              [_vm._v("購買給付上限: " + _vm._s(item.payForBuy) + " 元")]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: item.isRent == 1,
                    expression: "item.isRent == 1"
                  }
                ],
                staticClass: "item-attr"
              },
              [_vm._v("租賃價格: " + _vm._s(item.price) + " 元")]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: item.isRent == 1,
                    expression: "item.isRent == 1"
                  }
                ],
                staticClass: "item-attr"
              },
              [_vm._v("租賃給付上限: " + _vm._s(item.payForRent) + " 元")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "item-attr" }, [
              _vm._v("數量: " + _vm._s(item.num))
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "item-attr" }, [
              _vm._v("總價: " + _vm._s(item.price * item.num) + " 元")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "item-bt-container" }, [
              _c(
                "div",
                {
                  staticClass: "item-bt",
                  on: {
                    click: function($event) {
                      _vm.DeleteItem("E", i)
                    }
                  }
                },
                [_vm._v("刪除")]
              )
            ])
          ])
        }),
        _vm._v(" "),
        _vm._l(_vm.items["F"], function(item, i) {
          return _c("div", { staticClass: "service-item cat-F half-w" }, [
            _c("div", { staticClass: "item-title" }, [
              _vm._v(_vm._s(item.code) + " " + _vm._s(item.name))
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: item.isRent == 0,
                    expression: "item.isRent == 0"
                  }
                ],
                staticClass: "item-attr"
              },
              [_vm._v("購買價格: " + _vm._s(item.price) + " 元")]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: item.isRent == 0,
                    expression: "item.isRent == 0"
                  }
                ],
                staticClass: "item-attr"
              },
              [_vm._v("購買給付上限: " + _vm._s(item.payForBuy) + " 元")]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: item.isRent == 1,
                    expression: "item.isRent == 1"
                  }
                ],
                staticClass: "item-attr"
              },
              [_vm._v("租賃價格: " + _vm._s(item.price) + " 元")]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: item.isRent == 1,
                    expression: "item.isRent == 1"
                  }
                ],
                staticClass: "item-attr"
              },
              [_vm._v("租賃給付上限: " + _vm._s(item.payForRent) + " 元")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "item-attr" }, [
              _vm._v("數量: " + _vm._s(item.num))
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "item-attr" }, [
              _vm._v("總價: " + _vm._s(item.price * item.num) + " 元")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "item-bt-container" }, [
              _c(
                "div",
                {
                  staticClass: "item-bt",
                  on: {
                    click: function($event) {
                      _vm.DeleteItem("F", i)
                    }
                  }
                },
                [_vm._v("刪除")]
              )
            ])
          ])
        }),
        _vm._v(" "),
        _vm._l(_vm.items["G"], function(item, i) {
          return _c("div", { staticClass: "service-item cat-G half-w" }, [
            _c("div", { staticClass: "item-title" }, [
              _vm._v(_vm._s(item.code) + " " + _vm._s(item.name))
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.remoteArea == false,
                    expression: "remoteArea == false"
                  }
                ],
                staticClass: "item-attr"
              },
              [_vm._v("一般價格: " + _vm._s(item.price) + " 元")]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.remoteArea == true,
                    expression: "remoteArea == true"
                  }
                ],
                staticClass: "item-attr"
              },
              [_vm._v("原民區或離島價格: " + _vm._s(item.priceRemote) + " 元")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "item-attr" }, [
              _vm._v("數量: " + _vm._s(item.num))
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "item-attr" }, [
              _vm._v("總價: " + _vm._s(item.price * item.num) + " 元")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "item-bt-container" }, [
              _c(
                "div",
                {
                  staticClass: "item-bt",
                  on: {
                    click: function($event) {
                      _vm.DeleteItem("G", i)
                    }
                  }
                },
                [_vm._v("刪除")]
              )
            ])
          ])
        })
      ],
      2
    ),
    _vm._v(" "),
    _c("div", { staticClass: "input-panel" }, [
      _c("div", { staticClass: "category-option" }, [
        _c("div", { staticClass: "cat-title" }, [_vm._v("主類")]),
        _vm._v(" "),
        _c(
          "select",
          {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.mainCategory,
                expression: "mainCategory"
              }
            ],
            on: {
              change: [
                function($event) {
                  var $$selectedVal = Array.prototype.filter
                    .call($event.target.options, function(o) {
                      return o.selected
                    })
                    .map(function(o) {
                      var val = "_value" in o ? o._value : o.value
                      return val
                    })
                  _vm.mainCategory = $event.target.multiple
                    ? $$selectedVal
                    : $$selectedVal[0]
                },
                function($event) {
                  _vm.UpdateMainCategory()
                }
              ]
            }
          },
          _vm._l(_vm.header.service, function(s, i) {
            return _c("option", { domProps: { value: i } }, [
              _vm._v(_vm._s(s.code) + " " + _vm._s(s.name))
            ])
          })
        )
      ]),
      _vm._v(" "),
      _vm.header.service &&
      _vm.header.service[_vm.mainCategory].items.length > 1
        ? _c("div", { staticClass: "category-option" }, [
            _c("div", { staticClass: "cat-title" }, [_vm._v("子類")]),
            _vm._v(" "),
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.subCategory,
                    expression: "subCategory"
                  }
                ],
                on: {
                  change: [
                    function($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function(o) {
                          return o.selected
                        })
                        .map(function(o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.subCategory = $event.target.multiple
                        ? $$selectedVal
                        : $$selectedVal[0]
                    },
                    function($event) {
                      _vm.UpdateSubCategory()
                    }
                  ]
                }
              },
              _vm._l(_vm.header.service[_vm.mainCategory].items, function(
                s,
                i
              ) {
                return _c("option", { domProps: { value: i } }, [
                  _vm._v(_vm._s(s.code) + " " + _vm._s(s.name))
                ])
              })
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.header.service
        ? _c("div", { staticClass: "category-option" }, [
            _c("div", { staticClass: "cat-title" }, [_vm._v("項目")]),
            _vm._v(" "),
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.selectService,
                    expression: "selectService"
                  }
                ],
                on: {
                  change: [
                    function($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function(o) {
                          return o.selected
                        })
                        .map(function(o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.selectService = $event.target.multiple
                        ? $$selectedVal
                        : $$selectedVal[0]
                    },
                    function($event) {
                      _vm.UpdateItemInfo()
                    }
                  ]
                }
              },
              _vm._l(
                _vm.header.service[_vm.mainCategory].items[_vm.subCategory]
                  .items,
                function(s, i) {
                  return _c("option", { domProps: { value: i } }, [
                    _vm._v(_vm._s(s.code) + " " + _vm._s(s.name))
                  ])
                }
              )
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.mainCategory == 4 || _vm.mainCategory == 5
        ? _c("div", { staticClass: "category-option" }, [
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.isRent,
                    expression: "isRent"
                  }
                ],
                on: {
                  change: function($event) {
                    var $$selectedVal = Array.prototype.filter
                      .call($event.target.options, function(o) {
                        return o.selected
                      })
                      .map(function(o) {
                        var val = "_value" in o ? o._value : o.value
                        return val
                      })
                    _vm.isRent = $event.target.multiple
                      ? $$selectedVal
                      : $$selectedVal[0]
                  }
                }
              },
              [
                _c(
                  "option",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.itemInfo.payForBuy !== "不適用",
                        expression: "itemInfo.payForBuy !== '不適用' "
                      }
                    ],
                    attrs: { value: "0" }
                  },
                  [_vm._v("購買")]
                ),
                _vm._v(" "),
                _c(
                  "option",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.itemInfo.payForRent !== "不適用",
                        expression: "itemInfo.payForRent !== '不適用' "
                      }
                    ],
                    attrs: { value: "1" }
                  },
                  [_vm._v("租賃")]
                )
              ]
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.mainCategory == 3 || _vm.mainCategory == 4 || _vm.mainCategory == 5
        ? _c("div", { staticClass: "category-option" }, [
            _c("div", { staticClass: "cat-title" }, [_vm._v("價格")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.customPrice,
                  expression: "customPrice"
                }
              ],
              attrs: { type: "number", min: "1" },
              domProps: { value: _vm.customPrice },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.customPrice = $event.target.value
                }
              }
            })
          ])
        : _vm._e(),
      _vm._v(" "),
      _c("div", { staticClass: "category-option" }, [
        _c("div", { staticClass: "cat-title" }, [_vm._v("數量")]),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.serviceCount,
              expression: "serviceCount"
            }
          ],
          attrs: { type: "number", min: "1", max: "100" },
          domProps: { value: _vm.serviceCount },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.serviceCount = $event.target.value
            }
          }
        })
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "action-bt",
          on: {
            click: function($event) {
              _vm.AddService()
            }
          }
        },
        [_vm._v("新增")]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "remark" }, [
      _vm._v("*照服計算機 之計算方式依 "),
      _c(
        "a",
        {
          attrs: {
            href:
              "https://www.health.ntpc.gov.tw/archive/health_ntpc/6/file/107%E5%B9%B4%E5%BA%A6%E7%B5%A6%E4%BB%98%E5%8F%8A%E6%94%AF%E4%BB%98%E5%9F%BA%E6%BA%96.pdf",
            target: "_blank"
          }
        },
        [_vm._v("107年度給付及支付基準")]
      ),
      _vm._v(" 設定，詳細說明請見該連結。")
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/topbar.vue?vue&type=template&id=45447dba&scoped=true&lang=html":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/topbar.vue?vue&type=template&id=45447dba&scoped=true&lang=html ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "topbar" }, [
      _c("a", { staticClass: "logo", attrs: { href: "/" } }, [
        _c("img", { attrs: { src: _vm.logoImg + "?v=" + _vm.version } })
      ]),
      _vm._v(" "),
      _c("img", {
        staticClass: "menu-bt",
        attrs: { src: _vm.menuImg + "?v=" + _vm.version },
        on: {
          click: function($event) {
            _vm.ToggleMenu()
          }
        }
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "bt-container" },
        _vm._l(_vm.activeItem.slice(0, _vm.itemInBar), function(item) {
          return _c("a", { attrs: { href: item.link } }, [
            _c("div", { staticClass: "bt" }, [_vm._v(_vm._s(item.name))])
          ])
        })
      )
    ]),
    _vm._v(" "),
    _c(
      "ul",
      { staticClass: "menu-container", class: { open: _vm.isOpen } },
      _vm._l(_vm.activeItem, function(item) {
        return _c("li", [
          _c("a", { attrs: { href: item.link } }, [_vm._v(_vm._s(item.name))])
        ])
      })
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_topbar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vue/topbar.vue */ "./src/vue/topbar.vue");
/* harmony import */ var _vue_calculator_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vue/calculator.vue */ "./src/vue/calculator.vue");




new Vue({
    el: '#careTips',
    components: { topbar: _vue_topbar_vue__WEBPACK_IMPORTED_MODULE_0__["default"], calculator: _vue_calculator_vue__WEBPACK_IMPORTED_MODULE_1__["default"] }
});

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/vue/calculator.vue":
/*!********************************!*\
  !*** ./src/vue/calculator.vue ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _calculator_vue_vue_type_template_id_34f6f61e_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculator.vue?vue&type=template&id=34f6f61e&scoped=true&lang=html */ "./src/vue/calculator.vue?vue&type=template&id=34f6f61e&scoped=true&lang=html");
/* harmony import */ var _calculator_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calculator.vue?vue&type=script&lang=js */ "./src/vue/calculator.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _calculator_vue_vue_type_style_index_0_id_34f6f61e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calculator.vue?vue&type=style&index=0&id=34f6f61e&lang=scss&scoped=true */ "./src/vue/calculator.vue?vue&type=style&index=0&id=34f6f61e&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _calculator_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _calculator_vue_vue_type_template_id_34f6f61e_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__["render"],
  _calculator_vue_vue_type_template_id_34f6f61e_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "34f6f61e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src\\vue\\calculator.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/vue/calculator.vue?vue&type=script&lang=js":
/*!********************************************************!*\
  !*** ./src/vue/calculator.vue?vue&type=script&lang=js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_calculator_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./calculator.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/calculator.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_calculator_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/vue/calculator.vue?vue&type=style&index=0&id=34f6f61e&lang=scss&scoped=true":
/*!*****************************************************************************************!*\
  !*** ./src/vue/calculator.vue?vue&type=style&index=0&id=34f6f61e&lang=scss&scoped=true ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_calculator_vue_vue_type_style_index_0_id_34f6f61e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader!../../node_modules/css-loader!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib??vue-loader-options!./calculator.vue?vue&type=style&index=0&id=34f6f61e&lang=scss&scoped=true */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/calculator.vue?vue&type=style&index=0&id=34f6f61e&lang=scss&scoped=true");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_calculator_vue_vue_type_style_index_0_id_34f6f61e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_calculator_vue_vue_type_style_index_0_id_34f6f61e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_calculator_vue_vue_type_style_index_0_id_34f6f61e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_calculator_vue_vue_type_style_index_0_id_34f6f61e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_calculator_vue_vue_type_style_index_0_id_34f6f61e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/vue/calculator.vue?vue&type=template&id=34f6f61e&scoped=true&lang=html":
/*!************************************************************************************!*\
  !*** ./src/vue/calculator.vue?vue&type=template&id=34f6f61e&scoped=true&lang=html ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_calculator_vue_vue_type_template_id_34f6f61e_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./calculator.vue?vue&type=template&id=34f6f61e&scoped=true&lang=html */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/calculator.vue?vue&type=template&id=34f6f61e&scoped=true&lang=html");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_calculator_vue_vue_type_template_id_34f6f61e_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_calculator_vue_vue_type_template_id_34f6f61e_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/vue/topbar.vue":
/*!****************************!*\
  !*** ./src/vue/topbar.vue ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _topbar_vue_vue_type_template_id_45447dba_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./topbar.vue?vue&type=template&id=45447dba&scoped=true&lang=html */ "./src/vue/topbar.vue?vue&type=template&id=45447dba&scoped=true&lang=html");
/* harmony import */ var _topbar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./topbar.vue?vue&type=script&lang=js */ "./src/vue/topbar.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _topbar_vue_vue_type_style_index_0_id_45447dba_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./topbar.vue?vue&type=style&index=0&id=45447dba&lang=scss&scoped=true */ "./src/vue/topbar.vue?vue&type=style&index=0&id=45447dba&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _topbar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _topbar_vue_vue_type_template_id_45447dba_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__["render"],
  _topbar_vue_vue_type_template_id_45447dba_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "45447dba",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src\\vue\\topbar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/vue/topbar.vue?vue&type=script&lang=js":
/*!****************************************************!*\
  !*** ./src/vue/topbar.vue?vue&type=script&lang=js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_topbar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./topbar.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/topbar.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_topbar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/vue/topbar.vue?vue&type=style&index=0&id=45447dba&lang=scss&scoped=true":
/*!*************************************************************************************!*\
  !*** ./src/vue/topbar.vue?vue&type=style&index=0&id=45447dba&lang=scss&scoped=true ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_topbar_vue_vue_type_style_index_0_id_45447dba_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader!../../node_modules/css-loader!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib??vue-loader-options!./topbar.vue?vue&type=style&index=0&id=45447dba&lang=scss&scoped=true */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/topbar.vue?vue&type=style&index=0&id=45447dba&lang=scss&scoped=true");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_topbar_vue_vue_type_style_index_0_id_45447dba_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_topbar_vue_vue_type_style_index_0_id_45447dba_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_topbar_vue_vue_type_style_index_0_id_45447dba_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_topbar_vue_vue_type_style_index_0_id_45447dba_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_topbar_vue_vue_type_style_index_0_id_45447dba_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/vue/topbar.vue?vue&type=template&id=45447dba&scoped=true&lang=html":
/*!********************************************************************************!*\
  !*** ./src/vue/topbar.vue?vue&type=template&id=45447dba&scoped=true&lang=html ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_topbar_vue_vue_type_template_id_45447dba_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./topbar.vue?vue&type=template&id=45447dba&scoped=true&lang=html */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/topbar.vue?vue&type=template&id=45447dba&scoped=true&lang=html");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_topbar_vue_vue_type_template_id_45447dba_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_topbar_vue_vue_type_template_id_45447dba_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 0:
/*!***************************************************!*\
  !*** multi ./src/js/main.js ./src/scss/main.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/js/main.js */"./src/js/main.js");
module.exports = __webpack_require__(/*! ./src/scss/main.scss */"./src/scss/main.scss");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map