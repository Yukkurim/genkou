
function exportPDF(container) {
    const doc = new window.jspdf.jsPDF({
        orientation: "portrait",
        unit: "pt",
        format: "a4"
    });

    doc.setFont("YuGothic", "normal");
    const lines = container.innerText.split("\n");
    let y = 40;

    lines.forEach(line => {
        doc.text(line, 40, y);
        y += 20;
    });

    doc.save("genkou.pdf");
}
