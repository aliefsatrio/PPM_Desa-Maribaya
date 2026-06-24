import sotk from "../assets/sotk.png";
import bpd from "../assets/bpd.png";


export default function Profil_desa() {
    return (
        <>
            <div className="py-30 grid grid-cols-2 flex-cols">
                <div className="w-120 mx-auto border border-1px border-[#6EA1DF] hover:-translate-y-1 hover:shadow-xl transition rounded-xl px-6 text-center">
                    <h1 className=" font-bold">Etos Kerja</h1>
                    <div className="w-full py-5">
                        <p className="text-sm font-semibold">1.KERJA ADALAH RAHMAT</p>
                        <span>(Bekerja tulus penuh sara syukur)</span>
                        <p className="text-sm font-semibold">2.KERJA ADALAH AMANAH</p>
                        <span>(Bekerja dengan penuh tanggung jawab)</span>
                        <p className="text-sm font-semibold">3.KERJA ADALAH PANGGILAN</p>
                        <span>(Bekerja Tuntas Penuh Integritas)</span>
                        <p className="text-sm font-semibold">4.KERJA ADALAH AKTUALITAS</p>
                        <span>(Bekerja Keras Penuh Semangat)</span>
                        <p className="text-sm font-semibold">5.KERJA ADALAH IBADAH</p>
                        <span>(Bekerja Serius Penuh Kreatifitas)</span>
                        <p className="text-sm font-semibold">6.KERJA ADALAH SENI</p>
                        <span>(Bekerja Cerdas Penuh Kreatifitas)</span>
                        <p className="text-sm font-semibold">7.KERJA ADALAH KEHORMATAN</p>
                        <span>(Bekerja Tekun Penuh Keunggulan)</span>
                        <p className="text-sm font-semibold">8.KERJA ADALAH PELAYANAN</p>
                        <span>(Bekerja Paripurna Penuh Kerendahan Hati)</span>
                    </div>
                </div>

                <div className="w-120 mx-auto border border-1px border-[#6EA1DF] hover:-translate-y-1 hover:shadow-xl transition rounded-xl px-6 text-center">
                    <h1 className=" font-bold">Visi dan Misi</h1>
                    <div className="w-full py-5">
                        <p className="text-sm font-semibold">1.KERJA ADALAH RAHMAT</p>
                        <span>(Bekerja tulus penuh sara syukur)</span>
                        <p className="text-sm font-semibold">2.KERJA ADALAH AMANAH</p>
                        <span>(Bekerja dengan penuh tanggung jawab)</span>
                        <p className="text-sm font-semibold">3.KERJA ADALAH PANGGILAN</p>
                        <span>(Bekerja Tuntas Penuh Integritas)</span>
                        <p className="text-sm font-semibold">4.KERJA ADALAH AKTUALITAS</p>
                        <span>(Bekerja Keras Penuh Semangat)</span>
                        <p className="text-sm font-semibold">5.KERJA ADALAH IBADAH</p>
                        <span>(Bekerja Serius Penuh Kreatifitas)</span>
                        <p className="text-sm font-semibold">6.KERJA ADALAH SENI</p>
                        <span>(Bekerja Cerdas Penuh Kreatifitas)</span>
                        <p className="text-sm font-semibold">7.KERJA ADALAH KEHORMATAN</p>
                        <span>(Bekerja Tekun Penuh Keunggulan)</span>
                        <p className="text-sm font-semibold">8.KERJA ADALAH PELAYANAN</p>
                        <span>(Bekerja Paripurna Penuh Kerendahan Hati)</span>
                    </div>
                </div>

            </div>

            <div className=" min-h-screen px-6 md:px-10 py-8">

                {/* Title */}
                <h1 className="text-4xl font-bold mb-10">
                    Bagan Desa
                </h1>

                {/* Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Card 1 */}
                    <div>

                        <div className=" rounded-lg h-150 w-full flex items-center justify-center">
                            <img src={sotk} alt="Struktur Organisasi Pemerintahan Desa" className="w-full h-full object-contain" />
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div>

                        <div className="rounded-lg h-150 w-full flex items-center justify-center">
                            <img src={bpd} alt="Struktur Organisasi Badan Permusyawaratan Desa" className="w-full h-full object-contain" />
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}


