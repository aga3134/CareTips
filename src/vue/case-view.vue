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
			解方數<div class="feedback-num">{{caseInfo.solNum}}</div>
		</div>
		<div class="container">
			觀看次數<div class="feedback-num">{{caseInfo.viewNum}}</div>
		</div>
		<div class="container" v-show="isMyCase">
			<div class="action-bt" v-on:click="ModifyCase();">修改案例</div>
			<div class="action-bt" v-on:click="DeleteCase();">刪除案例</div>
		</div>
		<div class="action-bt" v-on:click="RandomCase();">隨機解題</div>
	</div>
	<div class="input-bt" v-on:click="ProvideSolution();">我要解題</div>
	<div class="input-bt" v-on:click="ViewSolution(solutionID);">觀看解方</div>

	<div class="case-title">案例簡述</div>
	<div class="case-desc" v-if="caseInfo">{{caseInfo.info[vIndex].desc}}</div>
	<div class="case-title">問題列表</div>
	<div class="problem-cat" v-for="cat in ['D1','D2','D3','D4']">
		<div class="problem-header" v-if="omaha!=null">{{omaha[cat].name}} ({{problem[cat].length}}項)</div>
		<div class="problem-container">
			<div class="problem-item one-third-w" v-bind:class="'cat-'+cat" v-for="(p,i) in problem[cat]">
				<div class="problem-title">{{p.name}}</div>
				<div class="problem-body">
					<div class="problem-desc" v-html="p.desc"></div>
				</div>
			</div>
		</div>
	</div>
	<div class="case-title">分享者簡介</div>
	<div class="owner" v-if="caseInfo">
		<a v-bind:href="'/user?target='+caseInfo.user.id">
			<div class="owner-info">
				<img class="owner-icon" v-bind:src="caseInfo.user.icon">
				{{caseInfo.user.profession}} - {{caseInfo.user.name}}
			</div>
			<div class="owner-desc">{{caseInfo.user.desc}}</div>
		</a>
	</div>
	<div class="case-title">留言回饋</div>
	<div class="message-box">
		<textarea placeholder="留言給分享者..." v-model="sendMessage"></textarea>
		<div class="bt-container">
			<div class="bt" v-on:click="SendMessage();">送出</div>
		</div>
	</div>
	<div class="message-list" v-if="caseInfo">
		<a name="messageList"></a>
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

	<div class="slide-panel" v-bind:class="{open: status == 'InputUserInfo'}">
		<div class="input-area">
			<div class="panel-title">請先輸入您的個人資訊</div>
			<user-info-editor ref="userInfoEditor"></user-info-editor>
		</div>
	</div>

	<div class="slide-panel" v-bind:class="{open: status == 'ProvideSolution'}">
		<div class="panel-title">請依序回答下列問題</div>
		<solution-editor ref="solutionEditor"></solution-editor>
	</div>

	<transition name="fade">
		<div class="input-panel" v-show="status == 'SolutionList'"  v-on:click="openSearchPanel=false;">
			<div class="input-area">
				<div class="panel-title">解方列表</div>
				<div class="bt-container">
					<div class="input-bt" v-on:click="ViewCase();">觀看案例</div>
					<div class="input-bt" v-on:click.stop="openSearchPanel=true;">搜尋解方</div>
				</div>
				<div>
					<solution-list ref="solutionList"></solution-list>
				</div>
			</div>
		</div>
	</transition>

	<transition name="fade">
		<div class="input-panel" v-show="status == 'ViewSolution'">
			<solution-view ref="caseViewSolution"></solution-view>
		</div>
	</transition>

	<div class="tab-bar">
		<div class="tab-bt-container">
			<div class="tab-bt" v-bind:class="{on: status=='ViewCase'}" v-on:click="ViewCase();">觀看案例</div>
			<div class="tab-bt" v-bind:class="{on: status=='ProvideSolution'}" v-on:click="ProvideSolution();">我要解題</div>
			<div class="tab-bt" v-bind:class="{on: status=='ViewSolution' || status=='SolutionList'}" v-on:click="ViewSolution(solutionID);">觀看解方</div>
		</div>
	</div>
	
	<div class="side-panel" v-bind:class="{open: openSearchPanel}">
		<div class="mid-title">
			搜尋條件
			<div class="bottom-line"></div>
		</div>
		<div class="search-container">
			<div class="search-item">
				<div class="search-label">排序</div>
				<select v-model="selectSort" v-on:change="SearchSolution();">
					<option value="newest">由新到舊</option>
					<option value="oldest">由舊到新</option>
					<option value="likeNum">最多讚</option>
					<option value="viewNum">最多觀看</option>
				</select>
			</div>
			<div class="search-item">
				<div class="search-label">解題者專業</div>
				<select v-model="selectProfession" v-on:change="SearchSolution();">
					<option value="全部">全部</option>
					<option v-for="profession in professions" v-bind:value="profession">{{profession}}</option>
				</select>
			</div>
			<div class="search-item" v-if="caseInfo">
				<div class="search-label">案例版本</div>
				<select v-model="selectVersion" v-on:change="SearchSolution();">
					<option value="全部">全部</option>
					<option v-for="c in caseInfo.info" v-bind:value="c.version">{{c.version}}</option>
				</select>
			</div>
			<div class="search-item">
				<div class="search-label">關鍵字</div>
				<input type="text" v-model="keyword" placeholder="請輸入搜尋關鍵字" v-on:change="SearchSolution();" v-on:keyup.13="SearchSolution();">
			</div>
		</div>
		<div class="input-bt" v-on:click="openSearchPanel = false;">確定</div>
		<div class="input-bt" v-on:click="ResetCondition();">重設</div>
	</div>

