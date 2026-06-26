
import { Area, AreaChart, Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { dashboardSeries } from '../../data/dummyData';
import { Card } from '../common/Card';

export function DashboardCharts() {
  return (
    <div className="grid gap-6 xl:grid-cols-3">
      <Card className="p-6 xl:col-span-2">
        <div className="mb-5">
          <h2 className="text-base font-semibold text-slate-950">Grafik Penduduk per Tahun</h2>
          <p className="text-sm text-slate-500">Perbandingan penduduk laki-laki dan perempuan.</p>
        </div>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={dashboardSeries.penduduk}>
              <defs>
                <linearGradient id="laki" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0d9bdd" stopOpacity={0.35} />
                  <stop offset="95%" stopColor="#0d9bdd" stopOpacity={0.02} />
                </linearGradient>
                <linearGradient id="perempuan" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#14b8a6" stopOpacity={0.35} />
                  <stop offset="95%" stopColor="#14b8a6" stopOpacity={0.02} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="tahun" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip />
              <Area type="monotone" dataKey="laki" name="Laki-laki" stroke="#0d9bdd" fill="url(#laki)" strokeWidth={2} />
              <Area type="monotone" dataKey="perempuan" name="Perempuan" stroke="#14b8a6" fill="url(#perempuan)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <Card className="p-6">
        <div className="mb-5">
          <h2 className="text-base font-semibold text-slate-950">Grafik Data Stunting</h2>
          <p className="text-sm text-slate-500">Tren kasus dalam enam bulan.</p>
        </div>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={dashboardSeries.stunting}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="bulan" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip />
              <Area type="monotone" dataKey="total" name="Total" stroke="#f97316" fill="#fed7aa" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <Card className="p-6 xl:col-span-3">
        <div className="mb-5">
          <h2 className="text-base font-semibold text-slate-950">Grafik Penerima Bantuan</h2>
          <p className="text-sm text-slate-500">Ringkasan penerima bantuan sosial desa.</p>
        </div>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={dashboardSeries.bantuan}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="nama" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip />
              <Bar dataKey="total" name="Total Penerima" fill="#0d9bdd" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
}