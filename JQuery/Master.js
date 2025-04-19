class Master {
    user = "guest";

    constructor(u) {
        this.user = u;

        console.log("Welcome to Master App" + this.user);
    }

    welcome(u) {
        return ` Welcome ${this.user} ${u} `;
    }
}

const app2 = new Master("Ducat 1");
console.log(app2.welcome("Student"));