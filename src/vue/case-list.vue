<template lang="html">
<div>
	<div class="case-list">
		<div class="list-item half-w shadow-light" v-for="(c,i) in caseList">
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
	</div>
	<div class="load-more" v-show="noMore==false" v-on:click="LoadMoreList();">更多案例 &#9660;</div>
</div>
</template>

<script>
var g_Util = require('../js/util');

export default {
	props: ["init"],
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
		},
		PreLoadList: function(next){
			if(!this.param) return;
			var urlStr = "/case/list?page="+this.page;
			if(this.param.ownerID) urlStr += "&owner="+this.param.ownerID;
			if(this.param.keyword) urlStr += "&keyword="+this.param.keyword;
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
		}
	}
}
</script>

<style lang="scss" scoped>
@import "../scss/main.scss";

.case-list{
	width: 1024px;
	max-width: 100%;
	margin: auto;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;

	.list-item{
		background-color: #eeeeee;
		border-radius: 5px;
		max-width: 100%;
		margin: 10px 0px;
		@include pad-width(){
			margin: 10px;
		}
		cursor: pointer;
		box-shadow: 5px 5px 5px #888888;
		-webkit-transition: box-shadow $trans-time ease;
		transition: box-shadow $trans-time ease;
		&:hover{
			box-shadow: 10px 10px 10px #888888;
		}
		a{
			text-decoration: none;
			color: black;
		}
		
		.domain-statistic{
			display: flex;
			justify-content: flex-start;
			flex-wrap: wrap;
			align-items: center;
			.domain-info{
				position: relative;
				display: flex;
				justify-content: flex-start;
				flex-wrap: wrap;
				align-items: center;
				.domain-icon{
					display: inline-block;
					padding: 7px;
					margin: 10px 5px 10px 10px;
					border-radius: 3px;
				}
				.domain-num{
					display: inline-block;
					font-size: 0.8em;
					vertical-align: middle;
				}
				.tip{
					padding: 5px;
					box-shadow: 5px 5px 5px rgba(50,50,50,0.8);
					border-radius: 3px;
					position: absolute;
					top: 40px;
					left: 10px;
					width: 120px;
					text-align: center;
					visibility: hidden;
					z-index: 1;
				}
				&:hover{
					.tip{
						visibility: visible;
					}
				}
			}
			
		}
		.desc{
			white-space: pre-wrap;
			color: #333333;
			padding: 0px 20px 0px 10px;
			width: 100%;
			height: 4.5em;
			line-height: 1.5em;
			overflow: hidden;
		}
		
	}
}
</style>