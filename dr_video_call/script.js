function startDownload() {


    let progressBar = document.getElementById('progress-bar');
    let progressText = document.getElementById('progress-text');
    let completionMessage = document.getElementById('completion-message');
    let downloadButton = document.getElementById('download-btn');

    let fileSize = 1024 * 1024 * 1024 * 2; // 2 GB (example size)
    let downloadedSize = 0;
    let downloadProgress = 0;

  

    

    function simulateDownload() {
        setTimeout(function () {
            downloadedSize += Math.random() * 1024 * 1024 * 200; // Simulate larger random chunk download (up to 200 MB)
            downloadProgress = (downloadedSize / fileSize) * 100;

            let downloadSpeed = Math.random() * 500000 + 500000; // Simulate higher speed between 500000 to 1000000 KB/s

            progressBar.style.width = downloadProgress + '%';
            progressText.innerHTML = `${Math.floor(downloadProgress)}% | Speed: ${formatSize(downloadedSize)} | Speed: ${formatSize(downloadSpeed)}/s`;

            if (downloadProgress < 100) {
                simulateDownload();
            } else {
                completionMessage.innerHTML = 'Download Complete!';
                downloadButton.disabled = false;
                initiateFileDownload(); // Call function to start the actual download
            }
        }, 100); // Decreased delay for more frequent updates
    }

    // Simulate starting the download
    simulateDownload();
}

function formatSize(bytes) {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes == 0) return '0 Byte';
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
}

function initiateFileDownload() {
    // Replace this URL with the actual URL of your ZIP file
    // let fileURL = 'path/to/your/file.zip';
    let fileURL = 'drfile/drawable.zip';

    // Create a temporary anchor element
    let a = document.createElement('a');
    a.style.display = 'none';

    // Set the download attribute and create a data URI
    a.download = 'drawable.zip';
    a.href = fileURL;

    // Append the anchor to the document, programmatically click it, and remove it
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

function openNewPage() {
    // Replace 'newpage.html' with the URL of the page you want to open
    window.location.href = 'newpage.html';
  }
