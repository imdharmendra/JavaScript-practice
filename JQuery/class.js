class Welcome {
    data = "welcome to class";
    name = "user";
    email = "user@ducat.com";
    pass = "12345";

    hello() {
        return "hello class";
    }

    student(name, email) {
        return `Hello ${name} ${email}  :::  ${this.name}  ${this.email} ${this.pass}`;
    }
}

const app = new Welcome;

document.write(`<h1>${app.data}</h1>`);
document.write(`<h1> ${app.name}</h1>`);
document.write(`<h1> ${app.email}</h1>`);
document.write(`<h1> ${app.pass}</h1>`);

document.write(`<h2> ${app.hello()} </h2>`);
document.write(`<h2> ${app.student("Dharmendra", "ds1489352@gmail.com")} </h2>`);