describe("Controller", () => {
    let model;

    beforeAll(() => {
        model = new Model();
    });
    afterAll(() => {
        localStorage.clear();
    });
    describe("Test Controller.init() method", () => {

    });
    describe("Test Controller.addNewNote() method", () => {

    });
    describe("Test Controller.getNotes() method", () => {
        it("Should be an Array", () => {
            const data = Controller.getNotes();
            expect(data).toEqual(jasmine.any(Array));
        });
        it("Should be an empty Array", () => {
            const data = Controller.getNotes();
            expect(data.length).toBe(0);
        });
        it("Should be of length 1", () => {
            model.add({content: "Hello, Controller!"});
            const data = Controller.getNotes();
            expect(data.length).toBe(1);
        });
    });
});
