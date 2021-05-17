export function formatPrice(value: number | string): string {
  const parseToString = Number(value);

  return parseToString.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });
}
