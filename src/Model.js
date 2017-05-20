class Model {
    constructor() {
        if (!localStorage.notes) {
            this.notes = JSON.stringify([]);
        }
    }
}
