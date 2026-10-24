/* ==================================================
   QSOFTWARE — SITE INSTITUCIONAL
   JavaScript compartilhado
   ================================================== */

document.addEventListener("DOMContentLoaded", () => {
    // Atualiza automaticamente o ano do rodapé.
    const anoAtual = document.getElementById("anoAtual");

    if (anoAtual) {
        anoAtual.textContent = new Date().getFullYear();
    }
});