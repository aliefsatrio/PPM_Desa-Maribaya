import type { LucideIcon } from 'lucide-react';

export type User = {
  id: string;
  name: string;
  email: string;
  role: 'Administrator';
  avatarUrl: string;
};

export type FieldType = 'text' | 'number' | 'textarea' | 'select' | 'date' | 'image';

export type FormField<T> = {
  name: keyof T & string;
  label: string;
  type?: FieldType;
  placeholder?: string;
  options?: string[];
  required?: boolean;
};

export type ModuleConfig<T extends { id?: string | number }> = {
  key: string;
  title: string;
  description: string;
  path: string;
  icon: LucideIcon;
  fields: FormField<T>[];
  columns: Array<keyof T & string>;
  searchKeys: Array<keyof T & string>;
  createDefault: () => T;
};

export type CrudService<T extends { id?: string | number }> = {
  getAll: () => Promise<T[]>;
  getById: (id: string | number) => Promise<T | undefined>;
  create: (payload: T) => Promise<T>;
  update: (id: string | number, payload: T) => Promise<T>;
  delete: (id: string | number) => Promise<void>;
};
