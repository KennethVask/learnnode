let bool = true;
console.log(bool);
bool = false;
console.log(bool);
bool = true && false; //AND
bool = false && true;
bool = false && false;
bool = true && true;
console.log(bool);
bool = true || false; // OR
bool = false || true; // OR
bool = false || false; // OR
bool = true || true; // OR
console.log(bool);
bool = !true; //NOT
console.log(bool);
bool = !false; //NOT
console.log(bool);

bool = true;
bool = (true && false || true) && !(false || true && false);
console.log(bool);

bool = 10 > 5;
bool = 10 < 5;
bool = 10 > 10;
bool = 10 < 10;
bool = 10 == 10;
bool = '10' == 10; // not strict will convert and check
bool = '10' === 10; // strict will check if types match before valuse
bool = 10 >= 10;
bool = 10 <= 10;
bool = '10' != 10;
bool = '10' !== 10;
bool = [] == '';
bool = [1,2,3] == 1;
console.log(bool);
