<template lang="html">
<div>
	<div class="no-result-box" v-show="caseList.length==0">
		目前暫無符合條件的案例
		<div v-if="emptyAction==0" class="center-bt">查無資料</div>
		<div v-else class="center-bt" v-on:click="CreateCase();">新增案例</div>
	</div>
	<div class="case-list">
		<transition-group name="create" style="width:100%;">
			<div class="list-item one-third-w shadow-light" v-for="(c,i) in caseList" v-bind:key="c.id">
				<a v-bind:href="'/case?case='+c.id">
					<div class="owner-info" v-bind:style="{'background-color':c.user.headColor}">
						<img class="owner-icon" v-bind:src="c.user.icon">
						{{c.user.profession}} - {{c.user.name}}
					</div>
					<div class="domain-statistic">
						<div class="domain-info">
							<div class="domain-icon cat-D1"></div>
							<div class="tip cat-D1">環境問題 {{c.D1Num}} 項</div>
							<div class="domain-num">{{c.D1Num}}</div>
						</div>
						<div class="domain-info">
							<div class="domain-icon cat-D2"></div>
							<div class="tip cat-D2">心理問題 {{c.D2Num}} 項</div>
							<div class="domain-num">{{c.D2Num}}</div>
						</div>
						<div class="domain-info">
							<div class="domain-icon cat-D3"></div>
							<div class="tip cat-D3">生理問題 {{c.D3Num}} 項</div>
							<div class="domain-num">{{c.D3Num}}</div>
						</div>
						<div class="domain-info">
							<div class="domain-icon cat-D4"></div>
							<div class="tip cat-D4">行為問題 {{c.D4Num}} 項</div>
							<div class="domain-num">{{c.D4Num}}</div>
						</div>
					</div>
					<div class="desc">{{c.desc}}</div>
					<div class="feedback-statistic">
						<img class="feedback-icon" src="/static/image/like.png">
						<div class="feedback-num">{{c.likeNum}}</div>
						觀看次數<div class="feedback-num">{{c.viewNum}}</div>
					</div>
				</a>
			</div>
		</transition-group>
	</div>
	<div class="load-more" v-show="noMore==false" v-on:click="LoadMoreList();">更多案例 &#9660;</div>
</div>
</template>

<script>
var g_Util = require('../js/util');

export default {
	props: ["init","emptyAction"],
	data: function () {
		return {
			caseList: [],
			preLoad: [],
			page: 0,
			param: {},
			noMore: false
		};
	},
	created: function(){
		if(this.init == "1"){
			this.LoadMoreList();
		}
	},
	methods: {
		InitHeadColor: function(){
			var colorNum = 30;
			var colorArr = g_Util.ColorCategory(colorNum,0.9);
			for(var i=0;i<this.caseList.length;i++){
				var profession = this.caseList[i].user.profession;
				var index = g_Util.StrCodeToInt(profession)%colorNum;
				this.caseList[i].user.headColor = colorArr(index);
			}
		},
		SetParam: function(param){
			this.param = param;
		},
		ClearList: function(){
			this.page = 0;
			this.caseList = [];
			this.preLoad = [];
			this.noMore = false;
		},
		PreLoadList: function(next){
			if(!this.param) return;
			var urlStr = "/case/list?page="+this.page;
			if(this.param.ownerID) urlStr += "&owner="+this.param.ownerID;
			if(this.param.keyword) urlStr += "&keyword="+this.param.keyword;
			if(this.param.profession) urlStr += "&profession="+this.param.profession;
			urlStr += "&sort="+(this.param.sort||"newest");
			$.get(urlStr, function(result){
				this.preLoad = result.data;
				if(result.status != "ok") return alert("讀取案例列表失敗");
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
			this.caseList.push.apply(this.caseList,this.preLoad);
			this.PreLoadList();
			this.InitHeadColor();
		},
		CreateCase: function(){
			window.location.href="/case/create";
		}
	}
}
</script>

<style lang="scss">
@import "../scss/variable.scss";
@import "../scss/mixin.scss";

.case-list{
	width: 1200px;
	max-width: 100%;
	margin: auto;
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	align-items: center;
}
</style>