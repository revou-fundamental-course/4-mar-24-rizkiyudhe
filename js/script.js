function hitung() {
  let bb = parseFloat(document.getElementById("bb").value);
  let tb = parseFloat(document.getElementById("tb").value);
  let bmi = bb / (tb * tb);
  let hasil = bmi.toFixed(2);
  var ktr;
  document.getElementById("hasil").innerHTML = hasil;

  if (bmi < 18.15) {
    ktr = "Kekurangan Berat Badan";
  } else if ((bmi) => 18.15 && bmi <= 24.9) {
    ktr = "Normal (ideal)";
  } else if ((bmi) => 25.0 && bmi <= 29.9) {
    ktr = "Kelebihan Berat Badan";
  } else {
    ktr = "Obesitas (kegemukan)";
  }

  document.getElementById("keterangan").innerHTML = ktr;
}
