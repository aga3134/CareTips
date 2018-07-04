<template lang="html">

<div class="user-account">
	<user-info-editor ref="userInfoEditor"></user-info-editor>

	<div class="separator"></div>
	<div class="title">案例列表</div>
	<case-list ref="caseList"></case-list>
	<div class="title">解方列表</div>
	<solution-list ref="solutionList"></solution-list>
</div>

</template>

<script>
import userInfoEditor from "../vue/user-info-editor.vue"
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
		'user-info-editor': userInfoEditor,
		'case-list': caseList,
		'solution-list': solutionList
	},
	created: function(){

	},
	methods: {
		SetUser: function(user){
			this.$refs.userInfoEditor.SetUser(user);
			this.$refs.caseList.LoadMoreList({ownerID: user.id});
			this.$refs.solutionList.LoadMoreList({ownerID: user.id});
		}
	}
}
</script>

<style lang="scss" scoped>
@import "../scss/main.scss";

.user-account{
	width: 800px;
	max-width: 100%;
	margin: auto;
}

</style>