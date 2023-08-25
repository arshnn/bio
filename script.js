document.addEventListener(
    "DOMContentLoaded",function(){
        const downloadButton = document.getElementById
        ("downloadButton");

        downloadButton.addEventListener("click", function(){
            const cvPath = "tugas christ.ai";

            const link = document.createElement("a" );
            link.href = cvPath;

            link.download = "Allah.jpg";

            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            });
        });