import { useEffect } from 'react';
import { useForm, type DefaultValues, type SubmitHandler } from 'react-hook-form';
import type { FormField } from '../../types/common';
import { Button } from '../common/Button';

type DynamicFormProps<T extends Record<string, unknown>> = {
  fields: FormField<T>[];
  defaultValues: T;
  onSubmit: (values: T) => void;
  onCancel: () => void;
  submitLabel?: string;
};

export function DynamicForm<T extends Record<string, unknown>>({ fields, defaultValues, onSubmit, onCancel, submitLabel = 'Simpan' }: DynamicFormProps<T>) {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<T>({ defaultValues: defaultValues as DefaultValues<T> });

  useEffect(() => {
    reset(defaultValues as DefaultValues<T>);
  }, [defaultValues, reset]);

  return (
    <form className="space-y-5" onSubmit={handleSubmit(onSubmit as SubmitHandler<T>)}>
      <div className="grid gap-4 md:grid-cols-2">
        {fields.map((field) => {
          const inputClass = 'mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-primary-400 focus:ring-4 focus:ring-primary-100';
          const error = errors[field.name];
          const common = register(field.name as never, {
            required: field.required ? `${field.label} wajib diisi` : false,
            valueAsNumber: field.type === 'number'
          });

          return (
            <label key={field.name} className={field.type === 'textarea' ? 'md:col-span-2' : ''}>
              <span className="text-sm font-medium text-slate-700">{field.label}</span>
              {field.type === 'textarea' ? (
                <textarea rows={4} className={inputClass} placeholder={field.placeholder} {...common} />
              ) : field.type === 'select' ? (
                <select className={inputClass} {...common}>
                  {field.options?.map((option) => <option key={option} value={option}>{option}</option>)}
                </select>
              ) : (
                <input className={inputClass} type={field.type === 'image' ? 'url' : field.type ?? 'text'} placeholder={field.placeholder} {...common} />
              )}
              {error ? <span className="mt-1 block text-xs text-rose-600">{String(error.message)}</span> : null}
            </label>
          );
        })}
      </div>
      <div className="flex justify-end gap-3 border-t border-slate-100 pt-5">
        <Button type="button" variant="secondary" onClick={onCancel}>Batal</Button>
        <Button type="submit" disabled={isSubmitting}>{submitLabel}</Button>
      </div>
    </form>
  );
}