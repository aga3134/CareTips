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

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/care-calculator.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/care-calculator.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_care_service_selection_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vue/care-service-selection.vue */ "./src/vue/care-service-selection.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var g_Util = __webpack_require__(/*! ../js/util */ "./src/js/util.js");

/* harmony default export */ __webpack_exports__["default"] = ({
	data: function () {
		return {
			identity: 2,
			careLevel: 0,
			transportLevel: 0,
			remoteArea: false,
			usedBC: 0,
			usedD: 0,
			usedEF: 0,
			usedG: 0,
			openDetail: false,
			price: {
				"A": { "total": 0, "gov": 0, "own": 0 },
				"B": { "total": 0, "gov": 0, "own": 0 },
				"C": { "total": 0, "gov": 0, "own": 0 },
				"D": { "total": 0, "gov": 0, "own": 0 },
				"E-Rent": { "total": 0, "gov": 0, "own": 0 },
				"E-Buy": { "total": 0, "gov": 0, "own": 0 },
				"F-Rent": { "total": 0, "gov": 0, "own": 0 },
				"F-Buy": { "total": 0, "gov": 0, "own": 0 },
				"G": { "total": 0, "gov": 0, "own": 0 },
				"O": { "total": 0, "gov": 0, "own": 0 }
			},
			rentMonth: 36,
			totalPrice: {
				"service": { "total": 0, "gov": 0, "own": 0 },
				"equipRent": { "total": 0, "gov": 0, "own": 0 },
				"equipBuy": { "total": 0, "gov": 0, "own": 0 },
				"rest": { "total": 0, "gov": 0, "own": 0 }
			},
			header: null,
			items: {
				"A": [], "B": [], "C": [], "D": [], "E": [], "F": [], "G": [], "O": []
			},
			openInputPanel: false,
			modify: false,
			modifyCategory: "",
			modifyIndex: -1
		};
	},
	components: {
		'care-service-selection': _vue_care_service_selection_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
	},
	created: function () {
		var urlParam = g_Util.GetUrlParameter();
		var solutionID = urlParam.solution;
		if (solutionID) {
			$.get("/solution/view?solution=" + solutionID, function (result) {
				if (result.status != "ok") return alert("無法讀取解方");
				var service = JSON.parse(result.data.info)[3][0];
				for (var i = 0; i < service.length; i++) {
					var item = service[i];
					this.items[item.category].push(item);
				}
				//console.log(this.items);
				this.UpdatePrice();
			}.bind(this));
		}
	},
	methods: {
		UpdatePrice: function () {
			if (!this.header) {
				this.header = this.$refs.serviceSelect.GetServiceCode();
			}
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
			maxPay = Math.max(0, payment.pay[this.careLevel] - this.usedBC);
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

			maxPay = Math.max(0, payment.pay[this.careLevel] - this.usedD);
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
			maxPay = Math.max(0, payment.pay[this.careLevel] - this.usedEF);
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

			maxPay = Math.max(0, payment.pay[this.careLevel] - this.usedG);
			if (price.gov > maxPay) {
				var exceed = price.gov - maxPay;
				price.gov -= exceed;
				price.own += exceed;
			}
			this.price["G"] = price;

			//O code (自費)
			cat = this.items["O"];
			price = { "total": 0, "gov": 0, "own": 0 };
			for (var i = 0; i < cat.length; i++) {
				var item = cat[i];
				var p = item[priceKey];
				var t = p * item.num;
				price.total += t;
				price.own += t;
				price.gov += 0;
			}
			this.price["O"] = price;

			//total price summary
			var ts = { "total": 0, "gov": 0, "own": 0 };
			var teb = { "total": 0, "gov": 0, "own": 0 };
			var ter = { "total": 0, "gov": 0, "own": 0 };
			var tr = { "total": 0, "gov": 0, "own": 0 };
			ts.total = this.price["A"].total + this.price["B"].total + this.price["C"].total + this.price["D"].total + this.price["O"].total;
			ts.gov = this.price["A"].gov + this.price["B"].gov + this.price["C"].gov + this.price["D"].gov + this.price["O"].gov;
			ts.own = this.price["A"].own + this.price["B"].own + this.price["C"].own + this.price["D"].own + this.price["O"].own;

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
		SortItemCategory: function (category) {
			this.items[category].sort(function (a, b) {
				if (a.code < b.code) {
					return -1;
				} else if (a.code > b.code) {
					return 1;
				} else return 0;
			});
		},
		AddService: function () {
			var item = this.$refs.serviceSelect.GetSelectItem();
			this.items[item.category].push(item);
			this.SortItemCategory(item.category);
			this.UpdatePrice();
			this.openInputPanel = false;
			this.$root.ShowMessage("加入服務 " + item.code);
		},
		ModifyItem: function (code, index) {
			this.modify = true;
			this.modifyCategory = code;
			this.modifyIndex = index;
			var item = this.items[code][index];
			this.$refs.serviceSelect.SetSelectItem(item);
			this.openInputPanel = true;
		},
		DoModify: function () {
			var item = this.$refs.serviceSelect.GetSelectItem();
			if (this.modifyCategory == item.category) {
				this.items[this.modifyCategory][this.modifyIndex] = item;
			} else {
				this.items[this.modifyCategory].splice(this.modifyIndex, 1);
				this.items[item.category].push(item);
			}
			this.SortItemCategory(item.category);

			this.ClearModify();
			this.UpdatePrice();
		},
		ClearModify: function () {
			this.modify = false;
			this.modifyCategory = "";
			this.modifyIndex = -1;
			this.openInputPanel = false;
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
			if (confirm("確定全部重設?")) {
				this.items = {
					"A": [], "B": [], "C": [], "D": [], "E": [], "F": [], "G": [], "O": []
				};
				this.UpdatePrice();
				this.ClearModify();
			}
		},
		ToggleDetail: function () {
			this.openDetail = !this.openDetail;
			if (this.openDetail) {
				//需等vue展開完後再scroll
				setTimeout(function () {
					g_Util.GoToAnchor("openDetail");
				}, 10);
			}
		}
	}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/care-service-selection.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/care-service-selection.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************/
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

var g_Util = __webpack_require__(/*! ../js/util */ "./src/js/util.js");

/* harmony default export */ __webpack_exports__["default"] = ({
	props: ["calcPrice"],
	data: function () {
		return {
			serviceCode: null,
			customPrice: 0,
			customName: "自費服務",
			isRent: 0,
			mainCategory: 0,
			subCategory: 0,
			selectService: 0,
			itemInfo: null,
			serviceCount: 1,
			fixMainCategory: false,
			openFilterPanel: false,
			filterInput: "",
			filterList: []
		};
	},
	created: function () {
		$.get("/static/service-code.json", function (data) {
			this.serviceCode = data;
			this.UpdateItemInfo();
		}.bind(this));
	},
	methods: {
		GetServiceCode: function () {
			return this.serviceCode;
		},
		GetSelectService: function () {
			var data = {};
			data.customPrice = this.customPrice;
			data.customName = this.customName;
			data.isRent = this.isRent;
			data.mainCategory = this.mainCategory;
			data.subCategory = this.subCategory;
			data.selectService = this.selectService;
			data.itemInfo = this.itemInfo;
			data.serviceCount = this.serviceCount;
			return data;
		},
		GetSelectItem: function () {
			var category = this.serviceCode.service[this.mainCategory].code;
			var item = {};
			item.category = category;
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
				case "O":
					//自費
					item.price = this.customPrice;
					item.priceRemote = this.customPrice;
					item.name = this.customName;
					break;
			}
			return item;
		},
		SetSelectItem: function (item) {
			var category = item.category;
			this.mainCategory = item.mainCategory;
			this.subCategory = item.subCategory;
			this.selectService = item.selectService;
			this.itemInfo = this.serviceCode.service[this.mainCategory].items[this.subCategory].items[this.selectService];

			this.serviceCount = item.num;
			switch (category) {
				case "A":case "B":case "C":case "G":
					break;
				case "D":
					this.customPrice = item.price;
					break;
				case "E":case "F":
					this.isRent = item.isRent;
					this.customPrice = item.price;
					break;
				case "O":
					//自費
					this.customPrice = item.price;
					this.customName = item.name;
					break;
			}
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
			this.itemInfo = this.serviceCode.service[this.mainCategory].items[this.subCategory].items[this.selectService];
			var category = this.serviceCode.service[this.mainCategory].code;
			if (category == "E" || category == "F") {
				if (this.itemInfo.payForRent == "不適用" && this.isRent == 1) {
					this.isRent = 0;
				} else if (this.itemInfo.payForBuy == "不適用" && this.isRent == 0) {
					this.isRent = 1;
				}
			}
		},
		OpenFilterPanel: function () {
			this.openFilterPanel = true;
			this.$parent.enableAddButton = false;
			this.UpdateFilterList();
			setTimeout(function () {
				this.$refs.filterInput.focus();
			}.bind(this), 10);
		},
		CloseFilterPanel: function () {
			this.openFilterPanel = false;
		},
		UpdateFilterList: function () {
			this.filterList = [];
			for (var i = 0; i < this.serviceCode.service.length; i++) {
				var service = this.serviceCode.service[i];
				var mainCategory = { "code": service.code, "name": service.name, "items": [], num: 0 };
				for (var j = 0; j < service.items.length; j++) {
					var serviceItem = service.items[j];
					var subCategory = { "code": serviceItem.code, "name": serviceItem.name, "items": [] };
					for (var k = 0; k < serviceItem.items.length; k++) {
						var targetItem = serviceItem.items[k];
						if (targetItem.name.includes(this.filterInput) || targetItem.code.includes(this.filterInput)) {
							subCategory.items.push({ "code": targetItem.code, "name": targetItem.name, "mainCat": i, "subCat": j, "itemIndex": k });
						}
					}
					mainCategory.items.push(subCategory);
					mainCategory.num += subCategory.items.length;
				}
				this.filterList.push(mainCategory);
			}
		},
		SelectFilterItem: function (i, j, k) {
			this.mainCategory = i;
			this.subCategory = j;
			this.selectService = k;
			this.UpdateItemInfo();
			this.CloseFilterPanel();
		}
	}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/case-editor.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/case-editor.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_user_info_editor_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vue/user-info-editor.vue */ "./src/vue/user-info-editor.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var g_Util = __webpack_require__(/*! ../js/util */ "./src/js/util.js");

/* harmony default export */ __webpack_exports__["default"] = ({
	props: ["action"],
	components: {
		'user-info-editor': _vue_user_info_editor_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
	},
	data: function () {
		return {
			omaha: null,
			selectDomain: "D1",
			selectProblem: 0,
			selectSign: 0,
			problemDesc: "",
			openInput: false,
			finalCheck: false,
			caseInfo: { desc: "", problem: { "D1": [], "D2": [], "D3": [], "D4": [] } },
			caseID: null,
			modify: false,
			modifyCategory: "",
			modifyIndex: -1,
			setupUserInfo: false,
			user: null,
			openFilterPanel: false,
			filterInput: "",
			filterList: {}
		};
	},
	created: function () {
		var urlParam = g_Util.GetUrlParameter();
		$.get("/static/omaha.json", function (data) {
			this.omaha = data;

			if (this.action == "edit") {
				var caseID = urlParam.case;
				$.get("/case/view?case=" + caseID, function (result) {
					if (result.status != "ok") return window.location.href = "/?message=存取案例失敗";
					this.caseID = caseID;
					var caseInfo = result.data;
					var info = JSON.parse(caseInfo.info);
					var problem = info[info.length - 1].problem;
					this.caseInfo.desc = caseInfo.desc;
					if (problem.D1) this.caseInfo.problem.D1 = problem.D1;
					if (problem.D2) this.caseInfo.problem.D2 = problem.D2;
					if (problem.D3) this.caseInfo.problem.D3 = problem.D3;
					if (problem.D4) this.caseInfo.problem.D4 = problem.D4;
				}.bind(this));
			}
		}.bind(this));
	},
	methods: {
		SetUser: function (user) {
			this.user = user;
			if (!user.profession) {
				this.setupUserInfo = true;
				this.$refs.userInfoEditor.submitCallback = function (result) {
					this.setupUserInfo = false;
				}.bind(this);
				this.$refs.userInfoEditor.SetUser(user);
			}
		},
		ChangeDomain: function () {
			this.selectProblem = 0;
			this.selectSign = 0;
		},
		ChangeProblem: function () {
			this.selectSign = 0;
		},
		AddProblem: function () {
			var domainID = this.selectDomain;
			var selectDomain = this.omaha[domainID];
			var selectProblem = selectDomain.problem[this.selectProblem];
			var selectSign = selectProblem.sign[this.selectSign];

			var p = {};
			p.id = domainID + "-" + selectProblem.id + "-" + selectSign.id;
			p.name = selectSign.cht;
			p.domainID = domainID;
			p.problemIndex = this.selectProblem;
			p.signIndex = this.selectSign;
			p.desc = this.problemDesc;
			this.caseInfo.problem[domainID].push(p);

			this.openInput = false;
			this.problemDesc = "";
			this.$root.ShowMessage("加入問題 " + p.id);
		},
		ModifyItem: function (category, index) {
			this.modify = true;
			this.modifyCategory = category;
			this.modifyIndex = index;
			var item = this.caseInfo.problem[category][index];
			this.selectDomain = item.domainID;
			this.selectProblem = item.problemIndex;
			this.selectSign = item.signIndex;
			this.problemDesc = item.desc;
			this.openInput = true;
		},
		DeleteItem: function (category, index) {
			if (confirm("確定刪除?")) {
				var arr = this.caseInfo.problem[category];
				if (!arr || index < 0 || index >= arr.length) return;
				arr.splice(index, 1);
			}
		},
		DoModify: function () {
			var domainID = this.selectDomain;
			var selectDomain = this.omaha[domainID];
			var selectProblem = selectDomain.problem[this.selectProblem];
			var selectSign = selectProblem.sign[this.selectSign];

			var item = {};
			item.id = domainID + "-" + selectProblem.id + "-" + selectSign.id;
			item.name = selectSign.cht;
			item.domainID = domainID;
			item.problemIndex = this.selectProblem;
			item.signIndex = this.selectSign;
			item.desc = this.problemDesc;

			if (this.modifyCategory == domainID) {
				this.caseInfo.problem[this.modifyCategory][this.modifyIndex] = item;
			} else {
				this.caseInfo.problem[this.modifyCategory].splice(this.modifyIndex, 1);
				this.caseInfo.problem[domainID].push(item);
			}
			this.ClearModify();
		},
		ClearModify: function () {
			this.modify = false;
			this.modifyCategory = "";
			this.modifyIndex = -1;
			this.problemDesc = "";
			this.openInput = false;
		},
		OpenFilterPanel: function () {
			this.openFilterPanel = true;
			this.UpdateFilterList();
			setTimeout(function () {
				this.$refs.filterInput.focus();
			}.bind(this), 10);
		},
		UpdateFilterList: function () {
			this.filterList = {};
			for (var key in this.omaha) {
				var category = { "id": key, "name": this.omaha[key].name, "problem": [], "num": 0 };
				for (var i = 0; i < this.omaha[key].problem.length; i++) {
					var problem = this.omaha[key].problem[i];
					var item = { "cht": problem.cht, "sign": [] };
					for (var j = 0; j < problem.sign.length; j++) {
						var sign = problem.sign[j];
						if (sign.cht.includes(this.filterInput)) {
							item.sign.push({ "cht": sign.cht, "pID": i, "sID": j });
						}
					}
					category.problem.push(item);
					category.num += item.sign.length;
				}
				this.filterList[key] = category;
			}
		},
		SelectFilterItem: function (cat, i, j) {
			this.selectDomain = cat;
			this.selectProblem = i;
			this.selectSign = j;
			this.openFilterPanel = false;
		},
		SubmitCase: function () {
			var scrollOffset = -80;
			if (this.caseInfo.desc == "") {
				g_Util.GoToAnchor("caseDesc", scrollOffset, function () {
					alert("案例簡述不能空白");
				});
				return;
			}
			if (this.caseInfo.problem["D1"].length == 0 && this.caseInfo.problem["D2"].length == 0 && this.caseInfo.problem["D3"].length == 0 && this.caseInfo.problem["D4"].length == 0) {
				g_Util.GoToAnchor("caseProblem", scrollOffset, function () {
					alert("問題列表不能空白");
				});
				return;
			}
			if (!this.finalCheck) {
				g_Util.GoToAnchor("caseRemark", scrollOffset, function () {
					alert("請閱讀紅色警示文字並勾選「我了解了」");
				});
				return;
			}
			//console.log(this.target.profession);
			switch (this.action) {
				case "create":
					$.post("/case/create", { data: this.caseInfo }, function (data) {
						if (data.status != "ok") return window.location.href = "/?message=新增案例失敗";
						window.location.href = "/case?case=" + data.data;
					});
					break;
				case "edit":
					$.post("/case/edit?case=" + this.caseID, { data: this.caseInfo }, function (data) {
						if (data.status != "ok") return window.location.href = "/?message=修改案例失敗";
						window.location.href = "/case?case=" + data.data;
					});
					break;
			}
		}
	}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/case-list.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/case-list.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************/
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

var g_Util = __webpack_require__(/*! ../js/util */ "./src/js/util.js");

/* harmony default export */ __webpack_exports__["default"] = ({
	props: ["init", "emptyAction"],
	data: function () {
		return {
			caseList: [],
			preLoad: [],
			page: 0,
			param: {},
			noMore: false
		};
	},
	created: function () {
		if (this.init == "1") {
			this.LoadMoreList();
		}
	},
	methods: {
		InitHeadColor: function () {
			var colorNum = 30;
			var colorArr = g_Util.ColorCategory(colorNum, 0.9);
			for (var i = 0; i < this.caseList.length; i++) {
				var profession = this.caseList[i].user.profession;
				var index = g_Util.StrCodeToInt(profession) % colorNum;
				this.caseList[i].user.headColor = colorArr(index);
			}
		},
		SetParam: function (param) {
			this.param = param;
		},
		ClearList: function () {
			this.page = 0;
			this.caseList = [];
			this.preLoad = [];
			this.noMore = false;
		},
		PreLoadList: function (next) {
			if (!this.param) return;
			var urlStr = "/case/list?page=" + this.page;
			if (this.param.ownerID) urlStr += "&owner=" + this.param.ownerID;
			if (this.param.keyword) urlStr += "&keyword=" + this.param.keyword;
			if (this.param.profession) urlStr += "&profession=" + this.param.profession;
			urlStr += "&sort=" + this.param.sort || "newest";
			$.get(urlStr, function (result) {
				this.preLoad = result.data;
				if (result.status != "ok") return alert("讀取案例列表失敗");
				if (this.preLoad.length == 0) return this.noMore = true;
				this.page++;
				if (next) next();
			}.bind(this));
		},
		LoadMoreList: function (param) {
			if (param) {
				this.param = param;
			}
			if (this.preLoad.length == 0) {
				return this.PreLoadList(this.LoadMoreList);
			}
			this.caseList.push.apply(this.caseList, this.preLoad);
			this.PreLoadList();
			this.InitHeadColor();
		},
		CreateCase: function () {
			window.location.href = "/case/create";
		}
	}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/case-view.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/case-view.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_user_info_editor_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vue/user-info-editor.vue */ "./src/vue/user-info-editor.vue");
/* harmony import */ var _vue_solution_editor_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vue/solution-editor.vue */ "./src/vue/solution-editor.vue");
/* harmony import */ var _vue_solution_view_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../vue/solution-view.vue */ "./src/vue/solution-view.vue");
/* harmony import */ var _vue_solution_list_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../vue/solution-list.vue */ "./src/vue/solution-list.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





var g_Util = __webpack_require__(/*! ../js/util */ "./src/js/util.js");

/* harmony default export */ __webpack_exports__["default"] = ({
	data: function () {
		return {
			user: null,
			isMyCase: false,
			isLike: false,
			omaha: null,
			caseInfo: null,
			vIndex: 0,
			problem: { "D1": [], "D2": [], "D3": [], "D4": [] },
			sendMessage: "",
			messageList: [],
			status: "ViewCase",
			solutionID: null,
			professions: [],
			openSearchPanel: false,
			selectProfession: "全部",
			selectSort: "newest",
			selectVersion: "全部",
			keyword: ""
		};
	},
	components: {
		'user-info-editor': _vue_user_info_editor_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
		'solution-editor': _vue_solution_editor_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
		'solution-view': _vue_solution_view_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
		'solution-list': _vue_solution_list_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
	},
	created: function () {
		var urlParam = g_Util.GetUrlParameter();
		var caseID = urlParam.case;
		var solutionID = urlParam.solution;
		if (!caseID) window.location.href = "/?message=無此案例";

		$.get("/case/view?case=" + caseID, function (result) {
			if (result.status != "ok") return window.location.href = "/?message=無法讀取案例";
			//udate desc
			$("meta[name='description']").attr("content", result.data.desc);
			$("meta[property='og:description']").attr("content", result.data.desc);

			this.caseInfo = result.data;
			this.caseInfo.info = JSON.parse(this.caseInfo.info);
			this.vIndex = this.caseInfo.info.length - 1;
			this.isMyCase = false;
			if (result.data.liked) this.isLike = true;
			if (this.user) {
				this.isMyCase = this.user.id == this.caseInfo.ownerID;
			}
			this.UpdateVersion();
			if (solutionID) this.ViewSolution(solutionID);

			$.get("/static/omaha.json", function (data) {
				this.omaha = data;
			}.bind(this));

			$.get("/static/solution.json", function (data) {
				this.professions = data.profession;
			}.bind(this));
		}.bind(this));

		$.get("/case/message/list?case=" + caseID, function (result) {
			if (result.status != "ok") return alert("無法讀取留言");

			for (var i = 0; i < result.data.length; i++) {
				var t = moment(result.data[i].createdAt).tz("Asia/Taipei");
				result.data[i].time = t.format("YYYY-MM-DD HH:mm");
			}
			this.messageList = result.data;
		}.bind(this));
	},
	methods: {
		SetUser: function (user) {
			this.user = user;
			if (this.caseInfo) {
				this.isMyCase = user.id == this.caseInfo.ownerID;
			}
			if (this.$refs.caseViewSolution) {
				this.$refs.caseViewSolution.SetUser(user);
			}
		},
		UpdateVersion: function () {
			this.problem = { "D1": [], "D2": [], "D3": [], "D4": [] };
			var problem = this.caseInfo.info[this.vIndex].problem;
			if (problem.D1) this.problem.D1 = problem.D1;
			if (problem.D2) this.problem.D2 = problem.D2;
			if (problem.D3) this.problem.D3 = problem.D3;
			if (problem.D4) this.problem.D4 = problem.D4;

			var curCaseVersion = this.caseInfo.info[this.vIndex].version;
			this.$refs.caseViewSolution.SetCurCaseVersion(curCaseVersion);
		},
		GetCaseInfo: function () {
			var info = {};
			info.caseID = this.caseInfo.id;
			info.caseVersion = this.caseInfo.info[this.vIndex].version;
			return info;
		},
		ModifyCase: function () {
			window.location.href = "/case/edit?case=" + this.caseInfo.id;
		},
		DeleteCase: function () {
			if (confirm("確定刪除案例?")) {
				window.location.href = "/case/delete?case=" + this.caseInfo.id;
			}
		},
		RandomCase: function () {
			window.location.href = "/case/random";
		},
		SendMessage: function () {
			var body = {};
			body.caseID = this.caseInfo.id;
			body.caseVersion = this.caseInfo.info[this.vIndex].version;
			body.message = this.sendMessage;

			$.post("/case/message/create", body, function (result) {
				if (result.status != "ok") return alert("新增留言失敗");

				var t = moment(result.data.createdAt).tz("Asia/Taipei");
				result.data.time = t.format("YYYY-MM-DD HH:mm");
				result.data.user = this.user;
				this.messageList.splice(0, 0, result.data);
				this.sendMessage = "";
				g_Util.GoToAnchor("messageList");
				this.$root.ShowMessage("新增留言成功");
			}.bind(this));
		},
		DeleteMessage: function (index) {
			if (confirm("確定刪除留言?")) {
				var body = {};
				body.message = this.messageList[index].id;
				body.case = this.caseInfo.id;

				$.post("/case/message/delete", body, function (result) {
					if (result.status != "ok") return alert("刪除留言失敗");
					this.messageList.splice(index, 1);
				}.bind(this));
			}
		},
		ToggleLike: function () {
			if (!this.user) {
				var intentUrl = encodeURIComponent("/case?case=" + this.caseInfo.id);
				return window.location.href = "/auth/login?intentUrl=" + intentUrl;
			}
			var body = {};
			body.caseID = this.caseInfo.id;
			body.ownerID = this.user.id;

			if (this.isLike) {
				if (confirm("您已按過讚，要將按讚取消?")) {
					$.post("/case/like/delete", body, function (data) {
						if (data.status != "ok") return alert("按讚失敗");
						this.isLike = false;
						this.caseInfo.likeNum--;
					}.bind(this));
				}
			} else {
				$.post("/case/like/create", body, function (data) {
					if (data.status != "ok") return alert("按讚失敗");
					this.isLike = true;
					this.caseInfo.likeNum++;
				}.bind(this));
			}
		},
		ViewCase: function () {
			this.status = "ViewCase";
			this.openSearchPanel = false;
		},
		ProvideSolution: function (solutionID) {
			if (!this.user) {
				var intentUrl = encodeURIComponent("/case?case=" + this.caseInfo.id);
				return window.location.href = "/auth/login?intentUrl=" + intentUrl;
			}
			if (!this.user.profession) {
				this.status = "InputUserInfo";
				this.$refs.userInfoEditor.submitCallback = function (result) {
					this.ProvideSolution(solutionID);
				}.bind(this);
				return this.$refs.userInfoEditor.SetUser(this.user);
			}
			if (solutionID) {
				this.$refs.solutionEditor.EditSolution(solutionID);
			}
			this.status = "ProvideSolution";
			this.openSearchPanel = false;
			this.$refs.solutionEditor.SetProblem(this.problem);
		},
		ViewSolution: function (solutionID) {
			this.solutionID = solutionID;
			if (solutionID) {
				this.status = "ViewSolution";
				this.$refs.caseViewSolution.LoadSolution(solutionID);
			} else {
				this.status = "SolutionList";
				this.SearchSolution();
			}
			this.openSearchPanel = false;
		},
		OpenSolutionPanel: function (cat, index) {
			this.ProvideSolution();
			this.$refs.solutionEditor.AddSolutionForTarget(cat, index);
		},
		GetProblem: function (cat, index) {
			if (!this.problem[cat]) return null;
			if (index < 0 || index >= this.problem[cat].length) return null;
			return this.problem[cat][index];
		},
		SearchSolution: function () {
			var param = {};
			param.caseID = this.caseInfo.id;
			if (this.keyword != "") {
				param.keyword = this.keyword;
			}
			if (this.selectProfession != "全部") {
				param.profession = this.selectProfession;
			}
			param.sort = this.selectSort;
			if (this.selectVersion != "全部") {
				param.caseVersion = this.selectVersion;
			}
			this.$refs.solutionList.ClearList();
			this.$refs.solutionList.LoadMoreList(param);
		},
		ResetCondition: function () {
			this.keyword = "";
			this.selectSort = "newest";
			this.selectProfession = "全部";
			this.SearchSolution();
		}
	}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/login-panel.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/login-panel.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************/
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

var g_Util = __webpack_require__(/*! ../js/util */ "./src/js/util.js");

/* harmony default export */ __webpack_exports__["default"] = ({
	data: function () {
		return {
			intentUrl: "",
			email: "",
			name: "",
			password: "",
			passwordConfirm: "",
			token: "",
			mode: "login",
			pwLoginAction: "/auth/login-by-password",
			pwSignupAction: "/auth/signup-by-password"
		};
	},
	created: function () {
		var urlParam = g_Util.GetUrlParameter();
		if (urlParam.intentUrl) {
			this.intentUrl = encodeURIComponent(urlParam.intentUrl);
		}

		if (urlParam.reset == 1) {
			this.mode = "resetPassword";
			this.token = urlParam.token;
		}
	},
	methods: {
		ValidateEmail: function (email) {
			var pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return pattern.test(email);
		},
		LoginByGoogle: function () {
			var str = "/auth/login-by-google";
			if (this.intentUrl) str += "?intentUrl=" + this.intentUrl;
			window.location.href = str;
		},
		LoginByFacebook: function () {
			var str = "/auth/login-by-facebook";
			if (this.intentUrl) str += "?intentUrl=" + this.intentUrl;
			window.location.href = str;
		},
		LoginByPassword: function () {
			if (this.email == "") return alert("請輸入電子信箱");else if (!this.ValidateEmail(this.email)) return alert("請輸入正確的電子信箱");else if (this.password == "") return alert("請輸入密碼");
			if (this.intentUrl) this.pwLoginAction = "/auth/login-by-password?intentUrl=" + this.intentUrl;
			this.$refs.loginForm.submit();
		},
		SignupByPassword: function () {
			if (this.email == "") return alert("請輸入電子信箱");else if (!this.ValidateEmail(this.email)) return alert("請輸入正確的電子信箱");else if (this.password == "") return alert("請輸入密碼");else if (this.name == "") return alert("請輸入姓名");else if (this.password != this.passwordConfirm) return alert("請確認密碼一致");
			if (this.intentUrl) this.pwSignupAction = "/auth/signup-by-password?intentUrl=" + this.intentUrl;
			this.$refs.signupForm.submit();
		},
		ForgetPassword: function () {
			if (this.email == "") return alert("請輸入電子信箱");else if (!this.ValidateEmail(this.email)) return alert("請輸入正確的電子信箱");

			$.post("/auth/forget-password", { email: this.email }, function (data) {
				//console.log(data);
				if (data.status == "ok") {
					alert("修改密碼的連結已寄至您的信箱，請點擊連結並更新密碼");
				}
			});
		},
		ResetPassword: function () {
			if (this.password == "") return alert("請輸入密碼");else if (this.password != this.passwordConfirm) return alert("請確認密碼一致");

			$.post("/auth/reset-password", { password: this.password, token: this.token }, function (data) {
				//console.log(data);
				if (data.status == "ok") {
					alert("密碼已更新，請重新登入");
				} else {
					//console.log(data.message);
					switch (data.message) {
						case "invalid token":
							alert("連結已失效");break;
						default:
							alert("密碼更新失敗");break;
					}
				}
				window.location.href = "/auth/login";
			});
		}
	}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/main-page.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/main-page.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_case_list_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vue/case-list.vue */ "./src/vue/case-list.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var g_Util = __webpack_require__(/*! ../js/util */ "./src/js/util.js");

/* harmony default export */ __webpack_exports__["default"] = ({
	data: function () {
		return {
			openSearchPanel: false,
			selectProfession: "全部",
			selectSort: "newest",
			keyword: ""
		};
	},
	components: {
		'case-list': _vue_case_list_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
	},
	created: function () {
		$.get("/static/solution.json", function (data) {
			this.professions = data.profession;
		}.bind(this));
	},
	methods: {
		SearchCase: function () {
			var param = {};
			if (this.keyword != "") {
				param.keyword = this.keyword;
			}
			if (this.selectProfession != "全部") {
				param.profession = this.selectProfession;
			}
			param.sort = this.selectSort;
			this.$refs.caseList.ClearList();
			this.$refs.caseList.LoadMoreList(param);
		},
		ResetCondition: function () {
			this.keyword = "";
			this.selectSort = "newest";
			this.selectProfession = "全部";
			this.SearchCase();
		},
		GoToLink: function (link) {
			window.location.href = link;
		}
	}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/profession.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/profession.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_user_list_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vue/user-list.vue */ "./src/vue/user-list.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var g_Util = __webpack_require__(/*! ../js/util */ "./src/js/util.js");

/* harmony default export */ __webpack_exports__["default"] = ({
	props: ["init"],
	data: function () {
		return {
			openSearchPanel: false,
			selectProfession: "全部",
			selectCounty: "全部",
			selectSort: "caseNum",
			keyword: "",
			professions: [],
			counties: []
		};
	},
	components: {
		'user-list': _vue_user_list_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
	},
	created: function () {
		var urlParam = g_Util.GetUrlParameter();
		var profession = urlParam.profession;
		if (profession) {
			this.selectProfession = decodeURIComponent(profession);
		}

		$.get("/static/solution.json", function (data) {
			this.professions = data.profession;
			this.counties = data.county;
		}.bind(this));
	},
	methods: {
		SearchProfession: function () {
			var param = {};
			if (this.selectProfession != "全部") {
				param.profession = this.selectProfession;
			}
			if (this.selectCounty != "全部") {
				param.county = this.selectCounty;
			}
			if (this.keyword != "") {
				param.keyword = this.keyword;
			}
			param.sort = this.selectSort;
			this.$refs.userList.ClearList();
			this.$refs.userList.LoadMoreList(param);
		},
		ResetCondition: function () {
			this.selectProfession = "全部";
			this.selectCounty = "全部";
			this.keyword = "";
			this.selectSort = "caseNum";
			this.SearchProfession();
		}
	}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/solution-editor.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/solution-editor.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_care_service_selection_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vue/care-service-selection.vue */ "./src/vue/care-service-selection.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var g_Util = __webpack_require__(/*! ../js/util */ "./src/js/util.js");

/* harmony default export */ __webpack_exports__["default"] = ({
	data: function () {
		return {
			action: "create",
			solutionID: null,
			quest: {},
			priority: {},
			intervention: {},
			professions: [],
			customProfession: "",
			solution: [{ 0: [], 1: [], 2: [] }, { 0: [], 1: [], 2: [] }, { 0: [] }, { 0: [] }],
			problemList: null,
			step: 0,
			openInputPanel: false,
			//for intervention
			selectPriority: 0,
			selectIntervention: 0,
			selectProfession: "",
			inputDesc: "",
			targetIndex: "",
			modify: false,
			modifyCategory: "",
			modifyIndex: -1
		};
	},
	components: {
		'care-service-selection': _vue_care_service_selection_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
	},
	created: function () {
		$.get("/static/solution.json", function (data) {
			this.quest = data.quest;
			this.priority = data.priority;
			this.intervention = data.intervention;
			this.professions = data.profession;
			this.selectProfession = this.professions[0];
		}.bind(this));
	},
	methods: {
		SetProblem: function (problem) {
			this.problemList = problem;
		},
		EditSolution: function (solutionID) {
			$.get("/solution/view?solution=" + solutionID, function (result) {
				if (result.status != "ok") return alert("讀取解方失敗");
				this.solutionID = solutionID;
				this.action = "edit";
				this.solution = JSON.parse(result.data.info);
				this.step = 0;
			}.bind(this));
		},
		ClearEditSolution: function (backToSolution) {
			if (backToSolution) {
				this.$parent.ViewSolution(this.solutionID);
			}
			this.solutionID = null;
			this.action = "create";
			this.solution = [{ 0: [], 1: [], 2: [] }, { 0: [], 1: [], 2: [] }, { 0: [] }, { 0: [] }];
			this.step = 0;
		},
		AddSolutionForTarget: function (cat, index) {
			this.step = 0;
			this.openInputPanel = true;
			this.targetIndex = cat + "-" + index;
		},
		ClearTarget: function () {
			this.targetIndex = "";
			this.openInputPanel = false;
		},
		GetTargetName: function () {
			var name = "不指定";
			if (this.targetIndex != "") {
				var cat = this.targetIndex.split("-");
				var problemCat = this.problemList[cat[0]];
				if (!problemCat) return name;
				if (cat[1] < 0 || cat[1] >= problemCat.length) return name;
				return problemCat[cat[1]].name;
			}
			return name;
		},
		AddItem: function () {
			switch (this.step) {
				case 0:
					this.AddIntervention();break;
				case 1:
					this.AddIntervention();break;
				case 2:
					this.AddProfession();break;
				case 3:
					this.AddService();break;
			}
			this.ClearTarget();
		},
		AddIntervention: function () {
			var plan = {};
			plan.priority = this.selectPriority;
			plan.intervention = this.selectIntervention;
			plan.desc = this.inputDesc;
			plan.targetIndex = this.targetIndex;
			plan.targetName = this.GetTargetName();
			this.inputDesc = "";
			this.solution[this.step][this.selectPriority].push(plan);
		},
		AddProfession: function () {
			var plan = {};
			if (this.selectProfession == "其他") {
				plan.profession = this.customProfession;
			} else plan.profession = this.selectProfession;
			plan.targetIndex = this.targetIndex;
			plan.targetName = this.GetTargetName();
			plan.desc = this.inputDesc;
			this.inputDesc = "";
			this.solution[this.step][0].push(plan);
		},
		AddService: function () {
			var item = this.$refs.serviceSelect.GetSelectItem();
			item.desc = this.inputDesc;
			item.targetIndex = this.targetIndex;
			item.targetName = this.GetTargetName();
			this.inputDesc = "";
			this.solution[this.step][0].push(item);
		},
		ModifyItem: function (category, index) {
			this.modify = true;
			this.modifyCategory = category;
			this.modifyIndex = index;
			var plan = this.solution[this.step][category][index];
			switch (this.step) {
				case 0:case 1:
					this.selectPriority = plan.priority;
					this.selectIntervention = plan.intervention;
					break;
				case 2:
					if (!this.professions.includes(plan.profession)) {
						this.selectProfession = "其他";
						this.customProfession = plan.profession;
					} else this.selectProfession = plan.profession;
					break;
				case 3:
					this.$refs.serviceSelect.SetSelectItem(plan);
					break;
			}
			this.targetIndex = plan.targetIndex;
			this.inputDesc = plan.desc;

			this.openInputPanel = true;
		},
		DeleteItem: function (category, index) {
			if (confirm("確定刪除?")) {
				var arr = this.solution[this.step][category];
				if (!arr || index < 0 || index >= arr.length) return;
				arr.splice(index, 1);
			}
		},
		DoModify: function () {
			var plan = {};
			var changeCategory = false;
			switch (this.step) {
				case 0:case 1:
					plan.priority = this.selectPriority;
					plan.intervention = this.selectIntervention;
					if (this.selectPriority != this.modifyCategory) {
						changeCategory = true;
					}
					break;
				case 2:
					if (this.selectProfession == "其他") {
						plan.profession = this.customProfession;
					} else plan.profession = this.selectProfession;
					break;
				case 3:
					plan = this.$refs.serviceSelect.GetSelectItem();
					break;
			}
			plan.targetIndex = this.targetIndex;
			plan.targetName = this.GetTargetName();
			plan.desc = this.inputDesc;

			if (changeCategory) {
				this.solution[this.step][this.modifyCategory].splice(this.modifyIndex, 1);
				this.solution[this.step][this.selectPriority].push(plan);
			} else {
				this.solution[this.step][this.modifyCategory][this.modifyIndex] = plan;
			}
			this.ClearModify();
		},
		ClearModify: function () {
			this.modify = false;
			this.modifyCategory = "";
			this.modifyIndex = -1;
			this.inputDesc = "";
			this.openInputPanel = false;
		},
		SubmitSolution: function () {
			var solNum = 0;
			for (var key in this.solution[0]) {
				solNum += this.solution[0][key].length;
			}
			if (solNum == 0) {
				return alert("請新增至少一個個案措施");
			}
			var solution = {};
			var caseInfo = this.$parent.GetCaseInfo();
			solution.caseID = caseInfo.caseID;
			solution.caseVersion = caseInfo.caseVersion;
			solution.info = JSON.stringify(this.solution);
			switch (this.action) {
				case "create":
					$.post("/solution/create", { data: solution }, function (result) {
						if (result.status != "ok") return alert("新增解方失敗");
						alert("新增解方成功");
						this.$parent.ViewSolution(result.data);
						this.ClearEditSolution();
					}.bind(this));
					break;
				case "edit":
					$.post("/solution/edit?solution=" + this.solutionID, { data: solution }, function (result) {
						if (result.status != "ok") return alert("修改解方失敗");
						alert("修改解方成功");
						this.$parent.ViewSolution(result.data);
						this.ClearEditSolution();
					}.bind(this));
					break;
			}
		},
		ViewCase: function () {
			this.$parent.ViewCase();
		}
	}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/solution-list.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/solution-list.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************/
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


var g_Util = __webpack_require__(/*! ../js/util */ "./src/js/util.js");

/* harmony default export */ __webpack_exports__["default"] = ({
	props: ["init", "emptyAction"],
	data: function () {
		return {
			solutionList: [],
			preLoad: [],
			page: 0,
			param: {},
			noMore: false
		};
	},
	created: function () {
		if (this.init == "1") {
			this.LoadMoreList();
		}
	},
	methods: {
		InitHeadColor: function () {
			var colorNum = 30;
			var colorArr = g_Util.ColorCategory(colorNum, 0.9);
			for (var i = 0; i < this.solutionList.length; i++) {
				var profession = this.solutionList[i].user.profession;
				var index = g_Util.StrCodeToInt(profession) % colorNum;
				this.solutionList[i].user.headColor = colorArr(index);
			}
		},
		SetParam: function (param) {
			this.param = param;
		},
		ClearList: function () {
			this.page = 0;
			this.solutionList = [];
			this.preLoad = [];
			this.noMore = false;
		},
		PreLoadList: function (next) {
			if (!this.param) return;
			var urlStr = "/solution/list?page=" + this.page;
			if (this.param.caseID) urlStr += "&case=" + this.param.caseID;
			if (this.param.ownerID) urlStr += "&owner=" + this.param.ownerID;
			if (this.param.profession) urlStr += "&profession=" + this.param.profession;
			if (this.param.keyword) urlStr += "&keyword=" + this.param.keyword;
			if (this.param.caseVersion) urlStr += "&caseVersion=" + this.param.caseVersion;
			urlStr += "&sort=" + this.param.sort || "newest";
			$.get(urlStr, function (result) {
				this.preLoad = result.data;
				if (result.status != "ok") return alert("讀取案例列表失敗");
				if (this.preLoad.length == 0) return this.noMore = true;
				this.page++;
				if (next) next();
			}.bind(this));
		},
		LoadMoreList: function (param) {
			if (param) {
				this.param = param;
			}
			if (this.preLoad.length == 0) {
				return this.PreLoadList(this.LoadMoreList);
			}
			//compute statistic data
			for (var i = 0; i < this.preLoad.length; i++) {
				this.preLoad[i].info = JSON.parse(this.preLoad[i].info);
				var desc = "";
				for (var step = 0; step < this.preLoad[i].info.length; step++) {
					var sol = this.preLoad[i].info[step];
					var sum = 0;
					for (var priority in sol) {
						sum += sol[priority].length;
						if (desc == "" && sol[priority].length > 0) {
							desc += sol[priority][0].desc;
						}
					}
					this.preLoad[i]["S" + (step + 1) + "Num"] = sum;
				}
				this.preLoad[i].desc = desc;
			}

			this.solutionList.push.apply(this.solutionList, this.preLoad);
			this.PreLoadList();
			this.InitHeadColor();
		},
		ViewSolution: function (caseID, solutionID) {
			if (this.$parent.ViewSolution) return this.$parent.ViewSolution(solutionID);else window.location.href = "/case?case=" + caseID + "&solution=" + solutionID;
		},
		CreateSolution: function () {
			if (this.$parent.ProvideSolution) return this.$parent.ProvideSolution();
		}

	}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/solution-view.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/solution-view.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************/
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

var g_Util = __webpack_require__(/*! ../js/util */ "./src/js/util.js");

/* harmony default export */ __webpack_exports__["default"] = ({
	data: function () {
		return {
			quest: [],
			priority: [],
			intervention: [],
			user: null,
			isMySolution: false,
			isLike: false,
			solutionInfo: null,
			sendMessage: "",
			messageList: [],
			solutionID: null,
			curCaseVersion: 1,
			step: 0
		};
	},
	created: function () {
		$.get("/static/solution.json", function (data) {
			this.quest = data.quest;
			this.priority = data.priority;
			this.intervention = data.intervention;
		}.bind(this));
	},
	methods: {
		SetUser: function (user) {
			this.user = user;
			if (this.solutionInfo) {
				this.isMySolution = user.id == this.solutionInfo.ownerID;
			}
		},
		BackToSolutionList: function () {
			this.$parent.ViewSolution();
		},
		ViewCase: function () {
			this.$parent.ViewCase();
		},
		ModifySolution: function () {
			this.$parent.ProvideSolution(this.solutionInfo.id);
		},
		DeleteSolution: function () {
			if (confirm("確定刪除解方?")) {
				$.get("/solution/delete?solution=" + this.solutionInfo.id + "&case=" + this.solutionInfo.caseID, function (result) {
					if (result.status != "ok") {
						switch (result.message) {
							case "msgNum not zero":
								alert("無法刪除已有留言的解方");break;
							case "likeNum not zero":
								alert("無法刪除已被按讚的解方");break;
							default:
								alert("無法刪除解方");break;
						}
						return;
					}

					alert("解方已刪除");
					this.BackToSolutionList();
				}.bind(this));
			}
		},
		LoadSolution: function (solutionID) {
			$.get("/solution/view?solution=" + solutionID, function (result) {
				if (result.status != "ok") return alert("無法讀取解方");
				//console.log(result.data);
				this.solutionInfo = result.data;
				this.solutionInfo.info = JSON.parse(this.solutionInfo.info);
				this.isMySolution = false;
				if (result.data.liked) this.isLike = true;
				if (this.user) {
					this.isMySolution = this.user.id == this.solutionInfo.ownerID;
				}
			}.bind(this));

			$.get("/solution/message/list?solution=" + solutionID, function (result) {
				if (result.status != "ok") return alert("無法讀取留言");

				for (var i = 0; i < result.data.length; i++) {
					var t = moment(result.data[i].createdAt).tz("Asia/Taipei");
					result.data[i].time = t.format("YYYY-MM-DD HH:mm");
				}
				this.messageList = result.data;
			}.bind(this));
		},
		SetCurCaseVersion: function (version) {
			this.curCaseVersion = version;
		},
		SendMessage: function () {
			var body = {};
			body.solutionID = this.solutionInfo.id;
			body.message = this.sendMessage;

			$.post("/solution/message/create", body, function (result) {
				if (result.status != "ok") return alert("新增留言失敗");

				var t = moment(result.data.createdAt).tz("Asia/Taipei");
				result.data.time = t.format("YYYY-MM-DD HH:mm");
				result.data.user = this.user;
				this.messageList.splice(0, 0, result.data);
				this.sendMessage = "";
				//g_Util.GoToAnchor("solMessageList");
				this.$root.ShowMessage("新增留言成功");
			}.bind(this));
		},
		DeleteMessage: function (index) {
			if (confirm("確定刪除留言?")) {
				var body = {};
				body.message = this.messageList[index].id;
				body.solution = this.solutionInfo.id;

				$.post("/solution/message/delete", body, function (result) {
					if (result.status != "ok") return alert("刪除留言失敗");
					this.messageList.splice(index, 1);
				}.bind(this));
			}
		},
		ToggleLike: function () {
			if (!this.user) {
				var intentUrl = encodeURIComponent("/case?case=" + this.caseInfo.id);
				return window.location.href = "/auth/login?intentUrl=" + intentUrl;
			}
			var body = {};
			body.solutionID = this.solutionInfo.id;
			body.ownerID = this.user.id;

			if (this.isLike) {
				if (confirm("您已按過讚，要將按讚取消?")) {
					$.post("/solution/like/delete", body, function (data) {
						if (data.status != "ok") return alert("按讚失敗");
						this.isLike = false;
						this.solutionInfo.likeNum--;
					}.bind(this));
				}
			} else {
				$.post("/solution/like/create", body, function (data) {
					if (data.status != "ok") return alert("按讚失敗");
					this.isLike = true;
					this.solutionInfo.likeNum++;
				}.bind(this));
			}
		},
		SearchProfession: function (profession) {
			window.open("/profession?profession=" + profession);
		},
		CalculateService: function () {
			window.open("/calculator?solution=" + this.solutionInfo.id);
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
			isOpen: false,
			isLogin: false,
			itemInBar: 2,
			itemList: [{ name: "新增案例", link: "/case/create", login: 0 }, { name: "照服計算機", link: "/calculator", login: 0 }, { name: "專業連結", link: "/profession", login: 0 }, { name: "我的帳號", link: "", login: 1 }, { name: "登入", link: "/auth/login", login: -1 }],
			activeItem: [],
			user: {}
		};
	},
	created: function () {
		this.UpdateMenu();
	},
	methods: {
		SetUser: function (user) {
			this.user = user;
			this.itemList[3].link = "/user?target=" + user.id;
			this.menuImg = user.icon;
			this.isLogin = true;
			this.UpdateMenu();
		},
		ToggleMenu: function () {
			this.isOpen = !this.isOpen;
		},
		CloseMenu: function () {
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
		},
		ChangeUserPhoto: function (photoInfo) {
			this.user.photo = photoInfo.photo;
			this.user.icon = photoInfo.icon;
			this.menuImg = photoInfo.icon;
		}
	}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/user-info-editor.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/user-info-editor.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************/
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

var g_Util = __webpack_require__(/*! ../js/util */ "./src/js/util.js");

/* harmony default export */ __webpack_exports__["default"] = ({
	data: function () {
		return {
			user: {},
			selectProfession: "",
			otherProfession: "",
			professions: [],
			counties: [],
			submitCallback: null,
			finalCheck: false
		};
	},
	created: function () {
		$.get("/static/solution.json", function (data) {
			this.professions = data.profession;
			this.counties = data.county;
		}.bind(this));
	},
	methods: {
		SetUser: function (user) {
			this.user = user;
			this.InitSelectProfession();
		},
		ChangePhoto: function () {
			var elem = this.$refs.uploadBt;
			elem.click();
		},
		UploadPhoto: function (event) {
			var file = event.target.files[0];

			var formData = new FormData();
			formData.append("uploadImage", file);

			$.ajax({
				url: "/user/upload-image",
				type: "POST",
				data: formData,
				processData: false,
				contentType: false,
				success: function (result) {
					if (result.status != "ok") return alert("更新圖片失敗");
					this.user.photo = result.data.photo;
					this.user.icon = result.data.icon;
					this.$root.ChangeUserPhoto(result.data);
				}.bind(this),
				error: function (jqXHR, textStatus, errorMessage) {
					console.log(errorMessage);
				}
			});
		},
		InitSelectProfession: function () {
			if (this.user.profession) {
				if (this.professions.includes(this.user.profession)) {
					this.selectProfession = this.user.profession;
				} else {
					this.selectProfession = "其他";
					this.otherProfession = this.user.profession;
				}
			}
		},
		SubmitUserInfo: function () {
			if (this.selectProfession == "其他") {
				this.user.profession = this.otherProfession;
			} else {
				this.user.profession = this.selectProfession;
			}
			if (!this.user.name) {
				return alert("請輸入您的姓名");
			}
			if (!this.user.profession) {
				return alert("請輸入您的服務專業");
			}
			if (!this.finalCheck) {
				return alert("請閱讀紅色警示文字並勾選「我了解了」");
			}
			//console.log(this.user.profession);
			$.post("/user/edit", { data: this.user }, function (result) {
				if (this.submitCallback) this.submitCallback(result);else {
					alert(result.status == "ok" ? "修改成功" : "修改失敗");
					if (this.$parent.UpdateUserInfo) this.$parent.UpdateUserInfo(this.user);
				}
			}.bind(this));
		}
	}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/user-list.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/user-list.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************/
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

var g_Util = __webpack_require__(/*! ../js/util */ "./src/js/util.js");

/* harmony default export */ __webpack_exports__["default"] = ({
	props: ["init"],
	data: function () {
		return {
			userList: [],
			preLoad: [],
			page: 0,
			param: {},
			noMore: false
		};
	},
	created: function () {
		if (this.init == "1") {
			var urlParam = g_Util.GetUrlParameter();
			var profession = urlParam.profession;
			this.LoadMoreList({ profession: profession });
		}
	},
	methods: {
		InitHeadColor: function () {
			var colorNum = 30;
			var colorArr = g_Util.ColorCategory(colorNum, 0.9);
			for (var i = 0; i < this.userList.length; i++) {
				var profession = this.userList[i].profession;
				var index = g_Util.StrCodeToInt(profession) % colorNum;
				this.userList[i].headColor = colorArr(index);
			}
		},
		SetParam: function (param) {
			this.param = param;
		},
		ClearList: function () {
			this.page = 0;
			this.userList = [];
			this.preLoad = [];
			this.noMore = false;
		},
		PreLoadList: function (next) {
			if (!this.param) return;
			var urlStr = "/user/list?page=" + this.page;
			if (this.param.profession) urlStr += "&profession=" + this.param.profession;
			if (this.param.county) urlStr += "&county=" + this.param.county;
			if (this.param.keyword) urlStr += "&keyword=" + this.param.keyword;
			urlStr += "&sort=" + this.param.sort || "newest";
			$.get(urlStr, function (result) {
				this.preLoad = result.data;
				if (result.status != "ok") return alert("讀取專家列表失敗");
				if (this.preLoad.length == 0) return this.noMore = true;
				this.page++;
				if (next) next();
			}.bind(this));
		},
		LoadMoreList: function (param) {
			if (param) {
				this.param = param;
			}
			if (this.preLoad.length == 0) {
				return this.PreLoadList(this.LoadMoreList);
			}
			this.userList.push.apply(this.userList, this.preLoad);
			this.PreLoadList();
			this.InitHeadColor();
		},
		ResetCondition: function () {
			if (this.$parent.ResetCondition) this.$parent.ResetCondition();
		}
	}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/user-view.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/user-view.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_case_list_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vue/case-list.vue */ "./src/vue/case-list.vue");
/* harmony import */ var _vue_solution_list_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vue/solution-list.vue */ "./src/vue/solution-list.vue");
/* harmony import */ var _vue_user_info_editor_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../vue/user-info-editor.vue */ "./src/vue/user-info-editor.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




var g_Util = __webpack_require__(/*! ../js/util */ "./src/js/util.js");

/* harmony default export */ __webpack_exports__["default"] = ({
	data: function () {
		return {
			user: {},
			target: {},
			isMyAccount: false,
			setupUserInfo: false
		};
	},
	components: {
		'case-list': _vue_case_list_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
		'solution-list': _vue_solution_list_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
		'user-info-editor': _vue_user_info_editor_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
	},
	created: function () {
		var urlParam = g_Util.GetUrlParameter();
		var targetID = urlParam.target;
		if (!targetID) window.location.href = "/?message=無此使用者";

		$.get("/user/info?user=" + targetID, function (result) {
			if (result.status != "ok") window.location.href = "/?message=使用者查詢失敗";
			this.target = result.data;
			this.$refs.caseList.LoadMoreList({ ownerID: targetID });
			this.$refs.solutionList.LoadMoreList({ ownerID: targetID });
			if (this.user.id == this.target.id) {
				this.isMyAccount = true;
			}
		}.bind(this));
	},
	methods: {
		SetUser: function (user) {
			this.user = user;
			if (user.id == this.target.id) {
				this.isMyAccount = true;
			}
			this.$refs.userInfoEditor.SetUser(user);
		},
		OpenPhotoSelect: function () {
			this.$refs.userInfoEditor.ChangePhoto();
		},
		ChangeUserPhoto: function (photoInfo) {
			if (!this.isMyAccount) return;
			this.user.photo = photoInfo.photo;
			this.user.icon = photoInfo.icon;
			this.target.photo = photoInfo.photo;
			this.target.icon = photoInfo.icon;
		},
		UpdateUserInfo: function (user) {
			if (!this.isMyAccount) return;
			this.user = user;
			this.target = user;
			this.setupUserInfo = false;
		},
		Logout: function () {
			if (!this.isMyAccount) return;
			if (confirm("確定登出?")) {
				window.location.href = "/auth/logout";
			}
		}
	}
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/care-calculator.vue?vue&type=style&index=0&id=6a0cf85c&lang=scss&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/care-calculator.vue?vue&type=style&index=0&id=6a0cf85c&lang=scss&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n@charset \"UTF-8\";\nhtml[data-v-6a0cf85c], body[data-v-6a0cf85c] {\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  overflow: visible;\n}\n*[data-v-6a0cf85c] {\n  box-sizing: border-box;\n  font-family: \"\\5FAE\\8EDF\\6B63\\9ED1\\9AD4\", \"Microsoft JhengHei\";\n}\n.center[data-v-6a0cf85c] {\n  display: block;\n  margin: auto;\n  clear: both;\n  text-align: center;\n}\n.hide[data-v-6a0cf85c] {\n  display: none;\n}\n.warning[data-v-6a0cf85c] {\n  color: red;\n}\n.bold[data-v-6a0cf85c] {\n  font-weight: bold;\n}\n.inline-block[data-v-6a0cf85c] {\n  display: inline-block;\n}\na[data-v-6a0cf85c] {\n  text-decoration: none;\n  color: #ff3333;\n}\na[data-v-6a0cf85c]:hover {\n    color: #ff8800;\n}\n.one-third-w[data-v-6a0cf85c] {\n  display: inline-block;\n  vertical-align: middle;\n  margin: 10px 0px;\n  width: 100%;\n}\n@media only screen and (min-width: 640px) {\n.one-third-w[data-v-6a0cf85c] {\n      width: calc(50% - 20px);\n      margin: 10px;\n}\n}\n@media only screen and (min-width: 1024px) {\n.one-third-w[data-v-6a0cf85c] {\n      width: calc(33% - 20px);\n      margin: 10px;\n}\n}\n.half-w[data-v-6a0cf85c] {\n  display: inline-block;\n  vertical-align: middle;\n  margin: 10px 0px;\n  width: 100%;\n}\n@media only screen and (min-width: 640px) {\n.half-w[data-v-6a0cf85c] {\n      width: calc(50% - 20px);\n      margin: 10px;\n}\n}\n.full-w[data-v-6a0cf85c] {\n  display: block;\n  margin: 10px 0px;\n  width: 100%;\n}\n.problem-cat[data-v-6a0cf85c] {\n  background-color: #f8f8f8;\n  padding: 0px 0px 10px 0px;\n  margin: 10px auto;\n  border-radius: 5px;\n}\n.problem-cat .problem-header[data-v-6a0cf85c] {\n    margin: 0px auto;\n    font-size: 1.2em;\n    text-align: left;\n    padding: 10px;\n    background-color: #dddddd;\n    border-radius: 5px 5px 0px 0px;\n}\n.problem-cat .problem-container[data-v-6a0cf85c] {\n    padding: 0px;\n}\n.problem-cat .problem-item[data-v-6a0cf85c] {\n    border-radius: 5px;\n}\n.problem-cat .problem-item.select[data-v-6a0cf85c] {\n      border: 1px solid red;\n}\n.problem-cat .problem-item .problem-title[data-v-6a0cf85c] {\n      padding: 10px;\n      border-bottom: 1px solid #eeeeee;\n}\n.problem-cat .problem-item .problem-desc[data-v-6a0cf85c] {\n      white-space: pre-wrap;\n      padding: 10px;\n}\n.problem-cat .problem-item .problem-body[data-v-6a0cf85c] {\n      color: black;\n}\n.problem-cat .problem-item .item-bt-container[data-v-6a0cf85c] {\n      padding: 10px;\n      display: flex;\n      justify-content: flex-end;\n      align-items: center;\n      flex-wrap: wrap;\n}\n.problem-cat .problem-item .item-bt[data-v-6a0cf85c] {\n      display: inline-block;\n      margin: 0px 0px 0px 10px;\n      padding: 5px 10px;\n      cursor: pointer;\n      background-color: #eeeeee;\n      color: #333333;\n      border-radius: 3px;\n}\n.problem-cat .problem-item .item-bt[data-v-6a0cf85c]:hover {\n        background-color: #ffffff;\n}\n.problem-cat .problem-item .target-info[data-v-6a0cf85c] {\n      padding: 5px 10px;\n      color: #555555;\n}\n.cat-D1[data-v-6a0cf85c] {\n  background-color: #FFA5A4;\n}\n.cat-D2[data-v-6a0cf85c] {\n  background-color: #DEE885;\n}\n.cat-D3[data-v-6a0cf85c] {\n  background-color: #85CAE8;\n}\n.cat-D4[data-v-6a0cf85c] {\n  background-color: #C089E8;\n}\n.cat-A[data-v-6a0cf85c] {\n  background-color: #FFA5A4;\n}\n.cat-B[data-v-6a0cf85c] {\n  background-color: #FFDE9C;\n}\n.cat-C[data-v-6a0cf85c] {\n  background-color: #DEE885;\n}\n.cat-D[data-v-6a0cf85c] {\n  background-color: #9FFFBC;\n}\n.cat-E[data-v-6a0cf85c] {\n  background-color: #85CAE8;\n}\n.cat-F[data-v-6a0cf85c] {\n  background-color: #AF93FF;\n}\n.cat-G[data-v-6a0cf85c] {\n  background-color: #C089E8;\n}\n.cat-O[data-v-6a0cf85c] {\n  background-color: #FF8AE7;\n}\n.list-item[data-v-6a0cf85c] {\n  background-color: #eeeeee;\n  border-radius: 5px;\n  max-width: 100%;\n  margin: 10px 0px;\n  padding-bottom: 10px;\n  cursor: pointer;\n}\n@media only screen and (min-width: 640px) {\n.list-item[data-v-6a0cf85c] {\n      margin: 10px;\n}\n}\n.list-item a[data-v-6a0cf85c] {\n    text-decoration: none;\n    color: #323232;\n}\n.list-item .domain-statistic[data-v-6a0cf85c] {\n    display: flex;\n    justify-content: flex-start;\n    flex-wrap: wrap;\n    align-items: center;\n}\n.list-item .domain-statistic .domain-info[data-v-6a0cf85c] {\n      position: relative;\n      display: flex;\n      justify-content: flex-start;\n      flex-wrap: wrap;\n      align-items: center;\n}\n.list-item .domain-statistic .domain-info .domain-icon[data-v-6a0cf85c] {\n        display: inline-block;\n        padding: 7px;\n        margin: 10px 5px 10px 10px;\n        border-radius: 3px;\n}\n.list-item .domain-statistic .domain-info .domain-num[data-v-6a0cf85c] {\n        display: inline-block;\n        font-size: 0.8em;\n        vertical-align: middle;\n}\n.list-item .domain-statistic .domain-info .tip[data-v-6a0cf85c] {\n        padding: 5px;\n        box-shadow: 5px 5px 5px rgba(50, 50, 50, 0.8);\n        border-radius: 3px;\n        position: absolute;\n        top: 40px;\n        left: 10px;\n        width: 120px;\n        text-align: center;\n        z-index: 1;\n        opacity: 0;\n        -webkit-transition: opacity 0.5s ease;\n        transition: opacity 0.5s ease;\n}\n.list-item .domain-statistic .domain-info:hover .tip[data-v-6a0cf85c] {\n        opacity: 1;\n}\n.list-item .desc[data-v-6a0cf85c] {\n    white-space: pre-wrap;\n    color: #333333;\n    padding: 0px 20px 0px 10px;\n    width: 100%;\n    height: 4.5em;\n    line-height: 1.5em;\n    overflow: hidden;\n}\n.load-more[data-v-6a0cf85c] {\n  width: 500px;\n  max-width: 100%;\n  padding: 10px 20px;\n  border-radius: 5px;\n  margin: 20px auto;\n  border: 1px solid #888888;\n  color: #888888;\n  background-color: #ffffff;\n  cursor: pointer;\n  text-align: center;\n}\n.load-more[data-v-6a0cf85c]:hover {\n    border: 1px solid #333333;\n    color: #333333;\n}\n.fade-enter-active[data-v-6a0cf85c], .fade-leave-active[data-v-6a0cf85c] {\n  transition: opacity 0.5s;\n}\n.fade-enter[data-v-6a0cf85c], .fade-leave-to[data-v-6a0cf85c] {\n  opacity: 0;\n}\n.create-enter-active[data-v-6a0cf85c] {\n  transition: opacity 0.5s;\n}\n.create-enter[data-v-6a0cf85c] {\n  opacity: 0;\n}\n.main-container[data-v-6a0cf85c] {\n  width: 100%;\n  margin: 80px auto 20px auto;\n  padding: 0px 0px 50px 0px;\n  color: #333333;\n}\n.care-tips .sub-title[data-v-6a0cf85c] {\n  padding: 10px;\n  font-size: 1.5em;\n}\n.care-tips .mid-title[data-v-6a0cf85c] {\n  padding: 5px;\n  margin: 10px auto 0px auto;\n  font-size: 1.5em;\n  text-align: center;\n}\n.care-tips .mid-title .bottom-line[data-v-6a0cf85c] {\n    margin: auto;\n    width: 150px;\n    padding: 5px;\n    border-bottom: 1px solid #888888;\n}\n.care-tips .category-title[data-v-6a0cf85c] {\n  padding: 5px;\n  margin: 10px auto 0px auto;\n  font-size: 2em;\n  text-align: center;\n}\n.care-tips .category-title .bottom-line[data-v-6a0cf85c] {\n    margin: auto;\n    width: 150px;\n    padding: 5px;\n    border-bottom: 1px solid #888888;\n}\n.care-tips .category-separator[data-v-6a0cf85c] {\n  width: 800px;\n  max-width: 100%;\n  padding: 20px;\n  margin: auto;\n  border-bottom: 1px solid #dddddd;\n}\n.care-tips .separator[data-v-6a0cf85c] {\n  margin: 30px;\n  border-bottom: 1px solid #999999;\n}\n.care-tips .shadow-light[data-v-6a0cf85c] {\n  box-shadow: 5px 5px 5px #888888;\n}\n.care-tips .shadow-light[data-v-6a0cf85c]:hover {\n    box-shadow: 10px 10px 10px #888888;\n    -webkit-transition: box-shadow 0.5s ease;\n    transition: box-shadow 0.5s ease;\n}\n.care-tips .shadow-dark[data-v-6a0cf85c] {\n  box-shadow: 5px 5px 5px #333333;\n}\n.care-tips .shadow-dark[data-v-6a0cf85c]:hover {\n    box-shadow: 10px 10px 10px #333333;\n    -webkit-transition: box-shadow 0.5s ease;\n    transition: box-shadow 0.5s ease;\n}\n.care-tips .owner a[data-v-6a0cf85c] {\n  text-decoration: none;\n  color: #323232;\n}\n.care-tips .owner a[data-v-6a0cf85c]:hover {\n    color: #888888;\n}\n.care-tips .owner-info[data-v-6a0cf85c] {\n  display: flex;\n  justify-content: flex-start;\n  flex-wrap: wrap;\n  align-items: center;\n  border-bottom: 1px solid #eeeeee;\n  border-radius: 5px 5px 0px 0px;\n  padding: 10px;\n}\n.care-tips .owner-info .owner-icon[data-v-6a0cf85c] {\n    width: 30px;\n    height: 30px;\n    border-radius: 50%;\n    margin: 0px 5px 0px 0px;\n}\n.care-tips .owner-desc[data-v-6a0cf85c] {\n  white-space: pre-wrap;\n  padding: 10px;\n}\n.care-tips .bt-bar[data-v-6a0cf85c] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  flex-wrap: wrap;\n  width: 1024px;\n  max-width: 100%;\n  padding: 0px 15px;\n  margin: auto;\n}\n.care-tips .input-bt[data-v-6a0cf85c] {\n  display: inline-block;\n  color: #ffffff;\n  padding: 7px 10px;\n  margin: 5px;\n  background-color: #555555;\n  cursor: pointer;\n  border-radius: 3px;\n}\n.care-tips .input-bt[data-v-6a0cf85c]:hover {\n    background-color: #888888;\n}\n.care-tips .action-bt[data-v-6a0cf85c] {\n  color: #ff5555;\n  border: 1px solid #ff5555;\n  border-radius: 5px;\n  padding: 5px 10px;\n  margin: 5px;\n  cursor: pointer;\n}\n.care-tips .action-bt[data-v-6a0cf85c]:hover {\n    color: #ff8888;\n    border: 1px solid #ff8888;\n}\n.care-tips .feedback-statistic[data-v-6a0cf85c] {\n  display: flex;\n  justify-content: flex-end;\n  flex-wrap: wrap;\n  align-items: center;\n  padding: 5px;\n  color: #888888;\n  font-size: 0.9em;\n}\n.care-tips .feedback-statistic .container[data-v-6a0cf85c] {\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    align-items: center;\n    padding: 5px;\n}\n.care-tips .feedback-statistic .clickable[data-v-6a0cf85c] {\n    cursor: pointer;\n}\n.care-tips .feedback-statistic .clickable[data-v-6a0cf85c]:hover {\n      border-bottom: 2px solid #ff5555;\n      -webkit-filter: brightness(80%);\n      filter: brightness(80%);\n}\n.care-tips .feedback-statistic .feedback-icon[data-v-6a0cf85c] {\n    width: 25px;\n    height: 25px;\n}\n.care-tips .feedback-statistic .feedback-num[data-v-6a0cf85c] {\n    position: relative;\n    padding: 0px 10px 0px 5px;\n}\n.care-tips .feedback-statistic .feedback-num .tip[data-v-6a0cf85c] {\n      padding: 5px;\n      box-shadow: 5px 5px 5px rgba(50, 50, 50, 0.8);\n      border-radius: 3px;\n      position: absolute;\n      top: 40px;\n      left: -50%;\n      width: 150px;\n      text-align: center;\n      visibility: hidden;\n      z-index: 1;\n      background-color: #ffffff;\n}\n.care-tips .feedback-statistic .feedback-num:hover .tip[data-v-6a0cf85c] {\n      visibility: visible;\n}\n.care-tips .inform-message[data-v-6a0cf85c] {\n  width: 100%;\n  background-color: #aaaaaa;\n  color: #ffffff;\n  text-align: center;\n  padding: 10px;\n  position: fixed;\n  left: 0px;\n  height: 40px;\n  top: -40px;\n  z-index: 99;\n  -webkit-transition: top 0.5s ease;\n  transition: top 0.5s ease;\n}\n.care-tips .inform-message.show[data-v-6a0cf85c] {\n    top: 0px;\n}\n.care-tips .message-list .message[data-v-6a0cf85c] {\n  margin: 10px;\n  border-bottom: 1px solid #dddddd;\n  padding: 0px;\n}\n.care-tips .message-list .message .message-content[data-v-6a0cf85c] {\n    padding-left: 10px;\n    white-space: pre-wrap;\n}\n.care-tips .message-list .sub-info[data-v-6a0cf85c] {\n  display: flex;\n  justify-content: flex-end;\n  flex-wrap: wrap;\n  align-items: center;\n  font-size: 0.8em;\n  color: #888888;\n}\n.care-tips .message-list .sub-info .info-item[data-v-6a0cf85c] {\n    margin: 10px 5px;\n}\n.care-tips .message-box[data-v-6a0cf85c] {\n  border: 1px solid #cccccc;\n  border-radius: 5px;\n  padding: 10px;\n}\n.care-tips .message-box textarea[data-v-6a0cf85c] {\n    border: none;\n    outline: none;\n    width: 100%;\n    height: 60px;\n    resize: none;\n    font-size: 1.1em;\n}\n.care-tips .message-box .bt-container[data-v-6a0cf85c] {\n    display: flex;\n    justify-content: flex-end;\n    flex-wrap: wrap;\n    align-items: center;\n}\n.care-tips .message-box .bt-container .bt[data-v-6a0cf85c] {\n      display: inline-block;\n      float: right;\n      color: #ffffff;\n      padding: 5px 10px;\n      margin: 0px;\n      background-color: #555555;\n      cursor: pointer;\n      border-radius: 3px;\n}\n.care-tips .message-box .bt-container .bt[data-v-6a0cf85c]:hover {\n        background-color: #888888;\n}\n.care-tips .panel-title[data-v-6a0cf85c] {\n  font-size: 1.5em;\n  text-align: center;\n  margin: 20px;\n}\n.care-tips .no-result-box[data-v-6a0cf85c] {\n  width: 1200px;\n  max-width: 100%;\n  background-color: #ffffff;\n  color: #333333;\n  padding: 20px;\n  border-radius: 5px;\n  margin: 10px auto;\n  text-align: center;\n  font-size: 1.2em;\n}\n.care-tips .no-result-box .center-bt[data-v-6a0cf85c] {\n    background-color: #ffffff;\n    color: #ff5555;\n    border: 1px solid #ff5555;\n    width: 200px;\n    padding: 10px;\n    margin: 40px auto;\n    border-radius: 5px;\n    cursor: pointer;\n}\n.care-tips .no-result-box .center-bt[data-v-6a0cf85c]:hover {\n      color: #ff8888;\n      border: 1px solid #ff8888;\n}\n.care-tips .input-panel[data-v-6a0cf85c] {\n  position: fixed;\n  top: 70px;\n  left: 0px;\n  width: 100%;\n  height: calc(100% - 130px);\n  padding: 10px;\n  background-color: rgba(50, 50, 50, 0.5);\n  color: white;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.care-tips .input-panel.full[data-v-6a0cf85c] {\n    top: 0px;\n    height: calc(100% - 60px);\n}\n.care-tips .close-bt[data-v-6a0cf85c] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  font-size: 1.2em;\n  cursor: pointer;\n  padding: 5px 10px;\n  color: #ff5555;\n  border: 1px solid #ff5555;\n  border-radius: 5px;\n}\n.care-tips .close-bt[data-v-6a0cf85c]:hover {\n    color: #ff8888;\n    border: 1px solid #ff8888;\n}\n.care-tips .input-area[data-v-6a0cf85c] {\n  max-height: 100%;\n  overflow-y: auto;\n  position: relative;\n  background-color: #f8f8f8;\n  color: #323232;\n  border-radius: 5px;\n  width: 1024px;\n  max-width: 100%;\n  margin: auto;\n  padding: 10px;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  -ms-transform: translateY(-50%);\n  transform: translateY(-50%);\n}\n.care-tips .input-area .input-item[data-v-6a0cf85c] {\n    margin: 5px;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    flex-wrap: wrap;\n}\n.care-tips .input-area .input-item .item[data-v-6a0cf85c] {\n      margin: 5px;\n}\n.care-tips .input-area .input-label[data-v-6a0cf85c] {\n    font-size: 1.2em;\n    display: inline-block;\n    margin: 5px;\n}\n.care-tips .input-area select[data-v-6a0cf85c] {\n    border-radius: 3px;\n    max-width: 100%;\n    padding: 5px;\n    font-size: 1.1em;\n}\n.care-tips .input-area textarea[data-v-6a0cf85c] {\n    margin: 10px 0px;\n    border-radius: 3px;\n    padding: 10px;\n    width: 100%;\n    height: 120px;\n    resize: none;\n    font-size: 1.1em;\n}\n.care-tips .input-area input[type=\"number\"][data-v-6a0cf85c] {\n    max-width: 100%;\n    padding: 5px;\n    border-radius: 3px;\n    max-width: 80px;\n    font-size: 1.1em;\n}\n.care-tips .input-area input[type=\"text\"][data-v-6a0cf85c] {\n    max-width: 100%;\n    padding: 5px;\n    border-radius: 3px;\n    font-size: 1.1em;\n}\n.care-tips .input-area .filter-icon[data-v-6a0cf85c] {\n    width: 30px;\n    height: 30px;\n    margin: 5px;\n    padding: 2px;\n    cursor: pointer;\n}\n.care-tips .input-area .filter-icon[data-v-6a0cf85c]:hover {\n      padding: 0px;\n}\n.care-tips .input-area .filter-list[data-v-6a0cf85c] {\n    padding: 10px;\n}\n.care-tips .input-area .filter-list .filter-category[data-v-6a0cf85c] {\n      padding: 10px;\n      color: #888888;\n}\n.care-tips .input-area .filter-list .filter-category .cat-label[data-v-6a0cf85c] {\n        font-size: 1.5em;\n        font-weight: bold;\n}\n.care-tips .input-area .filter-list .filter-problem[data-v-6a0cf85c] {\n      color: #333333;\n      display: flex;\n      justify-content: flex-start;\n      align-items: center;\n      flex-wrap: wrap;\n      padding: 5px;\n}\n.care-tips .input-area .filter-list .filter-problem .problem-label[data-v-6a0cf85c] {\n        font-size: 1.2em;\n        font-weight: bold;\n}\n.care-tips .input-area .filter-list .filter-item[data-v-6a0cf85c] {\n      margin: 5px;\n      padding: 5px;\n      cursor: pointer;\n}\n.care-tips .input-area .filter-list .filter-item[data-v-6a0cf85c]:hover {\n        border-bottom: 1px solid #BE9063;\n}\n.care-tips .slide-panel[data-v-6a0cf85c] {\n  position: fixed;\n  top: 0px;\n  left: 100%;\n  width: 100%;\n  max-width: 100%;\n  height: calc(100% - 60px);\n  padding: 10px;\n  z-index: 10;\n  color: white;\n  background-color: rgba(50, 50, 50, 0.5);\n  overflow-x: hidden;\n  overflow-y: auto;\n  -webkit-transition: left 0.5s ease;\n  transition: left 0.5s ease;\n}\n.care-tips .slide-panel.open[data-v-6a0cf85c] {\n    left: 0px;\n}\n.care-tips .side-panel[data-v-6a0cf85c] {\n  position: fixed;\n  top: 0px;\n  left: -400px;\n  width: 300px;\n  max-width: 100%;\n  height: 100%;\n  padding: 10px;\n  z-index: 11;\n  color: #333333;\n  background-color: rgba(240, 240, 240, 0.9);\n  border-radius: 0px 5px 5px 0px;\n  box-shadow: 3px 3px 5px #888888;\n  overflow-x: hidden;\n  overflow-y: auto;\n  -webkit-transition: left 0.5s ease;\n  transition: left 0.5s ease;\n}\n.care-tips .side-panel.open[data-v-6a0cf85c] {\n    left: 0px;\n}\n.care-tips .side-panel .search-container[data-v-6a0cf85c] {\n    width: 400px;\n    max-width: 100%;\n    margin: auto;\n}\n.care-tips .side-panel .search-container .search-item[data-v-6a0cf85c] {\n      margin: 5px;\n      font-size: 1.1em;\n}\n.care-tips .side-panel .search-container .search-item input[data-v-6a0cf85c] {\n        padding: 5px;\n        width: 100%;\n}\n.care-tips .side-panel .search-container .search-item select[data-v-6a0cf85c] {\n        padding: 5px;\n        width: 100%;\n}\n.care-tips .side-panel .search-container .search-item .search-label[data-v-6a0cf85c] {\n        padding: 5px;\n}\n.care-tips .tab-bar[data-v-6a0cf85c] {\n  position: fixed;\n  left: 0px;\n  bottom: 0px;\n  width: 100%;\n  height: 60px;\n  z-index: 9;\n  background-color: rgba(240, 240, 240, 0.9);\n  box-shadow: 0px 0px 5px #888888;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.care-tips .tab-bar .tab-bt-container[data-v-6a0cf85c] {\n    display: flex;\n    overflow-x: auto;\n    padding: 10px;\n}\n.care-tips .tab-bt[data-v-6a0cf85c] {\n  text-align: center;\n  min-width: 110px;\n  cursor: pointer;\n  padding: 5px 10px;\n  background-color: #ffffff;\n  color: #555555;\n  border: 1px solid #555555;\n  border-radius: 5px;\n  margin: 0px 10px;\n}\n.care-tips .tab-bt[data-v-6a0cf85c]:hover {\n    color: #888888;\n    border: 1px solid #888888;\n}\n.care-tips .tab-bt.on[data-v-6a0cf85c] {\n    color: #ff5555;\n    border: 1px solid #ff5555;\n}\n.care-calculator[data-v-6a0cf85c] {\n  width: 1024px;\n  max-width: 100%;\n  padding: 0px;\n  margin: auto;\n  height: 100%;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n@media only screen and (min-width: 640px) {\n.care-calculator[data-v-6a0cf85c] {\n      padding: 10px;\n}\n}\n.care-calculator a[data-v-6a0cf85c] {\n    text-decoration: none;\n    color: #FF6666;\n}\n.care-calculator a[data-v-6a0cf85c]:hover {\n      color: #FF3333;\n}\n.care-calculator .comp-header[data-v-6a0cf85c] {\n    margin: 10px auto;\n    font-size: 1.6em;\n    text-align: center;\n    padding: 10px;\n    color: #ffffff;\n    background-color: #6A8A82;\n    border-radius: 3px 3px 0px 0px;\n}\n.care-calculator .price-panel[data-v-6a0cf85c] {\n    max-width: 100%;\n    margin: auto;\n}\n.care-calculator .price-panel .option-container[data-v-6a0cf85c] {\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: center;\n      align-items: center;\n}\n.care-calculator .price-panel .used-title[data-v-6a0cf85c] {\n      text-align: center;\n      font-size: 1.2em;\n}\n.care-calculator .price-panel .price-option[data-v-6a0cf85c] {\n      display: inline-block;\n      margin: 10px;\n      padding: 10px;\n      height: 50px;\n      width: 230px;\n      max-width: 100%;\n      text-align: center;\n      background-color: #dddddd;\n}\n.care-calculator .price-panel .price-option select[data-v-6a0cf85c] {\n        margin: 0px 10px;\n        padding: 5px;\n}\n.care-calculator .price-panel .price-option input[type=\"checkbox\"][data-v-6a0cf85c] {\n        width: 20px;\n        height: 20px;\n        position: relative;\n        top: 3px;\n}\n.care-calculator .price-panel .price-option input[type=\"number\"][data-v-6a0cf85c] {\n        max-width: 80px;\n        padding: 5px;\n        margin: 0px 10px;\n}\n.care-calculator .price-panel .price-summary[data-v-6a0cf85c] {\n      margin: 10px;\n      background-color: #eeeeee;\n      padding: 0px 0px 10px 0px;\n}\n.care-calculator .price-panel .price-summary .sub-header[data-v-6a0cf85c] {\n        margin: 10px auto;\n        font-size: 1.2em;\n        text-align: left;\n        padding: 10px;\n        color: #ffffff;\n        background-color: #A4A4BF;\n}\n.care-calculator .price-panel .price-summary .price-category[data-v-6a0cf85c] {\n        display: inline-block;\n        margin: 10px;\n        padding: 10px;\n        border-radius: 3px;\n}\n.care-calculator .price-panel .price-summary .price-limit[data-v-6a0cf85c] {\n        display: inline-block;\n        margin: 10px;\n}\n.care-calculator .price-panel .price-final[data-v-6a0cf85c] {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      flex-wrap: wrap;\n}\n.care-calculator .price-panel .price-final .price-type[data-v-6a0cf85c] {\n        font-weight: bold;\n        font-size: 1.3em;\n        padding: 10px;\n        border-bottom: 1px solid #BE9063;\n}\n.care-calculator .price-panel .price-final .final-item[data-v-6a0cf85c] {\n        font-size: 1.2em;\n        color: #333333;\n        padding: 10px;\n}\n.care-calculator .price-panel .remark[data-v-6a0cf85c] {\n      margin: 10px;\n      text-align: center;\n      font-size: 1em;\n      color: red;\n}\n.care-calculator .service-list[data-v-6a0cf85c] {\n    background-color: #eeeeee;\n    padding-bottom: 10px;\n    margin-bottom: 10px;\n}\n.care-calculator .service-list .remark[data-v-6a0cf85c] {\n      font-size: 1em;\n      text-align: center;\n      margin: 10px;\n}\n.care-calculator .service-list .service-container[data-v-6a0cf85c] {\n      padding: 5px;\n}\n.care-calculator .service-list .service-item[data-v-6a0cf85c] {\n      border-radius: 3px;\n}\n.care-calculator .service-list .service-item .item-title[data-v-6a0cf85c] {\n        padding: 10px;\n        font-size: 1.2em;\n        font-weight: bold;\n        border-bottom: 1px solid #eeeeee;\n}\n.care-calculator .service-list .service-item .item-attr[data-v-6a0cf85c] {\n        display: inline-block;\n        margin: 10px;\n        font-size: 1.2em;\n}\n.care-calculator .service-list .service-item .item-bt-container[data-v-6a0cf85c] {\n        padding: 10px;\n        display: flex;\n        justify-content: flex-end;\n        align-items: center;\n        flex-wrap: wrap;\n}\n.care-calculator .service-list .service-item .item-bt[data-v-6a0cf85c] {\n        display: inline-block;\n        margin: 0px 0px 0px 10px;\n        padding: 5px 10px;\n        cursor: pointer;\n        background-color: #eeeeee;\n        color: #333333;\n        border-radius: 3px;\n}\n.care-calculator .service-list .service-item .item-bt[data-v-6a0cf85c]:hover {\n          background-color: #dddddd;\n}\n.care-calculator .input-bt-container[data-v-6a0cf85c] {\n    margin: 20px auto 10px auto;\n}\n.care-calculator .category-option[data-v-6a0cf85c] {\n    text-align: left;\n    padding: 0px 5px;\n}\n.care-calculator .category-option select[data-v-6a0cf85c] {\n      font-size: 1.1em;\n      padding: 5px;\n      margin: 5px 0px;\n      border-radius: 3px;\n}\n.care-calculator .category-option input[type=\"number\"][data-v-6a0cf85c] {\n      padding: 5px;\n      margin: 5px 0px;\n      border-radius: 3px;\n      max-width: 80px;\n}\n.care-calculator .category-option input[type=\"input\"][data-v-6a0cf85c] {\n      padding: 5px;\n      margin: 5px 0px;\n      border-radius: 3px;\n      max-width: 100px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/care-service-selection.vue?vue&type=style&index=0&id=35388ed4&lang=scss&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/care-service-selection.vue?vue&type=style&index=0&id=35388ed4&lang=scss&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n@charset \"UTF-8\";\nhtml[data-v-35388ed4], body[data-v-35388ed4] {\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  overflow: visible;\n}\n*[data-v-35388ed4] {\n  box-sizing: border-box;\n  font-family: \"\\5FAE\\8EDF\\6B63\\9ED1\\9AD4\", \"Microsoft JhengHei\";\n}\n.center[data-v-35388ed4] {\n  display: block;\n  margin: auto;\n  clear: both;\n  text-align: center;\n}\n.hide[data-v-35388ed4] {\n  display: none;\n}\n.warning[data-v-35388ed4] {\n  color: red;\n}\n.bold[data-v-35388ed4] {\n  font-weight: bold;\n}\n.inline-block[data-v-35388ed4] {\n  display: inline-block;\n}\na[data-v-35388ed4] {\n  text-decoration: none;\n  color: #ff3333;\n}\na[data-v-35388ed4]:hover {\n    color: #ff8800;\n}\n.one-third-w[data-v-35388ed4] {\n  display: inline-block;\n  vertical-align: middle;\n  margin: 10px 0px;\n  width: 100%;\n}\n@media only screen and (min-width: 640px) {\n.one-third-w[data-v-35388ed4] {\n      width: calc(50% - 20px);\n      margin: 10px;\n}\n}\n@media only screen and (min-width: 1024px) {\n.one-third-w[data-v-35388ed4] {\n      width: calc(33% - 20px);\n      margin: 10px;\n}\n}\n.half-w[data-v-35388ed4] {\n  display: inline-block;\n  vertical-align: middle;\n  margin: 10px 0px;\n  width: 100%;\n}\n@media only screen and (min-width: 640px) {\n.half-w[data-v-35388ed4] {\n      width: calc(50% - 20px);\n      margin: 10px;\n}\n}\n.full-w[data-v-35388ed4] {\n  display: block;\n  margin: 10px 0px;\n  width: 100%;\n}\n.problem-cat[data-v-35388ed4] {\n  background-color: #f8f8f8;\n  padding: 0px 0px 10px 0px;\n  margin: 10px auto;\n  border-radius: 5px;\n}\n.problem-cat .problem-header[data-v-35388ed4] {\n    margin: 0px auto;\n    font-size: 1.2em;\n    text-align: left;\n    padding: 10px;\n    background-color: #dddddd;\n    border-radius: 5px 5px 0px 0px;\n}\n.problem-cat .problem-container[data-v-35388ed4] {\n    padding: 0px;\n}\n.problem-cat .problem-item[data-v-35388ed4] {\n    border-radius: 5px;\n}\n.problem-cat .problem-item.select[data-v-35388ed4] {\n      border: 1px solid red;\n}\n.problem-cat .problem-item .problem-title[data-v-35388ed4] {\n      padding: 10px;\n      border-bottom: 1px solid #eeeeee;\n}\n.problem-cat .problem-item .problem-desc[data-v-35388ed4] {\n      white-space: pre-wrap;\n      padding: 10px;\n}\n.problem-cat .problem-item .problem-body[data-v-35388ed4] {\n      color: black;\n}\n.problem-cat .problem-item .item-bt-container[data-v-35388ed4] {\n      padding: 10px;\n      display: flex;\n      justify-content: flex-end;\n      align-items: center;\n      flex-wrap: wrap;\n}\n.problem-cat .problem-item .item-bt[data-v-35388ed4] {\n      display: inline-block;\n      margin: 0px 0px 0px 10px;\n      padding: 5px 10px;\n      cursor: pointer;\n      background-color: #eeeeee;\n      color: #333333;\n      border-radius: 3px;\n}\n.problem-cat .problem-item .item-bt[data-v-35388ed4]:hover {\n        background-color: #ffffff;\n}\n.problem-cat .problem-item .target-info[data-v-35388ed4] {\n      padding: 5px 10px;\n      color: #555555;\n}\n.cat-D1[data-v-35388ed4] {\n  background-color: #FFA5A4;\n}\n.cat-D2[data-v-35388ed4] {\n  background-color: #DEE885;\n}\n.cat-D3[data-v-35388ed4] {\n  background-color: #85CAE8;\n}\n.cat-D4[data-v-35388ed4] {\n  background-color: #C089E8;\n}\n.cat-A[data-v-35388ed4] {\n  background-color: #FFA5A4;\n}\n.cat-B[data-v-35388ed4] {\n  background-color: #FFDE9C;\n}\n.cat-C[data-v-35388ed4] {\n  background-color: #DEE885;\n}\n.cat-D[data-v-35388ed4] {\n  background-color: #9FFFBC;\n}\n.cat-E[data-v-35388ed4] {\n  background-color: #85CAE8;\n}\n.cat-F[data-v-35388ed4] {\n  background-color: #AF93FF;\n}\n.cat-G[data-v-35388ed4] {\n  background-color: #C089E8;\n}\n.cat-O[data-v-35388ed4] {\n  background-color: #FF8AE7;\n}\n.list-item[data-v-35388ed4] {\n  background-color: #eeeeee;\n  border-radius: 5px;\n  max-width: 100%;\n  margin: 10px 0px;\n  padding-bottom: 10px;\n  cursor: pointer;\n}\n@media only screen and (min-width: 640px) {\n.list-item[data-v-35388ed4] {\n      margin: 10px;\n}\n}\n.list-item a[data-v-35388ed4] {\n    text-decoration: none;\n    color: #323232;\n}\n.list-item .domain-statistic[data-v-35388ed4] {\n    display: flex;\n    justify-content: flex-start;\n    flex-wrap: wrap;\n    align-items: center;\n}\n.list-item .domain-statistic .domain-info[data-v-35388ed4] {\n      position: relative;\n      display: flex;\n      justify-content: flex-start;\n      flex-wrap: wrap;\n      align-items: center;\n}\n.list-item .domain-statistic .domain-info .domain-icon[data-v-35388ed4] {\n        display: inline-block;\n        padding: 7px;\n        margin: 10px 5px 10px 10px;\n        border-radius: 3px;\n}\n.list-item .domain-statistic .domain-info .domain-num[data-v-35388ed4] {\n        display: inline-block;\n        font-size: 0.8em;\n        vertical-align: middle;\n}\n.list-item .domain-statistic .domain-info .tip[data-v-35388ed4] {\n        padding: 5px;\n        box-shadow: 5px 5px 5px rgba(50, 50, 50, 0.8);\n        border-radius: 3px;\n        position: absolute;\n        top: 40px;\n        left: 10px;\n        width: 120px;\n        text-align: center;\n        z-index: 1;\n        opacity: 0;\n        -webkit-transition: opacity 0.5s ease;\n        transition: opacity 0.5s ease;\n}\n.list-item .domain-statistic .domain-info:hover .tip[data-v-35388ed4] {\n        opacity: 1;\n}\n.list-item .desc[data-v-35388ed4] {\n    white-space: pre-wrap;\n    color: #333333;\n    padding: 0px 20px 0px 10px;\n    width: 100%;\n    height: 4.5em;\n    line-height: 1.5em;\n    overflow: hidden;\n}\n.load-more[data-v-35388ed4] {\n  width: 500px;\n  max-width: 100%;\n  padding: 10px 20px;\n  border-radius: 5px;\n  margin: 20px auto;\n  border: 1px solid #888888;\n  color: #888888;\n  background-color: #ffffff;\n  cursor: pointer;\n  text-align: center;\n}\n.load-more[data-v-35388ed4]:hover {\n    border: 1px solid #333333;\n    color: #333333;\n}\n.fade-enter-active[data-v-35388ed4], .fade-leave-active[data-v-35388ed4] {\n  transition: opacity 0.5s;\n}\n.fade-enter[data-v-35388ed4], .fade-leave-to[data-v-35388ed4] {\n  opacity: 0;\n}\n.create-enter-active[data-v-35388ed4] {\n  transition: opacity 0.5s;\n}\n.create-enter[data-v-35388ed4] {\n  opacity: 0;\n}\n.main-container[data-v-35388ed4] {\n  width: 100%;\n  margin: 80px auto 20px auto;\n  padding: 0px 0px 50px 0px;\n  color: #333333;\n}\n.care-tips .sub-title[data-v-35388ed4] {\n  padding: 10px;\n  font-size: 1.5em;\n}\n.care-tips .mid-title[data-v-35388ed4] {\n  padding: 5px;\n  margin: 10px auto 0px auto;\n  font-size: 1.5em;\n  text-align: center;\n}\n.care-tips .mid-title .bottom-line[data-v-35388ed4] {\n    margin: auto;\n    width: 150px;\n    padding: 5px;\n    border-bottom: 1px solid #888888;\n}\n.care-tips .category-title[data-v-35388ed4] {\n  padding: 5px;\n  margin: 10px auto 0px auto;\n  font-size: 2em;\n  text-align: center;\n}\n.care-tips .category-title .bottom-line[data-v-35388ed4] {\n    margin: auto;\n    width: 150px;\n    padding: 5px;\n    border-bottom: 1px solid #888888;\n}\n.care-tips .category-separator[data-v-35388ed4] {\n  width: 800px;\n  max-width: 100%;\n  padding: 20px;\n  margin: auto;\n  border-bottom: 1px solid #dddddd;\n}\n.care-tips .separator[data-v-35388ed4] {\n  margin: 30px;\n  border-bottom: 1px solid #999999;\n}\n.care-tips .shadow-light[data-v-35388ed4] {\n  box-shadow: 5px 5px 5px #888888;\n}\n.care-tips .shadow-light[data-v-35388ed4]:hover {\n    box-shadow: 10px 10px 10px #888888;\n    -webkit-transition: box-shadow 0.5s ease;\n    transition: box-shadow 0.5s ease;\n}\n.care-tips .shadow-dark[data-v-35388ed4] {\n  box-shadow: 5px 5px 5px #333333;\n}\n.care-tips .shadow-dark[data-v-35388ed4]:hover {\n    box-shadow: 10px 10px 10px #333333;\n    -webkit-transition: box-shadow 0.5s ease;\n    transition: box-shadow 0.5s ease;\n}\n.care-tips .owner a[data-v-35388ed4] {\n  text-decoration: none;\n  color: #323232;\n}\n.care-tips .owner a[data-v-35388ed4]:hover {\n    color: #888888;\n}\n.care-tips .owner-info[data-v-35388ed4] {\n  display: flex;\n  justify-content: flex-start;\n  flex-wrap: wrap;\n  align-items: center;\n  border-bottom: 1px solid #eeeeee;\n  border-radius: 5px 5px 0px 0px;\n  padding: 10px;\n}\n.care-tips .owner-info .owner-icon[data-v-35388ed4] {\n    width: 30px;\n    height: 30px;\n    border-radius: 50%;\n    margin: 0px 5px 0px 0px;\n}\n.care-tips .owner-desc[data-v-35388ed4] {\n  white-space: pre-wrap;\n  padding: 10px;\n}\n.care-tips .bt-bar[data-v-35388ed4] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  flex-wrap: wrap;\n  width: 1024px;\n  max-width: 100%;\n  padding: 0px 15px;\n  margin: auto;\n}\n.care-tips .input-bt[data-v-35388ed4] {\n  display: inline-block;\n  color: #ffffff;\n  padding: 7px 10px;\n  margin: 5px;\n  background-color: #555555;\n  cursor: pointer;\n  border-radius: 3px;\n}\n.care-tips .input-bt[data-v-35388ed4]:hover {\n    background-color: #888888;\n}\n.care-tips .action-bt[data-v-35388ed4] {\n  color: #ff5555;\n  border: 1px solid #ff5555;\n  border-radius: 5px;\n  padding: 5px 10px;\n  margin: 5px;\n  cursor: pointer;\n}\n.care-tips .action-bt[data-v-35388ed4]:hover {\n    color: #ff8888;\n    border: 1px solid #ff8888;\n}\n.care-tips .feedback-statistic[data-v-35388ed4] {\n  display: flex;\n  justify-content: flex-end;\n  flex-wrap: wrap;\n  align-items: center;\n  padding: 5px;\n  color: #888888;\n  font-size: 0.9em;\n}\n.care-tips .feedback-statistic .container[data-v-35388ed4] {\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    align-items: center;\n    padding: 5px;\n}\n.care-tips .feedback-statistic .clickable[data-v-35388ed4] {\n    cursor: pointer;\n}\n.care-tips .feedback-statistic .clickable[data-v-35388ed4]:hover {\n      border-bottom: 2px solid #ff5555;\n      -webkit-filter: brightness(80%);\n      filter: brightness(80%);\n}\n.care-tips .feedback-statistic .feedback-icon[data-v-35388ed4] {\n    width: 25px;\n    height: 25px;\n}\n.care-tips .feedback-statistic .feedback-num[data-v-35388ed4] {\n    position: relative;\n    padding: 0px 10px 0px 5px;\n}\n.care-tips .feedback-statistic .feedback-num .tip[data-v-35388ed4] {\n      padding: 5px;\n      box-shadow: 5px 5px 5px rgba(50, 50, 50, 0.8);\n      border-radius: 3px;\n      position: absolute;\n      top: 40px;\n      left: -50%;\n      width: 150px;\n      text-align: center;\n      visibility: hidden;\n      z-index: 1;\n      background-color: #ffffff;\n}\n.care-tips .feedback-statistic .feedback-num:hover .tip[data-v-35388ed4] {\n      visibility: visible;\n}\n.care-tips .inform-message[data-v-35388ed4] {\n  width: 100%;\n  background-color: #aaaaaa;\n  color: #ffffff;\n  text-align: center;\n  padding: 10px;\n  position: fixed;\n  left: 0px;\n  height: 40px;\n  top: -40px;\n  z-index: 99;\n  -webkit-transition: top 0.5s ease;\n  transition: top 0.5s ease;\n}\n.care-tips .inform-message.show[data-v-35388ed4] {\n    top: 0px;\n}\n.care-tips .message-list .message[data-v-35388ed4] {\n  margin: 10px;\n  border-bottom: 1px solid #dddddd;\n  padding: 0px;\n}\n.care-tips .message-list .message .message-content[data-v-35388ed4] {\n    padding-left: 10px;\n    white-space: pre-wrap;\n}\n.care-tips .message-list .sub-info[data-v-35388ed4] {\n  display: flex;\n  justify-content: flex-end;\n  flex-wrap: wrap;\n  align-items: center;\n  font-size: 0.8em;\n  color: #888888;\n}\n.care-tips .message-list .sub-info .info-item[data-v-35388ed4] {\n    margin: 10px 5px;\n}\n.care-tips .message-box[data-v-35388ed4] {\n  border: 1px solid #cccccc;\n  border-radius: 5px;\n  padding: 10px;\n}\n.care-tips .message-box textarea[data-v-35388ed4] {\n    border: none;\n    outline: none;\n    width: 100%;\n    height: 60px;\n    resize: none;\n    font-size: 1.1em;\n}\n.care-tips .message-box .bt-container[data-v-35388ed4] {\n    display: flex;\n    justify-content: flex-end;\n    flex-wrap: wrap;\n    align-items: center;\n}\n.care-tips .message-box .bt-container .bt[data-v-35388ed4] {\n      display: inline-block;\n      float: right;\n      color: #ffffff;\n      padding: 5px 10px;\n      margin: 0px;\n      background-color: #555555;\n      cursor: pointer;\n      border-radius: 3px;\n}\n.care-tips .message-box .bt-container .bt[data-v-35388ed4]:hover {\n        background-color: #888888;\n}\n.care-tips .panel-title[data-v-35388ed4] {\n  font-size: 1.5em;\n  text-align: center;\n  margin: 20px;\n}\n.care-tips .no-result-box[data-v-35388ed4] {\n  width: 1200px;\n  max-width: 100%;\n  background-color: #ffffff;\n  color: #333333;\n  padding: 20px;\n  border-radius: 5px;\n  margin: 10px auto;\n  text-align: center;\n  font-size: 1.2em;\n}\n.care-tips .no-result-box .center-bt[data-v-35388ed4] {\n    background-color: #ffffff;\n    color: #ff5555;\n    border: 1px solid #ff5555;\n    width: 200px;\n    padding: 10px;\n    margin: 40px auto;\n    border-radius: 5px;\n    cursor: pointer;\n}\n.care-tips .no-result-box .center-bt[data-v-35388ed4]:hover {\n      color: #ff8888;\n      border: 1px solid #ff8888;\n}\n.care-tips .input-panel[data-v-35388ed4] {\n  position: fixed;\n  top: 70px;\n  left: 0px;\n  width: 100%;\n  height: calc(100% - 130px);\n  padding: 10px;\n  background-color: rgba(50, 50, 50, 0.5);\n  color: white;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.care-tips .input-panel.full[data-v-35388ed4] {\n    top: 0px;\n    height: calc(100% - 60px);\n}\n.care-tips .close-bt[data-v-35388ed4] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  font-size: 1.2em;\n  cursor: pointer;\n  padding: 5px 10px;\n  color: #ff5555;\n  border: 1px solid #ff5555;\n  border-radius: 5px;\n}\n.care-tips .close-bt[data-v-35388ed4]:hover {\n    color: #ff8888;\n    border: 1px solid #ff8888;\n}\n.care-tips .input-area[data-v-35388ed4] {\n  max-height: 100%;\n  overflow-y: auto;\n  position: relative;\n  background-color: #f8f8f8;\n  color: #323232;\n  border-radius: 5px;\n  width: 1024px;\n  max-width: 100%;\n  margin: auto;\n  padding: 10px;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  -ms-transform: translateY(-50%);\n  transform: translateY(-50%);\n}\n.care-tips .input-area .input-item[data-v-35388ed4] {\n    margin: 5px;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    flex-wrap: wrap;\n}\n.care-tips .input-area .input-item .item[data-v-35388ed4] {\n      margin: 5px;\n}\n.care-tips .input-area .input-label[data-v-35388ed4] {\n    font-size: 1.2em;\n    display: inline-block;\n    margin: 5px;\n}\n.care-tips .input-area select[data-v-35388ed4] {\n    border-radius: 3px;\n    max-width: 100%;\n    padding: 5px;\n    font-size: 1.1em;\n}\n.care-tips .input-area textarea[data-v-35388ed4] {\n    margin: 10px 0px;\n    border-radius: 3px;\n    padding: 10px;\n    width: 100%;\n    height: 120px;\n    resize: none;\n    font-size: 1.1em;\n}\n.care-tips .input-area input[type=\"number\"][data-v-35388ed4] {\n    max-width: 100%;\n    padding: 5px;\n    border-radius: 3px;\n    max-width: 80px;\n    font-size: 1.1em;\n}\n.care-tips .input-area input[type=\"text\"][data-v-35388ed4] {\n    max-width: 100%;\n    padding: 5px;\n    border-radius: 3px;\n    font-size: 1.1em;\n}\n.care-tips .input-area .filter-icon[data-v-35388ed4] {\n    width: 30px;\n    height: 30px;\n    margin: 5px;\n    padding: 2px;\n    cursor: pointer;\n}\n.care-tips .input-area .filter-icon[data-v-35388ed4]:hover {\n      padding: 0px;\n}\n.care-tips .input-area .filter-list[data-v-35388ed4] {\n    padding: 10px;\n}\n.care-tips .input-area .filter-list .filter-category[data-v-35388ed4] {\n      padding: 10px;\n      color: #888888;\n}\n.care-tips .input-area .filter-list .filter-category .cat-label[data-v-35388ed4] {\n        font-size: 1.5em;\n        font-weight: bold;\n}\n.care-tips .input-area .filter-list .filter-problem[data-v-35388ed4] {\n      color: #333333;\n      display: flex;\n      justify-content: flex-start;\n      align-items: center;\n      flex-wrap: wrap;\n      padding: 5px;\n}\n.care-tips .input-area .filter-list .filter-problem .problem-label[data-v-35388ed4] {\n        font-size: 1.2em;\n        font-weight: bold;\n}\n.care-tips .input-area .filter-list .filter-item[data-v-35388ed4] {\n      margin: 5px;\n      padding: 5px;\n      cursor: pointer;\n}\n.care-tips .input-area .filter-list .filter-item[data-v-35388ed4]:hover {\n        border-bottom: 1px solid #BE9063;\n}\n.care-tips .slide-panel[data-v-35388ed4] {\n  position: fixed;\n  top: 0px;\n  left: 100%;\n  width: 100%;\n  max-width: 100%;\n  height: calc(100% - 60px);\n  padding: 10px;\n  z-index: 10;\n  color: white;\n  background-color: rgba(50, 50, 50, 0.5);\n  overflow-x: hidden;\n  overflow-y: auto;\n  -webkit-transition: left 0.5s ease;\n  transition: left 0.5s ease;\n}\n.care-tips .slide-panel.open[data-v-35388ed4] {\n    left: 0px;\n}\n.care-tips .side-panel[data-v-35388ed4] {\n  position: fixed;\n  top: 0px;\n  left: -400px;\n  width: 300px;\n  max-width: 100%;\n  height: 100%;\n  padding: 10px;\n  z-index: 11;\n  color: #333333;\n  background-color: rgba(240, 240, 240, 0.9);\n  border-radius: 0px 5px 5px 0px;\n  box-shadow: 3px 3px 5px #888888;\n  overflow-x: hidden;\n  overflow-y: auto;\n  -webkit-transition: left 0.5s ease;\n  transition: left 0.5s ease;\n}\n.care-tips .side-panel.open[data-v-35388ed4] {\n    left: 0px;\n}\n.care-tips .side-panel .search-container[data-v-35388ed4] {\n    width: 400px;\n    max-width: 100%;\n    margin: auto;\n}\n.care-tips .side-panel .search-container .search-item[data-v-35388ed4] {\n      margin: 5px;\n      font-size: 1.1em;\n}\n.care-tips .side-panel .search-container .search-item input[data-v-35388ed4] {\n        padding: 5px;\n        width: 100%;\n}\n.care-tips .side-panel .search-container .search-item select[data-v-35388ed4] {\n        padding: 5px;\n        width: 100%;\n}\n.care-tips .side-panel .search-container .search-item .search-label[data-v-35388ed4] {\n        padding: 5px;\n}\n.care-tips .tab-bar[data-v-35388ed4] {\n  position: fixed;\n  left: 0px;\n  bottom: 0px;\n  width: 100%;\n  height: 60px;\n  z-index: 9;\n  background-color: rgba(240, 240, 240, 0.9);\n  box-shadow: 0px 0px 5px #888888;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.care-tips .tab-bar .tab-bt-container[data-v-35388ed4] {\n    display: flex;\n    overflow-x: auto;\n    padding: 10px;\n}\n.care-tips .tab-bt[data-v-35388ed4] {\n  text-align: center;\n  min-width: 110px;\n  cursor: pointer;\n  padding: 5px 10px;\n  background-color: #ffffff;\n  color: #555555;\n  border: 1px solid #555555;\n  border-radius: 5px;\n  margin: 0px 10px;\n}\n.care-tips .tab-bt[data-v-35388ed4]:hover {\n    color: #888888;\n    border: 1px solid #888888;\n}\n.care-tips .tab-bt.on[data-v-35388ed4] {\n    color: #ff5555;\n    border: 1px solid #ff5555;\n}\n.popup-panel[data-v-35388ed4] {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: #eeeeee;\n  overflow-y: auto;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/case-editor.vue?vue&type=style&index=0&id=84ab2184&lang=scss&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/case-editor.vue?vue&type=style&index=0&id=84ab2184&lang=scss&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n@charset \"UTF-8\";\nhtml[data-v-84ab2184], body[data-v-84ab2184] {\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  overflow: visible;\n}\n*[data-v-84ab2184] {\n  box-sizing: border-box;\n  font-family: \"\\5FAE\\8EDF\\6B63\\9ED1\\9AD4\", \"Microsoft JhengHei\";\n}\n.center[data-v-84ab2184] {\n  display: block;\n  margin: auto;\n  clear: both;\n  text-align: center;\n}\n.hide[data-v-84ab2184] {\n  display: none;\n}\n.warning[data-v-84ab2184] {\n  color: red;\n}\n.bold[data-v-84ab2184] {\n  font-weight: bold;\n}\n.inline-block[data-v-84ab2184] {\n  display: inline-block;\n}\na[data-v-84ab2184] {\n  text-decoration: none;\n  color: #ff3333;\n}\na[data-v-84ab2184]:hover {\n    color: #ff8800;\n}\n.one-third-w[data-v-84ab2184] {\n  display: inline-block;\n  vertical-align: middle;\n  margin: 10px 0px;\n  width: 100%;\n}\n@media only screen and (min-width: 640px) {\n.one-third-w[data-v-84ab2184] {\n      width: calc(50% - 20px);\n      margin: 10px;\n}\n}\n@media only screen and (min-width: 1024px) {\n.one-third-w[data-v-84ab2184] {\n      width: calc(33% - 20px);\n      margin: 10px;\n}\n}\n.half-w[data-v-84ab2184] {\n  display: inline-block;\n  vertical-align: middle;\n  margin: 10px 0px;\n  width: 100%;\n}\n@media only screen and (min-width: 640px) {\n.half-w[data-v-84ab2184] {\n      width: calc(50% - 20px);\n      margin: 10px;\n}\n}\n.full-w[data-v-84ab2184] {\n  display: block;\n  margin: 10px 0px;\n  width: 100%;\n}\n.problem-cat[data-v-84ab2184] {\n  background-color: #f8f8f8;\n  padding: 0px 0px 10px 0px;\n  margin: 10px auto;\n  border-radius: 5px;\n}\n.problem-cat .problem-header[data-v-84ab2184] {\n    margin: 0px auto;\n    font-size: 1.2em;\n    text-align: left;\n    padding: 10px;\n    background-color: #dddddd;\n    border-radius: 5px 5px 0px 0px;\n}\n.problem-cat .problem-container[data-v-84ab2184] {\n    padding: 0px;\n}\n.problem-cat .problem-item[data-v-84ab2184] {\n    border-radius: 5px;\n}\n.problem-cat .problem-item.select[data-v-84ab2184] {\n      border: 1px solid red;\n}\n.problem-cat .problem-item .problem-title[data-v-84ab2184] {\n      padding: 10px;\n      border-bottom: 1px solid #eeeeee;\n}\n.problem-cat .problem-item .problem-desc[data-v-84ab2184] {\n      white-space: pre-wrap;\n      padding: 10px;\n}\n.problem-cat .problem-item .problem-body[data-v-84ab2184] {\n      color: black;\n}\n.problem-cat .problem-item .item-bt-container[data-v-84ab2184] {\n      padding: 10px;\n      display: flex;\n      justify-content: flex-end;\n      align-items: center;\n      flex-wrap: wrap;\n}\n.problem-cat .problem-item .item-bt[data-v-84ab2184] {\n      display: inline-block;\n      margin: 0px 0px 0px 10px;\n      padding: 5px 10px;\n      cursor: pointer;\n      background-color: #eeeeee;\n      color: #333333;\n      border-radius: 3px;\n}\n.problem-cat .problem-item .item-bt[data-v-84ab2184]:hover {\n        background-color: #ffffff;\n}\n.problem-cat .problem-item .target-info[data-v-84ab2184] {\n      padding: 5px 10px;\n      color: #555555;\n}\n.cat-D1[data-v-84ab2184] {\n  background-color: #FFA5A4;\n}\n.cat-D2[data-v-84ab2184] {\n  background-color: #DEE885;\n}\n.cat-D3[data-v-84ab2184] {\n  background-color: #85CAE8;\n}\n.cat-D4[data-v-84ab2184] {\n  background-color: #C089E8;\n}\n.cat-A[data-v-84ab2184] {\n  background-color: #FFA5A4;\n}\n.cat-B[data-v-84ab2184] {\n  background-color: #FFDE9C;\n}\n.cat-C[data-v-84ab2184] {\n  background-color: #DEE885;\n}\n.cat-D[data-v-84ab2184] {\n  background-color: #9FFFBC;\n}\n.cat-E[data-v-84ab2184] {\n  background-color: #85CAE8;\n}\n.cat-F[data-v-84ab2184] {\n  background-color: #AF93FF;\n}\n.cat-G[data-v-84ab2184] {\n  background-color: #C089E8;\n}\n.cat-O[data-v-84ab2184] {\n  background-color: #FF8AE7;\n}\n.list-item[data-v-84ab2184] {\n  background-color: #eeeeee;\n  border-radius: 5px;\n  max-width: 100%;\n  margin: 10px 0px;\n  padding-bottom: 10px;\n  cursor: pointer;\n}\n@media only screen and (min-width: 640px) {\n.list-item[data-v-84ab2184] {\n      margin: 10px;\n}\n}\n.list-item a[data-v-84ab2184] {\n    text-decoration: none;\n    color: #323232;\n}\n.list-item .domain-statistic[data-v-84ab2184] {\n    display: flex;\n    justify-content: flex-start;\n    flex-wrap: wrap;\n    align-items: center;\n}\n.list-item .domain-statistic .domain-info[data-v-84ab2184] {\n      position: relative;\n      display: flex;\n      justify-content: flex-start;\n      flex-wrap: wrap;\n      align-items: center;\n}\n.list-item .domain-statistic .domain-info .domain-icon[data-v-84ab2184] {\n        display: inline-block;\n        padding: 7px;\n        margin: 10px 5px 10px 10px;\n        border-radius: 3px;\n}\n.list-item .domain-statistic .domain-info .domain-num[data-v-84ab2184] {\n        display: inline-block;\n        font-size: 0.8em;\n        vertical-align: middle;\n}\n.list-item .domain-statistic .domain-info .tip[data-v-84ab2184] {\n        padding: 5px;\n        box-shadow: 5px 5px 5px rgba(50, 50, 50, 0.8);\n        border-radius: 3px;\n        position: absolute;\n        top: 40px;\n        left: 10px;\n        width: 120px;\n        text-align: center;\n        z-index: 1;\n        opacity: 0;\n        -webkit-transition: opacity 0.5s ease;\n        transition: opacity 0.5s ease;\n}\n.list-item .domain-statistic .domain-info:hover .tip[data-v-84ab2184] {\n        opacity: 1;\n}\n.list-item .desc[data-v-84ab2184] {\n    white-space: pre-wrap;\n    color: #333333;\n    padding: 0px 20px 0px 10px;\n    width: 100%;\n    height: 4.5em;\n    line-height: 1.5em;\n    overflow: hidden;\n}\n.load-more[data-v-84ab2184] {\n  width: 500px;\n  max-width: 100%;\n  padding: 10px 20px;\n  border-radius: 5px;\n  margin: 20px auto;\n  border: 1px solid #888888;\n  color: #888888;\n  background-color: #ffffff;\n  cursor: pointer;\n  text-align: center;\n}\n.load-more[data-v-84ab2184]:hover {\n    border: 1px solid #333333;\n    color: #333333;\n}\n.fade-enter-active[data-v-84ab2184], .fade-leave-active[data-v-84ab2184] {\n  transition: opacity 0.5s;\n}\n.fade-enter[data-v-84ab2184], .fade-leave-to[data-v-84ab2184] {\n  opacity: 0;\n}\n.create-enter-active[data-v-84ab2184] {\n  transition: opacity 0.5s;\n}\n.create-enter[data-v-84ab2184] {\n  opacity: 0;\n}\n.main-container[data-v-84ab2184] {\n  width: 100%;\n  margin: 80px auto 20px auto;\n  padding: 0px 0px 50px 0px;\n  color: #333333;\n}\n.care-tips .sub-title[data-v-84ab2184] {\n  padding: 10px;\n  font-size: 1.5em;\n}\n.care-tips .mid-title[data-v-84ab2184] {\n  padding: 5px;\n  margin: 10px auto 0px auto;\n  font-size: 1.5em;\n  text-align: center;\n}\n.care-tips .mid-title .bottom-line[data-v-84ab2184] {\n    margin: auto;\n    width: 150px;\n    padding: 5px;\n    border-bottom: 1px solid #888888;\n}\n.care-tips .category-title[data-v-84ab2184] {\n  padding: 5px;\n  margin: 10px auto 0px auto;\n  font-size: 2em;\n  text-align: center;\n}\n.care-tips .category-title .bottom-line[data-v-84ab2184] {\n    margin: auto;\n    width: 150px;\n    padding: 5px;\n    border-bottom: 1px solid #888888;\n}\n.care-tips .category-separator[data-v-84ab2184] {\n  width: 800px;\n  max-width: 100%;\n  padding: 20px;\n  margin: auto;\n  border-bottom: 1px solid #dddddd;\n}\n.care-tips .separator[data-v-84ab2184] {\n  margin: 30px;\n  border-bottom: 1px solid #999999;\n}\n.care-tips .shadow-light[data-v-84ab2184] {\n  box-shadow: 5px 5px 5px #888888;\n}\n.care-tips .shadow-light[data-v-84ab2184]:hover {\n    box-shadow: 10px 10px 10px #888888;\n    -webkit-transition: box-shadow 0.5s ease;\n    transition: box-shadow 0.5s ease;\n}\n.care-tips .shadow-dark[data-v-84ab2184] {\n  box-shadow: 5px 5px 5px #333333;\n}\n.care-tips .shadow-dark[data-v-84ab2184]:hover {\n    box-shadow: 10px 10px 10px #333333;\n    -webkit-transition: box-shadow 0.5s ease;\n    transition: box-shadow 0.5s ease;\n}\n.care-tips .owner a[data-v-84ab2184] {\n  text-decoration: none;\n  color: #323232;\n}\n.care-tips .owner a[data-v-84ab2184]:hover {\n    color: #888888;\n}\n.care-tips .owner-info[data-v-84ab2184] {\n  display: flex;\n  justify-content: flex-start;\n  flex-wrap: wrap;\n  align-items: center;\n  border-bottom: 1px solid #eeeeee;\n  border-radius: 5px 5px 0px 0px;\n  padding: 10px;\n}\n.care-tips .owner-info .owner-icon[data-v-84ab2184] {\n    width: 30px;\n    height: 30px;\n    border-radius: 50%;\n    margin: 0px 5px 0px 0px;\n}\n.care-tips .owner-desc[data-v-84ab2184] {\n  white-space: pre-wrap;\n  padding: 10px;\n}\n.care-tips .bt-bar[data-v-84ab2184] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  flex-wrap: wrap;\n  width: 1024px;\n  max-width: 100%;\n  padding: 0px 15px;\n  margin: auto;\n}\n.care-tips .input-bt[data-v-84ab2184] {\n  display: inline-block;\n  color: #ffffff;\n  padding: 7px 10px;\n  margin: 5px;\n  background-color: #555555;\n  cursor: pointer;\n  border-radius: 3px;\n}\n.care-tips .input-bt[data-v-84ab2184]:hover {\n    background-color: #888888;\n}\n.care-tips .action-bt[data-v-84ab2184] {\n  color: #ff5555;\n  border: 1px solid #ff5555;\n  border-radius: 5px;\n  padding: 5px 10px;\n  margin: 5px;\n  cursor: pointer;\n}\n.care-tips .action-bt[data-v-84ab2184]:hover {\n    color: #ff8888;\n    border: 1px solid #ff8888;\n}\n.care-tips .feedback-statistic[data-v-84ab2184] {\n  display: flex;\n  justify-content: flex-end;\n  flex-wrap: wrap;\n  align-items: center;\n  padding: 5px;\n  color: #888888;\n  font-size: 0.9em;\n}\n.care-tips .feedback-statistic .container[data-v-84ab2184] {\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    align-items: center;\n    padding: 5px;\n}\n.care-tips .feedback-statistic .clickable[data-v-84ab2184] {\n    cursor: pointer;\n}\n.care-tips .feedback-statistic .clickable[data-v-84ab2184]:hover {\n      border-bottom: 2px solid #ff5555;\n      -webkit-filter: brightness(80%);\n      filter: brightness(80%);\n}\n.care-tips .feedback-statistic .feedback-icon[data-v-84ab2184] {\n    width: 25px;\n    height: 25px;\n}\n.care-tips .feedback-statistic .feedback-num[data-v-84ab2184] {\n    position: relative;\n    padding: 0px 10px 0px 5px;\n}\n.care-tips .feedback-statistic .feedback-num .tip[data-v-84ab2184] {\n      padding: 5px;\n      box-shadow: 5px 5px 5px rgba(50, 50, 50, 0.8);\n      border-radius: 3px;\n      position: absolute;\n      top: 40px;\n      left: -50%;\n      width: 150px;\n      text-align: center;\n      visibility: hidden;\n      z-index: 1;\n      background-color: #ffffff;\n}\n.care-tips .feedback-statistic .feedback-num:hover .tip[data-v-84ab2184] {\n      visibility: visible;\n}\n.care-tips .inform-message[data-v-84ab2184] {\n  width: 100%;\n  background-color: #aaaaaa;\n  color: #ffffff;\n  text-align: center;\n  padding: 10px;\n  position: fixed;\n  left: 0px;\n  height: 40px;\n  top: -40px;\n  z-index: 99;\n  -webkit-transition: top 0.5s ease;\n  transition: top 0.5s ease;\n}\n.care-tips .inform-message.show[data-v-84ab2184] {\n    top: 0px;\n}\n.care-tips .message-list .message[data-v-84ab2184] {\n  margin: 10px;\n  border-bottom: 1px solid #dddddd;\n  padding: 0px;\n}\n.care-tips .message-list .message .message-content[data-v-84ab2184] {\n    padding-left: 10px;\n    white-space: pre-wrap;\n}\n.care-tips .message-list .sub-info[data-v-84ab2184] {\n  display: flex;\n  justify-content: flex-end;\n  flex-wrap: wrap;\n  align-items: center;\n  font-size: 0.8em;\n  color: #888888;\n}\n.care-tips .message-list .sub-info .info-item[data-v-84ab2184] {\n    margin: 10px 5px;\n}\n.care-tips .message-box[data-v-84ab2184] {\n  border: 1px solid #cccccc;\n  border-radius: 5px;\n  padding: 10px;\n}\n.care-tips .message-box textarea[data-v-84ab2184] {\n    border: none;\n    outline: none;\n    width: 100%;\n    height: 60px;\n    resize: none;\n    font-size: 1.1em;\n}\n.care-tips .message-box .bt-container[data-v-84ab2184] {\n    display: flex;\n    justify-content: flex-end;\n    flex-wrap: wrap;\n    align-items: center;\n}\n.care-tips .message-box .bt-container .bt[data-v-84ab2184] {\n      display: inline-block;\n      float: right;\n      color: #ffffff;\n      padding: 5px 10px;\n      margin: 0px;\n      background-color: #555555;\n      cursor: pointer;\n      border-radius: 3px;\n}\n.care-tips .message-box .bt-container .bt[data-v-84ab2184]:hover {\n        background-color: #888888;\n}\n.care-tips .panel-title[data-v-84ab2184] {\n  font-size: 1.5em;\n  text-align: center;\n  margin: 20px;\n}\n.care-tips .no-result-box[data-v-84ab2184] {\n  width: 1200px;\n  max-width: 100%;\n  background-color: #ffffff;\n  color: #333333;\n  padding: 20px;\n  border-radius: 5px;\n  margin: 10px auto;\n  text-align: center;\n  font-size: 1.2em;\n}\n.care-tips .no-result-box .center-bt[data-v-84ab2184] {\n    background-color: #ffffff;\n    color: #ff5555;\n    border: 1px solid #ff5555;\n    width: 200px;\n    padding: 10px;\n    margin: 40px auto;\n    border-radius: 5px;\n    cursor: pointer;\n}\n.care-tips .no-result-box .center-bt[data-v-84ab2184]:hover {\n      color: #ff8888;\n      border: 1px solid #ff8888;\n}\n.care-tips .input-panel[data-v-84ab2184] {\n  position: fixed;\n  top: 70px;\n  left: 0px;\n  width: 100%;\n  height: calc(100% - 130px);\n  padding: 10px;\n  background-color: rgba(50, 50, 50, 0.5);\n  color: white;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.care-tips .input-panel.full[data-v-84ab2184] {\n    top: 0px;\n    height: calc(100% - 60px);\n}\n.care-tips .close-bt[data-v-84ab2184] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  font-size: 1.2em;\n  cursor: pointer;\n  padding: 5px 10px;\n  color: #ff5555;\n  border: 1px solid #ff5555;\n  border-radius: 5px;\n}\n.care-tips .close-bt[data-v-84ab2184]:hover {\n    color: #ff8888;\n    border: 1px solid #ff8888;\n}\n.care-tips .input-area[data-v-84ab2184] {\n  max-height: 100%;\n  overflow-y: auto;\n  position: relative;\n  background-color: #f8f8f8;\n  color: #323232;\n  border-radius: 5px;\n  width: 1024px;\n  max-width: 100%;\n  margin: auto;\n  padding: 10px;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  -ms-transform: translateY(-50%);\n  transform: translateY(-50%);\n}\n.care-tips .input-area .input-item[data-v-84ab2184] {\n    margin: 5px;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    flex-wrap: wrap;\n}\n.care-tips .input-area .input-item .item[data-v-84ab2184] {\n      margin: 5px;\n}\n.care-tips .input-area .input-label[data-v-84ab2184] {\n    font-size: 1.2em;\n    display: inline-block;\n    margin: 5px;\n}\n.care-tips .input-area select[data-v-84ab2184] {\n    border-radius: 3px;\n    max-width: 100%;\n    padding: 5px;\n    font-size: 1.1em;\n}\n.care-tips .input-area textarea[data-v-84ab2184] {\n    margin: 10px 0px;\n    border-radius: 3px;\n    padding: 10px;\n    width: 100%;\n    height: 120px;\n    resize: none;\n    font-size: 1.1em;\n}\n.care-tips .input-area input[type=\"number\"][data-v-84ab2184] {\n    max-width: 100%;\n    padding: 5px;\n    border-radius: 3px;\n    max-width: 80px;\n    font-size: 1.1em;\n}\n.care-tips .input-area input[type=\"text\"][data-v-84ab2184] {\n    max-width: 100%;\n    padding: 5px;\n    border-radius: 3px;\n    font-size: 1.1em;\n}\n.care-tips .input-area .filter-icon[data-v-84ab2184] {\n    width: 30px;\n    height: 30px;\n    margin: 5px;\n    padding: 2px;\n    cursor: pointer;\n}\n.care-tips .input-area .filter-icon[data-v-84ab2184]:hover {\n      padding: 0px;\n}\n.care-tips .input-area .filter-list[data-v-84ab2184] {\n    padding: 10px;\n}\n.care-tips .input-area .filter-list .filter-category[data-v-84ab2184] {\n      padding: 10px;\n      color: #888888;\n}\n.care-tips .input-area .filter-list .filter-category .cat-label[data-v-84ab2184] {\n        font-size: 1.5em;\n        font-weight: bold;\n}\n.care-tips .input-area .filter-list .filter-problem[data-v-84ab2184] {\n      color: #333333;\n      display: flex;\n      justify-content: flex-start;\n      align-items: center;\n      flex-wrap: wrap;\n      padding: 5px;\n}\n.care-tips .input-area .filter-list .filter-problem .problem-label[data-v-84ab2184] {\n        font-size: 1.2em;\n        font-weight: bold;\n}\n.care-tips .input-area .filter-list .filter-item[data-v-84ab2184] {\n      margin: 5px;\n      padding: 5px;\n      cursor: pointer;\n}\n.care-tips .input-area .filter-list .filter-item[data-v-84ab2184]:hover {\n        border-bottom: 1px solid #BE9063;\n}\n.care-tips .slide-panel[data-v-84ab2184] {\n  position: fixed;\n  top: 0px;\n  left: 100%;\n  width: 100%;\n  max-width: 100%;\n  height: calc(100% - 60px);\n  padding: 10px;\n  z-index: 10;\n  color: white;\n  background-color: rgba(50, 50, 50, 0.5);\n  overflow-x: hidden;\n  overflow-y: auto;\n  -webkit-transition: left 0.5s ease;\n  transition: left 0.5s ease;\n}\n.care-tips .slide-panel.open[data-v-84ab2184] {\n    left: 0px;\n}\n.care-tips .side-panel[data-v-84ab2184] {\n  position: fixed;\n  top: 0px;\n  left: -400px;\n  width: 300px;\n  max-width: 100%;\n  height: 100%;\n  padding: 10px;\n  z-index: 11;\n  color: #333333;\n  background-color: rgba(240, 240, 240, 0.9);\n  border-radius: 0px 5px 5px 0px;\n  box-shadow: 3px 3px 5px #888888;\n  overflow-x: hidden;\n  overflow-y: auto;\n  -webkit-transition: left 0.5s ease;\n  transition: left 0.5s ease;\n}\n.care-tips .side-panel.open[data-v-84ab2184] {\n    left: 0px;\n}\n.care-tips .side-panel .search-container[data-v-84ab2184] {\n    width: 400px;\n    max-width: 100%;\n    margin: auto;\n}\n.care-tips .side-panel .search-container .search-item[data-v-84ab2184] {\n      margin: 5px;\n      font-size: 1.1em;\n}\n.care-tips .side-panel .search-container .search-item input[data-v-84ab2184] {\n        padding: 5px;\n        width: 100%;\n}\n.care-tips .side-panel .search-container .search-item select[data-v-84ab2184] {\n        padding: 5px;\n        width: 100%;\n}\n.care-tips .side-panel .search-container .search-item .search-label[data-v-84ab2184] {\n        padding: 5px;\n}\n.care-tips .tab-bar[data-v-84ab2184] {\n  position: fixed;\n  left: 0px;\n  bottom: 0px;\n  width: 100%;\n  height: 60px;\n  z-index: 9;\n  background-color: rgba(240, 240, 240, 0.9);\n  box-shadow: 0px 0px 5px #888888;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.care-tips .tab-bar .tab-bt-container[data-v-84ab2184] {\n    display: flex;\n    overflow-x: auto;\n    padding: 10px;\n}\n.care-tips .tab-bt[data-v-84ab2184] {\n  text-align: center;\n  min-width: 110px;\n  cursor: pointer;\n  padding: 5px 10px;\n  background-color: #ffffff;\n  color: #555555;\n  border: 1px solid #555555;\n  border-radius: 5px;\n  margin: 0px 10px;\n}\n.care-tips .tab-bt[data-v-84ab2184]:hover {\n    color: #888888;\n    border: 1px solid #888888;\n}\n.care-tips .tab-bt.on[data-v-84ab2184] {\n    color: #ff5555;\n    border: 1px solid #ff5555;\n}\n.case-editor[data-v-84ab2184] {\n  width: 100%;\n  height: 100%;\n  overflow-x: hidden;\n  overflow-y: auto;\n  padding: 10px;\n}\n.case-editor a[data-v-84ab2184] {\n    text-decoration: none;\n    color: #FF6666;\n}\n.case-editor a[data-v-84ab2184]:hover {\n      color: #FF3333;\n}\n.case-editor textarea[data-v-84ab2184] {\n    border-radius: 3px;\n    padding: 10px;\n    width: 100%;\n    height: 120px;\n    resize: none;\n    font-size: 1.1em;\n}\n.case-editor .case-info[data-v-84ab2184] {\n    width: 1024px;\n    margin: auto;\n    max-width: 100%;\n}\n.case-editor .separator[data-v-84ab2184] {\n    margin: 30px;\n    border-bottom: 1px solid #999999;\n}\n.case-editor .cat-header[data-v-84ab2184] {\n    margin: 10px auto;\n    font-size: 1.6em;\n    text-align: center;\n    padding: 10px;\n    color: #ffffff;\n    background-color: #36688D;\n    border-radius: 3px;\n}\n.case-editor .box-title[data-v-84ab2184] {\n    font-size: 1.8em;\n    text-align: center;\n    margin: 10px auto;\n}\n.case-editor .remark[data-v-84ab2184] {\n    width: 800px;\n    max-width: 100%;\n    margin: auto;\n    font-size: 1em;\n    color: red;\n    padding: 20px 10px;\n}\n.case-editor .remark .remark-check[data-v-84ab2184] {\n      display: inline-block;\n      color: black;\n}\n.case-editor .remark input[type=\"checkbox\"][data-v-84ab2184] {\n      position: relative;\n      top: 4px;\n      width: 20px;\n      height: 20px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/case-list.vue?vue&type=style&index=0&id=95bdcfa2&lang=scss&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/case-list.vue?vue&type=style&index=0&id=95bdcfa2&lang=scss&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n@charset \"UTF-8\";\nhtml[data-v-95bdcfa2], body[data-v-95bdcfa2] {\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  overflow: visible;\n}\n*[data-v-95bdcfa2] {\n  box-sizing: border-box;\n  font-family: \"\\5FAE\\8EDF\\6B63\\9ED1\\9AD4\", \"Microsoft JhengHei\";\n}\n.center[data-v-95bdcfa2] {\n  display: block;\n  margin: auto;\n  clear: both;\n  text-align: center;\n}\n.hide[data-v-95bdcfa2] {\n  display: none;\n}\n.warning[data-v-95bdcfa2] {\n  color: red;\n}\n.bold[data-v-95bdcfa2] {\n  font-weight: bold;\n}\n.inline-block[data-v-95bdcfa2] {\n  display: inline-block;\n}\na[data-v-95bdcfa2] {\n  text-decoration: none;\n  color: #ff3333;\n}\na[data-v-95bdcfa2]:hover {\n    color: #ff8800;\n}\n.one-third-w[data-v-95bdcfa2] {\n  display: inline-block;\n  vertical-align: middle;\n  margin: 10px 0px;\n  width: 100%;\n}\n@media only screen and (min-width: 640px) {\n.one-third-w[data-v-95bdcfa2] {\n      width: calc(50% - 20px);\n      margin: 10px;\n}\n}\n@media only screen and (min-width: 1024px) {\n.one-third-w[data-v-95bdcfa2] {\n      width: calc(33% - 20px);\n      margin: 10px;\n}\n}\n.half-w[data-v-95bdcfa2] {\n  display: inline-block;\n  vertical-align: middle;\n  margin: 10px 0px;\n  width: 100%;\n}\n@media only screen and (min-width: 640px) {\n.half-w[data-v-95bdcfa2] {\n      width: calc(50% - 20px);\n      margin: 10px;\n}\n}\n.full-w[data-v-95bdcfa2] {\n  display: block;\n  margin: 10px 0px;\n  width: 100%;\n}\n.problem-cat[data-v-95bdcfa2] {\n  background-color: #f8f8f8;\n  padding: 0px 0px 10px 0px;\n  margin: 10px auto;\n  border-radius: 5px;\n}\n.problem-cat .problem-header[data-v-95bdcfa2] {\n    margin: 0px auto;\n    font-size: 1.2em;\n    text-align: left;\n    padding: 10px;\n    background-color: #dddddd;\n    border-radius: 5px 5px 0px 0px;\n}\n.problem-cat .problem-container[data-v-95bdcfa2] {\n    padding: 0px;\n}\n.problem-cat .problem-item[data-v-95bdcfa2] {\n    border-radius: 5px;\n}\n.problem-cat .problem-item.select[data-v-95bdcfa2] {\n      border: 1px solid red;\n}\n.problem-cat .problem-item .problem-title[data-v-95bdcfa2] {\n      padding: 10px;\n      border-bottom: 1px solid #eeeeee;\n}\n.problem-cat .problem-item .problem-desc[data-v-95bdcfa2] {\n      white-space: pre-wrap;\n      padding: 10px;\n}\n.problem-cat .problem-item .problem-body[data-v-95bdcfa2] {\n      color: black;\n}\n.problem-cat .problem-item .item-bt-container[data-v-95bdcfa2] {\n      padding: 10px;\n      display: flex;\n      justify-content: flex-end;\n      align-items: center;\n      flex-wrap: wrap;\n}\n.problem-cat .problem-item .item-bt[data-v-95bdcfa2] {\n      display: inline-block;\n      margin: 0px 0px 0px 10px;\n      padding: 5px 10px;\n      cursor: pointer;\n      background-color: #eeeeee;\n      color: #333333;\n      border-radius: 3px;\n}\n.problem-cat .problem-item .item-bt[data-v-95bdcfa2]:hover {\n        background-color: #ffffff;\n}\n.problem-cat .problem-item .target-info[data-v-95bdcfa2] {\n      padding: 5px 10px;\n      color: #555555;\n}\n.cat-D1[data-v-95bdcfa2] {\n  background-color: #FFA5A4;\n}\n.cat-D2[data-v-95bdcfa2] {\n  background-color: #DEE885;\n}\n.cat-D3[data-v-95bdcfa2] {\n  background-color: #85CAE8;\n}\n.cat-D4[data-v-95bdcfa2] {\n  background-color: #C089E8;\n}\n.cat-A[data-v-95bdcfa2] {\n  background-color: #FFA5A4;\n}\n.cat-B[data-v-95bdcfa2] {\n  background-color: #FFDE9C;\n}\n.cat-C[data-v-95bdcfa2] {\n  background-color: #DEE885;\n}\n.cat-D[data-v-95bdcfa2] {\n  background-color: #9FFFBC;\n}\n.cat-E[data-v-95bdcfa2] {\n  background-color: #85CAE8;\n}\n.cat-F[data-v-95bdcfa2] {\n  background-color: #AF93FF;\n}\n.cat-G[data-v-95bdcfa2] {\n  background-color: #C089E8;\n}\n.cat-O[data-v-95bdcfa2] {\n  background-color: #FF8AE7;\n}\n.list-item[data-v-95bdcfa2] {\n  background-color: #eeeeee;\n  border-radius: 5px;\n  max-width: 100%;\n  margin: 10px 0px;\n  padding-bottom: 10px;\n  cursor: pointer;\n}\n@media only screen and (min-width: 640px) {\n.list-item[data-v-95bdcfa2] {\n      margin: 10px;\n}\n}\n.list-item a[data-v-95bdcfa2] {\n    text-decoration: none;\n    color: #323232;\n}\n.list-item .domain-statistic[data-v-95bdcfa2] {\n    display: flex;\n    justify-content: flex-start;\n    flex-wrap: wrap;\n    align-items: center;\n}\n.list-item .domain-statistic .domain-info[data-v-95bdcfa2] {\n      position: relative;\n      display: flex;\n      justify-content: flex-start;\n      flex-wrap: wrap;\n      align-items: center;\n}\n.list-item .domain-statistic .domain-info .domain-icon[data-v-95bdcfa2] {\n        display: inline-block;\n        padding: 7px;\n        margin: 10px 5px 10px 10px;\n        border-radius: 3px;\n}\n.list-item .domain-statistic .domain-info .domain-num[data-v-95bdcfa2] {\n        display: inline-block;\n        font-size: 0.8em;\n        vertical-align: middle;\n}\n.list-item .domain-statistic .domain-info .tip[data-v-95bdcfa2] {\n        padding: 5px;\n        box-shadow: 5px 5px 5px rgba(50, 50, 50, 0.8);\n        border-radius: 3px;\n        position: absolute;\n        top: 40px;\n        left: 10px;\n        width: 120px;\n        text-align: center;\n        z-index: 1;\n        opacity: 0;\n        -webkit-transition: opacity 0.5s ease;\n        transition: opacity 0.5s ease;\n}\n.list-item .domain-statistic .domain-info:hover .tip[data-v-95bdcfa2] {\n        opacity: 1;\n}\n.list-item .desc[data-v-95bdcfa2] {\n    white-space: pre-wrap;\n    color: #333333;\n    padding: 0px 20px 0px 10px;\n    width: 100%;\n    height: 4.5em;\n    line-height: 1.5em;\n    overflow: hidden;\n}\n.load-more[data-v-95bdcfa2] {\n  width: 500px;\n  max-width: 100%;\n  padding: 10px 20px;\n  border-radius: 5px;\n  margin: 20px auto;\n  border: 1px solid #888888;\n  color: #888888;\n  background-color: #ffffff;\n  cursor: pointer;\n  text-align: center;\n}\n.load-more[data-v-95bdcfa2]:hover {\n    border: 1px solid #333333;\n    color: #333333;\n}\n.fade-enter-active[data-v-95bdcfa2], .fade-leave-active[data-v-95bdcfa2] {\n  transition: opacity 0.5s;\n}\n.fade-enter[data-v-95bdcfa2], .fade-leave-to[data-v-95bdcfa2] {\n  opacity: 0;\n}\n.create-enter-active[data-v-95bdcfa2] {\n  transition: opacity 0.5s;\n}\n.create-enter[data-v-95bdcfa2] {\n  opacity: 0;\n}\n.main-container[data-v-95bdcfa2] {\n  width: 100%;\n  margin: 80px auto 20px auto;\n  padding: 0px 0px 50px 0px;\n  color: #333333;\n}\n.care-tips .sub-title[data-v-95bdcfa2] {\n  padding: 10px;\n  font-size: 1.5em;\n}\n.care-tips .mid-title[data-v-95bdcfa2] {\n  padding: 5px;\n  margin: 10px auto 0px auto;\n  font-size: 1.5em;\n  text-align: center;\n}\n.care-tips .mid-title .bottom-line[data-v-95bdcfa2] {\n    margin: auto;\n    width: 150px;\n    padding: 5px;\n    border-bottom: 1px solid #888888;\n}\n.care-tips .category-title[data-v-95bdcfa2] {\n  padding: 5px;\n  margin: 10px auto 0px auto;\n  font-size: 2em;\n  text-align: center;\n}\n.care-tips .category-title .bottom-line[data-v-95bdcfa2] {\n    margin: auto;\n    width: 150px;\n    padding: 5px;\n    border-bottom: 1px solid #888888;\n}\n.care-tips .category-separator[data-v-95bdcfa2] {\n  width: 800px;\n  max-width: 100%;\n  padding: 20px;\n  margin: auto;\n  border-bottom: 1px solid #dddddd;\n}\n.care-tips .separator[data-v-95bdcfa2] {\n  margin: 30px;\n  border-bottom: 1px solid #999999;\n}\n.care-tips .shadow-light[data-v-95bdcfa2] {\n  box-shadow: 5px 5px 5px #888888;\n}\n.care-tips .shadow-light[data-v-95bdcfa2]:hover {\n    box-shadow: 10px 10px 10px #888888;\n    -webkit-transition: box-shadow 0.5s ease;\n    transition: box-shadow 0.5s ease;\n}\n.care-tips .shadow-dark[data-v-95bdcfa2] {\n  box-shadow: 5px 5px 5px #333333;\n}\n.care-tips .shadow-dark[data-v-95bdcfa2]:hover {\n    box-shadow: 10px 10px 10px #333333;\n    -webkit-transition: box-shadow 0.5s ease;\n    transition: box-shadow 0.5s ease;\n}\n.care-tips .owner a[data-v-95bdcfa2] {\n  text-decoration: none;\n  color: #323232;\n}\n.care-tips .owner a[data-v-95bdcfa2]:hover {\n    color: #888888;\n}\n.care-tips .owner-info[data-v-95bdcfa2] {\n  display: flex;\n  justify-content: flex-start;\n  flex-wrap: wrap;\n  align-items: center;\n  border-bottom: 1px solid #eeeeee;\n  border-radius: 5px 5px 0px 0px;\n  padding: 10px;\n}\n.care-tips .owner-info .owner-icon[data-v-95bdcfa2] {\n    width: 30px;\n    height: 30px;\n    border-radius: 50%;\n    margin: 0px 5px 0px 0px;\n}\n.care-tips .owner-desc[data-v-95bdcfa2] {\n  white-space: pre-wrap;\n  padding: 10px;\n}\n.care-tips .bt-bar[data-v-95bdcfa2] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  flex-wrap: wrap;\n  width: 1024px;\n  max-width: 100%;\n  padding: 0px 15px;\n  margin: auto;\n}\n.care-tips .input-bt[data-v-95bdcfa2] {\n  display: inline-block;\n  color: #ffffff;\n  padding: 7px 10px;\n  margin: 5px;\n  background-color: #555555;\n  cursor: pointer;\n  border-radius: 3px;\n}\n.care-tips .input-bt[data-v-95bdcfa2]:hover {\n    background-color: #888888;\n}\n.care-tips .action-bt[data-v-95bdcfa2] {\n  color: #ff5555;\n  border: 1px solid #ff5555;\n  border-radius: 5px;\n  padding: 5px 10px;\n  margin: 5px;\n  cursor: pointer;\n}\n.care-tips .action-bt[data-v-95bdcfa2]:hover {\n    color: #ff8888;\n    border: 1px solid #ff8888;\n}\n.care-tips .feedback-statistic[data-v-95bdcfa2] {\n  display: flex;\n  justify-content: flex-end;\n  flex-wrap: wrap;\n  align-items: center;\n  padding: 5px;\n  color: #888888;\n  font-size: 0.9em;\n}\n.care-tips .feedback-statistic .container[data-v-95bdcfa2] {\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    align-items: center;\n    padding: 5px;\n}\n.care-tips .feedback-statistic .clickable[data-v-95bdcfa2] {\n    cursor: pointer;\n}\n.care-tips .feedback-statistic .clickable[data-v-95bdcfa2]:hover {\n      border-bottom: 2px solid #ff5555;\n      -webkit-filter: brightness(80%);\n      filter: brightness(80%);\n}\n.care-tips .feedback-statistic .feedback-icon[data-v-95bdcfa2] {\n    width: 25px;\n    height: 25px;\n}\n.care-tips .feedback-statistic .feedback-num[data-v-95bdcfa2] {\n    position: relative;\n    padding: 0px 10px 0px 5px;\n}\n.care-tips .feedback-statistic .feedback-num .tip[data-v-95bdcfa2] {\n      padding: 5px;\n      box-shadow: 5px 5px 5px rgba(50, 50, 50, 0.8);\n      border-radius: 3px;\n      position: absolute;\n      top: 40px;\n      left: -50%;\n      width: 150px;\n      text-align: center;\n      visibility: hidden;\n      z-index: 1;\n      background-color: #ffffff;\n}\n.care-tips .feedback-statistic .feedback-num:hover .tip[data-v-95bdcfa2] {\n      visibility: visible;\n}\n.care-tips .inform-message[data-v-95bdcfa2] {\n  width: 100%;\n  background-color: #aaaaaa;\n  color: #ffffff;\n  text-align: center;\n  padding: 10px;\n  position: fixed;\n  left: 0px;\n  height: 40px;\n  top: -40px;\n  z-index: 99;\n  -webkit-transition: top 0.5s ease;\n  transition: top 0.5s ease;\n}\n.care-tips .inform-message.show[data-v-95bdcfa2] {\n    top: 0px;\n}\n.care-tips .message-list .message[data-v-95bdcfa2] {\n  margin: 10px;\n  border-bottom: 1px solid #dddddd;\n  padding: 0px;\n}\n.care-tips .message-list .message .message-content[data-v-95bdcfa2] {\n    padding-left: 10px;\n    white-space: pre-wrap;\n}\n.care-tips .message-list .sub-info[data-v-95bdcfa2] {\n  display: flex;\n  justify-content: flex-end;\n  flex-wrap: wrap;\n  align-items: center;\n  font-size: 0.8em;\n  color: #888888;\n}\n.care-tips .message-list .sub-info .info-item[data-v-95bdcfa2] {\n    margin: 10px 5px;\n}\n.care-tips .message-box[data-v-95bdcfa2] {\n  border: 1px solid #cccccc;\n  border-radius: 5px;\n  padding: 10px;\n}\n.care-tips .message-box textarea[data-v-95bdcfa2] {\n    border: none;\n    outline: none;\n    width: 100%;\n    height: 60px;\n    resize: none;\n    font-size: 1.1em;\n}\n.care-tips .message-box .bt-container[data-v-95bdcfa2] {\n    display: flex;\n    justify-content: flex-end;\n    flex-wrap: wrap;\n    align-items: center;\n}\n.care-tips .message-box .bt-container .bt[data-v-95bdcfa2] {\n      display: inline-block;\n      float: right;\n      color: #ffffff;\n      padding: 5px 10px;\n      margin: 0px;\n      background-color: #555555;\n      cursor: pointer;\n      border-radius: 3px;\n}\n.care-tips .message-box .bt-container .bt[data-v-95bdcfa2]:hover {\n        background-color: #888888;\n}\n.care-tips .panel-title[data-v-95bdcfa2] {\n  font-size: 1.5em;\n  text-align: center;\n  margin: 20px;\n}\n.care-tips .no-result-box[data-v-95bdcfa2] {\n  width: 1200px;\n  max-width: 100%;\n  background-color: #ffffff;\n  color: #333333;\n  padding: 20px;\n  border-radius: 5px;\n  margin: 10px auto;\n  text-align: center;\n  font-size: 1.2em;\n}\n.care-tips .no-result-box .center-bt[data-v-95bdcfa2] {\n    background-color: #ffffff;\n    color: #ff5555;\n    border: 1px solid #ff5555;\n    width: 200px;\n    padding: 10px;\n    margin: 40px auto;\n    border-radius: 5px;\n    cursor: pointer;\n}\n.care-tips .no-result-box .center-bt[data-v-95bdcfa2]:hover {\n      color: #ff8888;\n      border: 1px solid #ff8888;\n}\n.care-tips .input-panel[data-v-95bdcfa2] {\n  position: fixed;\n  top: 70px;\n  left: 0px;\n  width: 100%;\n  height: calc(100% - 130px);\n  padding: 10px;\n  background-color: rgba(50, 50, 50, 0.5);\n  color: white;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.care-tips .input-panel.full[data-v-95bdcfa2] {\n    top: 0px;\n    height: calc(100% - 60px);\n}\n.care-tips .close-bt[data-v-95bdcfa2] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  font-size: 1.2em;\n  cursor: pointer;\n  padding: 5px 10px;\n  color: #ff5555;\n  border: 1px solid #ff5555;\n  border-radius: 5px;\n}\n.care-tips .close-bt[data-v-95bdcfa2]:hover {\n    color: #ff8888;\n    border: 1px solid #ff8888;\n}\n.care-tips .input-area[data-v-95bdcfa2] {\n  max-height: 100%;\n  overflow-y: auto;\n  position: relative;\n  background-color: #f8f8f8;\n  color: #323232;\n  border-radius: 5px;\n  width: 1024px;\n  max-width: 100%;\n  margin: auto;\n  padding: 10px;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  -ms-transform: translateY(-50%);\n  transform: translateY(-50%);\n}\n.care-tips .input-area .input-item[data-v-95bdcfa2] {\n    margin: 5px;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    flex-wrap: wrap;\n}\n.care-tips .input-area .input-item .item[data-v-95bdcfa2] {\n      margin: 5px;\n}\n.care-tips .input-area .input-label[data-v-95bdcfa2] {\n    font-size: 1.2em;\n    display: inline-block;\n    margin: 5px;\n}\n.care-tips .input-area select[data-v-95bdcfa2] {\n    border-radius: 3px;\n    max-width: 100%;\n    padding: 5px;\n    font-size: 1.1em;\n}\n.care-tips .input-area textarea[data-v-95bdcfa2] {\n    margin: 10px 0px;\n    border-radius: 3px;\n    padding: 10px;\n    width: 100%;\n    height: 120px;\n    resize: none;\n    font-size: 1.1em;\n}\n.care-tips .input-area input[type=\"number\"][data-v-95bdcfa2] {\n    max-width: 100%;\n    padding: 5px;\n    border-radius: 3px;\n    max-width: 80px;\n    font-size: 1.1em;\n}\n.care-tips .input-area input[type=\"text\"][data-v-95bdcfa2] {\n    max-width: 100%;\n    padding: 5px;\n    border-radius: 3px;\n    font-size: 1.1em;\n}\n.care-tips .input-area .filter-icon[data-v-95bdcfa2] {\n    width: 30px;\n    height: 30px;\n    margin: 5px;\n    padding: 2px;\n    cursor: pointer;\n}\n.care-tips .input-area .filter-icon[data-v-95bdcfa2]:hover {\n      padding: 0px;\n}\n.care-tips .input-area .filter-list[data-v-95bdcfa2] {\n    padding: 10px;\n}\n.care-tips .input-area .filter-list .filter-category[data-v-95bdcfa2] {\n      padding: 10px;\n      color: #888888;\n}\n.care-tips .input-area .filter-list .filter-category .cat-label[data-v-95bdcfa2] {\n        font-size: 1.5em;\n        font-weight: bold;\n}\n.care-tips .input-area .filter-list .filter-problem[data-v-95bdcfa2] {\n      color: #333333;\n      display: flex;\n      justify-content: flex-start;\n      align-items: center;\n      flex-wrap: wrap;\n      padding: 5px;\n}\n.care-tips .input-area .filter-list .filter-problem .problem-label[data-v-95bdcfa2] {\n        font-size: 1.2em;\n        font-weight: bold;\n}\n.care-tips .input-area .filter-list .filter-item[data-v-95bdcfa2] {\n      margin: 5px;\n      padding: 5px;\n      cursor: pointer;\n}\n.care-tips .input-area .filter-list .filter-item[data-v-95bdcfa2]:hover {\n        border-bottom: 1px solid #BE9063;\n}\n.care-tips .slide-panel[data-v-95bdcfa2] {\n  position: fixed;\n  top: 0px;\n  left: 100%;\n  width: 100%;\n  max-width: 100%;\n  height: calc(100% - 60px);\n  padding: 10px;\n  z-index: 10;\n  color: white;\n  background-color: rgba(50, 50, 50, 0.5);\n  overflow-x: hidden;\n  overflow-y: auto;\n  -webkit-transition: left 0.5s ease;\n  transition: left 0.5s ease;\n}\n.care-tips .slide-panel.open[data-v-95bdcfa2] {\n    left: 0px;\n}\n.care-tips .side-panel[data-v-95bdcfa2] {\n  position: fixed;\n  top: 0px;\n  left: -400px;\n  width: 300px;\n  max-width: 100%;\n  height: 100%;\n  padding: 10px;\n  z-index: 11;\n  color: #333333;\n  background-color: rgba(240, 240, 240, 0.9);\n  border-radius: 0px 5px 5px 0px;\n  box-shadow: 3px 3px 5px #888888;\n  overflow-x: hidden;\n  overflow-y: auto;\n  -webkit-transition: left 0.5s ease;\n  transition: left 0.5s ease;\n}\n.care-tips .side-panel.open[data-v-95bdcfa2] {\n    left: 0px;\n}\n.care-tips .side-panel .search-container[data-v-95bdcfa2] {\n    width: 400px;\n    max-width: 100%;\n    margin: auto;\n}\n.care-tips .side-panel .search-container .search-item[data-v-95bdcfa2] {\n      margin: 5px;\n      font-size: 1.1em;\n}\n.care-tips .side-panel .search-container .search-item input[data-v-95bdcfa2] {\n        padding: 5px;\n        width: 100%;\n}\n.care-tips .side-panel .search-container .search-item select[data-v-95bdcfa2] {\n        padding: 5px;\n        width: 100%;\n}\n.care-tips .side-panel .search-container .search-item .search-label[data-v-95bdcfa2] {\n        padding: 5px;\n}\n.care-tips .tab-bar[data-v-95bdcfa2] {\n  position: fixed;\n  left: 0px;\n  bottom: 0px;\n  width: 100%;\n  height: 60px;\n  z-index: 9;\n  background-color: rgba(240, 240, 240, 0.9);\n  box-shadow: 0px 0px 5px #888888;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.care-tips .tab-bar .tab-bt-container[data-v-95bdcfa2] {\n    display: flex;\n    overflow-x: auto;\n    padding: 10px;\n}\n.care-tips .tab-bt[data-v-95bdcfa2] {\n  text-align: center;\n  min-width: 110px;\n  cursor: pointer;\n  padding: 5px 10px;\n  background-color: #ffffff;\n  color: #555555;\n  border: 1px solid #555555;\n  border-radius: 5px;\n  margin: 0px 10px;\n}\n.care-tips .tab-bt[data-v-95bdcfa2]:hover {\n    color: #888888;\n    border: 1px solid #888888;\n}\n.care-tips .tab-bt.on[data-v-95bdcfa2] {\n    color: #ff5555;\n    border: 1px solid #ff5555;\n}\n.case-list[data-v-95bdcfa2] {\n  width: 1200px;\n  max-width: 100%;\n  margin: auto;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  align-items: center;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/case-view.vue?vue&type=style&index=0&id=a7997294&lang=scss&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/case-view.vue?vue&type=style&index=0&id=a7997294&lang=scss&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n@charset \"UTF-8\";\nhtml[data-v-a7997294], body[data-v-a7997294] {\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  overflow: visible;\n}\n*[data-v-a7997294] {\n  box-sizing: border-box;\n  font-family: \"\\5FAE\\8EDF\\6B63\\9ED1\\9AD4\", \"Microsoft JhengHei\";\n}\n.center[data-v-a7997294] {\n  display: block;\n  margin: auto;\n  clear: both;\n  text-align: center;\n}\n.hide[data-v-a7997294] {\n  display: none;\n}\n.warning[data-v-a7997294] {\n  color: red;\n}\n.bold[data-v-a7997294] {\n  font-weight: bold;\n}\n.inline-block[data-v-a7997294] {\n  display: inline-block;\n}\na[data-v-a7997294] {\n  text-decoration: none;\n  color: #ff3333;\n}\na[data-v-a7997294]:hover {\n    color: #ff8800;\n}\n.one-third-w[data-v-a7997294] {\n  display: inline-block;\n  vertical-align: middle;\n  margin: 10px 0px;\n  width: 100%;\n}\n@media only screen and (min-width: 640px) {\n.one-third-w[data-v-a7997294] {\n      width: calc(50% - 20px);\n      margin: 10px;\n}\n}\n@media only screen and (min-width: 1024px) {\n.one-third-w[data-v-a7997294] {\n      width: calc(33% - 20px);\n      margin: 10px;\n}\n}\n.half-w[data-v-a7997294] {\n  display: inline-block;\n  vertical-align: middle;\n  margin: 10px 0px;\n  width: 100%;\n}\n@media only screen and (min-width: 640px) {\n.half-w[data-v-a7997294] {\n      width: calc(50% - 20px);\n      margin: 10px;\n}\n}\n.full-w[data-v-a7997294] {\n  display: block;\n  margin: 10px 0px;\n  width: 100%;\n}\n.problem-cat[data-v-a7997294] {\n  background-color: #f8f8f8;\n  padding: 0px 0px 10px 0px;\n  margin: 10px auto;\n  border-radius: 5px;\n}\n.problem-cat .problem-header[data-v-a7997294] {\n    margin: 0px auto;\n    font-size: 1.2em;\n    text-align: left;\n    padding: 10px;\n    background-color: #dddddd;\n    border-radius: 5px 5px 0px 0px;\n}\n.problem-cat .problem-container[data-v-a7997294] {\n    padding: 0px;\n}\n.problem-cat .problem-item[data-v-a7997294] {\n    border-radius: 5px;\n}\n.problem-cat .problem-item.select[data-v-a7997294] {\n      border: 1px solid red;\n}\n.problem-cat .problem-item .problem-title[data-v-a7997294] {\n      padding: 10px;\n      border-bottom: 1px solid #eeeeee;\n}\n.problem-cat .problem-item .problem-desc[data-v-a7997294] {\n      white-space: pre-wrap;\n      padding: 10px;\n}\n.problem-cat .problem-item .problem-body[data-v-a7997294] {\n      color: black;\n}\n.problem-cat .problem-item .item-bt-container[data-v-a7997294] {\n      padding: 10px;\n      display: flex;\n      justify-content: flex-end;\n      align-items: center;\n      flex-wrap: wrap;\n}\n.problem-cat .problem-item .item-bt[data-v-a7997294] {\n      display: inline-block;\n      margin: 0px 0px 0px 10px;\n      padding: 5px 10px;\n      cursor: pointer;\n      background-color: #eeeeee;\n      color: #333333;\n      border-radius: 3px;\n}\n.problem-cat .problem-item .item-bt[data-v-a7997294]:hover {\n        background-color: #ffffff;\n}\n.problem-cat .problem-item .target-info[data-v-a7997294] {\n      padding: 5px 10px;\n      color: #555555;\n}\n.cat-D1[data-v-a7997294] {\n  background-color: #FFA5A4;\n}\n.cat-D2[data-v-a7997294] {\n  background-color: #DEE885;\n}\n.cat-D3[data-v-a7997294] {\n  background-color: #85CAE8;\n}\n.cat-D4[data-v-a7997294] {\n  background-color: #C089E8;\n}\n.cat-A[data-v-a7997294] {\n  background-color: #FFA5A4;\n}\n.cat-B[data-v-a7997294] {\n  background-color: #FFDE9C;\n}\n.cat-C[data-v-a7997294] {\n  background-color: #DEE885;\n}\n.cat-D[data-v-a7997294] {\n  background-color: #9FFFBC;\n}\n.cat-E[data-v-a7997294] {\n  background-color: #85CAE8;\n}\n.cat-F[data-v-a7997294] {\n  background-color: #AF93FF;\n}\n.cat-G[data-v-a7997294] {\n  background-color: #C089E8;\n}\n.cat-O[data-v-a7997294] {\n  background-color: #FF8AE7;\n}\n.list-item[data-v-a7997294] {\n  background-color: #eeeeee;\n  border-radius: 5px;\n  max-width: 100%;\n  margin: 10px 0px;\n  padding-bottom: 10px;\n  cursor: pointer;\n}\n@media only screen and (min-width: 640px) {\n.list-item[data-v-a7997294] {\n      margin: 10px;\n}\n}\n.list-item a[data-v-a7997294] {\n    text-decoration: none;\n    color: #323232;\n}\n.list-item .domain-statistic[data-v-a7997294] {\n    display: flex;\n    justify-content: flex-start;\n    flex-wrap: wrap;\n    align-items: center;\n}\n.list-item .domain-statistic .domain-info[data-v-a7997294] {\n      position: relative;\n      display: flex;\n      justify-content: flex-start;\n      flex-wrap: wrap;\n      align-items: center;\n}\n.list-item .domain-statistic .domain-info .domain-icon[data-v-a7997294] {\n        display: inline-block;\n        padding: 7px;\n        margin: 10px 5px 10px 10px;\n        border-radius: 3px;\n}\n.list-item .domain-statistic .domain-info .domain-num[data-v-a7997294] {\n        display: inline-block;\n        font-size: 0.8em;\n        vertical-align: middle;\n}\n.list-item .domain-statistic .domain-info .tip[data-v-a7997294] {\n        padding: 5px;\n        box-shadow: 5px 5px 5px rgba(50, 50, 50, 0.8);\n        border-radius: 3px;\n        position: absolute;\n        top: 40px;\n        left: 10px;\n        width: 120px;\n        text-align: center;\n        z-index: 1;\n        opacity: 0;\n        -webkit-transition: opacity 0.5s ease;\n        transition: opacity 0.5s ease;\n}\n.list-item .domain-statistic .domain-info:hover .tip[data-v-a7997294] {\n        opacity: 1;\n}\n.list-item .desc[data-v-a7997294] {\n    white-space: pre-wrap;\n    color: #333333;\n    padding: 0px 20px 0px 10px;\n    width: 100%;\n    height: 4.5em;\n    line-height: 1.5em;\n    overflow: hidden;\n}\n.load-more[data-v-a7997294] {\n  width: 500px;\n  max-width: 100%;\n  padding: 10px 20px;\n  border-radius: 5px;\n  margin: 20px auto;\n  border: 1px solid #888888;\n  color: #888888;\n  background-color: #ffffff;\n  cursor: pointer;\n  text-align: center;\n}\n.load-more[data-v-a7997294]:hover {\n    border: 1px solid #333333;\n    color: #333333;\n}\n.fade-enter-active[data-v-a7997294], .fade-leave-active[data-v-a7997294] {\n  transition: opacity 0.5s;\n}\n.fade-enter[data-v-a7997294], .fade-leave-to[data-v-a7997294] {\n  opacity: 0;\n}\n.create-enter-active[data-v-a7997294] {\n  transition: opacity 0.5s;\n}\n.create-enter[data-v-a7997294] {\n  opacity: 0;\n}\n.main-container[data-v-a7997294] {\n  width: 100%;\n  margin: 80px auto 20px auto;\n  padding: 0px 0px 50px 0px;\n  color: #333333;\n}\n.care-tips .sub-title[data-v-a7997294] {\n  padding: 10px;\n  font-size: 1.5em;\n}\n.care-tips .mid-title[data-v-a7997294] {\n  padding: 5px;\n  margin: 10px auto 0px auto;\n  font-size: 1.5em;\n  text-align: center;\n}\n.care-tips .mid-title .bottom-line[data-v-a7997294] {\n    margin: auto;\n    width: 150px;\n    padding: 5px;\n    border-bottom: 1px solid #888888;\n}\n.care-tips .category-title[data-v-a7997294] {\n  padding: 5px;\n  margin: 10px auto 0px auto;\n  font-size: 2em;\n  text-align: center;\n}\n.care-tips .category-title .bottom-line[data-v-a7997294] {\n    margin: auto;\n    width: 150px;\n    padding: 5px;\n    border-bottom: 1px solid #888888;\n}\n.care-tips .category-separator[data-v-a7997294] {\n  width: 800px;\n  max-width: 100%;\n  padding: 20px;\n  margin: auto;\n  border-bottom: 1px solid #dddddd;\n}\n.care-tips .separator[data-v-a7997294] {\n  margin: 30px;\n  border-bottom: 1px solid #999999;\n}\n.care-tips .shadow-light[data-v-a7997294] {\n  box-shadow: 5px 5px 5px #888888;\n}\n.care-tips .shadow-light[data-v-a7997294]:hover {\n    box-shadow: 10px 10px 10px #888888;\n    -webkit-transition: box-shadow 0.5s ease;\n    transition: box-shadow 0.5s ease;\n}\n.care-tips .shadow-dark[data-v-a7997294] {\n  box-shadow: 5px 5px 5px #333333;\n}\n.care-tips .shadow-dark[data-v-a7997294]:hover {\n    box-shadow: 10px 10px 10px #333333;\n    -webkit-transition: box-shadow 0.5s ease;\n    transition: box-shadow 0.5s ease;\n}\n.care-tips .owner a[data-v-a7997294] {\n  text-decoration: none;\n  color: #323232;\n}\n.care-tips .owner a[data-v-a7997294]:hover {\n    color: #888888;\n}\n.care-tips .owner-info[data-v-a7997294] {\n  display: flex;\n  justify-content: flex-start;\n  flex-wrap: wrap;\n  align-items: center;\n  border-bottom: 1px solid #eeeeee;\n  border-radius: 5px 5px 0px 0px;\n  padding: 10px;\n}\n.care-tips .owner-info .owner-icon[data-v-a7997294] {\n    width: 30px;\n    height: 30px;\n    border-radius: 50%;\n    margin: 0px 5px 0px 0px;\n}\n.care-tips .owner-desc[data-v-a7997294] {\n  white-space: pre-wrap;\n  padding: 10px;\n}\n.care-tips .bt-bar[data-v-a7997294] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  flex-wrap: wrap;\n  width: 1024px;\n  max-width: 100%;\n  padding: 0px 15px;\n  margin: auto;\n}\n.care-tips .input-bt[data-v-a7997294] {\n  display: inline-block;\n  color: #ffffff;\n  padding: 7px 10px;\n  margin: 5px;\n  background-color: #555555;\n  cursor: pointer;\n  border-radius: 3px;\n}\n.care-tips .input-bt[data-v-a7997294]:hover {\n    background-color: #888888;\n}\n.care-tips .action-bt[data-v-a7997294] {\n  color: #ff5555;\n  border: 1px solid #ff5555;\n  border-radius: 5px;\n  padding: 5px 10px;\n  margin: 5px;\n  cursor: pointer;\n}\n.care-tips .action-bt[data-v-a7997294]:hover {\n    color: #ff8888;\n    border: 1px solid #ff8888;\n}\n.care-tips .feedback-statistic[data-v-a7997294] {\n  display: flex;\n  justify-content: flex-end;\n  flex-wrap: wrap;\n  align-items: center;\n  padding: 5px;\n  color: #888888;\n  font-size: 0.9em;\n}\n.care-tips .feedback-statistic .container[data-v-a7997294] {\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    align-items: center;\n    padding: 5px;\n}\n.care-tips .feedback-statistic .clickable[data-v-a7997294] {\n    cursor: pointer;\n}\n.care-tips .feedback-statistic .clickable[data-v-a7997294]:hover {\n      border-bottom: 2px solid #ff5555;\n      -webkit-filter: brightness(80%);\n      filter: brightness(80%);\n}\n.care-tips .feedback-statistic .feedback-icon[data-v-a7997294] {\n    width: 25px;\n    height: 25px;\n}\n.care-tips .feedback-statistic .feedback-num[data-v-a7997294] {\n    position: relative;\n    padding: 0px 10px 0px 5px;\n}\n.care-tips .feedback-statistic .feedback-num .tip[data-v-a7997294] {\n      padding: 5px;\n      box-shadow: 5px 5px 5px rgba(50, 50, 50, 0.8);\n      border-radius: 3px;\n      position: absolute;\n      top: 40px;\n      left: -50%;\n      width: 150px;\n      text-align: center;\n      visibility: hidden;\n      z-index: 1;\n      background-color: #ffffff;\n}\n.care-tips .feedback-statistic .feedback-num:hover .tip[data-v-a7997294] {\n      visibility: visible;\n}\n.care-tips .inform-message[data-v-a7997294] {\n  width: 100%;\n  background-color: #aaaaaa;\n  color: #ffffff;\n  text-align: center;\n  padding: 10px;\n  position: fixed;\n  left: 0px;\n  height: 40px;\n  top: -40px;\n  z-index: 99;\n  -webkit-transition: top 0.5s ease;\n  transition: top 0.5s ease;\n}\n.care-tips .inform-message.show[data-v-a7997294] {\n    top: 0px;\n}\n.care-tips .message-list .message[data-v-a7997294] {\n  margin: 10px;\n  border-bottom: 1px solid #dddddd;\n  padding: 0px;\n}\n.care-tips .message-list .message .message-content[data-v-a7997294] {\n    padding-left: 10px;\n    white-space: pre-wrap;\n}\n.care-tips .message-list .sub-info[data-v-a7997294] {\n  display: flex;\n  justify-content: flex-end;\n  flex-wrap: wrap;\n  align-items: center;\n  font-size: 0.8em;\n  color: #888888;\n}\n.care-tips .message-list .sub-info .info-item[data-v-a7997294] {\n    margin: 10px 5px;\n}\n.care-tips .message-box[data-v-a7997294] {\n  border: 1px solid #cccccc;\n  border-radius: 5px;\n  padding: 10px;\n}\n.care-tips .message-box textarea[data-v-a7997294] {\n    border: none;\n    outline: none;\n    width: 100%;\n    height: 60px;\n    resize: none;\n    font-size: 1.1em;\n}\n.care-tips .message-box .bt-container[data-v-a7997294] {\n    display: flex;\n    justify-content: flex-end;\n    flex-wrap: wrap;\n    align-items: center;\n}\n.care-tips .message-box .bt-container .bt[data-v-a7997294] {\n      display: inline-block;\n      float: right;\n      color: #ffffff;\n      padding: 5px 10px;\n      margin: 0px;\n      background-color: #555555;\n      cursor: pointer;\n      border-radius: 3px;\n}\n.care-tips .message-box .bt-container .bt[data-v-a7997294]:hover {\n        background-color: #888888;\n}\n.care-tips .panel-title[data-v-a7997294] {\n  font-size: 1.5em;\n  text-align: center;\n  margin: 20px;\n}\n.care-tips .no-result-box[data-v-a7997294] {\n  width: 1200px;\n  max-width: 100%;\n  background-color: #ffffff;\n  color: #333333;\n  padding: 20px;\n  border-radius: 5px;\n  margin: 10px auto;\n  text-align: center;\n  font-size: 1.2em;\n}\n.care-tips .no-result-box .center-bt[data-v-a7997294] {\n    background-color: #ffffff;\n    color: #ff5555;\n    border: 1px solid #ff5555;\n    width: 200px;\n    padding: 10px;\n    margin: 40px auto;\n    border-radius: 5px;\n    cursor: pointer;\n}\n.care-tips .no-result-box .center-bt[data-v-a7997294]:hover {\n      color: #ff8888;\n      border: 1px solid #ff8888;\n}\n.care-tips .input-panel[data-v-a7997294] {\n  position: fixed;\n  top: 70px;\n  left: 0px;\n  width: 100%;\n  height: calc(100% - 130px);\n  padding: 10px;\n  background-color: rgba(50, 50, 50, 0.5);\n  color: white;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.care-tips .input-panel.full[data-v-a7997294] {\n    top: 0px;\n    height: calc(100% - 60px);\n}\n.care-tips .close-bt[data-v-a7997294] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  font-size: 1.2em;\n  cursor: pointer;\n  padding: 5px 10px;\n  color: #ff5555;\n  border: 1px solid #ff5555;\n  border-radius: 5px;\n}\n.care-tips .close-bt[data-v-a7997294]:hover {\n    color: #ff8888;\n    border: 1px solid #ff8888;\n}\n.care-tips .input-area[data-v-a7997294] {\n  max-height: 100%;\n  overflow-y: auto;\n  position: relative;\n  background-color: #f8f8f8;\n  color: #323232;\n  border-radius: 5px;\n  width: 1024px;\n  max-width: 100%;\n  margin: auto;\n  padding: 10px;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  -ms-transform: translateY(-50%);\n  transform: translateY(-50%);\n}\n.care-tips .input-area .input-item[data-v-a7997294] {\n    margin: 5px;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    flex-wrap: wrap;\n}\n.care-tips .input-area .input-item .item[data-v-a7997294] {\n      margin: 5px;\n}\n.care-tips .input-area .input-label[data-v-a7997294] {\n    font-size: 1.2em;\n    display: inline-block;\n    margin: 5px;\n}\n.care-tips .input-area select[data-v-a7997294] {\n    border-radius: 3px;\n    max-width: 100%;\n    padding: 5px;\n    font-size: 1.1em;\n}\n.care-tips .input-area textarea[data-v-a7997294] {\n    margin: 10px 0px;\n    border-radius: 3px;\n    padding: 10px;\n    width: 100%;\n    height: 120px;\n    resize: none;\n    font-size: 1.1em;\n}\n.care-tips .input-area input[type=\"number\"][data-v-a7997294] {\n    max-width: 100%;\n    padding: 5px;\n    border-radius: 3px;\n    max-width: 80px;\n    font-size: 1.1em;\n}\n.care-tips .input-area input[type=\"text\"][data-v-a7997294] {\n    max-width: 100%;\n    padding: 5px;\n    border-radius: 3px;\n    font-size: 1.1em;\n}\n.care-tips .input-area .filter-icon[data-v-a7997294] {\n    width: 30px;\n    height: 30px;\n    margin: 5px;\n    padding: 2px;\n    cursor: pointer;\n}\n.care-tips .input-area .filter-icon[data-v-a7997294]:hover {\n      padding: 0px;\n}\n.care-tips .input-area .filter-list[data-v-a7997294] {\n    padding: 10px;\n}\n.care-tips .input-area .filter-list .filter-category[data-v-a7997294] {\n      padding: 10px;\n      color: #888888;\n}\n.care-tips .input-area .filter-list .filter-category .cat-label[data-v-a7997294] {\n        font-size: 1.5em;\n        font-weight: bold;\n}\n.care-tips .input-area .filter-list .filter-problem[data-v-a7997294] {\n      color: #333333;\n      display: flex;\n      justify-content: flex-start;\n      align-items: center;\n      flex-wrap: wrap;\n      padding: 5px;\n}\n.care-tips .input-area .filter-list .filter-problem .problem-label[data-v-a7997294] {\n        font-size: 1.2em;\n        font-weight: bold;\n}\n.care-tips .input-area .filter-list .filter-item[data-v-a7997294] {\n      margin: 5px;\n      padding: 5px;\n      cursor: pointer;\n}\n.care-tips .input-area .filter-list .filter-item[data-v-a7997294]:hover {\n        border-bottom: 1px solid #BE9063;\n}\n.care-tips .slide-panel[data-v-a7997294] {\n  position: fixed;\n  top: 0px;\n  left: 100%;\n  width: 100%;\n  max-width: 100%;\n  height: calc(100% - 60px);\n  padding: 10px;\n  z-index: 10;\n  color: white;\n  background-color: rgba(50, 50, 50, 0.5);\n  overflow-x: hidden;\n  overflow-y: auto;\n  -webkit-transition: left 0.5s ease;\n  transition: left 0.5s ease;\n}\n.care-tips .slide-panel.open[data-v-a7997294] {\n    left: 0px;\n}\n.care-tips .side-panel[data-v-a7997294] {\n  position: fixed;\n  top: 0px;\n  left: -400px;\n  width: 300px;\n  max-width: 100%;\n  height: 100%;\n  padding: 10px;\n  z-index: 11;\n  color: #333333;\n  background-color: rgba(240, 240, 240, 0.9);\n  border-radius: 0px 5px 5px 0px;\n  box-shadow: 3px 3px 5px #888888;\n  overflow-x: hidden;\n  overflow-y: auto;\n  -webkit-transition: left 0.5s ease;\n  transition: left 0.5s ease;\n}\n.care-tips .side-panel.open[data-v-a7997294] {\n    left: 0px;\n}\n.care-tips .side-panel .search-container[data-v-a7997294] {\n    width: 400px;\n    max-width: 100%;\n    margin: auto;\n}\n.care-tips .side-panel .search-container .search-item[data-v-a7997294] {\n      margin: 5px;\n      font-size: 1.1em;\n}\n.care-tips .side-panel .search-container .search-item input[data-v-a7997294] {\n        padding: 5px;\n        width: 100%;\n}\n.care-tips .side-panel .search-container .search-item select[data-v-a7997294] {\n        padding: 5px;\n        width: 100%;\n}\n.care-tips .side-panel .search-container .search-item .search-label[data-v-a7997294] {\n        padding: 5px;\n}\n.care-tips .tab-bar[data-v-a7997294] {\n  position: fixed;\n  left: 0px;\n  bottom: 0px;\n  width: 100%;\n  height: 60px;\n  z-index: 9;\n  background-color: rgba(240, 240, 240, 0.9);\n  box-shadow: 0px 0px 5px #888888;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.care-tips .tab-bar .tab-bt-container[data-v-a7997294] {\n    display: flex;\n    overflow-x: auto;\n    padding: 10px;\n}\n.care-tips .tab-bt[data-v-a7997294] {\n  text-align: center;\n  min-width: 110px;\n  cursor: pointer;\n  padding: 5px 10px;\n  background-color: #ffffff;\n  color: #555555;\n  border: 1px solid #555555;\n  border-radius: 5px;\n  margin: 0px 10px;\n}\n.care-tips .tab-bt[data-v-a7997294]:hover {\n    color: #888888;\n    border: 1px solid #888888;\n}\n.care-tips .tab-bt.on[data-v-a7997294] {\n    color: #ff5555;\n    border: 1px solid #ff5555;\n}\n.case-view[data-v-a7997294] {\n  width: 1024px;\n  max-width: 100%;\n  margin: auto;\n  padding: 10px;\n}\n.case-view .case-title[data-v-a7997294] {\n    font-size: 2em;\n    padding: 10px 0px;\n    margin: 10px 0px;\n    border-bottom: 1px solid #ffaa00;\n}\n.case-view .case-desc[data-v-a7997294] {\n    font-size: 1.2em;\n    line-height: 1.5em;\n    white-space: pre-wrap;\n}\n.case-view .owner[data-v-a7997294] {\n    font-size: 1.2em;\n}\n.case-view .bt-container[data-v-a7997294] {\n    width: 1200px;\n    max-width: 100%;\n    padding: 0px 10px;\n    margin: auto;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    flex-wrap: wrap;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/login-panel.vue?vue&type=style&index=0&id=16f2f798&lang=scss&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/login-panel.vue?vue&type=style&index=0&id=16f2f798&lang=scss&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n@charset \"UTF-8\";\nhtml[data-v-16f2f798], body[data-v-16f2f798] {\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  overflow: visible;\n}\n*[data-v-16f2f798] {\n  box-sizing: border-box;\n  font-family: \"\\5FAE\\8EDF\\6B63\\9ED1\\9AD4\", \"Microsoft JhengHei\";\n}\n.center[data-v-16f2f798] {\n  display: block;\n  margin: auto;\n  clear: both;\n  text-align: center;\n}\n.hide[data-v-16f2f798] {\n  display: none;\n}\n.warning[data-v-16f2f798] {\n  color: red;\n}\n.bold[data-v-16f2f798] {\n  font-weight: bold;\n}\n.inline-block[data-v-16f2f798] {\n  display: inline-block;\n}\na[data-v-16f2f798] {\n  text-decoration: none;\n  color: #ff3333;\n}\na[data-v-16f2f798]:hover {\n    color: #ff8800;\n}\n.one-third-w[data-v-16f2f798] {\n  display: inline-block;\n  vertical-align: middle;\n  margin: 10px 0px;\n  width: 100%;\n}\n@media only screen and (min-width: 640px) {\n.one-third-w[data-v-16f2f798] {\n      width: calc(50% - 20px);\n      margin: 10px;\n}\n}\n@media only screen and (min-width: 1024px) {\n.one-third-w[data-v-16f2f798] {\n      width: calc(33% - 20px);\n      margin: 10px;\n}\n}\n.half-w[data-v-16f2f798] {\n  display: inline-block;\n  vertical-align: middle;\n  margin: 10px 0px;\n  width: 100%;\n}\n@media only screen and (min-width: 640px) {\n.half-w[data-v-16f2f798] {\n      width: calc(50% - 20px);\n      margin: 10px;\n}\n}\n.full-w[data-v-16f2f798] {\n  display: block;\n  margin: 10px 0px;\n  width: 100%;\n}\n.problem-cat[data-v-16f2f798] {\n  background-color: #f8f8f8;\n  padding: 0px 0px 10px 0px;\n  margin: 10px auto;\n  border-radius: 5px;\n}\n.problem-cat .problem-header[data-v-16f2f798] {\n    margin: 0px auto;\n    font-size: 1.2em;\n    text-align: left;\n    padding: 10px;\n    background-color: #dddddd;\n    border-radius: 5px 5px 0px 0px;\n}\n.problem-cat .problem-container[data-v-16f2f798] {\n    padding: 0px;\n}\n.problem-cat .problem-item[data-v-16f2f798] {\n    border-radius: 5px;\n}\n.problem-cat .problem-item.select[data-v-16f2f798] {\n      border: 1px solid red;\n}\n.problem-cat .problem-item .problem-title[data-v-16f2f798] {\n      padding: 10px;\n      border-bottom: 1px solid #eeeeee;\n}\n.problem-cat .problem-item .problem-desc[data-v-16f2f798] {\n      white-space: pre-wrap;\n      padding: 10px;\n}\n.problem-cat .problem-item .problem-body[data-v-16f2f798] {\n      color: black;\n}\n.problem-cat .problem-item .item-bt-container[data-v-16f2f798] {\n      padding: 10px;\n      display: flex;\n      justify-content: flex-end;\n      align-items: center;\n      flex-wrap: wrap;\n}\n.problem-cat .problem-item .item-bt[data-v-16f2f798] {\n      display: inline-block;\n      margin: 0px 0px 0px 10px;\n      padding: 5px 10px;\n      cursor: pointer;\n      background-color: #eeeeee;\n      color: #333333;\n      border-radius: 3px;\n}\n.problem-cat .problem-item .item-bt[data-v-16f2f798]:hover {\n        background-color: #ffffff;\n}\n.problem-cat .problem-item .target-info[data-v-16f2f798] {\n      padding: 5px 10px;\n      color: #555555;\n}\n.cat-D1[data-v-16f2f798] {\n  background-color: #FFA5A4;\n}\n.cat-D2[data-v-16f2f798] {\n  background-color: #DEE885;\n}\n.cat-D3[data-v-16f2f798] {\n  background-color: #85CAE8;\n}\n.cat-D4[data-v-16f2f798] {\n  background-color: #C089E8;\n}\n.cat-A[data-v-16f2f798] {\n  background-color: #FFA5A4;\n}\n.cat-B[data-v-16f2f798] {\n  background-color: #FFDE9C;\n}\n.cat-C[data-v-16f2f798] {\n  background-color: #DEE885;\n}\n.cat-D[data-v-16f2f798] {\n  background-color: #9FFFBC;\n}\n.cat-E[data-v-16f2f798] {\n  background-color: #85CAE8;\n}\n.cat-F[data-v-16f2f798] {\n  background-color: #AF93FF;\n}\n.cat-G[data-v-16f2f798] {\n  background-color: #C089E8;\n}\n.cat-O[data-v-16f2f798] {\n  background-color: #FF8AE7;\n}\n.list-item[data-v-16f2f798] {\n  background-color: #eeeeee;\n  border-radius: 5px;\n  max-width: 100%;\n  margin: 10px 0px;\n  padding-bottom: 10px;\n  cursor: pointer;\n}\n@media only screen and (min-width: 640px) {\n.list-item[data-v-16f2f798] {\n      margin: 10px;\n}\n}\n.list-item a[data-v-16f2f798] {\n    text-decoration: none;\n    color: #323232;\n}\n.list-item .domain-statistic[data-v-16f2f798] {\n    display: flex;\n    justify-content: flex-start;\n    flex-wrap: wrap;\n    align-items: center;\n}\n.list-item .domain-statistic .domain-info[data-v-16f2f798] {\n      position: relative;\n      display: flex;\n      justify-content: flex-start;\n      flex-wrap: wrap;\n      align-items: center;\n}\n.list-item .domain-statistic .domain-info .domain-icon[data-v-16f2f798] {\n        display: inline-block;\n        padding: 7px;\n        margin: 10px 5px 10px 10px;\n        border-radius: 3px;\n}\n.list-item .domain-statistic .domain-info .domain-num[data-v-16f2f798] {\n        display: inline-block;\n        font-size: 0.8em;\n        vertical-align: middle;\n}\n.list-item .domain-statistic .domain-info .tip[data-v-16f2f798] {\n        padding: 5px;\n        box-shadow: 5px 5px 5px rgba(50, 50, 50, 0.8);\n        border-radius: 3px;\n        position: absolute;\n        top: 40px;\n        left: 10px;\n        width: 120px;\n        text-align: center;\n        z-index: 1;\n        opacity: 0;\n        -webkit-transition: opacity 0.5s ease;\n        transition: opacity 0.5s ease;\n}\n.list-item .domain-statistic .domain-info:hover .tip[data-v-16f2f798] {\n        opacity: 1;\n}\n.list-item .desc[data-v-16f2f798] {\n    white-space: pre-wrap;\n    color: #333333;\n    padding: 0px 20px 0px 10px;\n    width: 100%;\n    height: 4.5em;\n    line-height: 1.5em;\n    overflow: hidden;\n}\n.load-more[data-v-16f2f798] {\n  width: 500px;\n  max-width: 100%;\n  padding: 10px 20px;\n  border-radius: 5px;\n  margin: 20px auto;\n  border: 1px solid #888888;\n  color: #888888;\n  background-color: #ffffff;\n  cursor: pointer;\n  text-align: center;\n}\n.load-more[data-v-16f2f798]:hover {\n    border: 1px solid #333333;\n    color: #333333;\n}\n.fade-enter-active[data-v-16f2f798], .fade-leave-active[data-v-16f2f798] {\n  transition: opacity 0.5s;\n}\n.fade-enter[data-v-16f2f798], .fade-leave-to[data-v-16f2f798] {\n  opacity: 0;\n}\n.create-enter-active[data-v-16f2f798] {\n  transition: opacity 0.5s;\n}\n.create-enter[data-v-16f2f798] {\n  opacity: 0;\n}\n.main-container[data-v-16f2f798] {\n  width: 100%;\n  margin: 80px auto 20px auto;\n  padding: 0px 0px 50px 0px;\n  color: #333333;\n}\n.care-tips .sub-title[data-v-16f2f798] {\n  padding: 10px;\n  font-size: 1.5em;\n}\n.care-tips .mid-title[data-v-16f2f798] {\n  padding: 5px;\n  margin: 10px auto 0px auto;\n  font-size: 1.5em;\n  text-align: center;\n}\n.care-tips .mid-title .bottom-line[data-v-16f2f798] {\n    margin: auto;\n    width: 150px;\n    padding: 5px;\n    border-bottom: 1px solid #888888;\n}\n.care-tips .category-title[data-v-16f2f798] {\n  padding: 5px;\n  margin: 10px auto 0px auto;\n  font-size: 2em;\n  text-align: center;\n}\n.care-tips .category-title .bottom-line[data-v-16f2f798] {\n    margin: auto;\n    width: 150px;\n    padding: 5px;\n    border-bottom: 1px solid #888888;\n}\n.care-tips .category-separator[data-v-16f2f798] {\n  width: 800px;\n  max-width: 100%;\n  padding: 20px;\n  margin: auto;\n  border-bottom: 1px solid #dddddd;\n}\n.care-tips .separator[data-v-16f2f798] {\n  margin: 30px;\n  border-bottom: 1px solid #999999;\n}\n.care-tips .shadow-light[data-v-16f2f798] {\n  box-shadow: 5px 5px 5px #888888;\n}\n.care-tips .shadow-light[data-v-16f2f798]:hover {\n    box-shadow: 10px 10px 10px #888888;\n    -webkit-transition: box-shadow 0.5s ease;\n    transition: box-shadow 0.5s ease;\n}\n.care-tips .shadow-dark[data-v-16f2f798] {\n  box-shadow: 5px 5px 5px #333333;\n}\n.care-tips .shadow-dark[data-v-16f2f798]:hover {\n    box-shadow: 10px 10px 10px #333333;\n    -webkit-transition: box-shadow 0.5s ease;\n    transition: box-shadow 0.5s ease;\n}\n.care-tips .owner a[data-v-16f2f798] {\n  text-decoration: none;\n  color: #323232;\n}\n.care-tips .owner a[data-v-16f2f798]:hover {\n    color: #888888;\n}\n.care-tips .owner-info[data-v-16f2f798] {\n  display: flex;\n  justify-content: flex-start;\n  flex-wrap: wrap;\n  align-items: center;\n  border-bottom: 1px solid #eeeeee;\n  border-radius: 5px 5px 0px 0px;\n  padding: 10px;\n}\n.care-tips .owner-info .owner-icon[data-v-16f2f798] {\n    width: 30px;\n    height: 30px;\n    border-radius: 50%;\n    margin: 0px 5px 0px 0px;\n}\n.care-tips .owner-desc[data-v-16f2f798] {\n  white-space: pre-wrap;\n  padding: 10px;\n}\n.care-tips .bt-bar[data-v-16f2f798] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  flex-wrap: wrap;\n  width: 1024px;\n  max-width: 100%;\n  padding: 0px 15px;\n  margin: auto;\n}\n.care-tips .input-bt[data-v-16f2f798] {\n  display: inline-block;\n  color: #ffffff;\n  padding: 7px 10px;\n  margin: 5px;\n  background-color: #555555;\n  cursor: pointer;\n  border-radius: 3px;\n}\n.care-tips .input-bt[data-v-16f2f798]:hover {\n    background-color: #888888;\n}\n.care-tips .action-bt[data-v-16f2f798] {\n  color: #ff5555;\n  border: 1px solid #ff5555;\n  border-radius: 5px;\n  padding: 5px 10px;\n  margin: 5px;\n  cursor: pointer;\n}\n.care-tips .action-bt[data-v-16f2f798]:hover {\n    color: #ff8888;\n    border: 1px solid #ff8888;\n}\n.care-tips .feedback-statistic[data-v-16f2f798] {\n  display: flex;\n  justify-content: flex-end;\n  flex-wrap: wrap;\n  align-items: center;\n  padding: 5px;\n  color: #888888;\n  font-size: 0.9em;\n}\n.care-tips .feedback-statistic .container[data-v-16f2f798] {\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    align-items: center;\n    padding: 5px;\n}\n.care-tips .feedback-statistic .clickable[data-v-16f2f798] {\n    cursor: pointer;\n}\n.care-tips .feedback-statistic .clickable[data-v-16f2f798]:hover {\n      border-bottom: 2px solid #ff5555;\n      -webkit-filter: brightness(80%);\n      filter: brightness(80%);\n}\n.care-tips .feedback-statistic .feedback-icon[data-v-16f2f798] {\n    width: 25px;\n    height: 25px;\n}\n.care-tips .feedback-statistic .feedback-num[data-v-16f2f798] {\n    position: relative;\n    padding: 0px 10px 0px 5px;\n}\n.care-tips .feedback-statistic .feedback-num .tip[data-v-16f2f798] {\n      padding: 5px;\n      box-shadow: 5px 5px 5px rgba(50, 50, 50, 0.8);\n      border-radius: 3px;\n      position: absolute;\n      top: 40px;\n      left: -50%;\n      width: 150px;\n      text-align: center;\n      visibility: hidden;\n      z-index: 1;\n      background-color: #ffffff;\n}\n.care-tips .feedback-statistic .feedback-num:hover .tip[data-v-16f2f798] {\n      visibility: visible;\n}\n.care-tips .inform-message[data-v-16f2f798] {\n  width: 100%;\n  background-color: #aaaaaa;\n  color: #ffffff;\n  text-align: center;\n  padding: 10px;\n  position: fixed;\n  left: 0px;\n  height: 40px;\n  top: -40px;\n  z-index: 99;\n  -webkit-transition: top 0.5s ease;\n  transition: top 0.5s ease;\n}\n.care-tips .inform-message.show[data-v-16f2f798] {\n    top: 0px;\n}\n.care-tips .message-list .message[data-v-16f2f798] {\n  margin: 10px;\n  border-bottom: 1px solid #dddddd;\n  padding: 0px;\n}\n.care-tips .message-list .message .message-content[data-v-16f2f798] {\n    padding-left: 10px;\n    white-space: pre-wrap;\n}\n.care-tips .message-list .sub-info[data-v-16f2f798] {\n  display: flex;\n  justify-content: flex-end;\n  flex-wrap: wrap;\n  align-items: center;\n  font-size: 0.8em;\n  color: #888888;\n}\n.care-tips .message-list .sub-info .info-item[data-v-16f2f798] {\n    margin: 10px 5px;\n}\n.care-tips .message-box[data-v-16f2f798] {\n  border: 1px solid #cccccc;\n  border-radius: 5px;\n  padding: 10px;\n}\n.care-tips .message-box textarea[data-v-16f2f798] {\n    border: none;\n    outline: none;\n    width: 100%;\n    height: 60px;\n    resize: none;\n    font-size: 1.1em;\n}\n.care-tips .message-box .bt-container[data-v-16f2f798] {\n    display: flex;\n    justify-content: flex-end;\n    flex-wrap: wrap;\n    align-items: center;\n}\n.care-tips .message-box .bt-container .bt[data-v-16f2f798] {\n      display: inline-block;\n      float: right;\n      color: #ffffff;\n      padding: 5px 10px;\n      margin: 0px;\n      background-color: #555555;\n      cursor: pointer;\n      border-radius: 3px;\n}\n.care-tips .message-box .bt-container .bt[data-v-16f2f798]:hover {\n        background-color: #888888;\n}\n.care-tips .panel-title[data-v-16f2f798] {\n  font-size: 1.5em;\n  text-align: center;\n  margin: 20px;\n}\n.care-tips .no-result-box[data-v-16f2f798] {\n  width: 1200px;\n  max-width: 100%;\n  background-color: #ffffff;\n  color: #333333;\n  padding: 20px;\n  border-radius: 5px;\n  margin: 10px auto;\n  text-align: center;\n  font-size: 1.2em;\n}\n.care-tips .no-result-box .center-bt[data-v-16f2f798] {\n    background-color: #ffffff;\n    color: #ff5555;\n    border: 1px solid #ff5555;\n    width: 200px;\n    padding: 10px;\n    margin: 40px auto;\n    border-radius: 5px;\n    cursor: pointer;\n}\n.care-tips .no-result-box .center-bt[data-v-16f2f798]:hover {\n      color: #ff8888;\n      border: 1px solid #ff8888;\n}\n.care-tips .input-panel[data-v-16f2f798] {\n  position: fixed;\n  top: 70px;\n  left: 0px;\n  width: 100%;\n  height: calc(100% - 130px);\n  padding: 10px;\n  background-color: rgba(50, 50, 50, 0.5);\n  color: white;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.care-tips .input-panel.full[data-v-16f2f798] {\n    top: 0px;\n    height: calc(100% - 60px);\n}\n.care-tips .close-bt[data-v-16f2f798] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  font-size: 1.2em;\n  cursor: pointer;\n  padding: 5px 10px;\n  color: #ff5555;\n  border: 1px solid #ff5555;\n  border-radius: 5px;\n}\n.care-tips .close-bt[data-v-16f2f798]:hover {\n    color: #ff8888;\n    border: 1px solid #ff8888;\n}\n.care-tips .input-area[data-v-16f2f798] {\n  max-height: 100%;\n  overflow-y: auto;\n  position: relative;\n  background-color: #f8f8f8;\n  color: #323232;\n  border-radius: 5px;\n  width: 1024px;\n  max-width: 100%;\n  margin: auto;\n  padding: 10px;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  -ms-transform: translateY(-50%);\n  transform: translateY(-50%);\n}\n.care-tips .input-area .input-item[data-v-16f2f798] {\n    margin: 5px;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    flex-wrap: wrap;\n}\n.care-tips .input-area .input-item .item[data-v-16f2f798] {\n      margin: 5px;\n}\n.care-tips .input-area .input-label[data-v-16f2f798] {\n    font-size: 1.2em;\n    display: inline-block;\n    margin: 5px;\n}\n.care-tips .input-area select[data-v-16f2f798] {\n    border-radius: 3px;\n    max-width: 100%;\n    padding: 5px;\n    font-size: 1.1em;\n}\n.care-tips .input-area textarea[data-v-16f2f798] {\n    margin: 10px 0px;\n    border-radius: 3px;\n    padding: 10px;\n    width: 100%;\n    height: 120px;\n    resize: none;\n    font-size: 1.1em;\n}\n.care-tips .input-area input[type=\"number\"][data-v-16f2f798] {\n    max-width: 100%;\n    padding: 5px;\n    border-radius: 3px;\n    max-width: 80px;\n    font-size: 1.1em;\n}\n.care-tips .input-area input[type=\"text\"][data-v-16f2f798] {\n    max-width: 100%;\n    padding: 5px;\n    border-radius: 3px;\n    font-size: 1.1em;\n}\n.care-tips .input-area .filter-icon[data-v-16f2f798] {\n    width: 30px;\n    height: 30px;\n    margin: 5px;\n    padding: 2px;\n    cursor: pointer;\n}\n.care-tips .input-area .filter-icon[data-v-16f2f798]:hover {\n      padding: 0px;\n}\n.care-tips .input-area .filter-list[data-v-16f2f798] {\n    padding: 10px;\n}\n.care-tips .input-area .filter-list .filter-category[data-v-16f2f798] {\n      padding: 10px;\n      color: #888888;\n}\n.care-tips .input-area .filter-list .filter-category .cat-label[data-v-16f2f798] {\n        font-size: 1.5em;\n        font-weight: bold;\n}\n.care-tips .input-area .filter-list .filter-problem[data-v-16f2f798] {\n      color: #333333;\n      display: flex;\n      justify-content: flex-start;\n      align-items: center;\n      flex-wrap: wrap;\n      padding: 5px;\n}\n.care-tips .input-area .filter-list .filter-problem .problem-label[data-v-16f2f798] {\n        font-size: 1.2em;\n        font-weight: bold;\n}\n.care-tips .input-area .filter-list .filter-item[data-v-16f2f798] {\n      margin: 5px;\n      padding: 5px;\n      cursor: pointer;\n}\n.care-tips .input-area .filter-list .filter-item[data-v-16f2f798]:hover {\n        border-bottom: 1px solid #BE9063;\n}\n.care-tips .slide-panel[data-v-16f2f798] {\n  position: fixed;\n  top: 0px;\n  left: 100%;\n  width: 100%;\n  max-width: 100%;\n  height: calc(100% - 60px);\n  padding: 10px;\n  z-index: 10;\n  color: white;\n  background-color: rgba(50, 50, 50, 0.5);\n  overflow-x: hidden;\n  overflow-y: auto;\n  -webkit-transition: left 0.5s ease;\n  transition: left 0.5s ease;\n}\n.care-tips .slide-panel.open[data-v-16f2f798] {\n    left: 0px;\n}\n.care-tips .side-panel[data-v-16f2f798] {\n  position: fixed;\n  top: 0px;\n  left: -400px;\n  width: 300px;\n  max-width: 100%;\n  height: 100%;\n  padding: 10px;\n  z-index: 11;\n  color: #333333;\n  background-color: rgba(240, 240, 240, 0.9);\n  border-radius: 0px 5px 5px 0px;\n  box-shadow: 3px 3px 5px #888888;\n  overflow-x: hidden;\n  overflow-y: auto;\n  -webkit-transition: left 0.5s ease;\n  transition: left 0.5s ease;\n}\n.care-tips .side-panel.open[data-v-16f2f798] {\n    left: 0px;\n}\n.care-tips .side-panel .search-container[data-v-16f2f798] {\n    width: 400px;\n    max-width: 100%;\n    margin: auto;\n}\n.care-tips .side-panel .search-container .search-item[data-v-16f2f798] {\n      margin: 5px;\n      font-size: 1.1em;\n}\n.care-tips .side-panel .search-container .search-item input[data-v-16f2f798] {\n        padding: 5px;\n        width: 100%;\n}\n.care-tips .side-panel .search-container .search-item select[data-v-16f2f798] {\n        padding: 5px;\n        width: 100%;\n}\n.care-tips .side-panel .search-container .search-item .search-label[data-v-16f2f798] {\n        padding: 5px;\n}\n.care-tips .tab-bar[data-v-16f2f798] {\n  position: fixed;\n  left: 0px;\n  bottom: 0px;\n  width: 100%;\n  height: 60px;\n  z-index: 9;\n  background-color: rgba(240, 240, 240, 0.9);\n  box-shadow: 0px 0px 5px #888888;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.care-tips .tab-bar .tab-bt-container[data-v-16f2f798] {\n    display: flex;\n    overflow-x: auto;\n    padding: 10px;\n}\n.care-tips .tab-bt[data-v-16f2f798] {\n  text-align: center;\n  min-width: 110px;\n  cursor: pointer;\n  padding: 5px 10px;\n  background-color: #ffffff;\n  color: #555555;\n  border: 1px solid #555555;\n  border-radius: 5px;\n  margin: 0px 10px;\n}\n.care-tips .tab-bt[data-v-16f2f798]:hover {\n    color: #888888;\n    border: 1px solid #888888;\n}\n.care-tips .tab-bt.on[data-v-16f2f798] {\n    color: #ff5555;\n    border: 1px solid #ff5555;\n}\n.loginPanel[data-v-16f2f798] {\n  width: 300px;\n  max-width: 100%;\n  margin: auto;\n}\n.loginPanel .google-bt[data-v-16f2f798] {\n    padding: 10px;\n    margin: 10px 0px;\n    text-align: center;\n    cursor: pointer;\n    border-radius: 5px;\n    color: white;\n    background-color: #dc4e41;\n}\n.loginPanel .facebook-bt[data-v-16f2f798] {\n    padding: 10px;\n    margin: 10px 0px;\n    text-align: center;\n    cursor: pointer;\n    border-radius: 5px;\n    color: white;\n    background-color: #3b579d;\n}\n.loginPanel .seperator[data-v-16f2f798] {\n    padding: 10px;\n    margin-bottom: 10px;\n    border-bottom: 1px solid #dddddd;\n}\n.loginPanel .method-title[data-v-16f2f798] {\n    text-align: center;\n    font-size: 1.2em;\n}\n.loginPanel .relative-box[data-v-16f2f798] {\n    position: relative;\n}\n.loginPanel .forget-password[data-v-16f2f798] {\n    position: absolute;\n    top: 0px;\n    right: 0px;\n    font-size: 0.8em;\n    color: #666666;\n    cursor: pointer;\n}\n.loginPanel input[data-v-16f2f798] {\n    padding: 5px;\n    width: 100%;\n}\n.loginPanel .login-bt[data-v-16f2f798] {\n    padding: 10px;\n    margin: 10px 0px;\n    text-align: center;\n    cursor: pointer;\n    border-radius: 5px;\n    color: white;\n    background-color: #646464;\n}\n.loginPanel .text-link[data-v-16f2f798] {\n    text-align: center;\n    cursor: pointer;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/main-page.vue?vue&type=style&index=0&id=a22aad92&lang=scss&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/main-page.vue?vue&type=style&index=0&id=a22aad92&lang=scss&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n@charset \"UTF-8\";\nhtml[data-v-a22aad92], body[data-v-a22aad92] {\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  overflow: visible;\n}\n*[data-v-a22aad92] {\n  box-sizing: border-box;\n  font-family: \"\\5FAE\\8EDF\\6B63\\9ED1\\9AD4\", \"Microsoft JhengHei\";\n}\n.center[data-v-a22aad92] {\n  display: block;\n  margin: auto;\n  clear: both;\n  text-align: center;\n}\n.hide[data-v-a22aad92] {\n  display: none;\n}\n.warning[data-v-a22aad92] {\n  color: red;\n}\n.bold[data-v-a22aad92] {\n  font-weight: bold;\n}\n.inline-block[data-v-a22aad92] {\n  display: inline-block;\n}\na[data-v-a22aad92] {\n  text-decoration: none;\n  color: #ff3333;\n}\na[data-v-a22aad92]:hover {\n    color: #ff8800;\n}\n.one-third-w[data-v-a22aad92] {\n  display: inline-block;\n  vertical-align: middle;\n  margin: 10px 0px;\n  width: 100%;\n}\n@media only screen and (min-width: 640px) {\n.one-third-w[data-v-a22aad92] {\n      width: calc(50% - 20px);\n      margin: 10px;\n}\n}\n@media only screen and (min-width: 1024px) {\n.one-third-w[data-v-a22aad92] {\n      width: calc(33% - 20px);\n      margin: 10px;\n}\n}\n.half-w[data-v-a22aad92] {\n  display: inline-block;\n  vertical-align: middle;\n  margin: 10px 0px;\n  width: 100%;\n}\n@media only screen and (min-width: 640px) {\n.half-w[data-v-a22aad92] {\n      width: calc(50% - 20px);\n      margin: 10px;\n}\n}\n.full-w[data-v-a22aad92] {\n  display: block;\n  margin: 10px 0px;\n  width: 100%;\n}\n.problem-cat[data-v-a22aad92] {\n  background-color: #f8f8f8;\n  padding: 0px 0px 10px 0px;\n  margin: 10px auto;\n  border-radius: 5px;\n}\n.problem-cat .problem-header[data-v-a22aad92] {\n    margin: 0px auto;\n    font-size: 1.2em;\n    text-align: left;\n    padding: 10px;\n    background-color: #dddddd;\n    border-radius: 5px 5px 0px 0px;\n}\n.problem-cat .problem-container[data-v-a22aad92] {\n    padding: 0px;\n}\n.problem-cat .problem-item[data-v-a22aad92] {\n    border-radius: 5px;\n}\n.problem-cat .problem-item.select[data-v-a22aad92] {\n      border: 1px solid red;\n}\n.problem-cat .problem-item .problem-title[data-v-a22aad92] {\n      padding: 10px;\n      border-bottom: 1px solid #eeeeee;\n}\n.problem-cat .problem-item .problem-desc[data-v-a22aad92] {\n      white-space: pre-wrap;\n      padding: 10px;\n}\n.problem-cat .problem-item .problem-body[data-v-a22aad92] {\n      color: black;\n}\n.problem-cat .problem-item .item-bt-container[data-v-a22aad92] {\n      padding: 10px;\n      display: flex;\n      justify-content: flex-end;\n      align-items: center;\n      flex-wrap: wrap;\n}\n.problem-cat .problem-item .item-bt[data-v-a22aad92] {\n      display: inline-block;\n      margin: 0px 0px 0px 10px;\n      padding: 5px 10px;\n      cursor: pointer;\n      background-color: #eeeeee;\n      color: #333333;\n      border-radius: 3px;\n}\n.problem-cat .problem-item .item-bt[data-v-a22aad92]:hover {\n        background-color: #ffffff;\n}\n.problem-cat .problem-item .target-info[data-v-a22aad92] {\n      padding: 5px 10px;\n      color: #555555;\n}\n.cat-D1[data-v-a22aad92] {\n  background-color: #FFA5A4;\n}\n.cat-D2[data-v-a22aad92] {\n  background-color: #DEE885;\n}\n.cat-D3[data-v-a22aad92] {\n  background-color: #85CAE8;\n}\n.cat-D4[data-v-a22aad92] {\n  background-color: #C089E8;\n}\n.cat-A[data-v-a22aad92] {\n  background-color: #FFA5A4;\n}\n.cat-B[data-v-a22aad92] {\n  background-color: #FFDE9C;\n}\n.cat-C[data-v-a22aad92] {\n  background-color: #DEE885;\n}\n.cat-D[data-v-a22aad92] {\n  background-color: #9FFFBC;\n}\n.cat-E[data-v-a22aad92] {\n  background-color: #85CAE8;\n}\n.cat-F[data-v-a22aad92] {\n  background-color: #AF93FF;\n}\n.cat-G[data-v-a22aad92] {\n  background-color: #C089E8;\n}\n.cat-O[data-v-a22aad92] {\n  background-color: #FF8AE7;\n}\n.list-item[data-v-a22aad92] {\n  background-color: #eeeeee;\n  border-radius: 5px;\n  max-width: 100%;\n  margin: 10px 0px;\n  padding-bottom: 10px;\n  cursor: pointer;\n}\n@media only screen and (min-width: 640px) {\n.list-item[data-v-a22aad92] {\n      margin: 10px;\n}\n}\n.list-item a[data-v-a22aad92] {\n    text-decoration: none;\n    color: #323232;\n}\n.list-item .domain-statistic[data-v-a22aad92] {\n    display: flex;\n    justify-content: flex-start;\n    flex-wrap: wrap;\n    align-items: center;\n}\n.list-item .domain-statistic .domain-info[data-v-a22aad92] {\n      position: relative;\n      display: flex;\n      justify-content: flex-start;\n      flex-wrap: wrap;\n      align-items: center;\n}\n.list-item .domain-statistic .domain-info .domain-icon[data-v-a22aad92] {\n        display: inline-block;\n        padding: 7px;\n        margin: 10px 5px 10px 10px;\n        border-radius: 3px;\n}\n.list-item .domain-statistic .domain-info .domain-num[data-v-a22aad92] {\n        display: inline-block;\n        font-size: 0.8em;\n        vertical-align: middle;\n}\n.list-item .domain-statistic .domain-info .tip[data-v-a22aad92] {\n        padding: 5px;\n        box-shadow: 5px 5px 5px rgba(50, 50, 50, 0.8);\n        border-radius: 3px;\n        position: absolute;\n        top: 40px;\n        left: 10px;\n        width: 120px;\n        text-align: center;\n        z-index: 1;\n        opacity: 0;\n        -webkit-transition: opacity 0.5s ease;\n        transition: opacity 0.5s ease;\n}\n.list-item .domain-statistic .domain-info:hover .tip[data-v-a22aad92] {\n        opacity: 1;\n}\n.list-item .desc[data-v-a22aad92] {\n    white-space: pre-wrap;\n    color: #333333;\n    padding: 0px 20px 0px 10px;\n    width: 100%;\n    height: 4.5em;\n    line-height: 1.5em;\n    overflow: hidden;\n}\n.load-more[data-v-a22aad92] {\n  width: 500px;\n  max-width: 100%;\n  padding: 10px 20px;\n  border-radius: 5px;\n  margin: 20px auto;\n  border: 1px solid #888888;\n  color: #888888;\n  background-color: #ffffff;\n  cursor: pointer;\n  text-align: center;\n}\n.load-more[data-v-a22aad92]:hover {\n    border: 1px solid #333333;\n    color: #333333;\n}\n.fade-enter-active[data-v-a22aad92], .fade-leave-active[data-v-a22aad92] {\n  transition: opacity 0.5s;\n}\n.fade-enter[data-v-a22aad92], .fade-leave-to[data-v-a22aad92] {\n  opacity: 0;\n}\n.create-enter-active[data-v-a22aad92] {\n  transition: opacity 0.5s;\n}\n.create-enter[data-v-a22aad92] {\n  opacity: 0;\n}\n.main-container[data-v-a22aad92] {\n  width: 100%;\n  margin: 80px auto 20px auto;\n  padding: 0px 0px 50px 0px;\n  color: #333333;\n}\n.care-tips .sub-title[data-v-a22aad92] {\n  padding: 10px;\n  font-size: 1.5em;\n}\n.care-tips .mid-title[data-v-a22aad92] {\n  padding: 5px;\n  margin: 10px auto 0px auto;\n  font-size: 1.5em;\n  text-align: center;\n}\n.care-tips .mid-title .bottom-line[data-v-a22aad92] {\n    margin: auto;\n    width: 150px;\n    padding: 5px;\n    border-bottom: 1px solid #888888;\n}\n.care-tips .category-title[data-v-a22aad92] {\n  padding: 5px;\n  margin: 10px auto 0px auto;\n  font-size: 2em;\n  text-align: center;\n}\n.care-tips .category-title .bottom-line[data-v-a22aad92] {\n    margin: auto;\n    width: 150px;\n    padding: 5px;\n    border-bottom: 1px solid #888888;\n}\n.care-tips .category-separator[data-v-a22aad92] {\n  width: 800px;\n  max-width: 100%;\n  padding: 20px;\n  margin: auto;\n  border-bottom: 1px solid #dddddd;\n}\n.care-tips .separator[data-v-a22aad92] {\n  margin: 30px;\n  border-bottom: 1px solid #999999;\n}\n.care-tips .shadow-light[data-v-a22aad92] {\n  box-shadow: 5px 5px 5px #888888;\n}\n.care-tips .shadow-light[data-v-a22aad92]:hover {\n    box-shadow: 10px 10px 10px #888888;\n    -webkit-transition: box-shadow 0.5s ease;\n    transition: box-shadow 0.5s ease;\n}\n.care-tips .shadow-dark[data-v-a22aad92] {\n  box-shadow: 5px 5px 5px #333333;\n}\n.care-tips .shadow-dark[data-v-a22aad92]:hover {\n    box-shadow: 10px 10px 10px #333333;\n    -webkit-transition: box-shadow 0.5s ease;\n    transition: box-shadow 0.5s ease;\n}\n.care-tips .owner a[data-v-a22aad92] {\n  text-decoration: none;\n  color: #323232;\n}\n.care-tips .owner a[data-v-a22aad92]:hover {\n    color: #888888;\n}\n.care-tips .owner-info[data-v-a22aad92] {\n  display: flex;\n  justify-content: flex-start;\n  flex-wrap: wrap;\n  align-items: center;\n  border-bottom: 1px solid #eeeeee;\n  border-radius: 5px 5px 0px 0px;\n  padding: 10px;\n}\n.care-tips .owner-info .owner-icon[data-v-a22aad92] {\n    width: 30px;\n    height: 30px;\n    border-radius: 50%;\n    margin: 0px 5px 0px 0px;\n}\n.care-tips .owner-desc[data-v-a22aad92] {\n  white-space: pre-wrap;\n  padding: 10px;\n}\n.care-tips .bt-bar[data-v-a22aad92] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  flex-wrap: wrap;\n  width: 1024px;\n  max-width: 100%;\n  padding: 0px 15px;\n  margin: auto;\n}\n.care-tips .input-bt[data-v-a22aad92] {\n  display: inline-block;\n  color: #ffffff;\n  padding: 7px 10px;\n  margin: 5px;\n  background-color: #555555;\n  cursor: pointer;\n  border-radius: 3px;\n}\n.care-tips .input-bt[data-v-a22aad92]:hover {\n    background-color: #888888;\n}\n.care-tips .action-bt[data-v-a22aad92] {\n  color: #ff5555;\n  border: 1px solid #ff5555;\n  border-radius: 5px;\n  padding: 5px 10px;\n  margin: 5px;\n  cursor: pointer;\n}\n.care-tips .action-bt[data-v-a22aad92]:hover {\n    color: #ff8888;\n    border: 1px solid #ff8888;\n}\n.care-tips .feedback-statistic[data-v-a22aad92] {\n  display: flex;\n  justify-content: flex-end;\n  flex-wrap: wrap;\n  align-items: center;\n  padding: 5px;\n  color: #888888;\n  font-size: 0.9em;\n}\n.care-tips .feedback-statistic .container[data-v-a22aad92] {\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    align-items: center;\n    padding: 5px;\n}\n.care-tips .feedback-statistic .clickable[data-v-a22aad92] {\n    cursor: pointer;\n}\n.care-tips .feedback-statistic .clickable[data-v-a22aad92]:hover {\n      border-bottom: 2px solid #ff5555;\n      -webkit-filter: brightness(80%);\n      filter: brightness(80%);\n}\n.care-tips .feedback-statistic .feedback-icon[data-v-a22aad92] {\n    width: 25px;\n    height: 25px;\n}\n.care-tips .feedback-statistic .feedback-num[data-v-a22aad92] {\n    position: relative;\n    padding: 0px 10px 0px 5px;\n}\n.care-tips .feedback-statistic .feedback-num .tip[data-v-a22aad92] {\n      padding: 5px;\n      box-shadow: 5px 5px 5px rgba(50, 50, 50, 0.8);\n      border-radius: 3px;\n      position: absolute;\n      top: 40px;\n      left: -50%;\n      width: 150px;\n      text-align: center;\n      visibility: hidden;\n      z-index: 1;\n      background-color: #ffffff;\n}\n.care-tips .feedback-statistic .feedback-num:hover .tip[data-v-a22aad92] {\n      visibility: visible;\n}\n.care-tips .inform-message[data-v-a22aad92] {\n  width: 100%;\n  background-color: #aaaaaa;\n  color: #ffffff;\n  text-align: center;\n  padding: 10px;\n  position: fixed;\n  left: 0px;\n  height: 40px;\n  top: -40px;\n  z-index: 99;\n  -webkit-transition: top 0.5s ease;\n  transition: top 0.5s ease;\n}\n.care-tips .inform-message.show[data-v-a22aad92] {\n    top: 0px;\n}\n.care-tips .message-list .message[data-v-a22aad92] {\n  margin: 10px;\n  border-bottom: 1px solid #dddddd;\n  padding: 0px;\n}\n.care-tips .message-list .message .message-content[data-v-a22aad92] {\n    padding-left: 10px;\n    white-space: pre-wrap;\n}\n.care-tips .message-list .sub-info[data-v-a22aad92] {\n  display: flex;\n  justify-content: flex-end;\n  flex-wrap: wrap;\n  align-items: center;\n  font-size: 0.8em;\n  color: #888888;\n}\n.care-tips .message-list .sub-info .info-item[data-v-a22aad92] {\n    margin: 10px 5px;\n}\n.care-tips .message-box[data-v-a22aad92] {\n  border: 1px solid #cccccc;\n  border-radius: 5px;\n  padding: 10px;\n}\n.care-tips .message-box textarea[data-v-a22aad92] {\n    border: none;\n    outline: none;\n    width: 100%;\n    height: 60px;\n    resize: none;\n    font-size: 1.1em;\n}\n.care-tips .message-box .bt-container[data-v-a22aad92] {\n    display: flex;\n    justify-content: flex-end;\n    flex-wrap: wrap;\n    align-items: center;\n}\n.care-tips .message-box .bt-container .bt[data-v-a22aad92] {\n      display: inline-block;\n      float: right;\n      color: #ffffff;\n      padding: 5px 10px;\n      margin: 0px;\n      background-color: #555555;\n      cursor: pointer;\n      border-radius: 3px;\n}\n.care-tips .message-box .bt-container .bt[data-v-a22aad92]:hover {\n        background-color: #888888;\n}\n.care-tips .panel-title[data-v-a22aad92] {\n  font-size: 1.5em;\n  text-align: center;\n  margin: 20px;\n}\n.care-tips .no-result-box[data-v-a22aad92] {\n  width: 1200px;\n  max-width: 100%;\n  background-color: #ffffff;\n  color: #333333;\n  padding: 20px;\n  border-radius: 5px;\n  margin: 10px auto;\n  text-align: center;\n  font-size: 1.2em;\n}\n.care-tips .no-result-box .center-bt[data-v-a22aad92] {\n    background-color: #ffffff;\n    color: #ff5555;\n    border: 1px solid #ff5555;\n    width: 200px;\n    padding: 10px;\n    margin: 40px auto;\n    border-radius: 5px;\n    cursor: pointer;\n}\n.care-tips .no-result-box .center-bt[data-v-a22aad92]:hover {\n      color: #ff8888;\n      border: 1px solid #ff8888;\n}\n.care-tips .input-panel[data-v-a22aad92] {\n  position: fixed;\n  top: 70px;\n  left: 0px;\n  width: 100%;\n  height: calc(100% - 130px);\n  padding: 10px;\n  background-color: rgba(50, 50, 50, 0.5);\n  color: white;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.care-tips .input-panel.full[data-v-a22aad92] {\n    top: 0px;\n    height: calc(100% - 60px);\n}\n.care-tips .close-bt[data-v-a22aad92] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  font-size: 1.2em;\n  cursor: pointer;\n  padding: 5px 10px;\n  color: #ff5555;\n  border: 1px solid #ff5555;\n  border-radius: 5px;\n}\n.care-tips .close-bt[data-v-a22aad92]:hover {\n    color: #ff8888;\n    border: 1px solid #ff8888;\n}\n.care-tips .input-area[data-v-a22aad92] {\n  max-height: 100%;\n  overflow-y: auto;\n  position: relative;\n  background-color: #f8f8f8;\n  color: #323232;\n  border-radius: 5px;\n  width: 1024px;\n  max-width: 100%;\n  margin: auto;\n  padding: 10px;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  -ms-transform: translateY(-50%);\n  transform: translateY(-50%);\n}\n.care-tips .input-area .input-item[data-v-a22aad92] {\n    margin: 5px;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    flex-wrap: wrap;\n}\n.care-tips .input-area .input-item .item[data-v-a22aad92] {\n      margin: 5px;\n}\n.care-tips .input-area .input-label[data-v-a22aad92] {\n    font-size: 1.2em;\n    display: inline-block;\n    margin: 5px;\n}\n.care-tips .input-area select[data-v-a22aad92] {\n    border-radius: 3px;\n    max-width: 100%;\n    padding: 5px;\n    font-size: 1.1em;\n}\n.care-tips .input-area textarea[data-v-a22aad92] {\n    margin: 10px 0px;\n    border-radius: 3px;\n    padding: 10px;\n    width: 100%;\n    height: 120px;\n    resize: none;\n    font-size: 1.1em;\n}\n.care-tips .input-area input[type=\"number\"][data-v-a22aad92] {\n    max-width: 100%;\n    padding: 5px;\n    border-radius: 3px;\n    max-width: 80px;\n    font-size: 1.1em;\n}\n.care-tips .input-area input[type=\"text\"][data-v-a22aad92] {\n    max-width: 100%;\n    padding: 5px;\n    border-radius: 3px;\n    font-size: 1.1em;\n}\n.care-tips .input-area .filter-icon[data-v-a22aad92] {\n    width: 30px;\n    height: 30px;\n    margin: 5px;\n    padding: 2px;\n    cursor: pointer;\n}\n.care-tips .input-area .filter-icon[data-v-a22aad92]:hover {\n      padding: 0px;\n}\n.care-tips .input-area .filter-list[data-v-a22aad92] {\n    padding: 10px;\n}\n.care-tips .input-area .filter-list .filter-category[data-v-a22aad92] {\n      padding: 10px;\n      color: #888888;\n}\n.care-tips .input-area .filter-list .filter-category .cat-label[data-v-a22aad92] {\n        font-size: 1.5em;\n        font-weight: bold;\n}\n.care-tips .input-area .filter-list .filter-problem[data-v-a22aad92] {\n      color: #333333;\n      display: flex;\n      justify-content: flex-start;\n      align-items: center;\n      flex-wrap: wrap;\n      padding: 5px;\n}\n.care-tips .input-area .filter-list .filter-problem .problem-label[data-v-a22aad92] {\n        font-size: 1.2em;\n        font-weight: bold;\n}\n.care-tips .input-area .filter-list .filter-item[data-v-a22aad92] {\n      margin: 5px;\n      padding: 5px;\n      cursor: pointer;\n}\n.care-tips .input-area .filter-list .filter-item[data-v-a22aad92]:hover {\n        border-bottom: 1px solid #BE9063;\n}\n.care-tips .slide-panel[data-v-a22aad92] {\n  position: fixed;\n  top: 0px;\n  left: 100%;\n  width: 100%;\n  max-width: 100%;\n  height: calc(100% - 60px);\n  padding: 10px;\n  z-index: 10;\n  color: white;\n  background-color: rgba(50, 50, 50, 0.5);\n  overflow-x: hidden;\n  overflow-y: auto;\n  -webkit-transition: left 0.5s ease;\n  transition: left 0.5s ease;\n}\n.care-tips .slide-panel.open[data-v-a22aad92] {\n    left: 0px;\n}\n.care-tips .side-panel[data-v-a22aad92] {\n  position: fixed;\n  top: 0px;\n  left: -400px;\n  width: 300px;\n  max-width: 100%;\n  height: 100%;\n  padding: 10px;\n  z-index: 11;\n  color: #333333;\n  background-color: rgba(240, 240, 240, 0.9);\n  border-radius: 0px 5px 5px 0px;\n  box-shadow: 3px 3px 5px #888888;\n  overflow-x: hidden;\n  overflow-y: auto;\n  -webkit-transition: left 0.5s ease;\n  transition: left 0.5s ease;\n}\n.care-tips .side-panel.open[data-v-a22aad92] {\n    left: 0px;\n}\n.care-tips .side-panel .search-container[data-v-a22aad92] {\n    width: 400px;\n    max-width: 100%;\n    margin: auto;\n}\n.care-tips .side-panel .search-container .search-item[data-v-a22aad92] {\n      margin: 5px;\n      font-size: 1.1em;\n}\n.care-tips .side-panel .search-container .search-item input[data-v-a22aad92] {\n        padding: 5px;\n        width: 100%;\n}\n.care-tips .side-panel .search-container .search-item select[data-v-a22aad92] {\n        padding: 5px;\n        width: 100%;\n}\n.care-tips .side-panel .search-container .search-item .search-label[data-v-a22aad92] {\n        padding: 5px;\n}\n.care-tips .tab-bar[data-v-a22aad92] {\n  position: fixed;\n  left: 0px;\n  bottom: 0px;\n  width: 100%;\n  height: 60px;\n  z-index: 9;\n  background-color: rgba(240, 240, 240, 0.9);\n  box-shadow: 0px 0px 5px #888888;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.care-tips .tab-bar .tab-bt-container[data-v-a22aad92] {\n    display: flex;\n    overflow-x: auto;\n    padding: 10px;\n}\n.care-tips .tab-bt[data-v-a22aad92] {\n  text-align: center;\n  min-width: 110px;\n  cursor: pointer;\n  padding: 5px 10px;\n  background-color: #ffffff;\n  color: #555555;\n  border: 1px solid #555555;\n  border-radius: 5px;\n  margin: 0px 10px;\n}\n.care-tips .tab-bt[data-v-a22aad92]:hover {\n    color: #888888;\n    border: 1px solid #888888;\n}\n.care-tips .tab-bt.on[data-v-a22aad92] {\n    color: #ff5555;\n    border: 1px solid #ff5555;\n}\n.main[data-v-a22aad92] {\n  width: 1200px;\n  max-width: 100%;\n  margin: auto;\n  padding: 10px;\n}\n.main .about[data-v-a22aad92] {\n    width: 600px;\n    max-width: 100%;\n    margin: auto;\n    font-size: 1.2em;\n}\n.main .about[data-v-a22aad92]:first-letter {\n      font-size: 1.5em;\n      color: #ff3333;\n}\n.main .about .enhance[data-v-a22aad92] {\n      font-weight: bold;\n      text-decoration: underline;\n}\n.main .about p[data-v-a22aad92] {\n      line-height: 1.7em;\n      text-indent: 2em;\n}\n.main .opendata[data-v-a22aad92] {\n    width: 700px;\n    max-width: 100%;\n    margin: auto;\n    font-size: 1.2em;\n}\n.main .opendata ul[data-v-a22aad92] {\n      padding: 0px;\n}\n.main .opendata li[data-v-a22aad92] {\n      display: inline-block;\n      padding: 10px;\n      line-height: 1.7em;\n}\n.main .bt-container[data-v-a22aad92] {\n    padding: 0px 10px;\n}\n.main .logo-container[data-v-a22aad92] {\n    width: 800px;\n    max-width: 100%;\n    margin: auto;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    flex-wrap: wrap;\n}\n.main .logo-container .logo[data-v-a22aad92] {\n      width: 150px;\n      max-width: 100%;\n}\n.main .logo-container .logo-long[data-v-a22aad92] {\n      width: 200px;\n      max-width: 100%;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/profession.vue?vue&type=style&index=0&id=2ab0df18&lang=scss&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/profession.vue?vue&type=style&index=0&id=2ab0df18&lang=scss&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n@charset \"UTF-8\";\nhtml[data-v-2ab0df18], body[data-v-2ab0df18] {\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  overflow: visible;\n}\n*[data-v-2ab0df18] {\n  box-sizing: border-box;\n  font-family: \"\\5FAE\\8EDF\\6B63\\9ED1\\9AD4\", \"Microsoft JhengHei\";\n}\n.center[data-v-2ab0df18] {\n  display: block;\n  margin: auto;\n  clear: both;\n  text-align: center;\n}\n.hide[data-v-2ab0df18] {\n  display: none;\n}\n.warning[data-v-2ab0df18] {\n  color: red;\n}\n.bold[data-v-2ab0df18] {\n  font-weight: bold;\n}\n.inline-block[data-v-2ab0df18] {\n  display: inline-block;\n}\na[data-v-2ab0df18] {\n  text-decoration: none;\n  color: #ff3333;\n}\na[data-v-2ab0df18]:hover {\n    color: #ff8800;\n}\n.one-third-w[data-v-2ab0df18] {\n  display: inline-block;\n  vertical-align: middle;\n  margin: 10px 0px;\n  width: 100%;\n}\n@media only screen and (min-width: 640px) {\n.one-third-w[data-v-2ab0df18] {\n      width: calc(50% - 20px);\n      margin: 10px;\n}\n}\n@media only screen and (min-width: 1024px) {\n.one-third-w[data-v-2ab0df18] {\n      width: calc(33% - 20px);\n      margin: 10px;\n}\n}\n.half-w[data-v-2ab0df18] {\n  display: inline-block;\n  vertical-align: middle;\n  margin: 10px 0px;\n  width: 100%;\n}\n@media only screen and (min-width: 640px) {\n.half-w[data-v-2ab0df18] {\n      width: calc(50% - 20px);\n      margin: 10px;\n}\n}\n.full-w[data-v-2ab0df18] {\n  display: block;\n  margin: 10px 0px;\n  width: 100%;\n}\n.problem-cat[data-v-2ab0df18] {\n  background-color: #f8f8f8;\n  padding: 0px 0px 10px 0px;\n  margin: 10px auto;\n  border-radius: 5px;\n}\n.problem-cat .problem-header[data-v-2ab0df18] {\n    margin: 0px auto;\n    font-size: 1.2em;\n    text-align: left;\n    padding: 10px;\n    background-color: #dddddd;\n    border-radius: 5px 5px 0px 0px;\n}\n.problem-cat .problem-container[data-v-2ab0df18] {\n    padding: 0px;\n}\n.problem-cat .problem-item[data-v-2ab0df18] {\n    border-radius: 5px;\n}\n.problem-cat .problem-item.select[data-v-2ab0df18] {\n      border: 1px solid red;\n}\n.problem-cat .problem-item .problem-title[data-v-2ab0df18] {\n      padding: 10px;\n      border-bottom: 1px solid #eeeeee;\n}\n.problem-cat .problem-item .problem-desc[data-v-2ab0df18] {\n      white-space: pre-wrap;\n      padding: 10px;\n}\n.problem-cat .problem-item .problem-body[data-v-2ab0df18] {\n      color: black;\n}\n.problem-cat .problem-item .item-bt-container[data-v-2ab0df18] {\n      padding: 10px;\n      display: flex;\n      justify-content: flex-end;\n      align-items: center;\n      flex-wrap: wrap;\n}\n.problem-cat .problem-item .item-bt[data-v-2ab0df18] {\n      display: inline-block;\n      margin: 0px 0px 0px 10px;\n      padding: 5px 10px;\n      cursor: pointer;\n      background-color: #eeeeee;\n      color: #333333;\n      border-radius: 3px;\n}\n.problem-cat .problem-item .item-bt[data-v-2ab0df18]:hover {\n        background-color: #ffffff;\n}\n.problem-cat .problem-item .target-info[data-v-2ab0df18] {\n      padding: 5px 10px;\n      color: #555555;\n}\n.cat-D1[data-v-2ab0df18] {\n  background-color: #FFA5A4;\n}\n.cat-D2[data-v-2ab0df18] {\n  background-color: #DEE885;\n}\n.cat-D3[data-v-2ab0df18] {\n  background-color: #85CAE8;\n}\n.cat-D4[data-v-2ab0df18] {\n  background-color: #C089E8;\n}\n.cat-A[data-v-2ab0df18] {\n  background-color: #FFA5A4;\n}\n.cat-B[data-v-2ab0df18] {\n  background-color: #FFDE9C;\n}\n.cat-C[data-v-2ab0df18] {\n  background-color: #DEE885;\n}\n.cat-D[data-v-2ab0df18] {\n  background-color: #9FFFBC;\n}\n.cat-E[data-v-2ab0df18] {\n  background-color: #85CAE8;\n}\n.cat-F[data-v-2ab0df18] {\n  background-color: #AF93FF;\n}\n.cat-G[data-v-2ab0df18] {\n  background-color: #C089E8;\n}\n.cat-O[data-v-2ab0df18] {\n  background-color: #FF8AE7;\n}\n.list-item[data-v-2ab0df18] {\n  background-color: #eeeeee;\n  border-radius: 5px;\n  max-width: 100%;\n  margin: 10px 0px;\n  padding-bottom: 10px;\n  cursor: pointer;\n}\n@media only screen and (min-width: 640px) {\n.list-item[data-v-2ab0df18] {\n      margin: 10px;\n}\n}\n.list-item a[data-v-2ab0df18] {\n    text-decoration: none;\n    color: #323232;\n}\n.list-item .domain-statistic[data-v-2ab0df18] {\n    display: flex;\n    justify-content: flex-start;\n    flex-wrap: wrap;\n    align-items: center;\n}\n.list-item .domain-statistic .domain-info[data-v-2ab0df18] {\n      position: relative;\n      display: flex;\n      justify-content: flex-start;\n      flex-wrap: wrap;\n      align-items: center;\n}\n.list-item .domain-statistic .domain-info .domain-icon[data-v-2ab0df18] {\n        display: inline-block;\n        padding: 7px;\n        margin: 10px 5px 10px 10px;\n        border-radius: 3px;\n}\n.list-item .domain-statistic .domain-info .domain-num[data-v-2ab0df18] {\n        display: inline-block;\n        font-size: 0.8em;\n        vertical-align: middle;\n}\n.list-item .domain-statistic .domain-info .tip[data-v-2ab0df18] {\n        padding: 5px;\n        box-shadow: 5px 5px 5px rgba(50, 50, 50, 0.8);\n        border-radius: 3px;\n        position: absolute;\n        top: 40px;\n        left: 10px;\n        width: 120px;\n        text-align: center;\n        z-index: 1;\n        opacity: 0;\n        -webkit-transition: opacity 0.5s ease;\n        transition: opacity 0.5s ease;\n}\n.list-item .domain-statistic .domain-info:hover .tip[data-v-2ab0df18] {\n        opacity: 1;\n}\n.list-item .desc[data-v-2ab0df18] {\n    white-space: pre-wrap;\n    color: #333333;\n    padding: 0px 20px 0px 10px;\n    width: 100%;\n    height: 4.5em;\n    line-height: 1.5em;\n    overflow: hidden;\n}\n.load-more[data-v-2ab0df18] {\n  width: 500px;\n  max-width: 100%;\n  padding: 10px 20px;\n  border-radius: 5px;\n  margin: 20px auto;\n  border: 1px solid #888888;\n  color: #888888;\n  background-color: #ffffff;\n  cursor: pointer;\n  text-align: center;\n}\n.load-more[data-v-2ab0df18]:hover {\n    border: 1px solid #333333;\n    color: #333333;\n}\n.fade-enter-active[data-v-2ab0df18], .fade-leave-active[data-v-2ab0df18] {\n  transition: opacity 0.5s;\n}\n.fade-enter[data-v-2ab0df18], .fade-leave-to[data-v-2ab0df18] {\n  opacity: 0;\n}\n.create-enter-active[data-v-2ab0df18] {\n  transition: opacity 0.5s;\n}\n.create-enter[data-v-2ab0df18] {\n  opacity: 0;\n}\n.main-container[data-v-2ab0df18] {\n  width: 100%;\n  margin: 80px auto 20px auto;\n  padding: 0px 0px 50px 0px;\n  color: #333333;\n}\n.care-tips .sub-title[data-v-2ab0df18] {\n  padding: 10px;\n  font-size: 1.5em;\n}\n.care-tips .mid-title[data-v-2ab0df18] {\n  padding: 5px;\n  margin: 10px auto 0px auto;\n  font-size: 1.5em;\n  text-align: center;\n}\n.care-tips .mid-title .bottom-line[data-v-2ab0df18] {\n    margin: auto;\n    width: 150px;\n    padding: 5px;\n    border-bottom: 1px solid #888888;\n}\n.care-tips .category-title[data-v-2ab0df18] {\n  padding: 5px;\n  margin: 10px auto 0px auto;\n  font-size: 2em;\n  text-align: center;\n}\n.care-tips .category-title .bottom-line[data-v-2ab0df18] {\n    margin: auto;\n    width: 150px;\n    padding: 5px;\n    border-bottom: 1px solid #888888;\n}\n.care-tips .category-separator[data-v-2ab0df18] {\n  width: 800px;\n  max-width: 100%;\n  padding: 20px;\n  margin: auto;\n  border-bottom: 1px solid #dddddd;\n}\n.care-tips .separator[data-v-2ab0df18] {\n  margin: 30px;\n  border-bottom: 1px solid #999999;\n}\n.care-tips .shadow-light[data-v-2ab0df18] {\n  box-shadow: 5px 5px 5px #888888;\n}\n.care-tips .shadow-light[data-v-2ab0df18]:hover {\n    box-shadow: 10px 10px 10px #888888;\n    -webkit-transition: box-shadow 0.5s ease;\n    transition: box-shadow 0.5s ease;\n}\n.care-tips .shadow-dark[data-v-2ab0df18] {\n  box-shadow: 5px 5px 5px #333333;\n}\n.care-tips .shadow-dark[data-v-2ab0df18]:hover {\n    box-shadow: 10px 10px 10px #333333;\n    -webkit-transition: box-shadow 0.5s ease;\n    transition: box-shadow 0.5s ease;\n}\n.care-tips .owner a[data-v-2ab0df18] {\n  text-decoration: none;\n  color: #323232;\n}\n.care-tips .owner a[data-v-2ab0df18]:hover {\n    color: #888888;\n}\n.care-tips .owner-info[data-v-2ab0df18] {\n  display: flex;\n  justify-content: flex-start;\n  flex-wrap: wrap;\n  align-items: center;\n  border-bottom: 1px solid #eeeeee;\n  border-radius: 5px 5px 0px 0px;\n  padding: 10px;\n}\n.care-tips .owner-info .owner-icon[data-v-2ab0df18] {\n    width: 30px;\n    height: 30px;\n    border-radius: 50%;\n    margin: 0px 5px 0px 0px;\n}\n.care-tips .owner-desc[data-v-2ab0df18] {\n  white-space: pre-wrap;\n  padding: 10px;\n}\n.care-tips .bt-bar[data-v-2ab0df18] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  flex-wrap: wrap;\n  width: 1024px;\n  max-width: 100%;\n  padding: 0px 15px;\n  margin: auto;\n}\n.care-tips .input-bt[data-v-2ab0df18] {\n  display: inline-block;\n  color: #ffffff;\n  padding: 7px 10px;\n  margin: 5px;\n  background-color: #555555;\n  cursor: pointer;\n  border-radius: 3px;\n}\n.care-tips .input-bt[data-v-2ab0df18]:hover {\n    background-color: #888888;\n}\n.care-tips .action-bt[data-v-2ab0df18] {\n  color: #ff5555;\n  border: 1px solid #ff5555;\n  border-radius: 5px;\n  padding: 5px 10px;\n  margin: 5px;\n  cursor: pointer;\n}\n.care-tips .action-bt[data-v-2ab0df18]:hover {\n    color: #ff8888;\n    border: 1px solid #ff8888;\n}\n.care-tips .feedback-statistic[data-v-2ab0df18] {\n  display: flex;\n  justify-content: flex-end;\n  flex-wrap: wrap;\n  align-items: center;\n  padding: 5px;\n  color: #888888;\n  font-size: 0.9em;\n}\n.care-tips .feedback-statistic .container[data-v-2ab0df18] {\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    align-items: center;\n    padding: 5px;\n}\n.care-tips .feedback-statistic .clickable[data-v-2ab0df18] {\n    cursor: pointer;\n}\n.care-tips .feedback-statistic .clickable[data-v-2ab0df18]:hover {\n      border-bottom: 2px solid #ff5555;\n      -webkit-filter: brightness(80%);\n      filter: brightness(80%);\n}\n.care-tips .feedback-statistic .feedback-icon[data-v-2ab0df18] {\n    width: 25px;\n    height: 25px;\n}\n.care-tips .feedback-statistic .feedback-num[data-v-2ab0df18] {\n    position: relative;\n    padding: 0px 10px 0px 5px;\n}\n.care-tips .feedback-statistic .feedback-num .tip[data-v-2ab0df18] {\n      padding: 5px;\n      box-shadow: 5px 5px 5px rgba(50, 50, 50, 0.8);\n      border-radius: 3px;\n      position: absolute;\n      top: 40px;\n      left: -50%;\n      width: 150px;\n      text-align: center;\n      visibility: hidden;\n      z-index: 1;\n      background-color: #ffffff;\n}\n.care-tips .feedback-statistic .feedback-num:hover .tip[data-v-2ab0df18] {\n      visibility: visible;\n}\n.care-tips .inform-message[data-v-2ab0df18] {\n  width: 100%;\n  background-color: #aaaaaa;\n  color: #ffffff;\n  text-align: center;\n  padding: 10px;\n  position: fixed;\n  left: 0px;\n  height: 40px;\n  top: -40px;\n  z-index: 99;\n  -webkit-transition: top 0.5s ease;\n  transition: top 0.5s ease;\n}\n.care-tips .inform-message.show[data-v-2ab0df18] {\n    top: 0px;\n}\n.care-tips .message-list .message[data-v-2ab0df18] {\n  margin: 10px;\n  border-bottom: 1px solid #dddddd;\n  padding: 0px;\n}\n.care-tips .message-list .message .message-content[data-v-2ab0df18] {\n    padding-left: 10px;\n    white-space: pre-wrap;\n}\n.care-tips .message-list .sub-info[data-v-2ab0df18] {\n  display: flex;\n  justify-content: flex-end;\n  flex-wrap: wrap;\n  align-items: center;\n  font-size: 0.8em;\n  color: #888888;\n}\n.care-tips .message-list .sub-info .info-item[data-v-2ab0df18] {\n    margin: 10px 5px;\n}\n.care-tips .message-box[data-v-2ab0df18] {\n  border: 1px solid #cccccc;\n  border-radius: 5px;\n  padding: 10px;\n}\n.care-tips .message-box textarea[data-v-2ab0df18] {\n    border: none;\n    outline: none;\n    width: 100%;\n    height: 60px;\n    resize: none;\n    font-size: 1.1em;\n}\n.care-tips .message-box .bt-container[data-v-2ab0df18] {\n    display: flex;\n    justify-content: flex-end;\n    flex-wrap: wrap;\n    align-items: center;\n}\n.care-tips .message-box .bt-container .bt[data-v-2ab0df18] {\n      display: inline-block;\n      float: right;\n      color: #ffffff;\n      padding: 5px 10px;\n      margin: 0px;\n      background-color: #555555;\n      cursor: pointer;\n      border-radius: 3px;\n}\n.care-tips .message-box .bt-container .bt[data-v-2ab0df18]:hover {\n        background-color: #888888;\n}\n.care-tips .panel-title[data-v-2ab0df18] {\n  font-size: 1.5em;\n  text-align: center;\n  margin: 20px;\n}\n.care-tips .no-result-box[data-v-2ab0df18] {\n  width: 1200px;\n  max-width: 100%;\n  background-color: #ffffff;\n  color: #333333;\n  padding: 20px;\n  border-radius: 5px;\n  margin: 10px auto;\n  text-align: center;\n  font-size: 1.2em;\n}\n.care-tips .no-result-box .center-bt[data-v-2ab0df18] {\n    background-color: #ffffff;\n    color: #ff5555;\n    border: 1px solid #ff5555;\n    width: 200px;\n    padding: 10px;\n    margin: 40px auto;\n    border-radius: 5px;\n    cursor: pointer;\n}\n.care-tips .no-result-box .center-bt[data-v-2ab0df18]:hover {\n      color: #ff8888;\n      border: 1px solid #ff8888;\n}\n.care-tips .input-panel[data-v-2ab0df18] {\n  position: fixed;\n  top: 70px;\n  left: 0px;\n  width: 100%;\n  height: calc(100% - 130px);\n  padding: 10px;\n  background-color: rgba(50, 50, 50, 0.5);\n  color: white;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.care-tips .input-panel.full[data-v-2ab0df18] {\n    top: 0px;\n    height: calc(100% - 60px);\n}\n.care-tips .close-bt[data-v-2ab0df18] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  font-size: 1.2em;\n  cursor: pointer;\n  padding: 5px 10px;\n  color: #ff5555;\n  border: 1px solid #ff5555;\n  border-radius: 5px;\n}\n.care-tips .close-bt[data-v-2ab0df18]:hover {\n    color: #ff8888;\n    border: 1px solid #ff8888;\n}\n.care-tips .input-area[data-v-2ab0df18] {\n  max-height: 100%;\n  overflow-y: auto;\n  position: relative;\n  background-color: #f8f8f8;\n  color: #323232;\n  border-radius: 5px;\n  width: 1024px;\n  max-width: 100%;\n  margin: auto;\n  padding: 10px;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  -ms-transform: translateY(-50%);\n  transform: translateY(-50%);\n}\n.care-tips .input-area .input-item[data-v-2ab0df18] {\n    margin: 5px;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    flex-wrap: wrap;\n}\n.care-tips .input-area .input-item .item[data-v-2ab0df18] {\n      margin: 5px;\n}\n.care-tips .input-area .input-label[data-v-2ab0df18] {\n    font-size: 1.2em;\n    display: inline-block;\n    margin: 5px;\n}\n.care-tips .input-area select[data-v-2ab0df18] {\n    border-radius: 3px;\n    max-width: 100%;\n    padding: 5px;\n    font-size: 1.1em;\n}\n.care-tips .input-area textarea[data-v-2ab0df18] {\n    margin: 10px 0px;\n    border-radius: 3px;\n    padding: 10px;\n    width: 100%;\n    height: 120px;\n    resize: none;\n    font-size: 1.1em;\n}\n.care-tips .input-area input[type=\"number\"][data-v-2ab0df18] {\n    max-width: 100%;\n    padding: 5px;\n    border-radius: 3px;\n    max-width: 80px;\n    font-size: 1.1em;\n}\n.care-tips .input-area input[type=\"text\"][data-v-2ab0df18] {\n    max-width: 100%;\n    padding: 5px;\n    border-radius: 3px;\n    font-size: 1.1em;\n}\n.care-tips .input-area .filter-icon[data-v-2ab0df18] {\n    width: 30px;\n    height: 30px;\n    margin: 5px;\n    padding: 2px;\n    cursor: pointer;\n}\n.care-tips .input-area .filter-icon[data-v-2ab0df18]:hover {\n      padding: 0px;\n}\n.care-tips .input-area .filter-list[data-v-2ab0df18] {\n    padding: 10px;\n}\n.care-tips .input-area .filter-list .filter-category[data-v-2ab0df18] {\n      padding: 10px;\n      color: #888888;\n}\n.care-tips .input-area .filter-list .filter-category .cat-label[data-v-2ab0df18] {\n        font-size: 1.5em;\n        font-weight: bold;\n}\n.care-tips .input-area .filter-list .filter-problem[data-v-2ab0df18] {\n      color: #333333;\n      display: flex;\n      justify-content: flex-start;\n      align-items: center;\n      flex-wrap: wrap;\n      padding: 5px;\n}\n.care-tips .input-area .filter-list .filter-problem .problem-label[data-v-2ab0df18] {\n        font-size: 1.2em;\n        font-weight: bold;\n}\n.care-tips .input-area .filter-list .filter-item[data-v-2ab0df18] {\n      margin: 5px;\n      padding: 5px;\n      cursor: pointer;\n}\n.care-tips .input-area .filter-list .filter-item[data-v-2ab0df18]:hover {\n        border-bottom: 1px solid #BE9063;\n}\n.care-tips .slide-panel[data-v-2ab0df18] {\n  position: fixed;\n  top: 0px;\n  left: 100%;\n  width: 100%;\n  max-width: 100%;\n  height: calc(100% - 60px);\n  padding: 10px;\n  z-index: 10;\n  color: white;\n  background-color: rgba(50, 50, 50, 0.5);\n  overflow-x: hidden;\n  overflow-y: auto;\n  -webkit-transition: left 0.5s ease;\n  transition: left 0.5s ease;\n}\n.care-tips .slide-panel.open[data-v-2ab0df18] {\n    left: 0px;\n}\n.care-tips .side-panel[data-v-2ab0df18] {\n  position: fixed;\n  top: 0px;\n  left: -400px;\n  width: 300px;\n  max-width: 100%;\n  height: 100%;\n  padding: 10px;\n  z-index: 11;\n  color: #333333;\n  background-color: rgba(240, 240, 240, 0.9);\n  border-radius: 0px 5px 5px 0px;\n  box-shadow: 3px 3px 5px #888888;\n  overflow-x: hidden;\n  overflow-y: auto;\n  -webkit-transition: left 0.5s ease;\n  transition: left 0.5s ease;\n}\n.care-tips .side-panel.open[data-v-2ab0df18] {\n    left: 0px;\n}\n.care-tips .side-panel .search-container[data-v-2ab0df18] {\n    width: 400px;\n    max-width: 100%;\n    margin: auto;\n}\n.care-tips .side-panel .search-container .search-item[data-v-2ab0df18] {\n      margin: 5px;\n      font-size: 1.1em;\n}\n.care-tips .side-panel .search-container .search-item input[data-v-2ab0df18] {\n        padding: 5px;\n        width: 100%;\n}\n.care-tips .side-panel .search-container .search-item select[data-v-2ab0df18] {\n        padding: 5px;\n        width: 100%;\n}\n.care-tips .side-panel .search-container .search-item .search-label[data-v-2ab0df18] {\n        padding: 5px;\n}\n.care-tips .tab-bar[data-v-2ab0df18] {\n  position: fixed;\n  left: 0px;\n  bottom: 0px;\n  width: 100%;\n  height: 60px;\n  z-index: 9;\n  background-color: rgba(240, 240, 240, 0.9);\n  box-shadow: 0px 0px 5px #888888;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.care-tips .tab-bar .tab-bt-container[data-v-2ab0df18] {\n    display: flex;\n    overflow-x: auto;\n    padding: 10px;\n}\n.care-tips .tab-bt[data-v-2ab0df18] {\n  text-align: center;\n  min-width: 110px;\n  cursor: pointer;\n  padding: 5px 10px;\n  background-color: #ffffff;\n  color: #555555;\n  border: 1px solid #555555;\n  border-radius: 5px;\n  margin: 0px 10px;\n}\n.care-tips .tab-bt[data-v-2ab0df18]:hover {\n    color: #888888;\n    border: 1px solid #888888;\n}\n.care-tips .tab-bt.on[data-v-2ab0df18] {\n    color: #ff5555;\n    border: 1px solid #ff5555;\n}\n.profession[data-v-2ab0df18] {\n  padding: 10px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/solution-editor.vue?vue&type=style&index=0&id=472eb156&lang=scss&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/solution-editor.vue?vue&type=style&index=0&id=472eb156&lang=scss&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n@charset \"UTF-8\";\nhtml[data-v-472eb156], body[data-v-472eb156] {\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  overflow: visible;\n}\n*[data-v-472eb156] {\n  box-sizing: border-box;\n  font-family: \"\\5FAE\\8EDF\\6B63\\9ED1\\9AD4\", \"Microsoft JhengHei\";\n}\n.center[data-v-472eb156] {\n  display: block;\n  margin: auto;\n  clear: both;\n  text-align: center;\n}\n.hide[data-v-472eb156] {\n  display: none;\n}\n.warning[data-v-472eb156] {\n  color: red;\n}\n.bold[data-v-472eb156] {\n  font-weight: bold;\n}\n.inline-block[data-v-472eb156] {\n  display: inline-block;\n}\na[data-v-472eb156] {\n  text-decoration: none;\n  color: #ff3333;\n}\na[data-v-472eb156]:hover {\n    color: #ff8800;\n}\n.one-third-w[data-v-472eb156] {\n  display: inline-block;\n  vertical-align: middle;\n  margin: 10px 0px;\n  width: 100%;\n}\n@media only screen and (min-width: 640px) {\n.one-third-w[data-v-472eb156] {\n      width: calc(50% - 20px);\n      margin: 10px;\n}\n}\n@media only screen and (min-width: 1024px) {\n.one-third-w[data-v-472eb156] {\n      width: calc(33% - 20px);\n      margin: 10px;\n}\n}\n.half-w[data-v-472eb156] {\n  display: inline-block;\n  vertical-align: middle;\n  margin: 10px 0px;\n  width: 100%;\n}\n@media only screen and (min-width: 640px) {\n.half-w[data-v-472eb156] {\n      width: calc(50% - 20px);\n      margin: 10px;\n}\n}\n.full-w[data-v-472eb156] {\n  display: block;\n  margin: 10px 0px;\n  width: 100%;\n}\n.problem-cat[data-v-472eb156] {\n  background-color: #f8f8f8;\n  padding: 0px 0px 10px 0px;\n  margin: 10px auto;\n  border-radius: 5px;\n}\n.problem-cat .problem-header[data-v-472eb156] {\n    margin: 0px auto;\n    font-size: 1.2em;\n    text-align: left;\n    padding: 10px;\n    background-color: #dddddd;\n    border-radius: 5px 5px 0px 0px;\n}\n.problem-cat .problem-container[data-v-472eb156] {\n    padding: 0px;\n}\n.problem-cat .problem-item[data-v-472eb156] {\n    border-radius: 5px;\n}\n.problem-cat .problem-item.select[data-v-472eb156] {\n      border: 1px solid red;\n}\n.problem-cat .problem-item .problem-title[data-v-472eb156] {\n      padding: 10px;\n      border-bottom: 1px solid #eeeeee;\n}\n.problem-cat .problem-item .problem-desc[data-v-472eb156] {\n      white-space: pre-wrap;\n      padding: 10px;\n}\n.problem-cat .problem-item .problem-body[data-v-472eb156] {\n      color: black;\n}\n.problem-cat .problem-item .item-bt-container[data-v-472eb156] {\n      padding: 10px;\n      display: flex;\n      justify-content: flex-end;\n      align-items: center;\n      flex-wrap: wrap;\n}\n.problem-cat .problem-item .item-bt[data-v-472eb156] {\n      display: inline-block;\n      margin: 0px 0px 0px 10px;\n      padding: 5px 10px;\n      cursor: pointer;\n      background-color: #eeeeee;\n      color: #333333;\n      border-radius: 3px;\n}\n.problem-cat .problem-item .item-bt[data-v-472eb156]:hover {\n        background-color: #ffffff;\n}\n.problem-cat .problem-item .target-info[data-v-472eb156] {\n      padding: 5px 10px;\n      color: #555555;\n}\n.cat-D1[data-v-472eb156] {\n  background-color: #FFA5A4;\n}\n.cat-D2[data-v-472eb156] {\n  background-color: #DEE885;\n}\n.cat-D3[data-v-472eb156] {\n  background-color: #85CAE8;\n}\n.cat-D4[data-v-472eb156] {\n  background-color: #C089E8;\n}\n.cat-A[data-v-472eb156] {\n  background-color: #FFA5A4;\n}\n.cat-B[data-v-472eb156] {\n  background-color: #FFDE9C;\n}\n.cat-C[data-v-472eb156] {\n  background-color: #DEE885;\n}\n.cat-D[data-v-472eb156] {\n  background-color: #9FFFBC;\n}\n.cat-E[data-v-472eb156] {\n  background-color: #85CAE8;\n}\n.cat-F[data-v-472eb156] {\n  background-color: #AF93FF;\n}\n.cat-G[data-v-472eb156] {\n  background-color: #C089E8;\n}\n.cat-O[data-v-472eb156] {\n  background-color: #FF8AE7;\n}\n.list-item[data-v-472eb156] {\n  background-color: #eeeeee;\n  border-radius: 5px;\n  max-width: 100%;\n  margin: 10px 0px;\n  padding-bottom: 10px;\n  cursor: pointer;\n}\n@media only screen and (min-width: 640px) {\n.list-item[data-v-472eb156] {\n      margin: 10px;\n}\n}\n.list-item a[data-v-472eb156] {\n    text-decoration: none;\n    color: #323232;\n}\n.list-item .domain-statistic[data-v-472eb156] {\n    display: flex;\n    justify-content: flex-start;\n    flex-wrap: wrap;\n    align-items: center;\n}\n.list-item .domain-statistic .domain-info[data-v-472eb156] {\n      position: relative;\n      display: flex;\n      justify-content: flex-start;\n      flex-wrap: wrap;\n      align-items: center;\n}\n.list-item .domain-statistic .domain-info .domain-icon[data-v-472eb156] {\n        display: inline-block;\n        padding: 7px;\n        margin: 10px 5px 10px 10px;\n        border-radius: 3px;\n}\n.list-item .domain-statistic .domain-info .domain-num[data-v-472eb156] {\n        display: inline-block;\n        font-size: 0.8em;\n        vertical-align: middle;\n}\n.list-item .domain-statistic .domain-info .tip[data-v-472eb156] {\n        padding: 5px;\n        box-shadow: 5px 5px 5px rgba(50, 50, 50, 0.8);\n        border-radius: 3px;\n        position: absolute;\n        top: 40px;\n        left: 10px;\n        width: 120px;\n        text-align: center;\n        z-index: 1;\n        opacity: 0;\n        -webkit-transition: opacity 0.5s ease;\n        transition: opacity 0.5s ease;\n}\n.list-item .domain-statistic .domain-info:hover .tip[data-v-472eb156] {\n        opacity: 1;\n}\n.list-item .desc[data-v-472eb156] {\n    white-space: pre-wrap;\n    color: #333333;\n    padding: 0px 20px 0px 10px;\n    width: 100%;\n    height: 4.5em;\n    line-height: 1.5em;\n    overflow: hidden;\n}\n.load-more[data-v-472eb156] {\n  width: 500px;\n  max-width: 100%;\n  padding: 10px 20px;\n  border-radius: 5px;\n  margin: 20px auto;\n  border: 1px solid #888888;\n  color: #888888;\n  background-color: #ffffff;\n  cursor: pointer;\n  text-align: center;\n}\n.load-more[data-v-472eb156]:hover {\n    border: 1px solid #333333;\n    color: #333333;\n}\n.fade-enter-active[data-v-472eb156], .fade-leave-active[data-v-472eb156] {\n  transition: opacity 0.5s;\n}\n.fade-enter[data-v-472eb156], .fade-leave-to[data-v-472eb156] {\n  opacity: 0;\n}\n.create-enter-active[data-v-472eb156] {\n  transition: opacity 0.5s;\n}\n.create-enter[data-v-472eb156] {\n  opacity: 0;\n}\n.main-container[data-v-472eb156] {\n  width: 100%;\n  margin: 80px auto 20px auto;\n  padding: 0px 0px 50px 0px;\n  color: #333333;\n}\n.care-tips .sub-title[data-v-472eb156] {\n  padding: 10px;\n  font-size: 1.5em;\n}\n.care-tips .mid-title[data-v-472eb156] {\n  padding: 5px;\n  margin: 10px auto 0px auto;\n  font-size: 1.5em;\n  text-align: center;\n}\n.care-tips .mid-title .bottom-line[data-v-472eb156] {\n    margin: auto;\n    width: 150px;\n    padding: 5px;\n    border-bottom: 1px solid #888888;\n}\n.care-tips .category-title[data-v-472eb156] {\n  padding: 5px;\n  margin: 10px auto 0px auto;\n  font-size: 2em;\n  text-align: center;\n}\n.care-tips .category-title .bottom-line[data-v-472eb156] {\n    margin: auto;\n    width: 150px;\n    padding: 5px;\n    border-bottom: 1px solid #888888;\n}\n.care-tips .category-separator[data-v-472eb156] {\n  width: 800px;\n  max-width: 100%;\n  padding: 20px;\n  margin: auto;\n  border-bottom: 1px solid #dddddd;\n}\n.care-tips .separator[data-v-472eb156] {\n  margin: 30px;\n  border-bottom: 1px solid #999999;\n}\n.care-tips .shadow-light[data-v-472eb156] {\n  box-shadow: 5px 5px 5px #888888;\n}\n.care-tips .shadow-light[data-v-472eb156]:hover {\n    box-shadow: 10px 10px 10px #888888;\n    -webkit-transition: box-shadow 0.5s ease;\n    transition: box-shadow 0.5s ease;\n}\n.care-tips .shadow-dark[data-v-472eb156] {\n  box-shadow: 5px 5px 5px #333333;\n}\n.care-tips .shadow-dark[data-v-472eb156]:hover {\n    box-shadow: 10px 10px 10px #333333;\n    -webkit-transition: box-shadow 0.5s ease;\n    transition: box-shadow 0.5s ease;\n}\n.care-tips .owner a[data-v-472eb156] {\n  text-decoration: none;\n  color: #323232;\n}\n.care-tips .owner a[data-v-472eb156]:hover {\n    color: #888888;\n}\n.care-tips .owner-info[data-v-472eb156] {\n  display: flex;\n  justify-content: flex-start;\n  flex-wrap: wrap;\n  align-items: center;\n  border-bottom: 1px solid #eeeeee;\n  border-radius: 5px 5px 0px 0px;\n  padding: 10px;\n}\n.care-tips .owner-info .owner-icon[data-v-472eb156] {\n    width: 30px;\n    height: 30px;\n    border-radius: 50%;\n    margin: 0px 5px 0px 0px;\n}\n.care-tips .owner-desc[data-v-472eb156] {\n  white-space: pre-wrap;\n  padding: 10px;\n}\n.care-tips .bt-bar[data-v-472eb156] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  flex-wrap: wrap;\n  width: 1024px;\n  max-width: 100%;\n  padding: 0px 15px;\n  margin: auto;\n}\n.care-tips .input-bt[data-v-472eb156] {\n  display: inline-block;\n  color: #ffffff;\n  padding: 7px 10px;\n  margin: 5px;\n  background-color: #555555;\n  cursor: pointer;\n  border-radius: 3px;\n}\n.care-tips .input-bt[data-v-472eb156]:hover {\n    background-color: #888888;\n}\n.care-tips .action-bt[data-v-472eb156] {\n  color: #ff5555;\n  border: 1px solid #ff5555;\n  border-radius: 5px;\n  padding: 5px 10px;\n  margin: 5px;\n  cursor: pointer;\n}\n.care-tips .action-bt[data-v-472eb156]:hover {\n    color: #ff8888;\n    border: 1px solid #ff8888;\n}\n.care-tips .feedback-statistic[data-v-472eb156] {\n  display: flex;\n  justify-content: flex-end;\n  flex-wrap: wrap;\n  align-items: center;\n  padding: 5px;\n  color: #888888;\n  font-size: 0.9em;\n}\n.care-tips .feedback-statistic .container[data-v-472eb156] {\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    align-items: center;\n    padding: 5px;\n}\n.care-tips .feedback-statistic .clickable[data-v-472eb156] {\n    cursor: pointer;\n}\n.care-tips .feedback-statistic .clickable[data-v-472eb156]:hover {\n      border-bottom: 2px solid #ff5555;\n      -webkit-filter: brightness(80%);\n      filter: brightness(80%);\n}\n.care-tips .feedback-statistic .feedback-icon[data-v-472eb156] {\n    width: 25px;\n    height: 25px;\n}\n.care-tips .feedback-statistic .feedback-num[data-v-472eb156] {\n    position: relative;\n    padding: 0px 10px 0px 5px;\n}\n.care-tips .feedback-statistic .feedback-num .tip[data-v-472eb156] {\n      padding: 5px;\n      box-shadow: 5px 5px 5px rgba(50, 50, 50, 0.8);\n      border-radius: 3px;\n      position: absolute;\n      top: 40px;\n      left: -50%;\n      width: 150px;\n      text-align: center;\n      visibility: hidden;\n      z-index: 1;\n      background-color: #ffffff;\n}\n.care-tips .feedback-statistic .feedback-num:hover .tip[data-v-472eb156] {\n      visibility: visible;\n}\n.care-tips .inform-message[data-v-472eb156] {\n  width: 100%;\n  background-color: #aaaaaa;\n  color: #ffffff;\n  text-align: center;\n  padding: 10px;\n  position: fixed;\n  left: 0px;\n  height: 40px;\n  top: -40px;\n  z-index: 99;\n  -webkit-transition: top 0.5s ease;\n  transition: top 0.5s ease;\n}\n.care-tips .inform-message.show[data-v-472eb156] {\n    top: 0px;\n}\n.care-tips .message-list .message[data-v-472eb156] {\n  margin: 10px;\n  border-bottom: 1px solid #dddddd;\n  padding: 0px;\n}\n.care-tips .message-list .message .message-content[data-v-472eb156] {\n    padding-left: 10px;\n    white-space: pre-wrap;\n}\n.care-tips .message-list .sub-info[data-v-472eb156] {\n  display: flex;\n  justify-content: flex-end;\n  flex-wrap: wrap;\n  align-items: center;\n  font-size: 0.8em;\n  color: #888888;\n}\n.care-tips .message-list .sub-info .info-item[data-v-472eb156] {\n    margin: 10px 5px;\n}\n.care-tips .message-box[data-v-472eb156] {\n  border: 1px solid #cccccc;\n  border-radius: 5px;\n  padding: 10px;\n}\n.care-tips .message-box textarea[data-v-472eb156] {\n    border: none;\n    outline: none;\n    width: 100%;\n    height: 60px;\n    resize: none;\n    font-size: 1.1em;\n}\n.care-tips .message-box .bt-container[data-v-472eb156] {\n    display: flex;\n    justify-content: flex-end;\n    flex-wrap: wrap;\n    align-items: center;\n}\n.care-tips .message-box .bt-container .bt[data-v-472eb156] {\n      display: inline-block;\n      float: right;\n      color: #ffffff;\n      padding: 5px 10px;\n      margin: 0px;\n      background-color: #555555;\n      cursor: pointer;\n      border-radius: 3px;\n}\n.care-tips .message-box .bt-container .bt[data-v-472eb156]:hover {\n        background-color: #888888;\n}\n.care-tips .panel-title[data-v-472eb156] {\n  font-size: 1.5em;\n  text-align: center;\n  margin: 20px;\n}\n.care-tips .no-result-box[data-v-472eb156] {\n  width: 1200px;\n  max-width: 100%;\n  background-color: #ffffff;\n  color: #333333;\n  padding: 20px;\n  border-radius: 5px;\n  margin: 10px auto;\n  text-align: center;\n  font-size: 1.2em;\n}\n.care-tips .no-result-box .center-bt[data-v-472eb156] {\n    background-color: #ffffff;\n    color: #ff5555;\n    border: 1px solid #ff5555;\n    width: 200px;\n    padding: 10px;\n    margin: 40px auto;\n    border-radius: 5px;\n    cursor: pointer;\n}\n.care-tips .no-result-box .center-bt[data-v-472eb156]:hover {\n      color: #ff8888;\n      border: 1px solid #ff8888;\n}\n.care-tips .input-panel[data-v-472eb156] {\n  position: fixed;\n  top: 70px;\n  left: 0px;\n  width: 100%;\n  height: calc(100% - 130px);\n  padding: 10px;\n  background-color: rgba(50, 50, 50, 0.5);\n  color: white;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.care-tips .input-panel.full[data-v-472eb156] {\n    top: 0px;\n    height: calc(100% - 60px);\n}\n.care-tips .close-bt[data-v-472eb156] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  font-size: 1.2em;\n  cursor: pointer;\n  padding: 5px 10px;\n  color: #ff5555;\n  border: 1px solid #ff5555;\n  border-radius: 5px;\n}\n.care-tips .close-bt[data-v-472eb156]:hover {\n    color: #ff8888;\n    border: 1px solid #ff8888;\n}\n.care-tips .input-area[data-v-472eb156] {\n  max-height: 100%;\n  overflow-y: auto;\n  position: relative;\n  background-color: #f8f8f8;\n  color: #323232;\n  border-radius: 5px;\n  width: 1024px;\n  max-width: 100%;\n  margin: auto;\n  padding: 10px;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  -ms-transform: translateY(-50%);\n  transform: translateY(-50%);\n}\n.care-tips .input-area .input-item[data-v-472eb156] {\n    margin: 5px;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    flex-wrap: wrap;\n}\n.care-tips .input-area .input-item .item[data-v-472eb156] {\n      margin: 5px;\n}\n.care-tips .input-area .input-label[data-v-472eb156] {\n    font-size: 1.2em;\n    display: inline-block;\n    margin: 5px;\n}\n.care-tips .input-area select[data-v-472eb156] {\n    border-radius: 3px;\n    max-width: 100%;\n    padding: 5px;\n    font-size: 1.1em;\n}\n.care-tips .input-area textarea[data-v-472eb156] {\n    margin: 10px 0px;\n    border-radius: 3px;\n    padding: 10px;\n    width: 100%;\n    height: 120px;\n    resize: none;\n    font-size: 1.1em;\n}\n.care-tips .input-area input[type=\"number\"][data-v-472eb156] {\n    max-width: 100%;\n    padding: 5px;\n    border-radius: 3px;\n    max-width: 80px;\n    font-size: 1.1em;\n}\n.care-tips .input-area input[type=\"text\"][data-v-472eb156] {\n    max-width: 100%;\n    padding: 5px;\n    border-radius: 3px;\n    font-size: 1.1em;\n}\n.care-tips .input-area .filter-icon[data-v-472eb156] {\n    width: 30px;\n    height: 30px;\n    margin: 5px;\n    padding: 2px;\n    cursor: pointer;\n}\n.care-tips .input-area .filter-icon[data-v-472eb156]:hover {\n      padding: 0px;\n}\n.care-tips .input-area .filter-list[data-v-472eb156] {\n    padding: 10px;\n}\n.care-tips .input-area .filter-list .filter-category[data-v-472eb156] {\n      padding: 10px;\n      color: #888888;\n}\n.care-tips .input-area .filter-list .filter-category .cat-label[data-v-472eb156] {\n        font-size: 1.5em;\n        font-weight: bold;\n}\n.care-tips .input-area .filter-list .filter-problem[data-v-472eb156] {\n      color: #333333;\n      display: flex;\n      justify-content: flex-start;\n      align-items: center;\n      flex-wrap: wrap;\n      padding: 5px;\n}\n.care-tips .input-area .filter-list .filter-problem .problem-label[data-v-472eb156] {\n        font-size: 1.2em;\n        font-weight: bold;\n}\n.care-tips .input-area .filter-list .filter-item[data-v-472eb156] {\n      margin: 5px;\n      padding: 5px;\n      cursor: pointer;\n}\n.care-tips .input-area .filter-list .filter-item[data-v-472eb156]:hover {\n        border-bottom: 1px solid #BE9063;\n}\n.care-tips .slide-panel[data-v-472eb156] {\n  position: fixed;\n  top: 0px;\n  left: 100%;\n  width: 100%;\n  max-width: 100%;\n  height: calc(100% - 60px);\n  padding: 10px;\n  z-index: 10;\n  color: white;\n  background-color: rgba(50, 50, 50, 0.5);\n  overflow-x: hidden;\n  overflow-y: auto;\n  -webkit-transition: left 0.5s ease;\n  transition: left 0.5s ease;\n}\n.care-tips .slide-panel.open[data-v-472eb156] {\n    left: 0px;\n}\n.care-tips .side-panel[data-v-472eb156] {\n  position: fixed;\n  top: 0px;\n  left: -400px;\n  width: 300px;\n  max-width: 100%;\n  height: 100%;\n  padding: 10px;\n  z-index: 11;\n  color: #333333;\n  background-color: rgba(240, 240, 240, 0.9);\n  border-radius: 0px 5px 5px 0px;\n  box-shadow: 3px 3px 5px #888888;\n  overflow-x: hidden;\n  overflow-y: auto;\n  -webkit-transition: left 0.5s ease;\n  transition: left 0.5s ease;\n}\n.care-tips .side-panel.open[data-v-472eb156] {\n    left: 0px;\n}\n.care-tips .side-panel .search-container[data-v-472eb156] {\n    width: 400px;\n    max-width: 100%;\n    margin: auto;\n}\n.care-tips .side-panel .search-container .search-item[data-v-472eb156] {\n      margin: 5px;\n      font-size: 1.1em;\n}\n.care-tips .side-panel .search-container .search-item input[data-v-472eb156] {\n        padding: 5px;\n        width: 100%;\n}\n.care-tips .side-panel .search-container .search-item select[data-v-472eb156] {\n        padding: 5px;\n        width: 100%;\n}\n.care-tips .side-panel .search-container .search-item .search-label[data-v-472eb156] {\n        padding: 5px;\n}\n.care-tips .tab-bar[data-v-472eb156] {\n  position: fixed;\n  left: 0px;\n  bottom: 0px;\n  width: 100%;\n  height: 60px;\n  z-index: 9;\n  background-color: rgba(240, 240, 240, 0.9);\n  box-shadow: 0px 0px 5px #888888;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.care-tips .tab-bar .tab-bt-container[data-v-472eb156] {\n    display: flex;\n    overflow-x: auto;\n    padding: 10px;\n}\n.care-tips .tab-bt[data-v-472eb156] {\n  text-align: center;\n  min-width: 110px;\n  cursor: pointer;\n  padding: 5px 10px;\n  background-color: #ffffff;\n  color: #555555;\n  border: 1px solid #555555;\n  border-radius: 5px;\n  margin: 0px 10px;\n}\n.care-tips .tab-bt[data-v-472eb156]:hover {\n    color: #888888;\n    border: 1px solid #888888;\n}\n.care-tips .tab-bt.on[data-v-472eb156] {\n    color: #ff5555;\n    border: 1px solid #ff5555;\n}\n.solution-editor[data-v-472eb156] {\n  width: 100%;\n  min-height: 100%;\n}\n.solution-editor .step-page[data-v-472eb156] {\n    background-color: #eeeeee;\n    color: #323232;\n    width: 1024px;\n    max-width: 100%;\n    padding: 30px 10px;\n    border-radius: 5px;\n    margin: 10px auto;\n}\n.solution-editor .step-bt-container[data-v-472eb156] {\n    padding: 10px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-wrap: wrap;\n}\n.solution-editor .quest[data-v-472eb156] {\n    padding: 10px 0px;\n    font-size: 1.2em;\n    font-weight: bold;\n}\n.solution-editor .remark[data-v-472eb156] {\n    text-align: center;\n    padding: 5px 0px;\n    font-size: 0.9em;\n    color: #888888;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/solution-list.vue?vue&type=style&index=0&id=8d272bf4&lang=scss&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/solution-list.vue?vue&type=style&index=0&id=8d272bf4&lang=scss&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n@charset \"UTF-8\";\nhtml[data-v-8d272bf4], body[data-v-8d272bf4] {\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  overflow: visible;\n}\n*[data-v-8d272bf4] {\n  box-sizing: border-box;\n  font-family: \"\\5FAE\\8EDF\\6B63\\9ED1\\9AD4\", \"Microsoft JhengHei\";\n}\n.center[data-v-8d272bf4] {\n  display: block;\n  margin: auto;\n  clear: both;\n  text-align: center;\n}\n.hide[data-v-8d272bf4] {\n  display: none;\n}\n.warning[data-v-8d272bf4] {\n  color: red;\n}\n.bold[data-v-8d272bf4] {\n  font-weight: bold;\n}\n.inline-block[data-v-8d272bf4] {\n  display: inline-block;\n}\na[data-v-8d272bf4] {\n  text-decoration: none;\n  color: #ff3333;\n}\na[data-v-8d272bf4]:hover {\n    color: #ff8800;\n}\n.one-third-w[data-v-8d272bf4] {\n  display: inline-block;\n  vertical-align: middle;\n  margin: 10px 0px;\n  width: 100%;\n}\n@media only screen and (min-width: 640px) {\n.one-third-w[data-v-8d272bf4] {\n      width: calc(50% - 20px);\n      margin: 10px;\n}\n}\n@media only screen and (min-width: 1024px) {\n.one-third-w[data-v-8d272bf4] {\n      width: calc(33% - 20px);\n      margin: 10px;\n}\n}\n.half-w[data-v-8d272bf4] {\n  display: inline-block;\n  vertical-align: middle;\n  margin: 10px 0px;\n  width: 100%;\n}\n@media only screen and (min-width: 640px) {\n.half-w[data-v-8d272bf4] {\n      width: calc(50% - 20px);\n      margin: 10px;\n}\n}\n.full-w[data-v-8d272bf4] {\n  display: block;\n  margin: 10px 0px;\n  width: 100%;\n}\n.problem-cat[data-v-8d272bf4] {\n  background-color: #f8f8f8;\n  padding: 0px 0px 10px 0px;\n  margin: 10px auto;\n  border-radius: 5px;\n}\n.problem-cat .problem-header[data-v-8d272bf4] {\n    margin: 0px auto;\n    font-size: 1.2em;\n    text-align: left;\n    padding: 10px;\n    background-color: #dddddd;\n    border-radius: 5px 5px 0px 0px;\n}\n.problem-cat .problem-container[data-v-8d272bf4] {\n    padding: 0px;\n}\n.problem-cat .problem-item[data-v-8d272bf4] {\n    border-radius: 5px;\n}\n.problem-cat .problem-item.select[data-v-8d272bf4] {\n      border: 1px solid red;\n}\n.problem-cat .problem-item .problem-title[data-v-8d272bf4] {\n      padding: 10px;\n      border-bottom: 1px solid #eeeeee;\n}\n.problem-cat .problem-item .problem-desc[data-v-8d272bf4] {\n      white-space: pre-wrap;\n      padding: 10px;\n}\n.problem-cat .problem-item .problem-body[data-v-8d272bf4] {\n      color: black;\n}\n.problem-cat .problem-item .item-bt-container[data-v-8d272bf4] {\n      padding: 10px;\n      display: flex;\n      justify-content: flex-end;\n      align-items: center;\n      flex-wrap: wrap;\n}\n.problem-cat .problem-item .item-bt[data-v-8d272bf4] {\n      display: inline-block;\n      margin: 0px 0px 0px 10px;\n      padding: 5px 10px;\n      cursor: pointer;\n      background-color: #eeeeee;\n      color: #333333;\n      border-radius: 3px;\n}\n.problem-cat .problem-item .item-bt[data-v-8d272bf4]:hover {\n        background-color: #ffffff;\n}\n.problem-cat .problem-item .target-info[data-v-8d272bf4] {\n      padding: 5px 10px;\n      color: #555555;\n}\n.cat-D1[data-v-8d272bf4] {\n  background-color: #FFA5A4;\n}\n.cat-D2[data-v-8d272bf4] {\n  background-color: #DEE885;\n}\n.cat-D3[data-v-8d272bf4] {\n  background-color: #85CAE8;\n}\n.cat-D4[data-v-8d272bf4] {\n  background-color: #C089E8;\n}\n.cat-A[data-v-8d272bf4] {\n  background-color: #FFA5A4;\n}\n.cat-B[data-v-8d272bf4] {\n  background-color: #FFDE9C;\n}\n.cat-C[data-v-8d272bf4] {\n  background-color: #DEE885;\n}\n.cat-D[data-v-8d272bf4] {\n  background-color: #9FFFBC;\n}\n.cat-E[data-v-8d272bf4] {\n  background-color: #85CAE8;\n}\n.cat-F[data-v-8d272bf4] {\n  background-color: #AF93FF;\n}\n.cat-G[data-v-8d272bf4] {\n  background-color: #C089E8;\n}\n.cat-O[data-v-8d272bf4] {\n  background-color: #FF8AE7;\n}\n.list-item[data-v-8d272bf4] {\n  background-color: #eeeeee;\n  border-radius: 5px;\n  max-width: 100%;\n  margin: 10px 0px;\n  padding-bottom: 10px;\n  cursor: pointer;\n}\n@media only screen and (min-width: 640px) {\n.list-item[data-v-8d272bf4] {\n      margin: 10px;\n}\n}\n.list-item a[data-v-8d272bf4] {\n    text-decoration: none;\n    color: #323232;\n}\n.list-item .domain-statistic[data-v-8d272bf4] {\n    display: flex;\n    justify-content: flex-start;\n    flex-wrap: wrap;\n    align-items: center;\n}\n.list-item .domain-statistic .domain-info[data-v-8d272bf4] {\n      position: relative;\n      display: flex;\n      justify-content: flex-start;\n      flex-wrap: wrap;\n      align-items: center;\n}\n.list-item .domain-statistic .domain-info .domain-icon[data-v-8d272bf4] {\n        display: inline-block;\n        padding: 7px;\n        margin: 10px 5px 10px 10px;\n        border-radius: 3px;\n}\n.list-item .domain-statistic .domain-info .domain-num[data-v-8d272bf4] {\n        display: inline-block;\n        font-size: 0.8em;\n        vertical-align: middle;\n}\n.list-item .domain-statistic .domain-info .tip[data-v-8d272bf4] {\n        padding: 5px;\n        box-shadow: 5px 5px 5px rgba(50, 50, 50, 0.8);\n        border-radius: 3px;\n        position: absolute;\n        top: 40px;\n        left: 10px;\n        width: 120px;\n        text-align: center;\n        z-index: 1;\n        opacity: 0;\n        -webkit-transition: opacity 0.5s ease;\n        transition: opacity 0.5s ease;\n}\n.list-item .domain-statistic .domain-info:hover .tip[data-v-8d272bf4] {\n        opacity: 1;\n}\n.list-item .desc[data-v-8d272bf4] {\n    white-space: pre-wrap;\n    color: #333333;\n    padding: 0px 20px 0px 10px;\n    width: 100%;\n    height: 4.5em;\n    line-height: 1.5em;\n    overflow: hidden;\n}\n.load-more[data-v-8d272bf4] {\n  width: 500px;\n  max-width: 100%;\n  padding: 10px 20px;\n  border-radius: 5px;\n  margin: 20px auto;\n  border: 1px solid #888888;\n  color: #888888;\n  background-color: #ffffff;\n  cursor: pointer;\n  text-align: center;\n}\n.load-more[data-v-8d272bf4]:hover {\n    border: 1px solid #333333;\n    color: #333333;\n}\n.fade-enter-active[data-v-8d272bf4], .fade-leave-active[data-v-8d272bf4] {\n  transition: opacity 0.5s;\n}\n.fade-enter[data-v-8d272bf4], .fade-leave-to[data-v-8d272bf4] {\n  opacity: 0;\n}\n.create-enter-active[data-v-8d272bf4] {\n  transition: opacity 0.5s;\n}\n.create-enter[data-v-8d272bf4] {\n  opacity: 0;\n}\n.main-container[data-v-8d272bf4] {\n  width: 100%;\n  margin: 80px auto 20px auto;\n  padding: 0px 0px 50px 0px;\n  color: #333333;\n}\n.care-tips .sub-title[data-v-8d272bf4] {\n  padding: 10px;\n  font-size: 1.5em;\n}\n.care-tips .mid-title[data-v-8d272bf4] {\n  padding: 5px;\n  margin: 10px auto 0px auto;\n  font-size: 1.5em;\n  text-align: center;\n}\n.care-tips .mid-title .bottom-line[data-v-8d272bf4] {\n    margin: auto;\n    width: 150px;\n    padding: 5px;\n    border-bottom: 1px solid #888888;\n}\n.care-tips .category-title[data-v-8d272bf4] {\n  padding: 5px;\n  margin: 10px auto 0px auto;\n  font-size: 2em;\n  text-align: center;\n}\n.care-tips .category-title .bottom-line[data-v-8d272bf4] {\n    margin: auto;\n    width: 150px;\n    padding: 5px;\n    border-bottom: 1px solid #888888;\n}\n.care-tips .category-separator[data-v-8d272bf4] {\n  width: 800px;\n  max-width: 100%;\n  padding: 20px;\n  margin: auto;\n  border-bottom: 1px solid #dddddd;\n}\n.care-tips .separator[data-v-8d272bf4] {\n  margin: 30px;\n  border-bottom: 1px solid #999999;\n}\n.care-tips .shadow-light[data-v-8d272bf4] {\n  box-shadow: 5px 5px 5px #888888;\n}\n.care-tips .shadow-light[data-v-8d272bf4]:hover {\n    box-shadow: 10px 10px 10px #888888;\n    -webkit-transition: box-shadow 0.5s ease;\n    transition: box-shadow 0.5s ease;\n}\n.care-tips .shadow-dark[data-v-8d272bf4] {\n  box-shadow: 5px 5px 5px #333333;\n}\n.care-tips .shadow-dark[data-v-8d272bf4]:hover {\n    box-shadow: 10px 10px 10px #333333;\n    -webkit-transition: box-shadow 0.5s ease;\n    transition: box-shadow 0.5s ease;\n}\n.care-tips .owner a[data-v-8d272bf4] {\n  text-decoration: none;\n  color: #323232;\n}\n.care-tips .owner a[data-v-8d272bf4]:hover {\n    color: #888888;\n}\n.care-tips .owner-info[data-v-8d272bf4] {\n  display: flex;\n  justify-content: flex-start;\n  flex-wrap: wrap;\n  align-items: center;\n  border-bottom: 1px solid #eeeeee;\n  border-radius: 5px 5px 0px 0px;\n  padding: 10px;\n}\n.care-tips .owner-info .owner-icon[data-v-8d272bf4] {\n    width: 30px;\n    height: 30px;\n    border-radius: 50%;\n    margin: 0px 5px 0px 0px;\n}\n.care-tips .owner-desc[data-v-8d272bf4] {\n  white-space: pre-wrap;\n  padding: 10px;\n}\n.care-tips .bt-bar[data-v-8d272bf4] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  flex-wrap: wrap;\n  width: 1024px;\n  max-width: 100%;\n  padding: 0px 15px;\n  margin: auto;\n}\n.care-tips .input-bt[data-v-8d272bf4] {\n  display: inline-block;\n  color: #ffffff;\n  padding: 7px 10px;\n  margin: 5px;\n  background-color: #555555;\n  cursor: pointer;\n  border-radius: 3px;\n}\n.care-tips .input-bt[data-v-8d272bf4]:hover {\n    background-color: #888888;\n}\n.care-tips .action-bt[data-v-8d272bf4] {\n  color: #ff5555;\n  border: 1px solid #ff5555;\n  border-radius: 5px;\n  padding: 5px 10px;\n  margin: 5px;\n  cursor: pointer;\n}\n.care-tips .action-bt[data-v-8d272bf4]:hover {\n    color: #ff8888;\n    border: 1px solid #ff8888;\n}\n.care-tips .feedback-statistic[data-v-8d272bf4] {\n  display: flex;\n  justify-content: flex-end;\n  flex-wrap: wrap;\n  align-items: center;\n  padding: 5px;\n  color: #888888;\n  font-size: 0.9em;\n}\n.care-tips .feedback-statistic .container[data-v-8d272bf4] {\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    align-items: center;\n    padding: 5px;\n}\n.care-tips .feedback-statistic .clickable[data-v-8d272bf4] {\n    cursor: pointer;\n}\n.care-tips .feedback-statistic .clickable[data-v-8d272bf4]:hover {\n      border-bottom: 2px solid #ff5555;\n      -webkit-filter: brightness(80%);\n      filter: brightness(80%);\n}\n.care-tips .feedback-statistic .feedback-icon[data-v-8d272bf4] {\n    width: 25px;\n    height: 25px;\n}\n.care-tips .feedback-statistic .feedback-num[data-v-8d272bf4] {\n    position: relative;\n    padding: 0px 10px 0px 5px;\n}\n.care-tips .feedback-statistic .feedback-num .tip[data-v-8d272bf4] {\n      padding: 5px;\n      box-shadow: 5px 5px 5px rgba(50, 50, 50, 0.8);\n      border-radius: 3px;\n      position: absolute;\n      top: 40px;\n      left: -50%;\n      width: 150px;\n      text-align: center;\n      visibility: hidden;\n      z-index: 1;\n      background-color: #ffffff;\n}\n.care-tips .feedback-statistic .feedback-num:hover .tip[data-v-8d272bf4] {\n      visibility: visible;\n}\n.care-tips .inform-message[data-v-8d272bf4] {\n  width: 100%;\n  background-color: #aaaaaa;\n  color: #ffffff;\n  text-align: center;\n  padding: 10px;\n  position: fixed;\n  left: 0px;\n  height: 40px;\n  top: -40px;\n  z-index: 99;\n  -webkit-transition: top 0.5s ease;\n  transition: top 0.5s ease;\n}\n.care-tips .inform-message.show[data-v-8d272bf4] {\n    top: 0px;\n}\n.care-tips .message-list .message[data-v-8d272bf4] {\n  margin: 10px;\n  border-bottom: 1px solid #dddddd;\n  padding: 0px;\n}\n.care-tips .message-list .message .message-content[data-v-8d272bf4] {\n    padding-left: 10px;\n    white-space: pre-wrap;\n}\n.care-tips .message-list .sub-info[data-v-8d272bf4] {\n  display: flex;\n  justify-content: flex-end;\n  flex-wrap: wrap;\n  align-items: center;\n  font-size: 0.8em;\n  color: #888888;\n}\n.care-tips .message-list .sub-info .info-item[data-v-8d272bf4] {\n    margin: 10px 5px;\n}\n.care-tips .message-box[data-v-8d272bf4] {\n  border: 1px solid #cccccc;\n  border-radius: 5px;\n  padding: 10px;\n}\n.care-tips .message-box textarea[data-v-8d272bf4] {\n    border: none;\n    outline: none;\n    width: 100%;\n    height: 60px;\n    resize: none;\n    font-size: 1.1em;\n}\n.care-tips .message-box .bt-container[data-v-8d272bf4] {\n    display: flex;\n    justify-content: flex-end;\n    flex-wrap: wrap;\n    align-items: center;\n}\n.care-tips .message-box .bt-container .bt[data-v-8d272bf4] {\n      display: inline-block;\n      float: right;\n      color: #ffffff;\n      padding: 5px 10px;\n      margin: 0px;\n      background-color: #555555;\n      cursor: pointer;\n      border-radius: 3px;\n}\n.care-tips .message-box .bt-container .bt[data-v-8d272bf4]:hover {\n        background-color: #888888;\n}\n.care-tips .panel-title[data-v-8d272bf4] {\n  font-size: 1.5em;\n  text-align: center;\n  margin: 20px;\n}\n.care-tips .no-result-box[data-v-8d272bf4] {\n  width: 1200px;\n  max-width: 100%;\n  background-color: #ffffff;\n  color: #333333;\n  padding: 20px;\n  border-radius: 5px;\n  margin: 10px auto;\n  text-align: center;\n  font-size: 1.2em;\n}\n.care-tips .no-result-box .center-bt[data-v-8d272bf4] {\n    background-color: #ffffff;\n    color: #ff5555;\n    border: 1px solid #ff5555;\n    width: 200px;\n    padding: 10px;\n    margin: 40px auto;\n    border-radius: 5px;\n    cursor: pointer;\n}\n.care-tips .no-result-box .center-bt[data-v-8d272bf4]:hover {\n      color: #ff8888;\n      border: 1px solid #ff8888;\n}\n.care-tips .input-panel[data-v-8d272bf4] {\n  position: fixed;\n  top: 70px;\n  left: 0px;\n  width: 100%;\n  height: calc(100% - 130px);\n  padding: 10px;\n  background-color: rgba(50, 50, 50, 0.5);\n  color: white;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.care-tips .input-panel.full[data-v-8d272bf4] {\n    top: 0px;\n    height: calc(100% - 60px);\n}\n.care-tips .close-bt[data-v-8d272bf4] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  font-size: 1.2em;\n  cursor: pointer;\n  padding: 5px 10px;\n  color: #ff5555;\n  border: 1px solid #ff5555;\n  border-radius: 5px;\n}\n.care-tips .close-bt[data-v-8d272bf4]:hover {\n    color: #ff8888;\n    border: 1px solid #ff8888;\n}\n.care-tips .input-area[data-v-8d272bf4] {\n  max-height: 100%;\n  overflow-y: auto;\n  position: relative;\n  background-color: #f8f8f8;\n  color: #323232;\n  border-radius: 5px;\n  width: 1024px;\n  max-width: 100%;\n  margin: auto;\n  padding: 10px;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  -ms-transform: translateY(-50%);\n  transform: translateY(-50%);\n}\n.care-tips .input-area .input-item[data-v-8d272bf4] {\n    margin: 5px;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    flex-wrap: wrap;\n}\n.care-tips .input-area .input-item .item[data-v-8d272bf4] {\n      margin: 5px;\n}\n.care-tips .input-area .input-label[data-v-8d272bf4] {\n    font-size: 1.2em;\n    display: inline-block;\n    margin: 5px;\n}\n.care-tips .input-area select[data-v-8d272bf4] {\n    border-radius: 3px;\n    max-width: 100%;\n    padding: 5px;\n    font-size: 1.1em;\n}\n.care-tips .input-area textarea[data-v-8d272bf4] {\n    margin: 10px 0px;\n    border-radius: 3px;\n    padding: 10px;\n    width: 100%;\n    height: 120px;\n    resize: none;\n    font-size: 1.1em;\n}\n.care-tips .input-area input[type=\"number\"][data-v-8d272bf4] {\n    max-width: 100%;\n    padding: 5px;\n    border-radius: 3px;\n    max-width: 80px;\n    font-size: 1.1em;\n}\n.care-tips .input-area input[type=\"text\"][data-v-8d272bf4] {\n    max-width: 100%;\n    padding: 5px;\n    border-radius: 3px;\n    font-size: 1.1em;\n}\n.care-tips .input-area .filter-icon[data-v-8d272bf4] {\n    width: 30px;\n    height: 30px;\n    margin: 5px;\n    padding: 2px;\n    cursor: pointer;\n}\n.care-tips .input-area .filter-icon[data-v-8d272bf4]:hover {\n      padding: 0px;\n}\n.care-tips .input-area .filter-list[data-v-8d272bf4] {\n    padding: 10px;\n}\n.care-tips .input-area .filter-list .filter-category[data-v-8d272bf4] {\n      padding: 10px;\n      color: #888888;\n}\n.care-tips .input-area .filter-list .filter-category .cat-label[data-v-8d272bf4] {\n        font-size: 1.5em;\n        font-weight: bold;\n}\n.care-tips .input-area .filter-list .filter-problem[data-v-8d272bf4] {\n      color: #333333;\n      display: flex;\n      justify-content: flex-start;\n      align-items: center;\n      flex-wrap: wrap;\n      padding: 5px;\n}\n.care-tips .input-area .filter-list .filter-problem .problem-label[data-v-8d272bf4] {\n        font-size: 1.2em;\n        font-weight: bold;\n}\n.care-tips .input-area .filter-list .filter-item[data-v-8d272bf4] {\n      margin: 5px;\n      padding: 5px;\n      cursor: pointer;\n}\n.care-tips .input-area .filter-list .filter-item[data-v-8d272bf4]:hover {\n        border-bottom: 1px solid #BE9063;\n}\n.care-tips .slide-panel[data-v-8d272bf4] {\n  position: fixed;\n  top: 0px;\n  left: 100%;\n  width: 100%;\n  max-width: 100%;\n  height: calc(100% - 60px);\n  padding: 10px;\n  z-index: 10;\n  color: white;\n  background-color: rgba(50, 50, 50, 0.5);\n  overflow-x: hidden;\n  overflow-y: auto;\n  -webkit-transition: left 0.5s ease;\n  transition: left 0.5s ease;\n}\n.care-tips .slide-panel.open[data-v-8d272bf4] {\n    left: 0px;\n}\n.care-tips .side-panel[data-v-8d272bf4] {\n  position: fixed;\n  top: 0px;\n  left: -400px;\n  width: 300px;\n  max-width: 100%;\n  height: 100%;\n  padding: 10px;\n  z-index: 11;\n  color: #333333;\n  background-color: rgba(240, 240, 240, 0.9);\n  border-radius: 0px 5px 5px 0px;\n  box-shadow: 3px 3px 5px #888888;\n  overflow-x: hidden;\n  overflow-y: auto;\n  -webkit-transition: left 0.5s ease;\n  transition: left 0.5s ease;\n}\n.care-tips .side-panel.open[data-v-8d272bf4] {\n    left: 0px;\n}\n.care-tips .side-panel .search-container[data-v-8d272bf4] {\n    width: 400px;\n    max-width: 100%;\n    margin: auto;\n}\n.care-tips .side-panel .search-container .search-item[data-v-8d272bf4] {\n      margin: 5px;\n      font-size: 1.1em;\n}\n.care-tips .side-panel .search-container .search-item input[data-v-8d272bf4] {\n        padding: 5px;\n        width: 100%;\n}\n.care-tips .side-panel .search-container .search-item select[data-v-8d272bf4] {\n        padding: 5px;\n        width: 100%;\n}\n.care-tips .side-panel .search-container .search-item .search-label[data-v-8d272bf4] {\n        padding: 5px;\n}\n.care-tips .tab-bar[data-v-8d272bf4] {\n  position: fixed;\n  left: 0px;\n  bottom: 0px;\n  width: 100%;\n  height: 60px;\n  z-index: 9;\n  background-color: rgba(240, 240, 240, 0.9);\n  box-shadow: 0px 0px 5px #888888;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.care-tips .tab-bar .tab-bt-container[data-v-8d272bf4] {\n    display: flex;\n    overflow-x: auto;\n    padding: 10px;\n}\n.care-tips .tab-bt[data-v-8d272bf4] {\n  text-align: center;\n  min-width: 110px;\n  cursor: pointer;\n  padding: 5px 10px;\n  background-color: #ffffff;\n  color: #555555;\n  border: 1px solid #555555;\n  border-radius: 5px;\n  margin: 0px 10px;\n}\n.care-tips .tab-bt[data-v-8d272bf4]:hover {\n    color: #888888;\n    border: 1px solid #888888;\n}\n.care-tips .tab-bt.on[data-v-8d272bf4] {\n    color: #ff5555;\n    border: 1px solid #ff5555;\n}\n.solution-list[data-v-8d272bf4] {\n  width: 1200px;\n  max-width: 100%;\n  margin: auto;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  align-items: center;\n  color: #333333;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/solution-view.vue?vue&type=style&index=0&id=9f02cee6&lang=scss&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/solution-view.vue?vue&type=style&index=0&id=9f02cee6&lang=scss&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n@charset \"UTF-8\";\nhtml[data-v-9f02cee6], body[data-v-9f02cee6] {\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  overflow: visible;\n}\n*[data-v-9f02cee6] {\n  box-sizing: border-box;\n  font-family: \"\\5FAE\\8EDF\\6B63\\9ED1\\9AD4\", \"Microsoft JhengHei\";\n}\n.center[data-v-9f02cee6] {\n  display: block;\n  margin: auto;\n  clear: both;\n  text-align: center;\n}\n.hide[data-v-9f02cee6] {\n  display: none;\n}\n.warning[data-v-9f02cee6] {\n  color: red;\n}\n.bold[data-v-9f02cee6] {\n  font-weight: bold;\n}\n.inline-block[data-v-9f02cee6] {\n  display: inline-block;\n}\na[data-v-9f02cee6] {\n  text-decoration: none;\n  color: #ff3333;\n}\na[data-v-9f02cee6]:hover {\n    color: #ff8800;\n}\n.one-third-w[data-v-9f02cee6] {\n  display: inline-block;\n  vertical-align: middle;\n  margin: 10px 0px;\n  width: 100%;\n}\n@media only screen and (min-width: 640px) {\n.one-third-w[data-v-9f02cee6] {\n      width: calc(50% - 20px);\n      margin: 10px;\n}\n}\n@media only screen and (min-width: 1024px) {\n.one-third-w[data-v-9f02cee6] {\n      width: calc(33% - 20px);\n      margin: 10px;\n}\n}\n.half-w[data-v-9f02cee6] {\n  display: inline-block;\n  vertical-align: middle;\n  margin: 10px 0px;\n  width: 100%;\n}\n@media only screen and (min-width: 640px) {\n.half-w[data-v-9f02cee6] {\n      width: calc(50% - 20px);\n      margin: 10px;\n}\n}\n.full-w[data-v-9f02cee6] {\n  display: block;\n  margin: 10px 0px;\n  width: 100%;\n}\n.problem-cat[data-v-9f02cee6] {\n  background-color: #f8f8f8;\n  padding: 0px 0px 10px 0px;\n  margin: 10px auto;\n  border-radius: 5px;\n}\n.problem-cat .problem-header[data-v-9f02cee6] {\n    margin: 0px auto;\n    font-size: 1.2em;\n    text-align: left;\n    padding: 10px;\n    background-color: #dddddd;\n    border-radius: 5px 5px 0px 0px;\n}\n.problem-cat .problem-container[data-v-9f02cee6] {\n    padding: 0px;\n}\n.problem-cat .problem-item[data-v-9f02cee6] {\n    border-radius: 5px;\n}\n.problem-cat .problem-item.select[data-v-9f02cee6] {\n      border: 1px solid red;\n}\n.problem-cat .problem-item .problem-title[data-v-9f02cee6] {\n      padding: 10px;\n      border-bottom: 1px solid #eeeeee;\n}\n.problem-cat .problem-item .problem-desc[data-v-9f02cee6] {\n      white-space: pre-wrap;\n      padding: 10px;\n}\n.problem-cat .problem-item .problem-body[data-v-9f02cee6] {\n      color: black;\n}\n.problem-cat .problem-item .item-bt-container[data-v-9f02cee6] {\n      padding: 10px;\n      display: flex;\n      justify-content: flex-end;\n      align-items: center;\n      flex-wrap: wrap;\n}\n.problem-cat .problem-item .item-bt[data-v-9f02cee6] {\n      display: inline-block;\n      margin: 0px 0px 0px 10px;\n      padding: 5px 10px;\n      cursor: pointer;\n      background-color: #eeeeee;\n      color: #333333;\n      border-radius: 3px;\n}\n.problem-cat .problem-item .item-bt[data-v-9f02cee6]:hover {\n        background-color: #ffffff;\n}\n.problem-cat .problem-item .target-info[data-v-9f02cee6] {\n      padding: 5px 10px;\n      color: #555555;\n}\n.cat-D1[data-v-9f02cee6] {\n  background-color: #FFA5A4;\n}\n.cat-D2[data-v-9f02cee6] {\n  background-color: #DEE885;\n}\n.cat-D3[data-v-9f02cee6] {\n  background-color: #85CAE8;\n}\n.cat-D4[data-v-9f02cee6] {\n  background-color: #C089E8;\n}\n.cat-A[data-v-9f02cee6] {\n  background-color: #FFA5A4;\n}\n.cat-B[data-v-9f02cee6] {\n  background-color: #FFDE9C;\n}\n.cat-C[data-v-9f02cee6] {\n  background-color: #DEE885;\n}\n.cat-D[data-v-9f02cee6] {\n  background-color: #9FFFBC;\n}\n.cat-E[data-v-9f02cee6] {\n  background-color: #85CAE8;\n}\n.cat-F[data-v-9f02cee6] {\n  background-color: #AF93FF;\n}\n.cat-G[data-v-9f02cee6] {\n  background-color: #C089E8;\n}\n.cat-O[data-v-9f02cee6] {\n  background-color: #FF8AE7;\n}\n.list-item[data-v-9f02cee6] {\n  background-color: #eeeeee;\n  border-radius: 5px;\n  max-width: 100%;\n  margin: 10px 0px;\n  padding-bottom: 10px;\n  cursor: pointer;\n}\n@media only screen and (min-width: 640px) {\n.list-item[data-v-9f02cee6] {\n      margin: 10px;\n}\n}\n.list-item a[data-v-9f02cee6] {\n    text-decoration: none;\n    color: #323232;\n}\n.list-item .domain-statistic[data-v-9f02cee6] {\n    display: flex;\n    justify-content: flex-start;\n    flex-wrap: wrap;\n    align-items: center;\n}\n.list-item .domain-statistic .domain-info[data-v-9f02cee6] {\n      position: relative;\n      display: flex;\n      justify-content: flex-start;\n      flex-wrap: wrap;\n      align-items: center;\n}\n.list-item .domain-statistic .domain-info .domain-icon[data-v-9f02cee6] {\n        display: inline-block;\n        padding: 7px;\n        margin: 10px 5px 10px 10px;\n        border-radius: 3px;\n}\n.list-item .domain-statistic .domain-info .domain-num[data-v-9f02cee6] {\n        display: inline-block;\n        font-size: 0.8em;\n        vertical-align: middle;\n}\n.list-item .domain-statistic .domain-info .tip[data-v-9f02cee6] {\n        padding: 5px;\n        box-shadow: 5px 5px 5px rgba(50, 50, 50, 0.8);\n        border-radius: 3px;\n        position: absolute;\n        top: 40px;\n        left: 10px;\n        width: 120px;\n        text-align: center;\n        z-index: 1;\n        opacity: 0;\n        -webkit-transition: opacity 0.5s ease;\n        transition: opacity 0.5s ease;\n}\n.list-item .domain-statistic .domain-info:hover .tip[data-v-9f02cee6] {\n        opacity: 1;\n}\n.list-item .desc[data-v-9f02cee6] {\n    white-space: pre-wrap;\n    color: #333333;\n    padding: 0px 20px 0px 10px;\n    width: 100%;\n    height: 4.5em;\n    line-height: 1.5em;\n    overflow: hidden;\n}\n.load-more[data-v-9f02cee6] {\n  width: 500px;\n  max-width: 100%;\n  padding: 10px 20px;\n  border-radius: 5px;\n  margin: 20px auto;\n  border: 1px solid #888888;\n  color: #888888;\n  background-color: #ffffff;\n  cursor: pointer;\n  text-align: center;\n}\n.load-more[data-v-9f02cee6]:hover {\n    border: 1px solid #333333;\n    color: #333333;\n}\n.fade-enter-active[data-v-9f02cee6], .fade-leave-active[data-v-9f02cee6] {\n  transition: opacity 0.5s;\n}\n.fade-enter[data-v-9f02cee6], .fade-leave-to[data-v-9f02cee6] {\n  opacity: 0;\n}\n.create-enter-active[data-v-9f02cee6] {\n  transition: opacity 0.5s;\n}\n.create-enter[data-v-9f02cee6] {\n  opacity: 0;\n}\n.main-container[data-v-9f02cee6] {\n  width: 100%;\n  margin: 80px auto 20px auto;\n  padding: 0px 0px 50px 0px;\n  color: #333333;\n}\n.care-tips .sub-title[data-v-9f02cee6] {\n  padding: 10px;\n  font-size: 1.5em;\n}\n.care-tips .mid-title[data-v-9f02cee6] {\n  padding: 5px;\n  margin: 10px auto 0px auto;\n  font-size: 1.5em;\n  text-align: center;\n}\n.care-tips .mid-title .bottom-line[data-v-9f02cee6] {\n    margin: auto;\n    width: 150px;\n    padding: 5px;\n    border-bottom: 1px solid #888888;\n}\n.care-tips .category-title[data-v-9f02cee6] {\n  padding: 5px;\n  margin: 10px auto 0px auto;\n  font-size: 2em;\n  text-align: center;\n}\n.care-tips .category-title .bottom-line[data-v-9f02cee6] {\n    margin: auto;\n    width: 150px;\n    padding: 5px;\n    border-bottom: 1px solid #888888;\n}\n.care-tips .category-separator[data-v-9f02cee6] {\n  width: 800px;\n  max-width: 100%;\n  padding: 20px;\n  margin: auto;\n  border-bottom: 1px solid #dddddd;\n}\n.care-tips .separator[data-v-9f02cee6] {\n  margin: 30px;\n  border-bottom: 1px solid #999999;\n}\n.care-tips .shadow-light[data-v-9f02cee6] {\n  box-shadow: 5px 5px 5px #888888;\n}\n.care-tips .shadow-light[data-v-9f02cee6]:hover {\n    box-shadow: 10px 10px 10px #888888;\n    -webkit-transition: box-shadow 0.5s ease;\n    transition: box-shadow 0.5s ease;\n}\n.care-tips .shadow-dark[data-v-9f02cee6] {\n  box-shadow: 5px 5px 5px #333333;\n}\n.care-tips .shadow-dark[data-v-9f02cee6]:hover {\n    box-shadow: 10px 10px 10px #333333;\n    -webkit-transition: box-shadow 0.5s ease;\n    transition: box-shadow 0.5s ease;\n}\n.care-tips .owner a[data-v-9f02cee6] {\n  text-decoration: none;\n  color: #323232;\n}\n.care-tips .owner a[data-v-9f02cee6]:hover {\n    color: #888888;\n}\n.care-tips .owner-info[data-v-9f02cee6] {\n  display: flex;\n  justify-content: flex-start;\n  flex-wrap: wrap;\n  align-items: center;\n  border-bottom: 1px solid #eeeeee;\n  border-radius: 5px 5px 0px 0px;\n  padding: 10px;\n}\n.care-tips .owner-info .owner-icon[data-v-9f02cee6] {\n    width: 30px;\n    height: 30px;\n    border-radius: 50%;\n    margin: 0px 5px 0px 0px;\n}\n.care-tips .owner-desc[data-v-9f02cee6] {\n  white-space: pre-wrap;\n  padding: 10px;\n}\n.care-tips .bt-bar[data-v-9f02cee6] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  flex-wrap: wrap;\n  width: 1024px;\n  max-width: 100%;\n  padding: 0px 15px;\n  margin: auto;\n}\n.care-tips .input-bt[data-v-9f02cee6] {\n  display: inline-block;\n  color: #ffffff;\n  padding: 7px 10px;\n  margin: 5px;\n  background-color: #555555;\n  cursor: pointer;\n  border-radius: 3px;\n}\n.care-tips .input-bt[data-v-9f02cee6]:hover {\n    background-color: #888888;\n}\n.care-tips .action-bt[data-v-9f02cee6] {\n  color: #ff5555;\n  border: 1px solid #ff5555;\n  border-radius: 5px;\n  padding: 5px 10px;\n  margin: 5px;\n  cursor: pointer;\n}\n.care-tips .action-bt[data-v-9f02cee6]:hover {\n    color: #ff8888;\n    border: 1px solid #ff8888;\n}\n.care-tips .feedback-statistic[data-v-9f02cee6] {\n  display: flex;\n  justify-content: flex-end;\n  flex-wrap: wrap;\n  align-items: center;\n  padding: 5px;\n  color: #888888;\n  font-size: 0.9em;\n}\n.care-tips .feedback-statistic .container[data-v-9f02cee6] {\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    align-items: center;\n    padding: 5px;\n}\n.care-tips .feedback-statistic .clickable[data-v-9f02cee6] {\n    cursor: pointer;\n}\n.care-tips .feedback-statistic .clickable[data-v-9f02cee6]:hover {\n      border-bottom: 2px solid #ff5555;\n      -webkit-filter: brightness(80%);\n      filter: brightness(80%);\n}\n.care-tips .feedback-statistic .feedback-icon[data-v-9f02cee6] {\n    width: 25px;\n    height: 25px;\n}\n.care-tips .feedback-statistic .feedback-num[data-v-9f02cee6] {\n    position: relative;\n    padding: 0px 10px 0px 5px;\n}\n.care-tips .feedback-statistic .feedback-num .tip[data-v-9f02cee6] {\n      padding: 5px;\n      box-shadow: 5px 5px 5px rgba(50, 50, 50, 0.8);\n      border-radius: 3px;\n      position: absolute;\n      top: 40px;\n      left: -50%;\n      width: 150px;\n      text-align: center;\n      visibility: hidden;\n      z-index: 1;\n      background-color: #ffffff;\n}\n.care-tips .feedback-statistic .feedback-num:hover .tip[data-v-9f02cee6] {\n      visibility: visible;\n}\n.care-tips .inform-message[data-v-9f02cee6] {\n  width: 100%;\n  background-color: #aaaaaa;\n  color: #ffffff;\n  text-align: center;\n  padding: 10px;\n  position: fixed;\n  left: 0px;\n  height: 40px;\n  top: -40px;\n  z-index: 99;\n  -webkit-transition: top 0.5s ease;\n  transition: top 0.5s ease;\n}\n.care-tips .inform-message.show[data-v-9f02cee6] {\n    top: 0px;\n}\n.care-tips .message-list .message[data-v-9f02cee6] {\n  margin: 10px;\n  border-bottom: 1px solid #dddddd;\n  padding: 0px;\n}\n.care-tips .message-list .message .message-content[data-v-9f02cee6] {\n    padding-left: 10px;\n    white-space: pre-wrap;\n}\n.care-tips .message-list .sub-info[data-v-9f02cee6] {\n  display: flex;\n  justify-content: flex-end;\n  flex-wrap: wrap;\n  align-items: center;\n  font-size: 0.8em;\n  color: #888888;\n}\n.care-tips .message-list .sub-info .info-item[data-v-9f02cee6] {\n    margin: 10px 5px;\n}\n.care-tips .message-box[data-v-9f02cee6] {\n  border: 1px solid #cccccc;\n  border-radius: 5px;\n  padding: 10px;\n}\n.care-tips .message-box textarea[data-v-9f02cee6] {\n    border: none;\n    outline: none;\n    width: 100%;\n    height: 60px;\n    resize: none;\n    font-size: 1.1em;\n}\n.care-tips .message-box .bt-container[data-v-9f02cee6] {\n    display: flex;\n    justify-content: flex-end;\n    flex-wrap: wrap;\n    align-items: center;\n}\n.care-tips .message-box .bt-container .bt[data-v-9f02cee6] {\n      display: inline-block;\n      float: right;\n      color: #ffffff;\n      padding: 5px 10px;\n      margin: 0px;\n      background-color: #555555;\n      cursor: pointer;\n      border-radius: 3px;\n}\n.care-tips .message-box .bt-container .bt[data-v-9f02cee6]:hover {\n        background-color: #888888;\n}\n.care-tips .panel-title[data-v-9f02cee6] {\n  font-size: 1.5em;\n  text-align: center;\n  margin: 20px;\n}\n.care-tips .no-result-box[data-v-9f02cee6] {\n  width: 1200px;\n  max-width: 100%;\n  background-color: #ffffff;\n  color: #333333;\n  padding: 20px;\n  border-radius: 5px;\n  margin: 10px auto;\n  text-align: center;\n  font-size: 1.2em;\n}\n.care-tips .no-result-box .center-bt[data-v-9f02cee6] {\n    background-color: #ffffff;\n    color: #ff5555;\n    border: 1px solid #ff5555;\n    width: 200px;\n    padding: 10px;\n    margin: 40px auto;\n    border-radius: 5px;\n    cursor: pointer;\n}\n.care-tips .no-result-box .center-bt[data-v-9f02cee6]:hover {\n      color: #ff8888;\n      border: 1px solid #ff8888;\n}\n.care-tips .input-panel[data-v-9f02cee6] {\n  position: fixed;\n  top: 70px;\n  left: 0px;\n  width: 100%;\n  height: calc(100% - 130px);\n  padding: 10px;\n  background-color: rgba(50, 50, 50, 0.5);\n  color: white;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.care-tips .input-panel.full[data-v-9f02cee6] {\n    top: 0px;\n    height: calc(100% - 60px);\n}\n.care-tips .close-bt[data-v-9f02cee6] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  font-size: 1.2em;\n  cursor: pointer;\n  padding: 5px 10px;\n  color: #ff5555;\n  border: 1px solid #ff5555;\n  border-radius: 5px;\n}\n.care-tips .close-bt[data-v-9f02cee6]:hover {\n    color: #ff8888;\n    border: 1px solid #ff8888;\n}\n.care-tips .input-area[data-v-9f02cee6] {\n  max-height: 100%;\n  overflow-y: auto;\n  position: relative;\n  background-color: #f8f8f8;\n  color: #323232;\n  border-radius: 5px;\n  width: 1024px;\n  max-width: 100%;\n  margin: auto;\n  padding: 10px;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  -ms-transform: translateY(-50%);\n  transform: translateY(-50%);\n}\n.care-tips .input-area .input-item[data-v-9f02cee6] {\n    margin: 5px;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    flex-wrap: wrap;\n}\n.care-tips .input-area .input-item .item[data-v-9f02cee6] {\n      margin: 5px;\n}\n.care-tips .input-area .input-label[data-v-9f02cee6] {\n    font-size: 1.2em;\n    display: inline-block;\n    margin: 5px;\n}\n.care-tips .input-area select[data-v-9f02cee6] {\n    border-radius: 3px;\n    max-width: 100%;\n    padding: 5px;\n    font-size: 1.1em;\n}\n.care-tips .input-area textarea[data-v-9f02cee6] {\n    margin: 10px 0px;\n    border-radius: 3px;\n    padding: 10px;\n    width: 100%;\n    height: 120px;\n    resize: none;\n    font-size: 1.1em;\n}\n.care-tips .input-area input[type=\"number\"][data-v-9f02cee6] {\n    max-width: 100%;\n    padding: 5px;\n    border-radius: 3px;\n    max-width: 80px;\n    font-size: 1.1em;\n}\n.care-tips .input-area input[type=\"text\"][data-v-9f02cee6] {\n    max-width: 100%;\n    padding: 5px;\n    border-radius: 3px;\n    font-size: 1.1em;\n}\n.care-tips .input-area .filter-icon[data-v-9f02cee6] {\n    width: 30px;\n    height: 30px;\n    margin: 5px;\n    padding: 2px;\n    cursor: pointer;\n}\n.care-tips .input-area .filter-icon[data-v-9f02cee6]:hover {\n      padding: 0px;\n}\n.care-tips .input-area .filter-list[data-v-9f02cee6] {\n    padding: 10px;\n}\n.care-tips .input-area .filter-list .filter-category[data-v-9f02cee6] {\n      padding: 10px;\n      color: #888888;\n}\n.care-tips .input-area .filter-list .filter-category .cat-label[data-v-9f02cee6] {\n        font-size: 1.5em;\n        font-weight: bold;\n}\n.care-tips .input-area .filter-list .filter-problem[data-v-9f02cee6] {\n      color: #333333;\n      display: flex;\n      justify-content: flex-start;\n      align-items: center;\n      flex-wrap: wrap;\n      padding: 5px;\n}\n.care-tips .input-area .filter-list .filter-problem .problem-label[data-v-9f02cee6] {\n        font-size: 1.2em;\n        font-weight: bold;\n}\n.care-tips .input-area .filter-list .filter-item[data-v-9f02cee6] {\n      margin: 5px;\n      padding: 5px;\n      cursor: pointer;\n}\n.care-tips .input-area .filter-list .filter-item[data-v-9f02cee6]:hover {\n        border-bottom: 1px solid #BE9063;\n}\n.care-tips .slide-panel[data-v-9f02cee6] {\n  position: fixed;\n  top: 0px;\n  left: 100%;\n  width: 100%;\n  max-width: 100%;\n  height: calc(100% - 60px);\n  padding: 10px;\n  z-index: 10;\n  color: white;\n  background-color: rgba(50, 50, 50, 0.5);\n  overflow-x: hidden;\n  overflow-y: auto;\n  -webkit-transition: left 0.5s ease;\n  transition: left 0.5s ease;\n}\n.care-tips .slide-panel.open[data-v-9f02cee6] {\n    left: 0px;\n}\n.care-tips .side-panel[data-v-9f02cee6] {\n  position: fixed;\n  top: 0px;\n  left: -400px;\n  width: 300px;\n  max-width: 100%;\n  height: 100%;\n  padding: 10px;\n  z-index: 11;\n  color: #333333;\n  background-color: rgba(240, 240, 240, 0.9);\n  border-radius: 0px 5px 5px 0px;\n  box-shadow: 3px 3px 5px #888888;\n  overflow-x: hidden;\n  overflow-y: auto;\n  -webkit-transition: left 0.5s ease;\n  transition: left 0.5s ease;\n}\n.care-tips .side-panel.open[data-v-9f02cee6] {\n    left: 0px;\n}\n.care-tips .side-panel .search-container[data-v-9f02cee6] {\n    width: 400px;\n    max-width: 100%;\n    margin: auto;\n}\n.care-tips .side-panel .search-container .search-item[data-v-9f02cee6] {\n      margin: 5px;\n      font-size: 1.1em;\n}\n.care-tips .side-panel .search-container .search-item input[data-v-9f02cee6] {\n        padding: 5px;\n        width: 100%;\n}\n.care-tips .side-panel .search-container .search-item select[data-v-9f02cee6] {\n        padding: 5px;\n        width: 100%;\n}\n.care-tips .side-panel .search-container .search-item .search-label[data-v-9f02cee6] {\n        padding: 5px;\n}\n.care-tips .tab-bar[data-v-9f02cee6] {\n  position: fixed;\n  left: 0px;\n  bottom: 0px;\n  width: 100%;\n  height: 60px;\n  z-index: 9;\n  background-color: rgba(240, 240, 240, 0.9);\n  box-shadow: 0px 0px 5px #888888;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.care-tips .tab-bar .tab-bt-container[data-v-9f02cee6] {\n    display: flex;\n    overflow-x: auto;\n    padding: 10px;\n}\n.care-tips .tab-bt[data-v-9f02cee6] {\n  text-align: center;\n  min-width: 110px;\n  cursor: pointer;\n  padding: 5px 10px;\n  background-color: #ffffff;\n  color: #555555;\n  border: 1px solid #555555;\n  border-radius: 5px;\n  margin: 0px 10px;\n}\n.care-tips .tab-bt[data-v-9f02cee6]:hover {\n    color: #888888;\n    border: 1px solid #888888;\n}\n.care-tips .tab-bt.on[data-v-9f02cee6] {\n    color: #ff5555;\n    border: 1px solid #ff5555;\n}\n.solution-view[data-v-9f02cee6] {\n  width: 1024px;\n  max-width: 100%;\n  margin: auto;\n  padding: 10px;\n  border-radius: 5px;\n  background-color: white;\n  color: #323232;\n}\n.solution-view .solution-title[data-v-9f02cee6] {\n    font-size: 1.5em;\n    padding: 10px 0px;\n    margin: 10px 0px;\n}\n.solution-view .step-bt-container[data-v-9f02cee6] {\n    padding: 10px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-wrap: wrap;\n}\n.solution-view .quest[data-v-9f02cee6] {\n    padding: 10px 0px;\n    font-size: 1.2em;\n    font-weight: bold;\n}\n", ""]);

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
exports.push([module.i, "\n@charset \"UTF-8\";\nhtml[data-v-45447dba], body[data-v-45447dba] {\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  overflow: visible;\n}\n*[data-v-45447dba] {\n  box-sizing: border-box;\n  font-family: \"\\5FAE\\8EDF\\6B63\\9ED1\\9AD4\", \"Microsoft JhengHei\";\n}\n.center[data-v-45447dba] {\n  display: block;\n  margin: auto;\n  clear: both;\n  text-align: center;\n}\n.hide[data-v-45447dba] {\n  display: none;\n}\n.warning[data-v-45447dba] {\n  color: red;\n}\n.bold[data-v-45447dba] {\n  font-weight: bold;\n}\n.inline-block[data-v-45447dba] {\n  display: inline-block;\n}\na[data-v-45447dba] {\n  text-decoration: none;\n  color: #ff3333;\n}\na[data-v-45447dba]:hover {\n    color: #ff8800;\n}\n.one-third-w[data-v-45447dba] {\n  display: inline-block;\n  vertical-align: middle;\n  margin: 10px 0px;\n  width: 100%;\n}\n@media only screen and (min-width: 640px) {\n.one-third-w[data-v-45447dba] {\n      width: calc(50% - 20px);\n      margin: 10px;\n}\n}\n@media only screen and (min-width: 1024px) {\n.one-third-w[data-v-45447dba] {\n      width: calc(33% - 20px);\n      margin: 10px;\n}\n}\n.half-w[data-v-45447dba] {\n  display: inline-block;\n  vertical-align: middle;\n  margin: 10px 0px;\n  width: 100%;\n}\n@media only screen and (min-width: 640px) {\n.half-w[data-v-45447dba] {\n      width: calc(50% - 20px);\n      margin: 10px;\n}\n}\n.full-w[data-v-45447dba] {\n  display: block;\n  margin: 10px 0px;\n  width: 100%;\n}\n.problem-cat[data-v-45447dba] {\n  background-color: #f8f8f8;\n  padding: 0px 0px 10px 0px;\n  margin: 10px auto;\n  border-radius: 5px;\n}\n.problem-cat .problem-header[data-v-45447dba] {\n    margin: 0px auto;\n    font-size: 1.2em;\n    text-align: left;\n    padding: 10px;\n    background-color: #dddddd;\n    border-radius: 5px 5px 0px 0px;\n}\n.problem-cat .problem-container[data-v-45447dba] {\n    padding: 0px;\n}\n.problem-cat .problem-item[data-v-45447dba] {\n    border-radius: 5px;\n}\n.problem-cat .problem-item.select[data-v-45447dba] {\n      border: 1px solid red;\n}\n.problem-cat .problem-item .problem-title[data-v-45447dba] {\n      padding: 10px;\n      border-bottom: 1px solid #eeeeee;\n}\n.problem-cat .problem-item .problem-desc[data-v-45447dba] {\n      white-space: pre-wrap;\n      padding: 10px;\n}\n.problem-cat .problem-item .problem-body[data-v-45447dba] {\n      color: black;\n}\n.problem-cat .problem-item .item-bt-container[data-v-45447dba] {\n      padding: 10px;\n      display: flex;\n      justify-content: flex-end;\n      align-items: center;\n      flex-wrap: wrap;\n}\n.problem-cat .problem-item .item-bt[data-v-45447dba] {\n      display: inline-block;\n      margin: 0px 0px 0px 10px;\n      padding: 5px 10px;\n      cursor: pointer;\n      background-color: #eeeeee;\n      color: #333333;\n      border-radius: 3px;\n}\n.problem-cat .problem-item .item-bt[data-v-45447dba]:hover {\n        background-color: #ffffff;\n}\n.problem-cat .problem-item .target-info[data-v-45447dba] {\n      padding: 5px 10px;\n      color: #555555;\n}\n.cat-D1[data-v-45447dba] {\n  background-color: #FFA5A4;\n}\n.cat-D2[data-v-45447dba] {\n  background-color: #DEE885;\n}\n.cat-D3[data-v-45447dba] {\n  background-color: #85CAE8;\n}\n.cat-D4[data-v-45447dba] {\n  background-color: #C089E8;\n}\n.cat-A[data-v-45447dba] {\n  background-color: #FFA5A4;\n}\n.cat-B[data-v-45447dba] {\n  background-color: #FFDE9C;\n}\n.cat-C[data-v-45447dba] {\n  background-color: #DEE885;\n}\n.cat-D[data-v-45447dba] {\n  background-color: #9FFFBC;\n}\n.cat-E[data-v-45447dba] {\n  background-color: #85CAE8;\n}\n.cat-F[data-v-45447dba] {\n  background-color: #AF93FF;\n}\n.cat-G[data-v-45447dba] {\n  background-color: #C089E8;\n}\n.cat-O[data-v-45447dba] {\n  background-color: #FF8AE7;\n}\n.list-item[data-v-45447dba] {\n  background-color: #eeeeee;\n  border-radius: 5px;\n  max-width: 100%;\n  margin: 10px 0px;\n  padding-bottom: 10px;\n  cursor: pointer;\n}\n@media only screen and (min-width: 640px) {\n.list-item[data-v-45447dba] {\n      margin: 10px;\n}\n}\n.list-item a[data-v-45447dba] {\n    text-decoration: none;\n    color: #323232;\n}\n.list-item .domain-statistic[data-v-45447dba] {\n    display: flex;\n    justify-content: flex-start;\n    flex-wrap: wrap;\n    align-items: center;\n}\n.list-item .domain-statistic .domain-info[data-v-45447dba] {\n      position: relative;\n      display: flex;\n      justify-content: flex-start;\n      flex-wrap: wrap;\n      align-items: center;\n}\n.list-item .domain-statistic .domain-info .domain-icon[data-v-45447dba] {\n        display: inline-block;\n        padding: 7px;\n        margin: 10px 5px 10px 10px;\n        border-radius: 3px;\n}\n.list-item .domain-statistic .domain-info .domain-num[data-v-45447dba] {\n        display: inline-block;\n        font-size: 0.8em;\n        vertical-align: middle;\n}\n.list-item .domain-statistic .domain-info .tip[data-v-45447dba] {\n        padding: 5px;\n        box-shadow: 5px 5px 5px rgba(50, 50, 50, 0.8);\n        border-radius: 3px;\n        position: absolute;\n        top: 40px;\n        left: 10px;\n        width: 120px;\n        text-align: center;\n        z-index: 1;\n        opacity: 0;\n        -webkit-transition: opacity 0.5s ease;\n        transition: opacity 0.5s ease;\n}\n.list-item .domain-statistic .domain-info:hover .tip[data-v-45447dba] {\n        opacity: 1;\n}\n.list-item .desc[data-v-45447dba] {\n    white-space: pre-wrap;\n    color: #333333;\n    padding: 0px 20px 0px 10px;\n    width: 100%;\n    height: 4.5em;\n    line-height: 1.5em;\n    overflow: hidden;\n}\n.load-more[data-v-45447dba] {\n  width: 500px;\n  max-width: 100%;\n  padding: 10px 20px;\n  border-radius: 5px;\n  margin: 20px auto;\n  border: 1px solid #888888;\n  color: #888888;\n  background-color: #ffffff;\n  cursor: pointer;\n  text-align: center;\n}\n.load-more[data-v-45447dba]:hover {\n    border: 1px solid #333333;\n    color: #333333;\n}\n.fade-enter-active[data-v-45447dba], .fade-leave-active[data-v-45447dba] {\n  transition: opacity 0.5s;\n}\n.fade-enter[data-v-45447dba], .fade-leave-to[data-v-45447dba] {\n  opacity: 0;\n}\n.create-enter-active[data-v-45447dba] {\n  transition: opacity 0.5s;\n}\n.create-enter[data-v-45447dba] {\n  opacity: 0;\n}\n.main-container[data-v-45447dba] {\n  width: 100%;\n  margin: 80px auto 20px auto;\n  padding: 0px 0px 50px 0px;\n  color: #333333;\n}\n.care-tips .sub-title[data-v-45447dba] {\n  padding: 10px;\n  font-size: 1.5em;\n}\n.care-tips .mid-title[data-v-45447dba] {\n  padding: 5px;\n  margin: 10px auto 0px auto;\n  font-size: 1.5em;\n  text-align: center;\n}\n.care-tips .mid-title .bottom-line[data-v-45447dba] {\n    margin: auto;\n    width: 150px;\n    padding: 5px;\n    border-bottom: 1px solid #888888;\n}\n.care-tips .category-title[data-v-45447dba] {\n  padding: 5px;\n  margin: 10px auto 0px auto;\n  font-size: 2em;\n  text-align: center;\n}\n.care-tips .category-title .bottom-line[data-v-45447dba] {\n    margin: auto;\n    width: 150px;\n    padding: 5px;\n    border-bottom: 1px solid #888888;\n}\n.care-tips .category-separator[data-v-45447dba] {\n  width: 800px;\n  max-width: 100%;\n  padding: 20px;\n  margin: auto;\n  border-bottom: 1px solid #dddddd;\n}\n.care-tips .separator[data-v-45447dba] {\n  margin: 30px;\n  border-bottom: 1px solid #999999;\n}\n.care-tips .shadow-light[data-v-45447dba] {\n  box-shadow: 5px 5px 5px #888888;\n}\n.care-tips .shadow-light[data-v-45447dba]:hover {\n    box-shadow: 10px 10px 10px #888888;\n    -webkit-transition: box-shadow 0.5s ease;\n    transition: box-shadow 0.5s ease;\n}\n.care-tips .shadow-dark[data-v-45447dba] {\n  box-shadow: 5px 5px 5px #333333;\n}\n.care-tips .shadow-dark[data-v-45447dba]:hover {\n    box-shadow: 10px 10px 10px #333333;\n    -webkit-transition: box-shadow 0.5s ease;\n    transition: box-shadow 0.5s ease;\n}\n.care-tips .owner a[data-v-45447dba] {\n  text-decoration: none;\n  color: #323232;\n}\n.care-tips .owner a[data-v-45447dba]:hover {\n    color: #888888;\n}\n.care-tips .owner-info[data-v-45447dba] {\n  display: flex;\n  justify-content: flex-start;\n  flex-wrap: wrap;\n  align-items: center;\n  border-bottom: 1px solid #eeeeee;\n  border-radius: 5px 5px 0px 0px;\n  padding: 10px;\n}\n.care-tips .owner-info .owner-icon[data-v-45447dba] {\n    width: 30px;\n    height: 30px;\n    border-radius: 50%;\n    margin: 0px 5px 0px 0px;\n}\n.care-tips .owner-desc[data-v-45447dba] {\n  white-space: pre-wrap;\n  padding: 10px;\n}\n.care-tips .bt-bar[data-v-45447dba] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  flex-wrap: wrap;\n  width: 1024px;\n  max-width: 100%;\n  padding: 0px 15px;\n  margin: auto;\n}\n.care-tips .input-bt[data-v-45447dba] {\n  display: inline-block;\n  color: #ffffff;\n  padding: 7px 10px;\n  margin: 5px;\n  background-color: #555555;\n  cursor: pointer;\n  border-radius: 3px;\n}\n.care-tips .input-bt[data-v-45447dba]:hover {\n    background-color: #888888;\n}\n.care-tips .action-bt[data-v-45447dba] {\n  color: #ff5555;\n  border: 1px solid #ff5555;\n  border-radius: 5px;\n  padding: 5px 10px;\n  margin: 5px;\n  cursor: pointer;\n}\n.care-tips .action-bt[data-v-45447dba]:hover {\n    color: #ff8888;\n    border: 1px solid #ff8888;\n}\n.care-tips .feedback-statistic[data-v-45447dba] {\n  display: flex;\n  justify-content: flex-end;\n  flex-wrap: wrap;\n  align-items: center;\n  padding: 5px;\n  color: #888888;\n  font-size: 0.9em;\n}\n.care-tips .feedback-statistic .container[data-v-45447dba] {\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    align-items: center;\n    padding: 5px;\n}\n.care-tips .feedback-statistic .clickable[data-v-45447dba] {\n    cursor: pointer;\n}\n.care-tips .feedback-statistic .clickable[data-v-45447dba]:hover {\n      border-bottom: 2px solid #ff5555;\n      -webkit-filter: brightness(80%);\n      filter: brightness(80%);\n}\n.care-tips .feedback-statistic .feedback-icon[data-v-45447dba] {\n    width: 25px;\n    height: 25px;\n}\n.care-tips .feedback-statistic .feedback-num[data-v-45447dba] {\n    position: relative;\n    padding: 0px 10px 0px 5px;\n}\n.care-tips .feedback-statistic .feedback-num .tip[data-v-45447dba] {\n      padding: 5px;\n      box-shadow: 5px 5px 5px rgba(50, 50, 50, 0.8);\n      border-radius: 3px;\n      position: absolute;\n      top: 40px;\n      left: -50%;\n      width: 150px;\n      text-align: center;\n      visibility: hidden;\n      z-index: 1;\n      background-color: #ffffff;\n}\n.care-tips .feedback-statistic .feedback-num:hover .tip[data-v-45447dba] {\n      visibility: visible;\n}\n.care-tips .inform-message[data-v-45447dba] {\n  width: 100%;\n  background-color: #aaaaaa;\n  color: #ffffff;\n  text-align: center;\n  padding: 10px;\n  position: fixed;\n  left: 0px;\n  height: 40px;\n  top: -40px;\n  z-index: 99;\n  -webkit-transition: top 0.5s ease;\n  transition: top 0.5s ease;\n}\n.care-tips .inform-message.show[data-v-45447dba] {\n    top: 0px;\n}\n.care-tips .message-list .message[data-v-45447dba] {\n  margin: 10px;\n  border-bottom: 1px solid #dddddd;\n  padding: 0px;\n}\n.care-tips .message-list .message .message-content[data-v-45447dba] {\n    padding-left: 10px;\n    white-space: pre-wrap;\n}\n.care-tips .message-list .sub-info[data-v-45447dba] {\n  display: flex;\n  justify-content: flex-end;\n  flex-wrap: wrap;\n  align-items: center;\n  font-size: 0.8em;\n  color: #888888;\n}\n.care-tips .message-list .sub-info .info-item[data-v-45447dba] {\n    margin: 10px 5px;\n}\n.care-tips .message-box[data-v-45447dba] {\n  border: 1px solid #cccccc;\n  border-radius: 5px;\n  padding: 10px;\n}\n.care-tips .message-box textarea[data-v-45447dba] {\n    border: none;\n    outline: none;\n    width: 100%;\n    height: 60px;\n    resize: none;\n    font-size: 1.1em;\n}\n.care-tips .message-box .bt-container[data-v-45447dba] {\n    display: flex;\n    justify-content: flex-end;\n    flex-wrap: wrap;\n    align-items: center;\n}\n.care-tips .message-box .bt-container .bt[data-v-45447dba] {\n      display: inline-block;\n      float: right;\n      color: #ffffff;\n      padding: 5px 10px;\n      margin: 0px;\n      background-color: #555555;\n      cursor: pointer;\n      border-radius: 3px;\n}\n.care-tips .message-box .bt-container .bt[data-v-45447dba]:hover {\n        background-color: #888888;\n}\n.care-tips .panel-title[data-v-45447dba] {\n  font-size: 1.5em;\n  text-align: center;\n  margin: 20px;\n}\n.care-tips .no-result-box[data-v-45447dba] {\n  width: 1200px;\n  max-width: 100%;\n  background-color: #ffffff;\n  color: #333333;\n  padding: 20px;\n  border-radius: 5px;\n  margin: 10px auto;\n  text-align: center;\n  font-size: 1.2em;\n}\n.care-tips .no-result-box .center-bt[data-v-45447dba] {\n    background-color: #ffffff;\n    color: #ff5555;\n    border: 1px solid #ff5555;\n    width: 200px;\n    padding: 10px;\n    margin: 40px auto;\n    border-radius: 5px;\n    cursor: pointer;\n}\n.care-tips .no-result-box .center-bt[data-v-45447dba]:hover {\n      color: #ff8888;\n      border: 1px solid #ff8888;\n}\n.care-tips .input-panel[data-v-45447dba] {\n  position: fixed;\n  top: 70px;\n  left: 0px;\n  width: 100%;\n  height: calc(100% - 130px);\n  padding: 10px;\n  background-color: rgba(50, 50, 50, 0.5);\n  color: white;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.care-tips .input-panel.full[data-v-45447dba] {\n    top: 0px;\n    height: calc(100% - 60px);\n}\n.care-tips .close-bt[data-v-45447dba] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  font-size: 1.2em;\n  cursor: pointer;\n  padding: 5px 10px;\n  color: #ff5555;\n  border: 1px solid #ff5555;\n  border-radius: 5px;\n}\n.care-tips .close-bt[data-v-45447dba]:hover {\n    color: #ff8888;\n    border: 1px solid #ff8888;\n}\n.care-tips .input-area[data-v-45447dba] {\n  max-height: 100%;\n  overflow-y: auto;\n  position: relative;\n  background-color: #f8f8f8;\n  color: #323232;\n  border-radius: 5px;\n  width: 1024px;\n  max-width: 100%;\n  margin: auto;\n  padding: 10px;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  -ms-transform: translateY(-50%);\n  transform: translateY(-50%);\n}\n.care-tips .input-area .input-item[data-v-45447dba] {\n    margin: 5px;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    flex-wrap: wrap;\n}\n.care-tips .input-area .input-item .item[data-v-45447dba] {\n      margin: 5px;\n}\n.care-tips .input-area .input-label[data-v-45447dba] {\n    font-size: 1.2em;\n    display: inline-block;\n    margin: 5px;\n}\n.care-tips .input-area select[data-v-45447dba] {\n    border-radius: 3px;\n    max-width: 100%;\n    padding: 5px;\n    font-size: 1.1em;\n}\n.care-tips .input-area textarea[data-v-45447dba] {\n    margin: 10px 0px;\n    border-radius: 3px;\n    padding: 10px;\n    width: 100%;\n    height: 120px;\n    resize: none;\n    font-size: 1.1em;\n}\n.care-tips .input-area input[type=\"number\"][data-v-45447dba] {\n    max-width: 100%;\n    padding: 5px;\n    border-radius: 3px;\n    max-width: 80px;\n    font-size: 1.1em;\n}\n.care-tips .input-area input[type=\"text\"][data-v-45447dba] {\n    max-width: 100%;\n    padding: 5px;\n    border-radius: 3px;\n    font-size: 1.1em;\n}\n.care-tips .input-area .filter-icon[data-v-45447dba] {\n    width: 30px;\n    height: 30px;\n    margin: 5px;\n    padding: 2px;\n    cursor: pointer;\n}\n.care-tips .input-area .filter-icon[data-v-45447dba]:hover {\n      padding: 0px;\n}\n.care-tips .input-area .filter-list[data-v-45447dba] {\n    padding: 10px;\n}\n.care-tips .input-area .filter-list .filter-category[data-v-45447dba] {\n      padding: 10px;\n      color: #888888;\n}\n.care-tips .input-area .filter-list .filter-category .cat-label[data-v-45447dba] {\n        font-size: 1.5em;\n        font-weight: bold;\n}\n.care-tips .input-area .filter-list .filter-problem[data-v-45447dba] {\n      color: #333333;\n      display: flex;\n      justify-content: flex-start;\n      align-items: center;\n      flex-wrap: wrap;\n      padding: 5px;\n}\n.care-tips .input-area .filter-list .filter-problem .problem-label[data-v-45447dba] {\n        font-size: 1.2em;\n        font-weight: bold;\n}\n.care-tips .input-area .filter-list .filter-item[data-v-45447dba] {\n      margin: 5px;\n      padding: 5px;\n      cursor: pointer;\n}\n.care-tips .input-area .filter-list .filter-item[data-v-45447dba]:hover {\n        border-bottom: 1px solid #BE9063;\n}\n.care-tips .slide-panel[data-v-45447dba] {\n  position: fixed;\n  top: 0px;\n  left: 100%;\n  width: 100%;\n  max-width: 100%;\n  height: calc(100% - 60px);\n  padding: 10px;\n  z-index: 10;\n  color: white;\n  background-color: rgba(50, 50, 50, 0.5);\n  overflow-x: hidden;\n  overflow-y: auto;\n  -webkit-transition: left 0.5s ease;\n  transition: left 0.5s ease;\n}\n.care-tips .slide-panel.open[data-v-45447dba] {\n    left: 0px;\n}\n.care-tips .side-panel[data-v-45447dba] {\n  position: fixed;\n  top: 0px;\n  left: -400px;\n  width: 300px;\n  max-width: 100%;\n  height: 100%;\n  padding: 10px;\n  z-index: 11;\n  color: #333333;\n  background-color: rgba(240, 240, 240, 0.9);\n  border-radius: 0px 5px 5px 0px;\n  box-shadow: 3px 3px 5px #888888;\n  overflow-x: hidden;\n  overflow-y: auto;\n  -webkit-transition: left 0.5s ease;\n  transition: left 0.5s ease;\n}\n.care-tips .side-panel.open[data-v-45447dba] {\n    left: 0px;\n}\n.care-tips .side-panel .search-container[data-v-45447dba] {\n    width: 400px;\n    max-width: 100%;\n    margin: auto;\n}\n.care-tips .side-panel .search-container .search-item[data-v-45447dba] {\n      margin: 5px;\n      font-size: 1.1em;\n}\n.care-tips .side-panel .search-container .search-item input[data-v-45447dba] {\n        padding: 5px;\n        width: 100%;\n}\n.care-tips .side-panel .search-container .search-item select[data-v-45447dba] {\n        padding: 5px;\n        width: 100%;\n}\n.care-tips .side-panel .search-container .search-item .search-label[data-v-45447dba] {\n        padding: 5px;\n}\n.care-tips .tab-bar[data-v-45447dba] {\n  position: fixed;\n  left: 0px;\n  bottom: 0px;\n  width: 100%;\n  height: 60px;\n  z-index: 9;\n  background-color: rgba(240, 240, 240, 0.9);\n  box-shadow: 0px 0px 5px #888888;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.care-tips .tab-bar .tab-bt-container[data-v-45447dba] {\n    display: flex;\n    overflow-x: auto;\n    padding: 10px;\n}\n.care-tips .tab-bt[data-v-45447dba] {\n  text-align: center;\n  min-width: 110px;\n  cursor: pointer;\n  padding: 5px 10px;\n  background-color: #ffffff;\n  color: #555555;\n  border: 1px solid #555555;\n  border-radius: 5px;\n  margin: 0px 10px;\n}\n.care-tips .tab-bt[data-v-45447dba]:hover {\n    color: #888888;\n    border: 1px solid #888888;\n}\n.care-tips .tab-bt.on[data-v-45447dba] {\n    color: #ff5555;\n    border: 1px solid #ff5555;\n}\n.topbar[data-v-45447dba] {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 70px;\n  padding: 10px;\n  box-shadow: 0px 2px 5px #888;\n  background-color: #eeeeee;\n  z-index: 10;\n}\n.topbar .logo[data-v-45447dba] {\n    position: absolute;\n    top: 10px;\n    left: 20px;\n    height: 50px;\n}\n.topbar .logo img[data-v-45447dba] {\n      height: 100%;\n      cursor: pointer;\n}\n.topbar .menu-bt[data-v-45447dba] {\n    display: block;\n    position: absolute;\n    top: 15px;\n    right: 10px;\n    height: 40px;\n    border-radius: 50px;\n    cursor: pointer;\n}\n@media only screen and (min-width: 640px) {\n.topbar .menu-bt[data-v-45447dba] {\n        right: 20px;\n}\n}\n.topbar .menu-bt[data-v-45447dba]:hover {\n      -webkit-filter: brightness(80%);\n      filter: brightness(80%);\n}\n.topbar .bt-container[data-v-45447dba] {\n    height: 100%;\n    position: absolute;\n    top: 0px;\n    right: 80px;\n    display: none;\n}\n@media only screen and (min-width: 640px) {\n.topbar .bt-container[data-v-45447dba] {\n        display: flex;\n        justify-content: flex-end;\n        align-items: center;\n}\n}\n.topbar .bt-container .bt[data-v-45447dba] {\n      font-size: 1.2em;\n      display: inline-block;\n      padding: 5px 10px;\n      margin: 5px 10px;\n      text-align: center;\n      color: #333333;\n      cursor: pointer;\n}\n.topbar .bt-container .bt[data-v-45447dba]:hover {\n        color: #BE9063;\n        border-bottom: 2px solid #BE9063;\n}\n.menu-container[data-v-45447dba] {\n  position: fixed;\n  right: 0px;\n  top: 70px;\n  width: 100%;\n  padding: 0px 20px;\n  margin: 0px;\n  list-style-type: none;\n  box-shadow: 0px 2px 4px 0px #888;\n  background-color: #f8f8f8;\n  font-size: 1.25em;\n  color: #333333;\n  z-index: 9;\n  overflow-y: hidden;\n  max-height: 0px;\n  -webkit-transition: max-height 0.5s, padding 0.5s ease;\n  transition: max-height 0.5s, padding 0.5s ease;\n}\n@media only screen and (min-width: 640px) {\n.menu-container[data-v-45447dba] {\n      width: 300px;\n      max-width: 100%;\n      border-radius: 0px 0px 0px 10px;\n}\n}\n.menu-container.open[data-v-45447dba] {\n    padding: 10px 20px;\n    max-height: 300px;\n}\n.menu-container li[data-v-45447dba] {\n    border-bottom: 1px solid #BE9063;\n}\n.menu-container li a[data-v-45447dba] {\n      padding: 10px 0px;\n      display: block;\n      color: #333333;\n      text-decoration: none;\n}\n.menu-container li[data-v-45447dba]:last-of-type {\n      border: none;\n}\n.menu-container li[data-v-45447dba]:hover {\n      background-color: #eeeeee;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/user-info-editor.vue?vue&type=style&index=0&id=ef839ef4&lang=scss&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/user-info-editor.vue?vue&type=style&index=0&id=ef839ef4&lang=scss&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n@charset \"UTF-8\";\nhtml[data-v-ef839ef4], body[data-v-ef839ef4] {\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  overflow: visible;\n}\n*[data-v-ef839ef4] {\n  box-sizing: border-box;\n  font-family: \"\\5FAE\\8EDF\\6B63\\9ED1\\9AD4\", \"Microsoft JhengHei\";\n}\n.center[data-v-ef839ef4] {\n  display: block;\n  margin: auto;\n  clear: both;\n  text-align: center;\n}\n.hide[data-v-ef839ef4] {\n  display: none;\n}\n.warning[data-v-ef839ef4] {\n  color: red;\n}\n.bold[data-v-ef839ef4] {\n  font-weight: bold;\n}\n.inline-block[data-v-ef839ef4] {\n  display: inline-block;\n}\na[data-v-ef839ef4] {\n  text-decoration: none;\n  color: #ff3333;\n}\na[data-v-ef839ef4]:hover {\n    color: #ff8800;\n}\n.one-third-w[data-v-ef839ef4] {\n  display: inline-block;\n  vertical-align: middle;\n  margin: 10px 0px;\n  width: 100%;\n}\n@media only screen and (min-width: 640px) {\n.one-third-w[data-v-ef839ef4] {\n      width: calc(50% - 20px);\n      margin: 10px;\n}\n}\n@media only screen and (min-width: 1024px) {\n.one-third-w[data-v-ef839ef4] {\n      width: calc(33% - 20px);\n      margin: 10px;\n}\n}\n.half-w[data-v-ef839ef4] {\n  display: inline-block;\n  vertical-align: middle;\n  margin: 10px 0px;\n  width: 100%;\n}\n@media only screen and (min-width: 640px) {\n.half-w[data-v-ef839ef4] {\n      width: calc(50% - 20px);\n      margin: 10px;\n}\n}\n.full-w[data-v-ef839ef4] {\n  display: block;\n  margin: 10px 0px;\n  width: 100%;\n}\n.problem-cat[data-v-ef839ef4] {\n  background-color: #f8f8f8;\n  padding: 0px 0px 10px 0px;\n  margin: 10px auto;\n  border-radius: 5px;\n}\n.problem-cat .problem-header[data-v-ef839ef4] {\n    margin: 0px auto;\n    font-size: 1.2em;\n    text-align: left;\n    padding: 10px;\n    background-color: #dddddd;\n    border-radius: 5px 5px 0px 0px;\n}\n.problem-cat .problem-container[data-v-ef839ef4] {\n    padding: 0px;\n}\n.problem-cat .problem-item[data-v-ef839ef4] {\n    border-radius: 5px;\n}\n.problem-cat .problem-item.select[data-v-ef839ef4] {\n      border: 1px solid red;\n}\n.problem-cat .problem-item .problem-title[data-v-ef839ef4] {\n      padding: 10px;\n      border-bottom: 1px solid #eeeeee;\n}\n.problem-cat .problem-item .problem-desc[data-v-ef839ef4] {\n      white-space: pre-wrap;\n      padding: 10px;\n}\n.problem-cat .problem-item .problem-body[data-v-ef839ef4] {\n      color: black;\n}\n.problem-cat .problem-item .item-bt-container[data-v-ef839ef4] {\n      padding: 10px;\n      display: flex;\n      justify-content: flex-end;\n      align-items: center;\n      flex-wrap: wrap;\n}\n.problem-cat .problem-item .item-bt[data-v-ef839ef4] {\n      display: inline-block;\n      margin: 0px 0px 0px 10px;\n      padding: 5px 10px;\n      cursor: pointer;\n      background-color: #eeeeee;\n      color: #333333;\n      border-radius: 3px;\n}\n.problem-cat .problem-item .item-bt[data-v-ef839ef4]:hover {\n        background-color: #ffffff;\n}\n.problem-cat .problem-item .target-info[data-v-ef839ef4] {\n      padding: 5px 10px;\n      color: #555555;\n}\n.cat-D1[data-v-ef839ef4] {\n  background-color: #FFA5A4;\n}\n.cat-D2[data-v-ef839ef4] {\n  background-color: #DEE885;\n}\n.cat-D3[data-v-ef839ef4] {\n  background-color: #85CAE8;\n}\n.cat-D4[data-v-ef839ef4] {\n  background-color: #C089E8;\n}\n.cat-A[data-v-ef839ef4] {\n  background-color: #FFA5A4;\n}\n.cat-B[data-v-ef839ef4] {\n  background-color: #FFDE9C;\n}\n.cat-C[data-v-ef839ef4] {\n  background-color: #DEE885;\n}\n.cat-D[data-v-ef839ef4] {\n  background-color: #9FFFBC;\n}\n.cat-E[data-v-ef839ef4] {\n  background-color: #85CAE8;\n}\n.cat-F[data-v-ef839ef4] {\n  background-color: #AF93FF;\n}\n.cat-G[data-v-ef839ef4] {\n  background-color: #C089E8;\n}\n.cat-O[data-v-ef839ef4] {\n  background-color: #FF8AE7;\n}\n.list-item[data-v-ef839ef4] {\n  background-color: #eeeeee;\n  border-radius: 5px;\n  max-width: 100%;\n  margin: 10px 0px;\n  padding-bottom: 10px;\n  cursor: pointer;\n}\n@media only screen and (min-width: 640px) {\n.list-item[data-v-ef839ef4] {\n      margin: 10px;\n}\n}\n.list-item a[data-v-ef839ef4] {\n    text-decoration: none;\n    color: #323232;\n}\n.list-item .domain-statistic[data-v-ef839ef4] {\n    display: flex;\n    justify-content: flex-start;\n    flex-wrap: wrap;\n    align-items: center;\n}\n.list-item .domain-statistic .domain-info[data-v-ef839ef4] {\n      position: relative;\n      display: flex;\n      justify-content: flex-start;\n      flex-wrap: wrap;\n      align-items: center;\n}\n.list-item .domain-statistic .domain-info .domain-icon[data-v-ef839ef4] {\n        display: inline-block;\n        padding: 7px;\n        margin: 10px 5px 10px 10px;\n        border-radius: 3px;\n}\n.list-item .domain-statistic .domain-info .domain-num[data-v-ef839ef4] {\n        display: inline-block;\n        font-size: 0.8em;\n        vertical-align: middle;\n}\n.list-item .domain-statistic .domain-info .tip[data-v-ef839ef4] {\n        padding: 5px;\n        box-shadow: 5px 5px 5px rgba(50, 50, 50, 0.8);\n        border-radius: 3px;\n        position: absolute;\n        top: 40px;\n        left: 10px;\n        width: 120px;\n        text-align: center;\n        z-index: 1;\n        opacity: 0;\n        -webkit-transition: opacity 0.5s ease;\n        transition: opacity 0.5s ease;\n}\n.list-item .domain-statistic .domain-info:hover .tip[data-v-ef839ef4] {\n        opacity: 1;\n}\n.list-item .desc[data-v-ef839ef4] {\n    white-space: pre-wrap;\n    color: #333333;\n    padding: 0px 20px 0px 10px;\n    width: 100%;\n    height: 4.5em;\n    line-height: 1.5em;\n    overflow: hidden;\n}\n.load-more[data-v-ef839ef4] {\n  width: 500px;\n  max-width: 100%;\n  padding: 10px 20px;\n  border-radius: 5px;\n  margin: 20px auto;\n  border: 1px solid #888888;\n  color: #888888;\n  background-color: #ffffff;\n  cursor: pointer;\n  text-align: center;\n}\n.load-more[data-v-ef839ef4]:hover {\n    border: 1px solid #333333;\n    color: #333333;\n}\n.fade-enter-active[data-v-ef839ef4], .fade-leave-active[data-v-ef839ef4] {\n  transition: opacity 0.5s;\n}\n.fade-enter[data-v-ef839ef4], .fade-leave-to[data-v-ef839ef4] {\n  opacity: 0;\n}\n.create-enter-active[data-v-ef839ef4] {\n  transition: opacity 0.5s;\n}\n.create-enter[data-v-ef839ef4] {\n  opacity: 0;\n}\n.main-container[data-v-ef839ef4] {\n  width: 100%;\n  margin: 80px auto 20px auto;\n  padding: 0px 0px 50px 0px;\n  color: #333333;\n}\n.care-tips .sub-title[data-v-ef839ef4] {\n  padding: 10px;\n  font-size: 1.5em;\n}\n.care-tips .mid-title[data-v-ef839ef4] {\n  padding: 5px;\n  margin: 10px auto 0px auto;\n  font-size: 1.5em;\n  text-align: center;\n}\n.care-tips .mid-title .bottom-line[data-v-ef839ef4] {\n    margin: auto;\n    width: 150px;\n    padding: 5px;\n    border-bottom: 1px solid #888888;\n}\n.care-tips .category-title[data-v-ef839ef4] {\n  padding: 5px;\n  margin: 10px auto 0px auto;\n  font-size: 2em;\n  text-align: center;\n}\n.care-tips .category-title .bottom-line[data-v-ef839ef4] {\n    margin: auto;\n    width: 150px;\n    padding: 5px;\n    border-bottom: 1px solid #888888;\n}\n.care-tips .category-separator[data-v-ef839ef4] {\n  width: 800px;\n  max-width: 100%;\n  padding: 20px;\n  margin: auto;\n  border-bottom: 1px solid #dddddd;\n}\n.care-tips .separator[data-v-ef839ef4] {\n  margin: 30px;\n  border-bottom: 1px solid #999999;\n}\n.care-tips .shadow-light[data-v-ef839ef4] {\n  box-shadow: 5px 5px 5px #888888;\n}\n.care-tips .shadow-light[data-v-ef839ef4]:hover {\n    box-shadow: 10px 10px 10px #888888;\n    -webkit-transition: box-shadow 0.5s ease;\n    transition: box-shadow 0.5s ease;\n}\n.care-tips .shadow-dark[data-v-ef839ef4] {\n  box-shadow: 5px 5px 5px #333333;\n}\n.care-tips .shadow-dark[data-v-ef839ef4]:hover {\n    box-shadow: 10px 10px 10px #333333;\n    -webkit-transition: box-shadow 0.5s ease;\n    transition: box-shadow 0.5s ease;\n}\n.care-tips .owner a[data-v-ef839ef4] {\n  text-decoration: none;\n  color: #323232;\n}\n.care-tips .owner a[data-v-ef839ef4]:hover {\n    color: #888888;\n}\n.care-tips .owner-info[data-v-ef839ef4] {\n  display: flex;\n  justify-content: flex-start;\n  flex-wrap: wrap;\n  align-items: center;\n  border-bottom: 1px solid #eeeeee;\n  border-radius: 5px 5px 0px 0px;\n  padding: 10px;\n}\n.care-tips .owner-info .owner-icon[data-v-ef839ef4] {\n    width: 30px;\n    height: 30px;\n    border-radius: 50%;\n    margin: 0px 5px 0px 0px;\n}\n.care-tips .owner-desc[data-v-ef839ef4] {\n  white-space: pre-wrap;\n  padding: 10px;\n}\n.care-tips .bt-bar[data-v-ef839ef4] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  flex-wrap: wrap;\n  width: 1024px;\n  max-width: 100%;\n  padding: 0px 15px;\n  margin: auto;\n}\n.care-tips .input-bt[data-v-ef839ef4] {\n  display: inline-block;\n  color: #ffffff;\n  padding: 7px 10px;\n  margin: 5px;\n  background-color: #555555;\n  cursor: pointer;\n  border-radius: 3px;\n}\n.care-tips .input-bt[data-v-ef839ef4]:hover {\n    background-color: #888888;\n}\n.care-tips .action-bt[data-v-ef839ef4] {\n  color: #ff5555;\n  border: 1px solid #ff5555;\n  border-radius: 5px;\n  padding: 5px 10px;\n  margin: 5px;\n  cursor: pointer;\n}\n.care-tips .action-bt[data-v-ef839ef4]:hover {\n    color: #ff8888;\n    border: 1px solid #ff8888;\n}\n.care-tips .feedback-statistic[data-v-ef839ef4] {\n  display: flex;\n  justify-content: flex-end;\n  flex-wrap: wrap;\n  align-items: center;\n  padding: 5px;\n  color: #888888;\n  font-size: 0.9em;\n}\n.care-tips .feedback-statistic .container[data-v-ef839ef4] {\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    align-items: center;\n    padding: 5px;\n}\n.care-tips .feedback-statistic .clickable[data-v-ef839ef4] {\n    cursor: pointer;\n}\n.care-tips .feedback-statistic .clickable[data-v-ef839ef4]:hover {\n      border-bottom: 2px solid #ff5555;\n      -webkit-filter: brightness(80%);\n      filter: brightness(80%);\n}\n.care-tips .feedback-statistic .feedback-icon[data-v-ef839ef4] {\n    width: 25px;\n    height: 25px;\n}\n.care-tips .feedback-statistic .feedback-num[data-v-ef839ef4] {\n    position: relative;\n    padding: 0px 10px 0px 5px;\n}\n.care-tips .feedback-statistic .feedback-num .tip[data-v-ef839ef4] {\n      padding: 5px;\n      box-shadow: 5px 5px 5px rgba(50, 50, 50, 0.8);\n      border-radius: 3px;\n      position: absolute;\n      top: 40px;\n      left: -50%;\n      width: 150px;\n      text-align: center;\n      visibility: hidden;\n      z-index: 1;\n      background-color: #ffffff;\n}\n.care-tips .feedback-statistic .feedback-num:hover .tip[data-v-ef839ef4] {\n      visibility: visible;\n}\n.care-tips .inform-message[data-v-ef839ef4] {\n  width: 100%;\n  background-color: #aaaaaa;\n  color: #ffffff;\n  text-align: center;\n  padding: 10px;\n  position: fixed;\n  left: 0px;\n  height: 40px;\n  top: -40px;\n  z-index: 99;\n  -webkit-transition: top 0.5s ease;\n  transition: top 0.5s ease;\n}\n.care-tips .inform-message.show[data-v-ef839ef4] {\n    top: 0px;\n}\n.care-tips .message-list .message[data-v-ef839ef4] {\n  margin: 10px;\n  border-bottom: 1px solid #dddddd;\n  padding: 0px;\n}\n.care-tips .message-list .message .message-content[data-v-ef839ef4] {\n    padding-left: 10px;\n    white-space: pre-wrap;\n}\n.care-tips .message-list .sub-info[data-v-ef839ef4] {\n  display: flex;\n  justify-content: flex-end;\n  flex-wrap: wrap;\n  align-items: center;\n  font-size: 0.8em;\n  color: #888888;\n}\n.care-tips .message-list .sub-info .info-item[data-v-ef839ef4] {\n    margin: 10px 5px;\n}\n.care-tips .message-box[data-v-ef839ef4] {\n  border: 1px solid #cccccc;\n  border-radius: 5px;\n  padding: 10px;\n}\n.care-tips .message-box textarea[data-v-ef839ef4] {\n    border: none;\n    outline: none;\n    width: 100%;\n    height: 60px;\n    resize: none;\n    font-size: 1.1em;\n}\n.care-tips .message-box .bt-container[data-v-ef839ef4] {\n    display: flex;\n    justify-content: flex-end;\n    flex-wrap: wrap;\n    align-items: center;\n}\n.care-tips .message-box .bt-container .bt[data-v-ef839ef4] {\n      display: inline-block;\n      float: right;\n      color: #ffffff;\n      padding: 5px 10px;\n      margin: 0px;\n      background-color: #555555;\n      cursor: pointer;\n      border-radius: 3px;\n}\n.care-tips .message-box .bt-container .bt[data-v-ef839ef4]:hover {\n        background-color: #888888;\n}\n.care-tips .panel-title[data-v-ef839ef4] {\n  font-size: 1.5em;\n  text-align: center;\n  margin: 20px;\n}\n.care-tips .no-result-box[data-v-ef839ef4] {\n  width: 1200px;\n  max-width: 100%;\n  background-color: #ffffff;\n  color: #333333;\n  padding: 20px;\n  border-radius: 5px;\n  margin: 10px auto;\n  text-align: center;\n  font-size: 1.2em;\n}\n.care-tips .no-result-box .center-bt[data-v-ef839ef4] {\n    background-color: #ffffff;\n    color: #ff5555;\n    border: 1px solid #ff5555;\n    width: 200px;\n    padding: 10px;\n    margin: 40px auto;\n    border-radius: 5px;\n    cursor: pointer;\n}\n.care-tips .no-result-box .center-bt[data-v-ef839ef4]:hover {\n      color: #ff8888;\n      border: 1px solid #ff8888;\n}\n.care-tips .input-panel[data-v-ef839ef4] {\n  position: fixed;\n  top: 70px;\n  left: 0px;\n  width: 100%;\n  height: calc(100% - 130px);\n  padding: 10px;\n  background-color: rgba(50, 50, 50, 0.5);\n  color: white;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.care-tips .input-panel.full[data-v-ef839ef4] {\n    top: 0px;\n    height: calc(100% - 60px);\n}\n.care-tips .close-bt[data-v-ef839ef4] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  font-size: 1.2em;\n  cursor: pointer;\n  padding: 5px 10px;\n  color: #ff5555;\n  border: 1px solid #ff5555;\n  border-radius: 5px;\n}\n.care-tips .close-bt[data-v-ef839ef4]:hover {\n    color: #ff8888;\n    border: 1px solid #ff8888;\n}\n.care-tips .input-area[data-v-ef839ef4] {\n  max-height: 100%;\n  overflow-y: auto;\n  position: relative;\n  background-color: #f8f8f8;\n  color: #323232;\n  border-radius: 5px;\n  width: 1024px;\n  max-width: 100%;\n  margin: auto;\n  padding: 10px;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  -ms-transform: translateY(-50%);\n  transform: translateY(-50%);\n}\n.care-tips .input-area .input-item[data-v-ef839ef4] {\n    margin: 5px;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    flex-wrap: wrap;\n}\n.care-tips .input-area .input-item .item[data-v-ef839ef4] {\n      margin: 5px;\n}\n.care-tips .input-area .input-label[data-v-ef839ef4] {\n    font-size: 1.2em;\n    display: inline-block;\n    margin: 5px;\n}\n.care-tips .input-area select[data-v-ef839ef4] {\n    border-radius: 3px;\n    max-width: 100%;\n    padding: 5px;\n    font-size: 1.1em;\n}\n.care-tips .input-area textarea[data-v-ef839ef4] {\n    margin: 10px 0px;\n    border-radius: 3px;\n    padding: 10px;\n    width: 100%;\n    height: 120px;\n    resize: none;\n    font-size: 1.1em;\n}\n.care-tips .input-area input[type=\"number\"][data-v-ef839ef4] {\n    max-width: 100%;\n    padding: 5px;\n    border-radius: 3px;\n    max-width: 80px;\n    font-size: 1.1em;\n}\n.care-tips .input-area input[type=\"text\"][data-v-ef839ef4] {\n    max-width: 100%;\n    padding: 5px;\n    border-radius: 3px;\n    font-size: 1.1em;\n}\n.care-tips .input-area .filter-icon[data-v-ef839ef4] {\n    width: 30px;\n    height: 30px;\n    margin: 5px;\n    padding: 2px;\n    cursor: pointer;\n}\n.care-tips .input-area .filter-icon[data-v-ef839ef4]:hover {\n      padding: 0px;\n}\n.care-tips .input-area .filter-list[data-v-ef839ef4] {\n    padding: 10px;\n}\n.care-tips .input-area .filter-list .filter-category[data-v-ef839ef4] {\n      padding: 10px;\n      color: #888888;\n}\n.care-tips .input-area .filter-list .filter-category .cat-label[data-v-ef839ef4] {\n        font-size: 1.5em;\n        font-weight: bold;\n}\n.care-tips .input-area .filter-list .filter-problem[data-v-ef839ef4] {\n      color: #333333;\n      display: flex;\n      justify-content: flex-start;\n      align-items: center;\n      flex-wrap: wrap;\n      padding: 5px;\n}\n.care-tips .input-area .filter-list .filter-problem .problem-label[data-v-ef839ef4] {\n        font-size: 1.2em;\n        font-weight: bold;\n}\n.care-tips .input-area .filter-list .filter-item[data-v-ef839ef4] {\n      margin: 5px;\n      padding: 5px;\n      cursor: pointer;\n}\n.care-tips .input-area .filter-list .filter-item[data-v-ef839ef4]:hover {\n        border-bottom: 1px solid #BE9063;\n}\n.care-tips .slide-panel[data-v-ef839ef4] {\n  position: fixed;\n  top: 0px;\n  left: 100%;\n  width: 100%;\n  max-width: 100%;\n  height: calc(100% - 60px);\n  padding: 10px;\n  z-index: 10;\n  color: white;\n  background-color: rgba(50, 50, 50, 0.5);\n  overflow-x: hidden;\n  overflow-y: auto;\n  -webkit-transition: left 0.5s ease;\n  transition: left 0.5s ease;\n}\n.care-tips .slide-panel.open[data-v-ef839ef4] {\n    left: 0px;\n}\n.care-tips .side-panel[data-v-ef839ef4] {\n  position: fixed;\n  top: 0px;\n  left: -400px;\n  width: 300px;\n  max-width: 100%;\n  height: 100%;\n  padding: 10px;\n  z-index: 11;\n  color: #333333;\n  background-color: rgba(240, 240, 240, 0.9);\n  border-radius: 0px 5px 5px 0px;\n  box-shadow: 3px 3px 5px #888888;\n  overflow-x: hidden;\n  overflow-y: auto;\n  -webkit-transition: left 0.5s ease;\n  transition: left 0.5s ease;\n}\n.care-tips .side-panel.open[data-v-ef839ef4] {\n    left: 0px;\n}\n.care-tips .side-panel .search-container[data-v-ef839ef4] {\n    width: 400px;\n    max-width: 100%;\n    margin: auto;\n}\n.care-tips .side-panel .search-container .search-item[data-v-ef839ef4] {\n      margin: 5px;\n      font-size: 1.1em;\n}\n.care-tips .side-panel .search-container .search-item input[data-v-ef839ef4] {\n        padding: 5px;\n        width: 100%;\n}\n.care-tips .side-panel .search-container .search-item select[data-v-ef839ef4] {\n        padding: 5px;\n        width: 100%;\n}\n.care-tips .side-panel .search-container .search-item .search-label[data-v-ef839ef4] {\n        padding: 5px;\n}\n.care-tips .tab-bar[data-v-ef839ef4] {\n  position: fixed;\n  left: 0px;\n  bottom: 0px;\n  width: 100%;\n  height: 60px;\n  z-index: 9;\n  background-color: rgba(240, 240, 240, 0.9);\n  box-shadow: 0px 0px 5px #888888;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.care-tips .tab-bar .tab-bt-container[data-v-ef839ef4] {\n    display: flex;\n    overflow-x: auto;\n    padding: 10px;\n}\n.care-tips .tab-bt[data-v-ef839ef4] {\n  text-align: center;\n  min-width: 110px;\n  cursor: pointer;\n  padding: 5px 10px;\n  background-color: #ffffff;\n  color: #555555;\n  border: 1px solid #555555;\n  border-radius: 5px;\n  margin: 0px 10px;\n}\n.care-tips .tab-bt[data-v-ef839ef4]:hover {\n    color: #888888;\n    border: 1px solid #888888;\n}\n.care-tips .tab-bt.on[data-v-ef839ef4] {\n    color: #ff5555;\n    border: 1px solid #ff5555;\n}\n.user-info-editor[data-v-ef839ef4] {\n  width: 600px;\n  max-width: 100%;\n  margin: auto;\n}\n.user-info-editor .info-container[data-v-ef839ef4] {\n    display: flex;\n    justify-content: flex-start;\n    align-items: flex-end;\n    flex-wrap: wrap;\n}\n.user-info-editor .info-container .info-box[data-v-ef839ef4] {\n      padding: 0px 5px;\n      margin: 0px 5px;\n      width: 100%;\n}\n@media only screen and (min-width: 640px) {\n.user-info-editor .info-container .info-box[data-v-ef839ef4] {\n          width: auto;\n}\n}\n.user-info-editor .info-container .grow[data-v-ef839ef4] {\n      flex-grow: 1;\n}\n.user-info-editor .info-label[data-v-ef839ef4] {\n    color: #888888;\n    margin: 5px 0px 0px 0px;\n}\n.user-info-editor .user-photo[data-v-ef839ef4] {\n    display: block;\n    width: 250px;\n    height: 250px;\n    max-width: 100%;\n    margin: 20px auto;\n    object-fit: cover;\n    border-radius: 50%;\n}\n.user-info-editor .photo-bt[data-v-ef839ef4] {\n    width: 100%;\n    border: 1px solid #888888;\n    background-color: #dddddd;\n    border-radius: 5px;\n    padding: 10px;\n    margin: 5px 0px;\n    text-align: center;\n    cursor: pointer;\n}\n.user-info-editor .remark[data-v-ef839ef4] {\n    font-size: 1em;\n    color: red;\n    padding: 20px 10px;\n}\n.user-info-editor .remark .remark-check[data-v-ef839ef4] {\n      color: black;\n      display: inline-block;\n}\n.user-info-editor .remark input[type=\"checkbox\"][data-v-ef839ef4] {\n      position: relative;\n      top: 4px;\n      width: 20px;\n      height: 20px;\n}\n.user-info-editor .canNotEmpty[data-v-ef839ef4]:before {\n    color: red;\n    content: \"*\";\n}\n.user-info-editor input[data-v-ef839ef4] {\n    border-radius: 5px;\n    padding: 5px;\n    width: 100%;\n    border: 1px solid #dddddd;\n    font-size: 1.1em;\n}\n.user-info-editor select[data-v-ef839ef4] {\n    border-radius: 5px;\n    border: 1px solid #dddddd;\n    padding: 5px;\n    width: 100%;\n    font-size: 1.1em;\n}\n.user-info-editor textarea[data-v-ef839ef4] {\n    border-radius: 3px;\n    padding: 10px;\n    width: 100%;\n    height: 120px;\n    resize: none;\n    font-size: 1.1em;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/user-list.vue?vue&type=style&index=0&id=480e25f4&lang=scss&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/user-list.vue?vue&type=style&index=0&id=480e25f4&lang=scss&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n@charset \"UTF-8\";\nhtml[data-v-480e25f4], body[data-v-480e25f4] {\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  overflow: visible;\n}\n*[data-v-480e25f4] {\n  box-sizing: border-box;\n  font-family: \"\\5FAE\\8EDF\\6B63\\9ED1\\9AD4\", \"Microsoft JhengHei\";\n}\n.center[data-v-480e25f4] {\n  display: block;\n  margin: auto;\n  clear: both;\n  text-align: center;\n}\n.hide[data-v-480e25f4] {\n  display: none;\n}\n.warning[data-v-480e25f4] {\n  color: red;\n}\n.bold[data-v-480e25f4] {\n  font-weight: bold;\n}\n.inline-block[data-v-480e25f4] {\n  display: inline-block;\n}\na[data-v-480e25f4] {\n  text-decoration: none;\n  color: #ff3333;\n}\na[data-v-480e25f4]:hover {\n    color: #ff8800;\n}\n.one-third-w[data-v-480e25f4] {\n  display: inline-block;\n  vertical-align: middle;\n  margin: 10px 0px;\n  width: 100%;\n}\n@media only screen and (min-width: 640px) {\n.one-third-w[data-v-480e25f4] {\n      width: calc(50% - 20px);\n      margin: 10px;\n}\n}\n@media only screen and (min-width: 1024px) {\n.one-third-w[data-v-480e25f4] {\n      width: calc(33% - 20px);\n      margin: 10px;\n}\n}\n.half-w[data-v-480e25f4] {\n  display: inline-block;\n  vertical-align: middle;\n  margin: 10px 0px;\n  width: 100%;\n}\n@media only screen and (min-width: 640px) {\n.half-w[data-v-480e25f4] {\n      width: calc(50% - 20px);\n      margin: 10px;\n}\n}\n.full-w[data-v-480e25f4] {\n  display: block;\n  margin: 10px 0px;\n  width: 100%;\n}\n.problem-cat[data-v-480e25f4] {\n  background-color: #f8f8f8;\n  padding: 0px 0px 10px 0px;\n  margin: 10px auto;\n  border-radius: 5px;\n}\n.problem-cat .problem-header[data-v-480e25f4] {\n    margin: 0px auto;\n    font-size: 1.2em;\n    text-align: left;\n    padding: 10px;\n    background-color: #dddddd;\n    border-radius: 5px 5px 0px 0px;\n}\n.problem-cat .problem-container[data-v-480e25f4] {\n    padding: 0px;\n}\n.problem-cat .problem-item[data-v-480e25f4] {\n    border-radius: 5px;\n}\n.problem-cat .problem-item.select[data-v-480e25f4] {\n      border: 1px solid red;\n}\n.problem-cat .problem-item .problem-title[data-v-480e25f4] {\n      padding: 10px;\n      border-bottom: 1px solid #eeeeee;\n}\n.problem-cat .problem-item .problem-desc[data-v-480e25f4] {\n      white-space: pre-wrap;\n      padding: 10px;\n}\n.problem-cat .problem-item .problem-body[data-v-480e25f4] {\n      color: black;\n}\n.problem-cat .problem-item .item-bt-container[data-v-480e25f4] {\n      padding: 10px;\n      display: flex;\n      justify-content: flex-end;\n      align-items: center;\n      flex-wrap: wrap;\n}\n.problem-cat .problem-item .item-bt[data-v-480e25f4] {\n      display: inline-block;\n      margin: 0px 0px 0px 10px;\n      padding: 5px 10px;\n      cursor: pointer;\n      background-color: #eeeeee;\n      color: #333333;\n      border-radius: 3px;\n}\n.problem-cat .problem-item .item-bt[data-v-480e25f4]:hover {\n        background-color: #ffffff;\n}\n.problem-cat .problem-item .target-info[data-v-480e25f4] {\n      padding: 5px 10px;\n      color: #555555;\n}\n.cat-D1[data-v-480e25f4] {\n  background-color: #FFA5A4;\n}\n.cat-D2[data-v-480e25f4] {\n  background-color: #DEE885;\n}\n.cat-D3[data-v-480e25f4] {\n  background-color: #85CAE8;\n}\n.cat-D4[data-v-480e25f4] {\n  background-color: #C089E8;\n}\n.cat-A[data-v-480e25f4] {\n  background-color: #FFA5A4;\n}\n.cat-B[data-v-480e25f4] {\n  background-color: #FFDE9C;\n}\n.cat-C[data-v-480e25f4] {\n  background-color: #DEE885;\n}\n.cat-D[data-v-480e25f4] {\n  background-color: #9FFFBC;\n}\n.cat-E[data-v-480e25f4] {\n  background-color: #85CAE8;\n}\n.cat-F[data-v-480e25f4] {\n  background-color: #AF93FF;\n}\n.cat-G[data-v-480e25f4] {\n  background-color: #C089E8;\n}\n.cat-O[data-v-480e25f4] {\n  background-color: #FF8AE7;\n}\n.list-item[data-v-480e25f4] {\n  background-color: #eeeeee;\n  border-radius: 5px;\n  max-width: 100%;\n  margin: 10px 0px;\n  padding-bottom: 10px;\n  cursor: pointer;\n}\n@media only screen and (min-width: 640px) {\n.list-item[data-v-480e25f4] {\n      margin: 10px;\n}\n}\n.list-item a[data-v-480e25f4] {\n    text-decoration: none;\n    color: #323232;\n}\n.list-item .domain-statistic[data-v-480e25f4] {\n    display: flex;\n    justify-content: flex-start;\n    flex-wrap: wrap;\n    align-items: center;\n}\n.list-item .domain-statistic .domain-info[data-v-480e25f4] {\n      position: relative;\n      display: flex;\n      justify-content: flex-start;\n      flex-wrap: wrap;\n      align-items: center;\n}\n.list-item .domain-statistic .domain-info .domain-icon[data-v-480e25f4] {\n        display: inline-block;\n        padding: 7px;\n        margin: 10px 5px 10px 10px;\n        border-radius: 3px;\n}\n.list-item .domain-statistic .domain-info .domain-num[data-v-480e25f4] {\n        display: inline-block;\n        font-size: 0.8em;\n        vertical-align: middle;\n}\n.list-item .domain-statistic .domain-info .tip[data-v-480e25f4] {\n        padding: 5px;\n        box-shadow: 5px 5px 5px rgba(50, 50, 50, 0.8);\n        border-radius: 3px;\n        position: absolute;\n        top: 40px;\n        left: 10px;\n        width: 120px;\n        text-align: center;\n        z-index: 1;\n        opacity: 0;\n        -webkit-transition: opacity 0.5s ease;\n        transition: opacity 0.5s ease;\n}\n.list-item .domain-statistic .domain-info:hover .tip[data-v-480e25f4] {\n        opacity: 1;\n}\n.list-item .desc[data-v-480e25f4] {\n    white-space: pre-wrap;\n    color: #333333;\n    padding: 0px 20px 0px 10px;\n    width: 100%;\n    height: 4.5em;\n    line-height: 1.5em;\n    overflow: hidden;\n}\n.load-more[data-v-480e25f4] {\n  width: 500px;\n  max-width: 100%;\n  padding: 10px 20px;\n  border-radius: 5px;\n  margin: 20px auto;\n  border: 1px solid #888888;\n  color: #888888;\n  background-color: #ffffff;\n  cursor: pointer;\n  text-align: center;\n}\n.load-more[data-v-480e25f4]:hover {\n    border: 1px solid #333333;\n    color: #333333;\n}\n.fade-enter-active[data-v-480e25f4], .fade-leave-active[data-v-480e25f4] {\n  transition: opacity 0.5s;\n}\n.fade-enter[data-v-480e25f4], .fade-leave-to[data-v-480e25f4] {\n  opacity: 0;\n}\n.create-enter-active[data-v-480e25f4] {\n  transition: opacity 0.5s;\n}\n.create-enter[data-v-480e25f4] {\n  opacity: 0;\n}\n.main-container[data-v-480e25f4] {\n  width: 100%;\n  margin: 80px auto 20px auto;\n  padding: 0px 0px 50px 0px;\n  color: #333333;\n}\n.care-tips .sub-title[data-v-480e25f4] {\n  padding: 10px;\n  font-size: 1.5em;\n}\n.care-tips .mid-title[data-v-480e25f4] {\n  padding: 5px;\n  margin: 10px auto 0px auto;\n  font-size: 1.5em;\n  text-align: center;\n}\n.care-tips .mid-title .bottom-line[data-v-480e25f4] {\n    margin: auto;\n    width: 150px;\n    padding: 5px;\n    border-bottom: 1px solid #888888;\n}\n.care-tips .category-title[data-v-480e25f4] {\n  padding: 5px;\n  margin: 10px auto 0px auto;\n  font-size: 2em;\n  text-align: center;\n}\n.care-tips .category-title .bottom-line[data-v-480e25f4] {\n    margin: auto;\n    width: 150px;\n    padding: 5px;\n    border-bottom: 1px solid #888888;\n}\n.care-tips .category-separator[data-v-480e25f4] {\n  width: 800px;\n  max-width: 100%;\n  padding: 20px;\n  margin: auto;\n  border-bottom: 1px solid #dddddd;\n}\n.care-tips .separator[data-v-480e25f4] {\n  margin: 30px;\n  border-bottom: 1px solid #999999;\n}\n.care-tips .shadow-light[data-v-480e25f4] {\n  box-shadow: 5px 5px 5px #888888;\n}\n.care-tips .shadow-light[data-v-480e25f4]:hover {\n    box-shadow: 10px 10px 10px #888888;\n    -webkit-transition: box-shadow 0.5s ease;\n    transition: box-shadow 0.5s ease;\n}\n.care-tips .shadow-dark[data-v-480e25f4] {\n  box-shadow: 5px 5px 5px #333333;\n}\n.care-tips .shadow-dark[data-v-480e25f4]:hover {\n    box-shadow: 10px 10px 10px #333333;\n    -webkit-transition: box-shadow 0.5s ease;\n    transition: box-shadow 0.5s ease;\n}\n.care-tips .owner a[data-v-480e25f4] {\n  text-decoration: none;\n  color: #323232;\n}\n.care-tips .owner a[data-v-480e25f4]:hover {\n    color: #888888;\n}\n.care-tips .owner-info[data-v-480e25f4] {\n  display: flex;\n  justify-content: flex-start;\n  flex-wrap: wrap;\n  align-items: center;\n  border-bottom: 1px solid #eeeeee;\n  border-radius: 5px 5px 0px 0px;\n  padding: 10px;\n}\n.care-tips .owner-info .owner-icon[data-v-480e25f4] {\n    width: 30px;\n    height: 30px;\n    border-radius: 50%;\n    margin: 0px 5px 0px 0px;\n}\n.care-tips .owner-desc[data-v-480e25f4] {\n  white-space: pre-wrap;\n  padding: 10px;\n}\n.care-tips .bt-bar[data-v-480e25f4] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  flex-wrap: wrap;\n  width: 1024px;\n  max-width: 100%;\n  padding: 0px 15px;\n  margin: auto;\n}\n.care-tips .input-bt[data-v-480e25f4] {\n  display: inline-block;\n  color: #ffffff;\n  padding: 7px 10px;\n  margin: 5px;\n  background-color: #555555;\n  cursor: pointer;\n  border-radius: 3px;\n}\n.care-tips .input-bt[data-v-480e25f4]:hover {\n    background-color: #888888;\n}\n.care-tips .action-bt[data-v-480e25f4] {\n  color: #ff5555;\n  border: 1px solid #ff5555;\n  border-radius: 5px;\n  padding: 5px 10px;\n  margin: 5px;\n  cursor: pointer;\n}\n.care-tips .action-bt[data-v-480e25f4]:hover {\n    color: #ff8888;\n    border: 1px solid #ff8888;\n}\n.care-tips .feedback-statistic[data-v-480e25f4] {\n  display: flex;\n  justify-content: flex-end;\n  flex-wrap: wrap;\n  align-items: center;\n  padding: 5px;\n  color: #888888;\n  font-size: 0.9em;\n}\n.care-tips .feedback-statistic .container[data-v-480e25f4] {\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    align-items: center;\n    padding: 5px;\n}\n.care-tips .feedback-statistic .clickable[data-v-480e25f4] {\n    cursor: pointer;\n}\n.care-tips .feedback-statistic .clickable[data-v-480e25f4]:hover {\n      border-bottom: 2px solid #ff5555;\n      -webkit-filter: brightness(80%);\n      filter: brightness(80%);\n}\n.care-tips .feedback-statistic .feedback-icon[data-v-480e25f4] {\n    width: 25px;\n    height: 25px;\n}\n.care-tips .feedback-statistic .feedback-num[data-v-480e25f4] {\n    position: relative;\n    padding: 0px 10px 0px 5px;\n}\n.care-tips .feedback-statistic .feedback-num .tip[data-v-480e25f4] {\n      padding: 5px;\n      box-shadow: 5px 5px 5px rgba(50, 50, 50, 0.8);\n      border-radius: 3px;\n      position: absolute;\n      top: 40px;\n      left: -50%;\n      width: 150px;\n      text-align: center;\n      visibility: hidden;\n      z-index: 1;\n      background-color: #ffffff;\n}\n.care-tips .feedback-statistic .feedback-num:hover .tip[data-v-480e25f4] {\n      visibility: visible;\n}\n.care-tips .inform-message[data-v-480e25f4] {\n  width: 100%;\n  background-color: #aaaaaa;\n  color: #ffffff;\n  text-align: center;\n  padding: 10px;\n  position: fixed;\n  left: 0px;\n  height: 40px;\n  top: -40px;\n  z-index: 99;\n  -webkit-transition: top 0.5s ease;\n  transition: top 0.5s ease;\n}\n.care-tips .inform-message.show[data-v-480e25f4] {\n    top: 0px;\n}\n.care-tips .message-list .message[data-v-480e25f4] {\n  margin: 10px;\n  border-bottom: 1px solid #dddddd;\n  padding: 0px;\n}\n.care-tips .message-list .message .message-content[data-v-480e25f4] {\n    padding-left: 10px;\n    white-space: pre-wrap;\n}\n.care-tips .message-list .sub-info[data-v-480e25f4] {\n  display: flex;\n  justify-content: flex-end;\n  flex-wrap: wrap;\n  align-items: center;\n  font-size: 0.8em;\n  color: #888888;\n}\n.care-tips .message-list .sub-info .info-item[data-v-480e25f4] {\n    margin: 10px 5px;\n}\n.care-tips .message-box[data-v-480e25f4] {\n  border: 1px solid #cccccc;\n  border-radius: 5px;\n  padding: 10px;\n}\n.care-tips .message-box textarea[data-v-480e25f4] {\n    border: none;\n    outline: none;\n    width: 100%;\n    height: 60px;\n    resize: none;\n    font-size: 1.1em;\n}\n.care-tips .message-box .bt-container[data-v-480e25f4] {\n    display: flex;\n    justify-content: flex-end;\n    flex-wrap: wrap;\n    align-items: center;\n}\n.care-tips .message-box .bt-container .bt[data-v-480e25f4] {\n      display: inline-block;\n      float: right;\n      color: #ffffff;\n      padding: 5px 10px;\n      margin: 0px;\n      background-color: #555555;\n      cursor: pointer;\n      border-radius: 3px;\n}\n.care-tips .message-box .bt-container .bt[data-v-480e25f4]:hover {\n        background-color: #888888;\n}\n.care-tips .panel-title[data-v-480e25f4] {\n  font-size: 1.5em;\n  text-align: center;\n  margin: 20px;\n}\n.care-tips .no-result-box[data-v-480e25f4] {\n  width: 1200px;\n  max-width: 100%;\n  background-color: #ffffff;\n  color: #333333;\n  padding: 20px;\n  border-radius: 5px;\n  margin: 10px auto;\n  text-align: center;\n  font-size: 1.2em;\n}\n.care-tips .no-result-box .center-bt[data-v-480e25f4] {\n    background-color: #ffffff;\n    color: #ff5555;\n    border: 1px solid #ff5555;\n    width: 200px;\n    padding: 10px;\n    margin: 40px auto;\n    border-radius: 5px;\n    cursor: pointer;\n}\n.care-tips .no-result-box .center-bt[data-v-480e25f4]:hover {\n      color: #ff8888;\n      border: 1px solid #ff8888;\n}\n.care-tips .input-panel[data-v-480e25f4] {\n  position: fixed;\n  top: 70px;\n  left: 0px;\n  width: 100%;\n  height: calc(100% - 130px);\n  padding: 10px;\n  background-color: rgba(50, 50, 50, 0.5);\n  color: white;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.care-tips .input-panel.full[data-v-480e25f4] {\n    top: 0px;\n    height: calc(100% - 60px);\n}\n.care-tips .close-bt[data-v-480e25f4] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  font-size: 1.2em;\n  cursor: pointer;\n  padding: 5px 10px;\n  color: #ff5555;\n  border: 1px solid #ff5555;\n  border-radius: 5px;\n}\n.care-tips .close-bt[data-v-480e25f4]:hover {\n    color: #ff8888;\n    border: 1px solid #ff8888;\n}\n.care-tips .input-area[data-v-480e25f4] {\n  max-height: 100%;\n  overflow-y: auto;\n  position: relative;\n  background-color: #f8f8f8;\n  color: #323232;\n  border-radius: 5px;\n  width: 1024px;\n  max-width: 100%;\n  margin: auto;\n  padding: 10px;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  -ms-transform: translateY(-50%);\n  transform: translateY(-50%);\n}\n.care-tips .input-area .input-item[data-v-480e25f4] {\n    margin: 5px;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    flex-wrap: wrap;\n}\n.care-tips .input-area .input-item .item[data-v-480e25f4] {\n      margin: 5px;\n}\n.care-tips .input-area .input-label[data-v-480e25f4] {\n    font-size: 1.2em;\n    display: inline-block;\n    margin: 5px;\n}\n.care-tips .input-area select[data-v-480e25f4] {\n    border-radius: 3px;\n    max-width: 100%;\n    padding: 5px;\n    font-size: 1.1em;\n}\n.care-tips .input-area textarea[data-v-480e25f4] {\n    margin: 10px 0px;\n    border-radius: 3px;\n    padding: 10px;\n    width: 100%;\n    height: 120px;\n    resize: none;\n    font-size: 1.1em;\n}\n.care-tips .input-area input[type=\"number\"][data-v-480e25f4] {\n    max-width: 100%;\n    padding: 5px;\n    border-radius: 3px;\n    max-width: 80px;\n    font-size: 1.1em;\n}\n.care-tips .input-area input[type=\"text\"][data-v-480e25f4] {\n    max-width: 100%;\n    padding: 5px;\n    border-radius: 3px;\n    font-size: 1.1em;\n}\n.care-tips .input-area .filter-icon[data-v-480e25f4] {\n    width: 30px;\n    height: 30px;\n    margin: 5px;\n    padding: 2px;\n    cursor: pointer;\n}\n.care-tips .input-area .filter-icon[data-v-480e25f4]:hover {\n      padding: 0px;\n}\n.care-tips .input-area .filter-list[data-v-480e25f4] {\n    padding: 10px;\n}\n.care-tips .input-area .filter-list .filter-category[data-v-480e25f4] {\n      padding: 10px;\n      color: #888888;\n}\n.care-tips .input-area .filter-list .filter-category .cat-label[data-v-480e25f4] {\n        font-size: 1.5em;\n        font-weight: bold;\n}\n.care-tips .input-area .filter-list .filter-problem[data-v-480e25f4] {\n      color: #333333;\n      display: flex;\n      justify-content: flex-start;\n      align-items: center;\n      flex-wrap: wrap;\n      padding: 5px;\n}\n.care-tips .input-area .filter-list .filter-problem .problem-label[data-v-480e25f4] {\n        font-size: 1.2em;\n        font-weight: bold;\n}\n.care-tips .input-area .filter-list .filter-item[data-v-480e25f4] {\n      margin: 5px;\n      padding: 5px;\n      cursor: pointer;\n}\n.care-tips .input-area .filter-list .filter-item[data-v-480e25f4]:hover {\n        border-bottom: 1px solid #BE9063;\n}\n.care-tips .slide-panel[data-v-480e25f4] {\n  position: fixed;\n  top: 0px;\n  left: 100%;\n  width: 100%;\n  max-width: 100%;\n  height: calc(100% - 60px);\n  padding: 10px;\n  z-index: 10;\n  color: white;\n  background-color: rgba(50, 50, 50, 0.5);\n  overflow-x: hidden;\n  overflow-y: auto;\n  -webkit-transition: left 0.5s ease;\n  transition: left 0.5s ease;\n}\n.care-tips .slide-panel.open[data-v-480e25f4] {\n    left: 0px;\n}\n.care-tips .side-panel[data-v-480e25f4] {\n  position: fixed;\n  top: 0px;\n  left: -400px;\n  width: 300px;\n  max-width: 100%;\n  height: 100%;\n  padding: 10px;\n  z-index: 11;\n  color: #333333;\n  background-color: rgba(240, 240, 240, 0.9);\n  border-radius: 0px 5px 5px 0px;\n  box-shadow: 3px 3px 5px #888888;\n  overflow-x: hidden;\n  overflow-y: auto;\n  -webkit-transition: left 0.5s ease;\n  transition: left 0.5s ease;\n}\n.care-tips .side-panel.open[data-v-480e25f4] {\n    left: 0px;\n}\n.care-tips .side-panel .search-container[data-v-480e25f4] {\n    width: 400px;\n    max-width: 100%;\n    margin: auto;\n}\n.care-tips .side-panel .search-container .search-item[data-v-480e25f4] {\n      margin: 5px;\n      font-size: 1.1em;\n}\n.care-tips .side-panel .search-container .search-item input[data-v-480e25f4] {\n        padding: 5px;\n        width: 100%;\n}\n.care-tips .side-panel .search-container .search-item select[data-v-480e25f4] {\n        padding: 5px;\n        width: 100%;\n}\n.care-tips .side-panel .search-container .search-item .search-label[data-v-480e25f4] {\n        padding: 5px;\n}\n.care-tips .tab-bar[data-v-480e25f4] {\n  position: fixed;\n  left: 0px;\n  bottom: 0px;\n  width: 100%;\n  height: 60px;\n  z-index: 9;\n  background-color: rgba(240, 240, 240, 0.9);\n  box-shadow: 0px 0px 5px #888888;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.care-tips .tab-bar .tab-bt-container[data-v-480e25f4] {\n    display: flex;\n    overflow-x: auto;\n    padding: 10px;\n}\n.care-tips .tab-bt[data-v-480e25f4] {\n  text-align: center;\n  min-width: 110px;\n  cursor: pointer;\n  padding: 5px 10px;\n  background-color: #ffffff;\n  color: #555555;\n  border: 1px solid #555555;\n  border-radius: 5px;\n  margin: 0px 10px;\n}\n.care-tips .tab-bt[data-v-480e25f4]:hover {\n    color: #888888;\n    border: 1px solid #888888;\n}\n.care-tips .tab-bt.on[data-v-480e25f4] {\n    color: #ff5555;\n    border: 1px solid #ff5555;\n}\n.user-list[data-v-480e25f4] {\n  width: 1200px;\n  max-width: 100%;\n  margin: auto;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  align-items: center;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/user-view.vue?vue&type=style&index=0&id=3f20547b&lang=scss&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/user-view.vue?vue&type=style&index=0&id=3f20547b&lang=scss&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n@charset \"UTF-8\";\nhtml[data-v-3f20547b], body[data-v-3f20547b] {\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  overflow: visible;\n}\n*[data-v-3f20547b] {\n  box-sizing: border-box;\n  font-family: \"\\5FAE\\8EDF\\6B63\\9ED1\\9AD4\", \"Microsoft JhengHei\";\n}\n.center[data-v-3f20547b] {\n  display: block;\n  margin: auto;\n  clear: both;\n  text-align: center;\n}\n.hide[data-v-3f20547b] {\n  display: none;\n}\n.warning[data-v-3f20547b] {\n  color: red;\n}\n.bold[data-v-3f20547b] {\n  font-weight: bold;\n}\n.inline-block[data-v-3f20547b] {\n  display: inline-block;\n}\na[data-v-3f20547b] {\n  text-decoration: none;\n  color: #ff3333;\n}\na[data-v-3f20547b]:hover {\n    color: #ff8800;\n}\n.one-third-w[data-v-3f20547b] {\n  display: inline-block;\n  vertical-align: middle;\n  margin: 10px 0px;\n  width: 100%;\n}\n@media only screen and (min-width: 640px) {\n.one-third-w[data-v-3f20547b] {\n      width: calc(50% - 20px);\n      margin: 10px;\n}\n}\n@media only screen and (min-width: 1024px) {\n.one-third-w[data-v-3f20547b] {\n      width: calc(33% - 20px);\n      margin: 10px;\n}\n}\n.half-w[data-v-3f20547b] {\n  display: inline-block;\n  vertical-align: middle;\n  margin: 10px 0px;\n  width: 100%;\n}\n@media only screen and (min-width: 640px) {\n.half-w[data-v-3f20547b] {\n      width: calc(50% - 20px);\n      margin: 10px;\n}\n}\n.full-w[data-v-3f20547b] {\n  display: block;\n  margin: 10px 0px;\n  width: 100%;\n}\n.problem-cat[data-v-3f20547b] {\n  background-color: #f8f8f8;\n  padding: 0px 0px 10px 0px;\n  margin: 10px auto;\n  border-radius: 5px;\n}\n.problem-cat .problem-header[data-v-3f20547b] {\n    margin: 0px auto;\n    font-size: 1.2em;\n    text-align: left;\n    padding: 10px;\n    background-color: #dddddd;\n    border-radius: 5px 5px 0px 0px;\n}\n.problem-cat .problem-container[data-v-3f20547b] {\n    padding: 0px;\n}\n.problem-cat .problem-item[data-v-3f20547b] {\n    border-radius: 5px;\n}\n.problem-cat .problem-item.select[data-v-3f20547b] {\n      border: 1px solid red;\n}\n.problem-cat .problem-item .problem-title[data-v-3f20547b] {\n      padding: 10px;\n      border-bottom: 1px solid #eeeeee;\n}\n.problem-cat .problem-item .problem-desc[data-v-3f20547b] {\n      white-space: pre-wrap;\n      padding: 10px;\n}\n.problem-cat .problem-item .problem-body[data-v-3f20547b] {\n      color: black;\n}\n.problem-cat .problem-item .item-bt-container[data-v-3f20547b] {\n      padding: 10px;\n      display: flex;\n      justify-content: flex-end;\n      align-items: center;\n      flex-wrap: wrap;\n}\n.problem-cat .problem-item .item-bt[data-v-3f20547b] {\n      display: inline-block;\n      margin: 0px 0px 0px 10px;\n      padding: 5px 10px;\n      cursor: pointer;\n      background-color: #eeeeee;\n      color: #333333;\n      border-radius: 3px;\n}\n.problem-cat .problem-item .item-bt[data-v-3f20547b]:hover {\n        background-color: #ffffff;\n}\n.problem-cat .problem-item .target-info[data-v-3f20547b] {\n      padding: 5px 10px;\n      color: #555555;\n}\n.cat-D1[data-v-3f20547b] {\n  background-color: #FFA5A4;\n}\n.cat-D2[data-v-3f20547b] {\n  background-color: #DEE885;\n}\n.cat-D3[data-v-3f20547b] {\n  background-color: #85CAE8;\n}\n.cat-D4[data-v-3f20547b] {\n  background-color: #C089E8;\n}\n.cat-A[data-v-3f20547b] {\n  background-color: #FFA5A4;\n}\n.cat-B[data-v-3f20547b] {\n  background-color: #FFDE9C;\n}\n.cat-C[data-v-3f20547b] {\n  background-color: #DEE885;\n}\n.cat-D[data-v-3f20547b] {\n  background-color: #9FFFBC;\n}\n.cat-E[data-v-3f20547b] {\n  background-color: #85CAE8;\n}\n.cat-F[data-v-3f20547b] {\n  background-color: #AF93FF;\n}\n.cat-G[data-v-3f20547b] {\n  background-color: #C089E8;\n}\n.cat-O[data-v-3f20547b] {\n  background-color: #FF8AE7;\n}\n.list-item[data-v-3f20547b] {\n  background-color: #eeeeee;\n  border-radius: 5px;\n  max-width: 100%;\n  margin: 10px 0px;\n  padding-bottom: 10px;\n  cursor: pointer;\n}\n@media only screen and (min-width: 640px) {\n.list-item[data-v-3f20547b] {\n      margin: 10px;\n}\n}\n.list-item a[data-v-3f20547b] {\n    text-decoration: none;\n    color: #323232;\n}\n.list-item .domain-statistic[data-v-3f20547b] {\n    display: flex;\n    justify-content: flex-start;\n    flex-wrap: wrap;\n    align-items: center;\n}\n.list-item .domain-statistic .domain-info[data-v-3f20547b] {\n      position: relative;\n      display: flex;\n      justify-content: flex-start;\n      flex-wrap: wrap;\n      align-items: center;\n}\n.list-item .domain-statistic .domain-info .domain-icon[data-v-3f20547b] {\n        display: inline-block;\n        padding: 7px;\n        margin: 10px 5px 10px 10px;\n        border-radius: 3px;\n}\n.list-item .domain-statistic .domain-info .domain-num[data-v-3f20547b] {\n        display: inline-block;\n        font-size: 0.8em;\n        vertical-align: middle;\n}\n.list-item .domain-statistic .domain-info .tip[data-v-3f20547b] {\n        padding: 5px;\n        box-shadow: 5px 5px 5px rgba(50, 50, 50, 0.8);\n        border-radius: 3px;\n        position: absolute;\n        top: 40px;\n        left: 10px;\n        width: 120px;\n        text-align: center;\n        z-index: 1;\n        opacity: 0;\n        -webkit-transition: opacity 0.5s ease;\n        transition: opacity 0.5s ease;\n}\n.list-item .domain-statistic .domain-info:hover .tip[data-v-3f20547b] {\n        opacity: 1;\n}\n.list-item .desc[data-v-3f20547b] {\n    white-space: pre-wrap;\n    color: #333333;\n    padding: 0px 20px 0px 10px;\n    width: 100%;\n    height: 4.5em;\n    line-height: 1.5em;\n    overflow: hidden;\n}\n.load-more[data-v-3f20547b] {\n  width: 500px;\n  max-width: 100%;\n  padding: 10px 20px;\n  border-radius: 5px;\n  margin: 20px auto;\n  border: 1px solid #888888;\n  color: #888888;\n  background-color: #ffffff;\n  cursor: pointer;\n  text-align: center;\n}\n.load-more[data-v-3f20547b]:hover {\n    border: 1px solid #333333;\n    color: #333333;\n}\n.fade-enter-active[data-v-3f20547b], .fade-leave-active[data-v-3f20547b] {\n  transition: opacity 0.5s;\n}\n.fade-enter[data-v-3f20547b], .fade-leave-to[data-v-3f20547b] {\n  opacity: 0;\n}\n.create-enter-active[data-v-3f20547b] {\n  transition: opacity 0.5s;\n}\n.create-enter[data-v-3f20547b] {\n  opacity: 0;\n}\n.main-container[data-v-3f20547b] {\n  width: 100%;\n  margin: 80px auto 20px auto;\n  padding: 0px 0px 50px 0px;\n  color: #333333;\n}\n.care-tips .sub-title[data-v-3f20547b] {\n  padding: 10px;\n  font-size: 1.5em;\n}\n.care-tips .mid-title[data-v-3f20547b] {\n  padding: 5px;\n  margin: 10px auto 0px auto;\n  font-size: 1.5em;\n  text-align: center;\n}\n.care-tips .mid-title .bottom-line[data-v-3f20547b] {\n    margin: auto;\n    width: 150px;\n    padding: 5px;\n    border-bottom: 1px solid #888888;\n}\n.care-tips .category-title[data-v-3f20547b] {\n  padding: 5px;\n  margin: 10px auto 0px auto;\n  font-size: 2em;\n  text-align: center;\n}\n.care-tips .category-title .bottom-line[data-v-3f20547b] {\n    margin: auto;\n    width: 150px;\n    padding: 5px;\n    border-bottom: 1px solid #888888;\n}\n.care-tips .category-separator[data-v-3f20547b] {\n  width: 800px;\n  max-width: 100%;\n  padding: 20px;\n  margin: auto;\n  border-bottom: 1px solid #dddddd;\n}\n.care-tips .separator[data-v-3f20547b] {\n  margin: 30px;\n  border-bottom: 1px solid #999999;\n}\n.care-tips .shadow-light[data-v-3f20547b] {\n  box-shadow: 5px 5px 5px #888888;\n}\n.care-tips .shadow-light[data-v-3f20547b]:hover {\n    box-shadow: 10px 10px 10px #888888;\n    -webkit-transition: box-shadow 0.5s ease;\n    transition: box-shadow 0.5s ease;\n}\n.care-tips .shadow-dark[data-v-3f20547b] {\n  box-shadow: 5px 5px 5px #333333;\n}\n.care-tips .shadow-dark[data-v-3f20547b]:hover {\n    box-shadow: 10px 10px 10px #333333;\n    -webkit-transition: box-shadow 0.5s ease;\n    transition: box-shadow 0.5s ease;\n}\n.care-tips .owner a[data-v-3f20547b] {\n  text-decoration: none;\n  color: #323232;\n}\n.care-tips .owner a[data-v-3f20547b]:hover {\n    color: #888888;\n}\n.care-tips .owner-info[data-v-3f20547b] {\n  display: flex;\n  justify-content: flex-start;\n  flex-wrap: wrap;\n  align-items: center;\n  border-bottom: 1px solid #eeeeee;\n  border-radius: 5px 5px 0px 0px;\n  padding: 10px;\n}\n.care-tips .owner-info .owner-icon[data-v-3f20547b] {\n    width: 30px;\n    height: 30px;\n    border-radius: 50%;\n    margin: 0px 5px 0px 0px;\n}\n.care-tips .owner-desc[data-v-3f20547b] {\n  white-space: pre-wrap;\n  padding: 10px;\n}\n.care-tips .bt-bar[data-v-3f20547b] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  flex-wrap: wrap;\n  width: 1024px;\n  max-width: 100%;\n  padding: 0px 15px;\n  margin: auto;\n}\n.care-tips .input-bt[data-v-3f20547b] {\n  display: inline-block;\n  color: #ffffff;\n  padding: 7px 10px;\n  margin: 5px;\n  background-color: #555555;\n  cursor: pointer;\n  border-radius: 3px;\n}\n.care-tips .input-bt[data-v-3f20547b]:hover {\n    background-color: #888888;\n}\n.care-tips .action-bt[data-v-3f20547b] {\n  color: #ff5555;\n  border: 1px solid #ff5555;\n  border-radius: 5px;\n  padding: 5px 10px;\n  margin: 5px;\n  cursor: pointer;\n}\n.care-tips .action-bt[data-v-3f20547b]:hover {\n    color: #ff8888;\n    border: 1px solid #ff8888;\n}\n.care-tips .feedback-statistic[data-v-3f20547b] {\n  display: flex;\n  justify-content: flex-end;\n  flex-wrap: wrap;\n  align-items: center;\n  padding: 5px;\n  color: #888888;\n  font-size: 0.9em;\n}\n.care-tips .feedback-statistic .container[data-v-3f20547b] {\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    align-items: center;\n    padding: 5px;\n}\n.care-tips .feedback-statistic .clickable[data-v-3f20547b] {\n    cursor: pointer;\n}\n.care-tips .feedback-statistic .clickable[data-v-3f20547b]:hover {\n      border-bottom: 2px solid #ff5555;\n      -webkit-filter: brightness(80%);\n      filter: brightness(80%);\n}\n.care-tips .feedback-statistic .feedback-icon[data-v-3f20547b] {\n    width: 25px;\n    height: 25px;\n}\n.care-tips .feedback-statistic .feedback-num[data-v-3f20547b] {\n    position: relative;\n    padding: 0px 10px 0px 5px;\n}\n.care-tips .feedback-statistic .feedback-num .tip[data-v-3f20547b] {\n      padding: 5px;\n      box-shadow: 5px 5px 5px rgba(50, 50, 50, 0.8);\n      border-radius: 3px;\n      position: absolute;\n      top: 40px;\n      left: -50%;\n      width: 150px;\n      text-align: center;\n      visibility: hidden;\n      z-index: 1;\n      background-color: #ffffff;\n}\n.care-tips .feedback-statistic .feedback-num:hover .tip[data-v-3f20547b] {\n      visibility: visible;\n}\n.care-tips .inform-message[data-v-3f20547b] {\n  width: 100%;\n  background-color: #aaaaaa;\n  color: #ffffff;\n  text-align: center;\n  padding: 10px;\n  position: fixed;\n  left: 0px;\n  height: 40px;\n  top: -40px;\n  z-index: 99;\n  -webkit-transition: top 0.5s ease;\n  transition: top 0.5s ease;\n}\n.care-tips .inform-message.show[data-v-3f20547b] {\n    top: 0px;\n}\n.care-tips .message-list .message[data-v-3f20547b] {\n  margin: 10px;\n  border-bottom: 1px solid #dddddd;\n  padding: 0px;\n}\n.care-tips .message-list .message .message-content[data-v-3f20547b] {\n    padding-left: 10px;\n    white-space: pre-wrap;\n}\n.care-tips .message-list .sub-info[data-v-3f20547b] {\n  display: flex;\n  justify-content: flex-end;\n  flex-wrap: wrap;\n  align-items: center;\n  font-size: 0.8em;\n  color: #888888;\n}\n.care-tips .message-list .sub-info .info-item[data-v-3f20547b] {\n    margin: 10px 5px;\n}\n.care-tips .message-box[data-v-3f20547b] {\n  border: 1px solid #cccccc;\n  border-radius: 5px;\n  padding: 10px;\n}\n.care-tips .message-box textarea[data-v-3f20547b] {\n    border: none;\n    outline: none;\n    width: 100%;\n    height: 60px;\n    resize: none;\n    font-size: 1.1em;\n}\n.care-tips .message-box .bt-container[data-v-3f20547b] {\n    display: flex;\n    justify-content: flex-end;\n    flex-wrap: wrap;\n    align-items: center;\n}\n.care-tips .message-box .bt-container .bt[data-v-3f20547b] {\n      display: inline-block;\n      float: right;\n      color: #ffffff;\n      padding: 5px 10px;\n      margin: 0px;\n      background-color: #555555;\n      cursor: pointer;\n      border-radius: 3px;\n}\n.care-tips .message-box .bt-container .bt[data-v-3f20547b]:hover {\n        background-color: #888888;\n}\n.care-tips .panel-title[data-v-3f20547b] {\n  font-size: 1.5em;\n  text-align: center;\n  margin: 20px;\n}\n.care-tips .no-result-box[data-v-3f20547b] {\n  width: 1200px;\n  max-width: 100%;\n  background-color: #ffffff;\n  color: #333333;\n  padding: 20px;\n  border-radius: 5px;\n  margin: 10px auto;\n  text-align: center;\n  font-size: 1.2em;\n}\n.care-tips .no-result-box .center-bt[data-v-3f20547b] {\n    background-color: #ffffff;\n    color: #ff5555;\n    border: 1px solid #ff5555;\n    width: 200px;\n    padding: 10px;\n    margin: 40px auto;\n    border-radius: 5px;\n    cursor: pointer;\n}\n.care-tips .no-result-box .center-bt[data-v-3f20547b]:hover {\n      color: #ff8888;\n      border: 1px solid #ff8888;\n}\n.care-tips .input-panel[data-v-3f20547b] {\n  position: fixed;\n  top: 70px;\n  left: 0px;\n  width: 100%;\n  height: calc(100% - 130px);\n  padding: 10px;\n  background-color: rgba(50, 50, 50, 0.5);\n  color: white;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.care-tips .input-panel.full[data-v-3f20547b] {\n    top: 0px;\n    height: calc(100% - 60px);\n}\n.care-tips .close-bt[data-v-3f20547b] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  font-size: 1.2em;\n  cursor: pointer;\n  padding: 5px 10px;\n  color: #ff5555;\n  border: 1px solid #ff5555;\n  border-radius: 5px;\n}\n.care-tips .close-bt[data-v-3f20547b]:hover {\n    color: #ff8888;\n    border: 1px solid #ff8888;\n}\n.care-tips .input-area[data-v-3f20547b] {\n  max-height: 100%;\n  overflow-y: auto;\n  position: relative;\n  background-color: #f8f8f8;\n  color: #323232;\n  border-radius: 5px;\n  width: 1024px;\n  max-width: 100%;\n  margin: auto;\n  padding: 10px;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  -ms-transform: translateY(-50%);\n  transform: translateY(-50%);\n}\n.care-tips .input-area .input-item[data-v-3f20547b] {\n    margin: 5px;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    flex-wrap: wrap;\n}\n.care-tips .input-area .input-item .item[data-v-3f20547b] {\n      margin: 5px;\n}\n.care-tips .input-area .input-label[data-v-3f20547b] {\n    font-size: 1.2em;\n    display: inline-block;\n    margin: 5px;\n}\n.care-tips .input-area select[data-v-3f20547b] {\n    border-radius: 3px;\n    max-width: 100%;\n    padding: 5px;\n    font-size: 1.1em;\n}\n.care-tips .input-area textarea[data-v-3f20547b] {\n    margin: 10px 0px;\n    border-radius: 3px;\n    padding: 10px;\n    width: 100%;\n    height: 120px;\n    resize: none;\n    font-size: 1.1em;\n}\n.care-tips .input-area input[type=\"number\"][data-v-3f20547b] {\n    max-width: 100%;\n    padding: 5px;\n    border-radius: 3px;\n    max-width: 80px;\n    font-size: 1.1em;\n}\n.care-tips .input-area input[type=\"text\"][data-v-3f20547b] {\n    max-width: 100%;\n    padding: 5px;\n    border-radius: 3px;\n    font-size: 1.1em;\n}\n.care-tips .input-area .filter-icon[data-v-3f20547b] {\n    width: 30px;\n    height: 30px;\n    margin: 5px;\n    padding: 2px;\n    cursor: pointer;\n}\n.care-tips .input-area .filter-icon[data-v-3f20547b]:hover {\n      padding: 0px;\n}\n.care-tips .input-area .filter-list[data-v-3f20547b] {\n    padding: 10px;\n}\n.care-tips .input-area .filter-list .filter-category[data-v-3f20547b] {\n      padding: 10px;\n      color: #888888;\n}\n.care-tips .input-area .filter-list .filter-category .cat-label[data-v-3f20547b] {\n        font-size: 1.5em;\n        font-weight: bold;\n}\n.care-tips .input-area .filter-list .filter-problem[data-v-3f20547b] {\n      color: #333333;\n      display: flex;\n      justify-content: flex-start;\n      align-items: center;\n      flex-wrap: wrap;\n      padding: 5px;\n}\n.care-tips .input-area .filter-list .filter-problem .problem-label[data-v-3f20547b] {\n        font-size: 1.2em;\n        font-weight: bold;\n}\n.care-tips .input-area .filter-list .filter-item[data-v-3f20547b] {\n      margin: 5px;\n      padding: 5px;\n      cursor: pointer;\n}\n.care-tips .input-area .filter-list .filter-item[data-v-3f20547b]:hover {\n        border-bottom: 1px solid #BE9063;\n}\n.care-tips .slide-panel[data-v-3f20547b] {\n  position: fixed;\n  top: 0px;\n  left: 100%;\n  width: 100%;\n  max-width: 100%;\n  height: calc(100% - 60px);\n  padding: 10px;\n  z-index: 10;\n  color: white;\n  background-color: rgba(50, 50, 50, 0.5);\n  overflow-x: hidden;\n  overflow-y: auto;\n  -webkit-transition: left 0.5s ease;\n  transition: left 0.5s ease;\n}\n.care-tips .slide-panel.open[data-v-3f20547b] {\n    left: 0px;\n}\n.care-tips .side-panel[data-v-3f20547b] {\n  position: fixed;\n  top: 0px;\n  left: -400px;\n  width: 300px;\n  max-width: 100%;\n  height: 100%;\n  padding: 10px;\n  z-index: 11;\n  color: #333333;\n  background-color: rgba(240, 240, 240, 0.9);\n  border-radius: 0px 5px 5px 0px;\n  box-shadow: 3px 3px 5px #888888;\n  overflow-x: hidden;\n  overflow-y: auto;\n  -webkit-transition: left 0.5s ease;\n  transition: left 0.5s ease;\n}\n.care-tips .side-panel.open[data-v-3f20547b] {\n    left: 0px;\n}\n.care-tips .side-panel .search-container[data-v-3f20547b] {\n    width: 400px;\n    max-width: 100%;\n    margin: auto;\n}\n.care-tips .side-panel .search-container .search-item[data-v-3f20547b] {\n      margin: 5px;\n      font-size: 1.1em;\n}\n.care-tips .side-panel .search-container .search-item input[data-v-3f20547b] {\n        padding: 5px;\n        width: 100%;\n}\n.care-tips .side-panel .search-container .search-item select[data-v-3f20547b] {\n        padding: 5px;\n        width: 100%;\n}\n.care-tips .side-panel .search-container .search-item .search-label[data-v-3f20547b] {\n        padding: 5px;\n}\n.care-tips .tab-bar[data-v-3f20547b] {\n  position: fixed;\n  left: 0px;\n  bottom: 0px;\n  width: 100%;\n  height: 60px;\n  z-index: 9;\n  background-color: rgba(240, 240, 240, 0.9);\n  box-shadow: 0px 0px 5px #888888;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.care-tips .tab-bar .tab-bt-container[data-v-3f20547b] {\n    display: flex;\n    overflow-x: auto;\n    padding: 10px;\n}\n.care-tips .tab-bt[data-v-3f20547b] {\n  text-align: center;\n  min-width: 110px;\n  cursor: pointer;\n  padding: 5px 10px;\n  background-color: #ffffff;\n  color: #555555;\n  border: 1px solid #555555;\n  border-radius: 5px;\n  margin: 0px 10px;\n}\n.care-tips .tab-bt[data-v-3f20547b]:hover {\n    color: #888888;\n    border: 1px solid #888888;\n}\n.care-tips .tab-bt.on[data-v-3f20547b] {\n    color: #ff5555;\n    border: 1px solid #ff5555;\n}\n.user-view[data-v-3f20547b] {\n  width: 1024px;\n  max-width: 100%;\n  padding: 10px;\n  margin: auto;\n  font-size: 1.1em;\n}\n.user-view .user-box[data-v-3f20547b] {\n    border-radius: 5px;\n    width: 800px;\n    max-width: 100%;\n    padding: 10px;\n    margin: auto;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-wrap: wrap;\n}\n.user-view .user-box .user-photo[data-v-3f20547b] {\n      width: 250px;\n      height: 250px;\n      border-radius: 50%;\n      object-fit: cover;\n      padding: 10px;\n}\n.user-view .user-box .user-info[data-v-3f20547b] {\n      flex-grow: 1;\n}\n.user-view .user-box .user-info .info-head[data-v-3f20547b] {\n        padding: 10px;\n        border-bottom: 1px solid #dddddd;\n}\n.user-view .user-box .user-info .info-desc[data-v-3f20547b] {\n        padding: 10px;\n        white-space: pre-wrap;\n}\n.user-view .contact-box[data-v-3f20547b] {\n    color: #333333;\n}\n.user-view .contact-box li[data-v-3f20547b] {\n      padding: 5px;\n}\n.user-view .contact-box .contact-item[data-v-3f20547b] {\n      display: inline-block;\n}\n.user-view .contact-box .contact-info[data-v-3f20547b] {\n      display: inline-block;\n}\n", ""]);

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/care-calculator.vue?vue&type=style&index=0&id=6a0cf85c&lang=scss&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/care-calculator.vue?vue&type=style&index=0&id=6a0cf85c&lang=scss&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib??vue-loader-options!./care-calculator.vue?vue&type=style&index=0&id=6a0cf85c&lang=scss&scoped=true */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/care-calculator.vue?vue&type=style&index=0&id=6a0cf85c&lang=scss&scoped=true");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/care-service-selection.vue?vue&type=style&index=0&id=35388ed4&lang=scss&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/care-service-selection.vue?vue&type=style&index=0&id=35388ed4&lang=scss&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib??vue-loader-options!./care-service-selection.vue?vue&type=style&index=0&id=35388ed4&lang=scss&scoped=true */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/care-service-selection.vue?vue&type=style&index=0&id=35388ed4&lang=scss&scoped=true");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/case-editor.vue?vue&type=style&index=0&id=84ab2184&lang=scss&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/case-editor.vue?vue&type=style&index=0&id=84ab2184&lang=scss&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib??vue-loader-options!./case-editor.vue?vue&type=style&index=0&id=84ab2184&lang=scss&scoped=true */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/case-editor.vue?vue&type=style&index=0&id=84ab2184&lang=scss&scoped=true");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/case-list.vue?vue&type=style&index=0&id=95bdcfa2&lang=scss&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/case-list.vue?vue&type=style&index=0&id=95bdcfa2&lang=scss&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib??vue-loader-options!./case-list.vue?vue&type=style&index=0&id=95bdcfa2&lang=scss&scoped=true */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/case-list.vue?vue&type=style&index=0&id=95bdcfa2&lang=scss&scoped=true");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/case-view.vue?vue&type=style&index=0&id=a7997294&lang=scss&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/case-view.vue?vue&type=style&index=0&id=a7997294&lang=scss&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib??vue-loader-options!./case-view.vue?vue&type=style&index=0&id=a7997294&lang=scss&scoped=true */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/case-view.vue?vue&type=style&index=0&id=a7997294&lang=scss&scoped=true");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/login-panel.vue?vue&type=style&index=0&id=16f2f798&lang=scss&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/login-panel.vue?vue&type=style&index=0&id=16f2f798&lang=scss&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib??vue-loader-options!./login-panel.vue?vue&type=style&index=0&id=16f2f798&lang=scss&scoped=true */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/login-panel.vue?vue&type=style&index=0&id=16f2f798&lang=scss&scoped=true");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/main-page.vue?vue&type=style&index=0&id=a22aad92&lang=scss&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/main-page.vue?vue&type=style&index=0&id=a22aad92&lang=scss&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib??vue-loader-options!./main-page.vue?vue&type=style&index=0&id=a22aad92&lang=scss&scoped=true */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/main-page.vue?vue&type=style&index=0&id=a22aad92&lang=scss&scoped=true");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/profession.vue?vue&type=style&index=0&id=2ab0df18&lang=scss&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/profession.vue?vue&type=style&index=0&id=2ab0df18&lang=scss&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib??vue-loader-options!./profession.vue?vue&type=style&index=0&id=2ab0df18&lang=scss&scoped=true */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/profession.vue?vue&type=style&index=0&id=2ab0df18&lang=scss&scoped=true");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/solution-editor.vue?vue&type=style&index=0&id=472eb156&lang=scss&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/solution-editor.vue?vue&type=style&index=0&id=472eb156&lang=scss&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib??vue-loader-options!./solution-editor.vue?vue&type=style&index=0&id=472eb156&lang=scss&scoped=true */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/solution-editor.vue?vue&type=style&index=0&id=472eb156&lang=scss&scoped=true");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/solution-list.vue?vue&type=style&index=0&id=8d272bf4&lang=scss&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/solution-list.vue?vue&type=style&index=0&id=8d272bf4&lang=scss&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib??vue-loader-options!./solution-list.vue?vue&type=style&index=0&id=8d272bf4&lang=scss&scoped=true */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/solution-list.vue?vue&type=style&index=0&id=8d272bf4&lang=scss&scoped=true");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/solution-view.vue?vue&type=style&index=0&id=9f02cee6&lang=scss&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/solution-view.vue?vue&type=style&index=0&id=9f02cee6&lang=scss&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib??vue-loader-options!./solution-view.vue?vue&type=style&index=0&id=9f02cee6&lang=scss&scoped=true */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/solution-view.vue?vue&type=style&index=0&id=9f02cee6&lang=scss&scoped=true");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/user-info-editor.vue?vue&type=style&index=0&id=ef839ef4&lang=scss&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/user-info-editor.vue?vue&type=style&index=0&id=ef839ef4&lang=scss&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib??vue-loader-options!./user-info-editor.vue?vue&type=style&index=0&id=ef839ef4&lang=scss&scoped=true */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/user-info-editor.vue?vue&type=style&index=0&id=ef839ef4&lang=scss&scoped=true");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/user-list.vue?vue&type=style&index=0&id=480e25f4&lang=scss&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/user-list.vue?vue&type=style&index=0&id=480e25f4&lang=scss&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib??vue-loader-options!./user-list.vue?vue&type=style&index=0&id=480e25f4&lang=scss&scoped=true */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/user-list.vue?vue&type=style&index=0&id=480e25f4&lang=scss&scoped=true");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/user-view.vue?vue&type=style&index=0&id=3f20547b&lang=scss&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/user-view.vue?vue&type=style&index=0&id=3f20547b&lang=scss&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib??vue-loader-options!./user-view.vue?vue&type=style&index=0&id=3f20547b&lang=scss&scoped=true */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/user-view.vue?vue&type=style&index=0&id=3f20547b&lang=scss&scoped=true");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/care-calculator.vue?vue&type=template&id=6a0cf85c&scoped=true&lang=html":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/care-calculator.vue?vue&type=template&id=6a0cf85c&scoped=true&lang=html ***!
  \***********************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticClass: "care-calculator" },
    [
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
        _c("div", { staticClass: "used-title" }, [_vm._v("先前已使用額度")]),
        _vm._v(" "),
        _c("div", { staticClass: "option-container" }, [
          _c("div", { staticClass: "price-option" }, [
            _vm._v("\r\n\t\t\t\tB、C碼"),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.usedBC,
                  expression: "usedBC"
                }
              ],
              attrs: { type: "number", min: "0" },
              domProps: { value: _vm.usedBC },
              on: {
                change: function($event) {
                  _vm.UpdatePrice()
                },
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.usedBC = $event.target.value
                }
              }
            }),
            _vm._v("元\r\n\t\t\t")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "price-option" }, [
            _vm._v("\r\n\t\t\t\tD碼"),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.usedD,
                  expression: "usedD"
                }
              ],
              attrs: { type: "number", min: "0" },
              domProps: { value: _vm.usedD },
              on: {
                change: function($event) {
                  _vm.UpdatePrice()
                },
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.usedD = $event.target.value
                }
              }
            }),
            _vm._v("元\r\n\t\t\t")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "price-option" }, [
            _vm._v("\r\n\t\t\t\tE、F碼"),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.usedEF,
                  expression: "usedEF"
                }
              ],
              attrs: { type: "number", min: "0" },
              domProps: { value: _vm.usedEF },
              on: {
                change: function($event) {
                  _vm.UpdatePrice()
                },
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.usedEF = $event.target.value
                }
              }
            }),
            _vm._v("元\r\n\t\t\t")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "price-option" }, [
            _vm._v("\r\n\t\t\t\tG碼"),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.usedG,
                  expression: "usedG"
                }
              ],
              attrs: { type: "number", min: "0" },
              domProps: { value: _vm.usedG },
              on: {
                change: function($event) {
                  _vm.UpdatePrice()
                },
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.usedG = $event.target.value
                }
              }
            }),
            _vm._v("元\r\n\t\t\t")
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
          _c("div", { staticClass: "price-type" }, [
            _vm._v("輔具/設施租賃(月)")
          ]),
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
          [
            _vm._v(
              "剩餘額度僅可支持租賃補助 " + _vm._s(_vm.rentMonth) + " 個月"
            )
          ]
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
        _c("div", { staticClass: "input-bt-container" }, [
          _c(
            "div",
            {
              staticClass: "input-bt",
              on: {
                click: function($event) {
                  _vm.openInputPanel = true
                }
              }
            },
            [_vm._v("新增服務")]
          ),
          _vm._v(" "),
          _vm.openDetail == false
            ? _c(
                "div",
                {
                  staticClass: "input-bt",
                  on: {
                    click: function($event) {
                      _vm.ToggleDetail()
                    }
                  }
                },
                [_vm._v("細節展開")]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.openDetail == true
            ? _c(
                "div",
                {
                  staticClass: "input-bt",
                  on: {
                    click: function($event) {
                      _vm.ToggleDetail()
                    }
                  }
                },
                [_vm._v("細節關閉")]
              )
            : _vm._e(),
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
          )
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.openDetail,
                expression: "openDetail"
              }
            ]
          },
          [
            _c("a", { attrs: { name: "openDetail" } }),
            _vm._v(" "),
            _c("div", { staticClass: "price-summary" }, [
              _c("div", { staticClass: "sub-header" }, [_vm._v("服務金額")]),
              _vm._v(" "),
              _c("div", { staticClass: "price-category cat-A" }, [
                _vm._v(
                  "\r\n\t\t\t\t\tA碼: " +
                    _vm._s(_vm.price["A"].total) +
                    " 元\r\n\t\t\t\t"
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "price-category cat-B" }, [
                _vm._v(
                  "\r\n\t\t\t\t\tB碼: " +
                    _vm._s(_vm.price["B"].total) +
                    " 元\r\n\t\t\t\t"
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "price-category cat-C" }, [
                _vm._v(
                  "\r\n\t\t\t\t\tC碼: " +
                    _vm._s(_vm.price["C"].total) +
                    " 元\r\n\t\t\t\t"
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "price-category cat-D" }, [
                _vm._v(
                  "\r\n\t\t\t\t\tD碼: " +
                    _vm._s(_vm.price["D"].total) +
                    " 元\r\n\t\t\t\t"
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "price-category cat-E" }, [
                _vm._v(
                  "\r\n\t\t\t\t\tE碼(租賃): " +
                    _vm._s(_vm.price["E-Rent"].total) +
                    " 元\r\n\t\t\t\t"
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "price-category cat-E" }, [
                _vm._v(
                  "\r\n\t\t\t\t\tE碼(購買): " +
                    _vm._s(_vm.price["E-Buy"].total) +
                    " 元\r\n\t\t\t\t"
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "price-category cat-F" }, [
                _vm._v(
                  "\r\n\t\t\t\t\tF碼(租賃): " +
                    _vm._s(_vm.price["F-Rent"].total) +
                    " 元\r\n\t\t\t\t"
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "price-category cat-F" }, [
                _vm._v(
                  "\r\n\t\t\t\t\tF碼(購買): " +
                    _vm._s(_vm.price["F-Buy"].total) +
                    " 元\r\n\t\t\t\t"
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "price-category cat-G" }, [
                _vm._v(
                  "\r\n\t\t\t\t\tG碼: " +
                    _vm._s(_vm.price["G"].total) +
                    " 元\r\n\t\t\t\t"
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "price-summary" }, [
              _c("div", { staticClass: "sub-header" }, [_vm._v("補助金額")]),
              _vm._v(" "),
              _vm.header
                ? _c("div", [
                    _c("div", { staticClass: "price-limit" }, [
                      _vm._v(
                        "B+C碼可用額度: " +
                          _vm._s(
                            Math.max(
                              0,
                              _vm.header.payment[0].pay[_vm.careLevel] -
                                _vm.usedBC
                            )
                          ) +
                          " 元/月"
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "price-limit" }, [
                      _vm._v(
                        "D碼可用額度: " +
                          _vm._s(
                            Math.max(
                              0,
                              _vm.header.payment[
                                parseInt(_vm.transportLevel) + 1
                              ].pay[_vm.careLevel] - _vm.usedD
                            )
                          ) +
                          " 元/月"
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "price-limit" }, [
                      _vm._v(
                        "E+F碼可用額度: " +
                          _vm._s(
                            Math.max(
                              0,
                              _vm.header.payment[5].pay[_vm.careLevel] -
                                _vm.usedEF
                            )
                          ) +
                          " 元/3年"
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "price-limit" }, [
                      _vm._v(
                        "G碼可用額度: " +
                          _vm._s(
                            Math.max(
                              0,
                              _vm.header.payment[6].pay[_vm.careLevel] -
                                _vm.usedG
                            )
                          ) +
                          " 元/年"
                      )
                    ])
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c("div", { staticClass: "price-category cat-A" }, [
                _vm._v(
                  "\r\n\t\t\t\t\tA碼: " +
                    _vm._s(_vm.price["A"].gov) +
                    " 元\r\n\t\t\t\t"
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "price-category cat-B" }, [
                _vm._v(
                  "\r\n\t\t\t\t\tB碼: " +
                    _vm._s(_vm.price["B"].gov) +
                    " 元\r\n\t\t\t\t"
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "price-category cat-C" }, [
                _vm._v(
                  "\r\n\t\t\t\t\tC碼: " +
                    _vm._s(_vm.price["C"].gov) +
                    " 元\r\n\t\t\t\t"
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "price-category cat-D" }, [
                _vm._v(
                  "\r\n\t\t\t\t\tD碼: " +
                    _vm._s(_vm.price["D"].gov) +
                    " 元\r\n\t\t\t\t"
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "price-category cat-E" }, [
                _vm._v(
                  "\r\n\t\t\t\t\tE碼(租賃): " +
                    _vm._s(_vm.price["E-Rent"].gov) +
                    " 元\r\n\t\t\t\t"
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "price-category cat-E" }, [
                _vm._v(
                  "\r\n\t\t\t\t\tE碼(購買): " +
                    _vm._s(_vm.price["E-Buy"].gov) +
                    " 元\r\n\t\t\t\t"
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "price-category cat-F" }, [
                _vm._v(
                  "\r\n\t\t\t\t\tF碼(租賃): " +
                    _vm._s(_vm.price["F-Rent"].gov) +
                    " 元\r\n\t\t\t\t"
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "price-category cat-F" }, [
                _vm._v(
                  "\r\n\t\t\t\t\tF碼(購買): " +
                    _vm._s(_vm.price["F-Buy"].gov) +
                    " 元\r\n\t\t\t\t"
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "price-category cat-G" }, [
                _vm._v(
                  "\r\n\t\t\t\t\tG碼: " +
                    _vm._s(_vm.price["G"].gov) +
                    " 元\r\n\t\t\t\t"
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "price-summary" }, [
              _c("div", { staticClass: "sub-header" }, [_vm._v("自費金額")]),
              _vm._v(" "),
              _vm.header
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
                            _vm.header.payment[parseInt(_vm.transportLevel) + 1]
                              .rate[_vm.identity]
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
                  "\r\n\t\t\t\t\tA碼: " +
                    _vm._s(_vm.price["A"].own) +
                    " 元\r\n\t\t\t\t"
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "price-category cat-B" }, [
                _vm._v(
                  "\r\n\t\t\t\t\tB碼: " +
                    _vm._s(_vm.price["B"].own) +
                    " 元\r\n\t\t\t\t"
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "price-category cat-C" }, [
                _vm._v(
                  "\r\n\t\t\t\t\tC碼: " +
                    _vm._s(_vm.price["C"].own) +
                    " 元\r\n\t\t\t\t"
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "price-category cat-D" }, [
                _vm._v(
                  "\r\n\t\t\t\t\tD碼: " +
                    _vm._s(_vm.price["D"].own) +
                    " 元\r\n\t\t\t\t"
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "price-category cat-E" }, [
                _vm._v(
                  "\r\n\t\t\t\t\tE碼(租賃): " +
                    _vm._s(_vm.price["E-Rent"].own) +
                    " 元\r\n\t\t\t\t"
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "price-category cat-E" }, [
                _vm._v(
                  "\r\n\t\t\t\t\tE碼(購買): " +
                    _vm._s(_vm.price["E-Buy"].own) +
                    " 元\r\n\t\t\t\t"
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "price-category cat-F" }, [
                _vm._v(
                  "\r\n\t\t\t\t\tF碼(租賃): " +
                    _vm._s(_vm.price["F-Rent"].own) +
                    " 元\r\n\t\t\t\t"
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "price-category cat-F" }, [
                _vm._v(
                  "\r\n\t\t\t\t\tF碼(購買): " +
                    _vm._s(_vm.price["F-Buy"].own) +
                    " 元\r\n\t\t\t\t"
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "price-category cat-G" }, [
                _vm._v(
                  "\r\n\t\t\t\t\tG碼: " +
                    _vm._s(_vm.price["G"].own) +
                    " 元\r\n\t\t\t\t"
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "price-category cat-O" }, [
                _vm._v(
                  "\r\n\t\t\t\t\t自費服務: " +
                    _vm._s(_vm.price["O"].own) +
                    " 元\r\n\t\t\t\t"
                )
              ])
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "service-list" }, [
        _c("div", { staticClass: "comp-header" }, [_vm._v("服務套餐")]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "service-container" },
          [
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
                  [
                    _vm._v(
                      "原民區或離島價格: " + _vm._s(item.priceRemote) + " 元"
                    )
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "item-attr" }, [
                  _vm._v("數量: " + _vm._s(item.num))
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
                  [_vm._v("總價: " + _vm._s(item.price * item.num) + " 元")]
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
                  [
                    _vm._v(
                      "總價: " + _vm._s(item.priceRemote * item.num) + " 元"
                    )
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "item-bt-container" }, [
                  _c(
                    "div",
                    {
                      staticClass: "item-bt",
                      on: {
                        click: function($event) {
                          _vm.ModifyItem("A", i)
                        }
                      }
                    },
                    [_vm._v("修改")]
                  ),
                  _vm._v(" "),
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
                  [
                    _vm._v(
                      "原民區或離島價格: " + _vm._s(item.priceRemote) + " 元"
                    )
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "item-attr" }, [
                  _vm._v("數量: " + _vm._s(item.num))
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
                  [_vm._v("總價: " + _vm._s(item.price * item.num) + " 元")]
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
                  [
                    _vm._v(
                      "總價: " + _vm._s(item.priceRemote * item.num) + " 元"
                    )
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "item-bt-container" }, [
                  _c(
                    "div",
                    {
                      staticClass: "item-bt",
                      on: {
                        click: function($event) {
                          _vm.ModifyItem("B", i)
                        }
                      }
                    },
                    [_vm._v("修改")]
                  ),
                  _vm._v(" "),
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
                  [
                    _vm._v(
                      "原民區或離島價格: " + _vm._s(item.priceRemote) + " 元"
                    )
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "item-attr" }, [
                  _vm._v("數量: " + _vm._s(item.num))
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
                  [_vm._v("總價: " + _vm._s(item.price * item.num) + " 元")]
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
                  [
                    _vm._v(
                      "總價: " + _vm._s(item.priceRemote * item.num) + " 元"
                    )
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "item-bt-container" }, [
                  _c(
                    "div",
                    {
                      staticClass: "item-bt",
                      on: {
                        click: function($event) {
                          _vm.ModifyItem("C", i)
                        }
                      }
                    },
                    [_vm._v("修改")]
                  ),
                  _vm._v(" "),
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
                          _vm.ModifyItem("D", i)
                        }
                      }
                    },
                    [_vm._v("修改")]
                  ),
                  _vm._v(" "),
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
                          _vm.ModifyItem("E", i)
                        }
                      }
                    },
                    [_vm._v("修改")]
                  ),
                  _vm._v(" "),
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
                          _vm.ModifyItem("F", i)
                        }
                      }
                    },
                    [_vm._v("修改")]
                  ),
                  _vm._v(" "),
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
                  [
                    _vm._v(
                      "原民區或離島價格: " + _vm._s(item.priceRemote) + " 元"
                    )
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "item-attr" }, [
                  _vm._v("數量: " + _vm._s(item.num))
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
                  [_vm._v("總價: " + _vm._s(item.price * item.num) + " 元")]
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
                  [
                    _vm._v(
                      "總價: " + _vm._s(item.priceRemote * item.num) + " 元"
                    )
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "item-bt-container" }, [
                  _c(
                    "div",
                    {
                      staticClass: "item-bt",
                      on: {
                        click: function($event) {
                          _vm.ModifyItem("G", i)
                        }
                      }
                    },
                    [_vm._v("修改")]
                  ),
                  _vm._v(" "),
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
            }),
            _vm._v(" "),
            _vm._l(_vm.items["O"], function(item, i) {
              return _c("div", { staticClass: "service-item cat-O half-w" }, [
                _c("div", { staticClass: "item-title" }, [
                  _vm._v(_vm._s(item.code) + " " + _vm._s(item.name))
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "item-attr" }, [
                  _vm._v("價格: " + _vm._s(item.price) + " 元")
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
                          _vm.ModifyItem("O", i)
                        }
                      }
                    },
                    [_vm._v("修改")]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "item-bt",
                      on: {
                        click: function($event) {
                          _vm.DeleteItem("O", i)
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
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "tab-bar" }, [
        _c("div", { staticClass: "tab-bt-container" }, [
          _c(
            "div",
            {
              staticClass: "tab-bt",
              on: {
                click: function($event) {
                  _vm.openInputPanel = true
                }
              }
            },
            [_vm._v("新增服務")]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "tab-bt",
              class: { on: _vm.openDetail },
              on: {
                click: function($event) {
                  _vm.ToggleDetail()
                }
              }
            },
            [_vm._v("細節展開")]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "tab-bt",
              on: {
                click: function($event) {
                  _vm.ClearService()
                }
              }
            },
            [_vm._v("全部重設")]
          )
        ])
      ]),
      _vm._v(" "),
      _c("transition", { attrs: { name: "fade" } }, [
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.openInputPanel,
                expression: "openInputPanel"
              }
            ],
            staticClass: "input-panel"
          },
          [
            _c(
              "div",
              { staticClass: "input-area" },
              [
                _c(
                  "div",
                  {
                    staticClass: "close-bt",
                    on: {
                      click: function($event) {
                        _vm.ClearModify()
                      }
                    }
                  },
                  [_vm._v("X")]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "panel-title" }, [_vm._v("新增服務")]),
                _vm._v(" "),
                _c("care-service-selection", {
                  ref: "serviceSelect",
                  attrs: { calcPrice: "1" }
                }),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: !_vm.modify,
                        expression: "!modify"
                      }
                    ],
                    staticClass: "input-bt",
                    on: {
                      click: function($event) {
                        _vm.AddService()
                      }
                    }
                  },
                  [_vm._v("新增")]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: !_vm.modify,
                        expression: "!modify"
                      }
                    ],
                    staticClass: "input-bt",
                    on: {
                      click: function($event) {
                        _vm.ClearModify()
                      }
                    }
                  },
                  [_vm._v("取消")]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.modify,
                        expression: "modify"
                      }
                    ],
                    staticClass: "input-bt",
                    on: {
                      click: function($event) {
                        _vm.DoModify()
                      }
                    }
                  },
                  [_vm._v("修改")]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.modify,
                        expression: "modify"
                      }
                    ],
                    staticClass: "input-bt",
                    on: {
                      click: function($event) {
                        _vm.ClearModify()
                      }
                    }
                  },
                  [_vm._v("取消修改")]
                )
              ],
              1
            )
          ]
        )
      ])
    ],
    1
  )
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/care-service-selection.vue?vue&type=template&id=35388ed4&scoped=true&lang=html":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/care-service-selection.vue?vue&type=template&id=35388ed4&scoped=true&lang=html ***!
  \******************************************************************************************************************************************************************************************************************************/
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
    _vm.serviceCode
      ? _c("div", { staticClass: "care-service-selection" }, [
          _c("div", { staticClass: "input-item" }, [
            _c("div", { staticClass: "input-label" }, [_vm._v("主類")]),
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
              _vm._l(_vm.serviceCode.service, function(s, i) {
                return _c("option", { domProps: { value: i } }, [
                  _vm._v(_vm._s(s.code) + " " + _vm._s(s.name))
                ])
              })
            )
          ]),
          _vm._v(" "),
          _vm.serviceCode.service[_vm.mainCategory].items.length > 1
            ? _c("div", { staticClass: "input-item" }, [
                _c("div", { staticClass: "input-label" }, [_vm._v("子類")]),
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
                  _vm._l(
                    _vm.serviceCode.service[_vm.mainCategory].items,
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
          _vm.mainCategory != 7
            ? _c("div", { staticClass: "input-item" }, [
                _c("div", { staticClass: "input-label" }, [_vm._v("項目")]),
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
                    _vm.serviceCode.service[_vm.mainCategory].items[
                      _vm.subCategory
                    ].items,
                    function(s, i) {
                      return _c("option", { domProps: { value: i } }, [
                        _vm._v(_vm._s(s.code) + " " + _vm._s(s.name))
                      ])
                    }
                  )
                ),
                _vm._v(" "),
                _c("img", {
                  staticClass: "filter-icon",
                  attrs: { src: "/static/image/search-icon.png" },
                  on: {
                    click: function($event) {
                      _vm.OpenFilterPanel()
                    }
                  }
                })
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.calcPrice == "1"
            ? _c("div", [
                _c("div", { staticClass: "input-item" }, [
                  _vm.mainCategory == 4 || _vm.mainCategory == 5
                    ? _c("div", { staticClass: "item" }, [
                        _c("div", { staticClass: "input-label" }, [
                          _vm._v("方式")
                        ]),
                        _vm._v(" "),
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
                                    expression:
                                      "itemInfo.payForBuy !== '不適用' "
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
                                    expression:
                                      "itemInfo.payForRent !== '不適用' "
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
                  _vm.mainCategory == 7
                    ? _c("div", { staticClass: "item" }, [
                        _c("div", { staticClass: "input-label" }, [
                          _vm._v("服務名稱")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.customName,
                              expression: "customName"
                            }
                          ],
                          attrs: { type: "text" },
                          domProps: { value: _vm.customName },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.customName = $event.target.value
                            }
                          }
                        })
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.mainCategory == 3 ||
                  _vm.mainCategory == 4 ||
                  _vm.mainCategory == 5 ||
                  _vm.mainCategory == 7
                    ? _c("div", { staticClass: "item" }, [
                        _c("div", { staticClass: "input-label" }, [
                          _vm._v("價格")
                        ]),
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
                  _c("div", { staticClass: "item" }, [
                    _c("div", { staticClass: "input-label" }, [_vm._v("數量")]),
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
                  ])
                ])
              ])
            : _vm._e()
        ])
      : _vm._e(),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.openFilterPanel,
            expression: "openFilterPanel"
          }
        ],
        staticClass: "popup-panel"
      },
      [
        _c("div", { staticClass: "input-area" }, [
          _c(
            "div",
            {
              staticClass: "close-bt",
              on: {
                click: function($event) {
                  _vm.CloseFilterPanel()
                }
              }
            },
            [_vm._v("X")]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "input-item" }, [
            _c("div", { staticClass: "input-label" }, [_vm._v("篩選")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.filterInput,
                  expression: "filterInput"
                }
              ],
              ref: "filterInput",
              attrs: { type: "text" },
              domProps: { value: _vm.filterInput },
              on: {
                keyup: function($event) {
                  _vm.UpdateFilterList()
                },
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.filterInput = $event.target.value
                }
              }
            })
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "filter-list" },
            _vm._l(_vm.filterList, function(mainCat) {
              return mainCat.num > 0
                ? _c(
                    "div",
                    { staticClass: "filter-category" },
                    _vm._l(mainCat.items, function(subCat) {
                      return subCat.items.length > 0
                        ? _c(
                            "div",
                            { staticClass: "filter-problem" },
                            _vm._l(subCat.items, function(item) {
                              return _c(
                                "div",
                                {
                                  staticClass: "filter-item",
                                  on: {
                                    click: function($event) {
                                      _vm.SelectFilterItem(
                                        item.mainCat,
                                        item.subCat,
                                        item.itemIndex
                                      )
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\r\n\t\t\t\t\t\t\t" +
                                      _vm._s(item.code) +
                                      " - " +
                                      _vm._s(item.name) +
                                      "\r\n\t\t\t\t\t\t"
                                  )
                                ]
                              )
                            })
                          )
                        : _vm._e()
                    })
                  )
                : _vm._e()
            })
          )
        ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/case-editor.vue?vue&type=template&id=84ab2184&scoped=true&lang=html":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/case-editor.vue?vue&type=template&id=84ab2184&scoped=true&lang=html ***!
  \*******************************************************************************************************************************************************************************************************************/
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
    _c(
      "div",
      { staticClass: "case-editor" },
      [
        _c("div", { staticClass: "case-info" }, [
          _c("a", { attrs: { name: "caseDesc" } }),
          _vm._v(" "),
          _c("div", { staticClass: "cat-header" }, [_vm._v("新增案例")]),
          _vm._v(" "),
          _c("textarea", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.caseInfo.desc,
                expression: "caseInfo.desc"
              }
            ],
            attrs: { placeholder: "請簡單描述案例之生活背景與問題摘要" },
            domProps: { value: _vm.caseInfo.desc },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.caseInfo, "desc", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "case-info" }, [
          _c("a", { attrs: { name: "caseProblem" } }),
          _vm._v(" "),
          _c("div", { staticClass: "cat-header" }, [_vm._v("問題列表")]),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "input-bt",
              on: {
                click: function($event) {
                  _vm.openInput = true
                }
              }
            },
            [_vm._v("新增問題")]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "problem-list" },
            _vm._l(["D1", "D2", "D3", "D4"], function(cat) {
              return _c("div", { staticClass: "problem-cat" }, [
                _vm.omaha != null
                  ? _c("div", { staticClass: "problem-header" }, [
                      _vm._v(
                        _vm._s(_vm.omaha[cat].name) +
                          " (" +
                          _vm._s(_vm.caseInfo.problem[cat].length) +
                          "項)"
                      )
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "problem-container" },
                  _vm._l(_vm.caseInfo.problem[cat], function(p, i) {
                    return _c(
                      "div",
                      {
                        staticClass: "problem-item one-third-w",
                        class: "cat-" + cat
                      },
                      [
                        _c("div", { staticClass: "problem-title" }, [
                          _vm._v(_vm._s(p.name))
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "problem-body" }, [
                          _c("div", {
                            staticClass: "problem-desc",
                            domProps: { innerHTML: _vm._s(p.desc) }
                          }),
                          _vm._v(" "),
                          _c("div", { staticClass: "item-bt-container" }, [
                            _c(
                              "div",
                              {
                                staticClass: "item-bt",
                                on: {
                                  click: function($event) {
                                    _vm.ModifyItem(cat, i)
                                  }
                                }
                              },
                              [_vm._v("修改")]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass: "item-bt",
                                on: {
                                  click: function($event) {
                                    _vm.DeleteItem(cat, i)
                                  }
                                }
                              },
                              [_vm._v("刪除")]
                            )
                          ])
                        ])
                      ]
                    )
                  })
                )
              ])
            })
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "case-info" }, [
          _c("div", { staticClass: "separator" }, [_vm._v(" ")]),
          _vm._v(" "),
          _c("div", { staticClass: "remark" }, [
            _c("a", { attrs: { name: "caseRemark" } }),
            _vm._v(
              "\r\n\t\t\t\t*為協助照護經驗傳承與跨專業交流，您所分享的案例皆為公開可搜尋的資訊。請勿將實際個案的隱私資訊寫入案例中，以免侵犯個案隱私權。\r\n\t\t\t\t"
            ),
            _c("div", { staticClass: "remark-check" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.finalCheck,
                    expression: "finalCheck"
                  }
                ],
                attrs: { type: "checkbox" },
                domProps: {
                  checked: Array.isArray(_vm.finalCheck)
                    ? _vm._i(_vm.finalCheck, null) > -1
                    : _vm.finalCheck
                },
                on: {
                  change: function($event) {
                    var $$a = _vm.finalCheck,
                      $$el = $event.target,
                      $$c = $$el.checked ? true : false
                    if (Array.isArray($$a)) {
                      var $$v = null,
                        $$i = _vm._i($$a, $$v)
                      if ($$el.checked) {
                        $$i < 0 && (_vm.finalCheck = $$a.concat([$$v]))
                      } else {
                        $$i > -1 &&
                          (_vm.finalCheck = $$a
                            .slice(0, $$i)
                            .concat($$a.slice($$i + 1)))
                      }
                    } else {
                      _vm.finalCheck = $$c
                    }
                  }
                }
              }),
              _vm._v(" 我了解了\r\n\t\t\t\t")
            ])
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "input-bt",
              on: {
                click: function($event) {
                  _vm.SubmitCase()
                }
              }
            },
            [
              _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.action == "create",
                      expression: "action == 'create'"
                    }
                  ]
                },
                [_vm._v("送出案例")]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.action == "edit",
                      expression: "action == 'edit'"
                    }
                  ]
                },
                [_vm._v("完成案例修改")]
              )
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "tab-bar" }, [
          _c("div", { staticClass: "tab-bt-container" }, [
            _c(
              "div",
              {
                staticClass: "tab-bt",
                on: {
                  click: function($event) {
                    _vm.openInput = true
                  }
                }
              },
              [_vm._v("新增問題")]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.action == "create",
                    expression: "action == 'create'"
                  }
                ],
                staticClass: "tab-bt",
                on: {
                  click: function($event) {
                    _vm.SubmitCase()
                  }
                }
              },
              [_vm._v("送出案例")]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.action == "edit",
                    expression: "action == 'edit'"
                  }
                ],
                staticClass: "tab-bt",
                on: {
                  click: function($event) {
                    _vm.SubmitCase()
                  }
                }
              },
              [_vm._v("完成案例修改")]
            )
          ])
        ]),
        _vm._v(" "),
        _c("transition", { attrs: { name: "fade" } }, [
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.openInput,
                  expression: "openInput"
                }
              ],
              staticClass: "input-panel"
            },
            [
              _vm.omaha != null
                ? _c("div", { staticClass: "input-area" }, [
                    _c(
                      "div",
                      {
                        staticClass: "close-bt",
                        on: {
                          click: function($event) {
                            _vm.openInput = false
                          }
                        }
                      },
                      [_vm._v("X")]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: !_vm.modify,
                            expression: "!modify"
                          }
                        ],
                        staticClass: "box-title"
                      },
                      [_vm._v("新增問題")]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.modify,
                            expression: "modify"
                          }
                        ],
                        staticClass: "box-title"
                      },
                      [_vm._v("修改問題")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "input-item" }, [
                      _c("div", { staticClass: "input-label" }, [
                        _vm._v("面向")
                      ]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.selectDomain,
                              expression: "selectDomain"
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
                                _vm.selectDomain = $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              },
                              function($event) {
                                _vm.ChangeDomain()
                              }
                            ]
                          }
                        },
                        [
                          _c("option", { attrs: { value: "D1" } }, [
                            _vm._v(_vm._s(_vm.omaha.D1.name))
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "D2" } }, [
                            _vm._v(_vm._s(_vm.omaha.D2.name))
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "D3" } }, [
                            _vm._v(_vm._s(_vm.omaha.D3.name))
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "D4" } }, [
                            _vm._v(_vm._s(_vm.omaha.D4.name))
                          ])
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "input-item" }, [
                      _c("div", { staticClass: "input-label" }, [
                        _vm._v("問題")
                      ]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.selectProblem,
                              expression: "selectProblem"
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
                                _vm.selectProblem = $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              },
                              function($event) {
                                _vm.ChangeProblem()
                              }
                            ]
                          }
                        },
                        _vm._l(_vm.omaha[_vm.selectDomain].problem, function(
                          p,
                          i
                        ) {
                          return _c("option", { domProps: { value: i } }, [
                            _vm._v(_vm._s(p.cht))
                          ])
                        })
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "input-item" }, [
                      _c("div", { staticClass: "input-label" }, [
                        _vm._v("徵兆")
                      ]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.selectSign,
                              expression: "selectSign"
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
                              _vm.selectSign = $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            }
                          }
                        },
                        _vm._l(
                          _vm.omaha[_vm.selectDomain].problem[_vm.selectProblem]
                            .sign,
                          function(s, i) {
                            return _c("option", { domProps: { value: i } }, [
                              _vm._v(_vm._s(s.cht))
                            ])
                          }
                        )
                      ),
                      _vm._v(" "),
                      _c("img", {
                        staticClass: "filter-icon",
                        attrs: { src: "/static/image/search-icon.png" },
                        on: {
                          click: function($event) {
                            _vm.OpenFilterPanel()
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "input-item" }, [
                      _c("div", { staticClass: "input-label" }, [
                        _vm._v("問題狀況")
                      ]),
                      _vm._v(" "),
                      _c("textarea", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.problemDesc,
                            expression: "problemDesc"
                          }
                        ],
                        attrs: { placeholder: "請簡單描述問題狀況" },
                        domProps: { value: _vm.problemDesc },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.problemDesc = $event.target.value
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: !_vm.modify,
                            expression: "!modify"
                          }
                        ],
                        staticClass: "input-bt",
                        on: {
                          click: function($event) {
                            _vm.AddProblem()
                          }
                        }
                      },
                      [_vm._v("新增")]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: !_vm.modify,
                            expression: "!modify"
                          }
                        ],
                        staticClass: "input-bt",
                        on: {
                          click: function($event) {
                            _vm.openInput = false
                          }
                        }
                      },
                      [_vm._v("取消")]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.modify,
                            expression: "modify"
                          }
                        ],
                        staticClass: "input-bt",
                        on: {
                          click: function($event) {
                            _vm.DoModify()
                          }
                        }
                      },
                      [_vm._v("修改")]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.modify,
                            expression: "modify"
                          }
                        ],
                        staticClass: "input-bt",
                        on: {
                          click: function($event) {
                            _vm.ClearModify()
                          }
                        }
                      },
                      [_vm._v("取消")]
                    )
                  ])
                : _vm._e()
            ]
          )
        ]),
        _vm._v(" "),
        _c("transition", { attrs: { name: "fade" } }, [
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.openFilterPanel,
                  expression: "openFilterPanel"
                }
              ],
              staticClass: "input-panel"
            },
            [
              _c("div", { staticClass: "input-area" }, [
                _c(
                  "div",
                  {
                    staticClass: "close-bt",
                    on: {
                      click: function($event) {
                        _vm.openFilterPanel = false
                      }
                    }
                  },
                  [_vm._v("X")]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "input-item" }, [
                  _c("div", { staticClass: "input-label" }, [_vm._v("篩選")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.filterInput,
                        expression: "filterInput"
                      }
                    ],
                    ref: "filterInput",
                    attrs: { type: "text" },
                    domProps: { value: _vm.filterInput },
                    on: {
                      keyup: function($event) {
                        _vm.UpdateFilterList()
                      },
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.filterInput = $event.target.value
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "filter-list" },
                  _vm._l(_vm.filterList, function(cat) {
                    return cat.num > 0
                      ? _c(
                          "div",
                          { staticClass: "filter-category" },
                          [
                            _c("div", { staticClass: "cat-label" }, [
                              _vm._v(_vm._s(cat.name))
                            ]),
                            _vm._v(" "),
                            _vm._l(cat.problem, function(p, i) {
                              return p.sign.length > 0
                                ? _c(
                                    "div",
                                    { staticClass: "filter-problem" },
                                    [
                                      _c(
                                        "div",
                                        { staticClass: "problem-label" },
                                        [_vm._v(_vm._s(p.cht))]
                                      ),
                                      _vm._v(" "),
                                      _vm._l(p.sign, function(s, j) {
                                        return _c(
                                          "div",
                                          {
                                            staticClass: "filter-item",
                                            on: {
                                              click: function($event) {
                                                _vm.SelectFilterItem(
                                                  cat.id,
                                                  s.pID,
                                                  s.sID
                                                )
                                              }
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "\r\n\t\t\t\t\t\t\t\t\t" +
                                                _vm._s(s.cht) +
                                                "\r\n\t\t\t\t\t\t\t\t"
                                            )
                                          ]
                                        )
                                      })
                                    ],
                                    2
                                  )
                                : _vm._e()
                            })
                          ],
                          2
                        )
                      : _vm._e()
                  })
                )
              ])
            ]
          )
        ]),
        _vm._v(" "),
        _c("transition", { attrs: { name: "fade" } }, [
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.setupUserInfo,
                  expression: "setupUserInfo"
                }
              ],
              staticClass: "input-panel"
            },
            [
              _c(
                "div",
                { staticClass: "input-area" },
                [
                  _c("div", { staticClass: "panel-title" }, [
                    _vm._v("請先輸入您的個人資訊")
                  ]),
                  _vm._v(" "),
                  _c("user-info-editor", { ref: "userInfoEditor" })
                ],
                1
              )
            ]
          )
        ])
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/case-list.vue?vue&type=template&id=95bdcfa2&scoped=true&lang=html":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/case-list.vue?vue&type=template&id=95bdcfa2&scoped=true&lang=html ***!
  \*****************************************************************************************************************************************************************************************************************/
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
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.caseList.length == 0,
            expression: "caseList.length==0"
          }
        ],
        staticClass: "no-result-box"
      },
      [
        _vm._v("\r\n\t\t目前暫無符合條件的案例\r\n\t\t"),
        _vm.emptyAction == 0
          ? _c("div", { staticClass: "center-bt" }, [_vm._v("查無資料")])
          : _c(
              "div",
              {
                staticClass: "center-bt",
                on: {
                  click: function($event) {
                    _vm.CreateCase()
                  }
                }
              },
              [_vm._v("新增案例")]
            )
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "case-list" },
      [
        _c(
          "transition-group",
          { staticStyle: { width: "100%" }, attrs: { name: "create" } },
          _vm._l(_vm.caseList, function(c, i) {
            return _c(
              "div",
              { key: c.id, staticClass: "list-item one-third-w shadow-light" },
              [
                _c("a", { attrs: { href: "/case?case=" + c.id } }, [
                  _c(
                    "div",
                    {
                      staticClass: "owner-info",
                      style: { "background-color": c.user.headColor }
                    },
                    [
                      _c("img", {
                        staticClass: "owner-icon",
                        attrs: { src: c.user.icon }
                      }),
                      _vm._v(
                        "\r\n\t\t\t\t\t\t" +
                          _vm._s(c.user.profession) +
                          " - " +
                          _vm._s(c.user.name) +
                          "\r\n\t\t\t\t\t"
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "domain-statistic" }, [
                    _c("div", { staticClass: "domain-info" }, [
                      _c("div", { staticClass: "domain-icon cat-D1" }),
                      _vm._v(" "),
                      _c("div", { staticClass: "tip cat-D1" }, [
                        _vm._v("環境問題 " + _vm._s(c.D1Num) + " 項")
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "domain-num" }, [
                        _vm._v(_vm._s(c.D1Num))
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "domain-info" }, [
                      _c("div", { staticClass: "domain-icon cat-D2" }),
                      _vm._v(" "),
                      _c("div", { staticClass: "tip cat-D2" }, [
                        _vm._v("心理問題 " + _vm._s(c.D2Num) + " 項")
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "domain-num" }, [
                        _vm._v(_vm._s(c.D2Num))
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "domain-info" }, [
                      _c("div", { staticClass: "domain-icon cat-D3" }),
                      _vm._v(" "),
                      _c("div", { staticClass: "tip cat-D3" }, [
                        _vm._v("生理問題 " + _vm._s(c.D3Num) + " 項")
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "domain-num" }, [
                        _vm._v(_vm._s(c.D3Num))
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "domain-info" }, [
                      _c("div", { staticClass: "domain-icon cat-D4" }),
                      _vm._v(" "),
                      _c("div", { staticClass: "tip cat-D4" }, [
                        _vm._v("行為問題 " + _vm._s(c.D4Num) + " 項")
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "domain-num" }, [
                        _vm._v(_vm._s(c.D4Num))
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "desc" }, [_vm._v(_vm._s(c.desc))]),
                  _vm._v(" "),
                  _c("div", { staticClass: "feedback-statistic" }, [
                    _c("img", {
                      staticClass: "feedback-icon",
                      attrs: { src: "/static/image/like.png" }
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "feedback-num" }, [
                      _vm._v(_vm._s(c.likeNum))
                    ]),
                    _vm._v("\r\n\t\t\t\t\t\t觀看次數"),
                    _c("div", { staticClass: "feedback-num" }, [
                      _vm._v(_vm._s(c.viewNum))
                    ])
                  ])
                ])
              ]
            )
          })
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.noMore == false,
            expression: "noMore==false"
          }
        ],
        staticClass: "load-more",
        on: {
          click: function($event) {
            _vm.LoadMoreList()
          }
        }
      },
      [_vm._v("更多案例 ▼")]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/case-view.vue?vue&type=template&id=a7997294&scoped=true&lang=html":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/case-view.vue?vue&type=template&id=a7997294&scoped=true&lang=html ***!
  \*****************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticClass: "case-view" },
    [
      _vm.caseInfo
        ? _c("div", { staticClass: "feedback-statistic" }, [
            _c("div", { staticClass: "container" }, [
              _vm._v("\r\n\t\t\t版本號: "),
              _c("div", { staticClass: "feedback-num" }, [
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.vIndex,
                        expression: "vIndex"
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
                          _vm.vIndex = $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        },
                        function($event) {
                          _vm.UpdateVersion()
                        }
                      ]
                    }
                  },
                  _vm._l(_vm.caseInfo.info, function(c, i) {
                    return _c("option", { domProps: { value: i } }, [
                      _vm._v(_vm._s(c.version))
                    ])
                  })
                )
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "container clickable",
                on: {
                  click: function($event) {
                    _vm.ToggleLike()
                  }
                }
              },
              [
                _c("img", {
                  staticClass: "feedback-icon",
                  attrs: { src: "/static/image/like.png" }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "feedback-num" }, [
                  _vm._v(_vm._s(_vm.caseInfo.likeNum))
                ])
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "container" }, [
              _vm._v("\r\n\t\t\t解方數"),
              _c("div", { staticClass: "feedback-num" }, [
                _vm._v(_vm._s(_vm.caseInfo.solNum))
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "container" }, [
              _vm._v("\r\n\t\t\t觀看次數"),
              _c("div", { staticClass: "feedback-num" }, [
                _vm._v(_vm._s(_vm.caseInfo.viewNum))
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
                    value: _vm.isMyCase,
                    expression: "isMyCase"
                  }
                ],
                staticClass: "container"
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "action-bt",
                    on: {
                      click: function($event) {
                        _vm.ModifyCase()
                      }
                    }
                  },
                  [_vm._v("修改案例")]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "action-bt",
                    on: {
                      click: function($event) {
                        _vm.DeleteCase()
                      }
                    }
                  },
                  [_vm._v("刪除案例")]
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "action-bt",
                on: {
                  click: function($event) {
                    _vm.RandomCase()
                  }
                }
              },
              [_vm._v("隨機解題")]
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "input-bt",
          on: {
            click: function($event) {
              _vm.ProvideSolution()
            }
          }
        },
        [_vm._v("我要解題")]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "input-bt",
          on: {
            click: function($event) {
              _vm.ViewSolution(_vm.solutionID)
            }
          }
        },
        [_vm._v("觀看解方")]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "case-title" }, [_vm._v("案例簡述")]),
      _vm._v(" "),
      _vm.caseInfo
        ? _c("div", { staticClass: "case-desc" }, [
            _vm._v(_vm._s(_vm.caseInfo.info[_vm.vIndex].desc))
          ])
        : _vm._e(),
      _vm._v(" "),
      _c("div", { staticClass: "case-title" }, [_vm._v("問題列表")]),
      _vm._v(" "),
      _vm._l(["D1", "D2", "D3", "D4"], function(cat) {
        return _c("div", { staticClass: "problem-cat" }, [
          _vm.omaha != null
            ? _c("div", { staticClass: "problem-header" }, [
                _vm._v(
                  _vm._s(_vm.omaha[cat].name) +
                    " (" +
                    _vm._s(_vm.problem[cat].length) +
                    "項)"
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "problem-container" },
            _vm._l(_vm.problem[cat], function(p, i) {
              return _c(
                "div",
                {
                  staticClass: "problem-item one-third-w",
                  class: "cat-" + cat
                },
                [
                  _c("div", { staticClass: "problem-title" }, [
                    _vm._v(_vm._s(p.name))
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "problem-body" }, [
                    _c("div", {
                      staticClass: "problem-desc",
                      domProps: { innerHTML: _vm._s(p.desc) }
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "item-bt-container" }, [
                      _c(
                        "div",
                        {
                          staticClass: "item-bt",
                          on: {
                            click: function($event) {
                              _vm.OpenSolutionPanel(cat, i)
                            }
                          }
                        },
                        [_vm._v("解題")]
                      )
                    ])
                  ])
                ]
              )
            })
          )
        ])
      }),
      _vm._v(" "),
      _c("div", { staticClass: "case-title" }, [_vm._v("分享者簡介")]),
      _vm._v(" "),
      _vm.caseInfo
        ? _c("div", { staticClass: "owner" }, [
            _c(
              "a",
              { attrs: { href: "/user?target=" + _vm.caseInfo.user.id } },
              [
                _c("div", { staticClass: "owner-info" }, [
                  _c("img", {
                    staticClass: "owner-icon",
                    attrs: { src: _vm.caseInfo.user.icon }
                  }),
                  _vm._v(
                    "\r\n\t\t\t\t" +
                      _vm._s(_vm.caseInfo.user.profession) +
                      " - " +
                      _vm._s(_vm.caseInfo.user.name) +
                      "\r\n\t\t\t"
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "owner-desc" }, [
                  _vm._v(_vm._s(_vm.caseInfo.user.desc))
                ])
              ]
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      _c("div", { staticClass: "case-title" }, [_vm._v("留言回饋")]),
      _vm._v(" "),
      _c("div", { staticClass: "message-box" }, [
        _c("textarea", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.sendMessage,
              expression: "sendMessage"
            }
          ],
          attrs: { placeholder: "留言給分享者..." },
          domProps: { value: _vm.sendMessage },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.sendMessage = $event.target.value
            }
          }
        }),
        _vm._v(" "),
        _c("div", { staticClass: "bt-container" }, [
          _c(
            "div",
            {
              staticClass: "bt",
              on: {
                click: function($event) {
                  _vm.SendMessage()
                }
              }
            },
            [_vm._v("送出")]
          )
        ])
      ]),
      _vm._v(" "),
      _vm.caseInfo
        ? _c(
            "div",
            { staticClass: "message-list" },
            [
              _c("a", { attrs: { name: "messageList" } }),
              _vm._v(" "),
              _vm._l(_vm.messageList, function(m, i) {
                return _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value:
                          m.caseVersion ==
                          _vm.caseInfo.info[_vm.vIndex].version,
                        expression:
                          "m.caseVersion == caseInfo.info[vIndex].version"
                      }
                    ],
                    staticClass: "message"
                  },
                  [
                    _c("div", { staticClass: "owner-info" }, [
                      _c("img", {
                        staticClass: "owner-icon",
                        attrs: { src: m.user.icon }
                      }),
                      _vm._v(
                        "\r\n\t\t\t\t" +
                          _vm._s(m.user.profession) +
                          " - " +
                          _vm._s(m.user.name) +
                          "\r\n\t\t\t"
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "message-content" }, [
                      _vm._v(_vm._s(m.message))
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "sub-info" }, [
                      _c("div", { staticClass: "info-item" }, [
                        _vm._v(_vm._s(m.time))
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.user && m.user.id == _vm.user.id,
                              expression: "user && m.user.id == user.id"
                            }
                          ],
                          staticClass: "action-bt",
                          on: {
                            click: function($event) {
                              _vm.DeleteMessage(i)
                            }
                          }
                        },
                        [_vm._v("刪除")]
                      )
                    ])
                  ]
                )
              })
            ],
            2
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "slide-panel",
          class: { open: _vm.status == "InputUserInfo" }
        },
        [
          _c(
            "div",
            { staticClass: "input-area" },
            [
              _c("div", { staticClass: "panel-title" }, [
                _vm._v("請先輸入您的個人資訊")
              ]),
              _vm._v(" "),
              _c("user-info-editor", { ref: "userInfoEditor" })
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "slide-panel",
          class: { open: _vm.status == "ProvideSolution" }
        },
        [
          _c(
            "div",
            {
              staticClass: "panel-title",
              on: {
                click: function($event) {
                  _vm.status = "ViewCase"
                }
              }
            },
            [_vm._v("提供解方")]
          ),
          _vm._v(" "),
          _c("solution-editor", { ref: "solutionEditor" })
        ],
        1
      ),
      _vm._v(" "),
      _c("transition", { attrs: { name: "fade" } }, [
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.status == "SolutionList",
                expression: "status == 'SolutionList'"
              }
            ],
            staticClass: "input-panel",
            on: {
              click: function($event) {
                _vm.openSearchPanel = false
              }
            }
          },
          [
            _c("div", { staticClass: "input-area" }, [
              _c("div", { staticClass: "panel-title" }, [_vm._v("解方列表")]),
              _vm._v(" "),
              _c("div", { staticClass: "bt-container" }, [
                _c(
                  "div",
                  {
                    staticClass: "input-bt",
                    on: {
                      click: function($event) {
                        _vm.ViewCase()
                      }
                    }
                  },
                  [_vm._v("觀看案例")]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "input-bt",
                    on: {
                      click: function($event) {
                        $event.stopPropagation()
                        _vm.openSearchPanel = true
                      }
                    }
                  },
                  [_vm._v("搜尋解方")]
                )
              ]),
              _vm._v(" "),
              _c("div", [_c("solution-list", { ref: "solutionList" })], 1)
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _c("transition", { attrs: { name: "fade" } }, [
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.status == "ViewSolution",
                expression: "status == 'ViewSolution'"
              }
            ],
            staticClass: "input-panel"
          },
          [_c("solution-view", { ref: "caseViewSolution" })],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "tab-bar" }, [
        _c("div", { staticClass: "tab-bt-container" }, [
          _c(
            "div",
            {
              staticClass: "tab-bt",
              class: { on: _vm.status == "ViewCase" },
              on: {
                click: function($event) {
                  _vm.ViewCase()
                }
              }
            },
            [_vm._v("觀看案例")]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "tab-bt",
              class: { on: _vm.status == "ProvideSolution" },
              on: {
                click: function($event) {
                  _vm.ProvideSolution()
                }
              }
            },
            [_vm._v("我要解題")]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "tab-bt",
              class: {
                on: _vm.status == "ViewSolution" || _vm.status == "SolutionList"
              },
              on: {
                click: function($event) {
                  _vm.ViewSolution(_vm.solutionID)
                }
              }
            },
            [_vm._v("觀看解方")]
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "side-panel", class: { open: _vm.openSearchPanel } },
        [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "search-container" }, [
            _c("div", { staticClass: "search-item" }, [
              _c("div", { staticClass: "search-label" }, [_vm._v("排序")]),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.selectSort,
                      expression: "selectSort"
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
                        _vm.selectSort = $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      },
                      function($event) {
                        _vm.SearchSolution()
                      }
                    ]
                  }
                },
                [
                  _c("option", { attrs: { value: "newest" } }, [
                    _vm._v("由新到舊")
                  ]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "oldest" } }, [
                    _vm._v("由舊到新")
                  ]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "likeNum" } }, [
                    _vm._v("最多讚")
                  ]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "viewNum" } }, [
                    _vm._v("最多觀看")
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "search-item" }, [
              _c("div", { staticClass: "search-label" }, [
                _vm._v("解題者專業")
              ]),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.selectProfession,
                      expression: "selectProfession"
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
                        _vm.selectProfession = $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      },
                      function($event) {
                        _vm.SearchSolution()
                      }
                    ]
                  }
                },
                [
                  _c("option", { attrs: { value: "全部" } }, [_vm._v("全部")]),
                  _vm._v(" "),
                  _vm._l(_vm.professions, function(profession) {
                    return _c("option", { domProps: { value: profession } }, [
                      _vm._v(_vm._s(profession))
                    ])
                  })
                ],
                2
              )
            ]),
            _vm._v(" "),
            _vm.caseInfo
              ? _c("div", { staticClass: "search-item" }, [
                  _c("div", { staticClass: "search-label" }, [
                    _vm._v("案例版本")
                  ]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.selectVersion,
                          expression: "selectVersion"
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
                            _vm.selectVersion = $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          },
                          function($event) {
                            _vm.SearchSolution()
                          }
                        ]
                      }
                    },
                    [
                      _c("option", { attrs: { value: "全部" } }, [
                        _vm._v("全部")
                      ]),
                      _vm._v(" "),
                      _vm._l(_vm.caseInfo.info, function(c) {
                        return _c(
                          "option",
                          { domProps: { value: c.version } },
                          [_vm._v(_vm._s(c.version))]
                        )
                      })
                    ],
                    2
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            _c("div", { staticClass: "search-item" }, [
              _c("div", { staticClass: "search-label" }, [_vm._v("關鍵字")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.keyword,
                    expression: "keyword"
                  }
                ],
                attrs: { type: "text", placeholder: "請輸入搜尋關鍵字" },
                domProps: { value: _vm.keyword },
                on: {
                  change: function($event) {
                    _vm.SearchSolution()
                  },
                  keyup: function($event) {
                    if (!("button" in $event) && $event.keyCode !== 13) {
                      return null
                    }
                    _vm.SearchSolution()
                  },
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.keyword = $event.target.value
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "input-bt",
              on: {
                click: function($event) {
                  _vm.openSearchPanel = false
                }
              }
            },
            [_vm._v("確定")]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "input-bt",
              on: {
                click: function($event) {
                  _vm.ResetCondition()
                }
              }
            },
            [_vm._v("重設")]
          )
        ]
      )
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mid-title" }, [
      _vm._v("\r\n\t\t\t搜尋條件\r\n\t\t\t"),
      _c("div", { staticClass: "bottom-line" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/login-panel.vue?vue&type=template&id=16f2f798&scoped=true&lang=html":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/login-panel.vue?vue&type=template&id=16f2f798&scoped=true&lang=html ***!
  \*******************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "loginPanel" }, [
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.mode === "login",
            expression: "mode === 'login'"
          }
        ],
        staticClass: "login"
      },
      [
        _c("div", { staticClass: "method-title" }, [_vm._v("社群登入")]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "google-bt",
            on: {
              click: function($event) {
                _vm.LoginByGoogle()
              }
            }
          },
          [_vm._v("Google 登入")]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "facebook-bt",
            on: {
              click: function($event) {
                _vm.LoginByFacebook()
              }
            }
          },
          [_vm._v("Facebook 登入")]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "seperator" }),
        _vm._v(" "),
        _c("div", { staticClass: "method-title" }, [_vm._v("信箱登入")]),
        _vm._v(" "),
        _c(
          "form",
          {
            ref: "loginForm",
            attrs: { method: "post", action: _vm.pwLoginAction }
          },
          [
            _c("div", { staticClass: "relative-box" }, [
              _c("div", { staticClass: "item-label" }, [_vm._v("帳號")]),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "forget-password",
                  on: {
                    click: function($event) {
                      _vm.ForgetPassword()
                    }
                  }
                },
                [_vm._v("忘記密碼")]
              )
            ]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.email,
                  expression: "email"
                }
              ],
              attrs: {
                type: "email",
                name: "email",
                placeholder: "請輸入電子信箱"
              },
              domProps: { value: _vm.email },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.email = $event.target.value
                }
              }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "item-label" }, [_vm._v("密碼")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.password,
                  expression: "password"
                }
              ],
              attrs: {
                type: "password",
                name: "password",
                placeholder: "請輸入密碼"
              },
              domProps: { value: _vm.password },
              on: {
                keyup: function($event) {
                  if (!("button" in $event) && $event.keyCode !== 13) {
                    return null
                  }
                  _vm.LoginByPassword()
                },
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.password = $event.target.value
                }
              }
            }),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "login-bt",
                on: {
                  click: function($event) {
                    _vm.LoginByPassword()
                  }
                }
              },
              [_vm._v("登入")]
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "text-link",
            on: {
              click: function($event) {
                _vm.mode = "signup"
              }
            }
          },
          [_vm._v("註冊新帳號")]
        )
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.mode === "signup",
            expression: "mode === 'signup'"
          }
        ],
        staticClass: "signup"
      },
      [
        _c("div", { staticClass: "method-title" }, [_vm._v("快速註冊")]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "google-bt",
            on: {
              click: function($event) {
                _vm.LoginByGoogle()
              }
            }
          },
          [_vm._v("Google 註冊")]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "facebook-bt",
            on: {
              click: function($event) {
                _vm.LoginByFacebook()
              }
            }
          },
          [_vm._v("Facebook 註冊")]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "seperator" }),
        _vm._v(" "),
        _c(
          "form",
          {
            ref: "signupForm",
            attrs: { method: "post", action: _vm.pwSignupAction }
          },
          [
            _c("div", { staticClass: "method-title" }, [_vm._v("信箱註冊")]),
            _vm._v(" "),
            _c("div", { staticClass: "item-label" }, [_vm._v("帳號")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.email,
                  expression: "email"
                }
              ],
              attrs: {
                type: "email",
                name: "email",
                placeholder: "請輸入電子信箱"
              },
              domProps: { value: _vm.email },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.email = $event.target.value
                }
              }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "item-label" }, [_vm._v("姓名")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.name,
                  expression: "name"
                }
              ],
              attrs: { type: "text", name: "name", placeholder: "請輸入姓名" },
              domProps: { value: _vm.name },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.name = $event.target.value
                }
              }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "item-label" }, [_vm._v("密碼")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.password,
                  expression: "password"
                }
              ],
              attrs: {
                type: "password",
                name: "password",
                placeholder: "請輸入密碼"
              },
              domProps: { value: _vm.password },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.password = $event.target.value
                }
              }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "item-label" }, [_vm._v("確認密碼")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.passwordConfirm,
                  expression: "passwordConfirm"
                }
              ],
              attrs: { type: "password", placeholder: "請再次確認密碼" },
              domProps: { value: _vm.passwordConfirm },
              on: {
                keyup: function($event) {
                  if (!("button" in $event) && $event.keyCode !== 13) {
                    return null
                  }
                  _vm.SignupByPassword()
                },
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.passwordConfirm = $event.target.value
                }
              }
            }),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "login-bt",
                on: {
                  click: function($event) {
                    _vm.SignupByPassword()
                  }
                }
              },
              [_vm._v("註冊")]
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "text-link",
            on: {
              click: function($event) {
                _vm.mode = "login"
              }
            }
          },
          [_vm._v("返回登入")]
        )
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.mode === "resetPassword",
            expression: "mode === 'resetPassword'"
          }
        ],
        staticClass: "resetPassword"
      },
      [
        _c(
          "form",
          {
            ref: "resetForm",
            attrs: { method: "post", action: "/auth/reset-password" }
          },
          [
            _c("div", { staticClass: "item-label" }, [_vm._v("輸入新密碼")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.password,
                  expression: "password"
                }
              ],
              attrs: {
                type: "password",
                name: "password",
                placeholder: "請輸入密碼"
              },
              domProps: { value: _vm.password },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.password = $event.target.value
                }
              }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "item-label" }, [_vm._v("確認新密碼")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.passwordConfirm,
                  expression: "passwordConfirm"
                }
              ],
              attrs: { type: "password", placeholder: "請再次確認密碼" },
              domProps: { value: _vm.passwordConfirm },
              on: {
                keyup: function($event) {
                  if (!("button" in $event) && $event.keyCode !== 13) {
                    return null
                  }
                  _vm.ResetPassword()
                },
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.passwordConfirm = $event.target.value
                }
              }
            }),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "login-bt",
                on: {
                  click: function($event) {
                    _vm.ResetPassword()
                  }
                }
              },
              [_vm._v("重設密碼")]
            )
          ]
        )
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/main-page.vue?vue&type=template&id=a22aad92&scoped=true&lang=html":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/main-page.vue?vue&type=template&id=a22aad92&scoped=true&lang=html ***!
  \*****************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "main" }, [
    _c(
      "div",
      {
        on: {
          click: function($event) {
            _vm.openSearchPanel = false
          }
        }
      },
      [
        _c("div", { staticClass: "bt-bar" }, [
          _c(
            "div",
            {
              staticClass: "action-bt",
              on: {
                click: function($event) {
                  $event.stopPropagation()
                  _vm.openSearchPanel = true
                }
              }
            },
            [_vm._v("搜尋案例")]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "action-bt",
              on: {
                click: function($event) {
                  _vm.GoToLink("/case/create")
                }
              }
            },
            [_vm._v("新增案例")]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "action-bt",
              on: {
                click: function($event) {
                  _vm.GoToLink("/case/random")
                }
              }
            },
            [_vm._v("隨機解題")]
          )
        ]),
        _vm._v(" "),
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          [
            _c("case-list", { ref: "caseList", attrs: { init: "1" } }),
            _vm._v(" "),
            _c("div", { staticClass: "category-separator" }),
            _vm._v(" "),
            _vm._m(1),
            _vm._v(" "),
            _vm._m(2),
            _vm._v(" "),
            _vm._m(3),
            _vm._v(" "),
            _vm._m(4),
            _vm._v(" "),
            _vm._m(5),
            _vm._v(" "),
            _vm._m(6),
            _vm._v(" "),
            _vm._m(7),
            _vm._v(" "),
            _vm._m(8)
          ],
          1
        )
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "tab-bar" }, [
      _c("div", { staticClass: "tab-bt-container" }, [
        _c(
          "div",
          {
            staticClass: "tab-bt",
            on: {
              click: function($event) {
                $event.stopPropagation()
                _vm.openSearchPanel = true
              }
            }
          },
          [_vm._v("搜尋案例")]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "tab-bt",
            on: {
              click: function($event) {
                _vm.GoToLink("/case/create")
              }
            }
          },
          [_vm._v("新增案例")]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "tab-bt",
            on: {
              click: function($event) {
                _vm.GoToLink("/case/random")
              }
            }
          },
          [_vm._v("隨機解題")]
        )
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "side-panel", class: { open: _vm.openSearchPanel } },
      [
        _vm._m(9),
        _vm._v(" "),
        _c("div", { staticClass: "search-container" }, [
          _c("div", { staticClass: "search-item" }, [
            _c("div", { staticClass: "search-label" }, [_vm._v("排序")]),
            _vm._v(" "),
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.selectSort,
                    expression: "selectSort"
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
                      _vm.selectSort = $event.target.multiple
                        ? $$selectedVal
                        : $$selectedVal[0]
                    },
                    function($event) {
                      _vm.SearchCase()
                    }
                  ]
                }
              },
              [
                _c("option", { attrs: { value: "newest" } }, [
                  _vm._v("由新到舊")
                ]),
                _vm._v(" "),
                _c("option", { attrs: { value: "oldest" } }, [
                  _vm._v("由舊到新")
                ]),
                _vm._v(" "),
                _c("option", { attrs: { value: "solNum" } }, [
                  _vm._v("最多解方")
                ]),
                _vm._v(" "),
                _c("option", { attrs: { value: "likeNum" } }, [
                  _vm._v("最多讚")
                ]),
                _vm._v(" "),
                _c("option", { attrs: { value: "viewNum" } }, [
                  _vm._v("最多觀看")
                ])
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "search-item" }, [
            _c("div", { staticClass: "search-label canNotEmpty" }, [
              _vm._v("分享者專業")
            ]),
            _vm._v(" "),
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.selectProfession,
                    expression: "selectProfession"
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
                      _vm.selectProfession = $event.target.multiple
                        ? $$selectedVal
                        : $$selectedVal[0]
                    },
                    function($event) {
                      _vm.SearchCase()
                    }
                  ]
                }
              },
              [
                _c("option", { attrs: { value: "全部" } }, [_vm._v("全部")]),
                _vm._v(" "),
                _vm._l(_vm.professions, function(profession) {
                  return _c("option", { domProps: { value: profession } }, [
                    _vm._v(_vm._s(profession))
                  ])
                })
              ],
              2
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "search-item" }, [
            _c("div", { staticClass: "search-label" }, [_vm._v("關鍵字")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.keyword,
                  expression: "keyword"
                }
              ],
              attrs: { type: "text", placeholder: "請輸入搜尋關鍵字" },
              domProps: { value: _vm.keyword },
              on: {
                change: function($event) {
                  _vm.SearchCase()
                },
                keyup: function($event) {
                  if (!("button" in $event) && $event.keyCode !== 13) {
                    return null
                  }
                  _vm.SearchCase()
                },
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.keyword = $event.target.value
                }
              }
            })
          ])
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "input-bt",
            on: {
              click: function($event) {
                _vm.openSearchPanel = false
              }
            }
          },
          [_vm._v("確定")]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "input-bt",
            on: {
              click: function($event) {
                _vm.ResetCondition()
              }
            }
          },
          [_vm._v("重設")]
        )
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "category-title" }, [
      _vm._v("\r\n\t\t\t案例列表\r\n\t\t\t"),
      _c("div", { staticClass: "bottom-line" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mid-title" }, [
      _vm._v("\r\n\t\t\t\t關於本站\r\n\t\t\t\t"),
      _c("div", { staticClass: "bottom-line" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "about" }, [
      _c("p", [
        _vm._v(
          "謹以此專案感謝每一位長期忍受制度中的無奈，為無助家庭默默提供溫暖協助的照護服務者。照服，亦是在造福。願在造福路上，本站可以伴著大家，為大家提供一絲絲幫助。"
        )
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v("本站是參與「"),
        _c(
          "a",
          {
            attrs: {
              href: "https://unihub.hfcc.com.tw/hackathon/2018-1/",
              target: "_blank"
            }
          },
          [_vm._v("博祖克實驗 資訊系統議題松")]
        ),
        _vm._v("」後發展出的專案，目的在為照護服務者提供"),
        _c("span", { staticClass: "enhance" }, [_vm._v("跨專業的對話與交流")]),
        _vm._v("，藉由各路專家開放自己的知識與經驗，"),
        _c("span", { staticClass: "enhance" }, [
          _vm._v("累積照護情境案例與解決方案")
        ]),
        _vm._v("，讓新手夥伴能有一個快速成長的練功房。")
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v("正如"),
        _c(
          "a",
          {
            attrs: {
              href: "https://www.facebook.com/groups/115650035793555/",
              target: "_blank"
            }
          },
          [_vm._v("HCOS")]
        ),
        _vm._v(
          "哈爸所說，開放系統為使用者省下一分鐘，全台灣就會省下2300萬分鐘；您所分享出來的經驗與專業為使用者增加一分功力，全台灣就會一起增加2300萬分功力。一起為台灣建構更加美好的高齡生活吧~"
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mid-title" }, [
      _vm._v("\r\n\t\t\t\t挖坑夥伴\r\n\t\t\t\t"),
      _c("div", { staticClass: "bottom-line" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "logo-container" }, [
      _c(
        "a",
        {
          attrs: {
            href: "https://www.facebook.com/groups/115650035793555/",
            target: "_blank"
          }
        },
        [
          _c("img", {
            staticClass: "logo-long",
            attrs: { src: "/static/image/logo/hcos.png" }
          })
        ]
      ),
      _vm._v(" "),
      _c(
        "a",
        { attrs: { href: "https://unihub.hfcc.com.tw", target: "_blank" } },
        [
          _c("img", {
            staticClass: "logo",
            attrs: { src: "/static/image/logo/unihub.png" }
          })
        ]
      ),
      _vm._v(" "),
      _c(
        "a",
        { attrs: { href: "http://goodwork.hfcc.com.tw", target: "_blank" } },
        [
          _c("img", {
            staticClass: "logo-long",
            attrs: { src: "/static/image/logo/goodwork.png" }
          })
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mid-title" }, [
      _vm._v("\r\n\t\t\t\t開發者\r\n\t\t\t\t"),
      _c("div", { staticClass: "bottom-line" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "logo-container" }, [
      _c("a", { attrs: { href: "https://agawork.tw", target: "_blank" } }, [
        _c("img", {
          staticClass: "logo",
          attrs: { src: "/static/image/logo/agawork.png" }
        })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mid-title" }, [
      _vm._v("\r\n\t\t\t\t相關資料\r\n\t\t\t\t"),
      _c("div", { staticClass: "bottom-line" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "opendata" }, [
      _c("ul", [
        _c("li", [
          _vm._v("\r\n\t\t\t\t\t\t⯁ "),
          _c(
            "a",
            {
              attrs: {
                href: "https://github.com/aga3134/CareTips",
                target: "_blank"
              }
            },
            [_vm._v("網站開放原始碼")]
          )
        ]),
        _vm._v(" "),
        _c("li", [
          _vm._v("\r\n\t\t\t\t\t\t⯁ "),
          _c(
            "a",
            {
              attrs: {
                href:
                  "https://docs.google.com/spreadsheets/d/11XRXJnxH_d1dDcN7p1sVahZa9aA_-PYmX8J_MZXPhZc/edit#gid=0",
                target: "_blank"
              }
            },
            [_vm._v("Omaha System三大表格中譯資料")]
          )
        ]),
        _vm._v(" "),
        _c("li", [
          _vm._v("\r\n\t\t\t\t\t\t⯁ "),
          _c(
            "a",
            {
              attrs: {
                href: "https://openhcos.github.io/radio-to-broadcast/",
                target: "_blank"
              }
            },
            [_vm._v("博祖克型態資源分享概念專案")]
          )
        ]),
        _vm._v(" "),
        _c("li", [
          _vm._v("\r\n\t\t\t\t\t\t⯁ "),
          _c(
            "a",
            {
              attrs: {
                href:
                  "https://drive.google.com/drive/folders/1ZCz6t9701eLw2hTjUbhfxnHwL1Nv-8ns",
                target: "_blank"
              }
            },
            [_vm._v("博祖克實驗 資訊系統議題松 成果")]
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mid-title" }, [
      _vm._v("\r\n\t\t\t搜尋條件\r\n\t\t\t"),
      _c("div", { staticClass: "bottom-line" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/profession.vue?vue&type=template&id=2ab0df18&scoped=true&lang=html":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/profession.vue?vue&type=template&id=2ab0df18&scoped=true&lang=html ***!
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
  return _c("div", [
    _c("div", { staticClass: "profession" }, [
      _c("div", { staticClass: "bt-bar" }, [
        _c(
          "div",
          {
            staticClass: "action-bt",
            on: {
              click: function($event) {
                _vm.openSearchPanel = true
              }
            }
          },
          [_vm._v("搜尋專家")]
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          on: {
            click: function($event) {
              _vm.openSearchPanel = false
            }
          }
        },
        [
          _vm._m(0),
          _vm._v(" "),
          _c("user-list", { ref: "userList", attrs: { init: "1" } })
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "tab-bar" }, [
        _c("div", { staticClass: "tab-bt-container" }, [
          _c(
            "div",
            {
              staticClass: "tab-bt",
              on: {
                click: function($event) {
                  _vm.openSearchPanel = true
                }
              }
            },
            [_vm._v("搜尋專家")]
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "side-panel", class: { open: _vm.openSearchPanel } },
        [
          _vm._m(1),
          _vm._v(" "),
          _c("div", { staticClass: "search-container" }, [
            _c("div", { staticClass: "search-item" }, [
              _c("div", { staticClass: "search-label canNotEmpty" }, [
                _vm._v("服務專業")
              ]),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.selectProfession,
                      expression: "selectProfession"
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
                        _vm.selectProfession = $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      },
                      function($event) {
                        _vm.SearchProfession()
                      }
                    ]
                  }
                },
                [
                  _c("option", { attrs: { value: "全部" } }, [_vm._v("全部")]),
                  _vm._v(" "),
                  _vm._l(_vm.professions, function(profession) {
                    return _c("option", { domProps: { value: profession } }, [
                      _vm._v(_vm._s(profession))
                    ])
                  })
                ],
                2
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "search-item" }, [
              _c("div", { staticClass: "search-label" }, [_vm._v("服務縣市")]),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.selectCounty,
                      expression: "selectCounty"
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
                        _vm.selectCounty = $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      },
                      function($event) {
                        _vm.SearchProfession()
                      }
                    ]
                  }
                },
                [
                  _c("option", { attrs: { value: "全部" } }, [_vm._v("全部")]),
                  _vm._v(" "),
                  _vm._l(_vm.counties, function(county) {
                    return _c("option", { domProps: { value: county } }, [
                      _vm._v(_vm._s(county))
                    ])
                  })
                ],
                2
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "search-item" }, [
              _c("div", { staticClass: "search-label" }, [_vm._v("排序")]),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.selectSort,
                      expression: "selectSort"
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
                        _vm.selectSort = $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      },
                      function($event) {
                        _vm.SearchProfession()
                      }
                    ]
                  }
                },
                [
                  _c("option", { attrs: { value: "caseNum" } }, [
                    _vm._v("最多案例")
                  ]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "solNum" } }, [
                    _vm._v("最多解方")
                  ]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "newest" } }, [
                    _vm._v("由新到舊")
                  ]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "oldest" } }, [
                    _vm._v("由舊到新")
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "search-item" }, [
              _c("div", { staticClass: "search-label" }, [_vm._v("關鍵字")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.keyword,
                    expression: "keyword"
                  }
                ],
                attrs: { type: "text", placeholder: "請輸入搜尋關鍵字" },
                domProps: { value: _vm.keyword },
                on: {
                  change: function($event) {
                    _vm.SearchProfession()
                  },
                  keyup: function($event) {
                    if (!("button" in $event) && $event.keyCode !== 13) {
                      return null
                    }
                    _vm.SearchProfession()
                  },
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.keyword = $event.target.value
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "input-bt",
              on: {
                click: function($event) {
                  _vm.openSearchPanel = false
                }
              }
            },
            [_vm._v("確定")]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "input-bt",
              on: {
                click: function($event) {
                  _vm.ResetCondition()
                }
              }
            },
            [_vm._v("重設")]
          )
        ]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "category-title" }, [
      _vm._v("\r\n\t\t\t\t專家列表\r\n\t\t\t\t"),
      _c("div", { staticClass: "bottom-line" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mid-title" }, [
      _vm._v("\r\n\t\t\t\t搜尋條件\r\n\t\t\t\t"),
      _c("div", { staticClass: "bottom-line" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/solution-editor.vue?vue&type=template&id=472eb156&scoped=true&lang=html":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/solution-editor.vue?vue&type=template&id=472eb156&scoped=true&lang=html ***!
  \***********************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    {
      staticClass: "solution-editor",
      on: {
        click: function($event) {
          if ($event.target !== $event.currentTarget) {
            return null
          }
          _vm.ViewCase()
        }
      }
    },
    [
      _c("div", { staticClass: "step-page" }, [
        _c("div", {
          staticClass: "quest",
          domProps: { innerHTML: _vm._s(_vm.quest[_vm.step]) }
        }),
        _vm._v(" "),
        _c("div", { staticClass: "separator" }),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "input-bt",
            on: {
              click: function($event) {
                _vm.openInputPanel = true
              }
            }
          },
          [_vm._v("新增項目")]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "sol-container" }, [
          _vm.step == 0 || _vm.step == 1
            ? _c(
                "div",
                _vm._l(_vm.priority, function(p, i) {
                  return _c("div", { staticClass: "problem-cat" }, [
                    _c("div", { staticClass: "problem-header" }, [
                      _vm._v(_vm._s(p.name))
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "problem-container" },
                      _vm._l(_vm.solution[_vm.step][i], function(s, j) {
                        return _c(
                          "div",
                          {
                            staticClass: "problem-item one-third-w",
                            class: "cat-D" + (i + 1)
                          },
                          [
                            _c("div", { staticClass: "problem-title" }, [
                              _vm._v(
                                _vm._s(_vm.intervention[s.intervention].name)
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "problem-body" }, [
                              _c("div", {
                                staticClass: "problem-desc",
                                domProps: { innerHTML: _vm._s(s.desc) }
                              }),
                              _vm._v(" "),
                              _c("div", { staticClass: "item-bt-container" }, [
                                _c(
                                  "div",
                                  {
                                    staticClass: "item-bt",
                                    on: {
                                      click: function($event) {
                                        _vm.ModifyItem(i, j)
                                      }
                                    }
                                  },
                                  [_vm._v("修改")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass: "item-bt",
                                    on: {
                                      click: function($event) {
                                        _vm.DeleteItem(i, j)
                                      }
                                    }
                                  },
                                  [_vm._v("刪除")]
                                )
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "target-info" }, [
                                _vm._v("針對問題 - " + _vm._s(s.targetName))
                              ])
                            ])
                          ]
                        )
                      })
                    )
                  ])
                })
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.step == 2
            ? _c("div", [
                _c("div", { staticClass: "problem-cat" }, [
                  _c("div", { staticClass: "problem-header" }, [
                    _vm._v("專業連結")
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "problem-container" },
                    _vm._l(_vm.solution[_vm.step][0], function(s, j) {
                      return _c(
                        "div",
                        { staticClass: "problem-item one-third-w cat-D4" },
                        [
                          _c("div", { staticClass: "problem-title" }, [
                            _vm._v(_vm._s(s.profession))
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "problem-body" }, [
                            _c("div", {
                              staticClass: "problem-desc",
                              domProps: { innerHTML: _vm._s(s.desc) }
                            }),
                            _vm._v(" "),
                            _c("div", { staticClass: "item-bt-container" }, [
                              _c(
                                "div",
                                {
                                  staticClass: "item-bt",
                                  on: {
                                    click: function($event) {
                                      _vm.ModifyItem(0, j)
                                    }
                                  }
                                },
                                [_vm._v("修改")]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass: "item-bt",
                                  on: {
                                    click: function($event) {
                                      _vm.DeleteItem(0, j)
                                    }
                                  }
                                },
                                [_vm._v("刪除")]
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "target-info" }, [
                              _vm._v("針對問題 - " + _vm._s(s.targetName))
                            ])
                          ])
                        ]
                      )
                    })
                  )
                ])
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.step == 3
            ? _c("div", [
                _c("div", { staticClass: "problem-cat" }, [
                  _c("div", { staticClass: "problem-header" }, [
                    _vm._v("服務項目")
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "problem-container" },
                    _vm._l(_vm.solution[_vm.step][0], function(s, j) {
                      return _c(
                        "div",
                        {
                          staticClass: "problem-item one-third-w",
                          class: "cat-" + s.category
                        },
                        [
                          _c("div", { staticClass: "problem-title" }, [
                            _vm._v(_vm._s(s.code) + " " + _vm._s(s.name))
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "problem-body" }, [
                            _c("div", {
                              staticClass: "problem-desc",
                              domProps: { innerHTML: _vm._s(s.desc) }
                            }),
                            _vm._v(" "),
                            _c("div", { staticClass: "item-bt-container" }, [
                              _c(
                                "div",
                                {
                                  staticClass: "item-bt",
                                  on: {
                                    click: function($event) {
                                      _vm.ModifyItem(0, j)
                                    }
                                  }
                                },
                                [_vm._v("修改")]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass: "item-bt",
                                  on: {
                                    click: function($event) {
                                      _vm.DeleteItem(0, j)
                                    }
                                  }
                                },
                                [_vm._v("刪除")]
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "target-info" }, [
                              _vm._v("針對問題 - " + _vm._s(s.targetName))
                            ])
                          ])
                        ]
                      )
                    })
                  )
                ])
              ])
            : _vm._e()
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "separator" }),
        _vm._v(" "),
        _c("div", { staticClass: "step-bt-container" }, [
          _c(
            "div",
            {
              staticClass: "tab-bt",
              class: { on: _vm.step == 0 },
              on: {
                click: function($event) {
                  _vm.step = 0
                }
              }
            },
            [_vm._v("個案措施")]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "tab-bt",
              class: { on: _vm.step == 1 },
              on: {
                click: function($event) {
                  _vm.step = 1
                }
              }
            },
            [_vm._v("家屬協助")]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "tab-bt",
              class: { on: _vm.step == 2 },
              on: {
                click: function($event) {
                  _vm.step = 2
                }
              }
            },
            [_vm._v("專業連結")]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "tab-bt",
              class: { on: _vm.step == 3 },
              on: {
                click: function($event) {
                  _vm.step = 3
                }
              }
            },
            [_vm._v("服務設定")]
          )
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "input-bt",
            on: {
              click: function($event) {
                _vm.ViewCase()
              }
            }
          },
          [_vm._v("觀看案例")]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.action == "edit",
                expression: "action=='edit'"
              }
            ],
            staticClass: "input-bt",
            on: {
              click: function($event) {
                _vm.ClearEditSolution(true)
              }
            }
          },
          [_vm._v("取消修改")]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "input-bt",
            on: {
              click: function($event) {
                _vm.SubmitSolution()
              }
            }
          },
          [_vm._v(_vm._s(_vm.action == "edit" ? "完成修改" : "完成解題"))]
        )
      ]),
      _vm._v(" "),
      _c("transition", { attrs: { name: "fade" } }, [
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.openInputPanel,
                expression: "openInputPanel"
              }
            ],
            staticClass: "input-panel full"
          },
          [
            _c("div", { staticClass: "input-area" }, [
              _c("div", {
                staticClass: "quest",
                domProps: { innerHTML: _vm._s(_vm.quest[_vm.step]) }
              }),
              _vm._v(" "),
              _vm.problemList
                ? _c("div", { staticClass: "input-item" }, [
                    _c("div", { staticClass: "input-label" }, [
                      _vm._v("針對問題")
                    ]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.targetIndex,
                            expression: "targetIndex"
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
                            _vm.targetIndex = $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          }
                        }
                      },
                      [
                        _c("option", { attrs: { value: "" } }, [
                          _vm._v("不指定")
                        ]),
                        _vm._v(" "),
                        _vm._l(_vm.problemList["D1"], function(op, index) {
                          return _c(
                            "option",
                            { domProps: { value: "D1-" + index } },
                            [_vm._v(_vm._s(op.name))]
                          )
                        }),
                        _vm._v(" "),
                        _vm._l(_vm.problemList["D2"], function(op, index) {
                          return _c(
                            "option",
                            { domProps: { value: "D2-" + index } },
                            [_vm._v(_vm._s(op.name))]
                          )
                        }),
                        _vm._v(" "),
                        _vm._l(_vm.problemList["D3"], function(op, index) {
                          return _c(
                            "option",
                            { domProps: { value: "D3-" + index } },
                            [_vm._v(_vm._s(op.name))]
                          )
                        }),
                        _vm._v(" "),
                        _vm._l(_vm.problemList["D4"], function(op, index) {
                          return _c(
                            "option",
                            { domProps: { value: "D4-" + index } },
                            [_vm._v(_vm._s(op.name))]
                          )
                        })
                      ],
                      2
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.step == 0 || _vm.step == 1,
                      expression: "step == 0 || step == 1"
                    }
                  ]
                },
                [
                  _c("div", { staticClass: "input-item" }, [
                    _c("div", { staticClass: "input-label" }, [
                      _vm._v("優先順序")
                    ]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.selectPriority,
                            expression: "selectPriority"
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
                            _vm.selectPriority = $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          }
                        }
                      },
                      _vm._l(_vm.priority, function(p, i) {
                        return _c("option", { domProps: { value: i } }, [
                          _vm._v(_vm._s(p.name))
                        ])
                      })
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "input-item" }, [
                    _c("div", { staticClass: "input-label" }, [_vm._v("措施")]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.selectIntervention,
                            expression: "selectIntervention"
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
                            _vm.selectIntervention = $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          }
                        }
                      },
                      _vm._l(_vm.intervention, function(v, i) {
                        return _c("option", { domProps: { value: i } }, [
                          _vm._v(_vm._s(v.name))
                        ])
                      })
                    )
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.step == 2,
                      expression: "step == 2"
                    }
                  ]
                },
                [
                  _c("div", { staticClass: "input-item" }, [
                    _c("div", { staticClass: "input-label" }, [
                      _vm._v("專業連結")
                    ]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.selectProfession,
                            expression: "selectProfession"
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
                            _vm.selectProfession = $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          }
                        }
                      },
                      _vm._l(_vm.professions, function(p) {
                        return _c("option", { domProps: { value: p } }, [
                          _vm._v(_vm._s(p))
                        ])
                      })
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.selectProfession == "其他",
                          expression: "selectProfession=='其他'"
                        }
                      ],
                      staticClass: "input-item"
                    },
                    [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.customProfession,
                            expression: "customProfession"
                          }
                        ],
                        attrs: {
                          type: "text",
                          placeholder: "請輸入您要連結的專業"
                        },
                        domProps: { value: _vm.customProfession },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.customProfession = $event.target.value
                          }
                        }
                      })
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.step == 3,
                      expression: "step == 3"
                    }
                  ]
                },
                [_c("care-service-selection", { ref: "serviceSelect" })],
                1
              ),
              _vm._v(" "),
              _c("textarea", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.inputDesc,
                    expression: "inputDesc"
                  }
                ],
                attrs: { placeholder: "請簡述您提供的措施" },
                domProps: { value: _vm.inputDesc },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.inputDesc = $event.target.value
                  }
                }
              }),
              _vm._v(" "),
              _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: !_vm.modify,
                      expression: "!modify"
                    }
                  ],
                  staticClass: "input-bt",
                  on: {
                    click: function($event) {
                      _vm.AddItem()
                    }
                  }
                },
                [_vm._v("新增")]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: !_vm.modify,
                      expression: "!modify"
                    }
                  ],
                  staticClass: "input-bt",
                  on: {
                    click: function($event) {
                      _vm.ClearTarget()
                    }
                  }
                },
                [_vm._v("取消")]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.modify,
                      expression: "modify"
                    }
                  ],
                  staticClass: "input-bt",
                  on: {
                    click: function($event) {
                      _vm.DoModify()
                    }
                  }
                },
                [_vm._v("修改")]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.modify,
                      expression: "modify"
                    }
                  ],
                  staticClass: "input-bt",
                  on: {
                    click: function($event) {
                      _vm.ClearModify()
                    }
                  }
                },
                [_vm._v("取消修改")]
              )
            ])
          ]
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/solution-list.vue?vue&type=template&id=8d272bf4&scoped=true&lang=html":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/solution-list.vue?vue&type=template&id=8d272bf4&scoped=true&lang=html ***!
  \*********************************************************************************************************************************************************************************************************************/
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
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.solutionList.length == 0,
            expression: "solutionList.length==0"
          }
        ],
        staticClass: "no-result-box"
      },
      [
        _vm._v("\r\n\t\t目前暫無符合條件的解方\r\n\t\t"),
        _vm.emptyAction == 0
          ? _c("div", { staticClass: "center-bt" }, [_vm._v("查無資料")])
          : _c(
              "div",
              {
                staticClass: "center-bt",
                on: {
                  click: function($event) {
                    _vm.CreateSolution()
                  }
                }
              },
              [_vm._v("新增解方")]
            )
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "solution-list" },
      [
        _c(
          "transition-group",
          { staticStyle: { width: "100%" }, attrs: { name: "create" } },
          _vm._l(_vm.solutionList, function(s, i) {
            return _c(
              "div",
              {
                key: s.id,
                staticClass: "list-item one-third-w shadow-dark",
                on: {
                  click: function($event) {
                    _vm.ViewSolution(s.caseID, s.id)
                  }
                }
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "owner-info",
                    style: { "background-color": s.user.headColor }
                  },
                  [
                    _c("img", {
                      staticClass: "owner-icon",
                      attrs: { src: s.user.icon }
                    }),
                    _vm._v(
                      "\r\n\t\t\t\t\t" +
                        _vm._s(s.user.profession) +
                        " - " +
                        _vm._s(s.user.name) +
                        "\r\n\t\t\t\t"
                    )
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "domain-statistic" }, [
                  _c("div", { staticClass: "domain-info" }, [
                    _c("div", { staticClass: "domain-icon cat-D1" }),
                    _vm._v(" "),
                    _c("div", { staticClass: "tip cat-D1" }, [
                      _vm._v("個案措施 " + _vm._s(s.S1Num || 0) + " 項")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "domain-num" }, [
                      _vm._v(_vm._s(s.S1Num || 0))
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "domain-info" }, [
                    _c("div", { staticClass: "domain-icon cat-D2" }),
                    _vm._v(" "),
                    _c("div", { staticClass: "tip cat-D2" }, [
                      _vm._v("家屬措施 " + _vm._s(s.S2Num || 0) + " 項")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "domain-num" }, [
                      _vm._v(_vm._s(s.S2Num || 0))
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "domain-info" }, [
                    _c("div", { staticClass: "domain-icon cat-D3" }),
                    _vm._v(" "),
                    _c("div", { staticClass: "tip cat-D3" }, [
                      _vm._v("專業連結 " + _vm._s(s.S3Num || 0) + " 項")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "domain-num" }, [
                      _vm._v(_vm._s(s.S3Num || 0))
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "domain-info" }, [
                    _c("div", { staticClass: "domain-icon cat-D4" }),
                    _vm._v(" "),
                    _c("div", { staticClass: "tip cat-D4" }, [
                      _vm._v("照護服務 " + _vm._s(s.S4Num || 0) + " 項")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "domain-num" }, [
                      _vm._v(_vm._s(s.S4Num || 0))
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "desc" }, [_vm._v(_vm._s(s.desc))]),
                _vm._v(" "),
                _c("div", { staticClass: "feedback-statistic" }, [
                  _c("img", {
                    staticClass: "feedback-icon",
                    attrs: { src: "/static/image/like.png" }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "feedback-num" }, [
                    _vm._v(_vm._s(s.likeNum))
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "feedback-num" }, [
                    _vm._v("觀看次數 " + _vm._s(s.viewNum))
                  ])
                ])
              ]
            )
          })
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.noMore == false,
            expression: "noMore==false"
          }
        ],
        staticClass: "load-more",
        on: {
          click: function($event) {
            _vm.LoadMoreList()
          }
        }
      },
      [_vm._v("更多解方 ▼")]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/solution-view.vue?vue&type=template&id=9f02cee6&scoped=true&lang=html":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/solution-view.vue?vue&type=template&id=9f02cee6&scoped=true&lang=html ***!
  \*********************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "solution-view" }, [
    _c("div", { staticClass: "panel-title" }, [_vm._v("觀看解方")]),
    _vm._v(" "),
    _vm.solutionInfo && _vm.curCaseVersion != _vm.solutionInfo.caseVersion
      ? _c("p", { staticClass: "warning center" }, [
          _vm._v(
            "* 此為針對案例版本" +
              _vm._s(_vm.solutionInfo.caseVersion) +
              " 提出的解方，與目前觀看的案例版本" +
              _vm._s(_vm.curCaseVersion) +
              " 不同，參考時請小心。"
          )
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.solutionInfo
      ? _c("div", { staticClass: "feedback-statistic" }, [
          _c(
            "div",
            {
              staticClass: "container clickable",
              on: {
                click: function($event) {
                  _vm.ToggleLike()
                }
              }
            },
            [
              _c("img", {
                staticClass: "feedback-icon",
                attrs: { src: "/static/image/like.png" }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "feedback-num" }, [
                _vm._v(_vm._s(_vm.solutionInfo.likeNum))
              ])
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "container" }, [
            _vm._v("\r\n\t\t\t觀看次數"),
            _c("div", { staticClass: "feedback-num" }, [
              _vm._v(_vm._s(_vm.solutionInfo.viewNum))
            ]),
            _vm._v("\r\n\t\t\t案例版本"),
            _c("div", { staticClass: "feedback-num" }, [
              _vm._v(_vm._s(_vm.solutionInfo.caseVersion))
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
                  value: _vm.isMySolution,
                  expression: "isMySolution"
                }
              ],
              staticClass: "container"
            },
            [
              _c(
                "div",
                {
                  staticClass: "action-bt",
                  on: {
                    click: function($event) {
                      _vm.ModifySolution()
                    }
                  }
                },
                [_vm._v("修改解方")]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "action-bt",
                  on: {
                    click: function($event) {
                      _vm.DeleteSolution()
                    }
                  }
                },
                [_vm._v("刪除解方")]
              )
            ]
          )
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.solutionInfo
      ? _c("div", [
          _c("div", {
            staticClass: "quest",
            domProps: { innerHTML: _vm._s(_vm.quest[_vm.step]) }
          }),
          _vm._v(" "),
          _vm.step == 0 || _vm.step == 1
            ? _c(
                "div",
                _vm._l(_vm.priority, function(p, i) {
                  return _c("div", { staticClass: "problem-cat" }, [
                    _c("div", { staticClass: "problem-header" }, [
                      _vm._v(_vm._s(p.name))
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "problem-container" },
                      _vm._l(_vm.solutionInfo.info[_vm.step][i], function(
                        s,
                        j
                      ) {
                        return _c(
                          "div",
                          {
                            staticClass: "problem-item one-third-w",
                            class: "cat-D" + (i + 1)
                          },
                          [
                            _c("div", { staticClass: "problem-title" }, [
                              _vm._v(
                                _vm._s(_vm.intervention[s.intervention].name)
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "problem-body" }, [
                              _c("div", {
                                staticClass: "problem-desc",
                                domProps: { innerHTML: _vm._s(s.desc) }
                              })
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "target-info" }, [
                              _vm._v("針對問題 - " + _vm._s(s.targetName))
                            ])
                          ]
                        )
                      })
                    )
                  ])
                })
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.step == 2
            ? _c("div", [
                _c("div", { staticClass: "problem-cat" }, [
                  _c("div", { staticClass: "problem-header" }, [
                    _vm._v("專業連結")
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "problem-container" },
                    _vm._l(_vm.solutionInfo.info[_vm.step][0], function(s, j) {
                      return _c(
                        "div",
                        { staticClass: "problem-item one-third-w cat-D4" },
                        [
                          _c("div", { staticClass: "problem-title" }, [
                            _vm._v(_vm._s(s.profession))
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "problem-body" }, [
                            _c("div", {
                              staticClass: "problem-desc",
                              domProps: { innerHTML: _vm._s(s.desc) }
                            }),
                            _vm._v(" "),
                            _c("div", { staticClass: "item-bt-container" }, [
                              _c(
                                "div",
                                {
                                  staticClass: "item-bt",
                                  on: {
                                    click: function($event) {
                                      _vm.SearchProfession(s.profession)
                                    }
                                  }
                                },
                                [_vm._v("找人")]
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "target-info" }, [
                            _vm._v("針對問題 - " + _vm._s(s.targetName))
                          ])
                        ]
                      )
                    })
                  )
                ])
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.step == 3
            ? _c("div", [
                _c("div", { staticClass: "problem-cat" }, [
                  _c("div", { staticClass: "problem-header" }, [
                    _vm._v("\r\n\t\t\t\t\t服務項目\r\n\t\t\t\t\t"),
                    _c(
                      "div",
                      {
                        staticClass: "input-bt",
                        on: {
                          click: function($event) {
                            _vm.CalculateService()
                          }
                        }
                      },
                      [_vm._v("價格試算")]
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "problem-container" },
                    _vm._l(_vm.solutionInfo.info[_vm.step][0], function(s, j) {
                      return _c(
                        "div",
                        {
                          staticClass: "problem-item one-third-w",
                          class: "cat-" + s.category
                        },
                        [
                          _c("div", { staticClass: "problem-title" }, [
                            _vm._v(_vm._s(s.code) + " " + _vm._s(s.name))
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "problem-body" }, [
                            _c("div", {
                              staticClass: "problem-desc",
                              domProps: { innerHTML: _vm._s(s.desc) }
                            })
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "target-info" }, [
                            _vm._v("針對問題 - " + _vm._s(s.targetName))
                          ])
                        ]
                      )
                    })
                  )
                ])
              ])
            : _vm._e()
        ])
      : _vm._e(),
    _vm._v(" "),
    _c("div", { staticClass: "separator" }),
    _vm._v(" "),
    _c("div", { staticClass: "step-bt-container" }, [
      _c(
        "div",
        {
          staticClass: "tab-bt",
          class: { on: _vm.step == 0 },
          on: {
            click: function($event) {
              _vm.step = 0
            }
          }
        },
        [_vm._v("個案措施")]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "tab-bt",
          class: { on: _vm.step == 1 },
          on: {
            click: function($event) {
              _vm.step = 1
            }
          }
        },
        [_vm._v("家屬協助")]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "tab-bt",
          class: { on: _vm.step == 2 },
          on: {
            click: function($event) {
              _vm.step = 2
            }
          }
        },
        [_vm._v("專業連結")]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "tab-bt",
          class: { on: _vm.step == 3 },
          on: {
            click: function($event) {
              _vm.step = 3
            }
          }
        },
        [_vm._v("服務設定")]
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "input-bt",
        on: {
          click: function($event) {
            _vm.ViewCase()
          }
        }
      },
      [_vm._v("觀看案例")]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "input-bt",
        on: {
          click: function($event) {
            _vm.BackToSolutionList()
          }
        }
      },
      [_vm._v("解方列表")]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "solution-title" }, [_vm._v("分享者簡介")]),
    _vm._v(" "),
    _vm.solutionInfo
      ? _c("div", { staticClass: "owner" }, [
          _c(
            "a",
            { attrs: { href: "/user?target=" + _vm.solutionInfo.user.id } },
            [
              _c("div", { staticClass: "owner-info" }, [
                _c("img", {
                  staticClass: "owner-icon",
                  attrs: { src: _vm.solutionInfo.user.icon }
                }),
                _vm._v(
                  "\r\n\t\t\t\t" +
                    _vm._s(_vm.solutionInfo.user.profession) +
                    " - " +
                    _vm._s(_vm.solutionInfo.user.name) +
                    "\r\n\t\t\t"
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "owner-desc" }, [
                _vm._v(_vm._s(_vm.solutionInfo.user.desc))
              ])
            ]
          )
        ])
      : _vm._e(),
    _vm._v(" "),
    _c("div", { staticClass: "solution-title" }, [_vm._v("留言回饋")]),
    _vm._v(" "),
    _c("div", { staticClass: "message-box" }, [
      _c("textarea", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.sendMessage,
            expression: "sendMessage"
          }
        ],
        attrs: { placeholder: "留言給分享者..." },
        domProps: { value: _vm.sendMessage },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.sendMessage = $event.target.value
          }
        }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "bt-container" }, [
        _c(
          "div",
          {
            staticClass: "bt",
            on: {
              click: function($event) {
                _vm.SendMessage()
              }
            }
          },
          [_vm._v("送出")]
        )
      ])
    ]),
    _vm._v(" "),
    _vm.solutionInfo
      ? _c(
          "div",
          { staticClass: "message-list" },
          [
            _c("a", { attrs: { name: "solMessageList" } }),
            _vm._v(" "),
            _vm._l(_vm.messageList, function(m, i) {
              return _c("div", { staticClass: "message" }, [
                _c("div", { staticClass: "owner-info" }, [
                  _c("img", {
                    staticClass: "owner-icon",
                    attrs: { src: m.user.icon }
                  }),
                  _vm._v(
                    "\r\n\t\t\t\t" +
                      _vm._s(m.user.profession) +
                      " - " +
                      _vm._s(m.user.name) +
                      "\r\n\t\t\t"
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "message-content" }, [
                  _vm._v(_vm._s(m.message))
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "sub-info" }, [
                  _c("div", { staticClass: "info-item" }, [
                    _vm._v(_vm._s(m.time))
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.user && m.user.id == _vm.user.id,
                          expression: "user && m.user.id == user.id"
                        }
                      ],
                      staticClass: "action-bt",
                      on: {
                        click: function($event) {
                          _vm.DeleteMessage(i)
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
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
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
        _c("img", { attrs: { src: _vm.logoImg } })
      ]),
      _vm._v(" "),
      _c("img", {
        staticClass: "menu-bt",
        attrs: { src: _vm.menuImg },
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/user-info-editor.vue?vue&type=template&id=ef839ef4&scoped=true&lang=html":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/user-info-editor.vue?vue&type=template&id=ef839ef4&scoped=true&lang=html ***!
  \************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "user-info-editor" }, [
      _c("div", { staticClass: "info-container" }, [
        _c("div", { staticClass: "info-box" }, [
          _c("img", {
            staticClass: "user-photo",
            attrs: { src: _vm.user.photo }
          }),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "photo-bt",
              on: {
                click: function($event) {
                  _vm.ChangePhoto()
                }
              }
            },
            [_vm._v("變更圖片")]
          ),
          _vm._v(" "),
          _c("input", {
            ref: "uploadBt",
            attrs: { type: "file", hidden: "" },
            on: { change: _vm.UploadPhoto }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "info-box grow" }, [
          _c("div", { staticClass: "info-label canNotEmpty" }, [
            _vm._v("姓名")
          ]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.user.name,
                expression: "user.name"
              }
            ],
            attrs: { type: "text" },
            domProps: { value: _vm.user.name },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.user, "name", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "info-label canNotEmpty" }, [
            _vm._v("服務專業")
          ]),
          _vm._v(" "),
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.selectProfession,
                  expression: "selectProfession"
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
                  _vm.selectProfession = $event.target.multiple
                    ? $$selectedVal
                    : $$selectedVal[0]
                }
              }
            },
            _vm._l(_vm.professions, function(profession) {
              return _c("option", { domProps: { value: profession } }, [
                _vm._v(_vm._s(profession))
              ])
            })
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.selectProfession == "其他",
                  expression: "selectProfession == '其他' "
                }
              ]
            },
            [
              _c("div", { staticClass: "info-label canNotEmpty" }, [
                _vm._v("請填寫服務專業")
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.otherProfession,
                    expression: "otherProfession"
                  }
                ],
                attrs: { type: "text" },
                domProps: { value: _vm.otherProfession },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.otherProfession = $event.target.value
                  }
                }
              })
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "info-label" }, [_vm._v("自我介紹")]),
          _vm._v(" "),
          _c("textarea", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.user.desc,
                expression: "user.desc"
              }
            ],
            domProps: { value: _vm.user.desc },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.user, "desc", $event.target.value)
              }
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "sub-title" }, [_vm._v("聯絡資訊")]),
      _vm._v(" "),
      _c("div", { staticClass: "info-container" }, [
        _c("div", { staticClass: "info-box" }, [
          _c("div", { staticClass: "info-label" }, [_vm._v("服務縣市")]),
          _vm._v(" "),
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.user.county,
                  expression: "user.county"
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
                  _vm.$set(
                    _vm.user,
                    "county",
                    $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                  )
                }
              }
            },
            _vm._l(_vm.counties, function(county) {
              return _c("option", { domProps: { value: county } }, [
                _vm._v(_vm._s(county))
              ])
            })
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "info-box" }, [
          _c("div", { staticClass: "info-label" }, [_vm._v("公司或組織名稱")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.user.company,
                expression: "user.company"
              }
            ],
            attrs: { type: "text" },
            domProps: { value: _vm.user.company },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.user, "company", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "info-box" }, [
          _c("div", { staticClass: "info-label" }, [_vm._v("公司或組織網址")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.user.companyUrl,
                expression: "user.companyUrl"
              }
            ],
            attrs: { type: "text" },
            domProps: { value: _vm.user.companyUrl },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.user, "companyUrl", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "info-box" }, [
          _c("div", { staticClass: "info-label" }, [_vm._v("服務聯絡信箱")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.user.contactEmail,
                expression: "user.contactEmail"
              }
            ],
            attrs: { type: "text" },
            domProps: { value: _vm.user.contactEmail },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.user, "contactEmail", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "info-box" }, [
          _c("div", { staticClass: "info-label" }, [_vm._v("服務聯絡電話")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.user.tel,
                expression: "user.tel"
              }
            ],
            attrs: { type: "text" },
            domProps: { value: _vm.user.tel },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.user, "tel", $event.target.value)
              }
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "remark" }, [
        _vm._v(
          "\r\n\t\t\t*為協助跨專業交流與連結，您所填寫的資訊皆可被其他人搜尋到。如有隱私疑慮，請將該欄位留白。\r\n\t\t\t"
        ),
        _c("div", { staticClass: "remark-check" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.finalCheck,
                expression: "finalCheck"
              }
            ],
            attrs: { type: "checkbox" },
            domProps: {
              checked: Array.isArray(_vm.finalCheck)
                ? _vm._i(_vm.finalCheck, null) > -1
                : _vm.finalCheck
            },
            on: {
              change: function($event) {
                var $$a = _vm.finalCheck,
                  $$el = $event.target,
                  $$c = $$el.checked ? true : false
                if (Array.isArray($$a)) {
                  var $$v = null,
                    $$i = _vm._i($$a, $$v)
                  if ($$el.checked) {
                    $$i < 0 && (_vm.finalCheck = $$a.concat([$$v]))
                  } else {
                    $$i > -1 &&
                      (_vm.finalCheck = $$a
                        .slice(0, $$i)
                        .concat($$a.slice($$i + 1)))
                  }
                } else {
                  _vm.finalCheck = $$c
                }
              }
            }
          }),
          _vm._v(" 我了解了\r\n\t\t\t")
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "photo-bt",
          on: {
            click: function($event) {
              _vm.SubmitUserInfo()
            }
          }
        },
        [_vm._v("儲存")]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/user-list.vue?vue&type=template&id=480e25f4&scoped=true&lang=html":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/user-list.vue?vue&type=template&id=480e25f4&scoped=true&lang=html ***!
  \*****************************************************************************************************************************************************************************************************************/
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
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.userList.length == 0,
            expression: "userList.length==0"
          }
        ],
        staticClass: "no-result-box"
      },
      [
        _vm._v("\r\n\t\t目前暫無符合條件的專家\r\n\t\t"),
        _c(
          "div",
          {
            staticClass: "center-bt",
            on: {
              click: function($event) {
                _vm.ResetCondition()
              }
            }
          },
          [_vm._v("重設條件")]
        )
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "user-list" },
      [
        _c(
          "transition-group",
          { staticStyle: { width: "100%" }, attrs: { name: "create" } },
          _vm._l(_vm.userList, function(u, i) {
            return _c(
              "div",
              { key: u.id, staticClass: "list-item one-third-w shadow-light" },
              [
                _c("a", { attrs: { href: "/user?target=" + u.id } }, [
                  _c(
                    "div",
                    {
                      staticClass: "owner-info",
                      style: { "background-color": u.headColor }
                    },
                    [
                      _c("img", {
                        staticClass: "owner-icon",
                        attrs: { src: u.icon }
                      }),
                      _vm._v(
                        "\r\n\t\t\t\t\t\t" +
                          _vm._s(u.profession) +
                          " - " +
                          _vm._s(u.name) +
                          "\r\n\t\t\t\t\t"
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "domain-statistic" }, [
                    _c("div", { staticClass: "domain-info" }, [
                      _c("div", { staticClass: "domain-icon cat-D1" }),
                      _vm._v(" "),
                      _c("div", { staticClass: "tip cat-D1" }, [
                        _vm._v("案例數 " + _vm._s(u.caseNum))
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "domain-num" }, [
                        _vm._v(_vm._s(u.caseNum))
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "domain-info" }, [
                      _c("div", { staticClass: "domain-icon cat-D2" }),
                      _vm._v(" "),
                      _c("div", { staticClass: "tip cat-D2" }, [
                        _vm._v("解方數 " + _vm._s(u.solNum))
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "domain-num" }, [
                        _vm._v(_vm._s(u.solNum))
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "desc" }, [_vm._v(_vm._s(u.desc))]),
                  _vm._v(" "),
                  _c("div", { staticClass: "feedback-statistic" }, [
                    _c("div", { staticClass: "feedback-num" }, [
                      _vm._v(_vm._s(u.county) + " - " + _vm._s(u.company))
                    ])
                  ])
                ])
              ]
            )
          })
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.noMore == false,
            expression: "noMore==false"
          }
        ],
        staticClass: "load-more",
        on: {
          click: function($event) {
            _vm.LoadMoreList()
          }
        }
      },
      [_vm._v("更多專家 ▼")]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/user-view.vue?vue&type=template&id=3f20547b&scoped=true&lang=html":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/vue/user-view.vue?vue&type=template&id=3f20547b&scoped=true&lang=html ***!
  \*****************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticClass: "user-view" },
    [
      _c("div", { staticClass: "feedback-statistic" }, [
        _c("div", { staticClass: "container" }, [
          _vm._v("\r\n\t\t\t案例數"),
          _c("div", { staticClass: "feedback-num" }, [
            _vm._v(_vm._s(_vm.target.caseNum))
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "container" }, [
          _vm._v("\r\n\t\t\t解方數"),
          _c("div", { staticClass: "feedback-num" }, [
            _vm._v(_vm._s(_vm.target.solNum))
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
                value: _vm.isMyAccount,
                expression: "isMyAccount"
              }
            ],
            staticClass: "container"
          },
          [
            _c(
              "div",
              {
                staticClass: "action-bt",
                on: {
                  click: function($event) {
                    _vm.setupUserInfo = true
                  }
                }
              },
              [_vm._v("修改資訊")]
            )
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "user-box" }, [
        _c("img", {
          staticClass: "user-photo",
          attrs: { src: _vm.target.photo }
        }),
        _vm._v(" "),
        _c("div", { staticClass: "user-info" }, [
          _c("div", { staticClass: "info-head" }, [
            _vm._v(
              _vm._s(_vm.target.profession) + " - " + _vm._s(_vm.target.name)
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "info-desc" }, [
            _vm._v(_vm._s(_vm.target.desc))
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "sub-title" }, [_vm._v("聯絡資訊")]),
      _vm._v(" "),
      _c("div", { staticClass: "contact-box" }, [
        _c("ul", [
          _c("li", [
            _c("div", { staticClass: "contact-item" }, [_vm._v("服務縣市：")]),
            _vm._v(" "),
            _c("div", { staticClass: "contact-info" }, [
              _vm._v(_vm._s(_vm.target.county || "未提供"))
            ])
          ]),
          _vm._v(" "),
          _c("li", [
            _c("div", { staticClass: "contact-item" }, [
              _vm._v("公司或組織名稱：")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "contact-info" }, [
              _vm.target.company && _vm.target.companyUrl
                ? _c("div", [
                    _c(
                      "a",
                      {
                        attrs: { href: _vm.user.companyUrl, target: "_blank" }
                      },
                      [_vm._v(_vm._s(_vm.target.company))]
                    )
                  ])
                : _c("div", [
                    _vm._v(
                      "\r\n\t\t\t\t\t\t" +
                        _vm._s(_vm.target.company || "未提供") +
                        "\r\n\t\t\t\t\t"
                    )
                  ])
            ])
          ]),
          _vm._v(" "),
          _c("li", [
            _c("div", { staticClass: "contact-item" }, [
              _vm._v("服務聯絡信箱：")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "contact-info" }, [
              _vm._v(_vm._s(_vm.target.contactEmail || "未提供"))
            ])
          ]),
          _vm._v(" "),
          _c("li", [
            _c("div", { staticClass: "contact-item" }, [
              _vm._v("服務聯絡電話：")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "contact-info" }, [
              _vm._v(_vm._s(_vm.target.tel || "未提供"))
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "separator" }),
      _vm._v(" "),
      _c("div", { staticClass: "sub-title" }, [_vm._v("案例列表")]),
      _vm._v(" "),
      _c("case-list", { ref: "caseList", attrs: { emptyAction: "0" } }),
      _vm._v(" "),
      _c("div", { staticClass: "sub-title" }, [_vm._v("解方列表")]),
      _vm._v(" "),
      _c("solution-list", { ref: "solutionList", attrs: { emptyAction: "0" } }),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.isMyAccount,
              expression: "isMyAccount"
            }
          ],
          staticClass: "tab-bar"
        },
        [
          _c("div", { staticClass: "tab-bt-container" }, [
            _c(
              "div",
              {
                staticClass: "tab-bt",
                on: {
                  click: function($event) {
                    _vm.setupUserInfo = true
                  }
                }
              },
              [_vm._v("修改資訊")]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "tab-bt",
                on: {
                  click: function($event) {
                    _vm.OpenPhotoSelect()
                  }
                }
              },
              [_vm._v("變更圖片")]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "tab-bt",
                on: {
                  click: function($event) {
                    _vm.Logout()
                  }
                }
              },
              [_vm._v("登出")]
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.isMyAccount,
              expression: "isMyAccount"
            }
          ],
          staticClass: "slide-panel",
          class: { open: _vm.setupUserInfo }
        },
        [
          _c(
            "div",
            { staticClass: "input-area" },
            [
              _c(
                "div",
                {
                  staticClass: "close-bt",
                  on: {
                    click: function($event) {
                      _vm.setupUserInfo = false
                    }
                  }
                },
                [_vm._v("X")]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "panel-title" }, [_vm._v("修改資訊")]),
              _vm._v(" "),
              _c("user-info-editor", { ref: "userInfoEditor" })
            ],
            1
          )
        ]
      )
    ],
    1
  )
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
/* harmony import */ var _vue_main_page_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vue/main-page.vue */ "./src/vue/main-page.vue");
/* harmony import */ var _vue_topbar_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vue/topbar.vue */ "./src/vue/topbar.vue");
/* harmony import */ var _vue_care_calculator_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../vue/care-calculator.vue */ "./src/vue/care-calculator.vue");
/* harmony import */ var _vue_login_panel_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../vue/login-panel.vue */ "./src/vue/login-panel.vue");
/* harmony import */ var _vue_case_editor_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../vue/case-editor.vue */ "./src/vue/case-editor.vue");
/* harmony import */ var _vue_case_list_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../vue/case-list.vue */ "./src/vue/case-list.vue");
/* harmony import */ var _vue_case_view_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../vue/case-view.vue */ "./src/vue/case-view.vue");
/* harmony import */ var _vue_user_view_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../vue/user-view.vue */ "./src/vue/user-view.vue");
/* harmony import */ var _vue_profession_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../vue/profession.vue */ "./src/vue/profession.vue");










var g_Util = __webpack_require__(/*! ../js/util */ "./src/js/util.js");

new Vue({
	el: '#careTips',
	components: { mainPage: _vue_main_page_vue__WEBPACK_IMPORTED_MODULE_0__["default"], topbar: _vue_topbar_vue__WEBPACK_IMPORTED_MODULE_1__["default"], careCalculator: _vue_care_calculator_vue__WEBPACK_IMPORTED_MODULE_2__["default"], loginPanel: _vue_login_panel_vue__WEBPACK_IMPORTED_MODULE_3__["default"], caseEditor: _vue_case_editor_vue__WEBPACK_IMPORTED_MODULE_4__["default"], caseList: _vue_case_list_vue__WEBPACK_IMPORTED_MODULE_5__["default"], caseView: _vue_case_view_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
		userView: _vue_user_view_vue__WEBPACK_IMPORTED_MODULE_7__["default"], profession: _vue_profession_vue__WEBPACK_IMPORTED_MODULE_8__["default"] },
	data: {
		user: null,
		message: "",
		showMessage: false
	},
	created: function () {
		window.addEventListener('resize', this.CloseMenu);
		$.get("/user/me", function (data) {
			if (data.user) {
				this.user = data.user;
				if (this.$refs.topbar) this.$refs.topbar.SetUser(data.user);
				if (this.$refs.userView) this.$refs.userView.SetUser(data.user);
				if (this.$refs.caseView) this.$refs.caseView.SetUser(data.user);
				if (this.$refs.caseEditor) this.$refs.caseEditor.SetUser(data.user);
			}

			var urlParam = g_Util.GetUrlParameter();
			if (urlParam.message) {
				alert(decodeURIComponent(urlParam.message));
			}

			g_Util.SetupAnchorScroll(-80);
		}.bind(this));
	},
	methods: {
		CloseMenu: function () {
			if (this.$refs.topbar) this.$refs.topbar.CloseMenu();
		},
		ChangeUserPhoto: function (photoInfo) {
			if (this.$refs.topbar) this.$refs.topbar.ChangeUserPhoto(photoInfo);
			if (this.$refs.userView) this.$refs.userView.ChangeUserPhoto(photoInfo);
		},
		ShowMessage: function (msg) {
			this.showMessage = true;
			this.message = msg;
			setTimeout(function () {
				this.showMessage = false;
				this.message = "";
			}.bind(this), 3000);
		}
	}
});

/***/ }),

/***/ "./src/js/util.js":
/*!************************!*\
  !*** ./src/js/util.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

var util = {};

util.NumberWithCommas = function (x) {
	if (!x) return "";
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

util.StrCodeToInt = function (str) {
	if (!str) return 0;
	var sum = 0;
	for (var i = 0; i < str.length; i++) {
		sum += str.charCodeAt(i);
	}
	return sum;
};

util.ColorCategory = function (size, light, saturate) {
	if (!light) light = 0.7;
	if (!saturate) saturate = 0.6;
	var step = 360.0 / size;
	var arr = [];
	for (var i = 0; i < size; i++) {
		arr.push(d3.hsl(i * step, saturate, light));
	}
	return function (i) {
		return arr[i].toString();
	};
};

util.GetUrlParameter = function () {
	var queryStr = window.location.search.substring(1);
	var paramArr = queryStr.split('&');

	var result = {};
	for (var i = 0; i < paramArr.length; i++) {
		var param = paramArr[i].split('=');
		result[param[0]] = param[1];
	}
	return result;
};

util.GoToAnchor = function (name, offset, callback) {
	if (!offset) offset = -80;
	var anchor = $('[name="' + name + '"]');
	if (anchor.length == 0) {
		anchor = $('a[id="' + name + '"]');
	}
	if (anchor.length > 0) {
		$('html').animate({
			scrollTop: anchor.offset().top + offset
		}, 500, callback);
		return false;
	}
	return true;
};

util.SetupAnchorScroll = function (offset) {
	$('a').click(function () {
		var href = $.attr(this, 'href');
		if (href) {
			var scroll = $("html").scrollTop();
			var index = href.indexOf("#");
			return util.GoToAnchor(href.substr(index + 1), offset);
		}
		return false;
	});
};

module.exports = util;

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/vue/care-calculator.vue":
/*!*************************************!*\
  !*** ./src/vue/care-calculator.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _care_calculator_vue_vue_type_template_id_6a0cf85c_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./care-calculator.vue?vue&type=template&id=6a0cf85c&scoped=true&lang=html */ "./src/vue/care-calculator.vue?vue&type=template&id=6a0cf85c&scoped=true&lang=html");
/* harmony import */ var _care_calculator_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./care-calculator.vue?vue&type=script&lang=js */ "./src/vue/care-calculator.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _care_calculator_vue_vue_type_style_index_0_id_6a0cf85c_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./care-calculator.vue?vue&type=style&index=0&id=6a0cf85c&lang=scss&scoped=true */ "./src/vue/care-calculator.vue?vue&type=style&index=0&id=6a0cf85c&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _care_calculator_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _care_calculator_vue_vue_type_template_id_6a0cf85c_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__["render"],
  _care_calculator_vue_vue_type_template_id_6a0cf85c_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6a0cf85c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src\\vue\\care-calculator.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/vue/care-calculator.vue?vue&type=script&lang=js":
/*!*************************************************************!*\
  !*** ./src/vue/care-calculator.vue?vue&type=script&lang=js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_care_calculator_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./care-calculator.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/care-calculator.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_care_calculator_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/vue/care-calculator.vue?vue&type=style&index=0&id=6a0cf85c&lang=scss&scoped=true":
/*!**********************************************************************************************!*\
  !*** ./src/vue/care-calculator.vue?vue&type=style&index=0&id=6a0cf85c&lang=scss&scoped=true ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_care_calculator_vue_vue_type_style_index_0_id_6a0cf85c_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader!../../node_modules/css-loader!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib??vue-loader-options!./care-calculator.vue?vue&type=style&index=0&id=6a0cf85c&lang=scss&scoped=true */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/care-calculator.vue?vue&type=style&index=0&id=6a0cf85c&lang=scss&scoped=true");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_care_calculator_vue_vue_type_style_index_0_id_6a0cf85c_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_care_calculator_vue_vue_type_style_index_0_id_6a0cf85c_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_care_calculator_vue_vue_type_style_index_0_id_6a0cf85c_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_care_calculator_vue_vue_type_style_index_0_id_6a0cf85c_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_care_calculator_vue_vue_type_style_index_0_id_6a0cf85c_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/vue/care-calculator.vue?vue&type=template&id=6a0cf85c&scoped=true&lang=html":
/*!*****************************************************************************************!*\
  !*** ./src/vue/care-calculator.vue?vue&type=template&id=6a0cf85c&scoped=true&lang=html ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_care_calculator_vue_vue_type_template_id_6a0cf85c_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./care-calculator.vue?vue&type=template&id=6a0cf85c&scoped=true&lang=html */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/care-calculator.vue?vue&type=template&id=6a0cf85c&scoped=true&lang=html");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_care_calculator_vue_vue_type_template_id_6a0cf85c_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_care_calculator_vue_vue_type_template_id_6a0cf85c_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/vue/care-service-selection.vue":
/*!********************************************!*\
  !*** ./src/vue/care-service-selection.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _care_service_selection_vue_vue_type_template_id_35388ed4_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./care-service-selection.vue?vue&type=template&id=35388ed4&scoped=true&lang=html */ "./src/vue/care-service-selection.vue?vue&type=template&id=35388ed4&scoped=true&lang=html");
/* harmony import */ var _care_service_selection_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./care-service-selection.vue?vue&type=script&lang=js */ "./src/vue/care-service-selection.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _care_service_selection_vue_vue_type_style_index_0_id_35388ed4_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./care-service-selection.vue?vue&type=style&index=0&id=35388ed4&lang=scss&scoped=true */ "./src/vue/care-service-selection.vue?vue&type=style&index=0&id=35388ed4&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _care_service_selection_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _care_service_selection_vue_vue_type_template_id_35388ed4_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__["render"],
  _care_service_selection_vue_vue_type_template_id_35388ed4_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "35388ed4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src\\vue\\care-service-selection.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/vue/care-service-selection.vue?vue&type=script&lang=js":
/*!********************************************************************!*\
  !*** ./src/vue/care-service-selection.vue?vue&type=script&lang=js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_care_service_selection_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./care-service-selection.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/care-service-selection.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_care_service_selection_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/vue/care-service-selection.vue?vue&type=style&index=0&id=35388ed4&lang=scss&scoped=true":
/*!*****************************************************************************************************!*\
  !*** ./src/vue/care-service-selection.vue?vue&type=style&index=0&id=35388ed4&lang=scss&scoped=true ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_care_service_selection_vue_vue_type_style_index_0_id_35388ed4_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader!../../node_modules/css-loader!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib??vue-loader-options!./care-service-selection.vue?vue&type=style&index=0&id=35388ed4&lang=scss&scoped=true */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/care-service-selection.vue?vue&type=style&index=0&id=35388ed4&lang=scss&scoped=true");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_care_service_selection_vue_vue_type_style_index_0_id_35388ed4_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_care_service_selection_vue_vue_type_style_index_0_id_35388ed4_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_care_service_selection_vue_vue_type_style_index_0_id_35388ed4_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_care_service_selection_vue_vue_type_style_index_0_id_35388ed4_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_care_service_selection_vue_vue_type_style_index_0_id_35388ed4_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/vue/care-service-selection.vue?vue&type=template&id=35388ed4&scoped=true&lang=html":
/*!************************************************************************************************!*\
  !*** ./src/vue/care-service-selection.vue?vue&type=template&id=35388ed4&scoped=true&lang=html ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_care_service_selection_vue_vue_type_template_id_35388ed4_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./care-service-selection.vue?vue&type=template&id=35388ed4&scoped=true&lang=html */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/care-service-selection.vue?vue&type=template&id=35388ed4&scoped=true&lang=html");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_care_service_selection_vue_vue_type_template_id_35388ed4_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_care_service_selection_vue_vue_type_template_id_35388ed4_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/vue/case-editor.vue":
/*!*********************************!*\
  !*** ./src/vue/case-editor.vue ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _case_editor_vue_vue_type_template_id_84ab2184_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./case-editor.vue?vue&type=template&id=84ab2184&scoped=true&lang=html */ "./src/vue/case-editor.vue?vue&type=template&id=84ab2184&scoped=true&lang=html");
/* harmony import */ var _case_editor_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./case-editor.vue?vue&type=script&lang=js */ "./src/vue/case-editor.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _case_editor_vue_vue_type_style_index_0_id_84ab2184_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./case-editor.vue?vue&type=style&index=0&id=84ab2184&lang=scss&scoped=true */ "./src/vue/case-editor.vue?vue&type=style&index=0&id=84ab2184&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _case_editor_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _case_editor_vue_vue_type_template_id_84ab2184_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__["render"],
  _case_editor_vue_vue_type_template_id_84ab2184_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "84ab2184",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src\\vue\\case-editor.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/vue/case-editor.vue?vue&type=script&lang=js":
/*!*********************************************************!*\
  !*** ./src/vue/case-editor.vue?vue&type=script&lang=js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_case_editor_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./case-editor.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/case-editor.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_case_editor_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/vue/case-editor.vue?vue&type=style&index=0&id=84ab2184&lang=scss&scoped=true":
/*!******************************************************************************************!*\
  !*** ./src/vue/case-editor.vue?vue&type=style&index=0&id=84ab2184&lang=scss&scoped=true ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_case_editor_vue_vue_type_style_index_0_id_84ab2184_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader!../../node_modules/css-loader!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib??vue-loader-options!./case-editor.vue?vue&type=style&index=0&id=84ab2184&lang=scss&scoped=true */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/case-editor.vue?vue&type=style&index=0&id=84ab2184&lang=scss&scoped=true");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_case_editor_vue_vue_type_style_index_0_id_84ab2184_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_case_editor_vue_vue_type_style_index_0_id_84ab2184_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_case_editor_vue_vue_type_style_index_0_id_84ab2184_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_case_editor_vue_vue_type_style_index_0_id_84ab2184_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_case_editor_vue_vue_type_style_index_0_id_84ab2184_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/vue/case-editor.vue?vue&type=template&id=84ab2184&scoped=true&lang=html":
/*!*************************************************************************************!*\
  !*** ./src/vue/case-editor.vue?vue&type=template&id=84ab2184&scoped=true&lang=html ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_case_editor_vue_vue_type_template_id_84ab2184_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./case-editor.vue?vue&type=template&id=84ab2184&scoped=true&lang=html */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/case-editor.vue?vue&type=template&id=84ab2184&scoped=true&lang=html");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_case_editor_vue_vue_type_template_id_84ab2184_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_case_editor_vue_vue_type_template_id_84ab2184_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/vue/case-list.vue":
/*!*******************************!*\
  !*** ./src/vue/case-list.vue ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _case_list_vue_vue_type_template_id_95bdcfa2_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./case-list.vue?vue&type=template&id=95bdcfa2&scoped=true&lang=html */ "./src/vue/case-list.vue?vue&type=template&id=95bdcfa2&scoped=true&lang=html");
/* harmony import */ var _case_list_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./case-list.vue?vue&type=script&lang=js */ "./src/vue/case-list.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _case_list_vue_vue_type_style_index_0_id_95bdcfa2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./case-list.vue?vue&type=style&index=0&id=95bdcfa2&lang=scss&scoped=true */ "./src/vue/case-list.vue?vue&type=style&index=0&id=95bdcfa2&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _case_list_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _case_list_vue_vue_type_template_id_95bdcfa2_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__["render"],
  _case_list_vue_vue_type_template_id_95bdcfa2_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "95bdcfa2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src\\vue\\case-list.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/vue/case-list.vue?vue&type=script&lang=js":
/*!*******************************************************!*\
  !*** ./src/vue/case-list.vue?vue&type=script&lang=js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_case_list_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./case-list.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/case-list.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_case_list_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/vue/case-list.vue?vue&type=style&index=0&id=95bdcfa2&lang=scss&scoped=true":
/*!****************************************************************************************!*\
  !*** ./src/vue/case-list.vue?vue&type=style&index=0&id=95bdcfa2&lang=scss&scoped=true ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_case_list_vue_vue_type_style_index_0_id_95bdcfa2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader!../../node_modules/css-loader!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib??vue-loader-options!./case-list.vue?vue&type=style&index=0&id=95bdcfa2&lang=scss&scoped=true */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/case-list.vue?vue&type=style&index=0&id=95bdcfa2&lang=scss&scoped=true");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_case_list_vue_vue_type_style_index_0_id_95bdcfa2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_case_list_vue_vue_type_style_index_0_id_95bdcfa2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_case_list_vue_vue_type_style_index_0_id_95bdcfa2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_case_list_vue_vue_type_style_index_0_id_95bdcfa2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_case_list_vue_vue_type_style_index_0_id_95bdcfa2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/vue/case-list.vue?vue&type=template&id=95bdcfa2&scoped=true&lang=html":
/*!***********************************************************************************!*\
  !*** ./src/vue/case-list.vue?vue&type=template&id=95bdcfa2&scoped=true&lang=html ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_case_list_vue_vue_type_template_id_95bdcfa2_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./case-list.vue?vue&type=template&id=95bdcfa2&scoped=true&lang=html */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/case-list.vue?vue&type=template&id=95bdcfa2&scoped=true&lang=html");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_case_list_vue_vue_type_template_id_95bdcfa2_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_case_list_vue_vue_type_template_id_95bdcfa2_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/vue/case-view.vue":
/*!*******************************!*\
  !*** ./src/vue/case-view.vue ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _case_view_vue_vue_type_template_id_a7997294_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./case-view.vue?vue&type=template&id=a7997294&scoped=true&lang=html */ "./src/vue/case-view.vue?vue&type=template&id=a7997294&scoped=true&lang=html");
/* harmony import */ var _case_view_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./case-view.vue?vue&type=script&lang=js */ "./src/vue/case-view.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _case_view_vue_vue_type_style_index_0_id_a7997294_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./case-view.vue?vue&type=style&index=0&id=a7997294&lang=scss&scoped=true */ "./src/vue/case-view.vue?vue&type=style&index=0&id=a7997294&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _case_view_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _case_view_vue_vue_type_template_id_a7997294_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__["render"],
  _case_view_vue_vue_type_template_id_a7997294_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "a7997294",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src\\vue\\case-view.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/vue/case-view.vue?vue&type=script&lang=js":
/*!*******************************************************!*\
  !*** ./src/vue/case-view.vue?vue&type=script&lang=js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_case_view_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./case-view.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/case-view.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_case_view_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/vue/case-view.vue?vue&type=style&index=0&id=a7997294&lang=scss&scoped=true":
/*!****************************************************************************************!*\
  !*** ./src/vue/case-view.vue?vue&type=style&index=0&id=a7997294&lang=scss&scoped=true ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_case_view_vue_vue_type_style_index_0_id_a7997294_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader!../../node_modules/css-loader!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib??vue-loader-options!./case-view.vue?vue&type=style&index=0&id=a7997294&lang=scss&scoped=true */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/case-view.vue?vue&type=style&index=0&id=a7997294&lang=scss&scoped=true");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_case_view_vue_vue_type_style_index_0_id_a7997294_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_case_view_vue_vue_type_style_index_0_id_a7997294_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_case_view_vue_vue_type_style_index_0_id_a7997294_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_case_view_vue_vue_type_style_index_0_id_a7997294_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_case_view_vue_vue_type_style_index_0_id_a7997294_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/vue/case-view.vue?vue&type=template&id=a7997294&scoped=true&lang=html":
/*!***********************************************************************************!*\
  !*** ./src/vue/case-view.vue?vue&type=template&id=a7997294&scoped=true&lang=html ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_case_view_vue_vue_type_template_id_a7997294_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./case-view.vue?vue&type=template&id=a7997294&scoped=true&lang=html */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/case-view.vue?vue&type=template&id=a7997294&scoped=true&lang=html");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_case_view_vue_vue_type_template_id_a7997294_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_case_view_vue_vue_type_template_id_a7997294_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/vue/login-panel.vue":
/*!*********************************!*\
  !*** ./src/vue/login-panel.vue ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_panel_vue_vue_type_template_id_16f2f798_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-panel.vue?vue&type=template&id=16f2f798&scoped=true&lang=html */ "./src/vue/login-panel.vue?vue&type=template&id=16f2f798&scoped=true&lang=html");
/* harmony import */ var _login_panel_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-panel.vue?vue&type=script&lang=js */ "./src/vue/login-panel.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _login_panel_vue_vue_type_style_index_0_id_16f2f798_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login-panel.vue?vue&type=style&index=0&id=16f2f798&lang=scss&scoped=true */ "./src/vue/login-panel.vue?vue&type=style&index=0&id=16f2f798&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _login_panel_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _login_panel_vue_vue_type_template_id_16f2f798_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__["render"],
  _login_panel_vue_vue_type_template_id_16f2f798_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "16f2f798",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src\\vue\\login-panel.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/vue/login-panel.vue?vue&type=script&lang=js":
/*!*********************************************************!*\
  !*** ./src/vue/login-panel.vue?vue&type=script&lang=js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_login_panel_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./login-panel.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/login-panel.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_login_panel_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/vue/login-panel.vue?vue&type=style&index=0&id=16f2f798&lang=scss&scoped=true":
/*!******************************************************************************************!*\
  !*** ./src/vue/login-panel.vue?vue&type=style&index=0&id=16f2f798&lang=scss&scoped=true ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_login_panel_vue_vue_type_style_index_0_id_16f2f798_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader!../../node_modules/css-loader!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib??vue-loader-options!./login-panel.vue?vue&type=style&index=0&id=16f2f798&lang=scss&scoped=true */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/login-panel.vue?vue&type=style&index=0&id=16f2f798&lang=scss&scoped=true");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_login_panel_vue_vue_type_style_index_0_id_16f2f798_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_login_panel_vue_vue_type_style_index_0_id_16f2f798_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_login_panel_vue_vue_type_style_index_0_id_16f2f798_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_login_panel_vue_vue_type_style_index_0_id_16f2f798_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_login_panel_vue_vue_type_style_index_0_id_16f2f798_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/vue/login-panel.vue?vue&type=template&id=16f2f798&scoped=true&lang=html":
/*!*************************************************************************************!*\
  !*** ./src/vue/login-panel.vue?vue&type=template&id=16f2f798&scoped=true&lang=html ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_panel_vue_vue_type_template_id_16f2f798_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./login-panel.vue?vue&type=template&id=16f2f798&scoped=true&lang=html */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/login-panel.vue?vue&type=template&id=16f2f798&scoped=true&lang=html");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_panel_vue_vue_type_template_id_16f2f798_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_panel_vue_vue_type_template_id_16f2f798_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/vue/main-page.vue":
/*!*******************************!*\
  !*** ./src/vue/main-page.vue ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_page_vue_vue_type_template_id_a22aad92_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-page.vue?vue&type=template&id=a22aad92&scoped=true&lang=html */ "./src/vue/main-page.vue?vue&type=template&id=a22aad92&scoped=true&lang=html");
/* harmony import */ var _main_page_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-page.vue?vue&type=script&lang=js */ "./src/vue/main-page.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _main_page_vue_vue_type_style_index_0_id_a22aad92_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-page.vue?vue&type=style&index=0&id=a22aad92&lang=scss&scoped=true */ "./src/vue/main-page.vue?vue&type=style&index=0&id=a22aad92&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _main_page_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _main_page_vue_vue_type_template_id_a22aad92_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__["render"],
  _main_page_vue_vue_type_template_id_a22aad92_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "a22aad92",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src\\vue\\main-page.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/vue/main-page.vue?vue&type=script&lang=js":
/*!*******************************************************!*\
  !*** ./src/vue/main-page.vue?vue&type=script&lang=js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_main_page_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./main-page.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/main-page.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_main_page_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/vue/main-page.vue?vue&type=style&index=0&id=a22aad92&lang=scss&scoped=true":
/*!****************************************************************************************!*\
  !*** ./src/vue/main-page.vue?vue&type=style&index=0&id=a22aad92&lang=scss&scoped=true ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_main_page_vue_vue_type_style_index_0_id_a22aad92_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader!../../node_modules/css-loader!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib??vue-loader-options!./main-page.vue?vue&type=style&index=0&id=a22aad92&lang=scss&scoped=true */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/main-page.vue?vue&type=style&index=0&id=a22aad92&lang=scss&scoped=true");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_main_page_vue_vue_type_style_index_0_id_a22aad92_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_main_page_vue_vue_type_style_index_0_id_a22aad92_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_main_page_vue_vue_type_style_index_0_id_a22aad92_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_main_page_vue_vue_type_style_index_0_id_a22aad92_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_main_page_vue_vue_type_style_index_0_id_a22aad92_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/vue/main-page.vue?vue&type=template&id=a22aad92&scoped=true&lang=html":
/*!***********************************************************************************!*\
  !*** ./src/vue/main-page.vue?vue&type=template&id=a22aad92&scoped=true&lang=html ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_page_vue_vue_type_template_id_a22aad92_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./main-page.vue?vue&type=template&id=a22aad92&scoped=true&lang=html */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/main-page.vue?vue&type=template&id=a22aad92&scoped=true&lang=html");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_page_vue_vue_type_template_id_a22aad92_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_page_vue_vue_type_template_id_a22aad92_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/vue/profession.vue":
/*!********************************!*\
  !*** ./src/vue/profession.vue ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _profession_vue_vue_type_template_id_2ab0df18_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profession.vue?vue&type=template&id=2ab0df18&scoped=true&lang=html */ "./src/vue/profession.vue?vue&type=template&id=2ab0df18&scoped=true&lang=html");
/* harmony import */ var _profession_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profession.vue?vue&type=script&lang=js */ "./src/vue/profession.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _profession_vue_vue_type_style_index_0_id_2ab0df18_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profession.vue?vue&type=style&index=0&id=2ab0df18&lang=scss&scoped=true */ "./src/vue/profession.vue?vue&type=style&index=0&id=2ab0df18&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _profession_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _profession_vue_vue_type_template_id_2ab0df18_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__["render"],
  _profession_vue_vue_type_template_id_2ab0df18_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2ab0df18",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src\\vue\\profession.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/vue/profession.vue?vue&type=script&lang=js":
/*!********************************************************!*\
  !*** ./src/vue/profession.vue?vue&type=script&lang=js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_profession_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./profession.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/profession.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_profession_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/vue/profession.vue?vue&type=style&index=0&id=2ab0df18&lang=scss&scoped=true":
/*!*****************************************************************************************!*\
  !*** ./src/vue/profession.vue?vue&type=style&index=0&id=2ab0df18&lang=scss&scoped=true ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_profession_vue_vue_type_style_index_0_id_2ab0df18_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader!../../node_modules/css-loader!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib??vue-loader-options!./profession.vue?vue&type=style&index=0&id=2ab0df18&lang=scss&scoped=true */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/profession.vue?vue&type=style&index=0&id=2ab0df18&lang=scss&scoped=true");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_profession_vue_vue_type_style_index_0_id_2ab0df18_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_profession_vue_vue_type_style_index_0_id_2ab0df18_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_profession_vue_vue_type_style_index_0_id_2ab0df18_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_profession_vue_vue_type_style_index_0_id_2ab0df18_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_profession_vue_vue_type_style_index_0_id_2ab0df18_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/vue/profession.vue?vue&type=template&id=2ab0df18&scoped=true&lang=html":
/*!************************************************************************************!*\
  !*** ./src/vue/profession.vue?vue&type=template&id=2ab0df18&scoped=true&lang=html ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_profession_vue_vue_type_template_id_2ab0df18_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./profession.vue?vue&type=template&id=2ab0df18&scoped=true&lang=html */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/profession.vue?vue&type=template&id=2ab0df18&scoped=true&lang=html");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_profession_vue_vue_type_template_id_2ab0df18_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_profession_vue_vue_type_template_id_2ab0df18_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/vue/solution-editor.vue":
/*!*************************************!*\
  !*** ./src/vue/solution-editor.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _solution_editor_vue_vue_type_template_id_472eb156_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./solution-editor.vue?vue&type=template&id=472eb156&scoped=true&lang=html */ "./src/vue/solution-editor.vue?vue&type=template&id=472eb156&scoped=true&lang=html");
/* harmony import */ var _solution_editor_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./solution-editor.vue?vue&type=script&lang=js */ "./src/vue/solution-editor.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _solution_editor_vue_vue_type_style_index_0_id_472eb156_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./solution-editor.vue?vue&type=style&index=0&id=472eb156&lang=scss&scoped=true */ "./src/vue/solution-editor.vue?vue&type=style&index=0&id=472eb156&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _solution_editor_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _solution_editor_vue_vue_type_template_id_472eb156_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__["render"],
  _solution_editor_vue_vue_type_template_id_472eb156_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "472eb156",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src\\vue\\solution-editor.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/vue/solution-editor.vue?vue&type=script&lang=js":
/*!*************************************************************!*\
  !*** ./src/vue/solution-editor.vue?vue&type=script&lang=js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_solution_editor_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./solution-editor.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/solution-editor.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_solution_editor_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/vue/solution-editor.vue?vue&type=style&index=0&id=472eb156&lang=scss&scoped=true":
/*!**********************************************************************************************!*\
  !*** ./src/vue/solution-editor.vue?vue&type=style&index=0&id=472eb156&lang=scss&scoped=true ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_solution_editor_vue_vue_type_style_index_0_id_472eb156_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader!../../node_modules/css-loader!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib??vue-loader-options!./solution-editor.vue?vue&type=style&index=0&id=472eb156&lang=scss&scoped=true */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/solution-editor.vue?vue&type=style&index=0&id=472eb156&lang=scss&scoped=true");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_solution_editor_vue_vue_type_style_index_0_id_472eb156_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_solution_editor_vue_vue_type_style_index_0_id_472eb156_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_solution_editor_vue_vue_type_style_index_0_id_472eb156_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_solution_editor_vue_vue_type_style_index_0_id_472eb156_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_solution_editor_vue_vue_type_style_index_0_id_472eb156_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/vue/solution-editor.vue?vue&type=template&id=472eb156&scoped=true&lang=html":
/*!*****************************************************************************************!*\
  !*** ./src/vue/solution-editor.vue?vue&type=template&id=472eb156&scoped=true&lang=html ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_solution_editor_vue_vue_type_template_id_472eb156_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./solution-editor.vue?vue&type=template&id=472eb156&scoped=true&lang=html */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/solution-editor.vue?vue&type=template&id=472eb156&scoped=true&lang=html");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_solution_editor_vue_vue_type_template_id_472eb156_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_solution_editor_vue_vue_type_template_id_472eb156_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/vue/solution-list.vue":
/*!***********************************!*\
  !*** ./src/vue/solution-list.vue ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _solution_list_vue_vue_type_template_id_8d272bf4_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./solution-list.vue?vue&type=template&id=8d272bf4&scoped=true&lang=html */ "./src/vue/solution-list.vue?vue&type=template&id=8d272bf4&scoped=true&lang=html");
/* harmony import */ var _solution_list_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./solution-list.vue?vue&type=script&lang=js */ "./src/vue/solution-list.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _solution_list_vue_vue_type_style_index_0_id_8d272bf4_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./solution-list.vue?vue&type=style&index=0&id=8d272bf4&lang=scss&scoped=true */ "./src/vue/solution-list.vue?vue&type=style&index=0&id=8d272bf4&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _solution_list_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _solution_list_vue_vue_type_template_id_8d272bf4_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__["render"],
  _solution_list_vue_vue_type_template_id_8d272bf4_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "8d272bf4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src\\vue\\solution-list.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/vue/solution-list.vue?vue&type=script&lang=js":
/*!***********************************************************!*\
  !*** ./src/vue/solution-list.vue?vue&type=script&lang=js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_solution_list_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./solution-list.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/solution-list.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_solution_list_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/vue/solution-list.vue?vue&type=style&index=0&id=8d272bf4&lang=scss&scoped=true":
/*!********************************************************************************************!*\
  !*** ./src/vue/solution-list.vue?vue&type=style&index=0&id=8d272bf4&lang=scss&scoped=true ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_solution_list_vue_vue_type_style_index_0_id_8d272bf4_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader!../../node_modules/css-loader!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib??vue-loader-options!./solution-list.vue?vue&type=style&index=0&id=8d272bf4&lang=scss&scoped=true */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/solution-list.vue?vue&type=style&index=0&id=8d272bf4&lang=scss&scoped=true");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_solution_list_vue_vue_type_style_index_0_id_8d272bf4_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_solution_list_vue_vue_type_style_index_0_id_8d272bf4_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_solution_list_vue_vue_type_style_index_0_id_8d272bf4_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_solution_list_vue_vue_type_style_index_0_id_8d272bf4_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_solution_list_vue_vue_type_style_index_0_id_8d272bf4_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/vue/solution-list.vue?vue&type=template&id=8d272bf4&scoped=true&lang=html":
/*!***************************************************************************************!*\
  !*** ./src/vue/solution-list.vue?vue&type=template&id=8d272bf4&scoped=true&lang=html ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_solution_list_vue_vue_type_template_id_8d272bf4_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./solution-list.vue?vue&type=template&id=8d272bf4&scoped=true&lang=html */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/solution-list.vue?vue&type=template&id=8d272bf4&scoped=true&lang=html");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_solution_list_vue_vue_type_template_id_8d272bf4_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_solution_list_vue_vue_type_template_id_8d272bf4_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/vue/solution-view.vue":
/*!***********************************!*\
  !*** ./src/vue/solution-view.vue ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _solution_view_vue_vue_type_template_id_9f02cee6_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./solution-view.vue?vue&type=template&id=9f02cee6&scoped=true&lang=html */ "./src/vue/solution-view.vue?vue&type=template&id=9f02cee6&scoped=true&lang=html");
/* harmony import */ var _solution_view_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./solution-view.vue?vue&type=script&lang=js */ "./src/vue/solution-view.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _solution_view_vue_vue_type_style_index_0_id_9f02cee6_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./solution-view.vue?vue&type=style&index=0&id=9f02cee6&lang=scss&scoped=true */ "./src/vue/solution-view.vue?vue&type=style&index=0&id=9f02cee6&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _solution_view_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _solution_view_vue_vue_type_template_id_9f02cee6_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__["render"],
  _solution_view_vue_vue_type_template_id_9f02cee6_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "9f02cee6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src\\vue\\solution-view.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/vue/solution-view.vue?vue&type=script&lang=js":
/*!***********************************************************!*\
  !*** ./src/vue/solution-view.vue?vue&type=script&lang=js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_solution_view_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./solution-view.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/solution-view.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_solution_view_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/vue/solution-view.vue?vue&type=style&index=0&id=9f02cee6&lang=scss&scoped=true":
/*!********************************************************************************************!*\
  !*** ./src/vue/solution-view.vue?vue&type=style&index=0&id=9f02cee6&lang=scss&scoped=true ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_solution_view_vue_vue_type_style_index_0_id_9f02cee6_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader!../../node_modules/css-loader!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib??vue-loader-options!./solution-view.vue?vue&type=style&index=0&id=9f02cee6&lang=scss&scoped=true */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/solution-view.vue?vue&type=style&index=0&id=9f02cee6&lang=scss&scoped=true");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_solution_view_vue_vue_type_style_index_0_id_9f02cee6_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_solution_view_vue_vue_type_style_index_0_id_9f02cee6_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_solution_view_vue_vue_type_style_index_0_id_9f02cee6_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_solution_view_vue_vue_type_style_index_0_id_9f02cee6_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_solution_view_vue_vue_type_style_index_0_id_9f02cee6_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/vue/solution-view.vue?vue&type=template&id=9f02cee6&scoped=true&lang=html":
/*!***************************************************************************************!*\
  !*** ./src/vue/solution-view.vue?vue&type=template&id=9f02cee6&scoped=true&lang=html ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_solution_view_vue_vue_type_template_id_9f02cee6_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./solution-view.vue?vue&type=template&id=9f02cee6&scoped=true&lang=html */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/solution-view.vue?vue&type=template&id=9f02cee6&scoped=true&lang=html");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_solution_view_vue_vue_type_template_id_9f02cee6_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_solution_view_vue_vue_type_template_id_9f02cee6_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./src/vue/user-info-editor.vue":
/*!**************************************!*\
  !*** ./src/vue/user-info-editor.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_info_editor_vue_vue_type_template_id_ef839ef4_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-info-editor.vue?vue&type=template&id=ef839ef4&scoped=true&lang=html */ "./src/vue/user-info-editor.vue?vue&type=template&id=ef839ef4&scoped=true&lang=html");
/* harmony import */ var _user_info_editor_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-info-editor.vue?vue&type=script&lang=js */ "./src/vue/user-info-editor.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _user_info_editor_vue_vue_type_style_index_0_id_ef839ef4_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-info-editor.vue?vue&type=style&index=0&id=ef839ef4&lang=scss&scoped=true */ "./src/vue/user-info-editor.vue?vue&type=style&index=0&id=ef839ef4&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _user_info_editor_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _user_info_editor_vue_vue_type_template_id_ef839ef4_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__["render"],
  _user_info_editor_vue_vue_type_template_id_ef839ef4_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "ef839ef4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src\\vue\\user-info-editor.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/vue/user-info-editor.vue?vue&type=script&lang=js":
/*!**************************************************************!*\
  !*** ./src/vue/user-info-editor.vue?vue&type=script&lang=js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_user_info_editor_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./user-info-editor.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/user-info-editor.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_user_info_editor_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/vue/user-info-editor.vue?vue&type=style&index=0&id=ef839ef4&lang=scss&scoped=true":
/*!***********************************************************************************************!*\
  !*** ./src/vue/user-info-editor.vue?vue&type=style&index=0&id=ef839ef4&lang=scss&scoped=true ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_user_info_editor_vue_vue_type_style_index_0_id_ef839ef4_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader!../../node_modules/css-loader!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib??vue-loader-options!./user-info-editor.vue?vue&type=style&index=0&id=ef839ef4&lang=scss&scoped=true */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/user-info-editor.vue?vue&type=style&index=0&id=ef839ef4&lang=scss&scoped=true");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_user_info_editor_vue_vue_type_style_index_0_id_ef839ef4_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_user_info_editor_vue_vue_type_style_index_0_id_ef839ef4_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_user_info_editor_vue_vue_type_style_index_0_id_ef839ef4_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_user_info_editor_vue_vue_type_style_index_0_id_ef839ef4_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_user_info_editor_vue_vue_type_style_index_0_id_ef839ef4_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/vue/user-info-editor.vue?vue&type=template&id=ef839ef4&scoped=true&lang=html":
/*!******************************************************************************************!*\
  !*** ./src/vue/user-info-editor.vue?vue&type=template&id=ef839ef4&scoped=true&lang=html ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_user_info_editor_vue_vue_type_template_id_ef839ef4_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./user-info-editor.vue?vue&type=template&id=ef839ef4&scoped=true&lang=html */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/user-info-editor.vue?vue&type=template&id=ef839ef4&scoped=true&lang=html");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_user_info_editor_vue_vue_type_template_id_ef839ef4_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_user_info_editor_vue_vue_type_template_id_ef839ef4_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/vue/user-list.vue":
/*!*******************************!*\
  !*** ./src/vue/user-list.vue ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_list_vue_vue_type_template_id_480e25f4_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-list.vue?vue&type=template&id=480e25f4&scoped=true&lang=html */ "./src/vue/user-list.vue?vue&type=template&id=480e25f4&scoped=true&lang=html");
/* harmony import */ var _user_list_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-list.vue?vue&type=script&lang=js */ "./src/vue/user-list.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _user_list_vue_vue_type_style_index_0_id_480e25f4_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-list.vue?vue&type=style&index=0&id=480e25f4&lang=scss&scoped=true */ "./src/vue/user-list.vue?vue&type=style&index=0&id=480e25f4&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _user_list_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _user_list_vue_vue_type_template_id_480e25f4_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__["render"],
  _user_list_vue_vue_type_template_id_480e25f4_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "480e25f4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src\\vue\\user-list.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/vue/user-list.vue?vue&type=script&lang=js":
/*!*******************************************************!*\
  !*** ./src/vue/user-list.vue?vue&type=script&lang=js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_user_list_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./user-list.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/user-list.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_user_list_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/vue/user-list.vue?vue&type=style&index=0&id=480e25f4&lang=scss&scoped=true":
/*!****************************************************************************************!*\
  !*** ./src/vue/user-list.vue?vue&type=style&index=0&id=480e25f4&lang=scss&scoped=true ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_user_list_vue_vue_type_style_index_0_id_480e25f4_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader!../../node_modules/css-loader!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib??vue-loader-options!./user-list.vue?vue&type=style&index=0&id=480e25f4&lang=scss&scoped=true */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/user-list.vue?vue&type=style&index=0&id=480e25f4&lang=scss&scoped=true");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_user_list_vue_vue_type_style_index_0_id_480e25f4_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_user_list_vue_vue_type_style_index_0_id_480e25f4_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_user_list_vue_vue_type_style_index_0_id_480e25f4_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_user_list_vue_vue_type_style_index_0_id_480e25f4_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_user_list_vue_vue_type_style_index_0_id_480e25f4_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/vue/user-list.vue?vue&type=template&id=480e25f4&scoped=true&lang=html":
/*!***********************************************************************************!*\
  !*** ./src/vue/user-list.vue?vue&type=template&id=480e25f4&scoped=true&lang=html ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_user_list_vue_vue_type_template_id_480e25f4_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./user-list.vue?vue&type=template&id=480e25f4&scoped=true&lang=html */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/user-list.vue?vue&type=template&id=480e25f4&scoped=true&lang=html");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_user_list_vue_vue_type_template_id_480e25f4_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_user_list_vue_vue_type_template_id_480e25f4_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/vue/user-view.vue":
/*!*******************************!*\
  !*** ./src/vue/user-view.vue ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_view_vue_vue_type_template_id_3f20547b_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-view.vue?vue&type=template&id=3f20547b&scoped=true&lang=html */ "./src/vue/user-view.vue?vue&type=template&id=3f20547b&scoped=true&lang=html");
/* harmony import */ var _user_view_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-view.vue?vue&type=script&lang=js */ "./src/vue/user-view.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _user_view_vue_vue_type_style_index_0_id_3f20547b_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-view.vue?vue&type=style&index=0&id=3f20547b&lang=scss&scoped=true */ "./src/vue/user-view.vue?vue&type=style&index=0&id=3f20547b&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _user_view_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _user_view_vue_vue_type_template_id_3f20547b_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__["render"],
  _user_view_vue_vue_type_template_id_3f20547b_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3f20547b",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src\\vue\\user-view.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/vue/user-view.vue?vue&type=script&lang=js":
/*!*******************************************************!*\
  !*** ./src/vue/user-view.vue?vue&type=script&lang=js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_user_view_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./user-view.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/user-view.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_user_view_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/vue/user-view.vue?vue&type=style&index=0&id=3f20547b&lang=scss&scoped=true":
/*!****************************************************************************************!*\
  !*** ./src/vue/user-view.vue?vue&type=style&index=0&id=3f20547b&lang=scss&scoped=true ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_user_view_vue_vue_type_style_index_0_id_3f20547b_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader!../../node_modules/css-loader!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib??vue-loader-options!./user-view.vue?vue&type=style&index=0&id=3f20547b&lang=scss&scoped=true */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/user-view.vue?vue&type=style&index=0&id=3f20547b&lang=scss&scoped=true");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_user_view_vue_vue_type_style_index_0_id_3f20547b_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_user_view_vue_vue_type_style_index_0_id_3f20547b_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_user_view_vue_vue_type_style_index_0_id_3f20547b_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_user_view_vue_vue_type_style_index_0_id_3f20547b_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_user_view_vue_vue_type_style_index_0_id_3f20547b_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/vue/user-view.vue?vue&type=template&id=3f20547b&scoped=true&lang=html":
/*!***********************************************************************************!*\
  !*** ./src/vue/user-view.vue?vue&type=template&id=3f20547b&scoped=true&lang=html ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_user_view_vue_vue_type_template_id_3f20547b_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./user-view.vue?vue&type=template&id=3f20547b&scoped=true&lang=html */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/vue/user-view.vue?vue&type=template&id=3f20547b&scoped=true&lang=html");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_user_view_vue_vue_type_template_id_3f20547b_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_user_view_vue_vue_type_template_id_3f20547b_scoped_true_lang_html__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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