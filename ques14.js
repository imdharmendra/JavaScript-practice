// multiReturnObject

function clac(a, b) {
    res1 = a + b;
    res2 = a - b;
    res3 = a * b;
    res = a / b;

    return {
        r1: res1,
        r2: res2,
        r3: res3,
        r4: res4
    };
}
let results = clac(20, 10);

for (result in results) {
    console.log(results[result]);
}