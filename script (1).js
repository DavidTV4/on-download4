const downloadURLInput = document.getElementById('downloadURL');
const addDownloadButton = document.getElementById('addDownload');
const downloadList = document.getElementById('downloadList');
const downloadSpeedDisplay = document.getElementById('speed');
const peakSpeedDisplay = document.getElementById('peak');

let downloads = [];

addDownloadButton.addEventListener('click', () => {
    const url = downloadURLInput.value;
    if (url) {
        addDownloadItem(url);
        downloadURLInput.value = ''; // Clear the input field after adding.
    }
});


function addDownloadItem(url){
  const downloadItem = document.createElement('div');
  downloadItem.className = "downloadItem";
  const fileName = extractFileNameFromURL(url); // You would need a function for extracting this information realistically.
  const p = document.createElement("p");
  p.textContent = fileName;
  const progress = document.createElement('progress'); //replace with more complex progress element later.
  progress.value = 0;
  progress.max = 100;
  downloadItem.appendChild(p);
  downloadItem.appendChild(progress); // Add the progress bar.
  // add buttons
  const buttonPause = document.createElement('button');
  buttonPause.textContent = "Pause";
  const buttonDelete = document.createElement('button');
  buttonDelete.textContent = "Delete";

  downloadItem.appendChild(buttonPause);
  downloadItem.appendChild(buttonDelete);


  downloadList.appendChild(downloadItem);

  // Here is where the complex code for actual download and progress handling would be... (Consider Fetch API)


}


// Dummy Function - replace with robust implementation for extracting file name from url
function extractFileNameFromURL(url){
    return url.substring(url.lastIndexOf('/')+1) //This is highly unreliable, don't use this on a real app.
}