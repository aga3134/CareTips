var util = {};

util.NumberWithCommas = function(x){
	if(!x) return "";
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

util.StrCodeToInt = function(str){
	if(!str) return 0;
	var sum = 0;
	for(var i=0;i<str.length;i++){
		sum += str.charCodeAt(i);
	}
	return sum;
};

util.ColorCategory = function(size, light, saturate){
	if(!light) light = 0.7;
	if(!saturate) saturate = 0.6;
	var step = 360.0/size;
	var arr = [];
	for(var i=0;i<size;i++){
		arr.push(d3.hsl(i*step,saturate,light));
	}
	return function(i){return arr[i].toString();};
};

util.GetUrlParameter = function(){
	var queryStr = window.location.search.substring(1);
	var paramArr = queryStr.split('&');

	var result = {};
	for (var i=0; i<paramArr.length; i++) {
		var param = paramArr[i].split('=');
		result[param[0]] = param[1];
	}
	return result;
};

util.GoToAnchor = function(name, offset, callback){
	var anchor = $('[name="' + name + '"]');
	if(anchor.length == 0){
		anchor = $('a[id="' + name + '"]');
	}
	if(anchor.length > 0){
		$('html').animate({
			scrollTop: anchor.offset().top+offset
		}, 500, callback);
		return false;
	}
	return true;
};

util.SetupAnchorScroll = function(offset){
	$('a').click(function(){
		var href = $.attr(this, 'href');
		if(href){
			var scroll = $("html").scrollTop();
			var index= href.indexOf("#");
			return util.GoToAnchor(href.substr(index+1),offset);
		}
		return false;
	});
};

module.exports = util;