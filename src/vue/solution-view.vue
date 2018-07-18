<template lang="html">
<div class="solution-view">
	<div class="panel-title">觀看解方</div>
	<p class="warning center" v-if="solutionInfo && curCaseVersion != solutionInfo.caseVersion">* 此為針對案例版本{{solutionInfo.caseVersion}} 提出的解方，與目前觀看的案例版本{{curCaseVersion}} 不同，參考時請小心。</p>
	
	<div class="feedback-statistic" v-if="solutionInfo">
		<div class="container clickable" v-on:click="ToggleLike();">
			<img class="feedback-icon" src="/static/image/like.png">
			<div class="feedback-num">{{solutionInfo.likeNum}}</div>
		</div>
		<div class="container">
			觀看次數<div class="feedback-num">{{solutionInfo.viewNum}}</div>
			案例版本<div class="feedback-num">{{solutionInfo.caseVersion}}</div>
		</div>
		<div class="container" v-show="isMySolution">
			<div class="action-bt" v-on:click="ModifySolution();">修改解方</div>
			<div class="action-bt" v-on:click="DeleteSolution();">刪除解方</div>
		</div>
	</div>

	<div v-if="solutionInfo">
		<div class="quest" v-html="quest[step]"></div>
		<div v-if="step==0 || step==1">
			<div class="problem-cat" v-for="(p,i) in priority">
				<div class="problem-header">{{p.name}}</div>
				<div class="problem-container">
					<div class="problem-item one-third-w" v-bind:class="'cat-D'+(i+1)" v-for="(s,j) in solutionInfo.info[step][i]">
						<div class="problem-title">{{intervention[s.intervention].name}}</div>
						<div class="problem-body">
							<div class="problem-desc" v-html="s.desc"></div>
						</div>
						<div class="target-info">針對問題 - {{s.targetName}}</div>
					</div>
				</div>
			</div>
		</div>
		<div v-if="step==2">
			<div class="problem-cat">
				<div class="problem-header">專業連結</div>
				<div class="problem-container">
					<div class="problem-item one-third-w cat-D4" v-for="(s,j) in solutionInfo.info[step][0]">
						<div class="problem-title">{{s.profession}}</div>
						<div class="problem-body">
							<div class="problem-desc" v-html="s.desc"></div>
							<div class="item-bt-container">
								<div class="item-bt" v-on:click="SearchProfession(s.profession);">找人</div>
							</div>
						</div>
						<div class="target-info">針對問題 - {{s.targetName}}</div>
					</div>
				</div>
			</div>
		</div>
		<div v-if="step==3">
			<div class="problem-cat">
				<div class="problem-header">
					服務項目
					<div class="input-bt" v-on:click="CalculateService();">價格試算</div>
				</div>
				<div class="problem-container">
					<div class="problem-item one-third-w" v-bind:class="'cat-'+s.category" v-for="(s,j) in solutionInfo.info[step][0]">
						<div class="problem-title">{{s.code}} {{s.name}}</div>
						<div class="problem-body">
							<div class="problem-desc" v-html="s.desc"></div>
						</div>
						<div class="target-info">針對問題 - {{s.targetName}}</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="separator"></div>
	<div class="step-bt-container">
		<div class="tab-bt" v-bind:class="{on:step==0}" v-on:click="step=0;">個案措施</div>
		<div class="tab-bt" v-bind:class="{on:step==1}" v-on:click="step=1;">家屬協助</div>
		<div class="tab-bt" v-bind:class="{on:step==2}" v-on:click="step=2;">專業連結</div>
		<div class="tab-bt" v-bind:class="{on:step==3}" v-on:click="step=3;">服務設定</div>
	</div>

	<div class="input-bt" v-on:click="ViewCase();">觀看案例</div>
	<div class="input-bt" v-on:click="BackToSolutionList();">解方列表</div>

	<div class="solution-title">分享者簡介</div>
	<div class="owner" v-if="solutionInfo">
		<a v-bind:href="'/user?target='+solutionInfo.user.id">
			<div class="owner-info">
				<img class="owner-icon" v-bind:src="solutionInfo.user.icon">
				{{solutionInfo.user.profession}} - {{solutionInfo.user.name}}
			</div>
			<div class="owner-desc">{{solutionInfo.user.desc}}</div>
		</a>
	</div>
	<div class="solution-title">留言回饋</div>
	<div class="message-box">
		<textarea placeholder="留言給分享者..." v-model="sendMessage"></textarea>
		<div class="bt-container">
			<div class="bt" v-on:click="SendMessage();">送出</div>
		</div>
	</div>
	<div class="message-list" v-if="solutionInfo">
		<a name="solMessageList"></a>
		<div class="message" v-for="(m,i) in messageList">
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
var g_Util = require('../js/util');

