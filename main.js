/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define, $, brackets */

define(function (require, exports, module) {
    "use strict";

    var CommandManager = brackets.getModule("command/CommandManager"),
		Commands       = brackets.getModule("command/Commands"),
		MVM            = brackets.getModule("view/MainViewManager"),
		EU			   = brackets.getModule("utils/ExtensionUtils");

	$(MVM).on("currentFileChange", function(e, newFile) {
		
		if (newFile !== null) {
			console.log('hello there', newFile._name.split("."));
	        // CommandManager.execute(Commands.FILE_OPEN, {
	        // 	fullPath: '/home/stdako/./cheatsheet/'
	        // });
			console.log(EU.getModulePath(module));
		}
	});
});