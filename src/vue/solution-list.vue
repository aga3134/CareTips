<template lang="html">
<div class="solution-list">
	<div class="list-item half-w" v-for="(s,i) in solutionList" v-on:click="ViewSolution(s.id);">
		<div class="owner-info" v-bind:ref="'userInfo'+i">
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
			觀看次數<div class="feedback-num">{{s.viewNum}}</div>
		</div>
	</div>
</div>
</template>

<script>

var g_Util = require('../js/util');

export default {
	data: function () {
		return {
			solutionList: []
		};
	},
	created: function(){
		this.UpdateList();
	},
	methods: {
		InitHeadColor: function(){
			var colorNum = 30;
			var colorArr = g_Util.ColorCategory(colorNum,0.9);
			for(var i=0;i<this.solutionList.length;i++){
				var profession = this.solutionList[i].user.profession;
				var index = g_Util.StrCodeToInt(profession)%colorNum;
				$(this.$refs["userInfo"+i]).css("background-color",colorArr(index));
			}
		},
		UpdateList: function(){
			$.get("/solution/list", function(result){
				for(var i=0;i<result.data.length;i++){
					result.data[i].info = JSON.parse(result.data[i].info);
					var desc = "";
					for(var step=0;step<result.data[i].info.length;step++){
						var sol = result.data[i].info[step];
						var sum = 0;
						for(var priority in sol){
							sum += sol[priority].length;
							if(desc == "" && sol[priority].length>0){
								desc += sol[priority][0].desc;
							}
						}
						result.data[i]["S"+(step+1)+"Num"] = sum;
					}
					result.data[i].desc = desc;
				}
				this.solutionList = result.data;
				setTimeout(function(){
					this.InitHeadColor();
				}.bind(this),10);
			}.bind(this));
		},
		ViewSolution: function(id){
			this.$parent.ViewSolution(id);
		}

	}
}
</script>

<style lang="scss" scoped>
@import "../scss/main.scss";

.solution-list{
	width: 1024px;
	max-width: 100%;
	margin: auto;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	color: #333333;

	.list-item{
		background-color: #eeeeee;
		border-radius: 5px;
		max-width: 100%;
		margin: 10px 0px;
		@include pad-width(){
			margin: 10px;
		}
		cursor: pointer;
		box-shadow: 5px 5px 5px #333333;
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
					top: 30px;
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