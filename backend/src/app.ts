import express from "express";
import cors from "cors";

import pendudukRoutes from "./routes/wargaRoute";
// import jenisbantuanRoutes from "./routes/jenisBantuanRoutes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/penduduk", pendudukRoutes);
// app.use("/jenisbantuan", jenisbantuanRoutes);

export default app;