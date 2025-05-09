
document.addEventListener("DOMContentLoaded", () => {
    const paperContainer = document.getElementById("paper-container");
    const saveBtn = document.getElementById("save");
    const loadBtn = document.getElementById("load");
    const exportBtn = document.getElementById("exportPDF");
    const fileInput = document.getElementById("file-input");
    const instructionBtn = document.getElementById("instruction");
    const popup = document.getElementById("popup");
    const clock = document.getElementById("clock");

    let content = loadContent();
    if (content) paperContainer.innerText = content;

    paperContainer.contentEditable = true;
    paperContainer.focus();

    paperContainer.addEventListener("input", () => {
        if (getSetting("useCookies") === "true") saveContent(paperContainer.innerText);
    });

    saveBtn.onclick = () => saveToFile(paperContainer.innerText);
    loadBtn.onclick = () => fileInput.click();
    fileInput.onchange = (e) => handleLoadFile(e, paperContainer);
    instructionBtn.onclick = () => showInstructions(popup);
    exportBtn.onclick = () => exportPDF(paperContainer);

    if (getSetting("showClock") === "true") {
        clock.classList.remove("hidden");
        setInterval(() => clock.textContent = new Date().toLocaleString(), 1000);
    }
});
