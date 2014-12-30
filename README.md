# Brackets Cheat Sheet
Keeps a user-defined cheat sheet in the second pane. You can define a cheat sheet for any kind of file (e.g. .py, .sass) - just keep it defined in the ```prefs/preferences.json``` and make sure that the cheat sheet file is also in the ```prefs/``` folder.

The path for these files must be inside the extension's directory,
from the menu click `Help -> Show Extentions folder`, navigate to `user/brackets-cheatsheet/prefs`.

## running it
- two panes must be open
- the file you want the cheat sheet to run with must be part of the working set (not temporary)
- the files must be defined properly (as you would expect)

If you reopen Brackets and the files are all in the same working set (usually the left pane), then move them to the right pane and it should be working again. I'll try to fix that in the future... maybe.

## examples of prefs/preferences.json files
```javascript
{
	"html": "html_sheet.html",
	"css": "css_sheet.css",
	"js": "js_sheet.js",
	"coffee": "coffee_sheet.coffee",
	"sass": "sass_sheet.sass"
}
```

The directory structure would be as follows (again, click `Help -> Show Extentions folder`, navigate to `user/brackets-cheatsheet/`):
```
+ node
|--- cheatSheetDomain.js
+ prefs
|--- preferences.json
|--- html_sheet.html
|--- css_sheet.css
|--- js_sheet.js
|--- coffee_sheet.coffee
|--- sass_sheet.sass
main.js
```

Of course, the cheat sheet file itself does not have to be the type that you're using for; for example:

```javascript
{
	"html": "html_sheet.txt",
	"css": "css_sheet.css"
}
```

Similarly, its directory structure would be identical.
