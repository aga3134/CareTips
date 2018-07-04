import mainPage from "../vue/main-page.vue"
import topbar from "../vue/topbar.vue"
import careCalculator from "../vue/care-calculator.vue"
import loginPanel from "../vue/login-panel.vue"
import caseEditor from "../vue/case-editor.vue"
import caseList from "../vue/case-list.vue"
import caseView from "../vue/case-view.vue"
import userAccount from "../vue/user-account.vue"
import userView from "../vue/user-view.vue"

var g_Util = require('../js/util');

new Vue({
	el: '#careTips',
	components:{mainPage,topbar,careCalculator,loginPanel,caseEditor,caseList,caseView,
		userAccount,userView},
	data:{
		user: null,
		message: "",
		showMessage: false,
	},
	created: function(){
		window.addEventListener('resize', this.CloseMenu);
		$.get("/user/me",function(data){
			if(data.user){
				this.user = data.user;
				if(this.$refs.topbar) this.$refs.topbar.SetUser(data.user);
				if(this.$refs.userAccount) this.$refs.userAccount.SetUser(data.user);
				if(this.$refs.caseView) this.$refs.caseView.SetUser(data.user);
				if(this.$refs.caseEditor) this.$refs.caseEditor.SetUser(data.user);
			}

			var urlParam = g_Util.GetUrlParameter();
			if(urlParam.message){
				alert(decodeURIComponent(urlParam.message));
			}
			
			g_Util.SetupAnchorScroll(-80);
		}.bind(this));
	},
	methods: {
		CloseMenu: function(){
			if(this.$refs.topbar) this.$refs.topbar.CloseMenu();
		},
		ChangeUserPhoto: function(photoInfo){
			if(this.$refs.topbar) this.$refs.topbar.ChangeUserPhoto(photoInfo);
		},
		ShowMessage: function(msg){
			this.showMessage = true;
			this.message = msg;
			setTimeout(function(){
				this.showMessage = false;
				this.message = "";
			}.bind(this),3000);
		}
	}
})