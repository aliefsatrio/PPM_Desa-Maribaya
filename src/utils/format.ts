export const formatNumber = (value: number) => new Intl.NumberFormat('id-ID').format(value);

export const titleCase = (value: string) =>
  value
    .replace(/_/g, ' ')
    .replace(/\w\S*/g, (text: string) => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase());
