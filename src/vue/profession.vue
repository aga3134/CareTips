<template lang="html">
<div>
	<div class="profession">
		<div class="category-title">
			專家列表
			<div class="bottom-line"></div>
		</div>
		<div v-on:click="openSearchPanel=false;">
			<user-list init="1" ref="userList"></user-list>
		</div>

		<div class="tab-bar">
			<div class="tab-bt-container">
				<div class="tab-bt" v-on:click="openSearchPanel=true;">搜尋專家</div>
			</div>
		</div>

		<div class="side-panel" v-bind:class="{open: openSearchPanel}">
			<div class="close-bt" v-on:click="openSearchPanel=false;">X</div>
			<div class="category-title">
				搜尋條件
				<div class="bottom-line"></div>
			</div>
			<div class="search-container">
				<div class="search-item">
					<div class="search-label canNotEmpty">服務專業</div>
					<select v-model="selectProfession">
						<option value="全部">全部</option>
						<option v-for="profession in professions" v-bind:value="profession">{{profession}}</option>
					</select>
				</div>
				<div class="search-item">
					<div class="search-label">服務縣市</div>
					<select v-model="selectCounty">
						<option value="全部">全部</option>
						<option v-for="county in counties" v-bind:value="county">{{county}}</option>
					</select>
				</div>
				<div class="search-item">
					<div class="search-label">排序</div>
					<select v-model="selectSort">
						<option value="caseNum">案例數</option>
						<option value="solNum">解方數</option>
						<option value="newest">加入時間(新->舊)</option>
						<option value="oldest">加入時間(舊->新)</option>
					</select>
				</div>
				<div class="search-item">
					<div class="search-label">關鍵字</div>
					<input type="text" v-model="keyword" placeholder="請輸入搜尋關鍵字" v-on:keyup.13="SearchProfession();">
				</div>
			</div>
			<div class="input-bt" v-on:click="SearchProfession();">搜尋</div>
			<div class="input-bt" v-on:click="ResetCondition();">重設</div>
		</div>
	</div>
</div>
</template>

<script>
import userList from "../vue/user-list.vue"
var g_Util = require('../js/util');

export default {
	props: ["init"],
	data: function () {
		return {
			openSearchPanel: false,
			selectProfession:"全部",
			selectCounty:"全部",
			selectSort: "caseNum",
			keyword:"",
			professions: [],
			counties: []
		};
	},
	components: {
		'user-list': userList,
	},
	created: function(){
		$.get("/static/solution.json", function(data){
			this.professions = data.profession;
			this.counties = data.county;
		}.bind(this));
	},
	methods: {
		SearchProfession: function(){
			var param = {};
			if(this.selectProfession != "全部"){
				param.profession = this.selectProfession;
			}
			if(this.selectCounty != "全部"){
				param.county = this.selectCounty;
			}
			if(this.keyword != ""){
				param.keyword = this.keyword;
			}
			param.sort = this.selectSort;
			this.$refs.userList.ClearList();
			this.$refs.userList.LoadMoreList(param);
			this.openSearchPanel = false;
		},
		ResetCondition: function(){
			this.selectProfession = "全部";
			this.selectCounty = "全部";
			this.keyword = "";
			this.selectSort = "caseNum";
			this.SearchProfession();
		}
	}
}
</script>

<style lang="scss" scoped>
@import "../scss/main.scss";

.profession{
	
}
</style>