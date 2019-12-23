<template lang="html">
<div>
	<div class="care-service-selection" v-if="serviceCode">
		<div class="input-item">
			<div class="input-label">主類</div>
			<select v-model="mainCategory" v-on:change="UpdateMainCategory();">
				<option v-for="(s,i) in serviceCode.service" v-bind:value="i">{{s.code}} {{s.name}}</option>
			</select>
		</div>
		<div class="input-item" v-if="serviceCode.service[mainCategory].items.length > 1">
			<div class="input-label">子類</div>
			<select v-model="subCategory" v-on:change="UpdateSubCategory();">
				<option v-for="(s,i) in serviceCode.service[mainCategory].items" v-bind:value="i">{{s.code}} {{s.name}}</option>
			</select>
		</div>
		<div class="input-item" v-if="mainCategory != 7">
			<div class="input-label">項目</div>
			<select v-model="selectService" v-on:change="UpdateItemInfo();">
				<option v-for="(s,i) in serviceCode.service[mainCategory].items[subCategory].items" v-bind:value="i">{{s.code}} {{s.name}}</option>
			</select>
			<img class="filter-icon" src="/static/image/search-icon.png" v-on:click="OpenFilterPanel();">
		</div>
		<div v-if="calcPrice == '1'">
			<div class="input-item">
				<div class="item" v-if="mainCategory == 4 || mainCategory == 5">
					<div class="input-label">方式</div>
					<select v-model="isRent">
						<option value="0" v-show="itemInfo.payForBuy !== '不適用' ">購買</option>
						<option value="1" v-show="itemInfo.payForRent !== '不適用' ">租賃</option>
					</select>
				</div>
				<div class="item" v-if="mainCategory == 7">
					<div class="input-label">服務名稱</div>
					<input type="text" v-model="customName">
				</div>
				<div class="item" v-if="mainCategory == 3 || mainCategory == 4 || mainCategory == 5 || mainCategory == 7">
					<div class="input-label">價格</div>
					<input type="number" min="1" v-model="customPrice">
				</div>
				<div class="item">
					<div class="input-label">數量</div>
					<input type="number" min="1" max="100" v-model="serviceCount">
				</div>
			</div>
		</div>
	</div>
	
	<div class="popup-panel" v-show="openFilterPanel">
		<div class="input-area">
			<div class="close-bt" v-on:click="CloseFilterPanel();">X</div>
			<div class="input-item">
				<div class="input-label">篩選</div>
				<input type="text" v-model="filterInput" ref="filterInput" v-on:keyup="UpdateFilterList();">
			</div>
			<div class="filter-list">
				<div v-for="mainCat in filterList" class="filter-category" v-if="mainCat.num>0">
					<div v-for="subCat in mainCat.items" class="filter-problem" v-if="subCat.items.length>0">
						<div class="filter-item" v-for="item in subCat.items" v-on:click="SelectFilterItem(item.mainCat,item.subCat,item.itemIndex);">
							{{item.code}} - {{item.name}}
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	
</div>
</template>

<script>
var g_Util = require('../js/util');

