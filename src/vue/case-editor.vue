<template lang="html">
<div>
	<div class="case-editor">
		<div class="inform-message" v-bind:class="{show: showMessage}">{{message}}</div>
		<div class="case-info">
			<div class="cat-header">案例簡述</div>
			<textarea v-model="caseInfo.desc" placeholder="請簡單描述案例之生活背景與問題摘要"></textarea>
		</div>
		<div class="case-info">
			<div class="cat-header">問題列表</div>
			<div class="input-bt" v-on:click="openInput = true;">新增問題</div>
			<div class="problem-list">
				<div class="problem-cat">
					<div class="problem-header" v-if="omaha!=null">{{omaha.D1.name}} ({{caseInfo.problem.D1.length}}項)</div>
					<div class="problem-container">
						<div class="problem-item half-w cat-D1" v-for="(p,i) in caseInfo.problem.D1">
							<div class="problem-title">{{p.name}}</div>
							<div class="problem-body">
								<div class="problem-desc" v-html="p.desc"></div>
								<div class="item-bt-container">
									<div class="item-bt" v-on:click="ModifyItem('D1',i);">修改</div>
									<div class="item-bt" v-on:click="DeleteItem('D1',i);">刪除</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="problem-cat">
					<div class="problem-header" v-if="omaha!=null">{{omaha.D2.name}} ({{caseInfo.problem.D2.length}}項)</div>
					<div class="problem-container">
						<div class="problem-item half-w cat-D2" v-for="(p,i) in caseInfo.problem.D2">
							<div class="problem-title">{{p.name}}</div>
							<div class="problem-body">
								<div class="problem-desc" v-html="p.desc"></div>
								<div class="item-bt-container">
									<div class="item-bt" v-on:click="ModifyItem('D2',i);">修改</div>
									<div class="item-bt" v-on:click="DeleteItem('D2',i);">刪除</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="problem-cat">
					<div class="problem-header" v-if="omaha!=null">{{omaha.D3.name}} ({{caseInfo.problem.D3.length}}項)</div>
					<div class="problem-container">
						<div class="problem-item half-w cat-D3" v-for="(p,i) in caseInfo.problem.D3">
							<div class="problem-title">{{p.name}}</div>
							<div class="problem-body">
								<div class="problem-desc" v-html="p.desc"></div>
								<div class="item-bt-container">
									<div class="item-bt" v-on:click="ModifyItem('D3',i);">修改</div>
									<div class="item-bt" v-on:click="DeleteItem('D3',i);">刪除</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="problem-cat">
					<div class="problem-header" v-if="omaha!=null">{{omaha.D4.name}} ({{caseInfo.problem.D4.length}}項)</div>
					<div class="problem-container">
						<div class="problem-item half-w cat-D4" v-for="(p,i) in caseInfo.problem.D4">
							<div class="problem-title">{{p.name}}</div>
							<div class="problem-body">
								<div class="problem-desc" v-html="p.desc"></div>
								<div class="item-bt-container">
									<div class="item-bt" v-on:click="ModifyItem('D4',i);">修改</div>
									<div class="item-bt" v-on:click="DeleteItem('D4',i);">刪除</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="case-info">
			<div class="separator">&nbsp;</div>
			<div class="remark">
				*為協助照護經驗傳承與跨專業交流，您所分享的案例皆為公開可搜尋的資訊。請勿將實際個案的隱私資訊寫入案例中，以免侵犯個案隱私權。
				<div class="remark-check">
					<input type="checkbox" v-model="finalCheck"> 我了解了
				</div>
			</div>
			<div class="input-bt" v-on:click="SubmitCase();">送出案例</div>
		</div>
		
		<div class="input-panel" v-show="openInput">
			<div class="input-area" v-if="omaha != null">
				<div class="close-bt" v-on:click="openInput = false;">X</div>
				<div class="box-title" v-show="!modify">新增問題</div>
				<div class="box-title" v-show="modify">修改問題</div>
				<div class="input-item">
					<div class="input-label">面向</div>
					<select v-model="selectDomain" v-bind:disabled="modify">
						<option value="D1">{{omaha.D1.name}}</option>
						<option value="D2">{{omaha.D2.name}}</option>
						<option value="D3">{{omaha.D3.name}}</option>
						<option value="D4">{{omaha.D4.name}}</option>
					</select>
				</div>
				<div class="input-item">
					<div class="input-label">問題</div>
					<select v-model="selectProblem">
						<option v-for="(p,i) in omaha[selectDomain].problem" v-bind:value="i">{{p.cht}}</option>
					</select>
				</div>
				<div class="input-item">
					<div class="input-label">徵兆</div>
					<select v-model="selectSign">
						<option v-for="(s,i) in omaha[selectDomain].problem[selectProblem].sign" v-bind:value="i">{{s.cht}}</option>
					</select>
				</div>
				<div class="input-item">
					<div class="input-label">問題狀況</div>
					<textarea v-model="problemDesc" placeholder="請簡單描述問題狀況"></textarea>
				</div>
				<div class="input-bt" v-show="!modify" v-on:click="AddProblem();">新增</div>
				<div class="input-bt" v-show="modify" v-on:click="DoModify();">修改</div>
				<div class="input-bt" v-show="modify" v-on:click="ClearModify();">取消</div>
			</div>
		</div>
	</div>
