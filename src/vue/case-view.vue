<template lang="html">
<div class="case-view">
	<div class="feedback-statistic" v-if="caseInfo">
		<div class="container">
			版本號: <div class="feedback-num">
				<select v-model="vIndex" v-on:change="UpdateVersion();">
					<option v-for="(c,i) in caseInfo.info" v-bind:value="i">{{c.version}}</option>
				</select>
			</div>
		</div>
		<div class="container clickable" v-on:click="ToggleLike();">
			<img class="feedback-icon" src="/static/image/like.png">
			<div class="feedback-num">{{caseInfo.likeNum}}</div>
		</div>
		<div class="container">
			觀看次數<div class="feedback-num">{{caseInfo.viewNum}}</div>
		</div>
		<div class="container" v-show="isMyCase">
			<div class="action-bt" v-on:click="ModifyCase();">修改案例</div>
			<div class="action-bt" v-on:click="DeleteCase();">刪除案例</div>
		</div>
	</div>
	<div class="case-title">案例簡述</div>
	<div class="case-desc" v-if="caseInfo">{{caseInfo.info[vIndex].desc}}</div>
	<div class="case-title">問題列表</div>
	<div class="problem-cat" v-for="cat in ['D1','D2','D3','D4']">
		<div class="problem-header" v-if="omaha!=null">{{omaha[cat].name}} ({{problem[cat].length}}項)</div>
		<div class="problem-container">
			<div class="problem-item half-w" v-bind:class="'cat-'+cat" v-for="(p,i) in problem[cat]">
				<div class="problem-title">{{p.name}}</div>
				<div class="problem-body">
					<div class="problem-desc" v-html="p.desc"></div>
				</div>
			</div>
		</div>
	</div>
	<div class="case-title">分享者簡介</div>
	<div class="owner" v-if="caseInfo">
		<div class="owner-info">
			<img class="owner-icon" v-bind:src="caseInfo.user.icon">
			{{caseInfo.user.profession}} - {{caseInfo.user.name}}
		</div>
		<div class="owner-desc">{{caseInfo.user.desc}}</div>
	</div>
	<div class="case-title">留言回饋</div>
	<div class="message-box">
		<textarea placeholder="留言給分享者..." v-model="sendMessage"></textarea>
		<div class="bt-container">
			<div class="bt" v-on:click="SendMessage();">送出</div>
		</div>
	</div>
	<div class="message-list" v-if="caseInfo">
		<div class="message" v-for="(m,i) in messageList" v-show="m.caseVersion == caseInfo.info[vIndex].version">
			<div class="owner-info">
				<img class="owner-icon" v-bind:src="m.user.icon">
				{{m.user.profession}} - {{m.user.name}}
			</div>
			<div class="message-content">{{m.message}}</div>
			<div class="sub-info">
				<div class="info-item">{{m.time}}</div>
				<div v-show="user && m.user.id == user.id" class="action-bt" v-on:click="DeleteMessage(i);">刪除</div>
			</div>
		</div>
	</div>
	
</div>
</template>

<script>
var g_Util = require("../js/util");