</div>
</template>

<script>
import userInfoEditor from "../vue/user-info-editor.vue"
import solutionEditor from "../vue/solution-editor.vue"
import solutionView from "../vue/solution-view.vue"
import solutionList from "../vue/solution-list.vue"
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
			messageList: [],
			status: "ViewCase",
			solutionID: null,
			professions: [],
			openSearchPanel: false,
			selectProfession:"全部",
			selectSort: "newest",
			selectVersion: "全部",
			keyword:""
		};
	},
	components: {
    	'user-info-editor': userInfoEditor,
    	'solution-editor': solutionEditor,
    	'solution-view': solutionView,
    	'solution-list': solutionList
	},
	created: function(){
		var urlParam = g_Util.GetUrlParameter();
		var caseID = urlParam.case;
		var solutionID = urlParam.solution;
		if(!caseID) window.location.href="/?message=無此案例";

		$.get("/case/view?case="+caseID, function(result){
			if(result.status != "ok") return window.location.href="/?message=無法讀取案例";
			//udate desc
			$("meta[name='description']").attr("content",result.data.desc);
			$("meta[property='og:description']").attr("content",result.data.desc);

			this.caseInfo = result.data;
			this.caseInfo.info = JSON.parse(this.caseInfo.info);
			this.vIndex = this.caseInfo.info.length-1;
			this.isMyCase = false;
			if(result.data.liked) this.isLike = true;
			if(this.user){
				this.isMyCase = (this.user.id == this.caseInfo.ownerID);
			}
			this.UpdateVersion();
			if(solutionID) this.ViewSolution(solutionID);
			
			$.get("/static/omaha.json",function(data){
				this.omaha = data;
			}.bind(this));

			$.get("/static/solution.json",function(data){
				this.professions = data.profession;
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
			if(this.$refs.caseViewSolution){
				this.$refs.caseViewSolution.SetUser(user);
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
		GetCaseInfo: function(){
			var info = {};
			info.caseID = this.caseInfo.id;
			info.caseVersion = this.caseInfo.info[this.vIndex].version;
			return info;
		},
		ModifyCase: function(){
			window.location.href="/case/edit?case="+this.caseInfo.id;
		},
		DeleteCase: function(){
			if(confirm("確定刪除案例?")){
				window.location.href="/case/delete?case="+this.caseInfo.id;
			}
		},
		RandomCase: function(){
			window.location.href="/case/random";
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
				g_Util.GoToAnchor("messageList");
				this.$root.ShowMessage("新增留言成功");

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
		},
		ViewCase: function(){
			this.status = "ViewCase";
			this.openSearchPanel = false;
		},
		ProvideSolution: function(solutionID){
			if(!this.user){
				var intentUrl = encodeURIComponent("/case?case="+this.caseInfo.id);
				return window.location.href="/auth/login?intentUrl="+intentUrl;
			}
			if(!this.user.profession){
				this.status = "InputUserInfo";
				this.$refs.userInfoEditor.submitCallback = function(result){
					this.ProvideSolution(solutionID);
				}.bind(this);
				return this.$refs.userInfoEditor.SetUser(this.user);
			}
			if(solutionID){
				this.$refs.solutionEditor.EditSolution(solutionID);
			}
			this.status = "ProvideSolution";
			this.openSearchPanel = false;
		},
		ViewSolution: function(solutionID){
			this.solutionID = solutionID;
			if(solutionID){
				this.status = "ViewSolution";
				this.$refs.caseViewSolution.LoadSolution(solutionID);
			}
			else{
				this.status = "SolutionList";
				this.SearchSolution();
			}
			this.openSearchPanel = false;
		},
		SearchSolution: function(){
			var param = {};
			param.caseID = this.caseInfo.id;
			if(this.keyword != ""){
				param.keyword = this.keyword;
			}
			if(this.selectProfession != "全部"){
				param.profession = this.selectProfession;
			}
			param.sort = this.selectSort;
			if(this.selectVersion != "全部"){
				param.caseVersion = this.selectVersion;
			}
			this.$refs.solutionList.ClearList();
			this.$refs.solutionList.LoadMoreList(param);
			
			var curCaseVersion = this.caseInfo.info[this.vIndex].version;
			this.$refs.solutionList.SetCurCaseVersion(curCaseVersion);
		},
		ResetCondition: function(){
			this.keyword = "";
			this.selectSort = "newest";
			this.selectProfession = "全部";
			this.SearchSolution();
		}
	}
}
</script>

<style lang="scss" scoped>
@import "../scss/main.scss";

.case-view{
	width: 1024px;
	max-width: 100%;
	margin: auto;
	padding: 10px;
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
	.bt-container{
		width: 1200px;
		max-width: 100%;
		padding: 0px 10px;
		margin: auto;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		flex-wrap: wrap;
	}
}
</style>