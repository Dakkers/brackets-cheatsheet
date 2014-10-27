/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4,
maxerr: 50, node: true */
/*global */

(function() {
    "use strict";

    var fs = require('fs');

    function readJSONFile(filename) {
        return JSON.parse(fs.readFileSync(filename));
    }

    function init(domainManager) {
        if (!domainManager.hasDomain("cheatsheetdomain"))
            domainManager.registerDomain("cheatsheetdomain", {major: 0, minor: 1});

        domainManager.registerCommand(
            "cheatsheetdomain",
            "readJSONFile",
            readJSONFile,
            false,
            "Reads a JSON file.",
            [{
                name: "filename",
                type: "string",
                description: "The name of the JSON file."
            }],
            [{
                name: "jsonobj",
                type: "object",
                description: "Parsed JSON object."
            }]
        );
    }

    exports.init = init;
}());