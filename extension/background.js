//github uses pushState and not a proper navigation, so this is necessary (http://stackoverflow.com/a/21071357/282834)
chrome.webNavigation.onHistoryStateUpdated.addListener(function (details) {
    chrome.tabs.executeScript(null, {file: 'enhanced-github.js'});
});
