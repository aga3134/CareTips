<template lang="html">
<div class="care-calculator">
	<div class="price-panel">
		<div class="comp-header">照服計算機</div>
		<div class="option-container">
			<div class="price-option">
				補助身份
				<select v-model="identity" v-on:change="UpdatePrice();">
					<option value="0">低收入戶</option>
					<option value="1">中低收入戶</option>
					<option value="2">一般戶</option>
				</select>
			</div>
			<div class="price-option">
				長照需要等級
				<select v-model="careLevel" v-on:change="UpdatePrice();">
					<option value="0">第一級</option>
					<option value="1">第二級</option>
					<option value="2">第三級</option>
					<option value="3">第四級</option>
					<option value="4">第五級</option>
					<option value="5">第六級</option>
					<option value="6">第七級</option>
					<option value="7">第八級</option>
				</select>
			</div>
			<div class="price-option">
				交通接送分類
				<select v-model="transportLevel" v-on:change="UpdatePrice();">
					<option value="0">第一類</option>
					<option value="1">第二類</option>
					<option value="2">第三類</option>
					<option value="3">第四類</option>
				</select>
			</div>
			<div class="price-option">
				原民區或離島
				<input type="checkbox" v-model="remoteArea" v-on:change="UpdatePrice();">
			</div>
		</div>
		<div class="used-title">先前已使用額度</div>
		<div class="option-container">
			<div class="price-option">
				B、C碼<input type="number" min="0" v-model="usedBC" v-on:change="UpdatePrice();">元
			</div>
			<div class="price-option">
				D碼<input type="number" min="0" v-model="usedD" v-on:change="UpdatePrice();">元
			</div>
			<div class="price-option">
				E、F碼<input type="number" min="0" v-model="usedEF" v-on:change="UpdatePrice();">元
			</div>
			<div class="price-option">
				G碼<input type="number" min="0" v-model="usedG" v-on:change="UpdatePrice();">元
			</div>
		</div>
		<div class="separator"></div>
		<div class="price-final">
			<div class="price-type">服務費用(月)</div>
			<div class="final-item">總額: {{totalPrice.service.total}} 元</div>
			<div class="final-item">補助: {{totalPrice.service.gov}} 元</div>
			<div class="final-item">自費: {{totalPrice.service.own}} 元</div>
		</div>
		<div class="price-final">
			<div class="price-type">輔具/設施購買</div>
			<div class="final-item">總額: {{totalPrice.equipBuy.total}} 元</div>
			<div class="final-item">補助: {{totalPrice.equipBuy.gov}} 元</div>
			<div class="final-item">自費: {{totalPrice.equipBuy.own}} 元</div>
		</div>
		<div class="price-final">
			<div class="price-type">輔具/設施租賃(月)</div>
			<div class="final-item">總額: {{totalPrice.equipRent.total}} 元</div>
			<div class="final-item">補助: {{totalPrice.equipRent.gov}} 元</div>
			<div class="final-item">自費: {{totalPrice.equipRent.own}} 元</div>
		</div>
		<div class="remark" v-show="rentMonth < 36">剩餘額度僅可支持租賃補助 {{rentMonth}} 個月</div>
		<div class="price-final">
			<div class="price-type">喘息服務(年)</div>
			<div class="final-item">總額: {{totalPrice.rest.total}} 元</div>
			<div class="final-item">補助: {{totalPrice.rest.gov}} 元</div>
			<div class="final-item">自費: {{totalPrice.rest.own}} 元</div>
		</div>

		<div class="input-bt-container">
			<div class="input-bt" v-on:click="openInputPanel = true;">新增服務</div>
			<div class="input-bt" v-if="openDetail == false" v-on:click="ToggleDetail();">細節展開</div>
			<div class="input-bt" v-if="openDetail == true" v-on:click="ToggleDetail();">細節關閉</div>
			<div class="input-bt" v-on:click="ClearService();">全部重設</div>
		</div>
		<div v-show="openDetail">
			<a name="openDetail"></a>
			<div class="price-summary">
				<div class="sub-header">服務金額</div>
				<div class="price-category cat-A">
					A碼: {{price['A'].total}} 元
				</div>
				<div class="price-category cat-B">
					B碼: {{price['B'].total}} 元
				</div>
				<div class="price-category cat-C">
					C碼: {{price['C'].total}} 元
				</div>
				<div class="price-category cat-D">
					D碼: {{price['D'].total}} 元
				</div>
				<div class="price-category cat-E">
					E碼(租賃): {{price['E-Rent'].total}} 元
				</div>
				<div class="price-category cat-E">
					E碼(購買): {{price['E-Buy'].total}} 元
				</div>
				<div class="price-category cat-F">
					F碼(租賃): {{price['F-Rent'].total}} 元
				</div>
				<div class="price-category cat-F">
					F碼(購買): {{price['F-Buy'].total}} 元
				</div>
				<div class="price-category cat-G">
					G碼: {{price['G'].total}} 元
				</div>
			</div>
			
			<div class="price-summary">
				<div class="sub-header">補助金額</div>
				<div v-if="header">
					<div class="price-limit">B+C碼可用額度: {{Math.max(0,header.payment[0].pay[careLevel]-usedBC)}} 元/月</div>
					<div class="price-limit">D碼可用額度: {{Math.max(0,header.payment[parseInt(transportLevel)+1].pay[careLevel]-usedD)}} 元/月</div>
					<div class="price-limit">E+F碼可用額度: {{Math.max(0,header.payment[5].pay[careLevel]-usedEF)}} 元/3年</div>
					<div class="price-limit">G碼可用額度: {{Math.max(0,header.payment[6].pay[careLevel]-usedG)}} 元/年</div>
				</div>
				<div class="price-category cat-A">
					A碼: {{price['A'].gov}} 元
				</div>
				<div class="price-category cat-B">
					B碼: {{price['B'].gov}} 元
				</div>
				<div class="price-category cat-C">
					C碼: {{price['C'].gov}} 元
				</div>
				<div class="price-category cat-D">
					D碼: {{price['D'].gov}} 元
				</div>
				<div class="price-category cat-E">
					E碼(租賃): {{price['E-Rent'].gov}} 元
				</div>
				<div class="price-category cat-E">
					E碼(購買): {{price['E-Buy'].gov}} 元
				</div>
				<div class="price-category cat-F">
					F碼(租賃): {{price['F-Rent'].gov}} 元
				</div>
				<div class="price-category cat-F">
					F碼(購買): {{price['F-Buy'].gov}} 元
				</div>
				<div class="price-category cat-G">
					G碼: {{price['G'].gov}} 元
				</div>
				
			</div>

			<div class="price-summary">
				<div class="sub-header">自費金額</div>
				<div v-if="header">
					<div class="price-limit">B+C碼自費比例: {{header.payment[0].rate[identity]}} %</div>
					<div class="price-limit">D碼自費比例: {{header.payment[parseInt(transportLevel)+1].rate[identity]}} %</div>
					<div class="price-limit">E+F碼自費比例: {{header.payment[5].rate[identity]}} %</div>
					<div class="price-limit">G碼自費比例: {{header.payment[6].rate[identity]}} %</div>
				</div>
				<div class="price-category cat-A">
					A碼: {{price['A'].own}} 元
				</div>
				<div class="price-category cat-B">
					B碼: {{price['B'].own}} 元
				</div>
				<div class="price-category cat-C">
					C碼: {{price['C'].own}} 元
				</div>
				<div class="price-category cat-D">
					D碼: {{price['D'].own}} 元
				</div>
				<div class="price-category cat-E">
					E碼(租賃): {{price['E-Rent'].own}} 元
				</div>
				<div class="price-category cat-E">
					E碼(購買): {{price['E-Buy'].own}} 元
				</div>
				<div class="price-category cat-F">
					F碼(租賃): {{price['F-Rent'].own}} 元
				</div>
				<div class="price-category cat-F">
					F碼(購買): {{price['F-Buy'].own}} 元
				</div>
				<div class="price-category cat-G">
					G碼: {{price['G'].own}} 元
				</div>
				<div class="price-category cat-O">
					自費服務: {{price['O'].own}} 元
				</div>
			</div>
		</div>
		
	</div>
	<div class="service-list">
		<div class="comp-header">服務套餐</div>
		<div class="remark">*照服計算機 之計算方式依 <a href="https://www.health.ntpc.gov.tw/archive/health_ntpc/6/file/107%E5%B9%B4%E5%BA%A6%E7%B5%A6%E4%BB%98%E5%8F%8A%E6%94%AF%E4%BB%98%E5%9F%BA%E6%BA%96.pdf" target="_blank">107年度給付及支付基準</a> 設定，詳細說明請見該連結。</div>

		<div class="service-item cat-A half-w" v-for="(item,i) in items['A']" >
			<div class="item-title">{{item.code}} {{item.name}}</div>
			<div class="item-attr" v-show="remoteArea == false">一般價格: {{item.price}} 元</div>
			<div class="item-attr" v-show="remoteArea == true">原民區或離島價格: {{item.priceRemote}} 元</div>
			<div class="item-attr">數量: {{item.num}}</div>
			<div class="item-attr" v-show="remoteArea == false">總價: {{item.price*item.num}} 元</div>
			<div class="item-attr" v-show="remoteArea == true">總價: {{item.priceRemote*item.num}} 元</div>
			<div class="item-bt-container">
				<div class="item-bt" v-on:click="DeleteItem('A',i);">刪除</div>
			</div>
		</div>
		<div class="service-item cat-B half-w" v-for="(item,i) in items['B']">
			<div class="item-title">{{item.code}} {{item.name}}</div>
			<div class="item-attr" v-show="remoteArea == false">一般價格: {{item.price}} 元</div>
			<div class="item-attr" v-show="remoteArea == true">原民區或離島價格: {{item.priceRemote}} 元</div>
			<div class="item-attr">數量: {{item.num}}</div>
			<div class="item-attr" v-show="remoteArea == false">總價: {{item.price*item.num}} 元</div>
			<div class="item-attr" v-show="remoteArea == true">總價: {{item.priceRemote*item.num}} 元</div>
			<div class="item-bt-container">
				<div class="item-bt" v-on:click="DeleteItem('B',i);">刪除</div>
			</div>
		</div>
		<div class="service-item cat-C half-w" v-for="(item,i) in items['C']">
			<div class="item-title">{{item.code}} {{item.name}}</div>
			<div class="item-attr" v-show="remoteArea == false">一般價格: {{item.price}} 元</div>
			<div class="item-attr" v-show="remoteArea == true">原民區或離島價格: {{item.priceRemote}} 元</div>
			<div class="item-attr">數量: {{item.num}}</div>
			<div class="item-attr" v-show="remoteArea == false">總價: {{item.price*item.num}} 元</div>
			<div class="item-attr" v-show="remoteArea == true">總價: {{item.priceRemote*item.num}} 元</div>
			<div class="item-bt-container">
				<div class="item-bt" v-on:click="DeleteItem('C',i);">刪除</div>
			</div>
		</div>
		<div class="service-item cat-D half-w" v-for="(item,i) in items['D']">
			<div class="item-title">{{item.code}} {{item.name}}</div>
			<div class="item-attr" >縣市核定價格: {{item.price}} 元</div>
			<div class="item-attr">數量: {{item.num}}</div>
			<div class="item-attr">總價: {{item.price*item.num}} 元</div>
			<div class="item-bt-container">
				<div class="item-bt" v-on:click="DeleteItem('D',i);">刪除</div>
			</div>
		</div>
		<div class="service-item cat-E half-w" v-for="(item,i) in items['E']">
			<div class="item-title">{{item.code}} {{item.name}}</div>
			<div class="item-attr" v-show="item.isRent == 0">購買價格: {{item.price}} 元</div>
			<div class="item-attr" v-show="item.isRent == 0">購買給付上限: {{item.payForBuy}} 元</div>
			<div class="item-attr" v-show="item.isRent == 1">租賃價格: {{item.price}} 元</div>
			<div class="item-attr" v-show="item.isRent == 1">租賃給付上限: {{item.payForRent}} 元</div>
			<div class="item-attr">數量: {{item.num}}</div>
			<div class="item-attr">總價: {{item.price*item.num}} 元</div>
			<div class="item-bt-container">
				<div class="item-bt" v-on:click="DeleteItem('E',i);">刪除</div>
			</div>
		</div>
		<div class="service-item cat-F half-w" v-for="(item,i) in items['F']">
			<div class="item-title">{{item.code}} {{item.name}}</div>
			<div class="item-attr" v-show="item.isRent == 0">購買價格: {{item.price}} 元</div>
			<div class="item-attr" v-show="item.isRent == 0">購買給付上限: {{item.payForBuy}} 元</div>
			<div class="item-attr" v-show="item.isRent == 1">租賃價格: {{item.price}} 元</div>
			<div class="item-attr" v-show="item.isRent == 1">租賃給付上限: {{item.payForRent}} 元</div>
			<div class="item-attr">數量: {{item.num}}</div>
			<div class="item-attr">總價: {{item.price*item.num}} 元</div>
			<div class="item-bt-container">
				<div class="item-bt" v-on:click="DeleteItem('F',i);">刪除</div>
			</div>
		</div>
		<div class="service-item cat-G half-w" v-for="(item,i) in items['G']">
			<div class="item-title">{{item.code}} {{item.name}}</div>
			<div class="item-attr" v-show="remoteArea == false">一般價格: {{item.price}} 元</div>
			<div class="item-attr" v-show="remoteArea == true">原民區或離島價格: {{item.priceRemote}} 元</div>
			<div class="item-attr">數量: {{item.num}}</div>
			<div class="item-attr" v-show="remoteArea == false">總價: {{item.price*item.num}} 元</div>
			<div class="item-attr" v-show="remoteArea == true">總價: {{item.priceRemote*item.num}} 元</div>
			<div class="item-bt-container">
				<div class="item-bt" v-on:click="DeleteItem('G',i);">刪除</div>
			</div>
		</div>
		<div class="service-item cat-O half-w" v-for="(item,i) in items['O']">
			<div class="item-title">{{item.code}} {{item.name}}</div>
			<div class="item-attr">價格: {{item.price}} 元</div>
			<div class="item-attr">數量: {{item.num}}</div>
			<div class="item-attr">總價: {{item.price*item.num}} 元</div>
			<div class="item-bt-container">
				<div class="item-bt" v-on:click="DeleteItem('O',i);">刪除</div>
			</div>
		</div>
	</div>

	<div class="tab-bar">
		<div class="tab-bt-container">
			<div class="tab-bt" v-on:click="openInputPanel = true;">新增服務</div>
			<div class="tab-bt" v-bind:class="{on: openDetail}" v-on:click="ToggleDetail();">細節展開</div>
			<div class="tab-bt" v-on:click="ClearService();">全部重設</div>
		</div>
	</div>

	<div class="input-panel" v-show="openInputPanel">
		<div class="input-area">
			<care-service-selection calcPrice="1" ref="serviceSelect"></care-service-selection>
			<div class="input-bt" v-on:click="AddService();">新增</div>
			<div class="input-bt" v-on:click="openInputPanel = false;">取消</div>
		</div>
	</div>

