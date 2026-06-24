import { Link, useParams } from "react-router-dom";

const layananData = [
  {
    slug: "surat-pengantar",
    title: "Surat Pengantar",
    desc: "Layanan untuk pengajuan surat pengantar dari kelurahan.",
    file: "/dokumen/surat-pengantar.pdf",
    requirements: [
      "Fotokopi KTP",
      "Fotokopi KK",
      "Surat pengantar RT/RW",
      "Mengisi formulir permohonan",
    ],
  },
  {
    slug: "kependudukan",
    title: "Layanan Kependudukan",
    desc: "Layanan administrasi data kependudukan masyarakat.",
    file: "/dokumen/kependudukan.pdf",
    requirements: [
      "Fotokopi KTP",
      "Fotokopi KK",
      "Dokumen pendukung sesuai kebutuhan",
    ],
  },
  {
    slug: "dtks",
    title: "DTKS",
    desc: "Layanan terkait Data Terpadu Kesejahteraan Sosial.",
    file: "/dokumen/dtks.pdf",
    requirements: [
      "Fotokopi KTP",
      "Fotokopi KK",
      "Surat keterangan tidak mampu jika diperlukan",
    ],
  },
  {
    slug: "aspirasi-warga",
    title: "Aspirasi Warga",
    desc: "Layanan untuk menyampaikan kritik, saran, dan aspirasi masyarakat.",
    file: "/dokumen/aspirasi-warga.pdf",
    requirements: ["Nama lengkap", "Nomor HP aktif", "Isi aspirasi atau keluhan"],
  },
  {
    slug: "pengajuan-bantuan",
    title: "Pengajuan Bantuan",
    desc: "Layanan untuk pengajuan bantuan sosial atau bantuan masyarakat.",
    file: "/dokumen/pengajuan-bantuan.pdf",
    requirements: [
      "Fotokopi KTP",
      "Fotokopi KK",
      "Surat keterangan pendukung",
      "Dokumen tambahan sesuai jenis bantuan",
    ],
  },
];

export default function DetailLayanan() {
  const { slug } = useParams();

  const layanan = layananData.find((item) => item.slug === slug);

  if (!layanan) {
    return (
      <main className="min-h-screen bg-slate-50 px-4 py-20">
        <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8 text-center shadow-sm">
          <h1 className="text-2xl font-bold text-slate-800">
            Layanan tidak ditemukan
          </h1>

          <p className="mt-3 text-slate-500">
            Halaman layanan yang kamu cari belum tersedia.
          </p>

          <Link
            to="/infografis"
            className="mt-6 inline-block rounded-lg bg-green-600 px-5 py-2 text-sm font-semibold text-white hover:bg-green-700"
          >
            Kembali ke Infografis
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <Link
            to="/infografis"
            className="text-sm font-semibold text-green-700 hover:underline"
          >
            ← Kembali ke Infografis
          </Link>

          <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-green-700">
            Layanan Kelurahan
          </p>

          <h1 className="mt-3 text-3xl font-bold text-slate-900 md:text-5xl">
            {layanan.title}
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500 md:text-base">
            {layanan.desc}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 lg:col-span-2">
            <h2 className="text-2xl font-bold text-slate-800">
              Persyaratan
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Berikut dokumen yang perlu disiapkan sebelum mengajukan layanan.
            </p>

            <div className="mt-6 space-y-3">
              {layanan.requirements.map((item, index) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-xl bg-slate-50 p-4"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100 text-sm font-bold text-green-700">
                    {index + 1}
                  </div>

                  <p className="text-sm font-medium text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-xl font-bold text-slate-800">
              Dokumen Layanan
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Silakan unduh formulir atau dokumen pendukung layanan.
            </p>

            <a
              href={layanan.file}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block w-full rounded-lg border border-green-600 px-4 py-3 text-center text-sm font-semibold text-green-700 hover:bg-green-50"
            >
              Lihat PDF
            </a>

            <a
              href={layanan.file}
              download
              className="mt-3 block w-full rounded-lg bg-green-600 px-4 py-3 text-center text-sm font-semibold text-white hover:bg-green-700"
            >
              Download PDF
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}