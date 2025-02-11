class Mobil {
  private merk: string;
  private readonly tahun: number;

  constructor(merk: string, tahun: number) {
    this.merk = merk;
    this.tahun = tahun;
  }

  info(): string {
    return `Mobil ${this.merk}, Tahun ${this.tahun}`;
  }
}

const mobil2 = new Mobil("Suzuki", 2050);
console.log(mobil2.info());
