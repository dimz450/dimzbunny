function tampilkanMotivasi() {
  const motivasi = [
    "Tetap semangat, sukses sudah menunggumu!",
    "Kamu hebat, jangan ragu untuk terus maju!",
    "Jangan berhenti, setiap usaha ada hasilnya!",
    "Kesuksesan dimulai dari langkah kecil!",
    "Berani gagal, berani sukses!"
  ];
  const acak = motivasi[Math.floor(Math.random() * motivasi.length)];
  alert(acak);
}
