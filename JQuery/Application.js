class Application {

    static user = "user1";
    email = "user@google.com";#
    pass = "12345";

    constructor() {
        console.log("Hello App");
    }

    welcome() {
        return "welcome user";
    }

    static test() {
        return "welcome testing user";
    }

}
console.log(Application.user);