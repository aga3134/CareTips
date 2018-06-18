<template lang="html">
<div>
	<div class="user-info">
		<div class="info-container">
			<div class="info-box">
				<img class="user-photo" v-bind:src="target.photo">
				<div class="photo-bt" v-on:click="ChangePhoto();">變更圖片</div>
				<input type="file" ref="uploadBt" v-on:change="UploadPhoto" hidden>
			</div>
			<div class="info-box">
				<div class="info-label canNotEmpty">姓名</div>
				<input type="text" v-model="target.name">
				<div class="info-label canNotEmpty">服務專業</div>
				<select v-model="selectService">
					<option v-for="service in services" v-bind:value="service">{{service}}</option>
				</select>
				<div v-show="selectService == '其他' ">
					<div class="info-label">請填寫服務專業</div>
					<input type="text" v-model="otherService">
				</div>
				<div class="info-label">服務縣市</div>
				<select v-model="target.county">
					<option v-for="county in counties" v-bind:value="county">{{county}}</option>
				</select>
				<div class="info-label">公司或組織名稱</div>
				<input type="text" v-model="target.company">
				<div class="info-label">服務聯絡信箱</div>
				<input type="text" v-model="target.contactEmail">
				<div class="info-label">服務聯絡電話</div>
				<input type="text" v-model="target.tel">
			</div>
		</div>
		<div class="info-label">自我介紹</div>
		<textarea v-model="target.desc"></textarea>
		<div class="remark">*為協助跨專業交流與連結，您所填寫的資訊皆可被其他人搜尋到。如有隱私疑慮，請將該欄位留白。</div>
		<div class="photo-bt" v-on:click="SubmitUserInfo();">儲存</div>
	</div>
</div>
</template>

<script>
var g_Util = require('../js/util');

export default {
	data: function () {
		return {
			user: {},
			target: {},
			selectService:"",
			otherService:"",
			services: ["照專/個管","照顧服務","物理治療","職能治療","居家護理","居家醫療","居家藥師","家事服務","藝術治療","園藝治療","語言治療","輔具評估與器材","交通服務","其他"],
			counties: ["臺北市","新北市","基隆市","桃園市","新竹縣","新竹市","苗栗縣","臺中市","彰化縣","南投縣","雲林縣","嘉義縣","嘉義市","臺南市","高雄市","屏東縣","宜蘭縣","花蓮縣","臺東縣","澎湖縣","金門縣","連江縣"],
			submitCallback: null
		};
	},
	created: function(){
		var urlParam = g_Util.GetUrlParameter();
		$.get("/user/me",function(data){
			if(data.user){
				this.user = data.user;
				this.target = data.user;
				this.InitSelectService();
			}
		}.bind(this));
		
	},
	methods: {
		ChangePhoto: function(){
			var elem = this.$refs.uploadBt;
			elem.click();
		},
		UploadPhoto: function(event){
			var file = event.target.files[0];

			var formData = new FormData();
			formData.append("uploadImage", file);

			$.ajax({
				url: "/user/upload-image",
				type: "POST",
				data: formData,
				processData: false,
				contentType: false,
				success: function(response) {
					window.location.reload();
				}.bind(this),
				error: function(jqXHR, textStatus, errorMessage) {
					console.log(errorMessage); // Optional
				}
			});
		},
		InitSelectService: function(){
			if(this.target.profession){
				if(this.services.includes(this.target.profession)){
					this.selectService = this.target.profession;
				}
				else{
					this.selectService = "其他";
					this.otherService = this.target.profession;
				}
			}
		},
		SubmitUserInfo: function(){
			if(this.selectService == "其他"){
				this.target.profession = this.otherService;
			}
			else{
				this.target.profession = this.selectService;
			}
			console.log(this.target.profession);
			$.post("/user/edit", {data: this.target}, function(data){
				if(this.submitCallback) this.submitCallback(data);
				else{
					alert(data.status == "ok"?"修改成功":"修改失敗");
				}
			});
		}
	}
}
</script>

<style lang="scss" scoped>
@import "../scss/main.scss";

.user-info{
	width: 600px;
	max-width: 100%;
	margin: auto;
	.info-container{
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		.info-box{
			padding: 10px;
			margin: 10px;
			width: 100%;
			@include pad-width(){
				width: auto;
			}
		}
	}
	.info-label{
		color: #888888;
		margin: 5px 0px 0px 0px;
	}
	.user-photo{
		display: block;
		width: 250px;
		height: 250px;
		max-width: 100%;
		margin: 20px auto;
		object-fit: cover;
		border-radius: 50%;
	}
	.photo-bt{
		width: 100%;
		border: 1px solid #888888;
		border-radius: 5px;
		padding: 10px;
		margin: 5px 0px;
		text-align: center;
		cursor: pointer;
	}
	.remark{
		font-size: 1em;
		color: red;
	}
	.canNotEmpty:before{
		color: red;
		content: "*";
	}
	input{
		padding: 5px;
		width: 100%;
		border: 1px solid #dddddd;
		font-size: 1.1em;
	}
	select{
		border: 1px solid #dddddd;
		padding: 5px;
		width: 100%;
		font-size: 1.1em;
	}
	textarea{
		border-radius: 3px;
		padding: 10px;
		width: 100%;
		height: 120px;
		resize: none;
		font-size: 1.1em;
	}
}

</style>