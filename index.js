function togglePlaylist(playlistId) {
    const playlist = document.getElementById(playlistId);
    const videoContainer = playlist.querySelector(".video-container");
    videoContainer.style.display =
        videoContainer.style.display === "block" ? "none" : "block";
}

function addHtmlElement() {
    const input = document.getElementById("htmlInput");
    const output = document.getElementById("output-container");
    const htmlContent = input.value.trim();

    if (htmlContent) {
    const div = document.createElement("div");
    div.innerHTML = htmlContent;
    output.appendChild(div);
    input.value = "";
    }
}