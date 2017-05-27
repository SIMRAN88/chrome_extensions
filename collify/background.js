chrome.extension.onMessage.addLIstener{
	funtion(request,sender,sendResponse){
		if(request.action === "prefs")
		{
			var perfString = localStorage.prefs;
			if(perfString === undefined){
				sendResponse(undefined)
				}
				else{
					sendResponse(JSON.pasre(localStorage.prefs));

				}
			}
		});

function click(e){
	chrome.tabs.query({
		currentWindow:true, active:true}, function(tabs){
			console.log("background.js : click()");
			var specTab = tabs[0];
			chrome.tabs.insertCSS(specTab.id, {file:"style.css"});
			chrome.tabs.executeScript(specTab.id, {file:"spinner.js"});
	        chrome.tabs.executeScript(specTab.id, {file:"script.js"});
	});
}
chrome.browserAction.onClicked.addListener(click);