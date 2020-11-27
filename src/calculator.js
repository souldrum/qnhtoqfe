const mmInHPa = 0.750062;
const inchInHg = 0.02953;

const inHgFromHPA = (value) => {
  if (value === 1013) {
    return 29.92;
  }

  return +(value * inchInHg).toFixed(2);
};

module.exports.calculateByHPA = (value) => {
  const inHg = inHgFromHPA(value);
  return {
    hPa: value,
    inHg: inHg,
    mmHg: Math.round(value * mmInHPa),
  };
};
