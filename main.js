/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define, $, brackets */

define(function (require, exports, module) {
    "use strict";

    var CommandManager = brackets.getModule("command/CommandManager"),
        Commands       = brackets.getModule("command/Commands"),
        MVM            = brackets.getModule("view/MainViewManager"),
        EU             = brackets.getModule("utils/ExtensionUtils"),
        NodeDomain     = brackets.getModule("utils/NodeDomain"),
        extDir         = EU.getModulePath(module) + "prefs/";

    var csDomain  = new NodeDomain("cheatsheetdomain", EU.getModulePath(module, "node/cheatSheetDomain")),
        prefs;

    function currentFileChangeListener(e, newFile, newPanel, oldFile, oldPanel) {
        // don't open a cheatsheet if we're just switching between panels or closing the last file
        if (newFile !== null && newPanel === oldPanel && newPanel !== 'second-pane') {
            var newFileExt = newFile._name.split(".").slice(-1)[0],
                oldFileExt = (oldFile === null) ? null : oldFile._name.split(".").slice(-1)[0];

            // don't re-open a cheatsheet
            if (newFileExt !== oldFileExt) {

                // don't open cheatsheets for temporary views (not in working set)
                if (MVM.getWorkingSet('first-pane').indexOf(newFile) !== -1) {

                    // don't try to open a cheatsheet for an extension we haven't set
                    if (prefs[newFileExt] !== undefined) {

                        // only execute if both panes are open
                        if (MVM.getPaneCount() === 2) {
                            CommandManager.execute(Commands.FILE_OPEN, {
                                fullPath:  extDir + prefs[newFileExt],
                                silent: true,
                                paneId: 'second-pane'
                            });

                            MVM.setActivePaneId('first-pane');
                            MVM.focusActivePane();
                        }
                    }
                }
            }
        }
    }

    csDomain.exec('readJSONFile', extDir + 'preferences.json')
            .done(function(obj) {
                prefs = obj;
                $(MVM).on("currentFileChange", currentFileChangeListener);
            });

});