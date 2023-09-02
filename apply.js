const user = {
    name: "Ivan",
    age: 30
}

function getUserInfo(phone) {
    console.log(`My nama is ${this.name}, I am ${this.age}, my number phone ${phone}`);

}

function apply(fn, context, args) {
    const unicId = Date.now().toString();
    context[unicId] = fn;
    const result = context[unicId](...args);
    delete unicId;
    return result
};

apply(getUserInfo, user, ["+374 515 457"]);