document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("paper-container");
  const saveBtn = document.getElementById("save");
  const loadBtn = document.getElementById("load");
  const exportBtn = document.getElementById("exportPDF");
  const fileInput = document.getElementById("fileInput");
  const instructionBtn = document.getElementById("instruction");
  const popup = document.getElementById("popup");
  const clock = document.getElementById("clock");

  const totalCells = 400;
  const cells = [];

  for (let i = 0; i < totalCells; i++) {
    const cell = document.createElement("div");
    cell.className = "cell";
    cell.contentEditable = true;
    container.appendChild(cell);
    cells.push(cell);
  }

  function getText() {
    return cells.map(c => c.innerText || "").join("");
  }

  function setText(text) {
    [...cells].forEach((c, i) => c.innerText = text[i] || "");
  }

  function saveToFile(text) {
    const blob = new Blob([text], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "document.genkou";
    link.click();
  }

  function handleLoadFile(e) {
    const file = e.target.files[0];
    if (!file) return;
    if (!file.name.endsWith(".genkou")) {
      alert("拡張子が.genkouではありません！");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => setText(reader.result);
    reader.readAsText(file);
  }

  function exportPDF() {
    alert("PDF出力はまだ未実装です。html2pdfなどを導入してください。");
  }

  saveBtn.onclick = () => saveToFile(getText());
  loadBtn.onclick = () => fileInput.click();
  fileInput.onchange = handleLoadFile;
  instructionBtn.onclick = () => popup.classList.toggle("hidden");

  setInterval(() => {
    const now = new Date();
    clock.innerText = now.toLocaleString();
    clock.classList.remove("hidden");
  }, 1000);
});

