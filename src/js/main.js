
import topbar from "../vue/topbar.vue"
import calculator from "../vue/calculator.vue"
import loginPanel from "../vue/login-panel.vue"
import userInfoEditor from "../vue/user-info-editor.vue"
import caseEditor from "../vue/case-editor.vue"
import caseListThumb from "../vue/case-list-thumb.vue"
import caseList from "../vue/case-list.vue"
import caseView from "../vue/case-view.vue"

var g_Util = require('../js/util');

new Vue({
	el: '#careTips',
	components:{topbar,calculator,loginPanel,userInfoEditor,caseEditor,caseListThumb,caseList,caseView},
	data:{
		user: null
	},
	created: function(){
		window.addEventListener('resize', this.CloseMenu);
		$.get("/user/me",function(data){
			if(data.user){
				this.user = data.user;
				if(this.$refs.topbar) this.$refs.topbar.SetUser(data.user);
				if(this.$refs.userInfoEditor) this.$refs.userInfoEditor.SetUser(data.user);
				if(this.$refs.caseView) this.$refs.caseView.SetUser(data.user);
			}
			var urlParam = g_Util.GetUrlParameter();
			if(urlParam.message){
				alert(urlParam.message);
			}
		}.bind(this));
    },
    methods: {
    	CloseMenu: function(){
    		if(this.$refs.topbar) this.$refs.topbar.CloseMenu();
    	}
    }
})