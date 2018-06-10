<template lang="html">
<div>
	<div class="topbar">
		<a class="logo" href="/">
			<img v-bind:src="logoImg+'?v='+version">
		</a>
		<img class="menu-bt" v-bind:src="menuImg+'?v='+version" v-on:click="ToggleMenu();">
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
			version: "1.0.0",
			isOpen: false,
			isLogin: false,
			itemInBar: 2,
    		itemList: [{name:"照服計算機",link:"/calculator",login: 0},
    					{name:"關於本站",link:"/about",login: 0},
    					{name:"新增案例",link:"/create",login: 0},
    					{name:"專業連結",link:"/link",login: 0},
    					{name:"帳號設定",link:"/setting",login: 1},
    					{name:"登入帳號",link:"/login",login: -1}],
    		activeItem: []
		};
	},
	created: function(){
		window.addEventListener('resize', this.OnWinResize);
		this.isLogin = false;
		this.UpdateMenu();
	},
	methods: {
		ToggleMenu: function(){
			this.isOpen = !this.isOpen;
		},
		OnWinResize: function(){
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
		}
	},
}
</script>

<style lang="scss" scoped>
@import "../scss/main.scss";

$enhance-color: #BE9063;
$text-color: #333333;
$trans-time: 0.5s;

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
		width: 200px;
		height: 50px;
		img{
			width: 100%;
			cursor: pointer;
		}
	}
	.menu-bt{
		display: block;
		position: absolute;
		top: 10px;
		right: 20px;
		height: 50px;
		cursor: pointer;
		&:hover{
			-webkit-filter: brightness(50%);
			filter: brightness(50%);
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
	left: 0px;
	top: 70px;
	//display: none;
	width: 100%;
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
		//display: block;
	}
	li{
		padding: 10px 0px;
		border-bottom: 1px solid $enhance-color;
		a{
			display: block;
			color: $text-color;
			text-decoration: none;
		}
		&:last-of-type{
			border: none;
		}
	}
}
</style>