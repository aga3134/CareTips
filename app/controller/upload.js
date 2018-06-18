var fs   = require("fs-extra");
var multer = require("multer");
var sharp = require("sharp");

var upload = {};

var storage = multer.memoryStorage()

var fileFilter = function(req, file, cb){
	var allowArr = ["image/jpeg","image/png","image/gif"];
	if(allowArr.includes(file.mimetype)) {
		cb(null, true);
	}
	else {
		cb(null, false);
	}
};

upload.UploadImageToMem = multer({
	storage: storage,
	limits: {
		fileSize: 1024 * 1024 * 2
	},
	fileFilter: fileFilter
}).single("uploadImage");

upload.GetImageType = function(file){
	switch(file.mimetype){
		case "image/jpeg":
			return "jpg";
			break;
		case "image/png":
			return "png";
			break;
		case "image/gif":
			return "gif";
			break;
		default:
			return "";
	}
}

//param: buffer, newPath, newName, thumb {name, w, h}, succFunc, failFunc
upload.SaveImage = function(param){
	var dir = __dirname+"/../..";
	if (!fs.existsSync(dir+param.newPath)){
		fs.mkdirpSync(dir+param.newPath);
	}
	var image = sharp(param.buffer);
	var newName = param.newPath+param.newName;
	var thumbName = param.newPath+param.thumb.name;
	
	image.toFile(dir+newName)
	.then(function(info){
		//console.log(info);
		if(param.thumb){
			image.resize(param.thumb.w,param.thumb.h)
			.crop(sharp.strategy.entropy).toFile(dir+thumbName)
			.then(function(info){
				//console.log(info);
				param.succFunc({newName: newName, thumbName: thumbName});
			}).catch(function(err){
				console.log(err);
				param.failFunc({err:"save thumbnail fail"});
			});
		}
	}).catch(function(err){
		console.log(err);
		param.failFunc({err:"save image fail"});
	});

};

//param: saveName, content, succFunc, failFunc
upload.SaveHTML = function(param){
	fs.writeFile(param.saveName, param.content, function(err) {
		if(err){
			console.log(err);
			param.failFunc({err:"save html fail"});
		}
		else param.succFunc({filename:param.saveName});
	}); 
};

upload.DeletePath = function(path, callback) {
	var rmdirAsync = function(path, callback) {
		fs.readdir(path, function(err, files) {
			if(err) {
				// Pass the error on to callback
				callback(err, []);
				return;
			}
			var wait = files.length,
				count = 0,
				folderDone = function(err) {
				count++;
				// If we cleaned out all the files, continue
				if( count >= wait || err) {
					fs.rmdir(path,callback);
				}
			};
			// Empty directory to bail early
			if(!wait) {
				folderDone();
				return;
			}
			
			// Remove one or more trailing slash to keep from doubling up
			path = path.replace(/\/+$/,"");
			files.forEach(function(file) {
				var curPath = path + "/" + file;
				fs.lstat(curPath, function(err, stats) {
					if( err ) {
						callback(err, []);
						return;
					}
					if( stats.isDirectory() ) {
						rmdirAsync(curPath, folderDone);
					} else {
						fs.unlink(curPath, folderDone);
					}
				});
			});
		});
	};
	
	fs.lstat(path, function(err, stats) {
		if( err ) {
			callback(err, []);
			return;
		}
		if(stats.isDirectory()) {	//delete folder
			rmdirAsync(path, callback);
		}
		else fs.unlink(path, callback);	//delete file
	});
	
}

module.exports = upload;