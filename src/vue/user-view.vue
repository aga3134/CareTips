<template lang="html">

<div class="user-view">
	<div class="user-box">
		<img class="user-photo" v-bind:src="user.photo">
		<div class="user-info">
			<div class="info-head">{{user.profession}} - {{user.name}}</div>
			<div class="info-desc">{{user.desc}}</div>
		</div>
	</div>
	
	<div class="title">聯絡資訊</div>
	<div class="contact-box">
		<ul>
			<li>
				<div class="contact-item">服務縣市：</div>
				<div class="contact-info">{{user.county||"未提供"}}</div>
			</li>
			<li>
				<div class="contact-item">公司或組織名稱：</div>
				<div class="contact-info">{{user.company||"未提供"}}</div>
			</li>
			<li>
				<div class="contact-item">服務聯絡信箱：</div>
				<div class="contact-info">{{user.contactEmail||"未提供"}}</div>
			</li>
			<li>
				<div class="contact-item">服務聯絡電話：</div>
				<div class="contact-info">{{user.tel||"未提供"}}</div>
			</li>
		</ul>
	</div>

	<div class="separator"></div>
	<div class="title">案例列表</div>
	<case-list ref="caseList"></case-list>
	<div class="title">解方列表</div>
	<solution-list ref="solutionList"></solution-list>
</div>

</template>

<script>
import caseList from "../vue/case-list.vue"
import solutionList from "../vue/solution-list.vue"
var g_Util = require('../js/util');

export default {
	data: function () {
		return {
			user: {}
		};
	},
	components: {
		'case-list': caseList,
		'solution-list': solutionList
	},
	created: function(){
		var urlParam = g_Util.GetUrlParameter();
		var userID = urlParam.user;
		if(!userID) window.location.href="/?message=無此使用者";

		$.get("/user/info?user="+userID, function(result){
			if(result.status != "ok") window.location.href="/?message=使用者查詢失敗";
			this.user = result.data;
			this.$refs.caseList.LoadMoreList({ownerID: userID});
			this.$refs.solutionList.LoadMoreList({ownerID: userID});
		}.bind(this));
	},
	methods: {
		
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