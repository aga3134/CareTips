<template lang="html">
<div class="loginPanel">
	<div class="login" v-show="mode === 'login'">
		<div class="method-title">社群登入</div>
		<div class="google-bt" v-on:click="LoginByGoogle();">Google 登入</div>
		<div class="facebook-bt" v-on:click="LoginByFacebook();">Facebook 登入</div>
		<div class="seperator"></div>
		<div class="method-title">信箱登入</div>
		<form ref="loginForm" method="post" v-bind:action="pwLoginAction">
			<div class="relative-box">
				<div class="item-label">帳號</div>
				<div class="forget-password" v-on:click="ForgetPassword();">忘記密碼</div>
			</div>
			<input type="email" name="email" v-model="email" placeholder="請輸入電子信箱">
			<div class="item-label">密碼</div>
			<input type="password" name="password" v-model="password" placeholder="請輸入密碼" v-on:keyup.13="LoginByPassword();">
			<div class="login-bt" v-on:click="LoginByPassword();">登入</div>
		</form>
		<div class="text-link" v-on:click="mode='signup';">註冊新帳號</div>
	</div>
	
	<div class="signup" v-show="mode === 'signup'">
		<div class="method-title">快速註冊</div>
		<div class="google-bt" v-on:click="LoginByGoogle();">Google 註冊</div>
		<div class="facebook-bt" v-on:click="LoginByFacebook();">Facebook 註冊</div>
		<div class="seperator"></div>
		<form ref="signupForm" method="post" v-bind:action="pwSignupAction">
			<div class="method-title">信箱註冊</div>
			<div class="item-label">帳號</div>
			<input type="email" name="email" v-model="email" placeholder="請輸入電子信箱">
			<div class="item-label">姓名</div>
			<input type="text" name="name" v-model="name" placeholder="請輸入姓名">
			<div class="item-label">密碼</div>
			<input type="password" name="password" v-model="password" placeholder="請輸入密碼">
			<div class="item-label">確認密碼</div>
			<input type="password" v-model="passwordConfirm" placeholder="請再次確認密碼" v-on:keyup.13="SignupByPassword();">
			<div class="login-bt" v-on:click="SignupByPassword();">註冊</div>
		</form>
		<div class="text-link" v-on:click="mode='login';">返回登入</div>
	</div>

	<div class="resetPassword" v-show="mode === 'resetPassword'">
		<form ref="resetForm" method="post" action="/auth/reset-password">
			<div class="item-label">輸入新密碼</div>
			<input type="password" name="password" v-model="password" placeholder="請輸入密碼">
			<div class="item-label">確認新密碼</div>
			<input type="password" v-model="passwordConfirm" placeholder="請再次確認密碼" v-on:keyup.13="ResetPassword();">
			<div class="login-bt" v-on:click="ResetPassword();">重設密碼</div>
		</form>
	</div>
</div>
</template>

<script>
var g_Util = require('../js/util');

export default {
	data: function () {
		return {
			intentUrl: "",
			email: "",
			name: "",
			password: "",
			passwordConfirm: "",
			token: "",
			mode: "login",
			pwLoginAction: "/auth/login-by-password",
			pwSignupAction: "/auth/signup-by-password"
		};
	},
	created: function(){
		var urlParam = g_Util.GetUrlParameter();
		if(urlParam.intentUrl){
			this.intentUrl = encodeURIComponent(urlParam.intentUrl);
		}

		if(urlParam.reset == 1){
			this.mode = "resetPassword";
			this.token = urlParam.token;
		}
	},
	methods: {
		ValidateEmail: function(email){
			var pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return pattern.test(email);
		},
		LoginByGoogle: function(){
			var str = "/auth/login-by-google";
			if(this.intentUrl) str += "?intentUrl="+this.intentUrl;
			window.location.href = str;
		},
		LoginByFacebook: function(){
			var str = "/auth/login-by-facebook";
			if(this.intentUrl) str += "?intentUrl="+this.intentUrl;
			window.location.href = str;
		},
		LoginByPassword: function(){
			if(this.email == "") return alert("請輸入電子信箱");
			else if(!this.ValidateEmail(this.email))  return alert("請輸入正確的電子信箱");
			else if(this.password == "") return alert("請輸入密碼");
			if(this.intentUrl) this.pwLoginAction = "/auth/login-by-password?intentUrl="+this.intentUrl;
			this.$refs.loginForm.submit();
		},
		SignupByPassword: function(){
			if(this.email == "") return alert("請輸入電子信箱");
			else if(!this.ValidateEmail(this.email))  return alert("請輸入正確的電子信箱");
			else if(this.password == "") return alert("請輸入密碼");
			else if(this.name == "") return alert("請輸入姓名");
			else if(this.password != this.passwordConfirm) return alert("請確認密碼一致");
			if(this.intentUrl) this.pwSignupAction = "/auth/signup-by-password?intentUrl="+this.intentUrl;
			this.$refs.signupForm.submit();
		},
		ForgetPassword: function(){
			if(this.email == "") return alert("請輸入電子信箱");
			else if(!this.ValidateEmail(this.email))  return alert("請輸入正確的電子信箱");

			$.post("/auth/forget-password", {email: this.email}, function(data){
				//console.log(data);
				if(data.status == "ok"){
					alert("修改密碼的連結已寄至您的信箱，請點擊連結並更新密碼");
				}
			});
		},
		ResetPassword: function(){
			if(this.password == "") return alert("請輸入密碼");
			else if(this.password != this.passwordConfirm) return alert("請確認密碼一致");

			$.post("/auth/reset-password", {password: this.password, token: this.token}, function(data){
				//console.log(data);
				if(data.status == "ok"){
					alert("密碼已更新，請重新登入");
				}
				else{
					//console.log(data.message);
					switch(data.message){
						case "invalid token": alert("連結已失效"); break;
						default: alert("密碼更新失敗"); break;
					}
				}
				window.location.href="/auth/login";
				
			});
		}
	}
}
</script>

<style lang="scss">
@import "../scss/variable.scss";
@import "../scss/mixin.scss";

.loginPanel{
	width: 300px;
	max-width: 100%;
	margin: auto;
	@mixin bt{
		padding: 10px;
		margin: 10px 0px;
		text-align: center;
		cursor: pointer;
		border-radius: 5px;
	}
	.google-bt{
		@include bt;
		color: white;
		background-color: rgb(220,78,65);
	}
	.facebook-bt{
		@include bt;
		color: white;
		background-color: rgb(59,87,157);
	}
	.seperator{
		padding: 10px;
		margin-bottom: 10px;
		border-bottom: 1px solid #dddddd;
	}
	.method-title{
		text-align: center;
		font-size: 1.2em;
	}
	.relative-box{
		position: relative;
	}
	.forget-password{
		position: absolute;
		top: 0px;
		right: 0px;
		font-size: 0.8em;
		color: #666666;
		cursor: pointer;
	}
	.item-label{
		
	}
	input{
		padding: 5px;
		width: 100%;
	}
	.login-bt{
		@include bt;
		color: white;
		background-color: rgb(100,100,100);
	}
	.text-link{
		text-align: center;
		cursor: pointer;
	}
}
</style>