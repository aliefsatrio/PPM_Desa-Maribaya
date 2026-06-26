import {  Newspaper, Users } from 'lucide-react';
import { DashboardCharts } from '../../components/charts/DashboardCharts';
import { Card } from '../../components/common/Card';
import { beritaData } from '../../data/dummyData';
import { formatNumber } from '../../utils/format';

const stats = [
  { label: 'Total Penduduk', value: 3850, icon: Users, accent: 'text-primary-700 bg-primary-50' },
  { label: 'Total Berita', value: beritaData.length, icon: Newspaper, accent: 'text-indigo-700 bg-indigo-50' }
];

export default function DashboardPage() {
  return (
    <div className="space-y-7">
      <div>
        <p className="text-sm font-medium text-primary-700">Dashboard</p>
        <h1 className="mt-1 text-2xl font-semibold text-slate-950">Ringkasan Administrasi Desa</h1>
        <p className="mt-2 text-sm text-slate-500">Pantau indikator utama web profile dan layanan data desa.</p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;
          return (
            <Card key={item.label} className="p-5 transition hover:-translate-y-0.5 hover:shadow-lg">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm text-slate-500">{item.label}</p>
                  <p className="mt-3 text-2xl font-semibold text-slate-950">{formatNumber(item.value)}</p>
                </div>
                <div className={`rounded-lg p-3 ${item.accent}`}>
                  <Icon size={22} />
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      <DashboardCharts />
    </div>
  );
}