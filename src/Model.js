class Model {
    constructor() {
        if (!localStorage.notes) {
            localStorage.notes = JSON.stringify([]);
        }
    }

    add(obj) {
        if (!(obj.constructor === Object)) {
            throw new TypeError("obj must be of type Object");
        }
        const data = JSON.parse(localStorage.notes);
        data.push(obj);
        localStorage.notes = JSON.stringify(data);
    }
}
