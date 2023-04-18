cordova.define("cordova-plugin-inappupdate.inAppUpdate", function(require, exports, module) {
window.inappupdate = function(task,args,success,error) {
	cordova.exec(success, error, "inAppUpdate", task, args);
};

});
