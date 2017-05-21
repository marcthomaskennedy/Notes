describe("Controller", () => {
    let model;
    let view;

    beforeAll(() => {
        model = new Model();
        view = new View();
    });
    afterAll(() => {
        localStorage.clear();
    });
    describe("Test Controller.addNewNote() method", () => {
        it("Should throw a TypeError", () => {
            expect(() => {
                Controller.addNewNote(model, view, true)
            }).toThrowError(TypeError);
        });
        it("Should be of length 1", () => {
            Controller.addNewNote(model, view, "Hello, world!");
            const data = model.getAllNotes();
            expect(data.length).toBe(1);
        });
    });
    describe("Test Controller.getNotes() method", () => {
        it("Should be an Array", () => {
            const data = Controller.getNotes(model);
            expect(data).toEqual(jasmine.any(Array));
        });
        it("Should be of length 2", () => {
            model.add({content: "Hello, Controller!"});
            const data = Controller.getNotes(model);
            expect(data.length).toBe(2);
        });
    });
});
