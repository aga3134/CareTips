<template lang="html">
<div>
	<div class="case-editor">
		<div class="case-info">
			<a name="caseDesc"></a>
			<div class="cat-header">新增案例</div>
			<textarea v-model="caseInfo.desc" placeholder="請簡單描述案例之生活背景與問題摘要" v-on:change="dirty=true;"></textarea>
		</div>
		<div class="case-info">
			<a name="caseProblem"></a>
			<div class="cat-header">問題列表</div>
			<div class="input-bt" v-on:click="openInput = true;">新增問題</div>
			<div class="problem-list">
				<div class="problem-cat" v-for="cat in ['D1','D2','D3','D4']">
					<div class="problem-header" v-if="omaha!=null">{{omaha[cat].name}} ({{caseInfo.problem[cat].length}}項)</div>
					<div class="problem-container">
						<div class="problem-item one-third-w" v-bind:class="'cat-'+cat" v-for="(p,i) in caseInfo.problem[cat]">
							<div class="problem-title">{{p.name}}</div>
							<div class="problem-body">
								<div class="problem-desc" v-html="p.desc"></div>
								<div class="item-bt-container">
									<div class="item-bt" v-on:click="ModifyItem(cat,i);">修改</div>
									<div class="item-bt" v-on:click="DeleteItem(cat,i);">刪除</div>
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
				<a name="caseRemark"></a>
				*為協助照護經驗傳承與跨專業交流，您所分享的案例皆為公開可搜尋的資訊。請勿將實際個案的隱私資訊寫入案例中，以免侵犯個案隱私權。
				<div class="remark-check">
					<input type="checkbox" v-model="finalCheck"> 我了解了
				</div>
			</div>
			<div class="input-bt" v-on:click="SubmitCase();">
				<div v-show="action == 'create'">送出案例</div>
				<div v-show="action == 'edit'">完成案例修改</div>
			</div>
		</div>
		<div class="tab-bar">
			<div class="tab-bt-container">
				<div class="tab-bt" v-on:click="openInput = true;">新增問題</div>
				<div v-show="action == 'create'" class="tab-bt" v-on:click="SubmitCase();">送出案例</div>
				<div v-show="action == 'edit'" class="tab-bt" v-on:click="SubmitCase();">完成案例修改</div>
			</div>
		</div>
		
		<transition name="fade">
			<div class="input-panel" v-show="openInput">
				<div class="input-area" v-if="omaha != null">
					<div class="close-bt" v-on:click="openInput = false;">X</div>
					<div class="box-title" v-show="!modify">新增問題</div>
					<div class="box-title" v-show="modify">修改問題</div>
					<div class="input-item">
						<div class="input-label">面向</div>
						<select v-model="selectDomain" v-on:change="ChangeDomain();">
							<option value="D1">{{omaha.D1.name}}</option>
							<option value="D2">{{omaha.D2.name}}</option>
							<option value="D3">{{omaha.D3.name}}</option>
							<option value="D4">{{omaha.D4.name}}</option>
						</select>
					</div>
					<div class="input-item">
						<div class="input-label">問題</div>
						<select v-model="selectProblem" v-on:change="ChangeProblem();">
							<option v-for="(p,i) in omaha[selectDomain].problem" v-bind:value="i">{{p.cht}}</option>
						</select>
					</div>
					<div class="input-item">
						<div class="input-label">徵兆</div>
						<select v-model="selectSign">
							<option v-for="(s,i) in omaha[selectDomain].problem[selectProblem].sign" v-bind:value="i">{{s.cht}}</option>
						</select>
						<img class="filter-icon" src="/static/image/search-icon.png" v-on:click="OpenFilterPanel();">
					</div>
					<div class="input-item">
						<div class="input-label">問題狀況</div>
						<textarea v-model="problemDesc" placeholder="請簡單描述問題狀況"></textarea>
					</div>
					<div class="input-bt" v-show="!modify" v-on:click="AddProblem();">新增</div>
					<div class="input-bt" v-show="!modify" v-on:click="openInput = false;">取消</div>
					<div class="input-bt" v-show="modify" v-on:click="DoModify();">修改</div>
					<div class="input-bt" v-show="modify" v-on:click="ClearModify();">取消</div>
				</div>
			</div>
		</transition>

		<transition name="fade">
			<div class="input-panel" v-show="openFilterPanel">
				<div class="input-area">
					<div class="close-bt" v-on:click="openFilterPanel=false;">X</div>
					<div class="input-item">
						<div class="input-label">篩選</div>
						<input type="text" v-model="filterInput" ref="filterInput" v-on:keyup="UpdateFilterList();">
					</div>
					<div class="filter-list">
						<div v-for="cat in filterList" class="filter-category" v-if="cat.num>0">
							<div class="cat-label">{{cat.name}}</div>
							<div v-for="(p,i) in cat.problem" class="filter-problem" v-if="p.sign.length>0">
								<div class="problem-label">{{p.cht}}</div>
								<div class="filter-item" v-for="(s,j) in p.sign" v-on:click="SelectFilterItem(cat.id,s.pID,s.sID);">
									{{s.cht}}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</transition>

		<transition name="fade">
			<div class="input-panel" v-show="setupUserInfo">
				<div class="input-area">
					<div class="panel-title">請先輸入您的個人資訊</div>
					<user-info-editor ref="userInfoEditor"></user-info-editor>
				</div>
			</div>
		</transition>
	</div>