export default {
	data: function () {
		return {
			quest:[],
			priority:[],
			intervention:[],
			user: null,
			isMySolution: false,
			isLike: false,
			solutionInfo: null,
			sendMessage: "",
			messageList: [],
			solutionID: null,
			curCaseVersion: 1,
			step: 0
		};
	},
	created: function(){
		$.get("/static/solution.json",function(data){
			this.quest = data.quest;
			this.priority = data.priority;
			this.intervention = data.intervention;
		}.bind(this));
	},
	methods: {
		SetUser: function(user){
			this.user = user;
			if(this.solutionInfo){
				this.isMySolution = (user.id == this.solutionInfo.ownerID);
			}
		},
		BackToSolutionList: function(){
			this.$parent.ViewSolution();
		},
		ViewCase: function(){
			this.$parent.ViewCase();
		},
		ModifySolution: function(){
			this.$parent.ProvideSolution(this.solutionInfo.id);
		},
		DeleteSolution: function(){
			if(confirm("確定刪除解方?")){
				var csrfToken = $("meta[name='csrf-token']").attr("content");
				$.post("/solution/delete?solution="+this.solutionInfo.id+"&case="+this.solutionInfo.caseID+"&_csrf="+csrfToken, function(result){
					if(result.status != "ok"){
						switch(result.message){
							case "msgNum not zero": alert("無法刪除已有留言的解方"); break;
							case "likeNum not zero": alert("無法刪除已被按讚的解方"); break;
							default: alert("無法刪除解方"); break;
						}
						return;
					}

					alert("解方已刪除");
					this.BackToSolutionList();
				}.bind(this));
			}
		},
		LoadSolution: function(solutionID){
			$.get("/solution/view?solution="+solutionID, function(result){
				if(result.status != "ok") return alert("無法讀取解方");
				//console.log(result.data);
				this.solutionInfo = result.data;
				this.solutionInfo.info = JSON.parse(this.solutionInfo.info);
				this.isMySolution = false;
				if(result.data.liked) this.isLike = true;
				if(this.user){
					this.isMySolution = (this.user.id == this.solutionInfo.ownerID);
				}
			}.bind(this));

			$.get("/solution/message/list?solution="+solutionID, function(result){
				if(result.status != "ok") return alert("無法讀取留言");

				for(var i=0;i<result.data.length;i++){
					var t = moment(result.data[i].createdAt).tz("Asia/Taipei");
					result.data[i].time = t.format("YYYY-MM-DD HH:mm");
				}
				this.messageList = result.data;
				
			}.bind(this));
		},
		SetCurCaseVersion: function(version){
			this.curCaseVersion = version;
		},
		SendMessage: function(){
			var body = {};
			body.solutionID = this.solutionInfo.id;
			body.message = this.sendMessage;
			var csrfToken = $("meta[name='csrf-token']").attr("content");
			body._csrf=csrfToken;

			$.post("/solution/message/create", body, function(result){
				if(result.status != "ok") return alert("新增留言失敗");

				var t = moment(result.data.createdAt).tz("Asia/Taipei");
				result.data.time = t.format("YYYY-MM-DD HH:mm");
				result.data.user = this.user;
				this.messageList.splice(0,0,result.data);
				this.sendMessage = "";
				//g_Util.GoToAnchor("solMessageList");
				this.$root.ShowMessage("新增留言成功");

			}.bind(this));
		},
		DeleteMessage: function(index){
			if(confirm("確定刪除留言?")){
				var body = {};
				body.message = this.messageList[index].id;
				body.solution = this.solutionInfo.id;
				var csrfToken = $("meta[name='csrf-token']").attr("content");
				body._csrf=csrfToken;

				$.post("/solution/message/delete", body, function(result){
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
			body.solutionID = this.solutionInfo.id;
			body.ownerID = this.user.id;
			var csrfToken = $("meta[name='csrf-token']").attr("content");
			body._csrf=csrfToken;

			if(this.isLike){
				if(confirm("您已按過讚，要將按讚取消?")){
					$.post("/solution/like/delete",body, function(data){
						if(data.status != "ok") return alert("按讚失敗");
						this.isLike = false;
						this.solutionInfo.likeNum--;
					}.bind(this));
				}
			}
			else{
				$.post("/solution/like/create",body, function(data){
					if(data.status != "ok") return alert("按讚失敗");
					this.isLike = true;
					this.solutionInfo.likeNum++;
				}.bind(this));
			}
		},
		SearchProfession: function(profession){
			window.open("/profession?profession="+profession);
		},
		CalculateService: function(){
			window.open("/calculator?solution="+this.solutionInfo.id);
		}
	}
}
</script>

<style lang="scss" scoped>
@import "../scss/main.scss";

.solution-view{
	width: 1024px;
	max-width: 100%;
	margin: auto;
	padding: 10px;
	border-radius: 5px;
	background-color: white;
	color: rgb(50,50,50);

	.solution-title{
		font-size: 1.5em;
		padding: 10px 0px;
		margin: 10px 0px;
	}

	.step-bt-container{
		padding: 10px;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
	}

	.quest{
		padding: 10px 0px;
		font-size: 1.2em;
		font-weight: bold;
	}
}

</style>