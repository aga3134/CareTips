<template lang="html">

<div class="main">
	<div class="category-title">
		最新案例
		<div class="bottom-line"></div>
	</div>
	<case-list ref="caseList" init="1"></case-list>
	<div class="category-separator"></div>
	<div class="category-title">
		關於本站
		<div class="bottom-line"></div>
	</div>
	<div class="about">
		<p>謹以此專案感謝每一位長期忍受制度中的無奈，為無助家庭默默提供溫暖協助的照護服務者。照服，亦是在造福。願在造福路上，本站可以伴著大家，為大家提供一絲絲幫助。</p>
		<p>本站是參與「<a href="https://unihub.hfcc.com.tw/hackathon/2018-1/" target="_blank">博祖克實驗 資訊系統議題松</a>」後發展出的專案，目的在為照護服務者提供<span class="enhance">跨專業的對話與交流</span>，藉由各路專家開放自己的知識與經驗，<span class="enhance">累積照護情境案例與解決方案</span>，讓新手夥伴能有一個快速成長的練功房。</p>
		<p>正如<a href="https://www.facebook.com/groups/115650035793555/" target="_blank">HCOS</a>哈爸所說，開放系統為使用者省下一分鐘，全台灣就會省下2300萬分鐘；您所分享出來的經驗與專業為使用者增加一分功力，全台灣就會一起增加2300萬分功力。一起為台灣建構更加美好的高齡生活吧~</p>
	</div>
	<div class="category-title">
		挖坑夥伴
		<div class="bottom-line"></div>
	</div>
	<div class="logo-container">
		<a href="https://www.facebook.com/groups/115650035793555/" target="_blank">
			<img class="logo-long" src="/static/image/logo/hcos.png">
		</a>
		<a href="https://unihub.hfcc.com.tw" target="_blank">
			<img class="logo" src="/static/image/logo/unihub.png">
		</a>
		<a href="http://goodwork.hfcc.com.tw" target="_blank">
			<img class="logo-long" src="/static/image/logo/goodwork.png">
		</a>
	</div>
	<div class="category-title">
		開發者
		<div class="bottom-line"></div>
	</div>
	<div class="logo-container">
		<a href="https://agawork.tw" target="_blank">
			<img class="logo" src="/static/image/logo/agawork.png">
		</a>
	</div>
</div>

</template>

<script>
import caseList from "../vue/case-list.vue"
var g_Util = require('../js/util');

export default {
	data: function () {
		return {
			
		};
	},
	components: {
		'case-list': caseList
	},
	created: function(){
		
	},
	methods: {
		
	}
}
</script>

<style lang="scss" scoped>
@import "../scss/main.scss";

.main{
	width: 1024px;
	max-width: 100%;
	margin: auto;
	.category-title{
		font-size: 1.5em;
		padding: 5px;
		margin: 20px auto 0px auto;
		text-align: center;
		.bottom-line{
			margin: auto;
			width: 150px;
			padding: 5px;
			border-bottom: 1px solid #888888;
		}
	}
	.category-separator{
		width: 800px;
		max-width: 100%;
		padding: 20px;
		margin: auto;
		border-bottom: 1px solid #dddddd;
	}
	.about{
		width: 600px;
		max-width: 100%;
		margin: auto;
		font-size: 1.2em;
		&:first-letter{
			font-size: 1.5em;
			color: #ff3333;
		}
		.enhance{
			font-weight: bold;
			text-decoration: underline;
		}
		a{
			text-decoration: none;
			color: #ff8833;
			&:hover{
				color: #ff3333;
			}
		}
		p{
			line-height: 1.7em;
			text-indent: 2em;
		}
	}
	.logo-container{
		width: 800px;
		max-width: 100%;
		margin: auto;
		display: flex;
		justify-content: space-around;
		align-items: center;
		flex-wrap: wrap;
		.logo{
			width: 150px;
			max-width: 100%;
		}
		.logo-long{
			width: 200px;
			max-width: 100%;
		}
	}
}

</style>