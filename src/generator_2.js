function* foo2(x, y) {
  return x * y;
}

const it2 = foo2(2, 2);

const res1 = it2.next();

console.log(res1.value);
