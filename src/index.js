const { calculateByHPA } = require("./calculator");

const hPaInput = document.getElementById("hPa");
const inHgInput = document.getElementById("inHg");
const mmHgInput = document.getElementById("mmHg");

const pressureValues = {
  hPa: 0,
  inHg: 0,
  mmHg: 0,
};

fillPressureValues();

hPaInput.addEventListener("keyup", (event) => {
  const hPa = event.target.value;
  const result = calculateByHPA(hPa);
  pressureValues.hPa = result.hPa;
  pressureValues.inHg = result.inHg;
  pressureValues.mmHg = result.mmHg;
  fillPressureValues();
});

inHgInput.addEventListener("keyup", (event) => {
  const inHg = event.target.value;
  calculateByinHg(inHg);
  fillPressureValues();
});

mmHgInput.addEventListener("keyup", (event) => {
  const mmHg = event.target.value;
  calculateBymmHg(mmHg);
  fillPressureValues();
});

const mmInInch = 25.4;
const inchInHg = 0.02953;
const mmInHPa = 0.750062;

function calculateByinHg(value) {
  pressureValues.inHg = value;
  pressureValues.hPa = Math.round(value / inchInHg);
  pressureValues.mmHg = Math.round(value * mmInInch);
}
function calculateBymmHg(value) {
  pressureValues.mmHg = value;
  pressureValues.hPa = Math.round(value / mmInHPa);
  pressureValues.inHg = (value / mmInInch).toFixed(2);
}
function fillPressureValues() {
  hPaInput.value = pressureValues.hPa;
  inHgInput.value = pressureValues.inHg;
  mmHgInput.value = pressureValues.mmHg;
}
