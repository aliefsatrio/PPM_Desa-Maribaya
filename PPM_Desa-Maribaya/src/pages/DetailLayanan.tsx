import { Link, useParams } from "react-router-dom";

const layananData = [
  {
    slug: "aspirasi-warga",
    title: "Aspirasi Warga",
    desc: "Layanan untuk menyampaikan kritik, saran, dan aspirasi masyarakat.",
    file: "/dokumen/aspirasi-warga.pdf",
    requirements: ["Nama lengkap", "Wilayah RT dan RW", "Isi aspirasi atau keluhan", "Gunakan bahasa yang sopan, santun dan jelas"],
  }
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
              Rules Pengajuan Aspirasi
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Berikut adalah format untuk menyampaikan aspirasi atau keluhan kepada pihak desa.
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
              Pengajuan Aspirasi
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Silakan bisa hubungi nomor WhatsApp berikut untuk mengajukan aspirasi atau keluhan.
              <b>Serta jangan lupa memperkenalkan diri dengan menyebutkan nama dan wilayah RT atau RW tempat tinggalmu. </b>
            </p>

            <a
              href="https://wa.me/6289652848630?text=Halo%20Admin,%20saya%20ingin%20bertanya%20mengenai%20layanan."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block w-full rounded-lg border border-green-600 px-4 py-3 text-center text-sm font-semibold text-green-700 hover:bg-green-50"
            >
              Hubungi via WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}