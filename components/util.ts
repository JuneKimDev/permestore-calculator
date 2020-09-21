export const roundDownWithPrecision = (n: number, p = 0) => {
  const precisionConst = 10 ** p;
  return Math.ceil(n / precisionConst) * precisionConst;
};

export const formatNumberKRW = (n: number) =>
  new Intl.NumberFormat('ko-KR', {
    style: 'currency',
    currency: 'KRW',
  }).format(n);

export const formatNumber = (n: number) => new Intl.NumberFormat().format(n);
