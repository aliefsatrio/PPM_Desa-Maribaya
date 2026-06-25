export type BpjsPbi = { id: number; nama: string; nik: string; alamat: string; status: string };
export type BantuanTahunan = { id: number; nama: string; nik: string; alamat: string; tahun: number };
export type Stunting = { id: number; nama_anak: string; umur: number; jenis_kelamin: string; tinggi_badan: number; status: string };
export type Penduduk = { id: number; nama: string; nik: string; jenis_kelamin: string; alamat: string; usia: number };
export type KartuKeluarga = { id: number; nomor_kk: string; kepala_keluarga: string; alamat: string; jumlah_anggota: number };
export type Perkawinan = { id: number; nama: string; nik: string; status: 'Kawin' | 'Cerai' | 'Belum Kawin' | 'Kawin Tidak Tercatat' };
export type VisiMisi = { id: number; visi: string; misi: string };
export type Berita = { id: number; judul: string; thumbnail: string; konten: string; tanggal: string };
