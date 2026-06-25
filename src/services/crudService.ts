import type { CrudService } from '../types/common';

const wait = () => new Promise((resolve) => window.setTimeout(resolve, 280));

export const createCrudService = <T extends { id?: string | number }>(initialData: T[]): CrudService<T> => {
  let rows = [...initialData];

  return {
    getAll: async () => {
      await wait();
      return [...rows];
    },
    getById: async (id) => {
      await wait();
      return rows.find((row) => row.id === id);
    },
    create: async (payload) => {
      await wait();
      const nextId = payload.id ?? Math.max(0, ...rows.map((row) => Number(row.id ?? 0))) + 1;
      const nextRow = { ...payload, id: nextId };
      rows = [nextRow, ...rows];
      return nextRow;
    },
    update: async (id, payload) => {
      await wait();
      const nextRow = { ...payload, id };
      rows = rows.map((row) => (row.id === id ? nextRow : row));
      return nextRow;
    },
    delete: async (id) => {
      await wait();
      rows = rows.filter((row) => row.id !== id);
    }
  };
};
