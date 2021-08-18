
let gitSheet = document.getElementById("git_Sheet");

gitSheet.addEventListener("click", async () => {

  chrome.windows.create({ url: chrome.runtime.getURL("popups/git_popup.html"), type: 
  "popup", height : 800, width : 500 });
});
