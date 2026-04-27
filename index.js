function togglePlaylist(playlistId) {
    const playlist = document.getElementById(playlistId);
    const videoContainer = playlist.querySelector(".video-container");
    videoContainer.style.display =
        videoContainer.style.display === "flex" ? "none" : "flex";
}

function formatURL(url) {
    if (url.includes("iframe")) return url;

    const isPlaylist = url.includes("playlist");
    
    const [list, si] = isPlaylist ?
        url.split('?')[1].split('&'):
        url.split('/')[3].split('?');
    
    const embed = isPlaylist ? 
        `playlist?${si}&amp;${list}`:
        `${list}?${si}`;

    return `<iframe src="https://youtube.com/embed/${embed}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture; gyroscope; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
}

function addHtmlElement() {
    const input = document.getElementById("htmlInput");
    const output = document.getElementById("output-container");

    const url = input.value.trim();
    if (!url.includes("youtu")) return;


    const div = document.createElement("span");
    div.innerHTML = formatURL(url);
    div.style.margin = "0 2px"
    output.appendChild(div);
    input.value = "";
}