</div>
</template>

<script>
var g_Util = require('../js/util');

export default {
	props: ["createNew"],
	data: function () {
		return {
			message: "",
			showMessage: false,
			omaha: null,
			selectDomain: "D1",
			selectProblem: 0,
			selectSign: 0,
			problemDesc: "",
			openInput: false,
			finalCheck: false,
			caseInfo: {desc:"",problem:{"D1":[],"D2":[],"D3":[],"D4":[]}},
			modify: false,
			modifyCategory: "",
			modifyIndex: -1
		};
	},
	created: function(){
		var urlParam = g_Util.GetUrlParameter();
		$.get("/static/omaha.json",function(data){
			this.omaha = data;
		}.bind(this));
		
	},
	methods: {
		AddProblem: function(){
			var domainID = this.selectDomain;
			var selectDomain = this.omaha[domainID];
			var selectProblem = selectDomain.problem[this.selectProblem];
			var selectSign = selectProblem.sign[this.selectSign];

			var p = {};
			p.id = domainID+"-"+selectProblem.id+"-"+selectSign.id;
			p.name = selectSign.cht;
			p.domainID = domainID;
			p.problemIndex = this.selectProblem;
			p.signIndex = this.selectSign;
			p.desc = this.problemDesc;
			this.caseInfo.problem[domainID].push(p);

			this.openInput = false;
			this.problemDesc = "";

			this.showMessage = true;
			this.message = "加入問題 "+p.id;
			setTimeout(function(){
				this.showMessage = false;
				this.message = "";
			}.bind(this),3000);
		},
		ModifyItem: function(category, index){
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
		DeleteItem: function(category, index){
			if(confirm("確定刪除?")){
				var arr = this.caseInfo.problem[category];
				if(!arr || index < 0 || index >= arr.length) return;
				arr.splice(index, 1);
			}
		},
		DoModify: function(){
			var domainID = this.selectDomain;
			var selectDomain = this.omaha[domainID];
			var selectProblem = selectDomain.problem[this.selectProblem];
			var selectSign = selectProblem.sign[this.selectSign];

			var item = this.caseInfo.problem[this.modifyCategory][this.modifyIndex];
			item.name = selectSign.cht;
			item.problemIndex = this.selectProblem;
			item.signIndex = this.selectSign;
			item.desc = this.problemDesc;
			this.ClearModify();
		},
		ClearModify: function(){
			this.modify = false;
			this.modifyCategory = "";
			this.modifyIndex = -1;
			this.problemDesc = "";
			this.openInput = false;
		},
		SubmitCase: function(){
			if(this.caseInfo.desc == ""){
				return alert("案例簡述不能空白");
			}
			if(this.caseInfo.problem["D1"].length == 0 && 
				this.caseInfo.problem["D2"].length == 0 && 
				this.caseInfo.problem["D3"].length == 0 && 
				this.caseInfo.problem["D4"].length == 0){
				return alert("問題列表不能空白");
			}
			if(!this.finalCheck){
				return alert("請閱讀紅色警示文字並勾選「我了解了」");
			}
			//console.log(this.target.profession);
			$.post("/case/create", {data: this.caseInfo}, function(data){
				if(this.submitCallback) this.submitCallback(data);
				else{
					window.location.href = "/case?case="+data.data;
				}
			});
		}
	}
}
</script>

<style lang="scss" scoped>
@import "../scss/main.scss";

$head-bg-color: #36688D;
$head-fg-color: #ffffff;
$bt-fg-color: #ffffff;
$bt-bg-color: #666666;
$bt-hover-color: #888888;
$link-color: #FF6666;
$link-hover-color: #FF3333;
$action-color: #ff8888;
$action-hover-color: #ff6666;
$trans-time: 0.5s;

.case-editor{
	width: 100%;
	height: 100%;
	overflow-x: hidden;
	overflow-y: auto;

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

	a{
		text-decoration: none;
		color: $link-color;
		&:hover{
			color: $link-hover-color;
		}
	}
	textarea{
		border-radius: 3px;
		padding: 10px;
		width: 100%;
		height: 120px;
		resize: none;
		font-size: 1.1em;
	}
	.case-info{
		width: 1024px;
		margin: auto;
		max-width: 100%;
	}
	.separator{
		margin: 30px;
		border-bottom: 1px solid #999999;
	}
	.inform-message{
		width: 100%;
		background-color: #aaaaaa;
		color: #ffffff;
		text-align: center;
		padding: 10px;
		position: fixed;
		left: 0px;
		height: 40px;
		top: -40px;
		z-index: 99;
		-webkit-transition: top $trans-time ease;
		transition: top $trans-time ease;
		&.show{
			top: 0px;
		}
	}
	.cat-header{
		margin: 10px auto;
		font-size: 1.6em;
		text-align: center;
		padding: 10px;
		color: $head-fg-color;
		background-color: $head-bg-color;
	}
	.box-title{
		font-size: 1.8em;
		text-align: center;
		margin: 10px auto;
	}
	.remark{
		width: 800px;
		max-width: 100%;
		margin: auto;
		font-size: 1em;
		color: red;
		padding: 20px 10px;
		.remark-check{
			display: inline-block;
			color: black;
		}
		input[type="checkbox"]{
			position: relative;
			top: 4px;
			width: 20px;
			height: 20px;
		}
	}
	.problem-list{
		.problem-cat{
			background-color: #eeeeee;
			padding: 0px 0px 10px 0px;
			.problem-header{
				margin: 10px auto;
				font-size: 1.2em;
				text-align: left;
				padding: 10px;
				background-color: #dddddd;
			}
			.problem-container{
				padding: 10px;
			}
			.problem-item{
				border-radius: 5px;
				&.select{
					border: 1px solid red;
				}
				.problem-title{
					padding: 10px;
					border-bottom: 1px solid #eeeeee;
				}
				.problem-desc{
					white-space: pre-wrap;
					padding: 10px;
				}
				.problem-body{
					color: black;
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
						background-color: #ffffff;
					}
				}
			}
		}
	}
	.input-bt{
		display: inline-block;
		color: $bt-fg-color;
		padding: 10px 20px;
		margin: 10px;
		background-color: $bt-bg-color;
		cursor: pointer;
		border-radius: 3px;
		&:hover{
			background-color: $bt-hover-color;
		}
	}
	.input-panel{
		position: fixed;
		top: 0px;
		left: 0px;
		width: 100%;
		height: 100%;
		padding: 10px;
		background-color: rgba(50,50,50,0.8);
		z-index: 10;
		overflow-y: auto;
		.input-area{
			position: relative;
			background-color: #eeeeee;
			border-radius: 5px;
			width: 800px;
			max-width: 100%;
			margin: auto;
			padding: 10px;
			top: 50%;
			-webkit-transform: translateY(-50%);
			-ms-transform: translateY(-50%);
			transform: translateY(-50%);
			.input-item{
				margin: 10px;
			}
			.input-label{
				font-size: 1.2em;
				display: inline-block;
			}
			select{
				padding: 5px;
			}
			.close-bt{
				position: absolute;
				top: 10px;
				right: 10px;
				font-size: 1.2em;
				cursor: pointer;
				padding: 5px 10px;
				color: $action-color;
				border: 1px solid $action-color;
				border-radius: 5px;
				&:hover{
					color: $action-hover-color;
					border: 1px solid $action-hover-color;
				}
			}
		}
	}
}

</style>