// recebendo um input de um generator
function* foo3(x) {
  const result = x * (yield);
  return result;
}

const it3 = foo3(4);
it3.next();
const res3 = it3.next(4);

console.log(res3.value);
