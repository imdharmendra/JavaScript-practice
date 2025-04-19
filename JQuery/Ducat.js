class Ducat {
  email = "user@gmail.com";
  pass = "12345";
  get getPassword() {
    return this.#pass;
  }
  set setPassword(hack) {
    return (this.#pass = hack);
  }
}
const app = new Ducat();
console.log(app.email);
app.setPassword = "327426";
console.log(app.getPassword);
