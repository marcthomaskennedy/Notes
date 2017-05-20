describe("Model", () => {
    let model;

    beforeAll(() => {
        model = new Model();
    });
    afterAll(() => {
        localStorage.clear();
    });
    describe("Test Model.constructor() method", () => {
        it("Should be of type Array", () => {
            const notes = JSON.parse(localStorage.notes);
            expect(notes).toEqual(jasmine.any(Array));
            });
        it("Should be an empty Array", () => {
            const notes = JSON.parse(localStorage.notes);
            expect(notes.length).toBe(0);
        });
        // Should be of type String before JSON.parse
        it("Should be of type Sting", () => {
            expect(localStorage.notes).toEqual(jasmine.any(String));
        });
    });
    describe("Test Model.add() method", () => {
        // Should throw a TypeError if argument is not of type Object
        it("Should throw a TypeError", () => {
            expect(() => {
                model.add(1234)
            }).toThrowError(TypeError);
        });
        it("Should be of length 1", () => {
            model.add({content: "Hello, world!"});
            const data = JSON.parse(localStorage.notes);
            expect(data.length).toBe(1);
        });
    });
    describe("Test Model.getAllNotes() method", () => {
        it("Should be of type Array", () => {
            const notes = JSON.parse(localStorage.notes);
            expect(notes).toEqual(jasmine.any(Array));
        });
        it("Should be of length 2", () => {
            model.add({content: "Hello, world!"});
            const data = JSON.parse(localStorage.notes);
            expect(data.length).toBe(2);
        });
    });
});
