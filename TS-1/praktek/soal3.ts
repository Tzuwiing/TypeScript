interface Mahasiswa {
  nama: string;
  umur: number;
  jurusan: string;
}

const mhs1: Mahasiswa = {
  nama: "Jusuf",
  umur: 17,
  jurusan: "Ekonomi",
};

console.log(mhs1.jurusan);
