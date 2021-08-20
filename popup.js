const sheets = document.querySelectorAll('button');

let currentWindow='';

for (const sheet of sheets){
console.log(sheet.id)
 sheet.addEventListener("click", async () => {
    try {
      // on efface le popup actif avant d'en créer un nouveau
      removeCurrentWindow();

      // on crée le nouveau popup
      currentWindow = await chrome.windows.create({ 
        url: chrome.runtime.getURL(`popups/${sheet.id}.html`), 
        type: "popup",
        height : 800,
         width : 500 });
    
      // on enregistre l'objet crée dans storage pour pouvoir récuperer son Id et l'effacer plus atrd
      chrome.storage.sync.set({ currentWindow: currentWindow });
    } catch (error){
      console.error(error)
    }
    
  });
}

// fonction qui se charge d'effacer le popup
const removeCurrentWindow = ()=> { 
  chrome.storage.sync.get(['currentWindow'], function(result) {
    currentWindow.id && chrome.windows.remove(result.currentWindow.id)
  }); 
}


