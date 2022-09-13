let typeracerButton = document.getElementById("typefast-typeracer-start")

// handles typeracer button press
typeracerButton.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["typeracer.js"] // later make this a file for typeracer.js
    });
});

/*




to do tomorrow or later tonight
put in the first word as we are doing now
then on the intervals (set interval on mdn)
we can check if there are the necessary number of children AND the length of the 
children nodes or something? if there isn't skip (The user has not selected the input field)
otherwise, put in the next letter. repeat every 1ms



*/