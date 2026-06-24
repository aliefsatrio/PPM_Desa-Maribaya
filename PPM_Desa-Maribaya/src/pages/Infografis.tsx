import { Link } from "react-router-dom";

const statistik = [
  {
    title: "Jumlah Penduduk",
    value: "12.450",
    desc: "Total penduduk terdata",
  },
  {
    title: "Jumlah KK",
    value: "3.210",
    desc: "Kartu keluarga aktif",
  },
  {
    title: "Laki-laki",
    value: "6.180",
    desc: "Data penduduk laki-laki",
  },
  {
    title: "Perempuan",
    value: "6.270",
    desc: "Data penduduk perempuan",
  },
];

const apb = [
  {
    title: "Pendapatan",
    value: "Rp 1.250.000.000",
    percent: 100,
  },
  {
    title: "Belanja Pemerintahan",
    value: "Rp 350.000.000",
    percent: 28,
  },
  {
    title: "Belanja Pembangunan",
    value: "Rp 520.000.000",
    percent: 42,
  },
  {
    title: "Belanja Pembinaan",
    value: "Rp 230.000.000",
    percent: 18,
  },
  {
    title: "Belanja Pemberdayaan",
    value: "Rp 150.000.000",
    percent: 12,
  },
];

const layanan = [
  {
    title: "Surat Pengantar",
    path: "/layanan/surat-pengantar",
  },
  {
    title: "Layanan Kependudukan",
    path: "/layanan/kependudukan",
  },
  {
    title: "DTKS",
    path: "/layanan/dtks",
  },
  {
    title: "Aspirasi Warga",
    path: "/layanan/aspirasi-warga",
  },
  {
    title: "Pengajuan Bantuan",
    path: "/layanan/pengajuan-bantuan",
  },
];
const bantuanSosial = [
  {
    label: "DTKS",
    value: "2.490",
    satuan: "Jiwa",
  },
  {
    label: "PKH",
    value: "430",
    satuan: "Keluarga Penerima Manfaat",
  },
  {
    label: "BPNT",
    value: "720",
    satuan: "Keluarga Penerima Manfaat",
  },
  {
    label: "BLT",
    value: "185",
    satuan: "Keluarga Penerima Manfaat",
  },
];

export default function Infografis() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-white text-black">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-green-700">
            Data Kelurahan
          </p>

          <h1 className="max-w-3xl text-3xl font-bold leading-tight md:text-5xl">
            Infografis Kelurahan
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-600 md:text-base">
            Halaman ini menampilkan ringkasan data APB, statistik penduduk,
            layanan masyarakat, dan informasi penting lainnya secara sederhana
            agar mudah dipahami oleh warga.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-800">
            Statistik Penduduk
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Ringkasan data penduduk berdasarkan informasi terbaru.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {statistik.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-md"
            >
              <p className="text-sm font-medium text-blue-500">{item.title}</p>

              <h3 className="mt-3 text-3xl font-bold text-gray-900">
                {item.value}
              </h3>

              <p className="mt-2 text-sm text-slate-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 lg:col-span-2">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-slate-800">
                Ringkasan APB
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                Data anggaran pendapatan dan belanja akan ditampilkan dalam
                bentuk ringkasan agar lebih mudah dibaca.
              </p>
            </div>

            <div className="space-y-5">
              {apb.map((item) => (
                <div key={item.title}>
                  <div className="mb-2 flex items-center justify-between gap-4">
                    <div>
                      <p className="font-semibold text-slate-700">
                        {item.title}
                      </p>
                      <p className="text-sm text-slate-500">{item.value}</p>
                    </div>

                    <span className="rounded-full bg-green-50 px-3 py-1 text-sm font-semibold text-black">
                      {item.percent}%
                    </span>
                  </div>

                  <div className="h-3 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className="h-full rounded-full bg-green-600"
                      style={{ width: `${item.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-bold text-slate-800">Layanan Warga</h2>

            <p className="mt-2 text-sm text-slate-500">
              Beberapa layanan yang tersedia untuk masyarakat.
            </p>

            <div className="mt-6 space-y-3">
              {layanan.map((item, index) => (
                <Link
                  to={item.path}
                  key={item.title}
                  className="flex items-center gap-3 rounded-xl bg-slate-50 p-4 transition hover:bg-green-50 hover:shadow-sm"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100 text-sm font-bold text-green-700">
                    {index + 1}
                  </div>

                  <div className="flex-1">
                    <p className="font-medium text-slate-700">{item.title}</p>
                    <p className="text-xs text-slate-400">
                      Klik untuk membuka layanan
                    </p>
                  </div>

                  <span className="text-sm font-bold text-green-700">→</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-slate-800">
              Informasi Lainnya
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              Bagian ini bisa digunakan untuk menampilkan data bantuan sosial,
              pembangunan, kesehatan, pendidikan, UMKM, atau data kelurahan
              lainnya.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 p-5">
            <h3 className="font-bold text-slate-800">Bantuan Sosial</h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Data estimasi penerima bantuan sosial seperti PKH, BPNT, BLT,
              DTKS, dan bantuan lainnya berdasarkan total penduduk 12.450 jiwa.
            </p>

            <div className="mt-5 grid grid-cols-2 gap-3">
              {bantuanSosial.map((item) => (
                <div key={item.label} className="rounded-lg bg-blue-50 p-3">
                  <p className="text-xs font-semibold text-green-700">
                    {item.label}
                  </p>

                  <h4 className="mt-1 text-xl font-bold text-slate-900">
                    {item.value}
                  </h4>

                  <p className="text-xs text-slate-500">{item.satuan}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 p-5">
            <h3 className="font-bold text-slate-800">Pembangunan</h3>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Informasi program pembangunan, infrastruktur, dan kegiatan
              lingkungan.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 p-5">
            <h3 className="font-bold text-slate-800">Kesehatan</h3>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Data posyandu, stunting, kesehatan warga, dan program pelayanan
              kesehatan.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
