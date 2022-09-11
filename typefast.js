console.log("far")

// it's reading from dom of the page?
let button = document.getElementById("typefast-typeracer-start")

console.log(button.id)

let nodelist = document.querySelectorAll(".gameView div")
console.log(nodelist.length)

function test() 
{
    console.log("testttttt")
}

button.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: test
    });
  });

// its cause there is no gameview yet as we are not in game. make it inject on button click