</div>
</template>

<script>
import careServiceSelection from "../vue/care-service-selection.vue"
var g_Util = require('../js/util');

export default {
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
				"A": {"total": 0, "gov": 0, "own": 0},
				"B": {"total": 0, "gov": 0, "own": 0},
				"C": {"total": 0, "gov": 0, "own": 0},
				"D": {"total": 0, "gov": 0, "own": 0},
				"E-Rent": {"total": 0, "gov": 0, "own": 0},
				"E-Buy": {"total": 0, "gov": 0, "own": 0},
				"F-Rent": {"total": 0, "gov": 0, "own": 0},
				"F-Buy": {"total": 0, "gov": 0, "own": 0},
				"G": {"total": 0, "gov": 0, "own": 0},
				"O": {"total": 0, "gov": 0, "own": 0}
			},
			rentMonth: 36,
			totalPrice: {
				"service": {"total": 0, "gov": 0, "own": 0},
				"equipRent": {"total": 0, "gov": 0, "own": 0},
				"equipBuy": {"total": 0, "gov": 0, "own": 0},
				"rest": {"total": 0, "gov": 0, "own": 0}
			},
			header: null,
			items: {
				"A": [], "B": [], "C": [], "D": [], "E": [], "F": [], "G": [], "O": []
			},
			openInputPanel: false
		};
	},
	components: {
    	'care-service-selection': careServiceSelection
	},
	created: function(){
		
	},
	methods: {
		UpdatePrice: function(){
			if(!this.header){
				this.header = this.$refs.serviceSelect.GetServiceCode();
			}
			var priceKey = this.remoteArea?"priceRemote":"price";
			var payment, price, cat, maxPay, rate;
			var priceRent,priceBuy;

			//A code
			cat = this.items["A"];
			price = {"total": 0, "gov": 0, "own": 0};
			for(var i=0;i<cat.length;i++){
				var item = cat[i];
				var p = item[priceKey];
				var t = p*item.num;
				price.total += t;
				price.gov += t;
			}
			this.price["A"] = price;

			//B code
			payment = this.header.payment[0];
			rate = payment.rate[this.identity]*0.01;
			cat = this.items["B"];
			price = {"total": 0, "gov": 0, "own": 0};
			for(var i=0;i<cat.length;i++){
				var item = cat[i];
				var p = item[priceKey];
				var t = p*item.num;
				var o = parseInt(p*rate)*item.num;
				var g = t-o;
				price.total += t;
				price.own += o;
				price.gov += g;
			}
			this.price["B"] = price;

			//C code
			rate = payment.rate[this.identity]*0.01;
			cat = this.items["C"];
			price = {"total": 0, "gov": 0, "own": 0};
			for(var i=0;i<cat.length;i++){
				var item = cat[i];
				var p = item[priceKey];
				var t = p*item.num;
				var o = parseInt(p*rate)*item.num;
				var g = t-o;
				price.total += t;
				price.own += o;
				price.gov += g;
			}
			this.price["C"] = price;

			//check payment limit for B,C code
			maxPay = Math.max(0,payment.pay[this.careLevel]-this.usedBC);
			var bcPay = this.price["B"].gov+this.price["C"].gov;
			if(bcPay > maxPay){
				var exceed = bcPay-maxPay;
				if(exceed > this.price["C"].gov){
					this.price["C"].own += this.price["C"].gov;
					exceed -= this.price["C"].gov;
					this.price["C"].gov = 0;
				}
				else{
					this.price["C"].own += exceed;
					this.price["C"].gov -= exceed;
					exceed = 0;
				}

				this.price["B"].own += exceed;
				this.price["B"].gov -= exceed;
			}

			//D code
			payment = this.header.payment[parseInt(this.transportLevel)+1];
			rate = payment.rate[this.identity]*0.01;
			cat = this.items["D"];
			price = {"total": 0, "gov": 0, "own": 0};
			for(var i=0;i<cat.length;i++){
				var item = cat[i];
				var p = item[priceKey];
				var t = p*item.num;
				var o = parseInt(p*rate)*item.num;
				var g = t-o;
				price.total += t;
				price.own += o;
				price.gov += g;
			}

			maxPay = Math.max(0,payment.pay[this.careLevel]-this.usedD);
			if(price.gov > maxPay){
				var exceed = price.gov-maxPay;
				price.gov -= exceed;
				price.own += exceed;
			}
			this.price["D"] = price;

			//E code
			payment = this.header.payment[5];
			rate = payment.rate[this.identity]*0.01;
			cat = this.items["E"];
			priceRent = {"total": 0, "gov": 0, "own": 0};
			priceBuy = {"total": 0, "gov": 0, "own": 0};
			for(var i=0;i<cat.length;i++){
				var item = cat[i];
				var p = item[priceKey];
				var t = p*item.num;
				var o = parseInt(p*rate)*item.num;
				var g = t-o;
				if(item.isRent){
					var exceed = g-item.payForRent;
					if(exceed > 0){
						o += exceed;
						g -= exceed;
					}
					priceRent.total += t;
					priceRent.own += o;
					priceRent.gov += g;
				}
				else{
					var exceed = g-item.payForBuy;
					if(exceed > 0){
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
			rate = payment.rate[this.identity]*0.01;
			cat = this.items["F"];
			priceRent = {"total": 0, "gov": 0, "own": 0};
			priceBuy = {"total": 0, "gov": 0, "own": 0};
			for(var i=0;i<cat.length;i++){
				var item = cat[i];
				var p = item[priceKey];
				var t = p*item.num;
				var o = parseInt(p*rate)*item.num;
				var g = t-o;
				if(item.isRent){
					var exceed = g-item.payForRent;
					if(exceed > 0){
						o += exceed;
						g -= exceed;
					}
					priceRent.total += t;
					priceRent.own += o;
					priceRent.gov += g;
				}
				else{
					var exceed = g-item.payForBuy;
					if(exceed > 0){
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
			maxPay = Math.max(0,payment.pay[this.careLevel]-this.usedEF);
			var efBuy = this.price["E-Buy"].gov+this.price["F-Buy"].gov;
			var efRent = this.price["E-Rent"].gov+this.price["F-Rent"].gov;
			var exceed = efBuy-maxPay;
			if(exceed > 0){
				if(exceed > this.price["F-Buy"].gov){
					this.price["F-Buy"].own += this.price["F-Buy"].gov;
					exceed -= this.price["F-Buy"].gov;
					this.price["F-Buy"].gov = 0;
				}
				else{
					this.price["F-Buy"].own += exceed;
					this.price["F-Buy"].gov -= exceed;
					exceed = 0;
				}

				if(exceed > this.price["E-Buy"].gov){
					this.price["E-Buy"].own += this.price["E-Buy"].gov;
					exceed -= this.price["E-Buy"].gov;
					this.price["E-Buy"].gov = 0;
				}
				else{
					this.price["E-Buy"].own += exceed;
					this.price["E-Buy"].gov -= exceed;
					exceed = 0;
				}
			}
			var remainPay = maxPay - efBuy;
			if(efRent == 0) this.rentMonth = 36;
			else if(remainPay < 0) this.rentMonth = 0;
			else this.rentMonth = (remainPay/efRent).toFixed(2);

			//G code
			payment = this.header.payment[6];
			rate = payment.rate[this.identity]*0.01;
			cat = this.items["G"];
			price = {"total": 0, "gov": 0, "own": 0};
			for(var i=0;i<cat.length;i++){
				var item = cat[i];
				var p = item[priceKey];
				var t = p*item.num;
				var o = parseInt(p*rate)*item.num;
				var g = t-o;
				price.total += t;
				price.own += o;
				price.gov += g;
			}

			maxPay = Math.max(0,payment.pay[this.careLevel]-this.usedG);
			if(price.gov > maxPay){
				var exceed = price.gov-maxPay;
				price.gov -= exceed;
				price.own += exceed;
			}
			this.price["G"] = price;

			//O code (自費)
			cat = this.items["O"];
			price = {"total": 0, "gov": 0, "own": 0};
			for(var i=0;i<cat.length;i++){
				var item = cat[i];
				var p = item[priceKey];
				var t = p*item.num;
				price.total += t;
				price.own += t;
				price.gov += 0;
			}
			this.price["O"] = price;

			//total price summary
			var ts = {"total": 0, "gov": 0, "own": 0};
			var teb = {"total": 0, "gov": 0, "own": 0};
			var ter = {"total": 0, "gov": 0, "own": 0};
			var tr = {"total": 0, "gov": 0, "own": 0};
			ts.total = this.price["A"].total+this.price["B"].total+this.price["C"].total+this.price["D"].total+this.price["O"].total;
			ts.gov = this.price["A"].gov+this.price["B"].gov+this.price["C"].gov+this.price["D"].gov+this.price["O"].gov;
			ts.own = this.price["A"].own+this.price["B"].own+this.price["C"].own+this.price["D"].own+this.price["O"].own;

			teb.total = this.price["E-Buy"].total+this.price["F-Buy"].total;
			teb.gov = this.price["E-Buy"].gov+this.price["F-Buy"].gov;
			teb.own = this.price["E-Buy"].own+this.price["F-Buy"].own;

			ter.total = this.price["E-Rent"].total+this.price["F-Rent"].total;
			ter.gov = this.price["E-Rent"].gov+this.price["F-Rent"].gov;
			ter.own = this.price["E-Rent"].own+this.price["F-Rent"].own;

			tr.total = this.price["G"].total;
			tr.gov = this.price["G"].gov;
			tr.own = this.price["G"].own;

			this.totalPrice.service = ts;
			this.totalPrice.equipBuy = teb;
			this.totalPrice.equipRent = ter;
			this.totalPrice.rest = tr;
		},
		AddService: function(){
			var item = this.$refs.serviceSelect.GetSelectItem();
			this.items[item.category].push(item);
			this.items[item.category].sort(function (a, b) {
				if (a.code < b.code) {
					return -1;
				}
				else if (a.code > b.code) {
					return 1;
				}
				else return 0;
			});
			this.UpdatePrice();
			this.openInputPanel = false;
			this.$root.ShowMessage("加入服務 "+item.code);
		},
		DeleteItem: function(code, index){
			if(confirm("確定刪除?")){
				var arr = this.items[code];
				if(!arr || index < 0 || index >= arr.length) return;
				arr.splice(index, 1);
				this.UpdatePrice();
			}
		},
		ClearService: function(){
			if(confirm("確定全部重設?")){
				this.items = {
					"A": [], "B": [], "C": [], "D": [], "E": [], "F": [], "G": [], "O": []
				};
				this.UpdatePrice();
			}
		},
		ToggleDetail: function(){
			this.openDetail = !this.openDetail;
			if(this.openDetail){
				//需等vue展開完後再scroll
				setTimeout(function(){
					g_Util.GoToAnchor("openDetail");
				},10);
			}
		}
	},
}
</script>

<style lang="scss" scoped>
@import "../scss/main.scss";

$enhance-color: #BE9063;
$text-color: #333333;
$head-bg-color: #6A8A82;
$head-fg-color: #ffffff;
$link-color: #FF6666;
$link-hover-color: #FF3333;

.care-calculator{
	width: 100%;
	height: 100%;
	overflow-x: hidden;
	overflow-y: auto;
	a{
		text-decoration: none;
		color: $link-color;
		&:hover{
			color: $link-hover-color;
		}
	}

	.comp-header{
		margin: 10px auto;
		font-size: 1.6em;
		text-align: center;
		padding: 10px;
		color: $head-fg-color;
		background-color: $head-bg-color;
		border-radius: 3px 3px 0px 0px;
	}

	.price-panel{
		max-width: 100%;
		margin: auto;
		.option-container{
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			align-items: center;
		}
		.used-title{
			text-align: center;
			font-size: 1.2em;
		}
		.price-option{
			display: inline-block;
			margin: 10px;
			padding: 10px;
			height: 50px;
			width: 230px;
			max-width: 100%;
			text-align: center;
			background-color: #dddddd;
			select{
				margin: 0px 10px;
				padding: 5px;
			}
			input[type="checkbox"]{
				width: 20px;
				height: 20px;
				position: relative;
				top: 3px;
			}
			input[type="number"]{
				max-width: 80px;
				padding: 5px;
				margin: 0px 10px;
			}
		}
		.price-summary{
			margin: 10px;
			background-color: #eeeeee;
			padding: 0px 0px 10px 0px;
			.sub-header{
				margin: 10px auto;
				font-size: 1.2em;
				text-align: left;
				padding: 10px;
				color: $head-fg-color;
				background-color: #A4A4BF;
			}
			.price-category{
				display: inline-block;
				margin: 10px;
				padding: 10px;
				border-radius: 3px;
			}
			.price-limit{
				display: inline-block;
				margin: 10px;
			}
		}
		.price-final{
			display: flex;
			justify-content: center;
			align-items: center;
			flex-wrap: wrap;
			.price-type{
				font-weight: bold;
				font-size: 1.3em;
				padding: 10px;
				border-bottom: 1px solid $enhance-color;
			}
			.final-item{
				font-size: 1.2em;
				color: #333333;
				padding: 10px;
			}
		}
		.remark{
			margin: 10px;
			text-align: center;
			font-size: 1em;
			color: red;
		}
		
	}
	.service-list{
		background-color: #eeeeee;
		padding-bottom: 100px;
		margin-bottom: 10px;
		.remark{
			font-size: 1em;
			text-align: center;
			margin: 10px;
		}
		.service-item{
			border-radius: 3px;
			.item-title{
				padding: 10px;
				font-size: 1.2em;
				font-weight: bold;
				border-bottom: 1px solid #eeeeee;
			}
			.item-attr{
				display: inline-block;
				margin: 10px;
				font-size: 1.2em;
			}
			.item-bt-container{
				padding: 10px;
				display: flex;
				justify-content: flex-end;
				align-items: center;
				flex-wrap: wrap;
			}
			.item-bt{
				display: inline-block;
				margin: 0px 0px 0px 10px;
				padding: 5px 10px;
				cursor: pointer;
				background-color: #eeeeee;
				color: #333333;
				border-radius: 3px;
				&:hover{
					background-color: #dddddd;
				}
			}
		}
	}
	.input-bt-container{
		margin: 20px auto 10px auto;
	}
	.category-option{
		text-align: left;
		padding: 0px 5px;
		select{
			font-size: 1.1em;
			padding: 5px;
			margin: 5px 0px;
			border-radius: 3px;
		}
		input[type="number"]{
			padding: 5px;
			margin: 5px 0px;
			border-radius: 3px;
			max-width: 80px;
		}
		input[type="input"]{
			padding: 5px;
			margin: 5px 0px;
			border-radius: 3px;
			max-width: 100px;
		}
	}
}

</style>