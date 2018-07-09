<template lang="html">

<div class="main">
	<div v-on:click="openSearchPanel=false;">
		<div class="bt-bar">
			<div class="action-bt" v-on:click.stop="openSearchPanel=true;">搜尋案例</div>
			<div class="action-bt" v-on:click="GoToLink('/case/create');">新增案例</div>
			<div class="action-bt" v-on:click="GoToLink('/case/random');">隨機解題</div>
		</div>
		<div class="category-title">
			案例列表
			<div class="bottom-line"></div>
		</div>
		<div>
			<case-list ref="caseList" init="1"></case-list>
			<div class="category-separator"></div>

			<div class="mid-title">
				關於本站
				<div class="bottom-line"></div>
			</div>
			<div class="about">
				<p>謹以此專案感謝每一位長期忍受制度中的無奈，為無助家庭默默提供溫暖協助的照護服務者。照服，亦是在造福。願在造福路上，本站可以伴著大家，為大家提供一絲絲幫助。</p>
				<p>本站是參與「<a href="https://unihub.hfcc.com.tw/hackathon/2018-1/" target="_blank">博祖克實驗 資訊系統議題松</a>」後發展出的專案，目的在為照護服務者提供<span class="enhance">跨專業的對話與交流</span>，藉由各路專家開放自己的知識與經驗，<span class="enhance">累積照護情境案例與解決方案</span>，讓新手夥伴能有一個快速成長的練功房。</p>
				<p>正如<a href="https://www.facebook.com/groups/115650035793555/" target="_blank">HCOS</a>哈爸所說，開放系統為使用者省下一分鐘，全台灣就會省下2300萬分鐘；您所分享出來的經驗與專業為使用者增加一分功力，全台灣就會一起增加2300萬分功力。一起為台灣建構更加美好的高齡生活吧~</p>
			</div>
			
			<div class="mid-title">
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
			<div class="mid-title">
				開發者
				<div class="bottom-line"></div>
			</div>
			<div class="logo-container">
				<a href="https://agawork.tw" target="_blank">
					<img class="logo" src="/static/image/logo/agawork.png">
				</a>
			</div>

			<div class="mid-title">
				相關資料
				<div class="bottom-line"></div>
			</div>
			<div class="opendata">
				<ul>
					<li>
						&#11201; <a href="https://github.com/aga3134/CareTips" target="_blank">網站開放原始碼</a>
					</li>
					<li>
						&#11201; <a href="https://docs.google.com/spreadsheets/d/11XRXJnxH_d1dDcN7p1sVahZa9aA_-PYmX8J_MZXPhZc/edit#gid=0" target="_blank">Omaha System三大表格中譯資料</a>
					</li>
					<li>
						&#11201; <a href="https://openhcos.github.io/radio-to-broadcast/" target="_blank">博祖克型態資源分享概念專案</a>
					</li>
					<li>
						&#11201; <a href="https://drive.google.com/drive/folders/1ZCz6t9701eLw2hTjUbhfxnHwL1Nv-8ns" target="_blank">博祖克實驗 資訊系統議題松 成果</a>
					</li>
				</ul>
			</div>
		</div>
	</div>

	<div class="tab-bar">
		<div class="tab-bt-container">
			<div class="tab-bt" v-on:click.stop="openSearchPanel=true;">搜尋案例</div>
			<div class="tab-bt" v-on:click="GoToLink('/case/create');">新增案例</div>
			<div class="tab-bt" v-on:click="GoToLink('/case/random');">隨機解題</div>
		</div>
	</div>

	<div class="side-panel" v-bind:class="{open: openSearchPanel}">
		<div class="mid-title">
			搜尋條件
			<div class="bottom-line"></div>
		</div>
		<div class="search-container">
			<div class="search-item">
				<div class="search-label">排序</div>
				<select v-model="selectSort" v-on:change="SearchCase();">
					<option value="newest">由新到舊</option>
					<option value="oldest">由舊到新</option>
					<option value="solNum">最多解方</option>
					<option value="likeNum">最多讚</option>
					<option value="viewNum">最多觀看</option>
				</select>
			</div>
			<div class="search-item">
				<div class="search-label canNotEmpty">分享者專業</div>
				<select v-model="selectProfession" v-on:change="SearchCase();">
					<option value="全部">全部</option>
					<option v-for="profession in professions" v-bind:value="profession">{{profession}}</option>
				</select>
			</div>
			<div class="search-item">
				<div class="search-label">關鍵字</div>
				<input type="text" v-model="keyword" placeholder="請輸入搜尋關鍵字" v-on:change="SearchCase();" v-on:keyup.13="SearchCase();">
			</div>
		</div>
		<div class="input-bt" v-on:click="openSearchPanel = false;">確定</div>
		<div class="input-bt" v-on:click="ResetCondition();">重設</div>
	</div>
</div>

</template>

<script>
import caseList from "../vue/case-list.vue"
var g_Util = require('../js/util');

export default {
	data: function () {
		return {
			openSearchPanel: false,
			selectProfession:"全部",
			selectSort: "newest",
			keyword:""
		};
	},
	components: {
		'case-list': caseList
	},
	created: function(){
		$.get("/static/solution.json", function(data){
			this.professions = data.profession;
		}.bind(this));
	},
	methods: {
		SearchCase: function(){
			var param = {};
			if(this.keyword != ""){
				param.keyword = this.keyword;
			}
			if(this.selectProfession != "全部"){
				param.profession = this.selectProfession;
			}
			param.sort = this.selectSort;
			this.$refs.caseList.ClearList();
			this.$refs.caseList.LoadMoreList(param);
		},
		ResetCondition: function(){
			this.keyword = "";
			this.selectSort = "newest";
			this.selectProfession = "全部";
			this.SearchCase();
		},
		GoToLink: function(link){
			window.location.href=link;
		}
	}
}
</script>

<style lang="scss" scoped>
@import "../scss/main.scss";

.main{
	width: 1200px;
	max-width: 100%;
	margin: auto;
	padding: 10px;
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
		p{
			line-height: 1.7em;
			text-indent: 2em;
		}
	}
	.opendata{
		width: 700px;
		max-width: 100%;
		margin: auto;
		font-size: 1.2em;
		ul{
			padding: 0px;
		}
		li{
			display: inline-block;
			padding: 10px;
			line-height: 1.7em;
		}
	}
	.bt-container{
		padding: 0px 10px;
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