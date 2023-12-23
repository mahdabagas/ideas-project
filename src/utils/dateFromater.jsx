const dateFormater = (tanggal) => {
  let namaBulan = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ].map((bulan) => bulan.toUpperCase());

  let tahun = tanggal.substring(0, 4);
  let bulan = namaBulan[parseInt(tanggal.substring(5, 7)) - 1];
  let tanggalTertentu = tanggal.substring(8, 10);
  return tanggalTertentu + " " + bulan + " " + tahun;
};

export { dateFormater };
