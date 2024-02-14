function downloadResume() {
    var resumeUrl = 'MuhammadBilalResume.pdf'; 
    var fileName = 'MuhammadBilalResume.pdf'; 
    var link = document.createElement('a');
    link.href = resumeUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

const clickableDiv = document.getElementsByClassName("blog1")[0];


clickableDiv.addEventListener("click", function() {
    
    window.location.href = "https://medium.com/voice-tech-podcast/how-i-received-google-home-google-assistant-t-shirt-and-200-credit-every-month-for-google-cloud-bc3134b721bb";
});

