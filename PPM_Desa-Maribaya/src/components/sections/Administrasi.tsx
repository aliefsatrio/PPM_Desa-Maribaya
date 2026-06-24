import React, { useEffect, useState } from "react";

type StatistikItem = {
  label: string;
  value: string | number;
};

const Administrasi: React.FC = () => {
  const [data, setData] = useState<StatistikItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat("id-ID").format(value);
  };

  useEffect(() => {
    const getStatistikPenduduk = async () => {
      try {
        const response = await fetch("http://localhost:5000/penduduk");

        if (!response.ok) {
          throw new Error("Gagal mengambil data statistik penduduk");
        }

        const result = await response.json();

        console.log("HASIL API:", result);

        const statistikData: StatistikItem[] = [
          {
            label: "Penduduk",
            value: formatNumber(result.totalPenduduk || 0),
          },
          {
            label: "Laki-laki",
            value: formatNumber(result.totalLakiLaki || 0),
          },
          {
            label: "Perempuan",
            value: formatNumber(result.totalPerempuan || 0),
          },

        ];

        setData(statistikData);
      } catch (err) {
        console.error(err);
        setError("Data statistik gagal dimuat");
      } finally {
        setLoading(false);
      }
    };

    getStatistikPenduduk();
  }, []);

  return (
    <section className="bg-white px-6 py-20 md:px-20">
      <h2 className="text-4xl font-bold">Administrasi Penduduk</h2>

      <p className="mb-10 mt-2 max-w-2xl text-gray-600">
        Sistem digital yang berfungsi mempermudah pengelolaan data dan informasi
        terkait dengan kependudukan dan pendayagunaannya untuk pelayanan publik
        yang efektif dan efisien.
      </p>

      {loading && (
        <p className="text-gray-500">Memuat data statistik penduduk...</p>
      )}

      {error && !loading && <p className="text-red-500">{error}</p>}

      {!loading && !error && (
        <div className="grid gap-6 md:grid-cols-2">
          {data.map((item, index) => (
            <div key={index} className="flex gap-2">
              <div className="flex h-[58px] min-w-[120px] items-center justify-center rounded-[10px] bg-[#6EA1DF] px-6 text-lg font-bold text-black">
                {item.value}
              </div>

              <div className="flex h-[58px] w-full items-center rounded-[10px] bg-gray-300 px-6 font-medium">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Administrasi;