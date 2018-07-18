<template lang="html">
<div class="solution-editor" v-on:click.self="ViewCase();">
	<div class="step-page">

		<div class="input-bt" v-on:click="ViewCase();">觀看案例</div>

		<div class="step-bt-container">
			<div class="tab-bt" v-bind:class="{on:step==0}" v-on:click="step=0;">個案措施</div>
			<div class="tab-bt" v-bind:class="{on:step==1}" v-on:click="step=1;">家屬協助</div>
			<div class="tab-bt" v-bind:class="{on:step==2}" v-on:click="step=2;">專業連結</div>
			<div class="tab-bt" v-bind:class="{on:step==3}" v-on:click="step=3;">服務設定</div>
		</div>

		<div class="quest" v-html="quest[step]"></div>
		<div class="separator"></div>
		<div class="input-bt" v-on:click="openInputPanel=true;">新增項目</div>
		<div class="sol-container">
			<div v-if="step==0 || step==1">
				<div class="problem-cat" v-for="(p,i) in priority">
					<div class="problem-header">{{p.name}}</div>
					<div class="problem-container">
						<div class="problem-item one-third-w" v-bind:class="'cat-D'+(i+1)" v-for="(s,j) in solution[step][i]">
							<div class="problem-title">{{intervention[s.intervention].name}}</div>
							<div class="problem-body">
								<div class="problem-desc" v-html="s.desc"></div>
								<div class="item-bt-container">
									<div class="item-bt" v-on:click="ModifyItem(i,j);">修改</div>
									<div class="item-bt" v-on:click="DeleteItem(i,j);">刪除</div>
								</div>
								<div class="target-info">針對問題 - {{s.targetName}}</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div v-if="step==2">
				<div class="problem-cat">
					<div class="problem-header">專業連結</div>
					<div class="problem-container">
						<div class="problem-item one-third-w cat-D4" v-for="(s,j) in solution[step][0]">
							<div class="problem-title">{{s.profession}}</div>
							<div class="problem-body">
								<div class="problem-desc" v-html="s.desc"></div>
								<div class="item-bt-container">
									<div class="item-bt" v-on:click="ModifyItem(0,j);">修改</div>
									<div class="item-bt" v-on:click="DeleteItem(0,j);">刪除</div>
								</div>
								<div class="target-info">針對問題 - {{s.targetName}}</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div v-if="step==3">
				<div class="problem-cat">
					<div class="problem-header">服務項目</div>
					<div class="problem-container">
						<div class="problem-item one-third-w" v-bind:class="'cat-'+s.category" v-for="(s,j) in solution[step][0]">
							<div class="problem-title">{{s.code}} {{s.name}}</div>
							<div class="problem-body">
								<div class="problem-desc" v-html="s.desc"></div>
								<div class="item-bt-container">
									<div class="item-bt" v-on:click="ModifyItem(0,j);">修改</div>
									<div class="item-bt" v-on:click="DeleteItem(0,j);">刪除</div>
								</div>
								<div class="target-info">針對問題 - {{s.targetName}}</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="separator"></div>
		<div class="input-bt" v-show="action=='edit'" v-on:click="ClearEditSolution(true);">取消修改</div>
		<div class="input-bt" v-on:click="SubmitSolution();">{{action=="edit"?"完成修改":"完成解題"}}</div>
	</div>

	<transition name="fade">
		<div class="input-panel full" v-show="openInputPanel">
			<div class="input-area">
				<div class="quest" v-html="quest[step]"></div>
				<div class="input-item" v-if="problemList">
					<div class="input-label">針對問題</div>
					<select v-model="targetIndex">
						<option value="">不指定</option>
						<option v-for="(op,index) in problemList['D1']" v-bind:value="'D1-'+index">{{op.name}}</option>
						<option v-for="(op,index) in problemList['D2']" v-bind:value="'D2-'+index">{{op.name}}</option>
						<option v-for="(op,index) in problemList['D3']" v-bind:value="'D3-'+index">{{op.name}}</option>
						<option v-for="(op,index) in problemList['D4']" v-bind:value="'D4-'+index">{{op.name}}</option>
					</select>
				</div>
				<div v-show="step == 0 || step == 1">
					<div class="input-item">
						<div class="input-label">優先順序</div>
						<select v-model="selectPriority">
							<option v-for="(p,i) in priority" v-bind:value="i">{{p.name}}</option>
						</select>
					</div>
					<div class="input-item">
						<div class="input-label">措施</div>
						<select v-model="selectIntervention">
							<option v-for="(v,i) in intervention" v-bind:value="i">{{v.name}}</option>
						</select>
					</div>
				</div>
				<div v-show="step == 2">
					<div class="input-item">
						<div class="input-label">專業連結</div>
						<select v-model="selectProfession">
							<option v-for="p in professions" v-bind:value="p">{{p}}</option>
						</select>
						
					</div>
					<div class="input-item" v-show="selectProfession=='其他'">
						<input type="text" v-model="customProfession" placeholder="請輸入您要連結的專業">
					</div>
				</div>
				<div v-show="step == 3">
					<care-service-selection ref="serviceSelect"></care-service-selection>
				</div>

				<textarea v-model="inputDesc" placeholder="請簡述您提供的措施"></textarea>
				<div class="input-bt" v-show="!modify" v-on:click="AddItem();">新增</div>
				<div class="input-bt" v-show="!modify" v-on:click="ClearTarget();">取消</div>
				<div class="input-bt" v-show="modify" v-on:click="DoModify();">修改</div>
				<div class="input-bt" v-show="modify" v-on:click="ClearModify();">取消修改</div>
			</div>
		</div>
	</transition>
