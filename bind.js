const user = {
    name: "Ivan",
    age: 30
}

function getUserInfo(phone) {
    console.log(`My nama is ${this.name}, I am ${this.age}, my number phone ${phone}`);
}

function bind(fn, context, ...rest) {

    return function(...args) {
        const unicId = Date.now().toString();
        context[unicId] = fn;
        const result = context[unicId](...rest.concat(args));
        delete unicId;
        return result;
    }
};

bind(getUserInfo, user, "+374 515 457")()


