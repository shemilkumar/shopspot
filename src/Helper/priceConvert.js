export const priceConvert = (price, decimal = 0) => {
  const dollarIndValue = 82;

  const nf = new Intl.NumberFormat(navigator.language, {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: decimal,
    roundingIncrement: 5,
  });

  const convertedPrice = nf.format(price * dollarIndValue);

  return convertedPrice;
};
