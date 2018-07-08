<template lang="html">
<div class="solution-editor">
	<div class="step-page">
		<div class="remark">(第{{step+1}}題/共{{quest.length}}題)</div>
		<div class="quest" v-html="quest[step]"></div>
		<div class="step-bt-container">
			<div class="input-bt" v-show="action=='edit'" v-on:click="ClearEditSolution(true);">取消修改</div>
			<div class="input-bt" v-show="step>0" v-on:click="PrevQuest();">回上題</div>
			<div class="input-bt" v-show="step<quest.length-1" v-on:click="NextQuest();">下一題</div>
			<div class="input-bt" v-show="step==quest.length-1" v-on:click="SubmitSolution();">{{action=="edit"?"完成修改":"完成解題"}}</div>
		</div>
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
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="separator"></div>
		<div class="input-bt" v-on:click="ViewCase();">觀看案例</div>
	</div>

	<div class="input-panel" v-show="openInputPanel">
		<div class="input-area">
			<div class="quest" v-html="quest[step]"></div>
			<div v-show="step == 0 || step == 1">
				<div class="input-item">
					<div class="input-label">優先順序</div>
					<select v-model="selectPriority" v-bind:disabled="modify">
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
			<div class="input-bt" v-show="!modify" v-on:click="openInputPanel = false;">取消</div>
			<div class="input-bt" v-show="modify" v-on:click="DoModify();">修改</div>
			<div class="input-bt" v-show="modify" v-on:click="ClearModify();">取消修改</div>
		</div>
	</div>
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
			step: 0,
			openInputPanel: false,
			//for intervention
			selectPriority: 0,
			selectIntervention: 0,
			selectProfession: "",
			inputDesc: "",
			modify: false,
			modifyCategory: "",
			modifyIndex: -1
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
	},
	methods: {
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
		AddItem: function(){
			switch(this.step){
				case 0: this.AddIntervention(); break;
				case 1: this.AddIntervention(); break;
				case 2: this.AddProfession(); break;
				case 3: this.AddService(); break;
			}
			this.openInputPanel = false;
		},
		AddIntervention: function(){
			var plan = {};
			plan.priority = this.selectPriority;
			plan.intervention = this.selectIntervention;
			plan.desc = this.inputDesc;
			this.inputDesc = "";
			this.solution[this.step][this.selectPriority].push(plan);
		},
		AddProfession: function(){
			var plan = {};
			if(this.selectProfession == "其他"){
				plan.profession = this.customProfession;
			}
			else plan.profession = this.selectProfession;
			plan.desc = this.inputDesc;
			this.inputDesc = "";
			this.solution[this.step][0].push(plan);
		},
		AddService: function(){
			var item = this.$refs.serviceSelect.GetSelectItem();
			item.desc = this.inputDesc;
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
			var plan = {};
			switch(this.step){
				case 0: case 1:
					plan.priority = this.selectPriority;
					plan.intervention = this.selectIntervention;
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
			plan.desc = this.inputDesc;

			this.solution[this.step][this.modifyCategory][this.modifyIndex] = plan;
			this.ClearModify();
		},
		ClearModify: function(){
			this.modify = false;
			this.modifyCategory = "";
			this.modifyIndex = -1;
			this.inputDesc = "";
			this.openInputPanel = false;
		},
		NextQuest: function(){
			var solNum = 0;
			for(var key in this.solution[this.step]){
				solNum += this.solution[this.step][key].length;
			}
			if(this.step == 0 && solNum == 0){
				return alert("請新增至少一個項目");
			}
			if(this.step<this.quest.length-1) this.step++;
		},
		PrevQuest: function(){
			if(this.step>0) this.step--;
		},
		SubmitSolution: function(){
			var solution = {};
			var caseInfo = this.$parent.GetCaseInfo();
			solution.caseID = caseInfo.caseID;
			solution.caseVersion = caseInfo.caseVersion;
			solution.info = JSON.stringify(this.solution);
			switch(this.action){
				case "create":
					$.post("/solution/create", {data: solution}, function(result){
						if(result.status != "ok") return alert("新增解方失敗");
						alert("新增解方成功");
						this.$parent.ViewSolution(result.data);
						this.ClearEditSolution();
					}.bind(this));
					break;
				case "edit":
					$.post("/solution/edit?solution="+this.solutionID, {data: solution}, function(result){
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
	height: 100%;
	.step-page{
		background-color: #eeeeee;
		color: rgb(50,50,50);
		width: 1024px;
		max-width: 100%;
		padding: 10px;
		border-radius: 5px;
		margin: 10px auto;
	}
	.quest{
		padding: 5px 0px;
		font-size: 1.2em;
	}
	.remark{
		text-align: center;
		padding: 5px 0px;
		font-size: 0.9em;
		color: #888888;
	}
	.step-bt-container{
		display: flex;
		justify-content: flex-end;
		align-items: center;
		flex-wrap: wrap;
	}
}

</style>