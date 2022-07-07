let x = 1;

function* foo() {
  x++;
  yield;
  console.log(x);
}

function bar() {
  x++;
}

let it = foo();

it.next();
bar();
it.next();
