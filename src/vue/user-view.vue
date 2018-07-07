<template lang="html">

<div class="user-view">
	<div class="feedback-statistic">
		<div class="container">
			案例數<div class="feedback-num">{{target.caseNum}}</div>
		</div>
		<div class="container">
			解方數<div class="feedback-num">{{target.solNum}}</div>
		</div>
		<div class="container" v-show="isMyAccount">
			<div class="action-bt" v-on:click="setupUserInfo = true;">修改資訊</div>
		</div>
	</div>

	<div class="user-box">
		<img class="user-photo" v-bind:src="target.photo">
		<div class="user-info">
			<div class="info-head">{{target.profession}} - {{target.name}}</div>
			<div class="info-desc">{{target.desc}}</div>
		</div>
	</div>
	
	<div class="title">聯絡資訊</div>
	<div class="contact-box">
		<ul>
			<li>
				<div class="contact-item">服務縣市：</div>
				<div class="contact-info">{{target.county||"未提供"}}</div>
			</li>
			<li>
				<div class="contact-item">公司或組織名稱：</div>
				<div class="contact-info">
					<div v-if="target.company && target.companyUrl">
						<a v-bind:href="user.companyUrl" target="_blank">{{target.company}}</a>
					</div>
					<div v-else>
						{{target.company||"未提供"}}
					</div>
				</div>
			</li>
			<li>
				<div class="contact-item">服務聯絡信箱：</div>
				<div class="contact-info">{{target.contactEmail||"未提供"}}</div>
			</li>
			<li>
				<div class="contact-item">服務聯絡電話：</div>
				<div class="contact-info">{{target.tel||"未提供"}}</div>
			</li>
		</ul>
	</div>
	
	<div class="separator"></div>
	<div class="title">案例列表</div>
	<case-list ref="caseList"></case-list>
	<div class="title">解方列表</div>
	<solution-list ref="solutionList"></solution-list>

	<div class="tab-bar" v-show="isMyAccount">
		<div class="tab-bt-container">
			<div class="tab-bt" v-on:click="setupUserInfo = true;">修改資訊</div>
			<div class="tab-bt" v-on:click="OpenPhotoSelect();">變更圖片</div>
			<div class="tab-bt" v-on:click="Logout();">登出</div>
		</div>
	</div>

	<div class="slide-panel" v-show="isMyAccount" v-bind:class="{open:setupUserInfo}">
		<div class="input-area">
			<div class="close-bt" v-on:click="setupUserInfo=false;">X</div>
			<div class="panel-title">修改資訊</div>
			<user-info-editor ref="userInfoEditor"></user-info-editor>
		</div>
	</div>
</div>

</template>

<script>
import caseList from "../vue/case-list.vue"
import solutionList from "../vue/solution-list.vue"
import userInfoEditor from "../vue/user-info-editor.vue"
var g_Util = require('../js/util');

export default {
	data: function () {
		return {
			user: {},
			target: {},
			isMyAccount: false,
			setupUserInfo: false
		};
	},
	components: {
		'case-list': caseList,
		'solution-list': solutionList,
		'user-info-editor': userInfoEditor
	},
	created: function(){
		var urlParam = g_Util.GetUrlParameter();
		var targetID = urlParam.target;
		if(!targetID) window.location.href="/?message=無此使用者";

		$.get("/user/info?user="+targetID, function(result){
			if(result.status != "ok") window.location.href="/?message=使用者查詢失敗";
			this.target = result.data;
			this.$refs.caseList.LoadMoreList({ownerID: targetID});
			this.$refs.solutionList.LoadMoreList({ownerID: targetID});
			if(this.user.id == this.target.id){
				this.isMyAccount = true;
			}
		}.bind(this));
	},
	methods: {
		SetUser: function(user){
			this.user = user;
			if(user.id == this.target.id){
				this.isMyAccount = true;
			}
			this.$refs.userInfoEditor.SetUser(user);
		},
		OpenPhotoSelect: function(){
			this.$refs.userInfoEditor.ChangePhoto();
		},
		ChangeUserPhoto: function(photoInfo){
			if(!this.isMyAccount) return;
			this.user.photo = photoInfo.photo;
			this.user.icon = photoInfo.icon;
			this.target.photo = photoInfo.photo;
			this.target.icon = photoInfo.icon;
		},
		UpdateUserInfo: function(user){
			if(!this.isMyAccount) return;
			this.user = user;
			this.target = user;
			this.setupUserInfo = false;
		},
		Logout: function(){
			if(!this.isMyAccount) return;
			if(confirm("確定登出?")){
				window.location.href="/auth/logout";
			}
		}
	}
}
</script>

<style lang="scss" scoped>
@import "../scss/main.scss";

.user-view{
	width: 800px;
	max-width: 100%;
	margin: auto;
	font-size: 1.1em;
	.user-box{
		border-radius: 5px;
		width: 100%;
		padding: 10px;
		margin: auto;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		.user-photo{
			width: 250px;
			height: 250px;
			border-radius: 50%;
			object-fit: cover;
			padding: 10px;
		}
		.user-info{
			flex-grow: 1;
			.info-head{
				padding: 10px;
				border-bottom: 1px solid #dddddd;
			}
			.info-desc{
				padding: 10px;
				white-space: pre-wrap;
			}
		}
	}
	.contact-box{
		color: #333333;
		li{
			padding: 5px;
		}
		.contact-item{
			display: inline-block;
		}
		.contact-info{
			display: inline-block;
		}
	}
}

</style>