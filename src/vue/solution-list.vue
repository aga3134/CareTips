<template lang="html">
<div>
	<div class="no-result-box" v-show="solutionList.length==0">
		目前暫無符合條件的解方
		<div v-if="emptyAction==0" class="center-bt">查無資料</div>
		<div v-else class="center-bt" v-on:click="CreateSolution();">新增解方</div>
	</div>
	<div class="solution-list">
		<transition-group name="create" style="width:100%;">
			<div class="list-item one-third-w shadow-dark" v-for="(s,i) in solutionList" v-on:click="ViewSolution(s.caseID,s.id);" v-bind:key="s.id">
				<div class="owner-info" v-bind:style="{'background-color':s.user.headColor}">
					<img class="owner-icon" v-bind:src="s.user.icon">
					{{s.user.profession}} - {{s.user.name}}
				</div>
				<div class="domain-statistic">
					<div class="domain-info">
						<div class="domain-icon cat-D1"></div>
						<div class="tip cat-D1">個案措施 {{s.S1Num||0}} 項</div>
						<div class="domain-num">{{s.S1Num||0}}</div>
					</div>
					<div class="domain-info">
						<div class="domain-icon cat-D2"></div>
						<div class="tip cat-D2">家屬措施 {{s.S2Num||0}} 項</div>
						<div class="domain-num">{{s.S2Num||0}}</div>
					</div>
					<div class="domain-info">
						<div class="domain-icon cat-D3"></div>
						<div class="tip cat-D3">專業連結 {{s.S3Num||0}} 項</div>
						<div class="domain-num">{{s.S3Num||0}}</div>
					</div>
					<div class="domain-info">
						<div class="domain-icon cat-D4"></div>
						<div class="tip cat-D4">照護服務 {{s.S4Num||0}} 項</div>
						<div class="domain-num">{{s.S4Num||0}}</div>
					</div>
				</div>
				<div class="desc">{{s.desc}}</div>
				<div class="feedback-statistic">
					<img class="feedback-icon" src="/static/image/like.png">
					<div class="feedback-num">{{s.likeNum}}</div>
					<div class="feedback-num">觀看次數 {{s.viewNum}}</div>
				</div>
			</div>
		</transition-group>
	</div>
	<div class="load-more" v-show="noMore==false" v-on:click="LoadMoreList();">更多解方 &#9660;</div>
</div>
</template>

<script>

var g_Util = require('../js/util');

export default {
	props: ["init","emptyAction"],
	data: function () {
		return {
			solutionList: [],
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
			for(var i=0;i<this.solutionList.length;i++){
				var profession = this.solutionList[i].user.profession;
				var index = g_Util.StrCodeToInt(profession)%colorNum;
				this.solutionList[i].user.headColor = colorArr(index);
			}
		},
		SetParam: function(param){
			this.param = param;
		},
		ClearList: function(){
			this.page = 0;
			this.solutionList = [];
			this.preLoad = [];
			this.noMore = false;
		},
		PreLoadList: function(next){
			if(!this.param) return;
			var urlStr = "/solution/list?page="+this.page;
			if(this.param.caseID) urlStr += "&case="+this.param.caseID;
			if(this.param.ownerID) urlStr += "&owner="+this.param.ownerID;
			if(this.param.profession) urlStr += "&profession="+this.param.profession;
			if(this.param.keyword) urlStr += "&keyword="+this.param.keyword;
			if(this.param.caseVersion) urlStr += "&caseVersion="+this.param.caseVersion;
			urlStr += "&sort="+this.param.sort||"newest";
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
			//compute statistic data
			for(var i=0;i<this.preLoad.length;i++){
				this.preLoad[i].info = JSON.parse(this.preLoad[i].info).data;
				var desc = "";
				for(var step=0;step<this.preLoad[i].info.length;step++){
					var sol = this.preLoad[i].info[step];
					var sum = 0;
					for(var priority in sol){
						sum += sol[priority].length;
						if(desc == "" && sol[priority].length>0){
							desc += sol[priority][0].desc;
						}
					}
					this.preLoad[i]["S"+(step+1)+"Num"] = sum;
				}
				this.preLoad[i].desc = desc;
			}

			this.solutionList.push.apply(this.solutionList,this.preLoad);
			this.PreLoadList();
			this.InitHeadColor();
		},
		ViewSolution: function(caseID, solutionID){
			if(this.$parent.ViewSolution) return this.$parent.ViewSolution(solutionID);
			else window.location.href="/case?case="+caseID+"&solution="+solutionID;
		},
		CreateSolution: function(){
			if(this.$parent.ProvideSolution) return this.$parent.ProvideSolution();
		}

	}
}
</script>

<style lang="scss">
@import "../scss/variable.scss";
@import "../scss/mixin.scss";

.solution-list{
	width: 1200px;
	max-width: 100%;
	margin: auto;
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	align-items: center;
	color: #333333;
}
</style>