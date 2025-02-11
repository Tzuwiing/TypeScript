let message: string = "Hello, TypeScript!";

let nama: string = "Fathan";
let angka: number = 10;

let isAdmin: boolean = true;

let data: any = "Bisa String, Bisa Number, Bisa objek";

console.log({ message });
console.log({ nama });
console.log({ angka });
console.log({ isAdmin });
console.log({ data });

function tambah (a: number, b: number): number {
    return a + b;
}

console.log(tambah(1, 2));