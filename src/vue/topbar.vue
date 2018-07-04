<template lang="html">
<div>
	<div class="topbar">
		<a class="logo" href="/">
			<img v-bind:src="logoImg">
		</a>
		<img class="menu-bt" v-bind:src="menuImg" v-on:click="ToggleMenu();">
		<div class="bt-container">
			<a v-for="item in activeItem.slice(0, itemInBar)" v-bind:href="item.link">
				<div class="bt">{{item.name}}</div>
			</a>
		</div>
	</div>
	<ul class="menu-container" v-bind:class="{open: isOpen}">
		<li v-for="item in activeItem">
			<a v-bind:href="item.link">{{item.name}}</a>
		</li>
	</ul>
</div>
</template>

<script>
export default {
	data: function () {
		return {
			logoImg: "/static/image/logo-text.png",
			menuImg: "/static/image/menu-button.png",
			isOpen: false,
			isLogin: false,
			itemInBar: 2,
			itemList: [{name:"新增案例",link:"/case/create",login: 0},
						{name:"照服計算機",link:"/calculator",login: 0},
						{name:"專業連結",link:"/link",login: 0},
						{name:"我的帳號",link:"/account",login: 1},
						{name:"登入",link:"/auth/login",login: -1},
						{name:"登出",link:"/auth/logout",login: 1}],
			activeItem: [],
			user: {}
		};
	},
	created: function(){
		this.UpdateMenu();
	},
	methods: {
		SetUser: function(user){
			this.user = user;
			this.menuImg = user.icon;
			this.isLogin = true;
			this.UpdateMenu();
		},
		ToggleMenu: function(){
			this.isOpen = !this.isOpen;
		},
		CloseMenu: function(){
			this.isOpen = false;
		},
		UpdateMenu: function(){
			this.activeItem = [];
			for(var i=0;i<this.itemList.length;i++){
				var item = this.itemList[i];
				if(item.login == 1 && !this.isLogin) continue;
				if(item.login == -1 && this.isLogin) continue;
				this.activeItem.push(item);
			}
		},
		ChangeUserPhoto: function(photoInfo){
			this.user.photo = photoInfo.photo;
			this.user.icon = photoInfo.icon;
			this.menuImg = photoInfo.icon;
		}
	}
}
</script>

<style lang="scss" scoped>
@import "../scss/main.scss";

$enhance-color: #BE9063;
$text-color: #333333;

.topbar{
	position: fixed;
	top: 0px;
	left: 0px;
	width: 100%;
	height: 70px;
	padding: 10px;
	box-shadow: 0px 2px 5px #888;
	background-color: #eeeeee;
	z-index: 10;
	.logo{
		position: absolute;
		top: 10px;
		left: 20px;
		height: 50px;
		img{
			height: 100%;
			cursor: pointer;

		}
	}
	.menu-bt{
		display: block;
		position: absolute;
		top: 15px;
		right: 10px;
		@include pad-width(){
			right: 20px;
		}
		height: 40px;
		border-radius: 50px;
		cursor: pointer;
		&:hover{
			-webkit-filter: brightness(80%);
			filter: brightness(80%);
		}
	}
	.bt-container{
		height: 100%;
		position: absolute;
		top: 0px;
		right: 80px;
		display: none;
		@include pad-width(){
			display: flex;
			justify-content: flex-end;
			align-items: center;
		}
		.bt{
			font-size: 1.2em;
			display: inline-block;
			padding: 5px 10px;
			margin: 5px 10px;
			text-align: center;
			color: $text-color;
		    cursor: pointer;
		    &:hover{
		    	color: $enhance-color;
		    	border-bottom: 2px solid $enhance-color;
		    }
		}
	}
}

.menu-container{
	position: fixed;
	right: 0px;
	top: 70px;
	width: 100%;
	@include pad-width(){
		width: 300px;
		max-width: 100%;
		border-radius: 0px 0px 0px 10px;
	}
	padding: 0px 20px;
	margin: 0px;
	list-style-type: none;
	box-shadow: 0px 2px 4px 0px #888;
	background-color: #f8f8f8;
	font-size: 1.25em;
	color: $text-color;
	z-index: 9;
	overflow-y: hidden;
	max-height: 0px;
	-webkit-transition: max-height $trans-time,padding $trans-time ease;
    transition: max-height $trans-time,padding $trans-time ease;
	&.open{
		padding: 10px 20px;
		max-height: 300px;
	}
	li{
		border-bottom: 1px solid $enhance-color;
		a{
			padding: 10px 0px;
			display: block;
			color: $text-color;
			text-decoration: none;
		}
		&:last-of-type{
			border: none;
		}
		&:hover{
			background-color: #eeeeee;
		}
	}
}
</style>