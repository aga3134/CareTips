<template lang="html">
<div>
	<div class="user-info-editor">
		<div class="info-container">
			<div class="info-box">
				<img class="user-photo" v-bind:src="user.photo">
				<div class="photo-bt" v-on:click="ChangePhoto();">變更圖片</div>
				<input type="file" ref="uploadBt" v-on:change="UploadPhoto" hidden>
			</div>
			<div class="info-box grow">
				<div class="info-label canNotEmpty">姓名</div>
				<input type="text" v-model="user.name" v-on:change="dirty=true;">
				<div class="info-label canNotEmpty">服務專業</div>
				<select v-model="selectProfession" v-on:change="dirty=true;">
					<option v-for="profession in professions" v-bind:value="profession">{{profession}}</option>
				</select>
				<div v-show="selectProfession == '其他' ">
					<div class="info-label canNotEmpty">請填寫服務專業</div>
					<input type="text" v-model="otherProfession" v-on:change="dirty=true;">
				</div>
				<div class="info-label">自我介紹</div>
				<textarea v-model="user.desc" v-on:change="dirty=true;"></textarea>
			</div>
		</div>
		<div class="sub-title">聯絡資訊</div>
		<div class="info-container">
			<div class="info-box">
				<div class="info-label">服務縣市</div>
				<select v-model="user.county" v-on:change="dirty=true;">
					<option v-for="county in counties" v-bind:value="county">{{county}}</option>
				</select>
			</div>
			<div class="info-box">
				<div class="info-label">公司或組織名稱</div>
				<input type="text" v-model="user.company" v-on:change="dirty=true;">
			</div>
			<div class="info-box">
				<div class="info-label">公司或組織網址</div>
				<input type="text" v-model="user.companyUrl" v-on:change="dirty=true;">
			</div>
			<div class="info-box">
				<div class="info-label">服務聯絡信箱</div>
				<input type="text" v-model="user.contactEmail" v-on:change="dirty=true;">
			</div>
			<div class="info-box">
				<div class="info-label">服務聯絡電話</div>
				<input type="text" v-model="user.tel" v-on:change="dirty=true;">
			</div>
		</div>
		
		<div class="remark">
			*為協助跨專業交流與連結，您所填寫的資訊皆可被其他人搜尋到。如有隱私疑慮，請將該欄位留白。
			<div class="remark-check">
				<input type="checkbox" v-model="finalCheck"> 我了解了
			</div>
		</div>
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
			selectProfession:"",
			otherProfession:"",
			professions: [],
			counties: [],
			submitCallback: null,
			finalCheck: false,
			dirty: false
		};
	},
	created: function(){
		$.get("/static/solution.json", function(data){
			this.professions = data.profession;
			this.counties = data.county;
		}.bind(this));

		window.onbeforeunload = function(){
			if(this.dirty) return "";
		}.bind(this);
	},
	methods: {
		SetUser: function(user){
			this.user = user;
			this.InitSelectProfession();
		},
		ChangePhoto: function(){
			var elem = this.$refs.uploadBt;
			elem.click();
		},
		UploadPhoto: function(event){
			var file = event.target.files[0];

			var formData = new FormData();
			formData.append("uploadImage", file);

			var csrfToken = $("meta[name='csrf-token']").attr("content");
			$.ajax({
				url: "/user/upload-image?_csrf="+csrfToken,
				type: "POST",
				data: formData,
				processData: false,
				contentType: false,
				success: function(result) {
					if(result.status != "ok") return alert("更新圖片失敗");
					this.user.photo = result.data.photo;
					this.user.icon = result.data.icon;
					this.$root.ChangeUserPhoto(result.data);
				}.bind(this),
				error: function(jqXHR, textStatus, errorMessage) {
					console.log(errorMessage);
				}
			});
		},
		InitSelectProfession: function(){
			if(this.user.profession){
				if(this.professions.includes(this.user.profession)){
					this.selectProfession = this.user.profession;
				}
				else{
					this.selectProfession = "其他";
					this.otherProfession = this.user.profession;
				}
			}
		},
		SubmitUserInfo: function(){
			if(this.selectProfession == "其他"){
				this.user.profession = this.otherProfession;
			}
			else{
				this.user.profession = this.selectProfession;
			}
			if(!this.user.name){
				return alert("請輸入您的姓名");
			}
			if(!this.user.profession){
				return alert("請輸入您的服務專業");
			}
			if(!this.finalCheck){
				return alert("請閱讀紅色警示文字並勾選「我了解了」");
			}
			//console.log(this.user.profession);
			var csrfToken = $("meta[name='csrf-token']").attr("content");
			this.dirty = false;
			$.post("/user/edit", {data: this.user, _csrf: csrfToken}, function(result){
				if(this.submitCallback) this.submitCallback(result);
				else{
					alert(result.status == "ok"?"修改成功":"修改失敗");
					if(this.$parent.UpdateUserInfo) this.$parent.UpdateUserInfo(this.user);
				}
			}.bind(this));
		}
	}
}
</script>

<style lang="scss" scoped>
@import "../scss/main.scss";

.user-info-editor{
	width: 600px;
	max-width: 100%;
	margin: auto;
	.info-container{
		display: flex;
		justify-content: flex-start;
		align-items: flex-end;
		flex-wrap: wrap;
		.info-box{
			padding: 0px 5px;
			margin: 0px 5px;
			width: 100%;
			@include pad-width(){
				width: auto;
			}
		}
		.grow{
			flex-grow: 1;
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
		background-color: #dddddd;
		border-radius: 5px;
		padding: 10px;
		margin: 5px 0px;
		text-align: center;
		cursor: pointer;
	}
	.remark{
		font-size: 1em;
		color: red;
		padding: 20px 10px;
		.remark-check{
			color: black;
			display: inline-block;
		}
		input[type="checkbox"]{
			position: relative;
			top: 4px;
			width: 20px;
			height: 20px;
		}
	}
	.canNotEmpty:before{
		color: red;
		content: "*";
	}
	input{
		border-radius: 5px;
		padding: 5px;
		width: 100%;
		border: 1px solid #dddddd;
		font-size: 1.1em;
	}
	select{
		border-radius: 5px;
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