</div>
</template>

<script>
import userInfoEditor from "../vue/user-info-editor.vue"
var g_Util = require('../js/util');

export default {
	props: ["action"],
	components: {
    	'user-info-editor': userInfoEditor
	},
	data: function () {
		return {
			omaha: null,
			selectDomain: "D1",
			selectProblem: 0,
			selectSign: 0,
			problemDesc: "",
			openInput: false,
			finalCheck: false,
			caseInfo: {desc:"",problem:{"D1":[],"D2":[],"D3":[],"D4":[]}},
			caseID: null,
			modify: false,
			modifyCategory: "",
			modifyIndex: -1,
			setupUserInfo: false,
			user: null,
			openFilterPanel: false,
			filterInput: "",
			filterList: {},
			dirty: false
		};
	},
	created: function(){
		var urlParam = g_Util.GetUrlParameter();
		$.get("/static/omaha.json",function(data){
			this.omaha = data;

			if(this.action == "edit"){
				var caseID = urlParam.case;
				$.get("/case/view?case="+caseID, function(result){
					if(result.status != "ok") return window.location.href="/?message=存取案例失敗";
					this.caseID = caseID;
					var caseInfo = result.data;
					var info = JSON.parse(caseInfo.info);
					var problem = info[info.length-1].problem;
					this.caseInfo.desc = caseInfo.desc;
					if(problem.D1) this.caseInfo.problem.D1 = problem.D1;
					if(problem.D2) this.caseInfo.problem.D2 = problem.D2;
					if(problem.D3) this.caseInfo.problem.D3 = problem.D3;
					if(problem.D4) this.caseInfo.problem.D4 = problem.D4;
				}.bind(this));
			}
		}.bind(this));
		
		window.onbeforeunload = function(){
			if(this.dirty) return "";
		}.bind(this);
	},
	methods: {
		SetUser: function(user){
			this.user = user;
			if(!user.profession){
				this.setupUserInfo = true;
				this.$refs.userInfoEditor.submitCallback = function(result){
					this.setupUserInfo = false;
				}.bind(this);
				this.$refs.userInfoEditor.SetUser(user);
			}
		},
		ChangeDomain: function(){
			this.selectProblem = 0;
			this.selectSign = 0;
		},
		ChangeProblem: function(){
			this.selectSign = 0;
		},
		AddProblem: function(){
			this.dirty = true;
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
			this.$root.ShowMessage("加入問題 "+p.id);
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
			this.dirty = true;
			var domainID = this.selectDomain;
			var selectDomain = this.omaha[domainID];
			var selectProblem = selectDomain.problem[this.selectProblem];
			var selectSign = selectProblem.sign[this.selectSign];

			var item = {};
			item.id = domainID+"-"+selectProblem.id+"-"+selectSign.id;
			item.name = selectSign.cht;
			item.domainID = domainID;
			item.problemIndex = this.selectProblem;
			item.signIndex = this.selectSign;
			item.desc = this.problemDesc;

			if(this.modifyCategory == domainID){
				this.caseInfo.problem[this.modifyCategory][this.modifyIndex] = item;
			}
			else{
				this.caseInfo.problem[this.modifyCategory].splice(this.modifyIndex,1);
				this.caseInfo.problem[domainID].push(item);
			}
			this.ClearModify();
		},
		ClearModify: function(){
			this.modify = false;
			this.modifyCategory = "";
			this.modifyIndex = -1;
			this.problemDesc = "";
			this.openInput = false;
		},
		OpenFilterPanel: function(){
			this.openFilterPanel = true;
			this.UpdateFilterList();
			setTimeout(function(){
				this.$refs.filterInput.focus();
			}.bind(this),10);
		},
		UpdateFilterList: function(){
			this.filterList = {};
			for(var key in this.omaha){
				var category = {"id":key,"name":this.omaha[key].name,"problem":[],"num":0};
				for(var i=0;i<this.omaha[key].problem.length;i++){
					var problem = this.omaha[key].problem[i];
					var item = {"cht":problem.cht,"sign":[]};
					for(var j=0;j<problem.sign.length;j++){
						var sign = problem.sign[j];
						if(sign.cht.includes(this.filterInput)){
							item.sign.push({"cht":sign.cht,"pID":i,"sID":j});
						}
					}
					category.problem.push(item);
					category.num += item.sign.length;
				}
				this.filterList[key] = category;
			}
		},
		SelectFilterItem: function(cat,i,j){
			this.selectDomain = cat;
			this.selectProblem = i;
			this.selectSign = j;
			this.openFilterPanel = false;
		},
		SubmitCase: function(){
			var scrollOffset = -80;
			if(this.caseInfo.desc == ""){
				g_Util.GoToAnchor("caseDesc",scrollOffset,
					function(){alert("案例簡述不能空白");}
				);
				return;
			}
			if(this.caseInfo.problem["D1"].length == 0 && 
				this.caseInfo.problem["D2"].length == 0 && 
				this.caseInfo.problem["D3"].length == 0 && 
				this.caseInfo.problem["D4"].length == 0){
				g_Util.GoToAnchor("caseProblem",scrollOffset,
					function(){alert("問題列表不能空白");}
				);
				return;
			}
			if(!this.finalCheck){
				g_Util.GoToAnchor("caseRemark",scrollOffset,
					function(){alert("請閱讀紅色警示文字並勾選「我了解了」");}
				);
				return;
			}
			//console.log(this.target.profession);
			this.caseInfo.omahaVersion = this.omaha.version;
			this.dirty = false;
			var csrfToken = $("meta[name='csrf-token']").attr("content");
			switch(this.action){
				case "create":
					$.post("/case/create", {data: this.caseInfo,_csrf:csrfToken}, function(data){
						if(data.status != "ok") return window.location.href="/?message=新增案例失敗";
						window.location.href = "/case?case="+data.data;
					});
					break;
				case "edit":
					$.post("/case/edit?case="+this.caseID, {data: this.caseInfo,_csrf:csrfToken}, function(data){
						if(data.status != "ok") return window.location.href="/?message=修改案例失敗";
						window.location.href = "/case?case="+data.data;
					});
					break;
			}
			
		}
	}
}
</script>

<style lang="scss" scoped>
@import "../scss/main.scss";

$head-bg-color: #36688D;
$head-fg-color: #ffffff;
$link-color: #FF6666;
$link-hover-color: #FF3333;

.case-editor{
	width: 100%;
	height: 100%;
	overflow-x: hidden;
	overflow-y: auto;
	padding: 10px;
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

	.cat-header{
		margin: 10px auto;
		font-size: 1.6em;
		text-align: center;
		padding: 10px;
		color: $head-fg-color;
		background-color: $head-bg-color;
		border-radius: 3px;
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
	
}

</style>