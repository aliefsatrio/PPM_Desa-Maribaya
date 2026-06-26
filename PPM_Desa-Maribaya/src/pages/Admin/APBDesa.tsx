import {
  Landmark,
  Wallet,
  TrendingUp,
} from "lucide-react";

import { Card } from "../../components/common/Card";
import { CrudPage } from "./CrudPage";

import {
  apbdesConfig,
  moduleServices,
} from "../../services/modules";

import { apbdesData } from "../../data/dummyData";
import { formatNumber } from "../../utils/format";

export default function ApbdesPage() {
  const totalPendapatan = apbdesData.reduce(
    (total, item) => total + item.pendapatan,
    0
  );

  const totalBelanja = apbdesData.reduce(
    (total, item) => total + item.belanja,
    0
  );

  const totalPembiayaan = apbdesData.reduce(
    (total, item) => total + item.pembiayaan,
    0
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">
          Data APBDes
        </h1>

        <p className="mt-2 text-slate-500">
          Kelola data Anggaran Pendapatan dan Belanja Desa.
        </p>
      </div>

      {/* Statistik */}
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        <Card className="p-5">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-slate-500">
                Total Pendapatan
              </p>

              <p className="mt-3 text-2xl font-semibold text-emerald-600">
                Rp {formatNumber(totalPendapatan)}
              </p>
            </div>

            <div className="rounded-lg bg-emerald-100 p-3 text-emerald-700">
              <Wallet size={24} />
            </div>
          </div>
        </Card>

        <Card className="p-5">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-slate-500">
                Total Belanja
              </p>

              <p className="mt-3 text-2xl font-semibold text-rose-600">
                Rp {formatNumber(totalBelanja)}
              </p>
            </div>

            <div className="rounded-lg bg-rose-100 p-3 text-rose-700">
              <TrendingUp size={24} />
            </div>
          </div>
        </Card>

        <Card className="p-5">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-slate-500">
                Total Pembiayaan
              </p>

              <p className="mt-3 text-2xl font-semibold text-sky-600">
                Rp {formatNumber(totalPembiayaan)}
              </p>
            </div>

            <div className="rounded-lg bg-sky-100 p-3 text-sky-700">
              <Landmark size={24} />
            </div>
          </div>
        </Card>
      </div>

      {/* CRUD */}
      <CrudPage
        config={apbdesConfig}
        service={moduleServices.apbdes}
      />
    </div>
  );
}