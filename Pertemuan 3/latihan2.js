class Kapal {  
    constructor(nama, jenis, panjang, lebar) {
        this.nama = nama;
        this.jenis = jenis;
        this.panjang = panjang;
        this.lebar = lebar;
    }

    infoKapal() {
        return `Kapal ${this.nama} merupakan jenis ${this.jenis} yang berukuran ${this.panjang} x ${this.lebar} m.`;
    }

    aktivitasUtama() {
        return `Kapal ${this.nama} berlayar di lautan.`;
    }
}

class KapalPenumpang extends Kapal {
    constructor(nama, jenis, panjang, lebar, kapasitasPenumpang) {
        super(nama, jenis, panjang, lebar);
        this.kapasitasPenumpang = kapasitasPenumpang;
    }

    infoKapal() {
        return `${super.infoKapal()} Kapal ini memiliki kapasitas ${this.kapasitasPenumpang} orang.`;
    }

    aktivitasUtama() {
        return `Kapal ${this.nama} sedang mengangkut ${this.kapasitasPenumpang} penumpang.`;
    }
}

class KapalBarang extends Kapal {
    constructor(nama, jenis, panjang, lebar, kapasitasBarang) {
        super(nama, jenis, panjang, lebar);
        this.kapasitasBarang = kapasitasBarang;
    }

    infoKapal() {
        return `${super.infoKapal()} Kapal ini dapat membawa ${this.kapasitasBarang} ton barang.`;
    }

    aktivitasUtama() {
        return `Kapal ${this.nama} sedang mengangkut ${this.kapasitasBarang} ton barang.`;
    }
}

class KapalPesiar extends KapalPenumpang {
    constructor(nama, jenis, panjang, lebar, kapasitasPenumpang, fasilitas) {
        super(nama, jenis, panjang, lebar, kapasitasPenumpang);
        this.fasilitas = fasilitas;
    }

    infoKapal() {
        return `${super.infoKapal()} Fasilitas yang tersedia: ${this.fasilitas.join(', ')}.`;
    }

    aktivitasUtama() {
        return `Kapal ${this.nama} sedang berlayar dengan fasilitas mewah seperti ${this.fasilitas.join(', ')}.`;
    }
}

class KapalNelayan extends Kapal {
    constructor(nama, jenis, panjang, lebar, kapasitasIkan) {
        super(nama, jenis, panjang, lebar);
        this.kapasitasIkan = kapasitasIkan;
    }

    infoKapal() {
        return `${super.infoKapal()} Kapal ini digunakan untuk menangkap ikan dengan kapasitas ${this.kapasitasIkan} ton.`;
    }

    aktivitasUtama() {
        return `Kapal ${this.nama} sedang menangkap ikan dengan kapasitas maksimal ${this.kapasitasIkan} ton.`;
    }
}

class KapalSelam extends Kapal {
    constructor(nama, jenis, panjang, lebar, kedalamanOperasi) {
        super(nama, jenis, panjang, lebar);
        this.kedalamanOperasi = kedalamanOperasi;
    }

    infoKapal() {
        return `${super.infoKapal()} Kapal selam ini dapat beroperasi hingga kedalaman ${this.kedalamanOperasi} meter.`;
    }

    aktivitasUtama() {
        return `Kapal selam ${this.nama} sedang beroperasi di kedalaman ${this.kedalamanOperasi} meter di bawah laut.`;
    }
}

class KapalTanker extends Kapal {
    constructor(nama, jenis, panjang, lebar, kapasitasMinyak) {
        super(nama, jenis, panjang, lebar);
        this.kapasitasMinyak = kapasitasMinyak;
    }

    infoKapal() {
        return `${super.infoKapal()} Kapal ini dapat mengangkut ${this.kapasitasMinyak} liter minyak.`;
    }

    aktivitasUtama() {
        return `Kapal ${this.nama} sedang mengangkut ${this.kapasitasMinyak} liter minyak.`;
    }
}

class KapalPatroli extends Kapal {
    constructor(nama, jenis, panjang, lebar, kecepatanMaksimal) {
        super(nama, jenis, panjang, lebar);
        this.kecepatanMaksimal = kecepatanMaksimal;
    }

    infoKapal() {
        return `${super.infoKapal()} Kapal ini dapat melaju dengan kecepatan maksimal ${this.kecepatanMaksimal} knot.`;
    }

    aktivitasUtama() {
        return `Kapal ${this.nama} sedang berpatroli dengan kecepatan maksimal ${this.kecepatanMaksimal} knot.`;
    }
}

class KapalTunda extends Kapal {
    constructor(nama, jenis, panjang, lebar, dayaTarik) {
        super(nama, jenis, panjang, lebar);
        this.dayaTarik = dayaTarik;
    }

    infoKapal() {
        return `${super.infoKapal()} Kapal ini memiliki daya tarik sebesar ${this.dayaTarik} ton.`;
    }

    aktivitasUtama() {
        return `Kapal ${this.nama} sedang menarik kapal lain dengan daya tarik ${this.dayaTarik} ton.`;
    }
}

class KapalLaut extends Kapal {
    constructor(nama, jenis, panjang, lebar, jarakTempuh) {
        super(nama, jenis, panjang, lebar);
        this.jarakTempuh = jarakTempuh;
    }

    infoKapal() {
        return `${super.infoKapal()} Kapal ini mampu menempuh jarak sejauh ${this.jarakTempuh} mil laut.`;
    }

    aktivitasUtama() {
        return `Kapal ${this.nama} sedang berlayar sejauh ${this.jarakTempuh} mil laut.`;
    }
}

const daftarKapal = [
    new KapalPenumpang("Budiono Siregar", "Ferry", 200, 100, 600),
    new KapalBarang("Kargo Nusantara", "Kapal Barang", 250, 120, 1000),
    new KapalPesiar("Surya Bahari", "Kapal Pesiar", 300, 150, 800, ["Kolam Renang", "Restoran", "Spa"]),
    new KapalNelayan("Nelayan Sukses", "Kapal Nelayan", 100, 30, 10),
    new KapalSelam("Explorer Deep", "Kapal Selam", 80, 20, 500),
    new KapalTanker("Pertamina Jaya", "Kapal Tanker", 280, 120, 200000),
    new KapalPatroli("Patroli Laut", "Kapal Patroli", 60, 25, 30),
    new KapalTunda("Tunda Jaya", "Kapal Tunda", 50, 20, 150),
    new KapalLaut("Nusantara Explorer", "Kapal Laut", 150, 40, 5000)
];

for (let kapal of daftarKapal) {
    console.log(kapal.infoKapal());
    console.log(kapal.aktivitasUtama());
    console.log('--------------------------');
}
