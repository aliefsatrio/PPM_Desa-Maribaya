import {
  Baby,
  BadgeCheck,
  BookOpenText,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  HeartHandshake,
  Home,
  Newspaper,
  ScrollText,
  Users,
  WalletCards
} from 'lucide-react';
import { bltData, bpjsData, bpntData, kkData, pendudukData, perkawinanData, pkhData, pstnData, stuntingData, visiMisiData, beritaData } from '../data/dummyData';
import type { FormField, ModuleConfig } from '../types/common';
import type { BantuanTahunan, Berita, BpjsPbi, KartuKeluarga, Penduduk, Perkawinan, Stunting, VisiMisi } from '../types/modules';
import { createCrudService } from './crudService';

const currentYear = new Date().getFullYear();
const bantuanFields: FormField<BantuanTahunan>[] = [
  { name: 'nama', label: 'Nama', required: true },
  { name: 'nik', label: 'NIK', required: true },
  { name: 'alamat', label: 'Alamat', type: 'textarea' as const, required: true },
  { name: 'tahun', label: 'Tahun', type: 'number' as const, required: true }
];

export const bpjsConfig: ModuleConfig<BpjsPbi> = {
  key: 'bpjs',
  title: 'BPJS PBI Ketenagakerjaan',
  description: 'Kelola data penerima BPJS PBI Ketenagakerjaan desa.',
  path: '/bpjs',
  icon: BadgeCheck,
  fields: [
    { name: 'nama', label: 'Nama', required: true },
    { name: 'nik', label: 'NIK', required: true },
    { name: 'alamat', label: 'Alamat', type: 'textarea', required: true },
    { name: 'status', label: 'Status', type: 'select', options: ['Aktif', 'Verifikasi', 'Tidak Aktif'], required: true }
  ],
  columns: ['nama', 'nik', 'alamat', 'status'],
  searchKeys: ['nama', 'nik', 'alamat', 'status'],
  createDefault: () => ({ id: Date.now(), nama: '', nik: '', alamat: '', status: 'Aktif' })
};

const bantuanConfig = (key: string, title: string, path: string, icon: ModuleConfig<BantuanTahunan>['icon']): ModuleConfig<BantuanTahunan> => ({
  key,
  title,
  description: `Kelola data penerima ${title} berdasarkan tahun penyaluran.`,
  path,
  icon,
  fields: bantuanFields,
  columns: ['nama', 'nik', 'alamat', 'tahun'],
  searchKeys: ['nama', 'nik', 'alamat', 'tahun'],
  createDefault: () => ({ id: Date.now(), nama: '', nik: '', alamat: '', tahun: currentYear })
});

export const bpntConfig = bantuanConfig('bpnt', 'BPNT', '/bpnt', WalletCards);
export const pkhConfig = bantuanConfig('pkh', 'PKH', '/pkh', HeartHandshake);
export const bltConfig = bantuanConfig('blt', 'BLT', '/blt', BriefcaseBusiness);
export const pstnConfig = bantuanConfig('pstn', 'PSTN', '/pstn', Home);

export const stuntingConfig: ModuleConfig<Stunting> = {
  key: 'stunting',
  title: 'Data Stunting',
  description: 'Pantau data anak dan status penanganan stunting.',
  path: '/stunting',
  icon: Baby,
  fields: [
    { name: 'nama_anak', label: 'Nama Anak', required: true },
    { name: 'umur', label: 'Umur', type: 'number', required: true },
    { name: 'jenis_kelamin', label: 'Jenis Kelamin', type: 'select', options: ['Laki-laki', 'Perempuan'], required: true },
    { name: 'tinggi_badan', label: 'Tinggi Badan', type: 'number', required: true },
    { name: 'status', label: 'Status', type: 'select', options: ['Pendampingan', 'Pemantauan', 'Membaik'], required: true }
  ],
  columns: ['nama_anak', 'umur', 'jenis_kelamin', 'tinggi_badan', 'status'],
  searchKeys: ['nama_anak', 'jenis_kelamin', 'status'],
  createDefault: () => ({ id: Date.now(), nama_anak: '', umur: 0, jenis_kelamin: 'Laki-laki', tinggi_badan: 0, status: 'Pemantauan' })
};

