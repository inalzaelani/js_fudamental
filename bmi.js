function countBMI(berat, tinggi) {
    var bmi = berat / Math.pow(tinggi,2);
    return bmi;
}

function chooseBMI(bmi) {
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return "Normal weight";
    } else if (bmi >= 25 && bmi <= 29.9) {
        return "Overweight";
    } else {
        return "Obese";
    }
}

var berat = 70; //kilo
var tinggi = 1.75; //meter
var bmi = countBMI(berat, tinggi);
var kategori = chooseBMI(bmi);
console.log("BMI: " + bmi.toFixed(2) + " (" + kategori + ")");

//Anonymous function
const hitung_bmi = (berat, tinggi) => berat / (tinggi ** 2);

const tentukan_kelompok_berat_badan = (bmi) => {
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi < 25) {
        return "Berat normal";
    } else if (bmi < 30) {
        return "Kegemukan";
    } else {
        return "Obesitas";
    }
};

const berat = 70; // kg
const tinggi = 1.7; // meter

const bmi = hitung_bmi(berat, tinggi);
const kelompok = tentukan_kelompok_berat_badan(bmi);

console.log(`BMI Anda adalah ${bmi.toFixed(2)}, dan Anda termasuk dalam kelompok ${kelompok}`);

// expression fuction
const hitung_bmi = function(berat, tinggi) {
    return berat / (tinggi ** 2);
};

const tentukan_kelompok_berat_badan = function(bmi) {
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi < 25) {
        return "Berat normal";
    } else if (bmi < 30) {
        return "Kegemukan";
    } else {
        return "Obesitas";
    }
};

const berat = 70; // kg
const tinggi = 1.7; // meter

const bmi = hitung_bmi(berat, tinggi);
const kelompok = tentukan_kelompok_berat_badan(bmi);

console.log(`BMI Anda adalah ${bmi.toFixed(2)}, dan Anda termasuk dalam kelompok ${kelompok}`);
