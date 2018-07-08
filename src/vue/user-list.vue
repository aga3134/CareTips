<template lang="html">
<div>
	<div class="no-result-box" v-show="userList.length==0">
		目前暫無符合條件的專家
		<div class="center-bt" v-on:click="ResetCondition();">重設條件</div>
	</div>
	<div class="user-list">
		<div class="list-item one-third-w shadow-light" v-for="(u,i) in userList">
			<a v-bind:href="'/user?target='+u.id">
				<div class="owner-info" v-bind:style="{'background-color':u.headColor}">
					<img class="owner-icon" v-bind:src="u.icon">
					{{u.profession}} - {{u.name}}
				</div>
				<div class="domain-statistic">
					<div class="domain-info">
						<div class="domain-icon cat-D1"></div>
						<div class="tip cat-D1">案例數 {{u.caseNum}}</div>
						<div class="domain-num">{{u.caseNum}}</div>
					</div>
					<div class="domain-info">
						<div class="domain-icon cat-D2"></div>
						<div class="tip cat-D2">解方數 {{u.solNum}}</div>
						<div class="domain-num">{{u.solNum}}</div>
					</div>
				</div>
				<div class="desc">{{u.desc}}</div>
				<div class="feedback-statistic">
					<div class="feedback-num">{{u.county}} - {{u.company}}</div>
				</div>
			</a>
		</div>
	</div>
	<div class="load-more" v-show="noMore==false" v-on:click="LoadMoreList();">更多專家 &#9660;</div>
</div>
</template>

<script>
var g_Util = require('../js/util');

export default {
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
	created: function(){
		if(this.init == "1"){
			var urlParam = g_Util.GetUrlParameter();
			var profession = urlParam.profession;
			this.LoadMoreList({profession:profession});
		}
	},
	methods: {
		InitHeadColor: function(){
			var colorNum = 30;
			var colorArr = g_Util.ColorCategory(colorNum,0.9);
			for(var i=0;i<this.userList.length;i++){
				var profession = this.userList[i].profession;
				var index = g_Util.StrCodeToInt(profession)%colorNum;
				this.userList[i].headColor = colorArr(index);
			}
		},
		SetParam: function(param){
			this.param = param;
		},
		ClearList: function(){
			this.page = 0;
			this.userList = [];
			this.preLoad = [];
			this.noMore = false;
		},
		PreLoadList: function(next){
			if(!this.param) return;
			var urlStr = "/user/list?page="+this.page;
			if(this.param.profession) urlStr += "&profession="+this.param.profession;
			if(this.param.county) urlStr += "&county="+this.param.county;
			if(this.param.keyword) urlStr += "&keyword="+this.param.keyword;
			urlStr += "&sort="+this.param.sort||"newest";
			$.get(urlStr, function(result){
				this.preLoad = result.data;
				if(result.status != "ok") return alert("讀取專家列表失敗");
				if(this.preLoad.length == 0) return this.noMore = true;
				this.page++;
				if(next) next();
			}.bind(this));
		},
		LoadMoreList: function(param){
			if(param){
				this.param = param;
			}
			if(this.preLoad.length == 0){
				return this.PreLoadList(this.LoadMoreList);
			}
			this.userList.push.apply(this.userList,this.preLoad);
			this.PreLoadList();
			this.InitHeadColor();
		},
		ResetCondition: function(){
			if(this.$parent.ResetCondition) this.$parent.ResetCondition();
		}
	}
}
</script>

<style lang="scss" scoped>
@import "../scss/main.scss";

.user-list{
	width: 1200px;
	max-width: 100%;
	margin: auto;
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	align-items: center;
}
</style>