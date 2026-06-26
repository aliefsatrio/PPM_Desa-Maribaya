export type Penduduk = { id: number; nama: string; nik: string; jenis_kelamin: string; alamat: string; usia: number };
export type VisiMisi = { id: number; visi: string; misi: string };
export type Berita = { id: number; judul: string; thumbnail: string; konten: string; tanggal: string };
export interface Apbdes {
    id: number;
    tahun: number;
    pendapatan: number;
    belanja: number;
    pembiayaan: number;
}