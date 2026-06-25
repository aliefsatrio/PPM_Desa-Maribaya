# Admin Dashboard Web Profile Desa

Frontend admin dashboard untuk aplikasi Web Profile Desa. Project ini hanya berisi frontend React, TypeScript, Vite, Tailwind CSS, React Router DOM, Axios, Zustand, React Hook Form, TanStack Table, Lucide React Icons, dan Recharts.

## Fitur

- Login frontend dengan mock authentication
- Persist token dan user data di `localStorage`
- Protected route
- Axios interceptor dengan Bearer token
- Layout admin responsive dengan sidebar collapsible
- Dashboard statistik dan grafik Recharts
- CRUD dummy untuk semua modul data
- Search, pagination, tambah, edit, detail, hapus
- Modal form React Hook Form
- Data table TanStack Table
- Loading skeleton, empty state, dan confirmation delete modal

## Menjalankan Project

1. Install dependency:

```bash
npm install
```

2. Salin konfigurasi environment:

```bash
cp .env.example .env
```

3. Jalankan mode development:

```bash
npm run dev
```

4. Buka URL yang ditampilkan Vite.

Login dummy:

- Email: `admin@desa.id`
- Password: `password`

## Catatan Integrasi Backend

File `src/services/axios.ts` sudah siap untuk API sungguhan melalui `VITE_API_BASE_URL`. Saat ini data CRUD memakai dummy service di `src/services/crudService.ts` agar frontend bisa dikembangkan tanpa backend, database, migration, seed, atau API server.

Jika development server terkena pembatasan sandbox pada dependency optimizer, jalankan:

```bash
npm run build
npm run preview
```

Jika setelah perubahan konfigurasi halaman masih putih, hentikan server lalu jalankan:

```bash
npm run dev:force
```

Atau hapus cache Vite `node_modules/.vite`, kemudian jalankan kembali `npm run dev`.
