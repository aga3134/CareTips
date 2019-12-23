<template lang="html">
<div class="case-list-thumb">
	<svg ref="svg"></svg>
	<div class="info-text" ref="infoText"></div>
</div>
</template>

<script>
var g_Util = require("../js/util");
var g_SvgGraph = require("../js/svgGraph");

export default {
	props: ["data"],
	data: function () {
		return {
			
		};
	},
	created: function(){
		window.addEventListener('resize', this.DrawThumb);
		//需等vue component完整建立後再畫圖
		setTimeout(function(){
			this.DrawThumb();
		}.bind(this),10);
	},
	methods: {
		DrawThumb: function(){
			var totalNum = this.data.D1Num+this.data.D2Num+this.data.D3Num+this.data.D4Num;
			var data = [];
			data.push({"key":"環境問題", "value":this.data.D1Num});
			data.push({"key":"心理社會問題", "value":this.data.D2Num});
			data.push({"key":"生理問題", "value":this.data.D3Num});
			data.push({"key":"健康行為問題", "value":this.data.D4Num});

			var param = {};
			var svg = d3.select(this.$refs.svg);
			param.selector = this.$refs.svg;
			param.textInfo = this.$refs.infoText;
			param.value = "value";
			param.key = "key";
			param.data = data;
			param.inRadius = 30;
			param.color = function(i){
				var arr = ["#FFA5A4","#DEE885","#85CAE8","#C089E8"];
				return arr[i];
			};
			param.infoFn = function(d){
				var num = d.data.value.toFixed(0);
				return d.data.key+" "+num+"項";
			};
			g_SvgGraph.PieChart(param);
		}
	}
}
</script>

<style lang="scss">
@import "../scss/variable.scss";
@import "../scss/mixin.scss";


.case-list-thumb{
	position: relative;
	width: 100%;
	height: 100%;
	svg{
		width: 100%;
		height: 100%;
	}
	.info-text{
		position: absolute;
		text-align: center;
		bottom: 0px;
		width: 100%;
	}
}
</style>