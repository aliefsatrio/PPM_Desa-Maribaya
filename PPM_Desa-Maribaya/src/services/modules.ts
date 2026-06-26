import {
  BookOpenText,
  Landmark,
  Newspaper,
  Users,
  
} from 'lucide-react';
import {  pendudukData, visiMisiData, beritaData } from '../data/dummyData';
import type { ModuleConfig } from '../types/common';
import type {  Apbdes, Berita,  Penduduk, VisiMisi } from '../types/modules';
import { createCrudService } from './crudService';
import {apbdesData} from "../data/dummyData";

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

export const apbdesConfig: ModuleConfig<Apbdes> = {
  key: "apbdes",
  title: "APBDes",
  description: "Kelola data Anggaran Pendapatan dan Belanja Desa.",
  path: "/apbdes",
  icon: Landmark,

  fields: [
    {
      name: "tahun",
      label: "Tahun",
      type: "number",
      required: true,
    },
    {
      name: "pendapatan",
      label: "Pendapatan",
      type: "number",
      required: true,
    },
    {
      name: "belanja",
      label: "Belanja",
      type: "number",
      required: true,
    },
    {
      name: "pembiayaan",
      label: "Pembiayaan",
      type: "number",
      required: true,
    },
  ],

  columns: [
    "tahun",
    "pendapatan",
    "belanja",
    "pembiayaan",
  ],

  searchKeys: ["tahun"],

  createDefault: () => ({
    id: Date.now(),
    tahun: new Date().getFullYear(),
    pendapatan: 0,
    belanja: 0,
    pembiayaan: 0,
  }),
};


export const visiMisiConfig: ModuleConfig<VisiMisi> = {
  key: 'visimisi',
  title: 'Visi Misi',
  description: 'Kelola arah pembangunan dan misi layanan pemerintahan desa.',
  path: '/visi-misi',
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
  path: '/admin/berita',
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

export const moduleConfigs = [   pendudukConfig,  apbdesConfig, visiMisiConfig, beritaConfig] as const;

export const moduleServices = {
  penduduk: createCrudService(pendudukData),
  apbdes: createCrudService(apbdesData),
  visimisi: createCrudService(visiMisiData),
  berita: createCrudService(beritaData)
};