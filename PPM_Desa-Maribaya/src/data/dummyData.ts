import type {  Apbdes, Berita, Penduduk, VisiMisi } from '../types/modules';

export const pendudukData: Penduduk[] = [
  { id: 1, nama: 'Agus Salim', nik: '3201011201900016', jenis_kelamin: 'Laki-laki', alamat: 'Dusun Mekar Sari RT 01', usia: 36 },
  { id: 2, nama: 'Rina Marlina', nik: '3201015803940017', jenis_kelamin: 'Perempuan', alamat: 'Dusun Sukamaju RT 02', usia: 31 },
  { id: 3, nama: 'Fajar Nugraha', nik: '3201010404030018', jenis_kelamin: 'Laki-laki', alamat: 'Dusun Cibiru RT 04', usia: 23 }
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
export const apbdesData: Apbdes[] = [
  {
    id: 1,
    tahun: 2025,
    pendapatan: 2500000000,
    belanja: 2300000000,
    pembiayaan: 200000000,
  },
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