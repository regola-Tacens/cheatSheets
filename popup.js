
let gitSheet = document.getElementById("git_Sheet");
let CLI_Sheet =document.getElementById("CLI_Sheet");

let currentWindow='';

gitSheet.addEventListener("click", async () => {
  // on retire la fenetre courante
  await removeCurrentWindow();

  currentWindow = await chrome.windows.create({ url: chrome.runtime.getURL("popups/git_popup.html"), type: 
  "popup", height : 800, width : 500 });

  chrome.storage.sync.set({currentWindow: currentWindow});
});

CLI_Sheet.addEventListener("click", async () => {
  await removeCurrentWindow();
  
  currentWindow = await chrome.windows.create({ url: chrome.runtime.getURL("popups/terminal_popup.html"), type: 
  "popup", height : 800, width : 500 });

  chrome.storage.sync.set({currentWindow: currentWindow});
});

  const removeCurrentWindow = ()=> { 
      chrome.storage.sync.get(['currentWindow'], function(result) {
        currentWindow.id && chrome.windows.remove(result.currentWindow.id)
      }); 
  }