</div>
</template>

<script>
import careServiceSelection from "../vue/care-service-selection.vue"
var g_Util = require('../js/util');

export default {
	data: function () {
		return {
			action: "create",
			solutionID: null,
			quest:{},
			priority:{},
			intervention:{},
			professions: [],
			customProfession:"",
			solution: [
				{0:[],1:[],2:[]},
				{0:[],1:[],2:[]},
				{0:[]},
				{0:[]}
			],
			problemList: null,
			step: 0,
			openInputPanel: false,
			//for intervention
			selectPriority: 0,
			selectIntervention: 0,
			selectProfession: "",
			inputDesc: "",
			targetIndex: "",
			modify: false,
			modifyCategory: "",
			modifyIndex: -1,
			dirty: false
		};
	},
	components: {
    	'care-service-selection': careServiceSelection
	},
	created: function(){
		$.get("/static/solution.json",function(data){
			this.quest = data.quest;
			this.priority = data.priority;
			this.intervention = data.intervention;
			this.professions = data.profession;
			this.selectProfession = this.professions[0];
		}.bind(this));

		window.onbeforeunload = function(){
			if(this.dirty) return "";
		}.bind(this);
	},
	methods: {
		SetProblem: function(problem){
			this.problemList = problem;
		},
		EditSolution: function(solutionID){
			$.get("/solution/view?solution="+solutionID,function(result){
				if(result.status != "ok") return alert("讀取解方失敗");
				this.solutionID = solutionID;
				this.action = "edit";
				this.solution = JSON.parse(result.data.info); 
				this.step = 0;
			}.bind(this));
		},
		ClearEditSolution: function(backToSolution){
			if(backToSolution){
				this.$parent.ViewSolution(this.solutionID);
			}
			this.solutionID = null;
			this.action = "create";
			this.solution = [
				{0:[],1:[],2:[]},
				{0:[],1:[],2:[]},
				{0:[]},
				{0:[]}
			];
			this.step = 0;
		},
		AddSolutionForTarget: function(cat ,index){
			this.step = 0;
			this.openInputPanel = true;
			this.targetIndex = cat+"-"+index;
		},
		ClearTarget: function(){
			this.targetIndex = "";
			this.openInputPanel = false;
		},
		GetTargetName: function(){
			var name = "不指定";
			if(this.targetIndex != ""){
				var cat = this.targetIndex.split("-");
				var problemCat = this.problemList[cat[0]];
				if(!problemCat) return name;
				if(cat[1]<0 || cat[1]>=problemCat.length) return name;
				return problemCat[cat[1]].name;
			}
			return name;
		},
		AddItem: function(){
			this.dirty = true;
			switch(this.step){
				case 0: this.AddIntervention(); break;
				case 1: this.AddIntervention(); break;
				case 2: this.AddProfession(); break;
				case 3: this.AddService(); break;
			}
			this.ClearTarget();
		},
		AddIntervention: function(){
			var plan = {};
			plan.priority = this.selectPriority;
			plan.intervention = this.selectIntervention;
			plan.desc = this.inputDesc;
			plan.targetIndex = this.targetIndex;
			plan.targetName = this.GetTargetName();
			this.inputDesc = "";
			this.solution[this.step][this.selectPriority].push(plan);
		},
		AddProfession: function(){
			var plan = {};
			if(this.selectProfession == "其他"){
				plan.profession = this.customProfession;
			}
			else plan.profession = this.selectProfession;
			plan.targetIndex = this.targetIndex;
			plan.targetName = this.GetTargetName();
			plan.desc = this.inputDesc;
			this.inputDesc = "";
			this.solution[this.step][0].push(plan);
		},
		AddService: function(){
			var item = this.$refs.serviceSelect.GetSelectItem();
			item.desc = this.inputDesc;
			item.targetIndex = this.targetIndex;
			item.targetName = this.GetTargetName();
			this.inputDesc = "";
			this.solution[this.step][0].push(item);
		},
		ModifyItem: function(category, index){
			this.modify = true;
			this.modifyCategory = category;
			this.modifyIndex = index;
			var plan = this.solution[this.step][category][index];
			switch(this.step){
				case 0: case 1:
					this.selectPriority = plan.priority;
					this.selectIntervention = plan.intervention;
					break;
				case 2:
					if(!this.professions.includes(plan.profession)){
						this.selectProfession = "其他";
						this.customProfession = plan.profession;
					}
					else this.selectProfession = plan.profession;
					break;
				case 3:
					this.$refs.serviceSelect.SetSelectItem(plan);
					break;
			}
			this.targetIndex = plan.targetIndex;
			this.inputDesc = plan.desc;

			this.openInputPanel = true;
		},
		DeleteItem: function(category, index){
			if(confirm("確定刪除?")){
				var arr = this.solution[this.step][category];
				if(!arr || index < 0 || index >= arr.length) return;
				arr.splice(index, 1);
			}
		},
		DoModify: function(){
			this.dirty = true;
			var plan = {};
			var changeCategory = false;
			switch(this.step){
				case 0: case 1:
					plan.priority = this.selectPriority;
					plan.intervention = this.selectIntervention;
					if(this.selectPriority != this.modifyCategory){
						changeCategory = true;
					}
					break;
				case 2:
					if(this.selectProfession == "其他"){
						plan.profession = this.customProfession;
					}
					else plan.profession = this.selectProfession;
					break;
				case 3:
					plan = this.$refs.serviceSelect.GetSelectItem();
					break;
			}
			plan.targetIndex = this.targetIndex;
			plan.targetName = this.GetTargetName();
			plan.desc = this.inputDesc;

			if(changeCategory){
				this.solution[this.step][this.modifyCategory].splice(this.modifyIndex,1);
				this.solution[this.step][this.selectPriority].push(plan);
			}
			else{
				this.solution[this.step][this.modifyCategory][this.modifyIndex] = plan;
			}
			this.ClearModify();
		},
		ClearModify: function(){
			this.modify = false;
			this.modifyCategory = "";
			this.modifyIndex = -1;
			this.inputDesc = "";
			this.openInputPanel = false;
		},
		SubmitSolution: function(){
			var solNum = [0,0,0,0];
			for(var i=0;i<this.quest.length;i++){
				for(var key in this.solution[i]){
					solNum[i] += this.solution[i][key].length;
				}
			}
			if(solNum[0] == 0){
				return alert("請新增至少一個個案措施");
			}
			var str = "您的解方提供了\n";
			str += "個案措施 "+solNum[0]+" 項，";
			str += "家屬協助 "+solNum[1]+" 項，";
			str += "專業連結 "+solNum[2]+" 項，";
			str += "服務設定 "+solNum[3]+" 項\n";
			str += "確定送出?";
			if(!confirm(str)) return;

			var solution = {};
			var caseInfo = this.$parent.GetCaseInfo();
			solution.caseID = caseInfo.caseID;
			solution.caseVersion = caseInfo.caseVersion;
			solution.info = JSON.stringify(this.solution);

			var csrfToken = $("meta[name='csrf-token']").attr("content");
			this.dirty = false;
			switch(this.action){
				case "create":
					$.post("/solution/create", {data: solution,_csrf:csrfToken}, function(result){
						if(result.status != "ok") return alert("新增解方失敗");
						alert("新增解方成功");
						this.$parent.ViewSolution(result.data);
						this.ClearEditSolution();
					}.bind(this));
					break;
				case "edit":
					$.post("/solution/edit?solution="+this.solutionID, {data: solution,_csrf:csrfToken}, function(result){
						if(result.status != "ok") return alert("修改解方失敗");
						alert("修改解方成功");
						this.$parent.ViewSolution(result.data);
						this.ClearEditSolution();
					}.bind(this));
					break;
			}
		},
		ViewCase: function(){
			this.$parent.ViewCase();
		}
	}
}
</script>

<style lang="scss" scoped>
@import "../scss/main.scss";

.solution-editor{
	width: 100%;
	min-height: 100%;
	.step-page{
		background-color: #eeeeee;
		color: rgb(50,50,50);
		width: 1024px;
		max-width: 100%;
		padding: 30px 10px;
		border-radius: 5px;
		margin: 10px auto;
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
	.remark{
		text-align: center;
		padding: 5px 0px;
		font-size: 0.9em;
		color: #888888;
	}
	
}

</style>