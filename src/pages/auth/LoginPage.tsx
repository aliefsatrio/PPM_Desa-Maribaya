import { ShieldCheck } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '../../components/common/Button';
import { Card } from '../../components/common/Card';
import { useAuthStore } from '../../store/authStore';

type LoginForm = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const [error, setError] = useState('');
  const { login, isAuthenticated } = useAuthStore();
  const navigate = useNavigate();
  const location = useLocation();
  const { register, handleSubmit, formState: { isSubmitting } } = useForm<LoginForm>({
    defaultValues: { email: 'admin@desa.id', password: 'password' }
  });

  if (isAuthenticated) return <Navigate to="/" replace />;

  const onSubmit = async (values: LoginForm) => {
    try {
      setError('');
      await login(values);
      const from = (location.state as { from?: { pathname?: string } } | null)?.from?.pathname ?? '/';
      navigate(from, { replace: true });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login gagal.');
    }
  };

  return (
    <div className="grid min-h-screen bg-[#f8fbff] lg:grid-cols-[1fr_520px]">
      <section className="hidden bg-primary-700 px-12 py-10 text-white lg:flex lg:flex-col lg:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/15">
            <ShieldCheck size={24} />
          </div>
          <div>
            <p className="font-semibold">Admin Desa</p>
            <p className="text-sm text-primary-100">Web Profile Pemerintahan Desa</p>
          </div>
        </div>
        <div className="max-w-2xl">
          <h1 className="text-4xl font-semibold leading-tight">Kelola informasi desa dengan rapi, cepat, dan transparan.</h1>
          <p className="mt-5 text-base leading-7 text-primary-50">Dashboard internal untuk pengelolaan data penduduk, bantuan sosial, stunting, visi misi, dan berita desa.</p>
        </div>
        <p className="text-sm text-primary-100">Frontend dummy siap integrasi API.</p>
      </section>

      <section className="flex items-center justify-center px-5 py-10">
        <Card className="w-full max-w-md p-8">
          <div className="mb-8">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50 text-primary-700">
              <ShieldCheck size={26} />
            </div>
            <h2 className="text-2xl font-semibold text-slate-950">Masuk Admin</h2>
            <p className="mt-2 text-sm text-slate-500">Gunakan akun sementara untuk membuka dashboard.</p>
          </div>
          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
            <label className="block">
              <span className="text-sm font-medium text-slate-700">Email</span>
              <input className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-primary-400 focus:ring-4 focus:ring-primary-100" type="email" {...register('email', { required: true })} />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-slate-700">Password</span>
              <input className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-primary-400 focus:ring-4 focus:ring-primary-100" type="password" {...register('password', { required: true })} />
            </label>
            {error ? <p className="rounded-lg bg-rose-50 px-3 py-2 text-sm text-rose-700">{error}</p> : null}
            <Button className="w-full" type="submit" disabled={isSubmitting}>{isSubmitting ? 'Memproses...' : 'Masuk Dashboard'}</Button>
          </form>
        </Card>
      </section>
    </div>
  );
}
