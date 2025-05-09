
function saveContent(content) {
    document.cookie = "genkou=" + encodeURIComponent(content) + ";path=/";
}

function loadContent() {
    let match = document.cookie.match(/(?:^|;)\s*genkou=([^;]*)/);
    return match ? decodeURIComponent(match[1]) : "";
}

function saveToFile(content) {
    const blob = new Blob([content], { type: "text/plain" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "document.genkou";
    a.click();
}

function handleLoadFile(e, container) {
    const file = e.target.files[0];
    if (!file) return;
    if (!file.name.endsWith(".genkou") && !file.name.endsWith(".nogen")) {
        alert("不正なファイル形式です。");
        return;
    }

    const reader = new FileReader();
    reader.onload = () => {
        try {
            if (file.name.endsWith(".nogen")) {
                container.innerText = decrypt(reader.result);
                container.contentEditable = false;
            } else {
                container.innerText = reader.result;
                container.contentEditable = true;
            }
        } catch {
            alert("ファイルが破損しています。");
        }
    };
    reader.readAsText(file);
}
