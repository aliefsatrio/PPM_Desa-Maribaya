import type { BantuanTahunan, Berita, BpjsPbi, KartuKeluarga, Penduduk, Perkawinan, Stunting, VisiMisi } from '../types/modules';

export const bpjsData: BpjsPbi[] = [
  { id: 1, nama: 'Siti Aminah', nik: '3201014401900001', alamat: 'Dusun Mekar Sari RT 01', status: 'Aktif' },
  { id: 2, nama: 'Rahmat Hidayat', nik: '3201011502880002', alamat: 'Dusun Sukamaju RT 03', status: 'Aktif' },
  { id: 3, nama: 'Neng Rosidah', nik: '3201015205760003', alamat: 'Dusun Cibiru RT 02', status: 'Verifikasi' }
];

export const bpntData: BantuanTahunan[] = [
  { id: 1, nama: 'Asep Saepudin', nik: '3201011201700004', alamat: 'Dusun Mekar Sari RT 04', tahun: 2026 },
  { id: 2, nama: 'Dewi Kartika', nik: '3201016006810005', alamat: 'Dusun Sukamaju RT 01', tahun: 2026 },
  { id: 3, nama: 'Ujang Suherman', nik: '3201010505650006', alamat: 'Dusun Cibiru RT 06', tahun: 2025 }
];

export const pkhData: BantuanTahunan[] = [
  { id: 1, nama: 'Tati Hartati', nik: '3201015204820007', alamat: 'Dusun Mekar Sari RT 02', tahun: 2026 },
  { id: 2, nama: 'Dadang Mulyana', nik: '3201010903740008', alamat: 'Dusun Sukamaju RT 05', tahun: 2025 },
  { id: 3, nama: 'Yayah Rohayah', nik: '3201016201690009', alamat: 'Dusun Cibiru RT 01', tahun: 2026 }
];

export const bltData: BantuanTahunan[] = [
  { id: 1, nama: 'Maman Suparman', nik: '3201012102600010', alamat: 'Dusun Mekar Sari RT 05', tahun: 2026 },
  { id: 2, nama: 'Euis Komariah', nik: '3201014804710011', alamat: 'Dusun Sukamaju RT 07', tahun: 2026 },
  { id: 3, nama: 'Heri Hermawan', nik: '3201010303840012', alamat: 'Dusun Cibiru RT 03', tahun: 2025 }
];

export const pstnData: BantuanTahunan[] = [
  { id: 1, nama: 'Kokom Komalasari', nik: '3201014705650013', alamat: 'Dusun Mekar Sari RT 06', tahun: 2026 },
  { id: 2, nama: 'Jajang Nurjaman', nik: '3201010111750014', alamat: 'Dusun Sukamaju RT 04', tahun: 2025 },
  { id: 3, nama: 'Ai Nurhayati', nik: '3201015602800015', alamat: 'Dusun Cibiru RT 05', tahun: 2026 }
];

export const stuntingData: Stunting[] = [
  { id: 1, nama_anak: 'Nabila Putri', umur: 3, jenis_kelamin: 'Perempuan', tinggi_badan: 86, status: 'Pendampingan' },
  { id: 2, nama_anak: 'Raka Pratama', umur: 4, jenis_kelamin: 'Laki-laki', tinggi_badan: 92, status: 'Pemantauan' },
  { id: 3, nama_anak: 'Aulia Fitri', umur: 2, jenis_kelamin: 'Perempuan', tinggi_badan: 79, status: 'Membaik' }
];

export const pendudukData: Penduduk[] = [
  { id: 1, nama: 'Agus Salim', nik: '3201011201900016', jenis_kelamin: 'Laki-laki', alamat: 'Dusun Mekar Sari RT 01', usia: 36 },
  { id: 2, nama: 'Rina Marlina', nik: '3201015803940017', jenis_kelamin: 'Perempuan', alamat: 'Dusun Sukamaju RT 02', usia: 31 },
  { id: 3, nama: 'Fajar Nugraha', nik: '3201010404030018', jenis_kelamin: 'Laki-laki', alamat: 'Dusun Cibiru RT 04', usia: 23 }
];

export const kkData: KartuKeluarga[] = [
  { id: 1, nomor_kk: '3201011201900001', kepala_keluarga: 'Agus Salim', alamat: 'Dusun Mekar Sari RT 01', jumlah_anggota: 4 },
  { id: 2, nomor_kk: '3201015803940002', kepala_keluarga: 'Rina Marlina', alamat: 'Dusun Sukamaju RT 02', jumlah_anggota: 3 },
  { id: 3, nomor_kk: '3201010404030003', kepala_keluarga: 'Fajar Nugraha', alamat: 'Dusun Cibiru RT 04', jumlah_anggota: 5 }
];

export const perkawinanData: Perkawinan[] = [
  { id: 1, nama: 'Agus Salim', nik: '3201011201900016', status: 'Kawin' },
  { id: 2, nama: 'Rina Marlina', nik: '3201015803940017', status: 'Belum Kawin' },
  { id: 3, nama: 'Tatang Sutarman', nik: '3201010505750019', status: 'Kawin Tidak Tercatat' },
  { id: 4, nama: 'Eni Roheni', nik: '3201014608700020', status: 'Cerai' }
];

export const visiMisiData: VisiMisi[] = [
  {
    id: 1,
    visi: 'Terwujudnya desa yang maju, transparan, sejahtera, dan berdaya saing melalui pelayanan publik yang responsif.',
    misi: 'Meningkatkan kualitas pelayanan administrasi desa, memperkuat pemberdayaan masyarakat, mengembangkan ekonomi lokal, serta menjaga tata kelola pemerintahan yang akuntabel.'
  }
];

export const beritaData: Berita[] = [
  {
    id: 1,
    judul: 'Musyawarah Desa Menetapkan Prioritas Pembangunan 2026',
    thumbnail: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80',
    konten: 'Pemerintah desa bersama BPD dan perwakilan warga membahas prioritas pembangunan tahun berjalan.',
    tanggal: '2026-06-10'
  },
  {
    id: 2,
    judul: 'Posyandu Balita dan Lansia Digelar Serentak',
    thumbnail: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80',
    konten: 'Kegiatan posyandu rutin dilaksanakan untuk meningkatkan kualitas kesehatan masyarakat desa.',
    tanggal: '2026-06-16'
  }
];

export const dashboardSeries = {
  penduduk: [
    { tahun: '2022', laki: 1680, perempuan: 1610 },
    { tahun: '2023', laki: 1735, perempuan: 1668 },
    { tahun: '2024', laki: 1810, perempuan: 1736 },
    { tahun: '2025', laki: 1890, perempuan: 1817 },
    { tahun: '2026', laki: 1964, perempuan: 1886 }
  ],
  bantuan: [
    { nama: 'BPJS', total: 1240 },
    { nama: 'BPNT', total: 420 },
    { nama: 'PKH', total: 368 },
    { nama: 'BLT', total: 246 },
    { nama: 'PSTN', total: 152 }
  ],
  stunting: [
    { bulan: 'Jan', total: 34 },
    { bulan: 'Feb', total: 31 },
    { bulan: 'Mar', total: 28 },
    { bulan: 'Apr', total: 25 },
    { bulan: 'Mei', total: 22 },
    { bulan: 'Jun', total: 19 }
  ]
};
