// multiReturnInArray

function clac(a, b) {
    res1 = a + b;
    res2 = a - b;
    res3 = a * b;
    res = a / b;

    return [res1, res2, res3, res4];
}
let results = clac(20, 10);

for (result of results) {
    console.log(result);
}