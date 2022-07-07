function* foo(x) {
  const result = x * (yield "Hello");
  return result;
}

const it = foo();
const { value } = it.next();

console.log(value);
