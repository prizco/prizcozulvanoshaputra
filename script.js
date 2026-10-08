console.log("Portfolio berhasil dijalankan!");


// Tahun footer otomatis
const footer = document.querySelector("footer p");

const year = new Date().getFullYear();

footer.innerHTML =
    `© ${year} Nama Kamu. All Rights Reserved.`;