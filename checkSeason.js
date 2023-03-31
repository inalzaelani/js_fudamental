function checkSeason(bulan) {
    switch(bulan) {
        case "Januari":
        case "Februari":
        case "Desember":
            return "Musim Dingin";
        case "Maret":
        case "April":
        case "Mei":
            return "Musim Semi";
        case "Juni":
        case "Juli":
        case "Agustus":
            return "Musim Panas";
        case "September":
        case "Oktober":
        case "November":
            return "Musim Gugur";
        default:
            return "Bulan yang dimasukkan tidak valid";
    }
}

// Contoh penggunaan fungsi
var bulan = "Mei";
var musim = checkSeason(bulan);
console.log("Bulan " + bulan + " adalah " + musim);