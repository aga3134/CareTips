<template lang="html">
<div class="case-list">
	<div class="list-item half-w" v-for="(c,i) in caseList">
		<a v-bind:href="'/case?case='+c.id">
			<div class="owner-info" v-bind:ref="'userInfo'+i">
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
				<img class="feedback-icon" src="/static/image/dislike.png">
				<div class="feedback-num">{{c.dislikeNum}}</div>
			</div>
		</a>
	</div>
</div>
</template>

<script>
import caseListThumb from "../vue/case-list-thumb.vue"
var g_Util = require('../js/util');

export default {
	data: function () {
		return {
			caseList: []
		};
	},
	components: {
    	'case-list-thumb': caseListThumb
	},
	created: function(){
		$.get("/case/list", function(result){
			this.caseList = result.data;
			setTimeout(function(){
				this.InitHeadColor();
			}.bind(this),10);
		}.bind(this));
	},
	methods: {
		InitHeadColor: function(){
			var colorNum = 30;
			var colorArr = g_Util.ColorCategory(colorNum,0.9);
			for(var i=0;i<this.caseList.length;i++){
				var profession = this.caseList[i].user.profession;
				var index = g_Util.StrCodeToInt(profession)%colorNum;
				$(this.$refs["userInfo"+i]).css("background-color",colorArr(index));
			}
		}
	}
}
</script>

<style lang="scss" scoped>
@import "../scss/main.scss";

$trans-time: 0.5s;

.case-list{
	width: 1024px;
	max-width: 100%;
	margin: auto;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;

	.cat-D1{
		background-color: #FFA5A4;
	}
	.cat-D2{
		background-color: #DEE885;
	}
	.cat-D3{
		background-color: #85CAE8;
	}
	.cat-D4{
		background-color: #C089E8;
	}

	.list-item{
		background-color: #eeeeee;
		border-radius: 5px;
		max-width: 100%;
		margin: 10px;
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
		.owner-info{
			display: flex;
			justify-content: flex-start;
			flex-wrap: wrap;
			align-items: center;
			border-bottom: 1px solid #ffffff;
			border-radius: 5px 5px 0px 0px;
			padding: 10px;
			.owner-icon{
				width: 30px;
				height: 30px;
				border-radius: 50%;
				margin: 0px 5px 0px 0px;
			}
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
					box-shadow: 5px 5px 5px #aaaaaa;
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
			padding: 0px 10px;
			width: 100%;
			height: 4.5em;
			line-height: 1.5em;
			overflow: hidden;
		}
		.feedback-statistic{
			display: flex;
			justify-content: flex-end;
			flex-wrap: wrap;
			align-items: center;
			padding: 5px 10px;
			.feedback-icon{
				width: 30px;
				height: 30px;
			}
			.feedback-num{
				color: #888888;
				padding: 10px;
			}
		}
	}
}
</style>