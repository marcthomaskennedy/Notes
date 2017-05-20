describe("Model", () => {
    let model;

    beforeAll(() => {
        model = new Model();
    });
    describe("Test Model.init() method", () => {
        it("Should be of type Array", () => {
            //const notes = JSON.parse(model.notes);
                expect(notes.constructor).toBe(jasmine.any(Array));
            });
        it("Should be an empty Array", () => {
            expect().toBe(0);
        });
        it("Should be of type Sting", () => {
            expect(model.notes.constructor).toBe(jasmine.any(String));
        });
    });
    describe("Test Model.add() method", () => {

    });
    describe("Test Model.getAllNotes() method", () => {

    });
});