export default {
	props:["calcPrice"],
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
			openFilterPanel: false,
			filterInput: "",
			filterList: []
		};
	},
	created: function(){
		$.get("/static/service-code.json",function(data){
			this.serviceCode = data;
			this.UpdateItemInfo();
		}.bind(this));
	},
	methods: {
		GetServiceCode: function(){
			return this.serviceCode;
		},
		GetSelectService: function(){
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
		GetSelectItem: function(){
			var category = this.serviceCode.service[this.mainCategory].code;
			var item = {};
			item.category = category;
			item.mainCategory = this.mainCategory;
			item.subCategory = this.subCategory;
			item.selectService = this.selectService;
			item.code = this.itemInfo.code;
			item.name = this.itemInfo.name;
			item.num = this.serviceCount;
			switch(category){
				case "A": case "B": case "C": case "G":
					item.price = this.itemInfo.price;
					item.priceRemote = this.itemInfo.priceRemote;
					break;
				case "D":
					item.price = this.customPrice;
					item.priceRemote = this.customPrice;
					break;
				case "E": case "F":
					item.isRent = this.isRent;
					item.price = this.customPrice;
					item.priceRemote = this.customPrice;
					item.payForRent = this.itemInfo.payForRent;
					item.payForBuy = this.itemInfo.payForBuy;
					break;
				case "O"://自費
					item.price = this.customPrice;
					item.priceRemote = this.customPrice;
					item.name = this.customName;
					break;
			}
			return item;
		},
		SetSelectItem: function(item){
			var category = item.category;
			this.mainCategory = item.mainCategory;
			this.subCategory = item.subCategory;
			this.selectService = item.selectService;
			this.itemInfo = this.serviceCode.service[this.mainCategory].items[this.subCategory].items[this.selectService];

			this.serviceCount = item.num;
			switch(category){
				case "A": case "B": case "C": case "G":
					break;
				case "D":
					this.customPrice = item.price;
					break;
				case "E": case "F":
					this.isRent = item.isRent;
					this.customPrice = item.price;
					break;
				case "O"://自費
					this.customPrice = item.price;
					this.customName = item.name;
					break;
			}
		},
		UpdateMainCategory: function(){
			this.subCategory = 0;
			this.selectService = 0;
			this.UpdateItemInfo();
		},
		UpdateSubCategory: function(){
			this.selectService = 0;
			this.UpdateItemInfo();
		},
		UpdateItemInfo: function(){
			this.customPrice = 0;
			this.serviceCount = 1;
			this.itemInfo = this.serviceCode.service[this.mainCategory].items[this.subCategory].items[this.selectService];
			var category = this.serviceCode.service[this.mainCategory].code;
			if(category == "E" || category == "F"){
				if(this.itemInfo.payForRent == "不適用" && this.isRent == 1){
					this.isRent = 0;
				}
				else if(this.itemInfo.payForBuy == "不適用" && this.isRent == 0){
					this.isRent = 1;
				}
			}
		},
		OpenFilterPanel: function(){
			this.openFilterPanel = true;
			this.$parent.enableAddButton = false;
			this.UpdateFilterList();
			setTimeout(function(){
				this.$refs.filterInput.focus();
			}.bind(this),10);
		},
		CloseFilterPanel: function(){
			this.openFilterPanel = false;
		},
		UpdateFilterList: function(){
			this.filterList = [];
			for(var i=0;i<this.serviceCode.service.length;i++){
				var service = this.serviceCode.service[i];
				var mainCategory = {"code":service.code,"name":service.name,"items":[],num:0};
				for(var j=0;j<service.items.length;j++){
					var serviceItem = service.items[j];
					var subCategory = {"code":serviceItem.code,"name":serviceItem.name,"items":[]};
					for(var k=0;k<serviceItem.items.length;k++){
						var targetItem = serviceItem.items[k];
						if(targetItem.name.includes(this.filterInput) || 
							targetItem.code.includes(this.filterInput)){
							subCategory.items.push({"code":targetItem.code,"name":targetItem.name,"mainCat":i,"subCat":j,"itemIndex":k});
						}
					}
					mainCategory.items.push(subCategory);
					mainCategory.num += subCategory.items.length;
				}
				this.filterList.push(mainCategory);
			}
		},
		SelectFilterItem: function(i,j,k){
			this.mainCategory = i;
			this.subCategory = j;
			this.selectService = k;
			this.UpdateItemInfo();
			this.CloseFilterPanel();
		}
	}
}
</script>

<style lang="scss">
@import "../scss/variable.scss";
@import "../scss/mixin.scss";
.care-service-selection{
	
}
.popup-panel{
	position: fixed;
	top: 0px;
	left: 0px;
	width: 100%;
	height: 100%;
	background-color: #eeeeee;
	overflow-y: auto;
}
</style>