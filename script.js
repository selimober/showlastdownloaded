chrome.commands.onCommand.addListener(function(command) {
   if (command === 'show-last-download') {
       showLastDownload();
   }
});

function showLastDownload() {
    chrome.downloads.search({orderBy: ["-endTime"]}, gotDownloadList)
}

function gotDownloadList(downloadIds) {
   if (downloadIds && downloadIds[0]) {
       chrome.downloads.show(downloadIds[0].id);
   }
}