export const pendudukConfig: ModuleConfig<Penduduk> = {
  key: 'penduduk',
  title: 'Data Penduduk Laki-laki dan Perempuan',
  description: 'Kelola data penduduk berdasarkan identitas dan demografi.',
  path: '/penduduk',
  icon: Users,
  fields: [
    { name: 'nama', label: 'Nama', required: true },
    { name: 'nik', label: 'NIK', required: true },
    { name: 'jenis_kelamin', label: 'Jenis Kelamin', type: 'select', options: ['Laki-laki', 'Perempuan'], required: true },
    { name: 'alamat', label: 'Alamat', type: 'textarea', required: true },
    { name: 'usia', label: 'Usia', type: 'number', required: true }
  ],
  columns: ['nama', 'nik', 'jenis_kelamin', 'alamat', 'usia'],
  searchKeys: ['nama', 'nik', 'jenis_kelamin', 'alamat'],
  createDefault: () => ({ id: Date.now(), nama: '', nik: '', jenis_kelamin: 'Laki-laki', alamat: '', usia: 0 })
};

export const kkConfig: ModuleConfig<KartuKeluarga> = {
  key: 'kk',
  title: 'Jumlah Kepala Keluarga',
  description: 'Kelola nomor KK, kepala keluarga, dan jumlah anggota.',
  path: '/kk',
  icon: ScrollText,
  fields: [
    { name: 'nomor_kk', label: 'Nomor KK', required: true },
    { name: 'kepala_keluarga', label: 'Kepala Keluarga', required: true },
    { name: 'alamat', label: 'Alamat', type: 'textarea', required: true },
    { name: 'jumlah_anggota', label: 'Jumlah Anggota', type: 'number', required: true }
  ],
  columns: ['nomor_kk', 'kepala_keluarga', 'alamat', 'jumlah_anggota'],
  searchKeys: ['nomor_kk', 'kepala_keluarga', 'alamat'],
  createDefault: () => ({ id: Date.now(), nomor_kk: '', kepala_keluarga: '', alamat: '', jumlah_anggota: 1 })
};

export const perkawinanConfig: ModuleConfig<Perkawinan> = {
  key: 'perkawinan',
  title: 'Status Perkawinan',
  description: 'Kelola status perkawinan penduduk desa.',
  path: '/perkawinan',
  icon: ChartNoAxesCombined,
  fields: [
    { name: 'nama', label: 'Nama', required: true },
    { name: 'nik', label: 'NIK', required: true },
    { name: 'status', label: 'Status', type: 'select', options: ['Kawin', 'Cerai', 'Belum Kawin', 'Kawin Tidak Tercatat'], required: true }
  ],
  columns: ['nama', 'nik', 'status'],
  searchKeys: ['nama', 'nik', 'status'],
  createDefault: () => ({ id: Date.now(), nama: '', nik: '', status: 'Belum Kawin' })
};

export const visiMisiConfig: ModuleConfig<VisiMisi> = {
  key: 'visimisi',
  title: 'Visi Misi',
  description: 'Kelola arah pembangunan dan misi layanan pemerintahan desa.',
  path: '/visimisi',
  icon: BookOpenText,
  fields: [
    { name: 'visi', label: 'Visi', type: 'textarea', required: true },
    { name: 'misi', label: 'Misi', type: 'textarea', required: true }
  ],
  columns: ['visi', 'misi'],
  searchKeys: ['visi', 'misi'],
  createDefault: () => ({ id: Date.now(), visi: '', misi: '' })
};

export const beritaConfig: ModuleConfig<Berita> = {
  key: 'berita',
  title: 'Berita Desa',
  description: 'Kelola informasi dan publikasi resmi desa.',
  path: '/berita',
  icon: Newspaper,
  fields: [
    { name: 'judul', label: 'Judul', required: true },
    { name: 'thumbnail', label: 'Thumbnail URL', type: 'image', required: true },
    { name: 'konten', label: 'Konten', type: 'textarea', required: true },
    { name: 'tanggal', label: 'Tanggal', type: 'date', required: true }
  ],
  columns: ['judul', 'thumbnail', 'konten', 'tanggal'],
  searchKeys: ['judul', 'konten', 'tanggal'],
  createDefault: () => ({ id: Date.now(), judul: '', thumbnail: '', konten: '', tanggal: new Date().toISOString().slice(0, 10) })
};

export const moduleConfigs = [bpjsConfig, bpntConfig, pkhConfig, bltConfig, pstnConfig, stuntingConfig, pendudukConfig, kkConfig, perkawinanConfig, visiMisiConfig, beritaConfig] as const;

export const moduleServices = {
  bpjs: createCrudService(bpjsData),
  bpnt: createCrudService(bpntData),
  pkh: createCrudService(pkhData),
  blt: createCrudService(bltData),
  pstn: createCrudService(pstnData),
  stunting: createCrudService(stuntingData),
  penduduk: createCrudService(pendudukData),
  kk: createCrudService(kkData),
  perkawinan: createCrudService(perkawinanData),
  visimisi: createCrudService(visiMisiData),
  berita: createCrudService(beritaData)
};