export default {
	data: function () {
		return {
			user: null,
			isMyCase: false,
			isLike: false,
			omaha: null,
			caseInfo: null,
			vIndex: 0,
			problem: {"D1":[], "D2":[], "D3":[], "D4":[]},
			sendMessage: "",
			messageList: []
		};
	},
	created: function(){
		var urlParam = g_Util.GetUrlParameter();
		var caseID = urlParam.case;
		if(!caseID) window.location.href="/?message=無此案例";

		$.get("/case/view?case="+caseID, function(result){
			if(result.status != "ok") return window.location.href="/?message=無法讀取案例";
			this.caseInfo = result.data;
			this.caseInfo.info = JSON.parse(this.caseInfo.info);
			this.vIndex = this.caseInfo.info.length-1;
			this.isMyCase = false;
			if(result.data.liked) this.isLike = true;
			if(this.user){
				this.isMyCase = (this.user.id == this.caseInfo.ownerID);
			}
			this.UpdateVersion();
			
			$.get("/static/omaha.json",function(data){
				this.omaha = data;
			}.bind(this));
		}.bind(this));

		$.get("/case/message/list?case="+caseID, function(result){
			if(result.status != "ok") return alert("無法讀取留言");

			for(var i=0;i<result.data.length;i++){
				var t = moment(result.data[i].createdAt).tz("Asia/Taipei");
				result.data[i].time = t.format("YYYY-MM-DD HH:mm");
			}
			this.messageList = result.data;
			
		}.bind(this));
	},
	methods: {
		SetUser: function(user){
			this.user = user;
			if(this.caseInfo){
				this.isMyCase = (user.id == this.caseInfo.ownerID);
			}
		},
		UpdateVersion: function(){
			this.problem = {"D1":[], "D2":[], "D3":[], "D4":[]};
			var problem = this.caseInfo.info[this.vIndex].problem;
			if(problem.D1) this.problem.D1 = problem.D1;
			if(problem.D2) this.problem.D2 = problem.D2;
			if(problem.D3) this.problem.D3 = problem.D3;
			if(problem.D4) this.problem.D4 = problem.D4;
		},
		ModifyCase: function(){
			window.location.href="/case/edit?case="+this.caseInfo.id;
		},
		DeleteCase: function(){
			if(confirm("確定刪除案例?")){
				window.location.href="/case/delete?case="+this.caseInfo.id;
			}
		},
		SendMessage: function(){
			var body = {};
			body.caseID = this.caseInfo.id;
			body.caseVersion = this.caseInfo.info[this.vIndex].version;
			body.message = this.sendMessage;

			$.post("/case/message/create", body, function(result){
				if(result.status != "ok") return alert("新增留言失敗");

				var t = moment(result.data.createdAt).tz("Asia/Taipei");
				result.data.time = t.format("YYYY-MM-DD HH:mm");
				result.data.user = this.user;
				this.messageList.splice(0,0,result.data);
				this.sendMessage = "";
			}.bind(this));
		},
		DeleteMessage: function(index){
			if(confirm("確定刪除留言?")){
				var body = {};
				body.message = this.messageList[index].id;
				body.case = this.caseInfo.id;

				$.post("/case/message/delete", body, function(result){
					if(result.status != "ok") return alert("刪除留言失敗");
					this.messageList.splice(index,1);
				}.bind(this));
			}
		},
		ToggleLike: function(){
			if(!this.user){
				var intentUrl = encodeURIComponent("/case?case="+this.caseInfo.id);
				return window.location.href="/auth/login?intentUrl="+intentUrl;
			}
			var body = {};
			body.caseID = this.caseInfo.id;
			body.ownerID = this.user.id;

			if(this.isLike){
				if(confirm("您已按過讚，要將按讚取消?")){
					$.post("/case/like/delete",body, function(data){
						if(data.status != "ok") return alert("按讚失敗");
						this.isLike = false;
						this.caseInfo.likeNum--;
					}.bind(this));
				}
			}
			else{
				$.post("/case/like/create",body, function(data){
					if(data.status != "ok") return alert("按讚失敗");
					this.isLike = true;
					this.caseInfo.likeNum++;
				}.bind(this));
			}
		}
	}
}
</script>

<style lang="scss" scoped>
@import "../scss/main.scss";

.case-view{
	width: 800px;
	max-width: 100%;
	margin: auto;

	.case-title{
		font-size: 2em;
		padding: 10px 0px;
		margin: 10px 0px;
		border-bottom: 1px solid #ffaa00;
	}
	
	.case-desc{
		font-size: 1.2em;
		line-height: 1.5em;
		white-space: pre-wrap;
	}

	.owner{
		font-size: 1.2em;
	}

	.message-list{
		.message{
			margin: 10px;
			border-bottom: 1px solid #dddddd;
			padding: 0px;
			.message-content{
				padding-left: 10px;
				white-space: pre-wrap;
			}
		}
		.sub-info{
			display: flex;
			justify-content: flex-end;
			flex-wrap: wrap;
			align-items: center;
			font-size: 0.8em;
			color: #888888;
			.info-item{
				margin: 10px 5px;
			}
		}
	}
}
</style>