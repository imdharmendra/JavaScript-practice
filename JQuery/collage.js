class Collage {
    data = "Main";
    constructor() {
        console.log("Main class");
    }
    welcome1() {
        return "This is welcome method";
    }
}
class CollageSub extends Collage {
    data = "Main";

    constructor() {
        console.log("Sub Class");
    }
    welcome2() {
        return "This is welcome method 123";
    }
}
const app = new CollageSub();

console.log(app.welcome1());
console.log(app.welcome2());